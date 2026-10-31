# LabVerse Master Roadmap — Scientific Discovery Platform

This roadmap controls phase order. Class 11–12 is the first content pack; Research Studio and expandable scientific domains are part of the product vision, not optional decoration. Do not skip phases.

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

## Phase 1 — current phase

- Confirm broad platform scope and research workflow.
- Audit RBSE Class 11 and 12 official syllabus for the current listed session; use earlier official syllabi only as comparison until current documents are read.
- Audit NCERT XI/XII Physics, Chemistry and Biology laboratory manuals and kit specifications.
- Extract all practicals, activities, investigatory projects, equipment, observations, calculations, spotting and viva requirements with exact page/section references.
- Catalogue trusted data/literature sources for Chemistry, Physics and Biology, with API, licence, update and citation constraints.
- Map research workflow needs: hypothesis, experiment design, data ingestion, analysis, evidence graph and reproducibility.
- Create source/coverage matrix, initial practical catalogue and explicit unresolved items.
- Phase 1 cannot close while the current official RBSE syllabus documents are unreviewed or any source/licence and catalogue gaps remain unexplained.

## No-skip rule

At a new session, read PHASE_STATE.md, inspect actual GitHub contents and evidence, resume the first unchecked task, and update state only after verified work. Never mark a phase done merely because a document or screen was drafted.
