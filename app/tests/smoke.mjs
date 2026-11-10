import { chromium } from "playwright";
import assert from "node:assert/strict";

async function main() {
  const browser = await chromium.launch({headless:true});
  const errors = [];
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000}});
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => {
      if (message.type() === "error") errors.push(message.text());
    });

    await page.goto("http://127.0.0.1:4174/", {waitUntil:"networkidle"});
    await page.locator(".hero-row h1").waitFor();
    assert.match(await page.locator(".hero-row h1").innerText(), /Explore\. Experiment\.[\s\S]*Understand\./);
    assert.match(await page.locator(".stats").innerText(), /171/);
    assert.equal(await page.locator(".subject-card").count(), 3);

    // Physics catalogue search and source detail
    await page.locator(".subject-card.violet").click();
    await page.getByRole("heading", {name:"Physics Lab"}).waitFor();
    const inventorySearch = page.locator(".content-grid .search").first();
    await inventorySearch.fill("Vernier caliper");
    await page.getByRole("button", {name:/Vernier caliper/}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /NCERT-PHY-KIT-003|Vernier caliper/);

    // Class filter affects practical count
    await page.locator(".class-select select").selectOption("XI");
    assert.match(await page.locator(".practical-panel .panel-head").innerText(), /41 tasks/);
    assert.equal(await page.locator(".task-list article").count(), 41);

    // Practical -> candidate source item -> placeholder bench.
    const vernierTask = page.locator(".task-list .task").filter({hasText:"RBSE-XI-PHY-EXP-01"});
    await vernierTask.getByRole("button", {name:/Inspect mapped items/}).click();
    await vernierTask.locator(".mapped-item").filter({
      has:page.locator("strong", {hasText:/^Vernier caliper$/})
    }).click();
    assert.match(await page.locator(".detail-panel").innerText(), /NCERT-PHY-KIT-003/);
    await vernierTask.getByRole("button", {name:/Add mapped candidates to workbench/}).click();
    assert.equal(await page.locator(".bench-item").count(), 2);
    assert.match(await page.locator(".bench-panel").innerText(), /CANDIDATE PLACEHOLDER/);

    // Chemistry catalogue opens from the three-direction overview
    await page.locator(".back-button").click();
    await page.locator(".subject-card.amber").click();
    await page.getByRole("heading", {name:"Chemistry Lab"}).waitFor();
    await page.locator(".content-grid .search").first().fill("Acetic acid");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Acetic acid$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /Reference only \/ no live use/i);

    // Biology school-managed reagent warning remains visible
    await page.locator(".back-button").click();
    await page.locator(".subject-card.teal").click();
    await page.getByRole("heading", {name:"Biology Lab"}).waitFor();
    await page.locator(".content-grid .search").first().fill("Mercury");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Mercury$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /school-managed reference \/ not supplied with kit/i);

    // Mobile viewport
    await page.setViewportSize({width:390,height:844});
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    assert.equal(overflow,false,"React app must not overflow horizontally on a 390px viewport");
    assert.deepEqual(errors,[],"React app must not emit browser errors");
    console.log("LabVerse React app browser smoke: 6 groups passed.");
    console.log("PASS: React overview and three subjects");
    console.log("PASS: Physics inventory search and source detail");
    console.log("PASS: XI task filter");
    console.log("PASS: Practical source links and candidate placeholder bench");
    console.log("PASS: Chemistry and Biology source/safety details");
    console.log("PASS: Mobile layout and no browser errors");
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
