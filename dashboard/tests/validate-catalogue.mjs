import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const url = new URL("../data/inventory.json", import.meta.url);
const data = JSON.parse(await readFile(url, "utf8"));

assert.equal(data.project, "LabVerse");
assert.deepEqual(Object.keys(data.subjects).sort(), ["biology", "chemistry", "physics"]);
assert.equal(data.stats.rbseTaskIds, 171);

const expected = {
  physics: { inventory: 105, reagents: 0, tasks: 80 },
  chemistry: { inventory: 53, reagents: 124, tasks: 41 },
  biology: { inventory: 175, reagents: 58, tasks: 50 }
};

for (const [key, counts] of Object.entries(expected)) {
  const subject = data.subjects[key];
  assert.equal(subject.inventory.length, counts.inventory, key + " inventory row count");
  assert.equal(subject.reagents.length, counts.reagents, key + " reagent label count");
  assert.equal(subject.tasks.length, counts.tasks, key + " task row count");

  const ids = [...subject.inventory, ...subject.reagents].map(item => item.id);
  assert.equal(new Set(ids).size, ids.length, key + " item IDs must be unique");
  for (const item of [...subject.inventory, ...subject.reagents]) {
    assert.ok(item.id && item.name && item.source && item.status, key + " item provenance");
  }
}

assert.equal(
  data.subjects.chemistry.reagents.every(item => item.status.includes("NO_LIVE_USE")),
  true,
  "Chemistry reference reagents must remain blocked from live use"
);
assert.equal(
  data.subjects.biology.reagents.every(item => item.status.includes("NOT_SUPPLIED_WITH_KIT")),
  true,
  "Biology manual chemicals must retain the school-managed/not-supplied notice"
);
assert.match(
  data.sourceVariants.biology.withoutMicroscope.status,
  /PRIOR_USER_UPLOAD_ACKNOWLEDGED/,
  "Do not erase the user's prior without-microscope PDF submission"
);
assert.match(
  data.sourceVariants.biology.withoutMicroscope.note,
  /Do not request re-upload/,
  "Do not ask for the without-microscope file again"
);


// Persistent PDF archive and no-repeat policy assertions.
assert.equal(data.sourceDocuments.length, 9, "nine known source-document records");
assert.equal(data.sourceDocuments.every(source => source.noRepeatUpload === true), true, "all registered PDFs must be no-repeat");
const manual13163 = data.sourceDocuments.find(source => source.sourceId === "BIO-MANUAL-13163");
assert.equal(manual13163.duplicateCopies, 2, "two user manual uploads are tracked");
assert.equal(manual13163.uniqueByteCopies, 1, "identical copies count as one PDF");
assert.match(manual13163.sha256, /^[a-f0-9]{64}$/);
const bioWith = data.sourceDocuments.find(source => source.sourceId === "BIO-KIT-WITH-MICROSCOPE");
assert.match(bioWith.sha256, /^[a-f0-9]{64}$/);
const bioWithout = data.sourceDocuments.find(source => source.sourceId === "BIO-KIT-WITHOUT-MICROSCOPE");
assert.match(bioWithout.status, /PRIOR_USER_UPLOAD_ACKNOWLEDGED/);
assert.equal(data.sourceArchivePolicy.repositoryContainsOriginalPdfBinaries, false, "archive must state binary storage boundary");
assert.ok(manual13163.latestSessionUpload, "latest Biology manual upload must be recorded");
assert.equal(manual13163.latestSessionUpload.sha256, manual13163.sha256, "Biology manual current upload must match registered bytes");
assert.equal(manual13163.latestSessionUpload.noRepeatUpload, true);
const msclSource = data.sourceDocuments.find(source => source.sourceId === "CHEM-MSCL-UPLOADED-SPEC");
assert.equal(msclSource.uploadedVariants.length, 2, "both MSCL upload fingerprints must be preserved");
assert.equal(msclSource.uploadedVariants[1].sha256, "b991bd409074478c6ff0557a481b251de4a65727f50872e0c47e14d2df472b2e");
assert.notEqual(msclSource.uploadedVariants[0].sha256, msclSource.uploadedVariants[1].sha256, "distinct MSCL byte variants must not be merged");
const bioWithVariants = data.sourceDocuments.find(source => source.sourceId === "BIO-KIT-WITH-MICROSCOPE");
assert.equal(bioWithVariants.uploadedVariants.length, 2, "both Biology-with-microscope upload fingerprints must be preserved");
assert.equal(bioWithVariants.uploadedVariants[1].sha256, "9df41c69800ae3e8da8cac3fae265b8a6c4a4035e4deec16325c32b225309dcb");
assert.notEqual(bioWithVariants.uploadedVariants[0].sha256, bioWithVariants.uploadedVariants[1].sha256, "equal size does not prove byte identity");
for (const source of data.sourceDocuments) {
  for (const variant of source.uploadedVariants ?? []) {
    assert.equal(variant.noRepeatUpload, true, "all upload variants are no-repeat");
    assert.match(variant.sha256, /^[a-f0-9]{64}$/);
  }
}
assert.match(data.sourceArchivePolicy.noRepeatUploadRule, /must not trigger a repeat upload request/);
console.log("Persistent PDF source archive checks: 9 assertions passed.");

const expectedCoverage = {
  physics: {taskCount: 80, tasksWithSourceItemLinks: 79, tasksWithoutSourceItemLinks: 1, uniqueSourceItemIds: 95, unresolvedSourceItemIds: 0},
  chemistry: {taskCount: 41, tasksWithSourceItemLinks: 41, tasksWithoutSourceItemLinks: 0, uniqueSourceItemIds: 45, unresolvedSourceItemIds: 0},
  biology: {taskCount: 50, tasksWithSourceItemLinks: 49, tasksWithoutSourceItemLinks: 1, uniqueSourceItemIds: 147, unresolvedSourceItemIds: 0}
};
for (const [subject, coverage] of Object.entries(expectedCoverage)) {
  assert.deepEqual(
    Object.fromEntries(Object.keys(coverage).map(key => [key, data.traceabilityCoverage[subject][key]])),
    coverage,
    subject + " task-to-source-item coverage"
  );
  const sourceIds = new Set([
    ...data.subjects[subject].inventory.map(item => item.id),
    ...data.subjects[subject].reagents.map(item => item.id)
  ]);
  for (const task of data.subjects[subject].tasks) {
    for (const sourceId of task.sourceItemIds || []) {
      assert.ok(sourceIds.has(sourceId), subject + " unresolved source ID " + sourceId);
    }
  }
}
console.log("Practical-to-inventory mapping integrity checks passed.");
assert.match(
  data.subjects.physics.tasks.find(task => task.id === "RBSE-XI-PHY-PRJ-08").mappingGap,
  /No Fortin barometer|Fortin barometer/
);
assert.match(
  data.subjects.biology.tasks.find(task => task.id === "RBSE-XII-BIO-PRJ-01").mappingGap,
  /no fixed title|no fixed topic/i
);
assert.equal(data.traceabilityCoverage.physics.unlinkedTasks[0].id, "RBSE-XI-PHY-PRJ-08");
assert.equal(data.traceabilityCoverage.biology.unlinkedTasks[0].id, "RBSE-XII-BIO-PRJ-01");




const bioIndexAudit = await readFile(
  new URL("../../data/catalogues/ncert_biology_with_microscope_index_audit_2026_11_10.csv", import.meta.url),
  "utf8"
);
const bioIndexLines = bioIndexAudit.trimEnd().split(/\r?\n/);
assert.equal(bioIndexLines.length, 178, "Biology with-microscope visual index audit must contain 177 data rows");
assert.match(bioIndexLines[0], /index_audit_source_sha256/);
assert.equal((bioIndexAudit.match(/VISUALLY_CONFIRMED_IN_CURRENT_UPLOAD/g) || []).length, 177);
assert.equal((bioIndexAudit.match(/VISUALLY_CHECKED_CURRENT_UPLOAD/g) || []).length, 26);
assert.match(bioIndexAudit, /Wire Gauze[^\n]*Asbestos centre|Wire Gauze[^\n]*asbestos/i);
assert.match(bioIndexAudit, /Permanent Slide: Student Laboratory Microscope|microscope, not a slide/i);
const bioSource = data.sourceDocuments.find(source => source.sourceId === "BIO-KIT-WITH-MICROSCOPE");
assert.equal(bioSource.indexAudit.entries, 177);
assert.equal(bioSource.indexAudit.itemRecordsExcludingDocumentation, 175);
assert.equal(bioSource.indexAudit.completeDetailPageAudit, false);
assert.equal(bioSource.indexAudit.detailPagesVisuallyCheckedPhysicalItems, 25);
assert.deepEqual(bioSource.indexAudit.detailPagesVisuallyChecked, [13,14,15,22,26,43,53,55,56,57,64,66,67,68,69,72,73,74,75,79,83,84,87,93,198,199]);
const bioWireGauze = data.subjects.biology.inventory.find(item => item.id === "NCERT-BIO-WM-SPEC-079");
assert.match(bioWireGauze.safety, /ASBESTOS HAZARD/);
assert.equal(bioWireGauze.visualAudit.status, "VISUALLY_CHECKED_CURRENT_UPLOAD");
for (const [id, page] of [["NCERT-BIO-WM-SPEC-013",22],["NCERT-BIO-WM-SPEC-031",43],["NCERT-BIO-WM-SPEC-045",57],["NCERT-BIO-WM-SPEC-052",64],["NCERT-BIO-WM-SPEC-054",66],["NCERT-BIO-WM-SPEC-055",67],["NCERT-BIO-WM-SPEC-056",68],["NCERT-BIO-WM-SPEC-065",79]]) {
  const auditedItem = data.subjects.biology.inventory.find(item => item.id === id);
  assert.equal(auditedItem.visualAudit.status, "VISUALLY_CHECKED_CURRENT_UPLOAD", id + " visual audit");
  assert.equal(auditedItem.visualAudit.sourcePdfPage, page, id + " source PDF page");
}
const thermometer = data.subjects.biology.inventory.find(item => item.id === "NCERT-BIO-WM-SPEC-065");
assert.match(thermometer.visualAudit.sourceDetail, /ALCOHOL.FILLED/);
for (const [id, page] of [["NCERT-BIO-WM-SPEC-004",13],["NCERT-BIO-WM-SPEC-005",14],["NCERT-BIO-WM-SPEC-006",15],["NCERT-BIO-WM-SPEC-043",55],["NCERT-BIO-WM-SPEC-057",69],["NCERT-BIO-WM-SPEC-060",72],["NCERT-BIO-WM-SPEC-061",73],["NCERT-BIO-WM-SPEC-062",74],["NCERT-BIO-WM-SPEC-063",75],["NCERT-BIO-WM-SPEC-069",83],["NCERT-BIO-WM-SPEC-070",84],["NCERT-BIO-WM-SPEC-073",87]]) {
  const glassItem = data.subjects.biology.inventory.find(item => item.id === id);
  assert.equal(glassItem.visualAudit.status, "VISUALLY_CHECKED_CURRENT_UPLOAD", id + " glassware visual audit");
  assert.equal(glassItem.visualAudit.sourcePdfPage, page, id + " glassware source PDF page");
}
assert.equal(data.subjects.biology.inventory.find(item => item.id === "NCERT-BIO-WM-SPEC-057").quantity, "12");
assert.equal(data.subjects.biology.inventory.find(item => item.id === "NCERT-BIO-WM-SPEC-073").quantity, "2 packs of 50 slides (100 total)");

const bioHammer = data.subjects.biology.inventory.find(item => item.id === "NCERT-BIO-WM-SPEC-056");
assert.match(bioHammer.safety, /digital-only handling/);
const bioMicroscope = data.subjects.biology.inventory.find(item => item.id === "NCERT-BIO-WM-SPEC-176");
assert.match(bioMicroscope.visualAudit.classificationFinding, /Microscope instrument, not a permanent slide/);
console.log("Biology current-upload visual index/detail audit passed: 177 index rows; 25 item detail pages plus 1 credits page visually checked.");

const bioDetailQueue = await readFile(
  new URL("../../data/catalogues/biology_with_microscope_detail_audit_queue_2026_11_10.csv", import.meta.url),
  "utf8"
);
const bioDetailQueueLines = bioDetailQueue.trimEnd().split(/\r?\n/);
assert.equal(bioDetailQueueLines.length, 151, "Biology detail audit queue must contain 150 pending item rows");
const queuedBioIds = [...bioDetailQueue.matchAll(/NCERT-BIO-WM-SPEC-\d{3}/g)].map(match => match[0]);
assert.equal(queuedBioIds.length, 150, "queue must retain one source ID per pending item");
assert.equal(new Set(queuedBioIds).size, 150, "queue source IDs must be unique");
assert.match(bioDetailQueueLines[1], /NCERT-BIO-WM-SPEC-002/);
assert.doesNotMatch(bioDetailQueue, /NCERT-BIO-WM-SPEC-079/, "visually audited Wire Gauze must not re-enter the pending queue");
assert.equal((bioDetailQueue.match(/NOT_VISUALLY_CHECKED_THIS_PASS/g) || []).length, 150);
console.log("Biology detail audit queue checks: 150 pending physical items; source order and IDs preserved.");

const itemAssetTraceability = await readFile(
  new URL("../../data/catalogues/phase1_item_to_3d_asset_model_test_traceability_2026_11_10.csv", import.meta.url),
  "utf8"
);
function parseCsvRows(input) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < input.length; i++) {
    const character = input[i];
    const next = input[i + 1];
    if (quoted) {
      if (character === '"' && next === '"') {
        field += '"';
        i++;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (character !== "\r") {
      field += character;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  assert.equal(quoted, false, "item-asset CSV must close all quoted fields");
  return rows;
}
const itemAssetRows = parseCsvRows(itemAssetTraceability);
assert.equal(itemAssetRows.length, 516, "item-to-asset traceability CSV must contain one header + 515 logical records");
assert.equal(itemAssetRows[0].length, 25, "item-to-asset traceability schema must have 25 columns");
assert.ok(itemAssetRows.slice(1).every(row => row.length === 25), "every logical CSV record must preserve all 25 columns, including embedded newlines/commas");
const expectedItemAssetCounts = {physics:105, chemistry:177, biology:233};
const sourceIdsBySubject = {
  physics: new Set(data.subjects.physics.inventory.map(item => item.id)),
  chemistry: new Set([...data.subjects.chemistry.inventory, ...data.subjects.chemistry.reagents].map(item => item.id)),
  biology: new Set([...data.subjects.biology.inventory, ...data.subjects.biology.reagents].map(item => item.id))
};
const allTraceIds = [];
for (const [subject, expectedCount] of Object.entries(expectedItemAssetCounts)) {
  const rows = itemAssetRows.slice(1).filter(row => row[1] === subject);
  assert.equal(rows.length, expectedCount, subject + " traceability row count");
  for (const row of rows) {
    const [traceId, rowSubject, itemId] = row;
    assert.equal(rowSubject, subject);
    assert.ok(sourceIdsBySubject[subject].has(itemId), subject + " traceability row references unknown item " + itemId);
    assert.equal(row[8], "NOT_CREATED", "3D asset must not be marked created before Phase 5");
    assert.equal(row[21], "NOT_VALIDATED_PHASE_2_BLOCKED", "science model must remain blocked pending Phase 1 exit");
    assert.equal(row[24], "CANDIDATE_REFERENCE_ONLY_NOT_APPROVED_FOR_USE", "candidate source item must not be promoted to approved use");
    assert.equal(row[18], "VIRTUAL_ONLY_NO_REAL_HARDWARE_CONTROL");
    allTraceIds.push(traceId);
  }
}
assert.equal(allTraceIds.length, 515);
assert.equal(new Set(allTraceIds).size, 515, "all traceability IDs must be unique");
console.log("Three-subject item-to-asset/model/test traceability checks: 515 logical CSV rows, 25 columns, unique IDs, source links and blocked states PASS.");

console.log("Dashboard catalogue checks: baseline assertions plus item-asset traceability checks passed.");
console.log("Physics: 105 items / 80 tasks");
console.log("Chemistry: 53 apparatus / 124 historical reagent labels / 41 tasks");
console.log("Biology: 175 kit records / 58 manual reagent labels / 50 tasks");
console.log("Total RBSE task-index rows: 171");


const researchCapabilityRegister = await readFile(
  new URL("../../data/catalogues/research_discovery_capability_register_2026_11_10.csv", import.meta.url),
  "utf8"
);
const researchCapabilityRows = parseCsvRows(researchCapabilityRegister);
assert.equal(researchCapabilityRows.length, 15, "research capability CSV must contain one header + 14 logical records");
assert.equal(researchCapabilityRows[0].length, 11, "research capability register schema must have 11 columns");
assert.ok(researchCapabilityRows.slice(1).every(row => row.length === 11), "every research capability record must preserve all 11 columns");
const researchCapabilityIds = researchCapabilityRows.slice(1).map(row => row[0]);
assert.equal(new Set(researchCapabilityIds).size, 14, "research capability IDs must be unique");
assert.deepEqual(
  researchCapabilityIds,
  ["DISC-01","DISC-02","DISC-03","DISC-04","CHEM-01","CHEM-02","PHY-01","NUC-01","NUC-02","NUC-03","NUC-04","NUC-05","BIO-01","XDOM-01"],
  "research capability rows must retain the reviewed source order"
);
assert.ok(researchCapabilityRows.slice(1).every(row => row[9] === "DESIGN_ONLY"), "future research capabilities must not be represented as implemented");
assert.match(researchCapabilityRows.find(row => row[0] === "NUC-01")[4], /NNDC ENSDF public-beta/);
assert.match(researchCapabilityRows.find(row => row[0] === "NUC-04")[4], /IAEA EXFOR/);
assert.match(researchCapabilityRows.find(row => row[0] === "NUC-05")[7], /IUPAC\/IUPAP/);
console.log("Research discovery capability register: 14 rows, 11 columns, unique ordered IDs and DESIGN_ONLY/source gates PASS.");


const msclDetailAudit = await readFile(
  new URL("../../data/catalogues/mscl_detail_audit_2026_11_10.csv", import.meta.url),
  "utf8"
);
const msclDetailRows = parseCsvRows(msclDetailAudit);
assert.equal(msclDetailRows.length, 54, "MSCL visual detail audit must contain one header + 53 physical item records");
assert.equal(msclDetailRows[0].length, 15, "MSCL detail audit schema must have 15 columns");
assert.ok(msclDetailRows.slice(1).every(row => row.length === 15), "all MSCL detail audit rows must preserve 15 columns");
const expectedMsclAuditIds = Array.from(
  { length: 53 },
  (_, index) => `NCERT-MSCL-SPEC-${String(index + 2).padStart(3, "0")}`
);
assert.deepEqual(msclDetailRows.slice(1).map(row => row[4]), expectedMsclAuditIds, "all 53 physical MSCL item IDs must be present in source order 2–54");
assert.deepEqual(msclDetailRows.slice(1).map(row => Number(row[3])), Array.from({ length: 53 }, (_, index) => index + 2), "MSCL audit index numbers must be continuous from item 2 through 54");
assert.ok(msclDetailRows.slice(1).every(row => row[0] === "MSCL_copy.pdf"), "MSCL audit must retain the reviewed source filename");
assert.ok(msclDetailRows.slice(1).every(row => row[1] === "db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d"), "MSCL visual audit must remain linked to the exact registered upload fingerprint");
assert.ok(msclDetailRows.slice(1).every(row => row[2] === "USER_UPLOADED_UNAUTHENTICATED"), "visual inspection must not imply official NCERT byte authentication");
assert.ok(msclDetailRows.slice(1).every(row => row[13].startsWith("VISUALLY_CHECKED_REGISTERED_USER_UPLOAD")), "all 53 audit statuses must name the inspected user-uploaded source boundary");
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-004")[11], /NEEDS_TECHNICAL_REVIEW/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-015")[11], /NEEDS_TECHNICAL_REVIEW/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-032")[11], /Major text\/drawing dimension discrepancy/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-032")[13], /NEEDS_DIMENSION_REVIEW/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-033")[11], /technical review required before fluid geometry/i);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-033")[13], /NEEDS_GEOMETRY_REVIEW/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-034")[12], /ASBESTOS HAZARD/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-022")[12], /OPEN-FLAME HAZARD/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-024")[12], /MERCURY.*TOXICITY HAZARD/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-052")[12], /GAS-GENERATION ASSEMBLY/);
assert.match(msclDetailRows.find(row => row[4] === "NCERT-MSCL-SPEC-046")[11], /PACKAGE_COUNT_REVIEW/);
const msclCatalogueRows = parseCsvRows(await readFile(
  new URL("../../data/catalogues/ncert_mscl_spec_items.csv", import.meta.url),
  "utf8"
));
const msclCatalogueById = new Map(msclCatalogueRows.slice(1).map(row => [row[0], row]));
assert.ok(expectedMsclAuditIds.every(id => (msclCatalogueById.get(id)?.[9] || "").includes("VISUAL_CHECK")), "all 53 physical MSCL items must be visually flagged in the source catalogue");
assert.equal(msclCatalogueRows.length, 56, "MSCL source catalogue retains 55 rows plus header (manual and credit are non-physical)");
assert.ok(!/VISUAL_CHECK/.test(msclCatalogueById.get("NCERT-MSCL-SPEC-001")?.[9] || ""), "Kit Manual must not be counted as a physical item visual audit");
assert.ok(!/VISUAL_CHECK/.test(msclCatalogueById.get("NCERT-MSCL-SPEC-055")?.[9] || ""), "Document Development Team credit must not be counted as a physical item visual audit");
console.log("MSCL visual detail audit: 53/53 physical item records, 15-column schema, continuous source order, exact upload fingerprint, authentication, hazard, technical-review and measurement-calibration boundaries PASS.");

const officialAttachmentSizeAudit = await readFile(
  new URL("../../data/catalogues/ncert_official_spec_attachment_size_recheck_2026_11_10.csv", import.meta.url),
  "utf8"
);
const officialAttachmentRows = parseCsvRows(officialAttachmentSizeAudit);
assert.equal(officialAttachmentRows.length, 5, "official NCERT attachment size recheck must contain one header + four source rows");
assert.equal(officialAttachmentRows[0].length, 15, "official attachment size recheck schema must have 15 columns");
assert.ok(officialAttachmentRows.slice(1).every(row => row.length === 15), "all official attachment size records must preserve 15 columns");
assert.deepEqual(
  officialAttachmentRows.slice(1).map(row => row[0]),
  ["MSCL_XI_XII","BIO_WITH_MICROSCOPE_XI_XII","BIO_WITHOUT_MICROSCOPE_XI_XII","PHYSICS_KIT_XI_XII"],
  "four NCERT Grade XI-XII subject/variant URLs must stay separate and in source order"
);
const officialSizes = new Map(officialAttachmentRows.slice(1).map(row => [row[0], row]));
assert.deepEqual(
  ["19808858","59585913","63918957","42539010"],
  officialAttachmentRows.slice(1).map(row => row[4]),
  "official attachment response content lengths must remain recorded exactly"
);
assert.ok(officialAttachmentRows.slice(1).every(row => row[6] === "Not downloaded" && row[7] === "UNKNOWN"), "response sizes must not be misrepresented as downloaded official bytes or hashes");
assert.equal(officialSizes.get("MSCL_XI_XII")[13], "b991bd409074478c6ff0557a481b251de4a65727f50872e0c47e14d2df472b2e");
assert.equal(officialSizes.get("MSCL_XI_XII")[12], "19808858");
assert.equal(officialSizes.get("MSCL_XI_XII")[14], "SIZE_MATCH_ONLY_NOT_BYTE_AUTHENTICATED");
assert.equal(officialSizes.get("BIO_WITH_MICROSCOPE_XI_XII")[4] - 59620970, -35057);
assert.equal(officialSizes.get("BIO_WITH_MICROSCOPE_XI_XII")[14], "SIZE_MISMATCH_35057_BYTES_NOT_BYTE_AUTHENTICATED");
assert.equal(officialSizes.get("BIO_WITHOUT_MICROSCOPE_XI_XII")[14], "PRIOR_UPLOAD_ACKNOWLEDGED_NO_SIZE_COMPARISON");
assert.equal(officialSizes.get("PHYSICS_KIT_XI_XII")[14], "PRIOR_UPLOAD_ACKNOWLEDGED_NO_SIZE_COMPARISON");
console.log("NCERT official attachment size recheck: four separate link targets, 15-column evidence register, response-only size metadata and non-authentication boundaries PASS.");


const physicsMetrologyAudit = await readFile(
  new URL("../../data/catalogues/physics_measurement_metrology_readiness_2026_11_10.csv", import.meta.url),
  "utf8"
);
const physicsMetrologyRows = parseCsvRows(physicsMetrologyAudit);
assert.equal(physicsMetrologyRows.length, 19, "Physics metrology register must contain one header + 18 instrument records");
assert.equal(physicsMetrologyRows[0].length, 17, "Physics metrology schema must have 17 columns");
assert.ok(physicsMetrologyRows.slice(1).every(row => row.length === 17), "all Physics metrology records must preserve 17 columns");
const expectedPhysicsMetrologyIds = [
  "NCERT-PHY-KIT-003","NCERT-PHY-KIT-004","NCERT-PHY-KIT-005","NCERT-PHY-KIT-006",
  "NCERT-PHY-KIT-008","NCERT-PHY-KIT-009","NCERT-PHY-KIT-024","NCERT-PHY-KIT-031",
  "NCERT-PHY-KIT-038","NCERT-PHY-KIT-053","NCERT-PHY-KIT-071","NCERT-PHY-KIT-072",
  "NCERT-PHY-KIT-080","NCERT-PHY-KIT-088","NCERT-PHY-KIT-090","NCERT-PHY-KIT-092",
  "NCERT-PHY-KIT-093","NCERT-PHY-KIT-106"
];
assert.deepEqual(physicsMetrologyRows.slice(1).map(row => row[1]), expectedPhysicsMetrologyIds, "Physics metrology records must preserve the selected source order");
const physicsManualRows = parseCsvRows(await readFile(
  new URL("../../data/catalogues/ncert_physics_kit_manual_items.csv", import.meta.url),
  "utf8"
));
const physicsManualById = new Map(physicsManualRows.slice(1).map(row => [row[0], row]));
const physicsMetrologyRecordIds = physicsMetrologyRows.slice(1).map(row => row[0]);
assert.equal(new Set(physicsMetrologyRecordIds).size, 18, "Physics metrology register IDs must be unique");
for (const row of physicsMetrologyRows.slice(1)) {
  const manualRow = physicsManualById.get(row[1]);
  assert.ok(manualRow, "Physics metrology source item must resolve: " + row[1]);
  assert.equal(row[2], manualRow[1], "manual row number must match the source catalogue for " + row[1]);
  assert.equal(row[3], manualRow[2], "instrument name must match the source item label for " + row[1]);
  assert.equal(row[7], "MANUAL_TEXT_INSPECTED", "manual evidence label must be explicit for " + row[1]);
  assert.equal(row[8], "NOT_ESTABLISHED_BY_ITEM_SCHEDULE", "procurement spec must not be inferred from manual row for " + row[1]);
  assert.equal(row[11], "UNKNOWN", "calibration traceability must remain unknown for " + row[1]);
  assert.equal(row[15], "NOT_IMPLEMENTED_PHASE_8_BLOCKED", "Physics metrology engine must remain blocked for " + row[1]);
  assert.match(row[16], /No|Do not|Use only|until|must not/i, "result release boundary must be explicit for " + row[1]);
}
assert.match(physicsMetrologyRows.find(row => row[1] === "NCERT-PHY-KIT-080")[5], /COM, VΩmA and 10 A DC terminals/);
assert.match(physicsMetrologyRows.find(row => row[1] === "NCERT-PHY-KIT-088")[5], /500 cm uniform wire/);
assert.match(physicsMetrologyRows.find(row => row[1] === "NCERT-PHY-KIT-106")[5], /1 m scale/);
assert.match(physicsMetrologyRows.find(row => row[1] === "NCERT-PHY-KIT-024")[5], /250g/);
console.log("Physics measurement/metrology readiness: 18 source-linked instruments, 17-column schema, calibration/procurement gaps and Phase 8 result blocks PASS.");


// MSCL item-level evidence/safety review queue: exact source traceability and fail-closed states.
const msclReviewQueueText = await readFile(
  new URL("../../data/catalogues/mscl_review_gap_queue_2026_11_10.csv", import.meta.url),
  "utf8"
);
const msclReviewRows = parseCsvRows(msclReviewQueueText);
assert.equal(msclReviewRows.length, 54, "MSCL review queue must contain one header + all 53 physical items");
assert.equal(msclReviewRows[0].length, 17, "MSCL review queue schema must have 17 columns");
assert.ok(msclReviewRows.slice(1).every(row => row.length === 17), "all MSCL review queue records must preserve 17 columns");
assert.deepEqual(
  msclReviewRows[0],
  ["source_document","source_sha256","source_authentication_state","source_index_no","source_item_id","item_name","source_pdf_page_range","source_visual_audit_status","review_domains","priority","source_evidence_gap","safety_boundary","required_closure_evidence","review_owner","review_status","allowed_current_representation","phase_gate"],
  "MSCL review queue columns must retain their documented order"
);
const msclReviewById = new Map(msclReviewRows.slice(1).map(row => [row[4], row]));
assert.equal(msclReviewById.size, 53, "MSCL review queue must contain 53 unique source item IDs");
const allowedReviewDomains = new Set([
  "DIMENSION_OR_GEOMETRY",
  "METROLOGY_OR_MODEL_VALIDATION",
  "MATERIAL_IDENTITY_OR_COMPATIBILITY",
  "SAFETY_AND_USE_BOUNDARY",
  "PROCUREMENT_AND_ACCEPTANCE",
  "SOURCE_SPECIFICATION_CLARIFICATION"
]);
for (let index = 0; index < 53; index++) {
  const source = msclDetailRows[index + 1];
  const review = msclReviewRows[index + 1];
  assert.equal(review[4], source[4], "MSCL review queue must preserve source order and ID");
  assert.equal(review[3], source[3], "MSCL review index must match source audit");
  assert.equal(review[5], source[5], "MSCL item label must match source audit");
  assert.equal(review[6], source[6], "MSCL page reference must match source audit");
  assert.equal(review[7], source[13], "source visual-audit status must be preserved verbatim");
  assert.equal(review[0], source[0]);
  assert.equal(review[1], source[1], "MSCL review row must keep exact source fingerprint");
  assert.equal(review[2], "USER_UPLOADED_UNAUTHENTICATED", "review queue must not imply official source authentication");
  assert.equal(review[10], source[11], "source evidence gap must remain verbatim");
  assert.equal(review[11], source[12], "safety boundary must remain verbatim");
  assert.equal(review[13], "NOT_ASSIGNED", "no reviewer/owner may be invented");
  assert.equal(review[14], "OPEN_NOT_REVIEWED_OR_APPROVED", "queue must remain fail-closed until independent review");
  assert.match(review[15], /NOT_APPROVED_FOR_PHYSICAL_USE_OR_AUTHENTIC_MODEL/);
  assert.match(review[16], /PHASE_1_1_OPEN.*PHASE_2_AND_PHASE_5_REMAIN_BLOCKED/);
  const domains = review[8].split(";");
  assert.ok(domains.length > 0 && domains.every(domain => allowedReviewDomains.has(domain)), "review domains must use the controlled vocabulary");
  assert.ok(review[12].length > 30, "each queue row must define closure evidence");
}
for (const [id, pattern] of [
  ["NCERT-MSCL-SPEC-004", /NEEDS_TECHNICAL_REVIEW/],
  ["NCERT-MSCL-SPEC-015", /NEEDS_TECHNICAL_REVIEW/],
  ["NCERT-MSCL-SPEC-032", /NEEDS_DIMENSION_REVIEW/],
  ["NCERT-MSCL-SPEC-033", /NEEDS_GEOMETRY_REVIEW/],
  ["NCERT-MSCL-SPEC-034", /ASBESTOS HAZARD/],
  ["NCERT-MSCL-SPEC-022", /OPEN-FLAME HAZARD/],
  ["NCERT-MSCL-SPEC-024", /MERCURY.*TOXICITY HAZARD/],
  ["NCERT-MSCL-SPEC-052", /GAS-GENERATION ASSEMBLY/]
]) {
  const row = msclReviewById.get(id);
  assert.ok(row, "critical MSCL review item must be present: " + id);
  assert.match(row[10] + " " + row[11] + " " + row[7], pattern, "critical source technical gap, audit status or safety boundary must persist: " + id);
  assert.notEqual(row[14], "APPROVED", "critical items cannot be auto-approved");
}
console.log("MSCL evidence/safety review queue: 53 source-linked rows, 17 columns, source visual status and verbatim gaps, controlled review domains and fail-closed approval/phase boundaries PASS.");


// Load the current MSCL safety-screen data, including task-scope review columns.
const msclSafetyScreenRows = parseCsvRows(await readFile(
  new URL("../../data/catalogues/ncert_mscl_manual_reagent_safety_screen.csv", import.meta.url),
  "utf8"
));
assert.equal(msclSafetyScreenRows.length, 127, "MSCL safety screen must contain 126 records");
assert.equal(msclSafetyScreenRows[0].length, 19, "MSCL safety screen must contain 19 columns");
assert.ok(msclSafetyScreenRows.slice(1).every(row => row.length === 19));
const safetyScreenById = new Map(msclSafetyScreenRows.slice(1).map(row => [row[0], row]));
assert.equal(safetyScreenById.size, 126);
assert.ok(msclSafetyScreenRows.slice(1).every(row => row[12] === "BLOCKED_NO_LIVE_USE; SIMULATION_REFERENCE_ONLY"));
assert.ok(msclSafetyScreenRows.slice(1).every(row => row[13] === "IDENTITY_SPECIFIC_CURRENT_SDS_AND_EXPOSURE_REVIEW_REQUIRED"));
assert.ok(msclSafetyScreenRows.slice(1).every(row => row[14] === "NOT_APPROVED"));
assert.ok(msclSafetyScreenRows.slice(1).every(row => row[15] === "NOT_A_CURRENT_SUPPLY_OR_BOM_RECORD"));

// Load the current task-level reagent matrix after product/reagent role separation.
const rbseReagentMatrixRows = parseCsvRows(await readFile(
  new URL("../../data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv", import.meta.url),
  "utf8"
));
assert.equal(rbseReagentMatrixRows.length, 42, "RBSE reagent matrix must contain 41 task rows");
assert.equal(rbseReagentMatrixRows[0].length, 23, "RBSE reagent matrix schema must contain 23 columns");
assert.ok(rbseReagentMatrixRows.slice(1).every(row => row.length === 23));
const matrixHeader = rbseReagentMatrixRows[0];
const matrixIndex = Object.fromEntries(matrixHeader.map((name,index) => [name,index]));
const matrixTasks = rbseReagentMatrixRows.slice(1);
const matrixTaskIds = matrixTasks.map(row => row[matrixIndex.rbse_task_id]);
assert.equal(new Set(matrixTaskIds).size, 41, "RBSE task IDs must be unique");
assert.ok(matrixTasks.every(row => row[matrixIndex.validation_status] === "DOCUMENTARY_CANDIDATE_ONLY; CHEMISTRY_EXPERT_AND_METHOD_SOURCE_REVIEW_REQUIRED"));
assert.ok(matrixTasks.every(row => row[matrixIndex.current_official_bom_status] === "NOT_RETRIEVED_OR_AUTHENTICATED"));
assert.ok(matrixTasks.every(row => row[matrixIndex.physical_lab_status] === "BLOCKED; SIMULATION_OR_PREPARED_REFERENCE_DATA_ONLY"));
const matrixCandidateIdsByTask = new Map();
for (const row of matrixTasks) {
  matrixCandidateIdsByTask.set(
    row[matrixIndex.rbse_task_id],
    (row[matrixIndex.candidate_manual_reagent_record_ids] || "").split(";").filter(Boolean)
  );
}
const allMatrixReagentCandidateIds = new Set([...matrixCandidateIdsByTask.values()].flat());
assert.equal(allMatrixReagentCandidateIds.size, 24, "24 unique input-reagent candidate IDs must remain in matrix");
assert.ok([...allMatrixReagentCandidateIds].every(id => safetyScreenById.has(id)));
assert.equal(matrixTasks.find(row => row[matrixIndex.rbse_task_id] === "RBSE-XII-CHEM-OPT-03")[matrixIndex.candidate_manual_product_or_output_reference_ids], "MSCL-MAN-REAG-005=Acetanilide");
assert.equal(matrixCandidateIdsByTask.get("RBSE-XII-CHEM-OPT-03").length, 0, "Acetanilide product must not be treated as an input reagent");

// Task-scoped reconciliation of RBSE/MSCL reagent names and roles, using the original RBSE PDFs.
const reagentReconciliationRows = parseCsvRows(await readFile(
  new URL("../../data/catalogues/rbse_mscl_reagent_crosswalk_reconciliation_2026_11_10.csv", import.meta.url),
  "utf8"
));
assert.equal(reagentReconciliationRows.length, 42, "reagent reconciliation must contain exactly one row per RBSE Chemistry task");
assert.equal(reagentReconciliationRows[0].length, 24, "task-scoped reconciliation schema must retain 24 columns");
assert.ok(reagentReconciliationRows.slice(1).every(row => row.length === 24));
const reconciliationHeader = reagentReconciliationRows[0];
const reconciliationIndex = Object.fromEntries(reconciliationHeader.map((name,index) => [name,index]));
assert.deepEqual(
  reagentReconciliationRows.slice(1).map(row => row[reconciliationIndex.rbse_task_id]),
  matrixTaskIds,
  "reconciliation must preserve every task ID and the source matrix order"
);
const scopedScreenIdsByTask = new Map();
for (const row of msclSafetyScreenRows.slice(1)) {
  const id = row[0];
  if (!row[17].startsWith("TASK_SECTION_TEXT_MATCH_CANDIDATE")) continue;
  for (const taskId of (row[10] || "").split(";").filter(Boolean)) {
    scopedScreenIdsByTask.set(taskId, [...(scopedScreenIdsByTask.get(taskId) || []), id]);
  }
}
const matrixTaskSet = new Set(matrixTasks
  .filter(row => (row[matrixIndex.candidate_manual_reagent_record_ids] || "").trim())
  .map(row => row[matrixIndex.rbse_task_id]));
const scopedScreenTaskSet = new Set(scopedScreenIdsByTask.keys());
assert.equal(scopedScreenTaskSet.size, 12, "12 task IDs have task-section text candidates after source context review");
assert.equal(matrixTaskSet.size, 16, "16 task IDs retain input-reagent or supplemental candidates after product separation");
const reconciliationStatusCounts = {};
for (const row of reagentReconciliationRows.slice(1)) {
  const taskId = row[reconciliationIndex.rbse_task_id];
  const screenIds = scopedScreenIdsByTask.get(taskId) || [];
  const matrixIds = matrixCandidateIdsByTask.get(taskId) || [];
  const rawIds = row[reconciliationIndex.raw_full_document_screen_candidate_ids].split(";").filter(Boolean);
  const excludedIds = row[reconciliationIndex.excluded_nonreagent_or_outofscope_screen_ids].split(";").filter(Boolean);
  const scopedIds = row[reconciliationIndex.task_scoped_screen_candidate_ids].split(";").filter(Boolean);
  const shared = screenIds.filter(id => matrixIds.includes(id));
  const screenOnly = screenIds.filter(id => !matrixIds.includes(id));
  const matrixOnly = matrixIds.filter(id => !screenIds.includes(id));
  assert.deepEqual(scopedIds, screenIds, taskId + " task-scoped screen IDs must resolve");
  assert.deepEqual(rawIds, [...new Set([...screenIds, ...excludedIds])], taskId + " raw matches must be accounted for as scoped or excluded IDs");
  assert.deepEqual((row[reconciliationIndex.shared_task_scoped_candidate_ids] || "").split(";").filter(Boolean), shared, taskId + " shared task-scoped candidates must be correct");
  assert.deepEqual((row[reconciliationIndex.screen_only_task_candidate_ids] || "").split(";").filter(Boolean), screenOnly, taskId + " screen-only candidates must be correct");
  assert.deepEqual((row[reconciliationIndex.matrix_only_candidate_ids] || "").split(";").filter(Boolean), matrixOnly, taskId + " matrix-only candidates must be correct");
  reconciliationStatusCounts[row[reconciliationIndex.scope_reconciliation_status]] = (reconciliationStatusCounts[row[reconciliationIndex.scope_reconciliation_status]] || 0) + 1;
  assert.equal(row[reconciliationIndex.matrix_validation_status], "DOCUMENTARY_CANDIDATE_ONLY; CHEMISTRY_EXPERT_AND_METHOD_SOURCE_REVIEW_REQUIRED");
  assert.equal(row[reconciliationIndex.current_official_bom_status], "NOT_RETRIEVED_OR_AUTHENTICATED");
  assert.equal(row[reconciliationIndex.physical_lab_status], "BLOCKED; SIMULATION_OR_PREPARED_REFERENCE_DATA_ONLY");
  assert.ok(row[reconciliationIndex.review_note].length > 40, taskId + " must retain a task-scope review note");
}
assert.deepEqual(reconciliationStatusCounts, {
  "NO_TASK_SCOPED_CANDIDATE_LINK; NOT_PROOF_OF_NO_REAGENT":24,
  "BOTH_TRACKS_HAVE_TASK_SCOPED_CANDIDATES; RECORD_IDS_ALIGN; METHOD_REVIEW_REQUIRED":5,
  "BOTH_TRACKS_HAVE_TASK_SCOPED_CANDIDATES; MATRIX_HAS_ADDITIONAL_CONTEXT_OR_VARIANT_IDS; REVIEW":7,
  "MATRIX_CONTEXTUAL_OR_SPECIES_CANDIDATES_WITHOUT_TASK_SCOPED_SCREEN_MATCH; REVIEW":4,
  "PRODUCT_OUTPUT_REFERENCE_ONLY; NO_INPUT_REAGENT_MAPPING":1
});
assert.equal(reagentReconciliationRows.slice(1).find(row => row[reconciliationIndex.rbse_task_id] === "RBSE-XII-CHEM-OPT-01")[reconciliationIndex.excluded_nonreagent_or_outofscope_screen_ids], "MSCL-MAN-REAG-001;MSCL-MAN-REAG-086");
assert.equal(reagentReconciliationRows.slice(1).find(row => row[reconciliationIndex.rbse_task_id] === "RBSE-XII-CHEM-OPT-04")[reconciliationIndex.excluded_nonreagent_or_outofscope_screen_ids], "MSCL-MAN-REAG-117");
assert.equal(reagentReconciliationRows.slice(1).find(row => row[reconciliationIndex.rbse_task_id] === "RBSE-XII-CHEM-OPT-03")[reconciliationIndex.matrix_product_output_reference_ids], "MSCL-MAN-REAG-005=Acetanilide");
assert.equal(reagentReconciliationRows.slice(1).find(row => row[reconciliationIndex.rbse_task_id] === "RBSE-XII-CHEM-REDOX-02")[reconciliationIndex.excluded_nonreagent_or_outofscope_screen_ids], "MSCL-MAN-REAG-014");
assert.equal(reagentReconciliationRows.slice(1).find(row => row[reconciliationIndex.rbse_task_id] === "RBSE-XII-CHEM-OPT-02")[reconciliationIndex.excluded_nonreagent_or_outofscope_screen_ids], "MSCL-MAN-REAG-014");
assert.ok(reagentReconciliationRows.slice(1).every(row => row[reconciliationIndex.scope_reconciliation_status].length > 10));
console.log("RBSE/MSCL task-scoped crosswalk: 41 tasks, 24 columns; 12 task-section candidates, 4 contextual-only matrix tasks, 1 separate product-output ref, 24 without assigned candidates; false lexical/role matches excluded; all safety and method gates remain closed.");
