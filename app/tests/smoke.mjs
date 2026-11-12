import { chromium } from "playwright";
import assert from "node:assert/strict";

async function main() {
  const browser = await chromium.launch({headless:true});
  const errors = [];
  const results = [];
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
    results.push("React overview and three subjects");

    // Physics catalogue search and source detail
    await page.locator(".subject-card.violet").click();
    await page.getByRole("heading", {name:"Physics Lab"}).waitFor();
    const inventorySearch = page.locator(".content-grid .search").first();
    await inventorySearch.fill("Vernier caliper");
    const itemTypeSelect = page.locator(".inventory-filters select").nth(0);
    const categorySelect = page.locator(".inventory-filters select").nth(1);
    await itemTypeSelect.selectOption("apparatus");
    await categorySelect.selectOption("MEASUREMENT");
    assert.equal(await page.locator(".item").count(), 1);
    await itemTypeSelect.selectOption("reagent");
    assert.equal(await page.locator(".item").count(), 0);
    await itemTypeSelect.selectOption("apparatus");
    await categorySelect.selectOption("all");
    await page.getByRole("button", {name:/Vernier caliper/}).click();
    assert.match(await page.locator(".practical-panel .coverage-note").innerText(), /79\/80 tasks linked/);
    assert.match(await page.locator(".practical-panel .coverage-note").innerText(), /1 unmatched tasks/);
    results.push("Inventory type/category filters and source coverage");
    assert.match(await page.locator(".detail-panel").innerText(), /NCERT-PHY-KIT-003|Vernier caliper/);
    results.push("Physics inventory search and source detail");

    // Class filter affects practical count
    await page.locator(".class-select select").selectOption("XI");
    assert.match(await page.locator(".practical-panel .panel-head").innerText(), /41 tasks/);
    assert.equal(await page.locator(".task-list article").count(), 41);
    results.push("Class XI task filter");

    // Practical -> candidate source item -> placeholder bench.
    const vernierTask = page.locator(".task-list .task").filter({hasText:"RBSE-XI-PHY-EXP-01"});
    await vernierTask.getByRole("button", {name:/Inspect mapped items/}).click();
    await vernierTask.locator(".mapped-item").filter({
      has:page.locator("strong", {hasText:/^Vernier caliper$/})
    }).click();
    assert.match(await page.locator(".detail-panel").innerText(), /NCERT-PHY-KIT-003/);
    await vernierTask.getByRole("button", {name:/Add mapped candidates to workbench/}).click();
    await page.locator('.workspace-tabs button', {hasText:"Virtual Experiment Lab"}).click();
    assert.equal(await page.locator(".bench-item").count(), 2);
    assert.match(await page.locator(".bench-panel").innerText(), /CANDIDATE PLACEHOLDER/);
    results.push("Practical source links and candidate placeholder setup");
    // Desktop drag/drop adds source-catalogue candidates; repeated IDs stay unique.
    await page.locator(".content-grid .search").first().fill("Stopwatch with split timeout");
    const stopwatchItem = page.locator(".item").filter({has:page.locator("strong", {hasText:/^Stopwatch with split timeout$/})});
    await stopwatchItem.waitFor();
    assert.equal(await stopwatchItem.getAttribute("draggable"), "true");
    await stopwatchItem.dragTo(page.locator(".bench-panel"));
    assert.equal(await page.locator(".bench-item").count(), 3);
    assert.match(await page.locator(".bench-panel").innerText(), /Stopwatch with split timeout/);
    await stopwatchItem.dragTo(page.locator(".bench-panel"));
    assert.equal(await page.locator(".bench-item").count(), 3, "the same catalogue ID must not be duplicated");
    results.push("Virtual workbench desktop drag-and-drop and duplicate prevention");
    await page.locator(".bench-item").filter({hasText:"Stopwatch with split timeout"})
      .getByRole("button", {name:"Remove Stopwatch with split timeout from workbench"}).click();
    assert.equal(await page.locator(".bench-item").count(), 2);
    assert.doesNotMatch(await page.locator(".bench-panel").innerText(), /Stopwatch with split timeout/);
    results.push("Virtual workbench individual item removal");

    // An unmatched project stays visible with the reason; no false source match.
    await page.locator('.workspace-tabs button', {hasText:"Learning Lab"}).click();
    await page.locator(".practical-panel .search").fill("Fortin barometer");
    const fortinTask = page.locator(".task-list .task").filter({hasText:"RBSE-XI-PHY-PRJ-08"});
    await fortinTask.waitFor();
    assert.match(await fortinTask.innerText(), /No Fortin barometer or mercury barometer row appears/i);
    results.push("Unmatched Physics source gap disclosed");

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
    const auditCoverage = page.locator(".visual-audit-coverage");
    assert.match(await auditCoverage.innerText(), /25 \/ 175 visually checked/i);
    assert.match(await auditCoverage.innerText(), /150 items remain OCR\/index-only/i);
    await page.locator(".content-grid .search").first().fill("Kit Box");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Kit Box$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /NOT VISUALLY CHECKED.*OCR\/index catalogue evidence only/i);
    await page.locator(".content-grid .search").first().fill("Mercury");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Mercury$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /school-managed reference \/ not supplied with kit/i);
    await page.locator(".content-grid .search").first().fill("Wire Gauze");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Wire Gauze$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /ASBESTOS HAZARD/i);
    assert.match(await page.locator(".detail-panel").innerText(), /asbestos centre/i);
    assert.match(await page.locator(".detail-panel").innerText(), /VISUALLY CHECKED in user-uploaded candidate.*PDF page 93/i);
    results.push("Biology asbestos wire-gauze warning visible");
    results.push("Biology with-microscope audit coverage and per-item visual status");
    await page.locator(".content-grid .search").first().fill("Spirit Lamp");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Spirit Lamp$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /OPEN-FLAME HAZARD/i);
    results.push("Biology open-flame spirit-lamp warning visible");
    await page.locator(".content-grid .search").first().fill("Scalpel");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Scalpel$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /SHARP TOOL/i);
    results.push("Biology sharp-tool scalpel warning visible");
    await page.locator(".content-grid .search").first().fill("Laboratory Thermometer");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Laboratory Thermometer$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /ALCOHOL-FILLED/i);
    results.push("Biology alcohol thermometer is distinguished from mercury");
    await page.locator(".content-grid .search").first().fill("Claw Hammer");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Claw Hammer with Handle$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /digital-only handling/i);
    results.push("Biology impact-tool hammer handling warning visible");
    await page.locator(".content-grid .search").first().fill("All-Pins");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^All-Pins$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /Sharp points/i);
    results.push("Biology pointed pin hazard visible");
    await page.locator(".content-grid .search").first().fill("Test Tube");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Test Tube$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /Source quantity\s+12/);
    assert.match(await page.locator(".detail-panel").innerText(), /125 mm/);
    results.push("Biology test-tube dimensions and source quantity visible");
    await page.locator(".content-grid .search").first().fill("Glass Slide");
    await page.locator(".item").filter({has:page.locator("strong", {hasText:/^Glass Slide$/})}).click();
    assert.match(await page.locator(".detail-panel").innerText(), /2 packs of 50 slides \(100 total\)/);
    assert.match(await page.locator(".detail-panel").innerText(), /75 x 25 x 1 mm/);
    results.push("Biology glass-slide pack quantity and dimensions visible");
    results.push("Chemistry and Biology source/safety details");

    // The open-ended Biology project must remain unmatched until a teacher approves a topic and method.
    await page.locator('.workspace-tabs button', {hasText:"Learning Lab"}).click();
    await page.locator(".class-select select").selectOption("XII");
    await page.locator(".practical-panel .search").fill("Investigatory project");
    const biologyProject = page.locator(".task-list .task").filter({hasText:"RBSE-XII-BIO-PRJ-01"});
    await biologyProject.waitFor();
    assert.match(await biologyProject.innerText(), /no fixed title or apparatus list/i);
    assert.match(await biologyProject.innerText(), /0 candidate source item links/i);
    results.push("Unmatched Biology investigatory-project gap disclosed");

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
    results.push("Mobile layout and no browser errors");
    // Dedicated Android-sized touch context: select and Add without drag gestures.
    const touchContext = await browser.newContext({
      viewport:{width:390,height:844},
      screen:{width:390,height:844},
      isMobile:true,
      hasTouch:true
    });
    try {
      const touchPage = await touchContext.newPage();
      touchPage.on("pageerror", error => errors.push(error.message));
      touchPage.on("console", message => {
        if (message.type() === "error") errors.push(message.text());
      });
      await touchPage.goto("http://127.0.0.1:4174/", {waitUntil:"networkidle"});
      assert.equal(await touchPage.evaluate(() => navigator.maxTouchPoints > 0), true);
      await touchPage.locator(".subject-card.violet").click();
      await touchPage.getByRole("heading", {name:"Physics Lab"}).waitFor();
      await touchPage.locator('.workspace-tabs button', {hasText:"Virtual Experiment Lab"}).click();
      await touchPage.locator(".content-grid .search").first().fill("Vernier caliper");
      const touchItem = touchPage.locator(".item").filter({
        has:touchPage.locator("strong", {hasText:/^Vernier caliper$/})
      });
      await touchItem.click();
      const addButton = touchPage.locator(".detail-panel").getByRole("button", {
        name:"Add selected item as candidate placeholder"
      });
      await addButton.click();
      assert.equal(await touchPage.locator(".bench-item").count(), 1);
      assert.match(await touchPage.locator(".bench-panel").innerText(), /Vernier caliper/);
      await addButton.click();
      assert.equal(await touchPage.locator(".bench-item").count(), 1, "touch Add action must not duplicate the selected catalogue ID");
      assert.equal(await touchPage.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1), false);
      results.push("Android-sized touch select-and-add fallback without drag gestures");
    } finally {
      await touchContext.close();
    }

    // Keyboard-only flow: tab through inventory controls, Enter to add/remove.
    const keyboardPage = await browser.newPage({viewport:{width:1280,height:900}});
    keyboardPage.on("pageerror", error => errors.push(error.message));
    keyboardPage.on("console", message => {
      if (message.type() === "error") errors.push(message.text());
    });
    await keyboardPage.goto("http://127.0.0.1:4174/", {waitUntil:"networkidle"});
    await keyboardPage.locator(".subject-card.violet").click();
    await keyboardPage.locator('.workspace-tabs button', {hasText:"Virtual Experiment Lab"}).click();
    const keyboardSearch = keyboardPage.locator(".content-grid .search").first();
    await keyboardSearch.fill("Vernier caliper");
    await keyboardSearch.focus();

    await keyboardPage.keyboard.press("Tab");
    assert.equal(await keyboardPage.evaluate(() => document.activeElement?.tagName), "SELECT");
    await keyboardPage.keyboard.press("Tab");
    assert.equal(await keyboardPage.evaluate(() => document.activeElement?.tagName), "SELECT");
    await keyboardPage.keyboard.press("Tab");
    assert.match(await keyboardPage.evaluate(() => document.activeElement?.textContent ?? ""), /Vernier caliper/);
    assert.equal(await keyboardPage.evaluate(() => getComputedStyle(document.activeElement).outlineStyle !== "none"), true);
    await keyboardPage.keyboard.press("Enter");
    assert.match(await keyboardPage.locator(".detail-panel").innerText(), /Vernier caliper/);

    await keyboardPage.keyboard.press("Tab");
    assert.match(await keyboardPage.evaluate(() => document.activeElement?.textContent ?? ""), /Add selected item as candidate placeholder/);
    assert.equal(await keyboardPage.evaluate(() => getComputedStyle(document.activeElement).outlineStyle !== "none"), true);
    await keyboardPage.keyboard.press("Enter");
    assert.equal(await keyboardPage.locator(".bench-item").count(), 1);

    await keyboardPage.keyboard.press("Tab");
    assert.match(await keyboardPage.evaluate(() => document.activeElement?.getAttribute("aria-label") ?? ""), /Remove Vernier caliper from workbench/);
    await keyboardPage.keyboard.press("Enter");
    assert.equal(await keyboardPage.locator(".bench-item").count(), 0);
    results.push("Keyboard-only inventory focus, Enter add/remove and visible focus indicators");

    assert.deepEqual(errors,[],"React app must not emit browser errors");
    console.log("LabVerse React app browser smoke: " + results.length + " groups passed.");
    for (const result of results) console.log("PASS:", result);
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
