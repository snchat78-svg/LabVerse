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
  return records.filter(record => record.some(cell => cell.length))
    .map(record => Object.fromEntries(headers.map((header, index) => [header, record[index] ?? ""])));
}

const [crosswalk, readback] = await Promise.all([
  readCsv("data/catalogues/rbse_xi_chemistry_unit6_pra14_apparatus_reagent_candidates_2026_11_27.csv"),
  readCsv("data/catalogues/rbse_xi_chemistry_unit6_pra14_official_source_readback_2026_11_27.csv")
]);
const inventory = JSON.parse(await readFile(new URL("dashboard/data/inventory.json", root), "utf8"));
const chemistry = inventory.subjects?.chemistry ?? {};
const apparatus = new Map((chemistry.inventory ?? []).map(item => [item.id, item]));
const reagents = new Map((chemistry.reagents ?? []).map(item => [item.id, item]));
const taskId = "RBSE-XI-CHEM-PRA-14";
const sourceUrl = "https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm206.pdf";

assert.equal(crosswalk.length, 17, "PRA-14 crosswalk must contain 17 decision rows");
assert.ok(crosswalk.every(row => row.rbse_task_id === taskId), "Unexpected task ID in PRA-14 file");
assert.equal(crosswalk.filter(row => row.candidate_reference_id).length, 10, "Candidate-backed row count changed");
assert.equal(crosswalk.filter(row => !row.candidate_reference_id).length, 7, "Explicit no-ID row count changed");
assert.equal(crosswalk.filter(row => row.candidate_reference_type === "APPARATUS" && row.candidate_reference_id).length, 7);
assert.equal(crosswalk.filter(row => row.candidate_reference_type === "REAGENT" && row.candidate_reference_id).length, 3);
assert.equal(new Set(crosswalk.filter(row => row.candidate_reference_id).map(row => row.candidate_reference_id)).size, 10, "Unique candidate IDs changed");
const uniqueDecision = row => [row.method_requirement, row.candidate_reference_type, row.candidate_reference_id, row.candidate_relationship_class].join("|");
assert.equal(new Set(crosswalk.map(uniqueDecision)).size, crosswalk.length, "Duplicate method/candidate decisions");

for (const row of crosswalk) {
  assert.equal(row.ncert_official_pdf_url, sourceUrl);
  assert.match(row.ncert_primary_source, /official NCERT/);
  assert.match(row.ncert_method_page, /printed pp\.69–73/);
  assert.equal(row.candidate_link_status, row.candidate_reference_id ? "NOT_PROMOTED" : "NO_ITEM_ID_ASSIGNED_NO_PROMOTION");
  assert.equal(row.current_procurement_status, "NOT_AUTHENTICATED_NO_CURRENT_BOM_OR_PHYSICAL_STOCK_PROOF");
  assert.equal(row.rights_status, "NCERT_ALL_RIGHTS_RESERVED_LINK_AND_CITATION_ONLY_NO_COPYING_OF_PROTECTED_TEXT_TABLES_OR_FIGURES");
  assert.equal(row.approval_status, "EXPERT_CHEMISTRY_METHOD_REVIEW_PENDING; NO_LAB_SAFETY_APPROVAL_RECORDED");
  assert.match(row.safety_status, /REFERENCE_ONLY_NO_LIVE_USE/);
  assert.ok(row.relationship_reason.trim());
  assert.ok(row.source_evidence_summary.trim());
  if (row.candidate_reference_type === "APPARATUS") {
    const item = apparatus.get(row.candidate_reference_id);
    assert.ok(item, "Missing apparatus reference: " + row.candidate_reference_id);
    assert.equal(row.candidate_reference_name, item.name);
    assert.equal(row.candidate_reference_detail, item.detail);
    assert.equal(item.status, "USER_UPLOADED_CANDIDATE / NOT_BYTE_AUTHENTICATED");
    assert.equal(row.candidate_source_evidence_state, "USER_UPLOADED_CANDIDATE_NOT_BYTE_AUTHENTICATED");
  } else if (row.candidate_reference_type === "REAGENT") {
    const item = reagents.get(row.candidate_reference_id);
    assert.ok(item, "Missing reagent reference: " + row.candidate_reference_id);
    assert.equal(row.candidate_reference_name, item.name);
    assert.equal(item.status, "SIMULATION_REFERENCE_ONLY / NO_LIVE_USE");
    assert.equal(row.candidate_source_evidence_state, "OFFICIAL_NCERT_2018_MANUAL_TEXT_EXTRACTION_SIMULATION_REFERENCE_ONLY_NO_LIVE_USE");
    assert.match(row.candidate_reference_detail, /2018 historical manual/);
  } else {
    assert.equal(row.candidate_reference_type, "NONE");
    assert.equal(row.candidate_reference_id, "");
    assert.equal(row.candidate_reference_name, "");
  }
}

const find = (fragment, type, id = "") => {
  const row = crosswalk.find(item => item.method_requirement.toLowerCase().includes(fragment.toLowerCase()) && item.candidate_reference_type === type && item.candidate_reference_id === id);
  assert.ok(row, "Missing requirement/candidate decision: " + fragment);
  return row;
};
assert.equal(find("Burette (50 mL)", "APPARATUS", "NCERT-MSCL-SPEC-017").candidate_relationship_class, "NOT_EQUIVALENT_CAPACITY_VARIANT");
assert.equal(find("Pipette (10 mL)", "APPARATUS", "NCERT-MSCL-SPEC-054").candidate_relationship_class, "NOT_EQUIVALENT_CAPACITY_VARIANT");
assert.equal(find("Conical flask (100 mL)", "APPARATUS", "NCERT-MSCL-SPEC-007").candidate_relationship_class, "POSSIBLE_CAPACITY_MATCH_CANDIDATE");
assert.equal(find("Burette stand", "APPARATUS", "NCERT-MSCL-SPEC-028").candidate_relationship_class, "POSSIBLE_SUPPORTING_ITEM_TYPE_ONLY");
assert.equal(find("Funnel for burette", "APPARATUS", "NCERT-MSCL-SPEC-013").candidate_relationship_class, "POSSIBLE_SUPPORTING_ITEM_TYPE_ONLY");
assert.equal(find("White glazed tile", "APPARATUS", "NCERT-MSCL-SPEC-051").candidate_relationship_class, "POSSIBLE_SURFACE_TYPE_CANDIDATE");
assert.equal(find("Measuring flask (100 mL)", "APPARATUS", "NCERT-MSCL-SPEC-045").candidate_relationship_class, "NOT_EQUIVALENT_CAPACITY_VARIANT");
assert.equal(find("Oxalic acid (identity", "REAGENT", "MSCL-MAN-REAG-076").candidate_relationship_class, "HISTORICAL_IDENTITY_REFERENCE_ONLY_FORMULATION_UNVERIFIED");
assert.equal(find("Sodium hydroxide (identity", "REAGENT", "MSCL-MAN-REAG-104").candidate_relationship_class, "HISTORICAL_IDENTITY_REFERENCE_ONLY_FORMULATION_UNVERIFIED");
assert.equal(find("Phenolphthalein indicator", "REAGENT", "MSCL-MAN-REAG-078").candidate_relationship_class, "HISTORICAL_IDENTITY_REFERENCE_ONLY_FORMULATION_UNVERIFIED");
for (const required of ["Exact 50 mL burette", "Exact 10 mL pipette", "Verified single-burette stand", "Verified funnel fit", "Exact 100 mL measuring", "Exact 0.1 M oxalic acid dihydrate", "Exact sodium hydroxide test solution"]) {
  assert.ok(crosswalk.some(row => row.candidate_reference_type === "NONE" && row.method_requirement.includes(required)), "Missing explicit no-ID gap: " + required);
}
assert.ok(crosswalk.every(row => !/LIVE_USE_APPROVED|PROMOTED_FOR_LIVE_USE/.test(row.approval_status + " " + row.candidate_link_status)));
assert.equal(readback.length, 1, "Expected one official Unit 6 source readback row");
const evidence = readback[0];
assert.equal(evidence.rbse_task_id, taskId);
assert.equal(evidence.official_source_url, sourceUrl);
assert.equal(evidence.source_publication_footer, "2025–26");
assert.equal(evidence.reviewed_printed_pages, "69–73");
assert.equal(evidence.reviewed_pdf_page_indexes, "4–8");
assert.match(evidence.method_body_review_state, /OFFICIAL_NCERT_HOSTED_PDF_TEXT_AND_SCREENSHOT_VISUAL_REVIEW/);
assert.match(evidence.source_method_summary, /three concordant readings/);
assert.match(evidence.source_method_summary, /table is blank/);
assert.match(evidence.local_pdf_binary_state, /SHA256 AND BYTE LENGTH NOT CAPTURED/);
console.log("LabVerse Chemistry PRA-14 source-to-item crosswalk: PASS");
console.log("Decision rows: 17; candidate-backed: 10 (7 apparatus, 3 historical reagent references); explicit no-ID gaps: 7; unique IDs: 10.");
console.log("Preserved: 50 mL/10 mL capacity mismatches, 100 mL flask gaps, historical chemical name-only references, blank titre/result table, no-live-use and expert-review gates.");
