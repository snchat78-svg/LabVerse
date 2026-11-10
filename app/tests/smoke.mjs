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

    // Virtual Experiment Lab: bench is visible, practical catalogue is not.
    await page.locator('.workspace-tabs button', {hasText:"Virtual Experiment Lab"}).click();
    assert.equal(await page.locator(".bench-panel").count(), 1);
    assert.equal(await page.locator(".practical-panel").count(), 0);
    assert.match(await page.locator(".bench-panel").innerText(), /Experiment workbench/);
    await page.locator(".detail-panel").getByRole("button", {name:/Add selected item as candidate placeholder/}).click();
    assert.equal(await page.locator(".bench-item").count(), 1);
    assert.match(await page.locator(".bench-panel").innerText(), /CANDIDATE PLACEHOLDER/);
    results.push("Virtual Experiment Lab candidate workbench");

    // Scientific Analysis must show readiness status, never fabricate results.
    await page.locator('.workspace-tabs button', {hasText:"Scientific Analysis"}).click();
    assert.match(await page.locator(".analysis-workspace").innerText(), /No validated scientific model connected/);
    assert.match(await page.locator(".analysis-workspace").innerText(), /No calculated or predicted result/);
    assert.equal(await page.locator(".bench-panel").count(), 0);
    results.push("Scientific Analysis NOT_MODELLED boundary");

    // Research Studio makes a structured, session-local draft only.
    await page.locator('.workspace-tabs button', {hasText:"Research Studio"}).click();
    await page.locator('textarea').nth(0).fill("Does light intensity change the rate of photosynthesis?");
    await page.locator('textarea').nth(1).fill("Increasing light intensity may increase the rate until another factor becomes limiting.");
    await page.locator('textarea').nth(2).fill("CO2 concentration or temperature may be the limiting factor.");
    await page.locator(".research-variable-grid input").nth(0).fill("Light intensity");
    await page.locator(".research-variable-grid input").nth(1).fill("Oxygen production rate");
    await page.locator('textarea').nth(3).fill("Plant species, temperature, CO2 availability and measurement duration.");
    await page.getByRole("button", {name:"Preview research draft"}).click();
    assert.match(await page.locator(".research-workspace").innerText(), /Local draft preview ready/);
    assert.match(await page.locator(".research-workspace").innerText(), /not saved to cloud/i);
    results.push("Research Studio structured session-local draft");

    // Sidebar selection from home requires the user to choose a subject explicitly.
    await page.locator(".back-button").click();
    await page.locator(".sidebar .nav-link").filter({hasText:"Research Studio"}).click();
    assert.match(await page.locator(".workspace-launch").innerText(), /Choose a subject direction/);
    await page.locator(".workspace-launch-actions button").filter({hasText:"Biology"}).click();
    assert.equal(await page.locator(".workspace-tabs button.active").innerText(), "Research Studio");
    await page.getByRole("heading", {name:"Biology Lab"}).waitFor();
    results.push("Sidebar workspace selection and explicit subject choice");

    // Mobile viewport
    await page.setViewportSize({width:390,height:844});
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    assert.equal(overflow,false,"React app must not overflow horizontally on a 390px viewport");
    assert.deepEqual(errors,[],"React app must not emit browser errors");
    console.log("LabVerse React app browser smoke: 10 groups passed.");
    console.log("PASS: React overview and three subjects");
    console.log("PASS: Physics inventory search and source detail");
    console.log("PASS: XI task filter");
    console.log("PASS: Practical source links and candidate placeholder bench");
    console.log("PASS: Chemistry and Biology source/safety details");
    console.log("PASS: Virtual Experiment Lab candidate workbench");
    console.log("PASS: Scientific Analysis NOT_MODELLED boundary");
    console.log("PASS: Research Studio structured local draft");
    console.log("PASS: Sidebar workspace selection");
    console.log("PASS: Mobile layout and no browser errors");
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
