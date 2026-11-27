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

const [scope, sourceReadback, taskTrace, taskMatrix] = await Promise.all([
  readCsv("data/catalogues/rbse_xi_chemistry_unit7_pra18_ion_scope_crosswalk_2026_11_27.csv"),
  readCsv("data/catalogues/rbse_xi_chemistry_unit7_pra18_official_source_readback_2026_11_27.csv"),
  readCsv("data/catalogues/rbse_xi_chemistry_practical_traceability.csv"),
  readCsv("data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv")
]);

const taskId = "RBSE-XI-CHEM-PRA-18";
const sourceId = "NCERT-XI-CHEM-UNIT7-2025-26";
assert.equal(scope.length, 26, "Expected 26 scope decisions");
assert.equal(scope.filter(row => row.analyte_type === "CATION").length, 14, "NCERT cation roster count");
assert.equal(scope.filter(row => row.analyte_type === "ANION").length, 12, "NCERT anion roster count");
assert.equal(new Set(scope.map(row => row.ion_formula)).size, 26, "Ion formulas must be unique");
assert.ok(scope.every(row => row.rbse_task_id === taskId));
assert.ok(scope.every(row => row.ncert_source_id === sourceId));
assert.ok(scope.every(row => row.rbse_ion_identity_status === "NOT_ENUMERATED_BY_RBSE_PRA18_SOURCE"));
assert.ok(scope.every(row => row.relationship_class === "POSSIBLE_NCERT_SUPPORT_ONLY_NOT_EXACT_RBSE_MATCH"));
assert.ok(scope.every(row => row.asset_item_link_status === "NO_ION_SPECIFIC_ITEM_ID_LINK; TASK_LEVEL_APPARATUS_CANDIDATES_REMAIN_UNVERIFIED"));
assert.ok(scope.every(row => row.reagent_item_link_status === "NO_REAGENT_ID_ASSIGNED; NO_CURRENT_BOM_OR_STOCK_PROOF"));
assert.ok(scope.every(row => row.rights_status.startsWith("NCERT_LINK_AND_CITATION_ONLY")));
assert.ok(scope.every(row => row.safety_status.startsWith("NON_EXECUTABLE_REFERENCE_ONLY")));
assert.ok(scope.every(row => row.expert_review_status === "PENDING_QUALIFIED_CHEMISTRY_AND_LAB_SAFETY_REVIEW"));
assert.ok(scope.every(row => row.relationship_class === "POSSIBLE_NCERT_SUPPORT_ONLY_NOT_EXACT_RBSE_MATCH"));
assert.ok(scope.every(row => !/PROMOTED_FOR_LIVE_USE|LIVE_USE_APPROVED/.test(JSON.stringify(row))));

const lead = scope.find(row => row.ion_formula === "Pb2+");
assert.ok(lead, "Lead(II) must remain in roster");
assert.equal(lead.ncert_group_membership, "Group-I;Group-II", "Preserve Pb2+ in both NCERT Table 7.11 groups");
assert.ok(scope.filter(row => row.analyte_type === "ANION").every(row => row.ncert_group_membership === ""), "Do not assign cation groups to anions");

assert.equal(sourceReadback.length, 2, "Expected separate RBSE and NCERT source readbacks");
const rbse = sourceReadback.find(row => row.source_record_type === "RBSE_BOARD_SYLLABUS");
const ncert = sourceReadback.find(row => row.source_record_type === "NCERT_OFFICIAL_LABORATORY_MANUAL");
assert.ok(rbse && ncert, "Both source identities must be present");
assert.match(rbse.source_scope_statement, /No individual ion names are enumerated on these practical pages/i);
assert.match(rbse.source_identity_state, /OFFICIAL_SERVER_BYTE_IDENTITY_NOT_TESTED/);
assert.equal(ncert.ion_roster_count, "14 cations; 12 anions; insoluble salts excluded");
assert.match(ncert.visual_review_state, /PRINTED_P80_ROSTER_SCREENSHOT_FAILED_502/);
assert.match(ncert.rights_state, /link and citation only/i);

const task = taskTrace.find(row => row.rbse_task_id === taskId);
const matrix = taskMatrix.find(row => row.rbse_task_id === taskId);
assert.ok(task && matrix, "PRA-18 must remain linked in both canonical task registers");
assert.match(task.unresolved_gaps, /RBSE Class XI Chemistry syllabus 2026–27.*does not enumerate ion identities/i);
assert.match(matrix.source_task_gap_note, /RBSE Class XI Chemistry syllabus 2026–27.*does not enumerate ion identities/i);
assert.match(task.proposed_original_labverse_asset_ids, /LV-ASSET-CHEM-GAS-TEST-APPARATUS-001/);
assert.equal(matrix.candidate_manual_reagent_record_ids, "", "No PRA-18 reagent IDs are assigned");
assert.equal(matrix.current_official_bom_status, "NOT_RETRIEVED_OR_AUTHENTICATED");
assert.match(matrix.physical_lab_status, /BLOCKED/);

console.log("LabVerse Chemistry PRA-18 ion-scope crosswalk: PASS");
console.log("Records: 26 (14 NCERT cations, 12 NCERT anions); RBSE-exact ion matches: 0 (not enumerated by RBSE).");
console.log("Preserved: possible-only curriculum relationship, Pb2+ Group-I/II multiplicity, no anion group inference, no per-ion asset/reagent promotion, no live-use approval.");
