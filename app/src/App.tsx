import { useMemo, useState } from "react";
import inventoryData from "../../dashboard/data/inventory.json";

type SubjectKey = "physics" | "chemistry" | "biology";
type ClassFilter = "ALL" | "XI" | "XII";

const subjectMeta: Record<
  SubjectKey,
  { title: string; short: string; icon: string; colour: string; focus: string }
> = {
  physics: {
    title: "Physics",
    short: "MEASUREMENT & MODELS",
    icon: "∿",
    colour: "violet",
    focus: "Mechanics, measurement, electricity, optics, waves and material analysis."
  },
  chemistry: {
    title: "Chemistry",
    short: "MATTER & REACTIONS",
    icon: "⚗",
    colour: "amber",
    focus: "Micro-scale apparatus, glassware, reagent references, reactions and properties."
  },
  biology: {
    title: "Biology",
    short: "LIFE & OBSERVATION",
    icon: "⌬",
    colour: "teal",
    focus: "Microscopy, specimens, permanent slides, visual aids, ecology and genetics."
  }
};

type SubjectData = (typeof inventoryData.subjects)[SubjectKey];

// Normalised read contract: different source catalogues legitimately omit
// optional fields such as detail or quantity. No field is inferred when absent.
type CatalogueItem = {
  id: string;
  name: string;
  category?: string;
  type: string;
  detail?: string;
  source?: string;
  evidence?: string;
  status: string;
  quantity?: string;
  safety?: string;
  screening?: string;
};

function statusLabel(item: CatalogueItem): string {
  const combined = `${item.status} ${item.evidence ?? ""}`.toLowerCase();
  if (combined.includes("not_supplied_with_kit")) {
    return "School-managed reference / not supplied with kit";
  }
  if (item.type === "reagent" || combined.includes("no_live_use")) {
    return "Reference only / no live use";
  }
  if (
    combined.includes("candidate") ||
    combined.includes("unauthenticated") ||
    combined.includes("ocr_text") ||
    combined.includes("index_only") ||
    combined.includes("needs_review")
  ) {
    return "Candidate source";
  }
  return "Source indexed";
}

export default function App() {
  const [activeSubject, setActiveSubject] = useState<SubjectKey | null>(null);
  const [classFilter, setClassFilter] = useState<ClassFilter>("ALL");
  const [search, setSearch] = useState("");
  const [taskSearch, setTaskSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<CatalogueItem | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [benchItems, setBenchItems] = useState<CatalogueItem[]>([]);

  const activeData: SubjectData | null = activeSubject
    ? inventoryData.subjects[activeSubject]
    : null;

  const items = useMemo(() => {
    if (!activeData) return [];
    const query = search.trim().toLowerCase();
    const catalogueRows = [
      ...(activeData.inventory as unknown as CatalogueItem[]),
      ...(activeData.reagents as unknown as CatalogueItem[])
    ];
    return catalogueRows.filter((item) => {
      if (!query) return true;
      return [
        item.name,
        item.category ?? "",
        item.detail ?? "",
        item.source ?? ""
      ].join(" ").toLowerCase().includes(query);
    });
  }, [activeData, search]);

  const subjectItems = activeData
    ? [
        ...(activeData.inventory as unknown as CatalogueItem[]),
        ...(activeData.reagents as unknown as CatalogueItem[])
      ]
    : [];

  const selectedTask = activeData?.tasks.find((task) => task.id === selectedTaskId) ?? null;
  const selectedTaskItems = selectedTask
    ? selectedTask.sourceItemIds
        .map((id) => subjectItems.find((item) => item.id === id))
        .filter((item): item is CatalogueItem => item !== undefined)
    : [];

  const tasks = useMemo(() => {
    if (!activeData) return [];
    const query = taskSearch.trim().toLowerCase();
    return activeData.tasks.filter((task) => {
      const matchesClass = classFilter === "ALL" || task.class === classFilter;
      const matchesText =
        !query ||
        [task.id, task.title, task.group ?? ""].join(" ").toLowerCase().includes(query);
      return matchesClass && matchesText;
    });
  }, [activeData, classFilter, taskSearch]);

  const goHome = () => {
    setActiveSubject(null);
    setSearch("");
    setTaskSearch("");
    setSelectedItem(null);
    setSelectedTaskId(null);
    setBenchItems([]);
  };

  const openSubject = (subject: SubjectKey) => {
    setActiveSubject(subject);
    setSearch("");
    setTaskSearch("");
    setSelectedItem(null);
    setSelectedTaskId(null);
    setBenchItems([]);
  };

  const addSelectedTaskItems = () => {
    setBenchItems((current) => {
      const existing = new Set(current.map((item) => item.id));
      const additions = selectedTaskItems.filter((item) => !existing.has(item.id));
      return [...current, ...additions];
    });
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" onClick={goHome} aria-label="LabVerse dashboard">
          <span className="brand-mark">LV</span>
          <span>
            <strong>LabVerse</strong>
            <small>SCIENCE WORKSPACE</small>
          </span>
        </button>

        <div className="nav-label">WORKSPACE</div>
        <button className={!activeSubject ? "nav-link active" : "nav-link"} onClick={goHome}>
          <span>⌂</span> Dashboard
        </button>
        <button className="nav-link" onClick={() => openSubject("physics")}>
          <span>▤</span> Learning Lab
        </button>
        <button className="nav-link" onClick={() => openSubject("chemistry")}>
          <span>◇</span> Virtual Experiment Lab
        </button>
        <button className="nav-link" onClick={() => openSubject("biology")}>
          <span>⌁</span> Scientific Analysis
        </button>

        <div className="nav-label subject-label">THREE SCIENCE DIRECTIONS</div>
        {(Object.keys(subjectMeta) as SubjectKey[]).map((key) => (
          <button
            key={key}
            className={activeSubject === key ? `subject-nav ${key} selected` : `subject-nav ${key}`}
            onClick={() => openSubject(key)}
          >
            <i /> {subjectMeta[key].title}
          </button>
        ))}

        <div className="sidebar-bottom">
          <div className="local-card">
            <span>◉</span>
            <div>
              <strong>Local-first workspace</strong>
              <small>No account required for this prototype</small>
            </div>
          </div>
          <p>LABVERSE · APP FOUNDATION 0.1</p>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="crumb">
            <span>LabVerse</span><b>/</b><strong>{activeData?.name ?? "Dashboard"}</strong>
          </div>
          <label className="class-select">
            <span>CLASS</span>
            <select value={classFilter} onChange={(event) => setClassFilter(event.target.value as ClassFilter)}>
              <option value="ALL">Class 11 + 12</option>
              <option value="XI">Class 11</option>
              <option value="XII">Class 12</option>
            </select>
          </label>
        </header>

        {!activeSubject ? (
          <section className="overview">
            <div className="eyebrow">SCIENTIFIC DISCOVERY PLATFORM</div>
            <div className="hero-row">
              <div>
                <h1>Explore. Experiment.<br /><span>Understand.</span></h1>
                <p>One workspace for practical learning, virtual experiments and evidence-led scientific analysis.</p>
              </div>
              <div className="hero-mark">LV</div>
            </div>

            <div className="stats">
              <div><span>RBSE task index</span><strong>{inventoryData.stats.rbseTaskIds}</strong><small>XI + XII · 3 subjects</small></div>
              <div><span>Science directions</span><strong>03</strong><small>Physics · Chemistry · Biology</small></div>
              <div><span>Evidence status</span><strong>Visible</strong><small>Candidate and reviewed records remain distinct</small></div>
            </div>

            <div className="section-heading">
              <div><div className="eyebrow">CHOOSE A DIRECTION</div><h2>Three science workspaces</h2></div>
              <span>Source-backed catalogues · Evidence-aware UI</span>
            </div>

            <div className="subject-grid">
              {(Object.keys(subjectMeta) as SubjectKey[]).map((key) => {
                const meta = subjectMeta[key];
                const subject = inventoryData.subjects[key];
                const count = subject.inventory.length;
                return (
                  <button key={key} className={`subject-card ${meta.colour}`} onClick={() => setActiveSubject(key)}>
                    <div className="subject-icon">{meta.icon}</div>
                    <small>{meta.short}</small>
                    <h3>{meta.title}</h3>
                    <p>{meta.focus}</p>
                    <div className="card-foot">
                      <span>{count} catalogue records</span>
                      <b>{subject.tasks.length} RBSE tasks</b>
                    </div>
                    <div className="open-label">Open {meta.title} Lab <span>→</span></div>
                  </button>
                );
              })}
            </div>
          </section>
        ) : activeData ? (
          <section className="subject-view">
            <button className="back-button" onClick={goHome}>← Dashboard</button>
            <div className="eyebrow">{subjectMeta[activeSubject].short}</div>
            <h1>{activeData.name} Lab</h1>
            <p className="description">{activeData.sourceNote}</p>

            <div className="workspace-tabs">
              <span className="active">Learning Lab</span>
              <span>Virtual Experiment Lab</span>
              <span>Scientific Analysis</span>
              <span>Research Studio</span>
            </div>

            <div className="content-grid">
              <section className="panel">
                <div className="panel-head">
                  <div><div className="eyebrow">SOURCE CATALOGUE</div><h2>Instrument & material inventory</h2></div>
                  <strong>{items.length} / {activeData.inventory.length + activeData.reagents.length}</strong>
                </div>
                <input
                  className="search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search instrument, apparatus, chemical..."
                />
                <div className="item-list">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      className={selectedItem?.id === item.id ? "item selected" : "item"}
                      onClick={() => setSelectedItem(item)}
                    >
                      <span>
                        <strong>{item.name}</strong>
                        <small>{item.category ?? item.type}</small>
                        <em>{statusLabel(item)}</em>
                      </span>
                      <b>›</b>
                    </button>
                  ))}
                  {items.length === 0 && <p className="empty">No items match this search.</p>}
                </div>
              </section>

              <section className="panel detail-panel">
                <div className="eyebrow">SOURCE / EVIDENCE</div>
                {selectedItem ? (
                  <>
                    <h2>{selectedItem.name}</h2>
                    <p>{selectedItem.detail ?? "No extra item description in the current source catalogue."}</p>
                    <dl>
                      <dt>Record ID</dt><dd>{selectedItem.id}</dd>
                      <dt>Source</dt><dd>{selectedItem.source}</dd>
                      <dt>Evidence</dt><dd>{selectedItem.evidence ?? "Not recorded"}</dd>
                      <dt>Display status</dt><dd>{statusLabel(selectedItem)}</dd>
                      <dt>Source status</dt><dd>{selectedItem.status}</dd>
                      {selectedItem.quantity && <><dt>Source quantity</dt><dd>{selectedItem.quantity}</dd></>}
                    </dl>
                    <p className="warning">Catalogue information only. It does not establish current supplied stock, physical-use permission or scientific validation.</p>
                  </>
                ) : (
                  <div className="empty">
                    <strong>Select an inventory item</strong>
                    <p>Source identity, evidence and safety notes appear here.</p>
                  </div>
                )}
              </section>
            </div>

            <section className="panel practical-panel">
              <div className="panel-head">
                <div><div className="eyebrow">RBSE CLASS 11–12</div><h2>Practical catalogue</h2></div>
                <strong>{tasks.length} tasks</strong>
              </div>
              <input
                className="search"
                type="search"
                value={taskSearch}
                onChange={(event) => setTaskSearch(event.target.value)}
                placeholder="Search practicals..."
              />
              <div className="task-list">
                {tasks.map((task) => {
                  const mappedCount = task.sourceItemIds.length;
                  const gapValue = "mappingGap" in task ? task.mappingGap : undefined;
                  const mappingGap = typeof gapValue === "string" ? gapValue : undefined;
                  const isSelected = selectedTaskId === task.id;
                  return (
                    <article key={task.id} className={isSelected ? "task selected" : "task"}>
                      <small>CLASS {task.class} · {task.id} · {task.sourcePages}</small>
                      <strong>{task.title}</strong>
                      <span>{mappedCount} candidate source item links · {task.status}</span>
                      {mappingGap && <p className="mapping-gap">{mappingGap}</p>}
                      <button type="button" className="task-open" onClick={() => setSelectedTaskId(isSelected ? null : task.id)}>
                        {isSelected ? "Close source mapping ↑" : "Inspect mapped items →"}
                      </button>
                      {isSelected && (
                        <div className="mapped-items">
                          {selectedTaskItems.length === 0 ? (
                            <p>No candidate source-item links are recorded for this task.</p>
                          ) : (
                            <>
                              {selectedTaskItems.map((item) => (
                                <button
                                  type="button"
                                  key={item.id}
                                  className="mapped-item"
                                  onClick={() => {
                                    setSearch(item.name);
                                    setSelectedItem(item);
                                  }}
                                >
                                  <strong>{item.name}</strong>
                                  <small>{item.id} · {statusLabel(item)}</small>
                                </button>
                              ))}
                              <button type="button" className="setup-button" onClick={addSelectedTaskItems}>
                                Add mapped candidates to workbench
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="panel bench-panel">
              <div className="panel-head">
                <div><div className="eyebrow">PLACEHOLDER WORKSPACE</div><h2>Experiment workbench</h2></div>
                <strong>{benchItems.length} objects</strong>
              </div>
              {benchItems.length === 0 ? (
                <p className="bench-empty">Your workbench is empty. Inspect a practical and add its mapped candidate items here.</p>
              ) : (
                <>
                  <div className="bench-list">
                    {benchItems.map((item) => (
                      <div className="bench-item" key={item.id}>
                        <strong>{item.name}</strong>
                        <small>{item.id} · CANDIDATE PLACEHOLDER</small>
                      </div>
                    ))}
                  </div>
                  <button type="button" className="clear-bench" onClick={() => setBenchItems([])}>Clear workbench</button>
                </>
              )}
              <p className="bench-warning">These are catalogue placeholders only—not a verified kit setup, procedure or simulated result.</p>
            </section>

            <div className="evidence-note">
              <strong>Prototype boundary</strong>
              <p>Inventory records retain their evidence status. This React scaffold does not run an experiment, calculate a result or turn candidate data into approved physical-use instructions.</p>
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}