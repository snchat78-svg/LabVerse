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
    // Exercise the HTML5 dragstart -> dragover -> drop handlers with one shared DataTransfer.
    // Tap-to-add is tested separately above.
    await page.locator('[data-item-id="NCERT-PHY-KIT-004"]').evaluate(source => {
      const transfer = new DataTransfer();
      source.dispatchEvent(new DragEvent("dragstart", {
        bubbles: true, cancelable: true, dataTransfer: transfer
      }));
      const target = document.querySelector("#drop-zone");
      target.dispatchEvent(new DragEvent("dragover", {
        bubbles: true, cancelable: true, dataTransfer: transfer
      }));
      target.dispatchEvent(new DragEvent("drop", {
        bubbles: true, cancelable: true, dataTransfer: transfer
      }));
    });
    await page.locator("#bench-items").waitFor({ state: "visible" });
    assert.match(await page.locator("#bench-items").innerText(), /Screw gauge/);
    await page.locator("#reset-bench").click();
    results.push("Physics drag-and-drop to workbench");

    // Practical -> candidate source-item -> subject inventory navigation.
    await page.locator("#task-search").fill("Vernier calipers");
    await page.locator('[data-task="RBSE-XI-PHY-EXP-01"]').click();
    const mappedVernier = page.locator('[data-focus-source="NCERT-PHY-KIT-003"]');
    await mappedVernier.waitFor();
    await mappedVernier.click();
    assert.match(await page.locator("#selected-details").innerText(), /Vernier caliper/);
    assert.equal(await page.locator("#inventory-search").inputValue(), "Vernier caliper");
    await page.locator("#task-search").fill("Vernier calipers");
    await page.locator('[data-task="RBSE-XI-PHY-EXP-01"]').click();
    await page.locator("[data-add-linked-setup]").click();
    assert.equal(await page.locator("#bench-count").innerText(), "2 objects placed");
    assert.match(await page.locator("#bench-items").innerText(), /Vernier caliper/);
    assert.match(await page.locator("#bench-items").innerText(), /Beam balance/);
    assert.match(await page.locator("#toast").innerText(), /candidate placeholders/);
    await page.locator("#reset-bench").click();
    results.push("Physics practical candidate setup to workbench");
    results.push("Physics practical-to-inventory source navigation");

    // Keep a real source gap explicit instead of inventing a kit match.
    await page.locator("#task-search").fill("Fortin barometer");
    await page.locator('[data-task="RBSE-XI-PHY-PRJ-08"]').click();
    assert.match(await page.locator("#analysis-copy").innerText(), /Fortin barometer/);
    assert.match(await page.locator("#selected-details").innerText(), /No candidate source links|0/);
    results.push("Physics unmatched Fortin barometer gap is disclosed");

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
    await page.locator("#class-select").selectOption("ALL");
    await page.locator("#task-search").fill("Investigatory project");
    await page.locator('[data-task="RBSE-XII-BIO-PRJ-01"]').click();
    assert.match(await page.locator("#analysis-copy").innerText(), /no fixed title|teacher-assigned/i);
    results.push("Biology school-managed reagent boundary, class filter and open project gap");

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
    console.log("LabVerse browser smoke tests: 9 groups passed.");
    for (const result of results) console.log("PASS:", result);
  } finally {
    await browser.close();
  }
}
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
