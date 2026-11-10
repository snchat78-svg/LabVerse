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
assert.match(data.sourceArchivePolicy.noRepeatUploadRule, /must not trigger a repeat upload request/);
console.log("Persistent PDF source archive checks: 9 assertions passed.");

console.log("Dashboard catalogue checks: 18 assertions passed.");
console.log("Physics: 105 items / 80 tasks");
console.log("Chemistry: 53 apparatus / 124 historical reagent labels / 41 tasks");
console.log("Biology: 175 kit records / 58 manual reagent labels / 50 tasks");
console.log("Total RBSE task-index rows: 171");
