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
      row.push(value);
      value = "";
    } else if (char === "\n") {
      row.push(value);
      records.push(row);
      row = [];
      value = "";
    } else if (char !== "\r") {
      value += char;
    }
  }
  if (quoted) throw new Error(path + ": unterminated quoted field");
  if (value.length > 0 || row.length > 0) {
    row.push(value);
    records.push(row);
  }
  const headers = records.shift();
  assert.ok(headers?.length, path + ": headers missing");
  assert.equal(new Set(headers).size, headers.length, path + ": duplicate headers");
  return records
    .filter((record) => record.some((cell) => cell.length > 0))
    .map((record) => Object.fromEntries(headers.map((header, index) => [header, record[index] ?? ""])));
}

const [crosswalk, methodEvidence, sourceRecheck, reagentCrosswalk] = await Promise.all([
  readCsv("data/catalogues/rbse_xi_chemistry_unit2_apparatus_item_candidates_2026_11_26.csv"),
  readCsv("data/catalogues/rbse_chemistry_method_body_evidence_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv"),
  readCsv("data/catalogues/rbse_mscl_reagent_crosswalk_reconciliation_2026_11_10.csv")
]);
const inventory = JSON.parse(await readFile(new URL("dashboard/data/inventory.json", root), "utf8"));
const chemistryItems = inventory.subjects?.chemistry?.inventory ?? [];
const itemById = new Map(chemistryItems.map((item) => [item.id, item]));

assert.equal(crosswalk.length, 26, "Unit 2 apparatus crosswalk must contain 26 decision rows");
const rowKey = (row) => [row.rbse_task_id, row.candidate_catalogue_item_id, row.candidate_relationship_class, row.method_requirement].join("|");
assert.equal(new Set(crosswalk.map(rowKey)).size, crosswalk.length, "Duplicate Chemistry task/item requirement decisions");
assert.deepEqual(
  crosswalk.reduce((counts, row) => {
    counts[row.rbse_task_id] = (counts[row.rbse_task_id] ?? 0) + 1;
    return counts;
  }, {}),
  { "RBSE-XI-CHEM-PRA-02": 7, "RBSE-XI-CHEM-PRA-03": 19 },
  "PRA-02 / PRA-03 one-to-many row counts changed"
);

for (const row of crosswalk) {
  assert.match(row.ncert_official_pdf_url, /^https:\/\/ncert\.nic\.in\//);
  assert.match(row.ncert_primary_source, /2025[-–]26/);
  assert.equal(row.current_procurement_status, "NOT_AUTHENTICATED_NO_CURRENT_BOM_OR_PHYSICAL_STOCK_PROOF");
  assert.equal(row.reagent_mapping_status, "NO_REAGENT_OR_PRODUCT_ID_ASSIGNED_BY_THIS_APPARATUS_AUDIT");
  assert.equal(row.rights_status, "NCERT_ALL_RIGHTS_RESERVED_LINK_AND_CITATION_ONLY_NO_COPYING_OF_PROTECTED_TEXT_OR_FIGURES");
  assert.equal(row.approval_status, "NO_CHEMISTRY_TEACHER_OR_LAB_SAFETY_APPROVAL_RECORDED");
  assert.ok(row.source_method_summary.trim());
  assert.ok(row.method_requirement.trim());
  if (row.candidate_catalogue_item_id) {
    const item = itemById.get(row.candidate_catalogue_item_id);
    assert.ok(item, "Candidate ID missing from current Chemistry inventory snapshot: " + row.candidate_catalogue_item_id);
    assert.equal(row.candidate_catalogue_item_name, item.name);
    assert.equal(item.status, "USER_UPLOADED_CANDIDATE / NOT_BYTE_AUTHENTICATED");
    assert.equal(row.candidate_catalogue_evidence_state, "USER_UPLOADED_CANDIDATE_NOT_BYTE_AUTHENTICATED");
    assert.equal(row.candidate_link_status, "NOT_PROMOTED");
  } else {
    assert.equal(row.candidate_catalogue_item_name, "");
    assert.equal(row.candidate_catalogue_evidence_state, "");
    assert.equal(row.candidate_link_status, "NO_ITEM_ID_ASSIGNED_NO_PROMOTION");
  }
}
assert.equal(crosswalk.filter((row) => row.candidate_catalogue_item_id).length, 17);
assert.equal(crosswalk.filter((row) => !row.candidate_catalogue_item_id).length, 9);

const asbestosRow = crosswalk.find((row) => row.candidate_catalogue_item_id === "NCERT-MSCL-SPEC-034");
assert.ok(asbestosRow, "Wire-gauze candidate row missing");
assert.equal(asbestosRow.candidate_relationship_class, "HAZARD_BLOCKED_METHOD_COMPONENT_CANDIDATE");
assert.match(itemById.get("NCERT-MSCL-SPEC-034")?.safety ?? "", /ASBESTOS/i);
assert.match(asbestosRow.safety_status, /ASBESTOS_HAZARD_BLOCKER/);

const pocketBalance = crosswalk.find((row) => row.candidate_catalogue_item_id === "NCERT-MSCL-SPEC-040");
assert.equal(pocketBalance?.candidate_relationship_class, "NOT_EQUIVALENT_PRECISION_VARIANT");
assert.match(pocketBalance?.source_method_summary ?? "", /±0\.0002 g/);
assert.match(itemById.get("NCERT-MSCL-SPEC-040")?.detail ?? "", /0\.1 g/i);
assert.match(pocketBalance?.reviewer_note ?? "", /not an analytical-balance substitute/i);

const unit2MethodRows = new Map(methodEvidence.filter((row) =>
  ["RBSE-XI-CHEM-PRA-02", "RBSE-XI-CHEM-PRA-03"].includes(row.rbse_task_id)
).map((row) => [row.rbse_task_id, row]));
const unit2SourceRows = new Map(sourceRecheck.filter((row) =>
  ["RBSE-XI-CHEM-PRA-02", "RBSE-XI-CHEM-PRA-03"].includes(row.rbse_task_id)
).map((row) => [row.rbse_task_id, row]));
for (const taskId of ["RBSE-XI-CHEM-PRA-02", "RBSE-XI-CHEM-PRA-03"]) {
  const method = unit2MethodRows.get(taskId);
  const source = unit2SourceRows.get(taskId);
  assert.ok(method && source, taskId + ": official Unit 2 source state missing");
  assert.match(method.official_pdf_retrieval_state, /OFFICIAL_NCERT_NIC_IN_PDF_OPENED; 22_PAGES/);
  assert.match(method.body_review_state, /OFFICIAL_NCERT_NIC_IN_BODY_TEXT_INSPECTED/);
  assert.match(source.method_body_review_state, /OFFICIAL_NCERT_NIC_IN_UNIT2_BODY_TEXT_INSPECTED/);
  assert.match(source.reagent_mapping_state, /^NO_CANDIDATE_REAGENT_OR_PRODUCT_IDS_ASSIGNED/);
  assert.match(source.apparatus_supply_state, /^NO_CURRENT_KIT_BOQ_OR_STOCK_VERIFIED/);
}
for (const taskId of ["RBSE-XI-CHEM-PRA-02", "RBSE-XI-CHEM-PRA-03"]) {
  const reagentRow = reagentCrosswalk.find((row) => row.rbse_task_id === taskId);
  assert.ok(reagentRow, taskId + ": pre-existing reagent crosswalk row missing");
  assert.equal(reagentRow.task_scoped_screen_candidate_ids, "");
  assert.equal(reagentRow.matrix_candidate_reagent_ids, "");
  assert.equal(reagentRow.scope_reconciliation_status, "NO_TASK_SCOPED_CANDIDATE_LINK; NOT_PROOF_OF_NO_REAGENT");
}
assert.ok(!crosswalk[0] || !Object.keys(crosswalk[0]).some((key) => /concentration|physical_stock_count|approved_quantity/i.test(key)));

console.log("LabVerse Chemistry Unit 2 crosswalk integrity: PASS");
console.log("Decision rows:", crosswalk.length, "(PRA-02: 7; PRA-03: 19)");
console.log("Catalogue candidates: 17; unresolved no-ID requirements: 9");
console.log("Preserved: NOT_PROMOTED states, no-reagent-ID scope, procurement/rights/safety gates");
