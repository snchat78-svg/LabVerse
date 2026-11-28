import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
async function readCsv(path) {
  const source = await readFile(new URL(path, root), "utf8");
  const records = [];
  let row = [], value = "", quoted = false;
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"' && source[index + 1] === '"') { value += '"'; index += 1; }
      else if (char === '"') quoted = false;
      else value += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") { row.push(value); value = ""; }
    else if (char === "\n") { row.push(value.replace(/\r$/, "")); records.push(row); row = []; value = ""; }
    else if (char !== "\r") value += char;
  }
  if (quoted) throw new Error(path + ": unterminated CSV quote");
  if (value.length || row.length) { row.push(value); records.push(row); }
  const headers = records.shift();
  assert.ok(headers?.length, path + ": missing headers");
  assert.equal(new Set(headers).size, headers.length, path + ": duplicate headers");
  for (const record of records) assert.equal(record.length, headers.length, path + ": inconsistent column count");
  return records.filter(record => record.some(cell => cell.length))
    .map(record => Object.fromEntries(headers.map((header, index) => [header, record[index] ?? ""])));
}

const [audit, readback, sourceRecheck, endpointRegister, methodBody, taskMatrix, taskTrace] = await Promise.all([
  readCsv("data/catalogues/rbse_xi_chemistry_unit7_pra19_source_audit_2026_11_28.csv"),
  readCsv("data/catalogues/rbse_xi_chemistry_unit7_pra19_official_source_readback_2026_11_28.csv"),
  readCsv("data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_chemistry_official_unit_endpoint_register_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_chemistry_method_body_evidence_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv"),
  readCsv("data/catalogues/rbse_xi_chemistry_practical_traceability.csv")
]);

const taskId = "RBSE-XI-CHEM-PRA-19";
assert.equal(audit.length, 11, "Expected 11 source/safety audit decisions");
assert.equal(new Set(audit.map(row => row.audit_record_id)).size, 11, "Audit IDs must be unique");
assert.ok(audit.every(row => row.rbse_task_id === taskId), "All audit rows must retain PRA-19");
assert.ok(audit.every(row => row.assigned_item_ids === "" && row.assigned_reagent_ids === ""), "No item or reagent IDs may be assigned");
assert.ok(audit.every(row => row.safety_boundary.includes("NON_EXECUTABLE") || row.safety_boundary.includes("NO_") || row.safety_boundary.includes("HIGH_CONSEQUENCE") || row.safety_boundary.includes("CYANIDE") || row.safety_boundary.includes("VIOLENT") || row.safety_boundary.includes("PHASE_2_BLOCKED")), "Every row must retain a restrictive safety boundary");
assert.ok(audit.every(row => row.rights_boundary.includes("LINK_AND_CITATION_ONLY") || row.rights_boundary.includes("RBSE_SOURCE_REFERENCE_ONLY") || row.rights_boundary.includes("CREATE_ORIGINAL")), "Every row must retain a rights boundary");
assert.ok(audit.every(row => row.expert_review_status.includes("PENDING") || row.expert_review_status === "DOCUMENTARY_ONLY"), "Expert approval must remain pending");
const material = audit.find(row => row.audit_record_id === "MATERIAL_PANEL");
assert.match(material.source_fact_summary, /100 mg.*30 mL.*sodium metal/i);
assert.match(material.inventory_decision, /NO_CURRENT_BOM_OR_STOCK_PROOF/);
const exclusion = audit.find(row => row.audit_record_id === "SAMPLE_EXCLUSION");
assert.match(exclusion.source_fact_summary, /chloroform.*carbon tetrachloride/i);
assert.match(exclusion.safety_boundary, /EXPLOSION/);
const byproducts = audit.find(row => row.audit_record_id === "N_S_BYPRODUCTS");
assert.match(byproducts.source_fact_summary, /HCN\/H2S/i);
const waste = audit.find(row => row.audit_record_id === "SILVER_WASTE_WARNING");
assert.match(waste.safety_boundary, /EXPLOSION/);
const rights = audit.find(row => row.audit_record_id === "RIGHTS_BOUNDARY");
assert.match(rights.rights_boundary, /ALL_RIGHTS_RESERVED/);
assert.ok(!/heat the ignition tube|drop the tube|add sodium to water|step\s*\d/i.test(audit.map(row => row.source_fact_summary).join("\n")), "Audit must not contain operational procedure steps");

assert.equal(readback.length, 2, "Keep RBSE and NCERT as separate source records");
const rbse = readback.find(row => row.source_record_type === "RBSE_BOARD_SYLLABUS");
const ncert = readback.find(row => row.source_record_type === "NCERT_OFFICIAL_LABORATORY_MANUAL");
assert.ok(rbse && ncert);
assert.match(rbse.source_identity_state, /OFFICIAL_SERVER_BYTE_IDENTITY_NOT_TESTED/);
assert.equal(rbse.source_sha256, "a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5");
assert.match(ncert.source_url, /kelm207\.pdf/);
assert.match(ncert.source_identity_state, /LOCAL_PDF_BYTES_SHA256_AND_BYTE_LENGTH_NOT_CAPTURED/);
assert.match(ncert.visual_review_state, /PP116_118_119_120/);
assert.match(ncert.visual_review_state, /P117_SCREENSHOT_TIMEOUT/);
assert.match(ncert.verified_scope_statement, /possible curriculum support/);

const recheck = sourceRecheck.find(row => row.rbse_task_id === taskId);
const endpoint = endpointRegister.find(row => row.rbse_task_id === taskId);
const method = methodBody.find(row => row.rbse_task_id === taskId);
const matrix = taskMatrix.find(row => row.rbse_task_id === taskId);
const task = taskTrace.find(row => row.rbse_task_id === taskId);
assert.ok(recheck && endpoint && method && matrix && task, "All canonical PRA-19 registers must resolve");
assert.match(recheck.method_body_review_state, /SOURCE_SPECIFIC_AUDIT_2026_11_28/);
assert.match(endpoint.body_inspection_state, /SOURCE_SPECIFIC_HAZARD_AND_RIGHTS_AUDIT_2026_11_28/);
assert.match(method.body_review_state, /EXPERIMENT_7\.2_LASSAIGNE_TEXT_REVIEWED/);
assert.match(method.rights_boundary, /LINK_AND_CITATION_ONLY/);
assert.match(matrix.physical_lab_status, /BLOCKED/);
assert.equal(matrix.candidate_manual_reagent_record_ids, "");
assert.equal(matrix.candidate_manual_product_or_output_reference_ids, "");
assert.match(matrix.source_task_gap_note, /possible curriculum support only/);
assert.match(task.safety_status, /NON_EXECUTABLE_TEACHER_REFERENCE_ONLY/);
assert.match(task.rights_status, /LINK_AND_CITATION_ONLY/);
assert.match(task.expert_review_status, /PENDING_QUALIFIED/);
assert.match(task.implementation_status, /NO_SCIENCE_MODEL/);
assert.match(task.unresolved_gaps, /not an exact p\.116 material-list match/);

console.log("LabVerse Chemistry PRA-19 Unit 7 Experiment 7.2 source/safety/rights audit: PASS");
console.log("Records: 11 audit decisions; 2 separate source readbacks; canonical PRA-19 registers synchronized.");
console.log("Safety: sodium fusion, gas generation, solvents and silver/ammonia/acid waste remain blocked; no IDs or procedures promoted.");
