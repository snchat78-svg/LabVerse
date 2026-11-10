import { chromium } from "playwright";
import assert from "node:assert/strict";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const errors = [];
  const results = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1050 } });
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => {
      if (message.type() === "error") errors.push(message.text());
    });

    await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
    await page.locator("#stat-tasks").waitFor({ state: "visible" });
    assert.equal(await page.title(), "LabVerse | Scientific Workspace");
    assert.equal(await page.locator("#stat-tasks").innerText(), "171");
    assert.equal(await page.locator("#physics-count").innerText(), "105");
    assert.equal(await page.locator("#chemistry-count").innerText(), "53");
    assert.equal(await page.locator("#biology-count").innerText(), "175");
    results.push("Dashboard overview and source counts");

    // Physics: search + tap-to-add + bench reset.
    await page.locator('.subject-card[data-subject="physics"]').click();
    await page.getByRole("heading", { name: "Physics Lab" }).waitFor();
    await page.locator("#inventory-search").fill("Vernier caliper");
    const vernier = page.locator('[data-item-id="NCERT-PHY-KIT-003"]');
    await vernier.waitFor();
    await vernier.locator("[data-add]").click();
    assert.match(await page.locator("#bench-items").innerText(), /Vernier caliper/);
    assert.equal(await page.locator("#bench-count").innerText(), "1 objects placed");
    await page.locator("#reset-bench").click();
    assert.equal(await page.locator("#bench-count").innerText(), "0 objects placed");
    results.push("Physics search, tap-to-add and reset");

    // Drag/drop uses the same 3D-workbench interaction contract placeholder.
    await page.locator("#inventory-search").fill("Screw gauge");
    await page.locator('[data-item-id="NCERT-PHY-KIT-004"]').dragTo(page.locator("#drop-zone"));
    assert.match(await page.locator("#bench-items").innerText(), /Screw gauge/);
    await page.locator("#reset-bench").click();
    results.push("Physics drag-and-drop to workbench");

    // Chemistry: reagent search and virtual-only status must be visible.
    await page.locator("#back-home").click();
    await page.locator('.subject-card[data-subject="chemistry"]').click();
    await page.locator("#inventory-type").selectOption("reagent");
    await page.locator("#inventory-search").fill("Acetic acid");
    const acetic = page.locator('[data-item-id="MSCL-MAN-REAG-002"]');
    await acetic.waitFor();
    assert.match(await acetic.innerText(), /Reference only|Candidate source/i);
    await acetic.locator("[data-add]").click();
    assert.match(await page.locator("#analysis-copy").innerText(), /source-listed reference only/i);
    assert.match(await page.locator("#bench-items").innerText(), /Acetic acid/);
    results.push("Chemistry reagent reference and no-live-use boundary");

    // Biology: reagent entry is labelled school-managed, not supplied with kit.
    await page.locator("#back-home").click();
    await page.locator('.subject-card[data-subject="biology"]').click();
    await page.locator("#inventory-type").selectOption("reagent");
    await page.locator("#inventory-search").fill("Mercury");
    const mercury = page.locator('[data-item-id="NCERT-BIO-MANUAL-REAG-033"]');
    await mercury.waitFor();
    assert.match(await mercury.innerText(), /Reference only|Candidate source/i);
    await mercury.locator("[data-add]").click();
    assert.match(await page.locator("#analysis-copy").innerText(), /not supplied|reference only/i);
    await page.locator("#class-select").selectOption("XI");
    assert.equal(await page.locator("#task-count").innerText(), "22 tasks");
    results.push("Biology school-managed reagent boundary and Class XI filter");

    // Mobile viewport: no horizontal overflow and subject controls remain usable.
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator("#back-home").click();
    const overflow = await page.evaluate(() =>
      document.documentElement.scrollWidth > window.innerWidth + 1
    );
    assert.equal(overflow, false, "mobile dashboard must not overflow horizontally");
    await page.locator('.subject-card[data-subject="physics"]').click();
    await page.getByRole("heading", { name: "Physics Lab" }).waitFor();
    assert.equal(await page.locator("#subject-view").isVisible(), true);
    results.push("Mobile viewport and subject navigation");

    assert.deepEqual(errors, [], "browser runtime must not log page or console errors");
    console.log("LabVerse browser smoke tests: 6 groups passed.");
    for (const result of results) console.log("PASS:", result);
  } finally {
    await browser.close();
  }
}
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
