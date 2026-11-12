import { useEffect, useMemo, useState, type DragEvent as ReactDragEvent } from "react";
import inventoryData from "../../dashboard/data/inventory.json";

type SubjectKey = "physics" | "chemistry" | "biology";
type ClassFilter = "ALL" | "XI" | "XII";
type WorkspaceKey = "learning" | "virtual" | "analysis" | "research";

const workspaceNames: Record<WorkspaceKey, string> = {
  learning: "Learning Lab",
  virtual: "Virtual Experiment Lab",
  analysis: "Scientific Analysis",
  research: "Research Studio"
};

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

type ResearchDraft = {
  question: string;
  hypothesis: string;
  alternative: string;
  independentVariable: string;
  dependentVariable: string;
  controls: string;
};
type ResearchDraftLoad = {
  draft: ResearchDraft;
  status: "empty" | "saved" | "invalid" | "unavailable";
};
const RESEARCH_DRAFT_STORAGE_KEY = "labverse.research-studio.draft.v1";
const RESEARCH_DRAFT_SCHEMA_VERSION = 1;
const RESEARCH_DRAFT_MAX_FIELD_LENGTH = 5000;
const EMPTY_RESEARCH_DRAFT: ResearchDraft = {
  question: "", hypothesis: "", alternative: "",
  independentVariable: "", dependentVariable: "", controls: ""
};
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function loadResearchDraft(): ResearchDraftLoad {
  try {
    const raw = window.localStorage.getItem(RESEARCH_DRAFT_STORAGE_KEY);
    if (!raw) return {draft: {...EMPTY_RESEARCH_DRAFT}, status: "empty"};
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed) || parsed.schemaVersion !== RESEARCH_DRAFT_SCHEMA_VERSION ||
        typeof parsed.savedAt !== "string" || !Number.isFinite(Date.parse(parsed.savedAt)) ||
        !isRecord(parsed.draft)) {
      return {draft: {...EMPTY_RESEARCH_DRAFT}, status: "invalid"};
    }
    const fields: (keyof ResearchDraft)[] = [
      "question","hypothesis","alternative","independentVariable","dependentVariable","controls"
    ];
    const valid = fields.every((field) =>
      typeof parsed.draft[field] === "string" &&
      (parsed.draft[field] as string).length <= RESEARCH_DRAFT_MAX_FIELD_LENGTH
    );
    if (!valid) return {draft: {...EMPTY_RESEARCH_DRAFT}, status: "invalid"};
    return {
      draft: Object.fromEntries(fields.map((field) => [field, parsed.draft[field]])) as ResearchDraft,
      status: "saved"
    };
  } catch {
    return {draft: {...EMPTY_RESEARCH_DRAFT}, status: "unavailable"};
  }
}

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
  visualAudit?: {
    status: string;
    page?: number;
    sourcePdfPage?: number;
    sourceSha?: string;
    sourceDetail?: string;
    safetyFinding?: string;
    classificationFinding?: string;
  };
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
  useEffect(() => {
    if (!researchDraftDirty) return;
    const hasContent = Object.values(researchDraft).some((value) => value.trim().length > 0);
    try {
      if (!hasContent) {
        window.localStorage.removeItem(RESEARCH_DRAFT_STORAGE_KEY);
        setResearchDraftStatus("empty");
        return;
      }
      window.localStorage.setItem(RESEARCH_DRAFT_STORAGE_KEY, JSON.stringify({
        schemaVersion: RESEARCH_DRAFT_SCHEMA_VERSION,
        savedAt: new Date().toISOString(),
        draft: researchDraft
      }));
      setResearchDraftStatus("saved");
    } catch {
      setResearchDraftStatus("unavailable");
    }
  }, [researchDraft, researchDraftDirty]);

  const [activeSubject, setActiveSubject] = useState<SubjectKey | null>(null);
  const [activeWorkspace, setActiveWorkspace] = useState<WorkspaceKey>("learning");
  const [requestedWorkspace, setRequestedWorkspace] = useState<WorkspaceKey | null>(null);
  const [initialResearchDraft] = useState<ResearchDraftLoad>(loadResearchDraft);
  const [researchDraft, setResearchDraft] = useState<ResearchDraft>(initialResearchDraft.draft);
  const [researchDraftStatus, setResearchDraftStatus] = useState<ResearchDraftLoad["status"]>(initialResearchDraft.status);
  const [researchDraftDirty, setResearchDraftDirty] = useState(false);
  const [researchDraftReady, setResearchDraftReady] = useState(false);
  const [classFilter, setClassFilter] = useState<ClassFilter>("ALL");
  const [search, setSearch] = useState("");
  const [itemTypeFilter, setItemTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [taskSearch, setTaskSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<CatalogueItem | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [benchItems, setBenchItems] = useState<CatalogueItem[]>([]);
  const [benchDropActive, setBenchDropActive] = useState(false);

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
      const matchesType = itemTypeFilter === "all" || item.type === itemTypeFilter;
      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
      const matchesQuery =
        !query ||
        [
          item.name,
          item.category ?? "",
          item.detail ?? "",
          item.source ?? ""
        ].join(" ").toLowerCase().includes(query);
      return matchesType && matchesCategory && matchesQuery;
    });
  }, [activeData, search, itemTypeFilter, categoryFilter]);

  const availableCategories = useMemo(() => {
    if (!activeData) return [];
    return [...new Set(
      [...activeData.inventory, ...activeData.reagents]
        .map(item => item.category)
        .filter((category): category is string => Boolean(category))
    )].sort();
  }, [activeData]);

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

  const biologyAuditItems = activeSubject === "biology" && activeData
    ? (activeData.inventory as unknown as CatalogueItem[]).filter((item) =>
        item.id.startsWith("NCERT-BIO-WM-SPEC-")
      )
    : [];
  const biologyAuditCheckedCount = biologyAuditItems.filter(
    (item) => item.visualAudit?.status === "VISUALLY_CHECKED_CURRENT_UPLOAD"
  ).length;
  const biologyAuditPendingCount = biologyAuditItems.length - biologyAuditCheckedCount;

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
    setActiveWorkspace("learning");
    setRequestedWorkspace(null);
    setSearch("");
    setItemTypeFilter("all");
    setCategoryFilter("all");
    setTaskSearch("");
    setSelectedItem(null);
    setSelectedTaskId(null);
    setBenchItems([]);
  };

  const selectWorkspace = (workspace: WorkspaceKey) => {
    setActiveWorkspace(workspace);
    if (!activeSubject) setRequestedWorkspace(workspace);
  };

  const openSubject = (subject: SubjectKey) => {
    setActiveSubject(subject);
    setActiveWorkspace(requestedWorkspace ?? "learning");
    setRequestedWorkspace(null);
    setSearch("");
    setItemTypeFilter("all");
    setCategoryFilter("all");
    setTaskSearch("");
    setSelectedItem(null);
    setSelectedTaskId(null);
    setBenchItems([]);
  };

  const updateResearchDraft = (field: keyof ResearchDraft, value: string) => {
    setResearchDraft((current) => ({...current, [field]: value}));
    setResearchDraftDirty(true);
    setResearchDraftReady(false);
  };
  const clearResearchDraft = () => {
    setResearchDraft({...EMPTY_RESEARCH_DRAFT});
    setResearchDraftDirty(true);
    setResearchDraftReady(false);
  };

  const addBenchItem = (item: CatalogueItem) => {
    setBenchItems((current) => current.some((existing) => existing.id === item.id) ? current : [...current, item]);
  };
  const addSelectedTaskItems = () => {
    setBenchItems((current) => {
      const existing = new Set(current.map((item) => item.id));
      const additions = selectedTaskItems.filter((item) => !existing.has(item.id));
      return [...current, ...additions];
    });
  };
  const handleInventoryDragStart = (event: ReactDragEvent<HTMLButtonElement>, itemId: string) => {
    event.dataTransfer.setData("text/plain", itemId);
    event.dataTransfer.effectAllowed = "copy";
  };
  const handleBenchDragOver = (event: ReactDragEvent<HTMLElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setBenchDropActive(true);
  };
  const handleBenchDragLeave = (event: ReactDragEvent<HTMLElement>) => {
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) setBenchDropActive(false);
  };
  const handleBenchDrop = (event: ReactDragEvent<HTMLElement>) => {
    event.preventDefault();
    setBenchDropActive(false);
    const itemId = event.dataTransfer.getData("text/plain");
    const item = subjectItems.find((candidate) => candidate.id === itemId);
    if (item) addBenchItem(item);
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
        <button className={!activeSubject && !requestedWorkspace ? "nav-link active" : "nav-link"} onClick={goHome}>
          <span>⌂</span> Dashboard
        </button>
        <button className={activeWorkspace === "learning" && (activeSubject || requestedWorkspace) ? "nav-link active" : "nav-link"} onClick={() => selectWorkspace("learning")}>
          <span>▤</span> Learning Lab
        </button>
        <button className={activeWorkspace === "virtual" && (activeSubject || requestedWorkspace) ? "nav-link active" : "nav-link"} onClick={() => selectWorkspace("virtual")}>
          <span>◇</span> Virtual Experiment Lab
        </button>
        <button className={activeWorkspace === "analysis" && (activeSubject || requestedWorkspace) ? "nav-link active" : "nav-link"} onClick={() => selectWorkspace("analysis")}>
          <span>⌁</span> Scientific Analysis
        </button>
        <button className={activeWorkspace === "research" && (activeSubject || requestedWorkspace) ? "nav-link active" : "nav-link"} onClick={() => selectWorkspace("research")}>
          <span>⌘</span> Research Studio
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
                  <button key={key} className={`subject-card ${meta.colour}`} onClick={() => openSubject(key)}>
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
            {requestedWorkspace && (
              <section className="workspace-launch">
                <div className="eyebrow">{workspaceNames[requestedWorkspace].toUpperCase()}</div>
                <h2>Choose a subject direction</h2>
                <p>Open Physics, Chemistry or Biology inside {workspaceNames[requestedWorkspace]}.</p>
                <div className="workspace-launch-actions">
                  {(Object.keys(subjectMeta) as SubjectKey[]).map((key) => (
                    <button type="button" key={key} onClick={() => openSubject(key)}>
                      {subjectMeta[key].title} →
                    </button>
                  ))}
                </div>
              </section>
            )}
          </section>
        ) : activeData ? (
          <section className="subject-view">
            <button className="back-button" onClick={goHome}>← Dashboard</button>
            <div className="eyebrow">{subjectMeta[activeSubject].short}</div>
            <h1>{activeData.name} Lab</h1>
            <p className="description">{activeData.sourceNote}</p>

            <div className="workspace-tabs" role="tablist" aria-label="LabVerse workspaces">
              {(Object.keys(workspaceNames) as WorkspaceKey[]).map((workspace) => (
                <button
                  type="button"
                  key={workspace}
                  role="tab"
                  aria-selected={activeWorkspace === workspace}
                  className={activeWorkspace === workspace ? "active" : ""}
                  onClick={() => setActiveWorkspace(workspace)}
                >
                  {workspaceNames[workspace]}
                </button>
              ))}
            </div>

            {activeWorkspace !== "research" && <div className="content-grid">
              <section className="panel">
                <div className="panel-head">
                  <div><div className="eyebrow">SOURCE CATALOGUE</div><h2>Instrument & material inventory</h2></div>
                  <strong>{items.length} / {activeData.inventory.length + activeData.reagents.length}</strong>
                </div>
                {activeSubject === "biology" && (
                  <div className="visual-audit-coverage" role="note">
                    <strong>With-microscope detail pages: {biologyAuditCheckedCount} / {biologyAuditItems.length} visually checked</strong>
                    <span>{biologyAuditPendingCount} items remain OCR/index-only. Uploaded-byte identity to NCERT is not verified.</span>
                  </div>
                )}
                <input
                  className="search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search instrument, apparatus, chemical..."
                />
                <div className="inventory-filters">
                  <label>
                    <span>ITEM TYPE</span>
                    <select value={itemTypeFilter} onChange={(event) => setItemTypeFilter(event.target.value)}>
                      <option value="all">All types</option>
                      <option value="apparatus">Apparatus</option>
                      <option value="reagent">Chemicals / reagents</option>
                      <option value="specimen">Specimens</option>
                      <option value="slide">Permanent slides</option>
                      <option value="visual_aid">Visual aids</option>
                    </select>
                  </label>
                  <label>
                    <span>CATEGORY</span>
                    <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                      <option value="all">All categories</option>
                      {availableCategories.map(category => (
                        <option key={category} value={category}>{category.replaceAll("_", " ")}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="item-list">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      className={selectedItem?.id === item.id ? "item selected" : "item"}
                      onClick={() => setSelectedItem(item)}
                      draggable={activeWorkspace === "virtual"}
                      onDragStart={(event) => handleInventoryDragStart(event, item.id)}
                      aria-label={activeWorkspace === "virtual" ? `Select or drag ${item.name} to the candidate workbench` : undefined}
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
                      {activeSubject === "biology" && selectedItem.id.startsWith("NCERT-BIO-WM-SPEC-") && (
                        <>
                          <dt>Detail-page visual audit</dt>
                          <dd>
                            {selectedItem.visualAudit?.status === "VISUALLY_CHECKED_CURRENT_UPLOAD"
                              ? `VISUALLY CHECKED in user-uploaded candidate · PDF page ${selectedItem.visualAudit.page ?? selectedItem.visualAudit.sourcePdfPage ?? "not recorded"}`
                              : "NOT VISUALLY CHECKED · OCR/index catalogue evidence only"}
                          </dd>
                        </>
                      )}
                      <dt>Display status</dt><dd>{statusLabel(selectedItem)}</dd>
                      <dt>Source status</dt><dd>{selectedItem.status}</dd>
                      {selectedItem.quantity && <><dt>Source quantity</dt><dd>{selectedItem.quantity}</dd></>}
                      {(selectedItem.safety || selectedItem.screening) && (
                        <><dt>Safety / review</dt><dd>{[selectedItem.safety, selectedItem.screening].filter(Boolean).join(" · ")}</dd></>
                      )}
                    </dl>
                    <p className="warning">Catalogue information only. It does not establish current supplied stock, physical-use permission or scientific validation.</p>
                    {activeWorkspace === "virtual" && (
                      <button
                        type="button"
                        className="setup-button"
                        onClick={() => addBenchItem(selectedItem)}
                      >
                        Add selected item as candidate placeholder
                      </button>
                    )}
                  </>
                ) : (
                  <div className="empty">
                    <strong>Select an inventory item</strong>
                    <p>Source identity, evidence and safety notes appear here.</p>
                  </div>
                )}
              </section>
            </div>}

            {activeWorkspace === "learning" && <section className="panel practical-panel">
              <div className="eyebrow">TASK / SOURCE COVERAGE</div>
              <div className="coverage-note">
                <strong>{inventoryData.traceabilityCoverage[activeSubject].tasksWithSourceItemLinks}/{inventoryData.traceabilityCoverage[activeSubject].taskCount} tasks linked</strong>
                <span>{inventoryData.traceabilityCoverage[activeSubject].tasksWithoutSourceItemLinks} unmatched tasks · {inventoryData.traceabilityCoverage[activeSubject].unresolvedSourceItemIds} unresolved item IDs</span>
              </div>
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
            </section>}

            {activeWorkspace === "virtual" && (
              <section
                className={benchDropActive ? "panel bench-panel drag-over" : "panel bench-panel"}
                onDragOver={handleBenchDragOver}
                onDragLeave={handleBenchDragLeave}
                onDrop={handleBenchDrop}
                aria-label="Candidate workbench drop area"
              >
                <div className="panel-head">
                  <div><div className="eyebrow">PLACEHOLDER WORKSPACE</div><h2>Experiment workbench</h2></div>
                  <strong>{benchItems.length} objects</strong>
                </div>
                {benchItems.length === 0 ? (
                  <p className="bench-empty">Drag a catalogue item here, or select an item and use “Add selected item”. Touch screens can use the selection button.</p>
                ) : (
                  <>
                    <div className="bench-list">
                      {benchItems.map((item) => (
                        <div className="bench-item" key={item.id}>
                          <div className="bench-item-copy"><strong>{item.name}</strong><small>{item.id} · CANDIDATE PLACEHOLDER</small></div>
                          <button type="button" className="remove-bench-item" aria-label={`Remove ${item.name} from workbench`} onClick={() => setBenchItems((current) => current.filter((entry) => entry.id !== item.id))}>Remove</button>
                        </div>
                      ))}
                    </div>
                    <button type="button" className="clear-bench" onClick={() => setBenchItems([])}>Clear workbench</button>
                  </>
                )}
                <p className="bench-drop-hint">Drop target: catalogue candidate items only.</p>
                <p className="bench-warning">These are catalogue placeholders only—not a verified kit setup, procedure or simulated result.</p>
              </section>
            )}

            {activeWorkspace === "analysis" && (
              <section className="panel analysis-workspace">
                <div className="eyebrow">SCIENTIFIC ANALYSIS</div>
                <h2>Evidence and model readiness</h2>
                {selectedItem ? (
                  <>
                    <p><strong>{selectedItem.name}</strong> — {statusLabel(selectedItem)}.</p>
                    <dl>
                      <dt>Source</dt><dd>{selectedItem.source ?? "Source not recorded"}</dd>
                      <dt>Evidence</dt><dd>{selectedItem.evidence ?? "Not recorded"}</dd>
                      <dt>Source status</dt><dd>{selectedItem.status}</dd>
                    </dl>
                  </>
                ) : (
                  <p>Select an item from the inventory to inspect its evidence and review state.</p>
                )}
                <div className="analysis-state">
                  <strong>No validated scientific model connected</strong>
                  <p>No calculated or predicted result is generated in this workspace yet. Model scope, assumptions, units, uncertainty and domain review must be implemented before results are shown.</p>
                </div>
              </section>
            )}

            {activeWorkspace === "research" && (
              <section className="panel research-workspace">
                <div className="eyebrow">RESEARCH STUDIO</div>
                <h2>Structure a research question</h2>
                <p>Draft a question, hypothesis, alternative and variables before planning a validated investigation.</p>
                <form onSubmit={(event) => { event.preventDefault(); setResearchDraftReady(true); }}>
                  <label>Research question
                    <textarea required maxLength={RESEARCH_DRAFT_MAX_FIELD_LENGTH} value={researchDraft.question} onChange={(event) => updateResearchDraft("question", event.target.value)} />
                  </label>
                  <label>Working hypothesis
                    <textarea maxLength={RESEARCH_DRAFT_MAX_FIELD_LENGTH} value={researchDraft.hypothesis} onChange={(event) => updateResearchDraft("hypothesis", event.target.value)} />
                  </label>
                  <label>Alternative explanation
                    <textarea maxLength={RESEARCH_DRAFT_MAX_FIELD_LENGTH} value={researchDraft.alternative} onChange={(event) => updateResearchDraft("alternative", event.target.value)} />
                  </label>
                  <div className="research-variable-grid">
                    <label>Independent variable
                      <input maxLength={RESEARCH_DRAFT_MAX_FIELD_LENGTH} value={researchDraft.independentVariable} onChange={(event) => updateResearchDraft("independentVariable", event.target.value)} />
                    </label>
                    <label>Dependent variable
                      <input maxLength={RESEARCH_DRAFT_MAX_FIELD_LENGTH} value={researchDraft.dependentVariable} onChange={(event) => updateResearchDraft("dependentVariable", event.target.value)} />
                    </label>
                  </div>
                  <label>Controls / conditions to hold constant
                    <textarea maxLength={RESEARCH_DRAFT_MAX_FIELD_LENGTH} value={researchDraft.controls} onChange={(event) => updateResearchDraft("controls", event.target.value)} />
                  </label>
                  <div className="research-draft-actions">
                    <button type="submit" className="setup-button">Preview research draft</button>
                    <button type="button" className="clear-draft-button" onClick={clearResearchDraft}>Clear local draft</button>
                  </div>
                </form>
                <p className="research-storage-status" role="status" aria-live="polite">
                  {researchDraftStatus === "saved" && "Draft saved locally on this device. It is not uploaded or synced."}
                  {researchDraftStatus === "empty" && "No local draft saved yet."}
                  {researchDraftStatus === "invalid" && "An unsupported or invalid local draft was found. It was not loaded; clear it or enter a new draft to replace it."}
                  {researchDraftStatus === "unavailable" && "Browser storage is unavailable. This draft may be lost when the page closes."}
                </p>
                {researchDraftReady && (
                  <div className="analysis-state">
                    <strong>Research draft preview ready</strong>
                    <p>{researchDraft.question}</p>
                    <small>Preview only. The versioned draft is saved on this device; it is not uploaded or cloud-synced.</small>
                  </div>
                )}
                <p className="bench-warning">A draft is not an approved protocol or scientific conclusion. Safety and subject-expert review remain required.</p>
              </section>
            )}

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