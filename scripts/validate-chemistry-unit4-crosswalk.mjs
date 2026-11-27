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
    else if (char === "\n") { row.push(value); records.push(row); row = []; value = ""; }
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

const [crosswalk, reagentIndex, safetyScreen, methodEvidence, sourceRecheck] = await Promise.all([
  readCsv("data/catalogues/rbse_xi_chemistry_unit4_apparatus_reagent_candidates_2026_11_27.csv"),
  readCsv("data/catalogues/ncert_mscl_manual_reagent_index.csv"),
  readCsv("data/catalogues/ncert_mscl_manual_reagent_safety_screen.csv"),
  readCsv("data/catalogues/rbse_chemistry_method_body_evidence_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv")
]);
const inventory = JSON.parse(await readFile(new URL("dashboard/data/inventory.json", root), "utf8"));
const chemistry = inventory.subjects?.chemistry ?? {};
const apparatus = new Map((chemistry.inventory ?? []).map(item => [item.id, item]));
const reagents = new Map((chemistry.reagents ?? []).map(item => [item.id, item]));
const reagentRows = new Map(reagentIndex.map(item => [item.manual_reagent_id, item]));
const safetyRows = new Map(safetyScreen.map(item => [item.record_id, item]));

assert.equal(crosswalk.length, 25, "Unit 4 crosswalk must contain 25 decision rows");
const counts = crosswalk.reduce((result, row) => {
  result[row.rbse_task_id] = (result[row.rbse_task_id] ?? 0) + 1;
  return result;
}, {});
assert.deepEqual(counts, {
  "RBSE-XI-CHEM-PRA-08": 11,
  "RBSE-XI-CHEM-PRA-09": 14
}, "Unit 4 per-task decision row counts changed");
const rowKey = row => [row.rbse_task_id, row.candidate_reference_type, row.candidate_reference_id, row.candidate_relationship_class, row.method_requirement].join("|");
assert.equal(new Set(crosswalk.map(rowKey)).size, crosswalk.length, "Duplicate task/reference/method decisions");
assert.equal(crosswalk.filter(row => row.candidate_reference_id).length, 19, "Candidate-backed row count changed");
assert.equal(crosswalk.filter(row => !row.candidate_reference_id).length, 6, "Explicit no-ID row count changed");
assert.equal(new Set(crosswalk.filter(row => row.candidate_reference_id).map(row => row.candidate_reference_id)).size, 15, "Unique candidate reference count changed");
assert.equal(crosswalk.filter(row => row.candidate_reference_type === "APPARATUS" && row.candidate_reference_id).length, 12);
assert.equal(crosswalk.filter(row => row.candidate_reference_type === "REAGENT" && row.candidate_reference_id).length, 7);

for (const row of crosswalk) {
  assert.match(row.ncert_official_pdf_url, /^https:\/\/ncert\.nic\.in\//);
  assert.match(row.ncert_primary_source, /2025–26/);
  assert.equal(row.current_procurement_status, "NOT_AUTHENTICATED_NO_CURRENT_BOM_OR_PHYSICAL_STOCK_PROOF");
  assert.equal(row.rights_status, "NCERT_ALL_RIGHTS_RESERVED_LINK_AND_CITATION_ONLY_NO_COPYING_OF_PROTECTED_TEXT_TABLES_OR_FIGURES");
  assert.equal(row.approval_status, "NO_CHEMISTRY_TEACHER_OR_LAB_SAFETY_APPROVAL_RECORDED");
  assert.ok(row.source_evidence_summary.trim());
  assert.ok(row.source_reported_quantity.trim());
  assert.equal(row.candidate_link_status, row.candidate_reference_id ? "NOT_PROMOTED" : "NO_ITEM_ID_ASSIGNED_NO_PROMOTION");
  if (row.candidate_reference_type === "APPARATUS") {
    const item = apparatus.get(row.candidate_reference_id);
    assert.ok(item, "Apparatus candidate ID missing from inventory: " + row.candidate_reference_id);
    assert.equal(row.candidate_reference_name, item.name);
    assert.equal(row.candidate_reference_detail, item.detail);
    assert.equal(item.status, "USER_UPLOADED_CANDIDATE / NOT_BYTE_AUTHENTICATED");
    assert.equal(row.candidate_source_evidence_state, "USER_UPLOADED_CANDIDATE_NOT_BYTE_AUTHENTICATED");
  } else if (row.candidate_reference_type === "REAGENT") {
    const item = reagents.get(row.candidate_reference_id);
    const source = reagentRows.get(row.candidate_reference_id);
    const safety = safetyRows.get(row.candidate_reference_id);
    assert.ok(item && source && safety, "Historical reagent ID missing from read model/register/safety screen: " + row.candidate_reference_id);
    assert.equal(row.candidate_reference_name, item.name);
    assert.equal(item.status, "SIMULATION_REFERENCE_ONLY / NO_LIVE_USE");
    assert.equal(row.candidate_source_evidence_state, "OFFICIAL_NCERT_2018_MANUAL_TEXT_EXTRACTION_SIMULATION_REFERENCE_ONLY_NO_LIVE_USE");
    assert.equal(source.source_label_preserved, item.name);
    assert.equal(safety.live_use_status, "BLOCKED_NO_LIVE_USE; SIMULATION_REFERENCE_ONLY");
    assert.equal(safety.sds_review_status, "IDENTITY_SPECIFIC_CURRENT_SDS_AND_EXPOSURE_REVIEW_REQUIRED");
    assert.equal(safety.expert_approval_status, "NOT_APPROVED");
  } else {
    assert.equal(row.candidate_reference_type, "NONE");
    assert.equal(row.candidate_reference_id, "");
    assert.equal(row.candidate_reference_name, "");
    assert.equal(row.candidate_reference_detail, "");
    assert.equal(row.candidate_source_evidence_state, "");
  }
}
assert.equal(crosswalk.filter(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-08" && row.candidate_reference_id === "NCERT-MSCL-SPEC-003").length, 1);
assert.equal(crosswalk.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-08" && row.candidate_reference_id === "NCERT-MSCL-SPEC-003")?.candidate_relationship_class, "NOT_EQUIVALENT_CAPACITY_VARIANT");
assert.match(apparatus.get("NCERT-MSCL-SPEC-003")?.detail ?? "", /10 mL and 50 mL/);
assert.match(apparatus.get("NCERT-MSCL-SPEC-007")?.detail ?? "", /100 mL/);
assert.match(apparatus.get("NCERT-MSCL-SPEC-015")?.detail ?? "", /capacity 2 mL/);
assert.match(apparatus.get("NCERT-MSCL-SPEC-027")?.detail ?? "", /four blind holes/);
assert.equal(crosswalk.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-09" && row.candidate_reference_id === "NCERT-MSCL-SPEC-007")?.candidate_relationship_class, "POSSIBLE_CAPACITY_MATCH_NOT_PROMOTED");
assert.equal(crosswalk.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-09" && row.candidate_reference_id === "NCERT-MSCL-SPEC-015")?.candidate_relationship_class, "NOT_EQUIVALENT_CAPACITY_VARIANT");
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-08" && row.candidate_reference_type === "NONE" && /100 mL and 250 mL/.test(row.method_requirement)));
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-09" && row.candidate_reference_type === "NONE" && /General test tubes/.test(row.method_requirement)));
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-09" && row.candidate_reference_type === "NONE" && /five-position/.test(row.method_requirement)));

const acetone = crosswalk.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-09" && row.candidate_reference_id === "MSCL-MAN-REAG-006");
const alcohol = crosswalk.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-09" && row.candidate_reference_id === "MSCL-MAN-REAG-001");
assert.equal(acetone?.candidate_relationship_class, "EXPLICIT_METHOD_REAGENT_REFERENCE_ONLY");
assert.equal(alcohol?.candidate_relationship_class, "SOURCE_TABLE_ALTERNATIVE_NOT_PROCEDURE_SUBSTITUTE");
assert.match(alcohol?.method_requirement ?? "", /procedure specifically uses acetone/i);
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-08" && row.candidate_reference_type === "NONE" && /does not specify distilled water/.test(row.method_requirement)));

const unit4MethodRows = new Map(methodEvidence.filter(row => ["RBSE-XI-CHEM-PRA-08","RBSE-XI-CHEM-PRA-09"].includes(row.rbse_task_id)).map(row => [row.rbse_task_id,row]));
const unit4SourceRows = new Map(sourceRecheck.filter(row => ["RBSE-XI-CHEM-PRA-08","RBSE-XI-CHEM-PRA-09"].includes(row.rbse_task_id)).map(row => [row.rbse_task_id,row]));
for (const taskId of ["RBSE-XI-CHEM-PRA-08","RBSE-XI-CHEM-PRA-09"]) {
  const method = unit4MethodRows.get(taskId);
  const source = unit4SourceRows.get(taskId);
  assert.ok(method && source, taskId + ": source evidence row missing");
  assert.match(method.official_pdf_retrieval_state, /OFFICIAL_NCERT_NIC_IN_PDF_OPENED/);
  assert.match(method.body_review_state, /OFFICIAL_NCERT_NIC_IN_UNIT4_BODY_TEXT_INSPECTED/);
  assert.match(source.method_body_review_state, /OFFICIAL_NCERT_NIC_IN_UNIT4_BODY_TEXT_INSPECTED/);
  assert.match(source.reagent_mapping_state, /HISTORICAL_2018_MANUAL_LABEL_REFERENCES_LINKED/);
  assert.match(source.apparatus_supply_state, /^NO_CURRENT_KIT_BOQ_OR_STOCK_VERIFIED/);
}
const exp41 = crosswalk.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-08");
assert.match(exp41.source_evidence_summary, /purely qualitative/i);
assert.match(exp41.source_evidence_summary, /molarity is not stressed/i);
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-08" && /six.*first series.*another four/i.test(row.source_reported_quantity)));
const exp42 = crosswalk.find(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-09");
assert.match(exp42.source_evidence_summary, /acetone/i);
assert.ok(crosswalk.some(row => row.rbse_task_id === "RBSE-XI-CHEM-PRA-09" && /Six.*five tubes in each of two series/i.test(row.source_reported_quantity)));
assert.ok(!Object.keys(crosswalk[0]).some(key => /approved_quantity|current_stock_count|physical_stock_count|measured_result|equilibrium_constant/i.test(key)));
assert.ok(!crosswalk.some(row => row.candidate_link_status === "PROMOTED"));
console.log("LabVerse Chemistry Unit 4 apparatus/reagent crosswalk integrity: PASS");
console.log("Decision rows: 25 (PRA-08: 11; PRA-09: 14)");
console.log("Candidate-backed rows: 19 (12 apparatus, 7 historical reagent references); unresolved/no-ID rows: 6");
console.log("Unique candidate IDs: 15; all candidate links NOT_PROMOTED");
console.log("Preserved: beaker/test-tube capacity gaps, stand hole-count gaps, source count conflicts, acetone/alcohol distinction, qualitative-only equilibrium observation, SDS/rights/teacher gates");
