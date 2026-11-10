(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const state = { data:null, subject:null, view:"overview", mode:"learning", category:"all", type:"all", query:"", taskQuery:"", bench:[], selected:null, classFilter:"ALL" };
  const modeCopy = {
    learning:"Browse mapped practicals, equipment and source evidence. Practical pages open as catalogue records in this starter build.",
    virtual:"Arrange catalogue objects in the workbench. This build uses 2D placeholders; real 3D models and experiment actions are the next implementation layer.",
    analysis:"Inspect source attributes, evidence state and safety boundaries. A scientific result is not generated until a validated domain rule is connected.",
    research:"Use the research workspace entry point for question framing, hypotheses, datasets, sources and reproducible analysis as those modules are implemented."
  };
  const moduleInfo = {
    learning:{title:"Learning Lab",lead:"Syllabus-mapped practicals, equipment, guided work and assessment.",cards:[["Practical catalogue","Browse 171 RBSE XI/XII task records across Physics, Chemistry and Biology."],["Guided practice","Step-by-step practice journeys will be linked to verified procedures and source pages."],["Practical exam","A timed assessment mode will score setup, method, observation, calculation and viva separately."]]},
    virtual:{title:"Virtual Experiment Lab",lead:"A place to assemble apparatus, select samples and run bounded virtual experiments.",cards:[["Empty workbench","Add catalogue items by tap or drag. Current objects are 2D placeholders, not 3D assets."],["Object controls","Move, connect, focus, measure, pour and reset controls will be enabled by each asset contract."],["Experiment runtime","Deterministic action/state rules, event history and replay are planned before scientific simulation."]]},
    analysis:{title:"Scientific Analysis",lead:"Separate source facts, calculations, model outputs, estimates and hypotheses.",cards:[["Physics analysis","Measurements, units, graphs, uncertainty, circuits, optics and mechanics."],["Chemistry analysis","Substance identity, properties, curated reactions, stoichiometry, pH and kinetics."],["Biology analysis","Microscopy, morphology, taxonomy, genetics, ecology and biological observations."]]},
    research:{title:"Research Studio",lead:"A structured path from a research question to evidence, analysis and reproducibility.",cards:[["Question and hypothesis","Record the research question, competing explanations, variables and controls."],["Data and evidence","Keep immutable raw data, source references, licences, units and processing history."],["Interpretation and next test","Compare model and observation, report uncertainty and propose discriminating experiments."]]}
  };
  let toastTimer;
  function esc(value){return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
  function showToast(message){const node=$("#toast");node.textContent=message;node.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove("show"),2400);}
  function allItems(subject){const d=state.data.subjects[subject];return [...(d.inventory||[]),...(d.reagents||[])];}
  function pretty(value){return String(value||"").replaceAll("_"," ").toLowerCase().replace(/\b\w/g,c=>c.toUpperCase());}
  function safetyBadge(item){const txt=(item.status||"")+" "+(item.safety||"");if(item.type==="reagent"||/NO_LIVE_USE|NOT_SUPPLIED_WITH_KIT|SAFETY_REVIEW_REQUIRED/i.test(txt))return '<span class="mini-badge safe">Reference only / review</span>';if(/UNAUTHENTICATED|CANDIDATE|OCR_TEXT|INDEX_ONLY|NEEDS_REVIEW/i.test(txt+" "+(item.evidence||"")))return '<span class="mini-badge warn">Candidate source</span>';return '<span class="mini-badge">Source indexed</span>';}
  function sourceLine(item){return item.source||"Source not recorded";}
  function updateOverview(){
    const d=state.data, s=d.stats;
    $("#stat-tasks").textContent=s.rbseTaskIds;
    $("#physics-count").textContent=s.physicsApparatusRows;
    $("#physics-tasks").textContent=d.subjects.physics.tasks.length;
    $("#chemistry-count").textContent=s.chemistryApparatusRows;
    $("#chemistry-reagents").textContent=s.chemistryHistoricalReagentLabels;
    $("#biology-count").textContent=s.biologyKitItemRows;
    $("#biology-reagents").textContent=s.biologyManualReagentLabels;
  }
  function showOverview(){
    state.view="overview";state.subject=null;
    $("#overview-view").hidden=false;$("#subject-view").hidden=true;$("#module-view").hidden=true;
    $("#crumb-current").textContent="Dashboard";
    $$(".side-link").forEach(b=>b.classList.toggle("active",b.dataset.view==="overview"));
  }
  function showModule(view){
    state.view=view;state.subject=null;
    const m=moduleInfo[view];if(!m)return;
    $("#overview-view").hidden=true;$("#subject-view").hidden=true;$("#module-view").hidden=false;
    $("#module-title").textContent=m.title;$("#module-lead").textContent=m.lead;$("#crumb-current").textContent=m.title;
    $("#module-grid").innerHTML=m.cards.map(([title,copy])=>'<article class="module-card"><h3>'+esc(title)+'</h3><p>'+esc(copy)+'</p><small>ROADMAP IMPLEMENTATION PENDING</small></article>').join("");
    $$(".side-link").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  }
  function openSubject(subject){
    if(!state.data.subjects[subject])return;
    state.subject=subject;state.view="subject";state.mode="learning";state.category="all";state.type="all";state.query="";state.taskQuery="";state.bench=[];state.selected=null;
    $("#overview-view").hidden=true;$("#module-view").hidden=true;$("#subject-view").hidden=false;
    const d=state.data.subjects[subject];
    const taskCount=d.tasks.filter(t=>state.classFilter==="ALL"||t.class===state.classFilter).length;
    const accent={physics:"PHYSICS / MEASUREMENT",chemistry:"CHEMISTRY / MATTER & REACTIONS",biology:"BIOLOGY / LIFE SCIENCES"}[subject];
    $("#subject-eyebrow").textContent=accent;$("#subject-title").textContent=d.name+" Lab";
    $("#subject-description").textContent=d.sourceNote;
    $("#subject-status").textContent="Candidate / source-aware data";
    $("#crumb-current").textContent=d.name+" Lab";
    $("#inventory-search").value="";$("#task-search").value="";
    $$(".side-link").forEach(b=>b.classList.toggle("active",false));
    $$(".subject-nav").forEach(b=>b.classList.toggle("active",b.dataset.subject===subject));
    $$(".mode-tab").forEach(b=>b.classList.toggle("active",b.dataset.mode==="learning"));
    $("#mode-description").textContent=modeCopy.learning;
    renderInventory();renderBench();renderTasks();
    $("#task-count").textContent=taskCount+" tasks";
  }
  function renderInventory(){
    const items=allItems(state.subject);
    const filtered=items.filter(item=>{
      const q=state.query.toLowerCase();
      const matchesQuery=!q||[item.name,item.category,item.detail,item.source].join(" ").toLowerCase().includes(q);
      const matchesType=state.type==="all"||item.type===state.type;
      const matchesCategory=state.category==="all"||item.category===state.category;
      return matchesQuery&&matchesType&&matchesCategory;
    });
    const categories=[...new Set(items.map(i=>i.category||"Other"))].sort();
    $("#category-filters").innerHTML='<button class="filter-chip '+(state.category==="all"?"active":"")+'" data-category="all">All</button>'+categories.map(c=>'<button class="filter-chip '+(state.category===c?"active":"")+'" data-category="'+esc(c)+'">'+esc(pretty(c))+'</button>').join("");
    $("#inventory-total").textContent=filtered.length+" / "+items.length;
    $("#inventory-list").innerHTML=filtered.length?filtered.map(item=>{
      const extra=item.detail?'<div class="item-detail">'+esc(item.detail)+'</div>':"";
      const quantity=item.quantity?'<span class="mini-badge">Qty: '+esc(item.quantity)+'</span>':"";
      return '<article class="inventory-item '+(state.selected===item.id?"selected":"")+'" draggable="true" data-item-id="'+esc(item.id)+'"><div><div class="item-name">'+esc(item.name)+'</div><div class="item-category">'+esc(pretty(item.category||item.type))+'</div>'+extra+'<div class="item-meta">'+safetyBadge(item)+quantity+'</div></div><button class="add-item" type="button" data-add="'+esc(item.id)+'" aria-label="Add '+esc(item.name)+' to workbench">+</button></article>';
    }).join(""):'<div class="empty-bench"><strong>No matching records</strong><p>Change the search text or category filter.</p></div>';
    $$(".filter-chip").forEach(b=>b.addEventListener("click",()=>{state.category=b.dataset.category;renderInventory();}));
    $$(".add-item").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();addToBench(b.dataset.add);}));
    $$(".inventory-item").forEach(card=>{
      card.addEventListener("click",e=>{if(e.target.closest("button"))return;inspectItem(card.dataset.itemId);});
      card.addEventListener("dragstart",e=>{e.dataTransfer.setData("text/plain",card.dataset.itemId);e.dataTransfer.effectAllowed="copy";});
    });
  }
  function inspectItem(id){
    const item=allItems(state.subject).find(x=>x.id===id);if(!item)return;
    state.selected=id;
    const blocked=item.type==="reagent"||/NO_LIVE_USE|NOT_SUPPLIED_WITH_KIT|SAFETY_REVIEW_REQUIRED/i.test(item.status||"");
    $("#analysis-title").textContent=item.name;$("#analysis-copy").textContent=blocked?"This entry is a source-listed reference only. The source does not establish concentration, quantity, supply status or permission for physical handling.":"This catalogue record can be inspected. A validated scientific model or executable measurement rule is not yet attached.";
    const rows=[
      ["Record ID",item.id],["Category",pretty(item.category||item.type)],["Source",sourceLine(item)],
      ["Evidence",item.evidence||"Not recorded"],["Status",item.status||"Candidate / needs review"]
    ];
    if(item.quantity)rows.push(["Source quantity",item.quantity]);
    if(item.screening)rows.push(["Initial screen",pretty(item.screening)]);
    if(item.safety)rows.push(["Safety note",item.safety]);
    $("#selected-details").innerHTML='<span class="detail-label">SELECTED ITEM</span><strong>'+esc(item.name)+'</strong>'+rows.map(([k,v])=>'<div class="detail-row"><span>'+esc(k)+'</span><span>'+esc(v)+'</span></div>').join("");
    state.selected=id;renderInventory();
  }
  function addToBench(id){
    const item=allItems(state.subject).find(x=>x.id===id);if(!item)return;
    state.bench.push({...item,instanceId:Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7)});
    state.selected=id;renderBench();inspectItem(id);
    showToast(item.type==="reagent"?"Added as a virtual reference placeholder":"Added to the workbench");
  }
  function addLinkedItemsToBench(ids){
    const uniqueIds=[...new Set(ids||[])];
    const items=uniqueIds
      .map(id=>allItems(state.subject).find(item=>item.id===id))
      .filter(Boolean);
    const existing=new Set(state.bench.map(item=>item.id));
    const additions=items.filter(item=>!existing.has(item.id));
    additions.forEach(item=>state.bench.push({
      ...item,
      instanceId:Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7)
    }));
    renderBench();
    showToast(additions.length
      ? additions.length+" candidate placeholders added; no procedure or result is implied"
      : "All mapped candidate items are already on the workbench");
  }
  function renderBench(){
    const bench=$("#bench-items"),empty=$("#empty-bench");
    bench.innerHTML=state.bench.map((item,index)=>'<article class="bench-object"><button class="remove-object" type="button" data-remove="'+esc(item.instanceId)+'" aria-label="Remove item">×</button><span class="object-symbol">'+(item.type==="reagent"?"◌":item.type==="specimen"?"⌬":item.type==="slide"?"▤":"◇")+'</span><strong>'+esc(item.name)+'</strong><small>'+esc(pretty(item.category||item.type))+' · '+(item.type==="reagent"?"REFERENCE ONLY":"PLACEHOLDER")+'</small></article>').join("");
    const has=state.bench.length>0;bench.style.display=has?"flex":"none";empty.style.display=has?"none":"block";
    $("#bench-count").textContent=state.bench.length+" objects placed";
    $$("[data-remove]").forEach(b=>b.addEventListener("click",()=>{state.bench=state.bench.filter(x=>x.instanceId!==b.dataset.remove);renderBench();}));
  }
  function focusSourceItem(id){
    const item=allItems(state.subject).find(x=>x.id===id);
    if(!item){
      showToast("This source item is not in the current subject catalogue");
      return;
    }
    state.type="all";
    state.category="all";
    state.query=item.name;
    $("#inventory-type").value="all";
    $("#inventory-search").value=item.name;
    renderInventory();
    inspectItem(id);
    const card=$('[data-item-id="'+CSS.escape(id)+'"]');
    if(card)card.scrollIntoView({behavior:"smooth",block:"center"});
    showToast("Opened mapped source item: "+item.name);
  }
  function renderTasks(){
    const d=state.data.subjects[state.subject];
    const coverage=state.data.traceabilityCoverage?.[state.subject];
    if(coverage)$("#traceability-note").textContent=coverage.tasksWithSourceItemLinks+"/"+coverage.taskCount+" tasks have candidate source-item links; "+coverage.tasksWithoutSourceItemLinks+" remain without a source-item match.";
    const tasks=d.tasks.filter(t=>{
      const q=state.taskQuery.toLowerCase();
      return (state.classFilter==="ALL"||t.class===state.classFilter)&&(!q||[t.title,t.id,t.group].join(" ").toLowerCase().includes(q));
    });
    $("#task-count").textContent=tasks.length+" tasks";
    $("#task-list").innerHTML=tasks.map(t=>{
      const count=(t.sourceItemIds||[]).length;
      const linkText=count?count+" candidate source item link"+(count===1?"":"s"):"No source-item link recorded";
      const gap=t.mappingGap?'<div class="task-mapping-gap">'+esc(t.mappingGap)+'</div>':"";
      return '<article class="task-card"><div class="task-top"><span>CLASS '+esc(t.class)+' · '+esc(t.id)+'</span><span>'+esc(t.sourcePages||"")+'</span></div><strong>'+esc(t.title)+'</strong><small>'+esc(t.group||"TASK")+" · "+esc(t.status||"DESIGN_ONLY")+'</small><div class="task-source-count '+(count?"":"unmapped")+'">'+esc(linkText)+'</div>'+gap+'<button type="button" data-task="'+esc(t.id)+'">Inspect and browse linked items →</button></article>';
    }).join("")||'<div class="panel-note">No tasks match this filter.</div>';
    $$("[data-task]").forEach(b=>b.addEventListener("click",()=>{
      const t=d.tasks.find(x=>x.id===b.dataset.task);if(!t)return;
      const ids=t.sourceItemIds||[];
      const linked=ids.map(id=>{
        const item=allItems(state.subject).find(x=>x.id===id);
        return item?'<button type="button" class="source-link-button" data-focus-source="'+esc(id)+'"><span>'+esc(item.name)+'</span><small>'+esc(id)+'</small></button>':'<span class="source-link-missing">'+esc(id)+' · not found in subject catalogue</span>';
      }).join("");
      $("#analysis-title").textContent=t.title;
      $("#analysis-copy").textContent="Task-index record only. "+(ids.length?"The links below open candidate source catalogue items; they do not establish verified procurement equivalence.":(t.mappingGap||"No candidate source-item links are available."))+" Implementation status: "+t.status+". This is not a verified executable practical.";
      $("#selected-details").innerHTML='<span class="detail-label">PRACTICAL RECORD</span><strong>'+esc(t.id)+'</strong><div class="detail-row"><span>Class</span><span>'+esc(t.class)+'</span></div><div class="detail-row"><span>Subject</span><span>'+esc(t.subject)+'</span></div><div class="detail-row"><span>Source pages</span><span>'+esc(t.sourcePages)+'</span></div><div class="detail-row"><span>Implementation</span><span>'+esc(t.status)+'</span></div><div class="detail-row"><span>Candidate source links</span><span>'+ids.length+'</span></div>'+(t.mappingGap?'<div class="task-mapping-gap">'+esc(t.mappingGap)+'</div>':'')+'<div class="source-link-list">'+(linked||'<span class="source-link-missing">No candidate source-item links recorded for this task.</span>')+'</div>'+(ids.length?'<button type="button" class="setup-button" data-add-linked-setup>Add mapped candidates to workbench</button>':'');
      $("[data-focus-source]").forEach(link=>link.addEventListener("click",()=>focusSourceItem(link.dataset.focusSource)));
      $("[data-add-linked-setup]").forEach(button=>button.addEventListener("click",()=>addLinkedItemsToBench(ids)));
      showToast(ids.length?"Practical mapping opened; choose a source item to browse":"Practical has no source-item link recorded yet");
    }));
  }
  function switchMode(mode){
    state.mode=mode;$$(".mode-tab").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));$("#mode-description").textContent=modeCopy[mode]||"";
    if(mode==="analysis")showToast("Analysis view: evidence and model readiness only");
    if(mode==="research")showToast("Research Studio entry point selected");
  }
  function bindGlobal(){
    $$("[data-subject]").forEach(b=>b.addEventListener("click",()=>openSubject(b.dataset.subject)));
    $$("[data-view]").forEach(b=>b.addEventListener("click",()=>{const v=b.dataset.view;if(v==="overview")showOverview();else showModule(v);}));
    $("#back-home").addEventListener("click",showOverview);
    $("#module-back").addEventListener("click",showOverview);
    $("#inventory-search").addEventListener("input",e=>{state.query=e.target.value;renderInventory();});
    $("#inventory-type").addEventListener("change",e=>{state.type=e.target.value;state.category="all";renderInventory();});
    $("#task-search").addEventListener("input",e=>{state.taskQuery=e.target.value;renderTasks();});
    $("#class-select").addEventListener("change",e=>{state.classFilter=e.target.value;if(state.subject){renderTasks();} });
    $$(".mode-tab").forEach(b=>b.addEventListener("click",()=>switchMode(b.dataset.mode)));
    $("#reset-bench").addEventListener("click",()=>{state.bench=[];state.selected=null;renderBench();$("#analysis-title").textContent="No experiment running";$("#analysis-copy").textContent="Place an item to inspect its source, attributes and readiness. No scientific result is generated until a validated model is connected.";$("#selected-details").innerHTML='<span class="detail-label">SELECTED ITEM</span><strong>Nothing selected</strong><p>Choose an item from the tray or workbench.</p>';showToast("Workbench reset");});
    const zone=$("#drop-zone");
    zone.addEventListener("dragover",e=>{e.preventDefault();zone.classList.add("dragover");});
    zone.addEventListener("dragleave",()=>zone.classList.remove("dragover"));
    zone.addEventListener("drop",e=>{e.preventDefault();zone.classList.remove("dragover");const id=e.dataTransfer.getData("text/plain");if(id)addToBench(id);});
  }
  async function init(){
    bindGlobal();
    try{
      const response=await fetch("./data/inventory.json",{cache:"no-store"});
      if(!response.ok)throw new Error("inventory.json could not be loaded ("+response.status+")");
      state.data=await response.json();
      updateOverview();
      showOverview();
    }catch(err){
      $("#overview-view").innerHTML='<section class="panel"><h2>Dashboard data could not load</h2><p>'+esc(err.message)+'</p><p>Open this dashboard through a local web server or its deployed URL so the inventory JSON can load.</p></section>';
    }
  }
  document.addEventListener("DOMContentLoaded",init);
})();