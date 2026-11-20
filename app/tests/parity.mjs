import { chromium } from "playwright";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const APP_URL = "http://127.0.0.1:4174/";
const STATIC_URL = "http://127.0.0.1:4173/dashboard/";

async function main() {
  const browser = await chromium.launch({headless:true});
  const errors = [];
  const results = [];
  try {
    const react = await browser.newPage({viewport:{width:1440,height:1000}});
    const legacy = await browser.newPage({viewport:{width:1440,height:1000}});
    for (const page of [react, legacy]) {
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => {
        if (message.type() === "error") errors.push(message.text());
      });
    }

    const sourceCatalogue = JSON.parse(await readFile(
      new URL("../../dashboard/data/inventory.json", import.meta.url), "utf8"
    ));
    await Promise.all([
      react.goto(APP_URL,{waitUntil:"networkidle"}),
      legacy.goto(STATIC_URL,{waitUntil:"networkidle"})
    ]);
    await react.locator(".hero-row h1").waitFor();
    await legacy.locator("#stat-tasks").waitFor({state:"visible"});

    const staticCatalogue = await legacy.evaluate(async () => {
      const response = await fetch("./data/inventory.json");
      if (!response.ok) throw new Error("Static dashboard inventory fetch failed");
      return response.json();
    });
    assert.deepEqual(staticCatalogue, sourceCatalogue, "Static dashboard must load the committed shared inventory file");
    assert.equal(sourceCatalogue.stats.rbseTaskIds, 171);
    assert.match(await react.locator(".stats").innerText(), /171/);
    assert.equal(await react.locator(".subject-card").count(), 3);
    assert.equal(await legacy.locator(".subject-card[data-subject]").count(), 3);
    assert.equal(await legacy.locator("#stat-tasks").innerText(), "171");
    for (const subject of [
      {name:"Physics",reactClass:"violet",staticCount:"#physics-count",expected:"105"},
      {name:"Chemistry",reactClass:"amber",staticCount:"#chemistry-count",expected:"53"},
      {name:"Biology",reactClass:"teal",staticCount:"#biology-count",expected:"175"}
    ]) {
      assert.match(await react.locator(".subject-card."+subject.reactClass).innerText(), new RegExp(subject.name));
      assert.match(await react.locator(".subject-card."+subject.reactClass).innerText(), new RegExp(subject.expected+" catalogue records"));
      assert.equal(await legacy.locator(subject.staticCount).innerText(), subject.expected);
    }
    results.push("Shared source catalogue, 171 RBSE tasks and three subject summaries");

    for (const label of ["Learning Lab","Virtual Experiment Lab","Scientific Analysis","Research Studio"]) {
      assert.match(await react.locator(".sidebar").innerText(), new RegExp(label));
      assert.match(await legacy.locator(".sidebar").innerText(), new RegExp(label));
    }
    results.push("Both UIs expose all four workspace destinations");

    await react.locator(".subject-card.violet").click();
    await legacy.locator('.subject-card[data-subject="physics"]').click();
    await react.locator(".class-select select").selectOption("XI");
    await legacy.locator("#class-select").selectOption("XI");
    assert.equal(await react.locator(".task-list .task").count(), 41);
    assert.equal(await legacy.locator("#task-count").innerText(), "41 tasks");
    await react.locator(".class-select select").selectOption("ALL");
    await legacy.locator("#class-select").selectOption("ALL");
    results.push("Physics Class XI filter parity (41 task records)");

    await react.locator(".content-grid .search").first().fill("Vernier caliper");
    await react.locator(".inventory-filters select").nth(0).selectOption("apparatus");
    await react.locator(".inventory-filters select").nth(1).selectOption("MEASUREMENT");
    await legacy.locator("#inventory-type").selectOption("apparatus");
    await legacy.locator("#inventory-search").fill("Vernier caliper");
    const reactVernier = react.locator(".item").filter({has:react.locator("strong",{hasText:/^Vernier caliper$/})});
    const staticVernier = legacy.locator('[data-item-id="NCERT-PHY-KIT-003"]');
    await reactVernier.waitFor();
    await staticVernier.waitFor();
    await reactVernier.click();
    await staticVernier.locator(".item-inspect").click();
    assert.match(await react.locator(".detail-panel").innerText(), /NCERT-PHY-KIT-003/);
    assert.match(await legacy.locator("#selected-details").innerText(), /NCERT-PHY-KIT-003/);
    assert.match(await react.locator(".detail-panel").innerText(), /NCERT Physics kit manual 13164/);
    assert.match(await legacy.locator("#selected-details").innerText(), /NCERT Physics kit manual 13164/);
    results.push("Shared Physics inventory search, type/category filters and source identity detail");

    await react.locator(".practical-panel .search").fill("Vernier calipers");
    await legacy.locator("#task-search").fill("Vernier calipers");
    const reactTask = react.locator(".task-list .task").filter({hasText:"RBSE-XI-PHY-EXP-01"});
    await reactTask.getByRole("button",{name:/Inspect mapped items/}).click();
    await reactTask.locator(".mapped-item").filter({has:react.locator("strong",{hasText:/^Vernier caliper$/})}).click();
    await legacy.locator('[data-task="RBSE-XI-PHY-EXP-01"]').click();
    await legacy.locator('[data-focus-source="NCERT-PHY-KIT-003"]').click();
    assert.match(await react.locator(".detail-panel").innerText(),/NCERT-PHY-KIT-003/);
    assert.match(await legacy.locator("#selected-details").innerText(),/Vernier caliper/);
    results.push("Physics practical-to-candidate-source navigation parity");

    await react.locator(".back-button").click();
    await legacy.locator("#back-home").click();
    await react.locator(".subject-card.amber").click();
    await legacy.locator('.subject-card[data-subject="chemistry"]').click();
    await react.locator(".inventory-filters select").nth(0).selectOption("reagent");
    await react.locator(".content-grid .search").first().fill("Acetic acid");
    await legacy.locator("#inventory-type").selectOption("reagent");
    await legacy.locator("#inventory-search").fill("Acetic acid");
    const reactAcetic = react.locator(".item").filter({has:react.locator("strong",{hasText:/^Acetic acid$/})});
    const staticAcetic = legacy.locator('[data-item-id="MSCL-MAN-REAG-002"]');
    await reactAcetic.waitFor();
    await staticAcetic.waitFor();
    await reactAcetic.click();
    await staticAcetic.locator(".item-inspect").click();
    assert.match(await react.locator(".detail-panel").innerText(),/Reference only \/ no live use/i);
    assert.match(await legacy.locator("#analysis-copy").innerText(),/source-listed reference only/i);
    results.push("Chemistry reagent reference-only / no-live-use disclosure parity");

    await react.locator(".back-button").click();
    await legacy.locator("#back-home").click();
    await react.locator(".subject-card.teal").click();
    await legacy.locator('.subject-card[data-subject="biology"]').click();
    await react.locator(".inventory-filters select").nth(0).selectOption("reagent");
    await react.locator(".content-grid .search").first().fill("Mercury");
    await legacy.locator("#inventory-type").selectOption("reagent");
    await legacy.locator("#inventory-search").fill("Mercury");
    const reactMercury = react.locator(".item").filter({has:react.locator("strong",{hasText:/^Mercury$/})});
    const staticMercury = legacy.locator('[data-item-id="NCERT-BIO-MANUAL-REAG-033"]');
    await reactMercury.waitFor();
    await staticMercury.waitFor();
    await reactMercury.click();
    await staticMercury.locator(".item-inspect").click();
    assert.match(await react.locator(".detail-panel").innerText(),/not supplied with kit/i);
    assert.match(await legacy.locator("#analysis-copy").innerText(),/not supplied|reference only/i);
    results.push("Biology school-managed / not-supplied reagent disclosure parity");

    await react.locator(".back-button").click();
    await legacy.locator("#back-home").click();
    await react.locator(".subject-card.violet").click();
    await legacy.locator('.subject-card[data-subject="physics"]').click();
    await react.locator(".workspace-tabs button",{hasText:"Virtual Experiment Lab"}).click();
    await react.locator(".content-grid .search").first().fill("Vernier caliper");
    await react.locator(".item").filter({has:react.locator("strong",{hasText:/^Vernier caliper$/})}).click();
    const reactAdd = react.locator(".detail-panel").getByRole("button",{name:"Add selected item as candidate placeholder"});
    await reactAdd.click();
    await reactAdd.click();
    assert.equal(await react.locator(".bench-item").count(),1,"Normal React Add remains idempotent for a catalogue source ID");
    assert.match(await react.locator(".bench-panel").innerText(),/CANDIDATE PLACEHOLDER/);
    const reactBenchRows = react.locator('.bench-item[data-source-id="NCERT-PHY-KIT-003"]');
    await reactBenchRows.getByRole("button",{name:"Add another instance of Vernier caliper"}).click();
    assert.equal(await reactBenchRows.count(),2,"Explicit Add copy creates a second instance");
    assert.notEqual(await reactBenchRows.nth(0).getAttribute("data-instance-id"),await reactBenchRows.nth(1).getAttribute("data-instance-id"));
    await reactBenchRows.getByRole("button",{name:"Remove Vernier caliper instance 1 from workbench"}).click();
    assert.equal(await reactBenchRows.count(),1,"Removing one apparatus instance preserves its sibling");
    await react.locator(".clear-bench").click();

    await legacy.locator("#inventory-search").fill("Vernier caliper");
    const staticItem = legacy.locator('[data-item-id="NCERT-PHY-KIT-003"]');
    await staticItem.locator("[data-add]").click();
    await staticItem.locator("[data-add]").click();
    const staticBenchRows = legacy.locator('#bench-items .bench-object[data-source-id="NCERT-PHY-KIT-003"]');
    assert.equal(await staticBenchRows.count(),2,"Static dashboard Add supports multiple apparatus instances");
    assert.notEqual(await staticBenchRows.nth(0).getAttribute("data-instance-id"),await staticBenchRows.nth(1).getAttribute("data-instance-id"));
    await staticBenchRows.getByRole("button",{name:"Remove Vernier caliper instance 1 from workbench"}).click();
    assert.equal(await staticBenchRows.count(),1,"Static Remove deletes only the selected instance");
    assert.match(await legacy.locator("#bench-items").innerText(),/PLACEHOLDER/);
    await legacy.locator("#reset-bench").click();
    results.push("Candidate bench parity: idempotent normal Add, explicit/repeated copies, stable instance identity and per-instance removal");

    await react.locator(".back-button").click();
    await legacy.locator("#back-home").click();
    await react.locator(".sidebar .nav-link").filter({hasText:"Research Studio"}).click();
    await legacy.locator('.side-link[data-view="research"]').click();
    assert.match(await react.locator(".workspace-launch").innerText(),/Choose a subject direction/);
    await react.locator(".workspace-launch-actions button").filter({hasText:"Biology"}).click();
    assert.equal(await react.locator(".workspace-tabs button.active").innerText(),"Research Studio");
    assert.equal(await react.locator(".research-protocol-section").count(),1);
    assert.equal(await legacy.locator("#module-title").innerText(),"Research Studio");
    assert.equal(await legacy.locator(".module-card").count(),3);
    assert.match(await legacy.locator("#module-view").innerText(),/ROADMAP IMPLEMENTATION PENDING/);
    results.push("Research Studio: React structured workspace vs static roadmap placeholder (documented enhancement)");

    await react.locator(".back-button").click();
    await react.locator(".subject-card.violet").click();
    await react.locator(".workspace-tabs button",{hasText:"Scientific Analysis"}).click();
    await legacy.locator("#module-back").click();
    await legacy.locator('.subject-card[data-subject="physics"]').click();
    assert.match(await react.locator(".analysis-workspace").innerText(),/No validated scientific model connected/);
    assert.match(await react.locator(".analysis-workspace").innerText(),/No calculated or predicted result/);
    assert.match(await legacy.locator("#analysis-copy").innerText(),/No scientific result is generated until a validated model is connected/);
    results.push("Both scientific analysis panels preserve the NOT_MODELLED/no-results boundary");

    await react.setViewportSize({width:390,height:844});
    await legacy.setViewportSize({width:390,height:844});
    assert.equal(await react.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1),false,"React mobile layout must not overflow");
    assert.equal(await legacy.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1),false,"Static dashboard mobile layout must not overflow");
    results.push("Responsive parity at a 390px mobile viewport");

    // Keyboard path: inventory inspection -> Add -> remove, in both implementations.
    const keyboardReact = await browser.newPage({viewport:{width:1280,height:900}});
    const keyboardLegacy = await browser.newPage({viewport:{width:1280,height:900}});
    for (const page of [keyboardReact,keyboardLegacy]) {
      page.on("pageerror",error=>errors.push(error.message));
      page.on("console",message=>{if(message.type()==="error")errors.push(message.text());});
    }
    await Promise.all([
      keyboardReact.goto(APP_URL,{waitUntil:"networkidle"}),
      keyboardLegacy.goto(STATIC_URL,{waitUntil:"networkidle"})
    ]);
    await keyboardReact.locator(".subject-card.violet").click();
    await keyboardReact.locator(".workspace-tabs button",{hasText:"Virtual Experiment Lab"}).click();
    await keyboardReact.locator(".content-grid .search").first().fill("Vernier caliper");
    await keyboardReact.locator(".content-grid .search").first().focus();
    let reactInspectFocused=false;
    for(let i=0;i<12;i++){
      await keyboardReact.keyboard.press("Tab");
      const label=await keyboardReact.evaluate(()=>document.activeElement?.getAttribute("aria-label")??"");
      if(label.includes("Select or drag Vernier caliper")){reactInspectFocused=true;break;}
    }
    assert.equal(reactInspectFocused,true,"React inventory item must be reachable by Tab");
    await keyboardReact.keyboard.press("Enter");
    await keyboardReact.keyboard.press("Tab");
    assert.match(await keyboardReact.evaluate(()=>document.activeElement?.textContent??""),/Add selected item as candidate placeholder/);
    await keyboardReact.keyboard.press("Enter");
    await keyboardReact.keyboard.press("Tab");
    assert.match(await keyboardReact.evaluate(()=>document.activeElement?.getAttribute("aria-label")??""),/Add another instance of Vernier caliper/);
    await keyboardReact.keyboard.press("Enter");
    await keyboardReact.keyboard.press("Tab");
    assert.match(await keyboardReact.evaluate(()=>document.activeElement?.getAttribute("aria-label")??""),/Remove Vernier caliper instance 1 from workbench/);
    await keyboardReact.keyboard.press("Enter");
    assert.equal(await keyboardReact.locator(".bench-item[data-source-id='NCERT-PHY-KIT-003']").count(),1);

    await keyboardLegacy.locator('.subject-card[data-subject="physics"]').click();
    await keyboardLegacy.locator('.mode-tab[data-mode="virtual"]').click();
    await keyboardLegacy.locator("#inventory-search").fill("Vernier caliper");
    await keyboardLegacy.locator("#inventory-search").focus();
    let legacyInspectFocused=false;
    for(let i=0;i<60;i++){
      await keyboardLegacy.keyboard.press("Tab");
      const label=await keyboardLegacy.evaluate(()=>document.activeElement?.getAttribute("aria-label")??"");
      if(label==="Inspect Vernier caliper"){legacyInspectFocused=true;break;}
    }
    assert.equal(legacyInspectFocused,true,"Static inventory inspection must be reachable by Tab");
    await keyboardLegacy.keyboard.press("Enter");
    assert.match(await keyboardLegacy.locator("#selected-details").innerText(),/Vernier caliper/);
    await keyboardLegacy.keyboard.press("Tab");
    assert.match(await keyboardLegacy.evaluate(()=>document.activeElement?.getAttribute("aria-label")??""),/Add Vernier caliper to workbench/);
    await keyboardLegacy.keyboard.press("Enter");
    assert.match(await keyboardLegacy.evaluate(()=>document.activeElement?.getAttribute("aria-label")??""),/Remove Vernier caliper instance 1 from workbench/);
    await keyboardLegacy.keyboard.press("Enter");
    assert.equal(await keyboardLegacy.locator("#bench-items .bench-object").count(),0);
    results.push("Keyboard parity: focusable inventory inspection, add action and individually labelled removal in both UIs");

    // Android-sized touch emulation: no drag gesture is required in either UI.
    const touchOptions={viewport:{width:390,height:844},screen:{width:390,height:844},isMobile:true,hasTouch:true};
    const touchReactContext=await browser.newContext(touchOptions);
    const touchLegacyContext=await browser.newContext(touchOptions);
    try{
      const touchReact=await touchReactContext.newPage();
      const touchLegacy=await touchLegacyContext.newPage();
      for(const page of [touchReact,touchLegacy]){
        page.on("pageerror",error=>errors.push(error.message));
        page.on("console",message=>{if(message.type()==="error")errors.push(message.text());});
      }
      await Promise.all([
        touchReact.goto(APP_URL,{waitUntil:"networkidle"}),
        touchLegacy.goto(STATIC_URL,{waitUntil:"networkidle"})
      ]);
      assert.equal(await touchReact.evaluate(()=>navigator.maxTouchPoints>0),true);
      assert.equal(await touchLegacy.evaluate(()=>navigator.maxTouchPoints>0),true);
      await touchReact.locator(".subject-card.violet").tap();
      await touchReact.locator(".workspace-tabs button",{hasText:"Virtual Experiment Lab"}).tap();
      await touchReact.locator(".content-grid .search").first().fill("Vernier caliper");
      await touchReact.locator(".item").filter({has:touchReact.locator("strong",{hasText:/^Vernier caliper$/})}).tap();
      await touchReact.locator(".detail-panel").getByRole("button",{name:"Add selected item as candidate placeholder"}).tap();
      const reactTouchRows=touchReact.locator('.bench-item[data-source-id="NCERT-PHY-KIT-003"]');
      await reactTouchRows.getByRole("button",{name:"Add another instance of Vernier caliper"}).tap();
      assert.equal(await reactTouchRows.count(),2);
      await reactTouchRows.getByRole("button",{name:"Remove Vernier caliper instance 1 from workbench"}).tap();
      assert.equal(await reactTouchRows.count(),1);

      await touchLegacy.locator('.subject-card[data-subject="physics"]').tap();
      await touchLegacy.locator('.mode-tab[data-mode="virtual"]').tap();
      await touchLegacy.locator("#inventory-search").fill("Vernier caliper");
      const touchStaticItem=touchLegacy.locator('[data-item-id="NCERT-PHY-KIT-003"]');
      await touchStaticItem.locator(".item-inspect").tap();
      await touchStaticItem.locator(".add-item").tap();
      await touchLegacy.locator('[data-item-id="NCERT-PHY-KIT-003"] .add-item').tap();
      const staticTouchRows=touchLegacy.locator('#bench-items .bench-object[data-source-id="NCERT-PHY-KIT-003"]');
      assert.equal(await staticTouchRows.count(),2);
      await staticTouchRows.getByRole("button",{name:"Remove Vernier caliper instance 1 from workbench"}).tap();
      assert.equal(await staticTouchRows.count(),1);
      assert.equal(await touchReact.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1),false);
      assert.equal(await touchLegacy.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1),false);
      results.push("390px touch parity: select/add/copy/remove works without drag gestures");
    } finally {
      await touchReactContext.close();
      await touchLegacyContext.close();
    }
    await keyboardReact.close();
    await keyboardLegacy.close();

    assert.deepEqual(errors,[],"Neither UI should produce browser runtime or console errors");
    console.log("LabVerse static ↔ React parity: "+results.length+" groups passed.");
    for (const result of results) console.log("PASS:",result);
  } finally {
    await browser.close();
  }
}

main().catch(error=>{
  console.error(error);
  process.exitCode=1;
});
