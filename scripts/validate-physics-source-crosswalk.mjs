import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
async function readCsv(path) {
  const source = await readFile(new URL(path, root), "utf8");
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (quoted) {
      if (ch === '"' && source[i + 1] === '"') {
        value += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        value += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(value);
      value = "";
    } else if (ch === "\n") {
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    } else if (ch !== "\r") {
      value += ch;
    }
  }
  if (quoted) throw new Error(path + ": unterminated CSV quoted field");
  if (value.length > 0 || row.length > 0) {
    row.push(value);
    rows.push(row);
  }
  const headers = rows.shift();
  assert.ok(headers?.length, path + ": CSV headers missing");
  assert.equal(new Set(headers).size, headers.length, path + ": duplicate header");
  return rows
    .filter((record) => record.some((cell) => cell.length > 0))
    .map((record) => Object.fromEntries(headers.map((header, index) => [header, record[index] ?? ""])));
}

const [physicsItems, candidateItems, methodPairs, taskGaps, stockroomAudit, labelComparison] = await Promise.all([
  readCsv("data/catalogues/ncert_physics_item_serial_page_crosswalk_2026_11_25.csv"),
  readCsv("data/catalogues/ncert_physics_candidate_item_index_readback_2026_11_25.csv"),
  readCsv("data/curriculum/rbse_xi_physics_ncert_method_alignment_audit_2026_11_25.csv"),
  readCsv("data/curriculum/rbse_xi_physics_method_equipment_gap_review_2026_11_25.csv"),
  readCsv("data/catalogues/stockroom_item_level_audit_2026_11_23.csv"),
  readCsv("data/catalogues/ncert_physics_catalogue_label_comparison_2026_11_25.csv")
]);

const pageRanges = [
  [2, 5, "xi"], [6, 12, "xii"], [13, 18, "xiii"], [19, 26, "xiv"],
  [27, 35, "xv"], [36, 44, "xvi"], [45, 50, "xvii"], [51, 57, "xviii"],
  [58, 64, "xix"], [65, 71, "xx"], [72, 79, "xxi"], [80, 87, "xxii"],
  [88, 94, "xxiii"], [95, 103, "xxiv"], [104, 106, "xxv"]
];
function pageForSerial(serial) {
  return pageRanges.find(([start, end]) => serial >= start && serial <= end)?.[2] ?? null;
}
function assertUnique(values, message) {
  assert.equal(new Set(values).size, values.length, message);
}

// 1) Complete Physics catalogue item schedule crosswalk: one row per serial/ID.
assert.equal(physicsItems.length, 105, "Physics source item crosswalk must contain 105 rows");
assertUnique(physicsItems.map((row) => row.catalogue_record_id), "Physics source item IDs must be unique");
assertUnique(physicsItems.map((row) => row.ncert_item_serial_number), "NCERT item serials must be unique");
assert.deepEqual(
  physicsItems.map((row) => Number(row.ncert_item_serial_number)).sort((a, b) => a - b),
  Array.from({ length: 105 }, (_, index) => index + 2),
  "NCERT item serials must be exactly 2–106"
);
for (const row of physicsItems) {
  const serial = Number(row.ncert_item_serial_number);
  assert.equal(row.catalogue_record_id, "NCERT-PHY-KIT-" + String(serial).padStart(3, "0"));
  assert.equal(row.ncert_item_schedule_printed_page, pageForSerial(serial), row.catalogue_record_id + ": item schedule page mismatch");
  assert.ok(row.ncert_manual_item_name.trim(), row.catalogue_record_id + ": source item name missing");
  assert.ok(row.ncert_manual_item_use_paraphrase.trim(), row.catalogue_record_id + ": source item use missing");
  assert.equal(row.item_label_status, "NCERT_INDEX_TABLE_TEXT_READ; ITEM_IMAGE_AND_PHYSICAL_VARIANT_REVIEW_OPEN");
  assert.ok(row.ncert_item_name_use_text_status.includes("PRIMARY_SOURCE_ITEM_SCHEDULE_TEXT_READ"));
}
const item49 = physicsItems.find((row) => Number(row.ncert_item_serial_number) === 49);
assert.equal(item49?.ncert_manual_item_name, "Wire gauge");
assert.match(item49?.ncert_manual_item_use_paraphrase ?? "", /base kept on a tripod stand for uniform heating/i);
const item79 = physicsItems.find((row) => Number(row.ncert_item_serial_number) === 79);
assert.equal(item79?.ncert_manual_item_name, "Maganin wire", "Preserve the NCERT schedule's printed item label");

// 2) Candidate-only subset must be exactly the set referenced by the method audit.
assert.equal(candidateItems.length, 52, "Candidate item index subset must contain 52 unique Physics IDs");
assertUnique(candidateItems.map((row) => row.catalogue_record_id), "Candidate item IDs must be unique");
const candidateIds = new Set(candidateItems.map((row) => row.catalogue_record_id));

// 3) Method pair audit must preserve task/item identity, source text and review boundaries.
assert.equal(methodPairs.length, 219, "Physics method audit must contain 219 task/item pairs");
assertUnique(methodPairs.map((row) => row.curriculum_record_id + "|" + row.candidate_item_id), "Method pair keys must be unique");
assert.equal(new Set(methodPairs.map((row) => row.candidate_item_id)).size, 52);
assert.equal(new Set(methodPairs.map((row) => row.curriculum_record_id)).size, 40,
  "Exactly 40 of the 41 page-confirmed tasks currently have candidate links");
const itemById = new Map(physicsItems.map((row) => [row.catalogue_record_id, row]));
for (const row of methodPairs) {
  const item = itemById.get(row.candidate_item_id);
  assert.ok(item, "Missing source item row for " + row.candidate_item_id);
  assert.equal(row.ncert_item_schedule_printed_page, item.ncert_item_schedule_printed_page);
  assert.equal(row.ncert_manual_item_name, item.ncert_manual_item_name);
  assert.equal(row.ncert_manual_item_use_paraphrase, item.ncert_manual_item_use_paraphrase);
  assert.equal(row.ncert_item_text_read_status, "NCERT_ITEM_SCHEDULE_TABLE_TEXT_READ; IMAGE_VARIANT_AND_PROCUREMENT_REVIEW_OPEN");
  assert.equal(row.promotion_status, "NOT_PROMOTED");
}
assert.deepEqual([...candidateIds].sort(), [...new Set(methodPairs.map((row) => row.candidate_item_id))].sort(),
  "52-row candidate index subset must match method audit IDs exactly");

const expectedStatuses = {
  EXPLICIT_METHOD_COMPONENT: 81,
  CONDITIONAL_OR_ANCILLARY: 66,
  NOT_CONFIRMED_IN_METHOD: 6,
  NOT_A_SUBSTITUTE_FOR_ABSENT_SEARLE_APPARATUS: 5,
  ITEM_ROLE_OR_VARIANT_MISMATCH: 18,
  NO_COMPARABLE_NCERT_METHOD: 43
};
const actualStatuses = methodPairs.reduce((result, row) => {
  result[row.method_alignment_status] = (result[row.method_alignment_status] ?? 0) + 1;
  return result;
}, {});
assert.deepEqual(actualStatuses, expectedStatuses, "Method alignment status totals changed; update reviewed expectations explicitly");
const e12Gauge = methodPairs.find((row) =>
  row.curriculum_record_id === "RBSE-XI-PHY-EXP-14" && row.candidate_item_id === "NCERT-PHY-KIT-049"
);
assert.equal(e12Gauge?.method_alignment_status, "NOT_CONFIRMED_IN_METHOD",
  "Item 49 is not listed in the E12 cooling-curve apparatus");
assert.equal(e12Gauge?.promotion_status, "NOT_PROMOTED");

// 4) Every source-confirmed Physics task is present in the 41-row equipment/gap register.
assert.equal(taskGaps.length, 41);
assertUnique(taskGaps.map((row) => row.rbse_task_id), "Task gap register IDs must be unique");
const e12Gap = taskGaps.find((row) => row.rbse_task_id === "RBSE-XI-PHY-EXP-14");
assert.match(e12Gap?.equipment_or_material_gaps_not_resolved_by_current_kit_crosswalk ?? "", /double-walled/i);
assert.match(e12Gap?.equipment_or_material_gaps_not_resolved_by_current_kit_crosswalk ?? "", /second thermometer/i);
assert.match(e12Gap?.equipment_or_material_gaps_not_resolved_by_current_kit_crosswalk ?? "", /item 49.*not listed in E12/i);

// 5) Stockroom audit must carry page/text evidence for every Physics row without changing total rows.
assert.equal(stockroomAudit.length, 515);
const physicsAudit = stockroomAudit.filter((row) => row.subject === "physics");
assert.equal(physicsAudit.length, 105);
for (const row of physicsAudit) {
  const item = itemById.get(row.record_id);
  assert.ok(item, "Physics stockroom audit row has no crosswalk item: " + row.record_id);
  assert.match(row.item_page_evidence, new RegExp("NCERT_ITEM_SCHEDULE_PRINTED_PAGE_" + item.ncert_item_schedule_printed_page.toUpperCase()));
  assert.match(row.item_page_evidence, /TABLE_TEXT_READ; IMAGE_VARIANT_REVIEW_OPEN/);
}
assertUnique(stockroomAudit.map((row) => row.record_id), "Stockroom audit IDs must be unique across all subjects");


/* 6) Label comparison identifies, but never auto-edits, source/detail differences. */
assert.equal(labelComparison.length, 105, "Physics catalogue label comparison must contain all 105 rows");
assertUnique(labelComparison.map((row) => row.catalogue_record_id), "Label comparison item IDs must be unique");
const labelMismatch = labelComparison.filter((row) => row.normalized_label_match === "FALSE");
assert.equal(labelMismatch.length, 1, "Expected one source-label/detail difference in this audited snapshot");
assert.equal(labelMismatch[0]?.catalogue_record_id, "NCERT-PHY-KIT-095");
assert.equal(labelMismatch[0]?.comparison_status, "DETAIL_QUANTITY_NOT_PRESERVED_IN_LABVERSE_LABEL");
assert.match(labelMismatch[0]?.manual_schedule_quantity_breakdown ?? "", /20 Ω × 2/);
assert.match(labelMismatch[0]?.review_action ?? "", /Keep the catalogue label unchanged/);

console.log("LabVerse Physics source-data crosswalk integrity: PASS");
console.log("Physics item schedule text rows:", physicsItems.length);
console.log("Candidate-linked Physics item IDs:", candidateItems.length);
console.log("RBSE task/item method pairs:", methodPairs.length);
console.log("Source-confirmed task gap rows:", taskGaps.length);
console.log("Stockroom inventory/reagent audit rows:", stockroomAudit.length);\nconsole.log("Catalogue label comparisons (one detail exception):", labelComparison.length, "/", labelMismatch.length);
console.log("Method classifications:", JSON.stringify(actualStatuses));
