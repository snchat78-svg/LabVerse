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
      if (char === '"' && source[index + 1] === '"') {
        value += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(value); value = "";
    } else if (char === "\n") {
      row.push(value); records.push(row); row = []; value = "";
    } else if (char !== "\r") value += char;
  }
  if (quoted) throw new Error(path + ": unterminated CSV field");
  if (value.length || row.length) { row.push(value); records.push(row); }
  const headers = records.shift();
  assert.ok(headers?.length, path + ": missing headers");
  return records.filter(record => record.some(cell => cell.length))
    .map(record => Object.fromEntries(headers.map((header, index) => [header, record[index] ?? ""])));
}

const [crosswalk, methodEvidence, sourceRecheck] = await Promise.all([
  readCsv("data/catalogues/rbse_xi_chemistry_unit3_apparatus_reagent_candidates_2026_11_26.csv"),
  readCsv("data/catalogues/rbse_chemistry_method_body_evidence_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv")
]);
const inventory = JSON.parse(await readFile(new URL("dashboard/data/inventory.json", root), "utf8"));
const chemistry = inventory.subjects?.chemistry ?? {};
const apparatus = new Map((chemistry.inventory ?? []).map(item => [item.id, item]));
const reagents = new Map((chemistry.reagents ?? []).map(item => [item.id, item]));

assert.equal(crosswalk.length, 33, "Unit 3 crosswalk must contain 33 decision rows");
const counts = crosswalk.reduce((result, row) => {
  result[row.rbse_task_id] = (result[row.rbse_task_id] ?? 0) + 1;
  return result;
}, {});
assert.deepEqual(counts, {
  "RBSE-XI-CHEM-PRA-05": 11,
  "RBSE-XI-CHEM-PRA-06": 11,
  "RBSE-XI-CHEM-PRA-07": 11
}, "Unit 3 per-task row counts changed");
assert.equal(new Set(crosswalk.map(row => [row.rbse_task_id, row.candidate_reference_id, row.candidate_relationship_class, row.method_requirement].join("|"))).size,
  crosswalk.length, "Duplicate Unit 3 source/item decisions");

for (const row of crosswalk) {
  assert.match(row.ncert_official_pdf_url, /^https:\/\/ncert\.nic\.in\//);
  assert.match(row.ncert_primary_source, /2025–26/);
  assert.equal(row.candidate_link_status, row.candidate_reference_id ? "NOT_PROMOTED" : "NO_ITEM_ID_ASSIGNED_NO_PROMOTION");
  assert.equal(row.current_procurement_status, "NOT_AUTHENTICATED_NO_CURRENT_BOM_OR_PHYSICAL_STOCK_PROOF");
  assert.equal(row.rights_status, "NCERT_ALL_RIGHTS_RESERVED_LINK_AND_CITATION_ONLY_NO_COPYING_OF_PROTECTED_TEXT_OR_FIGURES");
  assert.equal(row.approval_status, "NO_CHEMISTRY_TEACHER_OR_LAB_SAFETY_APPROVAL_RECORDED");
  if (row.candidate_reference_id) {
    const sourceItem = row.candidate_reference_type === "APPARATUS"
      ? apparatus.get(row.candidate_reference_id)
      : row.candidate_reference_type === "REAGENT"
        ? reagents.get(row.candidate_reference_id)
        : null;
    assert.ok(sourceItem, "Candidate source ID missing from Chemistry read model: " + row.candidate_reference_id);
    if (row.candidate_reference_type === "APPARATUS") {
      assert.equal(sourceItem.status, "USER_UPLOADED_CANDIDATE / NOT_BYTE_AUTHENTICATED");
      assert.equal(row.candidate_source_evidence_state, "USER_UPLOADED_CANDIDATE_NOT_BYTE_AUTHENTICATED");
    } else {
      assert.equal(sourceItem.status, "SIMULATION_REFERENCE_ONLY / NO_LIVE_USE");
      assert.equal(row.candidate_source_evidence_state, "OFFICIAL_NCERT_2018_MANUAL_TEXT_EXTRACTION_SIMULATION_REFERENCE_ONLY_NO_LIVE_USE");
    }
  } else {
    assert.equal(row.candidate_reference_type, "NONE");
    assert.equal(row.candidate_reference_name, "");
  }
}
assert.equal(crosswalk.filter(row => row.candidate_reference_id).length, 21);
assert.equal(crosswalk.filter(row => !row.candidate_reference_id).length, 12);

const mercury = crosswalk.find(row => row.candidate_reference_id === "NCERT-MSCL-SPEC-024");
assert.ok(mercury);
assert.match(apparatus.get("NCERT-MSCL-SPEC-024")?.safety ?? "", /MERCURY/i);
assert.match(mercury.safety_status, /MERCURY_HAZARD_BLOCKER/);

const sulphuric = crosswalk.find(row => row.candidate_reference_id === "MSCL-MAN-REAG-115");
assert.ok(sulphuric);
assert.equal(reagents.get("MSCL-MAN-REAG-115")?.screening, "CORROSIVE_OR_REACTIVE_FAMILY_FLAG");
assert.match(sulphuric.safety_status, /CORROSIVE_ACID_HAZARD_BLOCKER/);
assert.match(sulphuric.relationship_reason, /not recommended/i);

const paraffinBoiling = crosswalk.find(row =>
  row.rbse_task_id === "RBSE-XI-CHEM-PRA-07" && row.candidate_reference_id === "MSCL-MAN-REAG-059"
);
assert.equal(paraffinBoiling?.candidate_relationship_class, "METHOD_LIMITED_OPTION_NOT_GENERAL_EQUIVALENT");
assert.match(paraffinBoiling?.relationship_reason ?? "", /not to use it for high-boiling liquids/i);

const methodRows = new Map(methodEvidence.filter(row => [
  "RBSE-XI-CHEM-PRA-05", "RBSE-XI-CHEM-PRA-06", "RBSE-XI-CHEM-PRA-07"
].includes(row.rbse_task_id)).map(row => [row.rbse_task_id, row]));
const recheckRows = new Map(sourceRecheck.filter(row => [
  "RBSE-XI-CHEM-PRA-05", "RBSE-XI-CHEM-PRA-06", "RBSE-XI-CHEM-PRA-07"
].includes(row.rbse_task_id)).map(row => [row.rbse_task_id, row]));
for (const taskId of ["RBSE-XI-CHEM-PRA-05", "RBSE-XI-CHEM-PRA-06", "RBSE-XI-CHEM-PRA-07"]) {
  assert.match(methodRows.get(taskId)?.official_pdf_retrieval_state ?? "", /OFFICIAL_NCERT_NIC_IN_PDF_OPENED; 8_PAGES/);
  assert.match(methodRows.get(taskId)?.body_review_state ?? "", /OFFICIAL_NCERT_NIC_IN_UNIT3_BODY_TEXT_INSPECTED/);
  assert.match(recheckRows.get(taskId)?.method_body_review_state ?? "", /OFFICIAL_NCERT_NIC_IN_UNIT3_BODY_TEXT_INSPECTED/);
  assert.match(recheckRows.get(taskId)?.apparatus_supply_state ?? "", /^NO_CURRENT_KIT_BOQ_OR_STOCK_VERIFIED/);
}
assert.ok(!Object.keys(crosswalk[0]).some(key => /approved_quantity|current_stock_count|concentration_value/i.test(key)));

console.log("LabVerse Chemistry Unit 3 crosswalk integrity: PASS");
console.log("Decision rows:", crosswalk.length, "(PRA-05: 11; PRA-06: 11; PRA-07: 11)");
console.log("Existing references: 21; unresolved no-ID requirements: 12");
console.log("Preserved: not-promoted states, mercury/asbestos/corrosive hazards, paraffin high-boiling limitation");
