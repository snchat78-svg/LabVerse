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
  if (quoted) throw new Error(path + ": unterminated quoted field");
  if (value.length || row.length) { row.push(value); records.push(row); }
  const headers = records.shift();
  assert.ok(headers?.length, path + ": missing headers");
  assert.equal(new Set(headers).size, headers.length, path + ": duplicate headers");
  return records.filter(record => record.some(cell => cell.length))
    .map(record => Object.fromEntries(headers.map((header, index) => [header, record[index] ?? ""])));
}

const [crosswalk, methodEvidence, endpointRegister, sourceRecheck, readback] = await Promise.all([
  readCsv("data/catalogues/rbse_xi_chemistry_unit5_apparatus_reagent_candidates_2026_11_27.csv"),
  readCsv("data/catalogues/rbse_chemistry_method_body_evidence_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_chemistry_official_unit_endpoint_register_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_xi_chemistry_unit5_official_hindi_source_readback_2026_11_27.csv")
]);
const inventory = JSON.parse(await readFile(new URL("dashboard/data/inventory.json", root), "utf8"));
const chemistry = inventory.subjects?.chemistry ?? {};
const apparatus = new Map((chemistry.inventory ?? []).map(item => [item.id, item]));
const reagents = new Map((chemistry.reagents ?? []).map(item => [item.id, item]));

assert.equal(crosswalk.length, 34, "Unit 5 crosswalk must contain 34 decision rows");
const counts = crosswalk.reduce((result, row) => {
  result[row.rbse_task_id] = (result[row.rbse_task_id] ?? 0) + 1;
  return result;
}, {});
assert.deepEqual(counts, {
  "RBSE-XI-CHEM-PRA-10": 8,
  "RBSE-XI-CHEM-PRA-11": 13,
  "RBSE-XI-CHEM-PRA-12": 13
}, "Unit 5 per-task decision row counts changed");
const key = row => [row.rbse_task_id, row.candidate_reference_type, row.candidate_reference_id, row.candidate_relationship_class, row.method_requirement].join("|");
assert.equal(new Set(crosswalk.map(key)).size, crosswalk.length, "Duplicate task/candidate/method decisions");
assert.equal(crosswalk.filter(row => row.candidate_reference_id).length, 18, "Candidate-backed row count changed");
assert.equal(crosswalk.filter(row => !row.candidate_reference_id).length, 16, "Explicit no-ID row count changed");
assert.equal(crosswalk.filter(row => row.candidate_reference_type === "APPARATUS" && row.candidate_reference_id).length, 12);
assert.equal(crosswalk.filter(row => row.candidate_reference_type === "REAGENT" && row.candidate_reference_id).length, 6);
assert.equal(new Set(crosswalk.filter(row => row.candidate_reference_id).map(row => row.candidate_reference_id)).size, 12);

for (const row of crosswalk) {
  assert.match(row.ncert_official_pdf_url, /^https:\/\/www\.ncert\.nic\.in\/.*khlm205\.pdf$/);
  assert.match(row.ncert_primary_source, /official NCERT-hosted Hindi edition/);
  assert.equal(row.current_procurement_status, "NOT_AUTHENTICATED_NO_CURRENT_BOM_OR_PHYSICAL_STOCK_PROOF");
  assert.equal(row.rights_status, "NCERT_ALL_RIGHTS_RESERVED_LINK_AND_CITATION_ONLY_NO_COPYING_OF_PROTECTED_TEXT_TABLES_OR_FIGURES");
  assert.equal(row.approval_status, "NO_CHEMISTRY_TEACHER_OR_LAB_SAFETY_APPROVAL_RECORDED");
  assert.ok(row.source_evidence_summary.trim());
  assert.ok(row.source_reported_quantity.trim());
  assert.equal(row.candidate_link_status, row.candidate_reference_id ? "NOT_PROMOTED" : "NO_ITEM_ID_ASSIGNED_NO_PROMOTION");
  assert.ok(!/PROMOTED|LIVE_USE_APPROVED/.test(row.candidate_link_status));
  if (row.candidate_reference_type === "APPARATUS") {
    const item = apparatus.get(row.candidate_reference_id);
    assert.ok(item, "Apparatus ID missing from Chemistry read model: " + row.candidate_reference_id);
    assert.equal(row.candidate_reference_name, item.name);
    assert.equal(row.candidate_reference_detail, item.detail);
    assert.equal(item.status, "USER_UPLOADED_CANDIDATE / NOT_BYTE_AUTHENTICATED");
    assert.equal(row.candidate_source_evidence_state, "USER_UPLOADED_CANDIDATE_NOT_BYTE_AUTHENTICATED");
  } else if (row.candidate_reference_type === "REAGENT") {
    const item = reagents.get(row.candidate_reference_id);
    assert.ok(item, "Historical reagent ID missing from Chemistry read model: " + row.candidate_reference_id);
    assert.equal(row.candidate_reference_name, item.name);
    assert.equal(item.status, "SIMULATION_REFERENCE_ONLY / NO_LIVE_USE");
    assert.equal(row.candidate_source_evidence_state, "OFFICIAL_NCERT_2018_MANUAL_TEXT_EXTRACTION_SIMULATION_REFERENCE_ONLY_NO_LIVE_USE");
    assert.match(row.candidate_reference_detail, /2018 historical manual/);
    assert.match(row.relationship_reason, /no concentration|no 1 M|no 0\.1 M|no exact 0\.05 M|formulation|synonym|does not prove grade/i);
  } else {
    assert.equal(row.candidate_reference_type, "NONE");
    assert.equal(row.candidate_reference_id, "");
    assert.equal(row.candidate_reference_name, "");
    assert.equal(row.candidate_reference_detail, "");
    assert.equal(row.candidate_source_evidence_state, "");
  }
}

const requireRow = (taskId, fragment, type, id = "") => {
  const row = crosswalk.find(item => item.rbse_task_id === taskId && item.method_requirement.includes(fragment) && item.candidate_reference_type === type && item.candidate_reference_id === id);
  assert.ok(row, taskId + ": expected row missing for " + fragment);
  return row;
};
assert.equal(requireRow("RBSE-XI-CHEM-PRA-10", "100 mL beakers", "APPARATUS", "NCERT-MSCL-SPEC-003").candidate_relationship_class, "NOT_EQUIVALENT_CAPACITY_VARIANT");
assert.equal(requireRow("RBSE-XI-CHEM-PRA-10", "glass droppers", "APPARATUS", "NCERT-MSCL-SPEC-010").candidate_relationship_class, "EXPLICIT_METHOD_COMPONENT_CANDIDATE");
assert.equal(requireRow("RBSE-XI-CHEM-PRA-10", "pH paper", "APPARATUS", "NCERT-MSCL-SPEC-046").candidate_relationship_class, "POSSIBLE_INDICATOR_PAPER_TYPE_ONLY");
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-10" && row.candidate_reference_type === "NONE" && /fresh fruit sample set/i.test(row.method_requirement)));

assert.equal(requireRow("RBSE-XI-CHEM-PRA-11", "0.1 M HCl", "REAGENT", "MSCL-MAN-REAG-054").candidate_relationship_class, "HISTORICAL_REAGENT_LABEL_ONLY_FORMULATION_UNVERIFIED");
assert.equal(requireRow("RBSE-XI-CHEM-PRA-11", "0.1 M NaOH", "REAGENT", "MSCL-MAN-REAG-104").candidate_relationship_class, "HISTORICAL_IDENTITY_REFERENCE_ONLY_FORMULATION_UNVERIFIED");
assert.equal(requireRow("RBSE-XI-CHEM-PRA-11", "0.05 M H2SO4", "REAGENT", "MSCL-MAN-REAG-114").candidate_relationship_class, "HISTORICAL_REAGENT_LABEL_ONLY_FORMULATION_UNVERIFIED");
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-11" && row.candidate_reference_type === "NONE" && /Exact hydrochloric-acid solution formulation/.test(row.method_requirement)));
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-11" && row.candidate_reference_type === "NONE" && /Exact sulphuric-acid solution formulation/.test(row.method_requirement)));

assert.equal(requireRow("RBSE-XI-CHEM-PRA-12", "25 mL pipettes", "APPARATUS", "NCERT-MSCL-SPEC-054").candidate_relationship_class, "NOT_EQUIVALENT_CAPACITY_VARIANT");
assert.equal(requireRow("RBSE-XI-CHEM-PRA-12", "Ethanoic/acetic-acid", "REAGENT", "MSCL-MAN-REAG-002").candidate_relationship_class, "HISTORICAL_SYNONYM_LABEL_ONLY_FORMULATION_UNVERIFIED");
assert.equal(requireRow("RBSE-XI-CHEM-PRA-12", "Sodium-ethanoate", "REAGENT", "MSCL-MAN-REAG-097").candidate_relationship_class, "HISTORICAL_SYNONYM_LABEL_ONLY_FORMULATION_UNVERIFIED");
assert.equal(requireRow("RBSE-XI-CHEM-PRA-12", "Ammonium-chloride", "REAGENT", "MSCL-MAN-REAG-013").candidate_relationship_class, "HISTORICAL_IDENTITY_REFERENCE_ONLY_NO_CURRENT_SUPPLY");
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-12" && row.candidate_reference_type === "NONE" && /Aqueous ammonia solution/.test(row.method_requirement)));

for (const taskId of ["RBSE-XI-CHEM-PRA-10","RBSE-XI-CHEM-PRA-11","RBSE-XI-CHEM-PRA-12"]) {
  const method = methodEvidence.find(row => row.rbse_task_id === taskId);
  const endpoint = endpointRegister.find(row => row.rbse_task_id === taskId);
  const source = sourceRecheck.find(row => row.rbse_task_id === taskId);
  const audit = readback.find(row => row.rbse_task_id === taskId);
  assert.ok(method && endpoint && source && audit, taskId + ": method/source evidence missing");
  assert.match(method.body_review_state, /OFFICIAL_NCERT_NIC_IN_HINDI_UNIT5_TEXT_LAYER_INSPECTED/);
  assert.equal(method.official_pdf_url, "https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry%28hindi%29/khlm205.pdf");
  assert.match(method.official_pdf_retrieval_state, /LOCAL_PDF_BYTES_SHA256_AND_SIZE_NOT_CAPTURED/);
  assert.match(method.source_conflict_or_quality_note, /English `kelm205.pdf` remains unretrieved/);
  assert.match(endpoint.body_inspection_state, /EXPERIMENT_5_/);
  assert.match(source.method_body_review_state, /OFFICIAL_NCERT_NIC_IN_HINDI_UNIT5_TEXT_LAYER_INSPECTED/);
  assert.equal(audit.binary_sha256_state, "NOT_CAPTURED_NO_LOCAL_BYTES_OR_SHA256");
  assert.equal(audit.rights_state, "NCERT_ALL_RIGHTS_RESERVED_LINK_AND_CITATION_ONLY");
}
assert.ok(methodEvidence.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-10").verified_scope_summary.includes("observation table is blank"));
assert.ok(methodEvidence.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-11").source_conflict_or_quality_note.includes("never add water into acid"));
assert.ok(methodEvidence.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-12").verified_scope_summary.includes("four 100 mL beakers"));
assert.ok(!crosswalk.some(row => row.candidate_link_status === "PROMOTED"));

console.log("LabVerse Chemistry Unit 5 official source and task-to-item crosswalk: PASS");
console.log("Decision rows: 34 (PRA-10: 8; PRA-11: 13; PRA-12: 13)");
console.log("Candidate-backed: 18 (12 apparatus references, 6 historical reagent references); explicit no-ID gaps: 16; unique IDs: 12");
console.log("Preserved: 100 mL beaker and 25 mL pipette capacity mismatches, exact reagent-concentration gaps, no fruit pH values, blank observation tables, corrosive/chemical safety blockers, rights and no-promotion boundaries");
