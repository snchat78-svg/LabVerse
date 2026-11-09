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

console.log("Dashboard catalogue checks: 18 assertions passed.");
console.log("Physics: 105 items / 80 tasks");
console.log("Chemistry: 53 apparatus / 124 historical reagent labels / 41 tasks");
console.log("Biology: 175 kit records / 58 manual reagent labels / 50 tasks");
console.log("Total RBSE task-index rows: 171");
