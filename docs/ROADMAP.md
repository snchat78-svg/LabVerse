# LabVerse Master Roadmap — Scientific Discovery Platform

This roadmap controls phase order and is the master execution contract. Class 11–12 is the first content pack; Research Studio and expandable scientific domains are core product capabilities, not optional decoration. All implementation and documentation work must map to a phase and a verifiable deliverable. Do not skip, repeat or silently reorder phases.

| Phase | Name | Main outcome | Status |
|---|---|---|---|
| 0 | Product definition and design baseline | Product vision, requirements, architecture, rules and phase process | DONE — docs only |
| 1 | Platform scope, source audit and first science catalogue | RBSE/NCERT first pack + scientific source registry + research capability map | IN PROGRESS |
| 2 | Scientific domain model and evidence contracts | Units, substances, organisms, materials, models, rules, data provenance, hypotheses and observation schemas | BLOCKED by Phase 1 |
| 3 | Codebase foundation and CI | React/TS app shell, lint/typecheck/tests/build and release structure | NOT STARTED |
| 4 | Dashboard and workspace navigation | Learning Lab, Virtual Lab, Analysis and Research Studio entry points | NOT STARTED |
| 5 | 3D workbench and object interaction | Empty bench, real 3D assets, tap/drag, transform, connect, inspect and reset | NOT STARTED |
| 6 | Deterministic simulation and experiment runtime | State engine, actions, event history, simulation clock, replay and validation | NOT STARTED |
| 7 | Chemistry property and reaction engine | Trusted property lookup, curated reactions, stoichiometry, kinetics, equilibrium and visual states | NOT STARTED |
| 8 | Physics modelling engine | Mechanics, circuits, optics, waves, measurement, material properties and uncertainty | NOT STARTED |
| 9 | Biology observation and model engine | Cells, tissues, microscopy, taxonomy, genetics, physiology and ecology | NOT STARTED |
| 10 | Curriculum pack — Class 11/12 | Complete source-verified practicals, inventory, guides and assessments | NOT STARTED |
| 11 | Research Studio — question to experiment | Literature links, question, hypothesis, alternatives, variables, method and safety review | NOT STARTED |
| 12 | Scientific data workspace | Import/record datasets, schema, provenance, cleaning, units and immutable raw data | NOT STARTED |
| 13 | Analysis, statistics and visualisation | Equations, calculations, graphs, uncertainty, regression and model comparison | NOT STARTED |
| 14 | Evidence graph and research synthesis | Source retrieval, citations, contradictions, claim evidence and knowledge links | NOT STARTED |
| 15 | Hypothesis and discovery assistance | Pattern/gap detection, candidate explanations and proposed discriminating tests | NOT STARTED |
| 16 | Notebook and reproducibility | Replayable experiment/data lineage, protocol, report and export | NOT STARTED |
| 17 | Practical learning and assessment | Guided/free/exam, viva, rubric, progress and recommendations | NOT STARTED |
| 18 | Offline storage and content packs | IndexedDB, signed/versioned bundles, caching, recovery and sync-ready contracts | NOT STARTED |
| 19 | Safety, privacy and governance | Hazard tiers, source licensing, dataset privacy and safe refusal/fallback | NOT STARTED |
| 20 | Accessibility, multilingual UI and performance | Hindi/English, low-end Android 3D tier, accessibility and optimisation | NOT STARTED |
| 21 | Scientific validation and independent review | Domain test vectors, source audit, educator/expert sign-off and regression | NOT STARTED |
| 22 | PWA and Android packaging | Installable PWA, Capacitor Android build and device tests | NOT STARTED |
| 23 | Release, feedback and platform expansion | Versioned release, maintenance, additional science packs and optional cloud sync | NOT STARTED |

## Phase gate requirements

Every phase must record: scope and files changed; evidence and sources used; tests/commands and actual pass/fail counts; scientific, safety, privacy and licensing review where applicable; unresolved blockers and risks; updated PHASE_STATE.md; commit SHA/PR/CI evidence; and explicit next phase/dependencies.

## Phase 0 — done boundary

Phase 0 is complete only as a planning/documentation baseline. It does not mean software, 3D assets, research connectors or scientific engines exist.

## Current execution focus — 2026-11-08

- Main phase: Phase 1 — IN PROGRESS.
- Active subphase: Phase 1.1 — NCERT kit specification recovery and source-to-asset traceability.
- Phase 1.1 current evidence: the four official NCERT specification link targets are listed, but direct PDF retrieval attempts returned HTTP 502 on 2026-11-08; uploaded MSCL and Biology-with-microscope copies remain unauthenticated. A three-subject traceability pilot exists as DESIGN_ONLY.
- Latest bounded result (2026-11-08): RBSE Class XI Physics experiments 17/17 now have candidate NCERT Physics manual row links, proposed original asset IDs, proposed model/rule IDs, planned test vectors and explicit source gaps. See docs/PHASE_1_1_RBSE_XI_PHYSICS_EXPERIMENT_TRACEABILITY.md and data/catalogues/rbse_xi_physics_experiment_traceability.csv. This is DESIGN_ONLY, not a verified kit equivalence or implementation.
- Next work unit: RBSE Class XI Physics activities A01–A07 and B01–B06 (13 rows), followed by its 11 project rows. Continue one bounded group at a time before moving to Class XI Chemistry.
- Phase 2 remains BLOCKED until every Phase 1 exit criterion is satisfied and evidence is committed.

## Phase 1 — current phase

- Confirm broad platform scope and research workflow.
- Audit RBSE Class 11 and 12 official syllabus for the current listed session; use earlier official syllabi only as comparison until current documents are read.
- Audit NCERT XI/XII Physics, Chemistry and Biology laboratory manuals and kit specifications.
- Extract all practicals, activities, investigatory projects, equipment, observations, calculations, spotting and viva requirements with exact page/section references.
- Catalogue trusted data/literature sources for Chemistry, Physics and Biology, with API, licence, update and citation constraints.
- Map research workflow needs: hypothesis, experiment design, data ingestion, analysis, evidence graph and reproducibility.
- Create source/coverage matrix, initial practical catalogue and explicit unresolved items.
- Phase 1 cannot close while the current official RBSE syllabus documents are unreviewed or any source/licence and catalogue gaps remain unexplained.

## Phase 1.1 — active subphase of Phase 1

Phase 1.1 is not a new top-level phase and does not authorise bypassing the Phase 1 gate.

Required outputs:
- Reconcile official NCERT kit/manual listing pages with actual attachment bytes. Keep LISTED, RETRIEVED, CONTENT_INSPECTED and BYTE_AUTHENTICATED as separate evidence states.
- Maintain Physics, Micro Scale Chemistry, Biology-with-microscope and Biology-without-microscope as separate kit variants.
- Reconcile NCERT manual item schedules against procurement specification attachment rows. Preserve discrepancies such as Physics manual 106 rows versus a separate 105-item tender statement until the actual attachment resolves them.
- Preserve uploaded-copy hashes as identifiers of uploaded bytes only; do not call them NCERT-authenticated without exact-byte or authoritative metadata comparison.
- Finish the pending item-level page audit of Biology visual cards, specimens and permanent slides; keep index-derived rows visibly distinct from inspected specification rows.
- Extend traceability from each RBSE task to candidate source item(s), original LabVerse asset, scientific model/rule, test vectors, safety and reviewer status.
- Use explicit evidence statuses: PRIMARY_OFFICIAL, OFFICIAL_INDEX_ONLY, USER_UPLOADED_UNAUTHENTICATED, SECONDARY, INFERRED, DESIGN_ONLY, NEEDS_REVIEW and VERIFIED_FOR_USE.

Phase 1.1 exit criteria:
1. All currently available primary sources are inspected or recorded with a named retrieval blocker and retry route.
2. All source/catalogue gaps and variant differences are explicit; no inferred item is silently promoted to verified.
3. All six RBSE packs have complete task-level traceability or a documented, reasoned exception for every unresolved row.
4. Hazard, rights, subject-review and scientific-model gaps are recorded and assigned a status.
5. Phase 1 master exit criteria are independently checked before any Phase 2 work begins.

## Research-grade product quality bar

LabVerse must become useful for real scientific learning and structured research, not merely display attractive simulations.

- **Evidence integrity:** every external claim, reference value, dataset and curriculum item records source identity, source type, retrieval/version date, licence/usage conditions, attribution and limitations. Keep conflicting claims visible.
- **Scientific provenance:** every result records whether it is MEASURED, IMPORTED, SIMULATED, CALCULATED, APPROXIMATION, PREDICTED, NOT_MODELLED or NEEDS_REVIEW, along with units, uncertainty, method/model version and assumptions.
- **Reproducibility:** preserve immutable raw data, explicit transformation steps, experiment actions, parameters, environment, calibration, software/content versions and deterministic seeds where relevant. A saved session must be replayable or explain why it cannot be.
- **Research workflow:** support question framing, literature discovery, prior-art/related-work checks, competing hypotheses, variables and controls, protocol design, safety review, observations, dataset analysis, model comparison, limitations and exportable reports.
- **Data quality:** validate schemas, units, missingness, duplicates, ranges, outliers and provenance; never overwrite raw imports. Keep derived datasets linked to their parent data and transformation history.
- **Model quality:** each scientific model declares equations/rules, domain of validity, calibration, boundary conditions, numerical method, uncertainty and known failure modes. Unsupported combinations return NOT_MODELLED or NEEDS_REVIEW.
- **Research integrity:** distinguish a promising hypothesis from a supported conclusion and a simulated outcome from a real observation. No automatic “first discovery” or causal claim from similarity, generated text or simulation alone.
- **Safety and ethics:** include hazard tiers, virtual-only operations, data privacy, specimen/sample provenance and human review. No unrestricted reagent mixing, pathogen/toxin workflows or unsupervised hazardous instructions.
- **AI boundary:** AI may assist search, summarisation, translation and explanation only over retrieved, cited evidence. Deterministic models and source records remain authoritative. Core practicals must not require paid AI APIs.
- **Accessible deployment:** progressive fidelity for low-end Android devices, keyboard/touch accessibility, Hindi/English content and offline operation for downloaded core packs.

## Continuous roadmap and GitHub update rule

For every work session:
1. Read the latest ROADMAP.md, PHASE_STATE.md, WORK_LOG.md, current issue(s), branch and recent commits.
2. Select the first unchecked item in the active phase; record its acceptance checks before changing files.
3. Work only on that item and its direct dependencies. Do not start a later phase because it is more interesting or easier.
4. When a deliverable is actually complete, update the relevant catalogue/design/code/tests and record it in WORK_LOG.md. Update PHASE_STATE.md and ROADMAP.md status/next action; update README navigation and tracking issue when relevant.
5. Refetch the changed files from GitHub and verify the committed content. Record the actual commit SHA(s), test counts, CI state and blockers. If a check cannot run, say NOT RUN and why.
6. Leave incomplete items unchecked. A draft, failed retrieval, index listing, unverified upload or design-only mapping is not completion.
7. At session end, record one precise next action so the next session resumes without asking the user to repeat context.

Do not mark a whole phase DONE because an individual task or subphase progressed. Update status only to the level supported by evidence.

## No-skip rule

At a new session, read PHASE_STATE.md, inspect actual GitHub contents and evidence, resume the first unchecked task, and update state only after verified work. Never mark a phase done merely because a document or screen was drafted.


## Phase completion checklist — applies to every phase

A phase is eligible for DONE only when all of the following are true:

- Deliverables listed in this roadmap exist in the repository and are internally consistent.
- Acceptance criteria are met with reproducible evidence; all critical tests pass.
- Scientific claims, source rights, safety, privacy and accessibility have been reviewed where applicable.
- Unknowns and residual risks are either resolved or explicitly accepted by the proper reviewer; critical blockers cannot be waived by a chat response.
- README navigation, ROADMAP.md, PHASE_STATE.md and WORK_LOG.md point to the same current state.
- The final commit/PR and CI evidence are recorded, and the next phase dependencies are satisfied.

## Research MVP strategy

Do not try to implement all science at once. After the foundations, build complete vertical slices that run end-to-end:
1. One source-backed Physics practical with measurement, uncertainty, graph and reproducible notebook.
2. One bounded Chemistry practical with curated substances/reaction or pH rules, visible observations and explicit unsupported states.
3. One Biology microscopy/spotting workflow with original visual assets, magnification/scale metadata and reviewed identification labels.
4. One Research Studio workflow that takes a question through cited literature, hypothesis alternatives, imported data, analysis, reproducible report and candidate next experiment.

Only after these slices pass tests and review should catalogue breadth and advanced research capabilities expand. This keeps quality ahead of feature count.


## Traceability execution update — 2026-11-08

Class XI Physics experiment group: **17/17 task rows crosswalked** to candidate Physics-manual item IDs and proposed original assets/models/test vectors. The mapping references 43 distinct source item IDs. Every source ID was found in the existing manual register. This is only a documentary candidate mapping: procurement attachment authentication, item/task equivalence review, exact measurements/quantities, scientific model implementation, tests, safety and expert sign-off remain open.

Evidence:
- docs/PHASE_1_1_RBSE_XI_PHYSICS_EXPERIMENT_TRACEABILITY.md
- data/catalogues/rbse_xi_physics_experiment_traceability.csv
- Commit: c7c45bb5994419ff937e18254e860d837383bdf2 (document); 73136cff1e7553e2e2d1a125daba5e1bd9aab240 (CSV)

Next source-order unit: Class XI Physics activities A01–A07 and B01–B06.
