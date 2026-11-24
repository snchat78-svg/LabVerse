import { chromium } from "playwright";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const inventory = JSON.parse(await readFile("../dashboard/data/inventory.json", "utf8"));
const taxonomySource = await readFile("src/stockroomTaxonomy.ts", "utf8");
const taxonomyMatch = taxonomySource.match(/export const cabinetBySubjectCategory: Record<string, Record<string, string>> = ([\\s\\S]*);\\s*$/);
assert.ok(taxonomyMatch, "generated taxonomy object must be parseable");
const taxonomy = JSON.parse(taxonomyMatch[1]);
const subjects = ["physics", "chemistry", "biology"];
const browser = await chromium.launch({headless:true});
let checkedAllStock = 0;
let checkedCabinetRoutes = 0;
try {
  const page = await browser.newPage({viewport:{width:1440,height:1000}});
  page.on("pageerror", error => { throw error; });
  await page.goto("http://127.0.0.1:4174/", {waitUntil:"networkidle"});
  for (const subject of subjects) {
    const expectedRows = [
      ...inventory.subjects[subject].inventory,
      ...inventory.subjects[subject].reagents
    ];
    const expectedIds = expectedRows.map(row => row.id);
    assert.equal(new Set(expectedIds).size, expectedIds.length, subject + ": source IDs must be unique");
    const unmapped = expectedRows.filter(row => !row.category || !taxonomy[subject]?.[row.category]);
    assert.deepEqual(unmapped.map(row => ({id:row.id,category:row.category ?? null})), [],
      subject + ": every row must have an explicit cabinet mapping; no silent Other / Needs review fallback");
    const expectedByCabinet = new Map();
    for (const row of expectedRows) {
      const cabinet = taxonomy[subject][row.category];
      if (!expectedByCabinet.has(cabinet)) expectedByCabinet.set(cabinet, []);
      expectedByCabinet.get(cabinet).push(row.id);
    }

    await page.locator(".back-button").count().then(async count => { if (count) await page.locator(".back-button").click(); });
    const cardClass = subject === "physics" ? "violet" : subject === "chemistry" ? "amber" : "teal";
    await page.locator(".subject-card." + cardClass).click();
    await page.getByRole("heading", {name:subject[0].toUpperCase()+subject.slice(1)+" Lab"}).waitFor();
    await page.getByRole("button", {name:/All stock/}).click();
    const allIds = await page.locator(".item[data-item-id]").evaluateAll(nodes => nodes.map(node => node.getAttribute("data-item-id")));
    assert.equal(allIds.length, expectedIds.length, subject + ": All stock count must match inventory + reagent rows");
    assert.equal(new Set(allIds).size, allIds.length, subject + ": All stock must not duplicate any item ID");
    assert.deepEqual([...allIds].sort(), [...expectedIds].sort(), subject + ": All stock must expose every source ID exactly once");
    checkedAllStock += allIds.length;

    for (const [cabinet, ids] of expectedByCabinet) {
      const cabinetButton = page.getByRole("button", {name:new RegExp(cabinet.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&"))});
      assert.equal(await cabinetButton.count(), 1, subject + ": cabinet navigation missing or duplicated: " + cabinet);
      await cabinetButton.click();
      const cabinetIds = await page.locator(".item[data-item-id]").evaluateAll(nodes => nodes.map(node => node.getAttribute("data-item-id")));
      assert.equal(cabinetIds.length, ids.length, subject + "/" + cabinet + ": cabinet count mismatch");
      assert.equal(new Set(cabinetIds).size, cabinetIds.length, subject + "/" + cabinet + ": duplicate IDs inside cabinet");
      assert.deepEqual([...cabinetIds].sort(), [...ids].sort(), subject + "/" + cabinet + ": cabinet must expose exactly its mapped source IDs");
      checkedCabinetRoutes += ids.length;
    }
  }
  assert.equal(checkedAllStock, 515, "coverage baseline changed: review expected total before accepting");
  assert.equal(checkedCabinetRoutes, 515, "each catalogue row must be reached through exactly one cabinet");
  console.log("LabVerse item-level stockroom coverage: PASS");
  console.log("All stock unique IDs checked:", checkedAllStock);
  console.log("Cabinet route memberships checked:", checkedCabinetRoutes);
  console.log("Subject/cabinet routes checked:", subjects.length, "/", checkedCabinetRoutes);
} finally {
  await browser.close();
}
