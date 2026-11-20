import { chromium } from "playwright";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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
    await page.getByRole("combobox", {name:"Filter practicals by group"}).selectOption("EXPERIMENT");
    assert.equal(await page.locator(".task-list article").count(), 17);
    await page.getByRole("combobox", {name:"Filter practicals by group"}).selectOption("all");
    results.push("Class and practical-group filter");

    // Practical -> candidate source item -> placeholder bench.
    const vernierTask = page.locator(".task-list .task").filter({hasText:"RBSE-XI-PHY-EXP-01"});
    await vernierTask.getByRole("button", {name:/Inspect mapped items/}).click();
    await vernierTask.locator(".mapped-item").filter({
      has:page.locator("strong", {hasText:/^Vernier caliper$/})
    }).click();
    assert.match(await page.locator(".detail-panel").innerText(), /NCERT-PHY-KIT-003/);
    await vernierTask.getByRole("button", {name:/Open candidate workbench with mapped items/}).click();
    assert.equal(await page.locator(".workspace-tabs button.active").innerText(), "Virtual Experiment Lab");
    assert.equal(await page.locator(".bench-item").count(), 2);
    assert.match(await page.locator(".bench-panel").innerText(), /CANDIDATE PLACEHOLDER/);
    results.push("Practical-to-workbench direct navigation with mapped candidate setup");
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
    const stopwatchRows = page.locator('.bench-item[data-source-id="NCERT-PHY-KIT-009"]');
    assert.equal(await stopwatchRows.count(), 1);
    await stopwatchRows.getByRole("button", {name:"Add another instance of Stopwatch with split timeout"}).click();
    assert.equal(await page.locator(".bench-item").count(), 4);
    assert.equal(await stopwatchRows.count(), 2);
    assert.notEqual(
      await stopwatchRows.nth(0).getAttribute("data-instance-id"),
      await stopwatchRows.nth(1).getAttribute("data-instance-id")
    );
    results.push("Virtual workbench explicit copies have unique instance IDs and shared source provenance");
    await stopwatchRows.first().getByRole("button", {name:"Remove Stopwatch with split timeout instance 1 from workbench"}).click();
    assert.equal(await page.locator(".bench-item").count(), 3);
    assert.equal(await stopwatchRows.count(), 1);
    await stopwatchRows.getByRole("button", {name:"Remove Stopwatch with split timeout instance 1 from workbench"}).click();
    assert.equal(await page.locator(".bench-item").count(), 2);
    assert.equal(await stopwatchRows.count(), 0);
    results.push("Virtual workbench removes one repeated instance without deleting its sibling");

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
    const initialChecklist = await page.locator(".protocol-readiness").innerText();
    assert.match(initialChecklist, /Protocol objective/);
    assert.match(initialChecklist, /Not entered/);
    assert.match(initialChecklist, /Not reviewed — review required/);
    assert.match(initialChecklist, /no science or safety approval/i);
    results.push("Research Studio checklist shows missing planning notes and open safety review");

    await page.locator('textarea').nth(0).fill("Does light intensity change the rate of photosynthesis?");
    await page.locator('textarea').nth(1).fill("Increasing light intensity may increase the rate until another factor becomes limiting.");
    await page.locator('textarea').nth(2).fill("CO2 concentration or temperature may be the limiting factor.");
    await page.locator(".research-variable-grid input").nth(0).fill("Light intensity");
    await page.locator(".research-variable-grid input").nth(1).fill("Oxygen production rate");
    await page.locator('textarea').nth(3).fill("Plant species, temperature, CO2 availability and measurement duration.");
    await page.locator("#protocol-objective").fill("Record the research objective before any procedure is considered.");
    await page.locator("#protocol-method-provenance").fill("Verified source title/version/page or URL to be recorded.");
    await page.locator("#protocol-materials").fill("Candidate item IDs/names only; identity and compatibility pending.");
    await page.locator("#protocol-sample-plan").fill("Sample selection and inclusion criteria require domain review.");
    await page.locator("#protocol-repeats").fill("3");
    await page.locator("#protocol-measurement-plan").fill("Observable, SI unit, instrument range and uncertainty to be specified.");
    await page.locator("#protocol-environment").fill("Record temperature, light and timing; ranges not yet validated.");
    await page.locator("#protocol-analysis").fill("Planned comparison only; statistical method requires review.");
    await page.locator("#protocol-stopping-rule").fill("Define before execution after risk review.");
    await page.locator("#protocol-safety-status").selectOption("REVIEW_REQUESTED");
    await page.locator("#protocol-safety-reference").fill("Review requested; this is not an approval.");
    const populatedChecklist = await page.locator(".protocol-readiness").innerText();
    assert.match(populatedChecklist, /Protocol objective/);
    assert.match(populatedChecklist, /Method\/source provenance/);
    assert.match(populatedChecklist, /Text present/);
    assert.match(populatedChecklist, /3 entered/);
    assert.match(populatedChecklist, /Review requested — pending/);
    results.push("Research Studio checklist updates on protocol entry without claiming validation");

    await page.getByRole("button", {name:"Preview research draft"}).click();
    assert.match(await page.locator(".research-workspace").innerText(), /Research draft preview ready/);
    await page.getByText(/Draft saved locally on this device/i).waitFor();
    const storedDraft = await page.evaluate(() => JSON.parse(localStorage.getItem("labverse.research-studio.draft.v1") || "null"));
    assert.equal(storedDraft.schemaVersion, 2);
    assert.equal(Number.isFinite(Date.parse(storedDraft.savedAt)), true);
    assert.equal(storedDraft.draft.question, "Does light intensity change the rate of photosynthesis?");
    assert.equal(storedDraft.draft.protocolObjective, "Record the research objective before any procedure is considered.");
    assert.equal(storedDraft.draft.plannedRepeats, "3");
    assert.equal(storedDraft.draft.safetyReviewStatus, "REVIEW_REQUESTED");
    results.push("Research Studio schema-v2 autosave includes protocol-planning metadata");

    await page.reload({waitUntil:"networkidle"});
    await page.locator(".subject-card.teal").click();
    await page.locator('.workspace-tabs button', {hasText:"Research Studio"}).click();
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), "Does light intensity change the rate of photosynthesis?");
    assert.equal(await page.locator(".research-workspace textarea").nth(1).inputValue(), "Increasing light intensity may increase the rate until another factor becomes limiting.");
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", {name:"Export JSON"}).click();
    const exportedFile = await downloadPromise;
    assert.match(exportedFile.suggestedFilename(), /^labverse-research-draft-\d{4}-\d{2}-\d{2}\.json$/);
    const exportedPath = await exportedFile.path();
    assert.ok(exportedPath, "JSON export must produce a downloadable file");
    const exportedEnvelope = JSON.parse(await readFile(exportedPath, "utf8"));
    assert.equal(exportedEnvelope.schemaVersion, 2);
    assert.equal(Number.isFinite(Date.parse(exportedEnvelope.savedAt)), true);
    assert.deepEqual(exportedEnvelope.draft, storedDraft.draft);
    results.push("Research Studio JSON export contains versioned complete draft");

    await page.getByRole("button", {name:"Clear local draft"}).click();
    await page.getByText("No local draft saved yet.").waitFor();
    assert.equal(await page.evaluate(() => localStorage.getItem("labverse.research-studio.draft.v1")), null);
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), "");

    const importInput = page.locator(".research-import-input");
    await importInput.setInputFiles(exportedPath);
    await page.getByText(/Draft saved locally on this device/i).waitFor();
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), exportedEnvelope.draft.question);
    assert.equal(await page.locator(".research-workspace textarea").nth(1).inputValue(), exportedEnvelope.draft.hypothesis);
    assert.equal(await page.locator(".research-workspace textarea").nth(2).inputValue(), exportedEnvelope.draft.alternative);
    assert.equal(await page.locator(".research-variable-grid input").nth(0).inputValue(), exportedEnvelope.draft.independentVariable);
    assert.equal(await page.locator(".research-variable-grid input").nth(1).inputValue(), exportedEnvelope.draft.dependentVariable);
    assert.equal(await page.locator(".research-workspace textarea").nth(3).inputValue(), exportedEnvelope.draft.controls);
    assert.equal(await page.locator("#protocol-objective").inputValue(), exportedEnvelope.draft.protocolObjective);
    assert.equal(await page.locator("#protocol-method-provenance").inputValue(), exportedEnvelope.draft.methodProvenance);
    assert.equal(await page.locator("#protocol-materials").inputValue(), exportedEnvelope.draft.materialsEquipmentReferences);
    assert.equal(await page.locator("#protocol-sample-plan").inputValue(), exportedEnvelope.draft.samplePlan);
    assert.equal(await page.locator("#protocol-repeats").inputValue(), exportedEnvelope.draft.plannedRepeats);
    assert.equal(await page.locator("#protocol-measurement-plan").inputValue(), exportedEnvelope.draft.measurementPlan);
    assert.equal(await page.locator("#protocol-environment").inputValue(), exportedEnvelope.draft.environmentConditions);
    assert.equal(await page.locator("#protocol-analysis").inputValue(), exportedEnvelope.draft.analysisPlan);
    assert.equal(await page.locator("#protocol-stopping-rule").inputValue(), exportedEnvelope.draft.stoppingRule);
    assert.equal(await page.locator("#protocol-safety-status").inputValue(), exportedEnvelope.draft.safetyReviewStatus);
    assert.equal(await page.locator("#protocol-safety-reference").inputValue(), exportedEnvelope.draft.safetyReviewReference);
    results.push("Research Studio JSON import/export round-trip restores all 17 research fields");

    await importInput.setInputFiles({
      name:"unsupported-schema.json", mimeType:"application/json",
      buffer:Buffer.from(JSON.stringify({
        schemaVersion:99, savedAt:new Date().toISOString(),
        draft:{question:"Must not replace current data"}
      }))
    });
    await page.getByText(/Import rejected/i).waitFor();
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), exportedEnvelope.draft.question);
    const retainedAfterInvalid = await page.evaluate(() => JSON.parse(localStorage.getItem("labverse.research-studio.draft.v1") || "null"));
    assert.equal(retainedAfterInvalid.draft.question, exportedEnvelope.draft.question);

    await importInput.setInputFiles({
      name:"over-limit.json", mimeType:"application/json",
      buffer:Buffer.from(JSON.stringify({
        schemaVersion:2, savedAt:new Date().toISOString(),
        draft:{...exportedEnvelope.draft, question:"x".repeat(5001)}
      }))
    });
    await page.getByText(/Import rejected/i).waitFor();
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), exportedEnvelope.draft.question);

    await importInput.setInputFiles({
      name:"malformed.json", mimeType:"application/json", buffer:Buffer.from("{not-json")
    });
    await page.getByText(/Import rejected/i).waitFor();
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), exportedEnvelope.draft.question);

    await importInput.setInputFiles({
      name:"oversized-file.json", mimeType:"application/json",
      buffer:Buffer.alloc(1024 * 1024 + 1, 0x20)
    });
    await page.getByText(/Import rejected/i).waitFor();
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), exportedEnvelope.draft.question);
    results.push("Research Studio rejects future schema, oversized field/file and malformed JSON without overwriting draft");

    await importInput.setInputFiles({
      name:"legacy-v1.json", mimeType:"application/json",
      buffer:Buffer.from(JSON.stringify({
        schemaVersion:1, savedAt:new Date().toISOString(),
        draft:{
          question:"Legacy research question",
          hypothesis:"Legacy hypothesis",
          alternative:"Legacy alternative",
          independentVariable:"Legacy IV",
          dependentVariable:"Legacy DV",
          controls:"Legacy controls"
        }
      }))
    });
    await page.waitForFunction(() => {
      const stored = JSON.parse(localStorage.getItem("labverse.research-studio.draft.v1") || "null");
      return stored?.schemaVersion === 2 && stored?.draft?.question === "Legacy research question";
    });
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), "Legacy research question");
    assert.equal(await page.locator("#protocol-objective").inputValue(), "");
    const migrated = await page.evaluate(() => JSON.parse(localStorage.getItem("labverse.research-studio.draft.v1") || "null"));
    assert.equal(migrated.schemaVersion, 2);
    assert.equal(migrated.draft.safetyReviewStatus, "NOT_REVIEWED");
    results.push("Research Studio v1 import migrates legacy six-field drafts into schema v2 without data loss");

    await page.locator("#protocol-repeats").fill("101");
    await page.getByText(/Planned repeats must be a whole number/i).waitFor();
    assert.match(await page.locator(".protocol-readiness").innerText(), /Invalid — enter a whole number from 1 to 100/);
    await page.locator("#protocol-repeats").fill("");
    await page.getByText(/Draft saved locally on this device/i).waitFor();
    assert.match(await page.locator(".protocol-readiness").innerText(), /Not specified \(optional\)/);
    results.push("Research Studio repeat plan accepts blank or bounded whole-number values only");

    await page.getByRole("button", {name:"Clear local draft"}).click();
    await page.getByText("No local draft saved yet.").waitFor();
    assert.equal(await page.evaluate(() => localStorage.getItem("labverse.research-studio.draft.v1")), null);
    results.push("Research Studio reload restore and explicit local clear");

    await page.evaluate(() => localStorage.setItem("labverse.research-studio.draft.v1", JSON.stringify({
      schemaVersion: 99, savedAt: new Date().toISOString(), draft: {question:"Future schema data"}
    })));
    await page.reload({waitUntil:"networkidle"});
    await page.locator(".subject-card.teal").click();
    await page.locator('.workspace-tabs button', {hasText:"Research Studio"}).click();
    assert.equal(await page.locator(".research-workspace textarea").nth(0).inputValue(), "");
    assert.match(await page.locator(".research-storage-status").innerText(), /unsupported or invalid local draft/i);
    await page.getByRole("button", {name:"Clear local draft"}).click();
    assert.equal(await page.evaluate(() => localStorage.getItem("labverse.research-studio.draft.v1")), null);
    results.push("Research Studio rejects unsupported local draft schema");

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
      await touchPage.locator(".bench-item").getByRole("button",{name:"Add another instance of Vernier caliper"}).tap();
      assert.equal(await touchPage.locator(".bench-item").count(), 2);
      assert.equal(await touchPage.locator('.bench-item[data-source-id="NCERT-PHY-KIT-003"]').count(), 2);
      assert.notEqual(
        await touchPage.locator('.bench-item[data-source-id="NCERT-PHY-KIT-003"]').nth(0).getAttribute("data-instance-id"),
        await touchPage.locator('.bench-item[data-source-id="NCERT-PHY-KIT-003"]').nth(1).getAttribute("data-instance-id")
      );
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
    assert.match(await keyboardPage.evaluate(() => document.activeElement?.getAttribute("aria-label") ?? ""), /Add another instance of Vernier caliper/);
    await keyboardPage.keyboard.press("Enter");
    assert.equal(await keyboardPage.locator(".bench-item").count(), 2);
    await keyboardPage.keyboard.press("Tab");
    assert.match(await keyboardPage.evaluate(() => document.activeElement?.getAttribute("aria-label") ?? ""), /Remove Vernier caliper instance 1 from workbench/);
    await keyboardPage.keyboard.press("Enter");
    assert.equal(await keyboardPage.locator(".bench-item").count(), 1);
    await keyboardPage.locator(".bench-item").getByRole("button",{name:/Remove Vernier caliper instance/}).click();
    assert.equal(await keyboardPage.locator(".bench-item").count(), 0);
    results.push("Keyboard-only inventory focus, Enter Add/copy/remove and visible focus indicators");

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
