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

## Current execution focus — 2026-11-09

- Main phase: Phase 1 — IN PROGRESS.
- Active subphase: Phase 1.1 — NCERT kit-source authentication, procurement comparison and source-to-task traceability.
- Latest Chemistry evidence: the 2018 NCERT MSCL manual is indexed separately (34 experiment topics, 51 apparatus rows and 124 numbered reagent/material labels plus two internal text references/ambiguities). A 126-row historical reagent screening register and a 41-row RBSE Chemistry task-to-reagent evidence matrix exist. These remain candidate/reference-only, not a current reagent BOM or approval for physical use.
- Latest bounded retrieval retry (2026-11-09): the official NCERT specification index lists the current MSCL Grade XI–XII attachment, but direct NCERT and alternate www-host requests returned HTTP 502; independent download failed. A current GeM tender-index record lists the candidate MSCL filename and BOQ name, but the inspected third-party page exposes no attachment bytes. See `docs/PHASE_1_1_MSCL_OFFICIAL_ATTACHMENT_RETRIEVAL_RECHECK_2026_11_09.md` and `data/catalogues/mscl_attachment_retrieval_attempts_2026_11_09.csv`.
- Current MSCL boundary: no current PDF/BOQ payload, SHA-256, revision, page count or reagent BOM is authenticated. Historical manual and uploaded specification bytes are not substituted for the current official attachment. All physical Chemistry use remains blocked pending current identity/formulation, SDS, exposure/waste and expert approvals.
- Latest Chemistry task coverage: all 41 RBSE XI/XII Chemistry task/choice IDs are represented in `data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv`; 17 have candidate manual-reference links and 24 remain without exact mapping. No candidate has been promoted to method or supply equivalence.
- Biology remains open: 50/50 XI/XII Biology task/choice records are consolidated with 0 dangling source IDs, but source authenticity, individual cards/slides/specimens, equipment/sample gaps, Biology expert review and method/result validation remain unresolved. The official NCERT revised-manual index lists the Higher Secondary Biology Kit Manual; catalogue code 13163 is English and code 13193 is a separate Hindi kit-manual title. The live index and direct with-/without-microscope PDF routes were inaccessible in the 2026-11-09 pass. See `docs/PHASE_1_1_BIOLOGY_MANUAL_SOURCE_DISCOVERY_2026_11_09.md`.
- Six-pack task index reconciliation: 171/171 unique task IDs across all six RBSE packs; this is index-level integrity, not completion of detailed item/asset/model/test traceability.
- Phase 2 remains BLOCKED until all Phase 1 exit criteria are independently verified and committed. No software implementation is to start early.

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


## Class XI Physics activity traceability update — 2026-11-08

- Activity group crosswalk: 13/13 (A01–A07 and B01–B06).
- 32 distinct candidate NCERT Physics manual item IDs appear across 71 source-row references.
- 58 proposed asset references, 13 proposed model/rule IDs and 52 planned test-vector IDs.
- 8/8 repository/document read-back checks passed.
- Candidate mappings, model proposals, asset names and test vectors are not scientific sign-off or software implementation.

Evidence: docs/PHASE_1_1_RBSE_XI_PHYSICS_ACTIVITY_TRACEABILITY.md and data/catalogues/rbse_xi_physics_activity_traceability.csv. Commits: 8033885b431b3c36a283a12d67df0011776bebd9; e78ad4f4810c2df611ed6ad3a9663ccd37d3d0a5.

Next task: Class XI Physics projects (11 rows).


## Class XI Physics project traceability update — 2026-11-08

- 11/11 project tasks crosswalked to candidate source rows or explicit NO_SOURCE_ITEM_MATCH, proposed assets, model/rule IDs and planned test vectors.
- 28 distinct Physics manual source item IDs used across 56 references.
- 8/8 repository read-back checks passed.
- Fortin barometer has no source item in the current 106-row manual register; do not imply it is included in the kit.
- DESIGN_ONLY only; models/tests/assets/reviews remain incomplete.

Evidence: docs/PHASE_1_1_RBSE_XI_PHYSICS_PROJECT_TRACEABILITY.md and data/catalogues/rbse_xi_physics_project_traceability.csv. Commits: 3b8042e2b402168c13de8028130ac812f2ecf25d; 910337e0550dc2a7b4b8bd81cd5684adc231fe49.

Next: consolidate the Class XI Physics groups to 41/41 tasks.


## Class XI Physics consolidated reconciliation — 2026-11-08

- 41/41 RBSE Class XI Physics task IDs reconciled: 17 experiments, 13 activities and 11 projects.
- Unified machine-readable register: data/catalogues/rbse_xi_physics_traceability.csv (41 rows, 18 columns).
- 219 candidate item references / 52 distinct source item IDs; 184 proposed asset references / 111 distinct asset IDs; 44 proposed model/rule IDs; 164 planned test vectors.
- One explicit unmatched source row: Fortin barometer (RBSE-XI-PHY-PRJ-08).
- 9/9 repository reconciliation checks passed. No software/scientific engine tests were run.
- Evidence: docs/PHASE_1_1_RBSE_XI_PHYSICS_TRACEABILITY_SUMMARY.md; commit 23fc70bc40ec7dad7a68beab34c3c025f470e468; CSV commit 6e6ac0eee8a31c13c97fe25ef62b9353788fe149.

Next phase-1 work unit: Class XI Chemistry practical traceability, PRA-01 to PRA-19.


## Class XI Chemistry practical traceability update — 2026-11-08

- 19/19 task groups PRA-01 through PRA-19 crosswalked.
- 131 candidate MSCL source-item references / 36 distinct item IDs; 92 proposed asset references; 19 proposed model/rule IDs; 76 planned test vectors.
- 8/8 read-back checks passed.
- Source caveat: uploaded MSCL specification is OCR-inspected but not byte-authenticated; apparatus catalogue does not establish supplied chemical reagents.
- Hazardous chemistry procedures remain virtual-only and require expert/safety review.

Evidence: docs/PHASE_1_1_RBSE_XI_CHEMISTRY_PRACTICAL_TRACEABILITY.md; data/catalogues/rbse_xi_chemistry_practical_traceability.csv. Commits: ffe8ec9207b7bb6b9d6df2f95f0b627c2ab33325; b88fc4abd1fcd0b3cbefca3511ce0039ba02d965.

Next task: Class XI Chemistry projects PRJ-01–PRJ-08.


## Class XI Chemistry project traceability update — 2026-11-08

- 8/8 project IDs mapped to candidate MSCL apparatus or explicitly documented research gaps.
- 48 candidate item references / 21 distinct OCR catalogue item IDs; 42 proposed asset references; 8 model/rule IDs; 32 planned test vectors.
- 8/8 read-back checks passed.
- Water-quality, purification, food chemistry, fibre testing and evaporation projects retain measurement-method/data provenance gaps; no unsupported quantitative result is generated.
- Candidate links remain DESIGN_ONLY and use an unauthenticated OCR upload.

Evidence: docs/PHASE_1_1_RBSE_XI_CHEMISTRY_PROJECT_TRACEABILITY.md; data/catalogues/rbse_xi_chemistry_project_traceability.csv. Commits: 5d6dce0ff1aea56c220204e38c55c09c03f7af0e; 5e5cff3c5037fa6ec825f93716b3cce87b239162.

Next: consolidated Class XI Chemistry 27-task coverage register.


## Class XI Chemistry consolidated reconciliation — 2026-11-08

- 19 practical groups + 8 projects = 27/27 task IDs reconciled.
- Unified 17-column CSV: data/catalogues/rbse_xi_chemistry_traceability.csv.
- Aggregate: 179 candidate item refs / 37 distinct MSCL IDs; 134 proposed asset refs / 57 distinct assets; 27 proposed model/rule IDs; 108 planned test vectors.
- 9/9 read-back checks passed.
- RBSE marking conflict remains unresolved; no canonical scheme selected.
- MSCL item rows remain unauthenticated OCR evidence; no reagent BOM or analytical-method validation is claimed.

Evidence: docs/PHASE_1_1_RBSE_XI_CHEMISTRY_TRACEABILITY_SUMMARY.md; commit 0eed1589993dfa05b45adef52e89589d7fa440d6; CSV commit 75d6fa269bb0919ded1af09ac0866e05dc562f62.

Next source-order task: Class XI Biology task/spotting mapping.


## Class XI Biology traceability update — 2026-11-08

- 22/22 RBSE task groups mapped: 4 Botany major, 2 Zoology major, 5 Botany minor, 2 Zoology minor, 9 spotting groups.
- 158 candidate catalogue references / 96 distinct item IDs; 87 proposed asset refs / 64 distinct assets; 22 proposed model/rule IDs; 88 planned test vectors.
- Catalogue evidence among referenced items: 36 OCR_TEXT, 1 OCR_TEXT+VISUAL_CHECK, 1 VISUAL_CHECK, 1 INDEX_CONFIRMED sample, 57 index-only.
- 10/10 consolidated read-back checks passed.
- Evidence: docs/PHASE_1_1_RBSE_XI_BIOLOGY_TRACEABILITY_SUMMARY.md and data/catalogues/rbse_xi_biology_traceability_consolidated.csv.
- Uploaded source remains NOT_BYTE_AUTHENTICATED; Biology-without-microscope variant not compared; no separate XI Biology project requirement appears in RBSE master register.

Commits: 39da276f374ade474dabee95fc10dd99d2548180; 8e7d3d577da046757a986e479d70061479dda463.

Next task: Class XII Physics task mapping.


## Class XII Physics experiment traceability update — 2026-11-08

- 18/18 task rows crosswalked; 132 candidate source references / 42 distinct manual item IDs.
- 92 proposed asset references / 51 distinct assets; 18 model/rule proposals; 72 planned test vectors.
- Missing source instrument: travelling microscope (RBSE-XII-PHY-EXP-14) is not in the current Physics manual item schedule.
- Candidate procurement equivalence and scientific review remain open; no software tests run.

Evidence: docs/PHASE_1_1_RBSE_XII_PHYSICS_EXPERIMENT_TRACEABILITY.md; data/catalogues/rbse_xii_physics_experiment_traceability.csv. Commits: 6169a2b3ef3f44e218eb94940945fc0180fdc6ee; ba27e6f24bfa982539998c2d5f50c667738951f7.

Next: Class XII Physics activities A01–A06 and B01–B08.


## Class XII Physics activity traceability update — 2026-11-08

- 14/14 activities mapped: A01–A06 and B01–B08.
- 126 candidate manual item refs / 40 distinct item IDs; 81 proposed asset refs / 49 distinct assets; 14 proposed model/rule IDs; 58 planned test vectors.
- 8/8 repository read-back checks passed.
- Household wiring is virtual-only; blade/slit diffraction is not exposed as a physical blade interaction. AC source, lux sensor, polariser fixture and other exact apparatus gaps remain explicit.

Evidence: docs/PHASE_1_1_RBSE_XII_PHYSICS_ACTIVITY_TRACEABILITY.md; data/catalogues/rbse_xii_physics_activity_traceability.csv. Commits: 8d3cb4032436321f1eedd56e47e1a1c22cfcdc68; 550408aec93d68fa5a4b6871d50af4c8509589eb.

Next: Class XII Physics projects PRJ-01–PRJ-07.


## Class XII Physics consolidated traceability update — 2026-11-08

- 39/39 tasks reconciled: 18 experiments, 14 activities, 7 projects.
- 331 candidate source item refs / 55 distinct Physics manual item IDs; 219 proposed asset refs / 99 distinct assets; 39 model/rule IDs; 165 planned test vectors.
- 11/11 consolidated read-back checks passed.
- Missing instrument flags: EXP-14 travelling microscope; PRJ-04 phototransistor and IR sources. No substitute or fictional kit item claimed.
- All mapping remains DESIGN_ONLY; no scientific model/app/test implementation.

Evidence: docs/PHASE_1_1_RBSE_XII_PHYSICS_TRACEABILITY_SUMMARY.md; summary commit 3ebd05b79cec3b171c9fa8dec956d79c8bb6ba6f; CSV commit b4598033c75c65a832f95e53099eba57463451cf.

Next source-order task: Class XII Chemistry practical groups and OR branches.


## Class XII Chemistry traceability update — 2026-11-08

- 14 traceability records covering 2 redox alternatives, 1 qualitative analysis group, 4 mutually exclusive four-mark OR branches and 7 content-based alternatives.
- 167 candidate MSCL apparatus refs / 38 distinct OCR item IDs; 82 proposed asset refs; 14 model/rule proposals; 62 planned test vectors.
- Uploaded MSCL specification remains unauthenticated and is not a reagent BOM. No reagent supply, analytical method or result is verified by the equipment list.
- Summary: docs/PHASE_1_1_RBSE_XII_CHEMISTRY_TRACEABILITY_SUMMARY.md; detail and CSV linked from README.
- Documentary readback assertions recorded; no chemistry software/scientific tests run.

Next source-order task: Class XII Biology task/spotting coverage.


## Class XII Biology traceability update — 2026-11-09

- 28/28 source task/choice records mapped: Botany major 6, Zoology major 6, Botany minor 5, Zoology minor 4, spotting 6 (3+3), required open-topic project 1.
- 224 candidate references / 83 distinct Biology catalogue item IDs; 92 proposed asset refs / 80 distinct assets; 28 proposed model/rule IDs; 142 planned test vectors.
- Evidence among 83 unique referenced items: 43 OCR_TEXT; 1 OCR_TEXT + VISUAL_CHECK; 1 VISUAL_CHECK; 2 INDEX_CONFIRMED samples; 36 INDEX_ONLY slide/card/specification rows and 1 additional index-only row.
- 12/12 read-back checks passed for detail/summary/consolidated data. No scientific model or app tests were run.
- Important gaps: soil texture/WHC instruments/methods, turbidity meter, air SPM sampler, safe water-microorganism reference data, pollen media, indexed histology pages, T.S. testis/ovary slide match and Trichophyton. The project topic remains teacher-assigned, not fixed by RBSE.
- Uploaded Biology-with-microscope catalogue remains NOT_BYTE_AUTHENTICATED; index-only entries are not visually verified.

Artifacts:
- docs/PHASE_1_1_RBSE_XII_BIOLOGY_TRACEABILITY.md
- data/catalogues/rbse_xii_biology_traceability.csv
- docs/PHASE_1_1_RBSE_XII_BIOLOGY_TRACEABILITY_SUMMARY.md
- data/catalogues/rbse_xii_biology_traceability_consolidated.csv

Next bounded work unit: six-pack task-index reconciliation report across all RBSE packs. Phase 1.1 / Phase 1 remain IN PROGRESS; Phase 2 remains BLOCKED.


## Six-pack RBSE task-index reconciliation — 2026-11-09

- Six consolidated registers now cover **171/171 unique RBSE task/choice IDs**: XI Physics 41; XI Chemistry 27; XI Biology 22; XII Physics 39; XII Chemistry 14; XII Biology 28.
- Reconciliation found 0 missing IDs, 0 extra IDs and 0 duplicates against the master task register.
- A normalized 20-column six-pack register is committed at data/catalogues/rbse_six_pack_task_index_traceability.csv. It preserves each original CSV path. Original 17/18-column schema differences and absent section/choice fields are not silently filled.
- Documentary checks: 10/10 master reconciliation and 10/10 normalized CSV read-back checks passed.
- Source gaps remain: Fortin barometer, travelling microscope, phototransistor/IR source, open-topic XII Biology project, unauthenticated/partially inspected NCERT uploads and unresolved reagent/procurement data. These do not mean task-index IDs are missing.

Evidence:
- docs/PHASE_1_1_RBSE_SIX_PACK_TASK_INDEX_RECONCILIATION.md
- data/catalogues/rbse_six_pack_task_index_traceability.csv
- Report commit: 67dc918302325a8b2277d1a9e73dc007a4507e93
- CSV commit: c8fe3ce3c557ac41dad9a9dd255383de018e4a74

Task-index coverage sub-gate is DONE; Phase 1 remains IN PROGRESS and Phase 2 remains BLOCKED.

Next: create a source-authentication/procurement-gap register by source-document family before any Phase 2 work.


## Source authentication and procurement blockers — 2026-11-09

- Added a 12-row source-family gap register: docs/PHASE_1_1_SOURCE_AUTHENTICATION_AND_PROCUREMENT_GAP_REGISTER.md and data/catalogues/phase1_source_authentication_procurement_gaps.csv.
- Current official indexes are visible, but RBSE 2027 PDFs timed out and the four NCERT kit specification PDF links returned HTTP 502; alternate ncert.gov.in direct routes were also inaccessible through the current retrieval path.
- Uploaded MSCL and Biology-with-microscope PDFs have recorded hashes, but their byte identity against official NCERT attachments is NOT VERIFIED. Biology-without-microscope variant and Physics procurement specification remain unretrieved.
- Physics manual item schedule (code 13164) has 106 rows; separate GeM bid says 105 items, but the tender attachment schedule is not inspected. Do not reconcile by guess.
- Task-index sub-gate remains DONE (171/171); Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.

Evidence: source-authentication register and 12-row CSV; report blob fc0103ce9902a0145dccf652b5bd115cac1b369b; CSV blob 199aa7bd4efb1db1d59d0093da6cde22394e9df4.

Next: recover exact official RBSE 2027 and NCERT attachment bytes, hash them and compare to uploaded copies before altering any source mappings or opening Phase 2.


## GeM attachment recovery lead — 2026-11-09

- Third-party tender index reports current GeM bid GEM/2026/B/8248336 (published 6 Nov 2026), Basic Education Department Uttar Pradesh: Physics 364 sets, MSCL 516 sets and Biology-without-microscope 556 sets (1,436 total), with attachment filenames plus Excel BOQ.
- Another third-party indexed summary reports 105 Physics items and 54 MSCL items in the attachments. These counts are discovery metadata only; attached files/BOQ not retrieved, hashed or authenticated. This does not resolve the manual/BOM discrepancy.
- Gap register updated to 13 records: docs/PHASE_1_1_SOURCE_AUTHENTICATION_AND_PROCUREMENT_GAP_REGISTER.md and data/catalogues/phase1_source_authentication_procurement_gaps.csv.
- No access-control bypass or automated seller login. Official GeM attachment retrieval remains open.

Evidence: report blob e67eb97ef6005d22e22fa19033169fdd7a729f5a; CSV blob 756fdd3cc4c8d289bcf194240a337cd2daca5a9d.

Next: retrieve permitted bidder-visible attachments from official GeM, hash and inspect the files, then compare against NCERT official bytes and uploaded copies. Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.


## Second retrieval and provenance audit — 2026-11-09

- **Source provenance improvement:** Captured exact SHA-256 and PDF metadata for the two user-supplied RBSE 2027 PDFs; this identifies the uploaded bytes but does not authenticate them against current official RBSE endpoint responses.
- **GeM attachment discovery:** The three NCERT kit attachment filenames recur across 10 public third-party tender-index records: Physics 9/10, MSCL 10/10, Biology without microscope 8/10. The current bid also lists Excel BOQ 1793944092.xlsx. No PDF/BOQ payload bytes were retrieved, hashed or inspected. Recurrence is discovery metadata only.
- **Artifacts:** docs/PHASE_1_1_GEM_MIRROR_RECURRENCE_AUDIT_2026_11_09.md; data/catalogues/gem_kit_specification_mirror_recurrence.csv; updated source-authentication report and CSV.
- **Validation:** 12/12 documentary read-back checks passed; no scientific or app tests claimed.
- **Access/security:** Official domestic GeM route could not be read through the present retrieval channel. No seller login, credential use or access-control bypass.
- **Next:** keep developing source-to-item evidence and missing-equipment/BOM registers from inspectable primary material while seeking actual official RBSE/NCERT or permitted GeM attachment bytes. Keep listing-only mirrors separate from authenticated source documents.

Phase 1.1 / Phase 1 remain IN PROGRESS; Phase 2 remains BLOCKED. This unit did not implement application code, 3D assets or scientific engines.


## Official Physics manual omission clarification — 2026-11-09

NCERT manual 13164's preface text states that the travelling microscope and Searle's apparatus were still being developed for inclusion in that kit edition; prescribed options allow the required experiment count without them. The XII Physics EXP-14 traceability row now records the travelling microscope as a distinct external/school equipment requirement for that manual edition, not as supplied kit inventory. A later separate procurement specification could differ and remains unverified. The glass slab is not an equivalent substitute. Evidence was text-extracted from the NCERT-hosted PDF; screenshot returned HTTP 502. No visual check or scientific validation is claimed.

See docs/PHASE_1_1_PHYSICS_MANUAL_ITEM_REGISTER.md, docs/PHASE_1_1_SOURCE_AUTHENTICATION_AND_PROCUREMENT_GAP_REGISTER.md and the updated XII Physics traceability CSV.

Phase 1 / Phase 1.1 remain IN PROGRESS; Phase 2 remains BLOCKED.


## NCERT MSCL manual source review — 2026-11-09

The NCERT-hosted *Manual of Microscale Chemistry Laboratory Kit* (Classes XI/XII, first ed. April 2018, ISBN 978-93-5007-861-7; catalogue code 13166) has been retrieved and text-indexed. LabVerse added 34 experiment/topic entries, 51 apparatus records and 124 numbered reagent/material labels, plus a grouped topic crosswalk covering all 41 RBSE XI/XII Chemistry task records. The current procurement attachment is still a separate, unverified source; neither manual entries nor the earlier upload are assumed to be the current delivered kit BOM.

All 124 chemical/material labels are blocked from live use pending exact identity, SDS, exposure, waste and chemistry-expert approval. Mercury thermometer asset is excluded from physical learner use. No procedures or concentrations copied; NCERT manual is ALL RIGHTS RESERVED. PDF screenshot retrieval returned HTTP 502, so evidence is text-extracted only.

Artifacts: `docs/PHASE_1_1_MSCL_OFFICIAL_MANUAL_REVIEW.md` and four `data/catalogues/ncert_mscl_manual_*.csv` files. Read-back: 12/12 documentary checks PASS. No scientific model, app code or experiment test implemented.

Phase 1 / Phase 1.1 remain IN PROGRESS; Phase 2 remains BLOCKED.


## MSCL 2018 manual vs 2025 uploaded candidate item comparison — 2026-11-09

The 51 apparatus entries in the historical NCERT-hosted manual were mapped to candidate item rows in the 2025 user upload. The comparison captures one combined beaker row, the moved 5 mL glass pipette entry, four upload-only rows (pocket balance, glazed tile, gas generator, tongs), and quantity/material/dimension/safety differences. Particularly important discrepancies include micro burette count, micro-cylinder count, material differences, wire gauze with asbestos stated only in the upload and mercury thermometer restrictions. The upload is not byte-authenticated; treat all differences as comparison leads, not current official specification changes.

See docs/PHASE_1_1_MSCL_MANUAL_UPLOAD_ITEM_RECONCILIATION.md and data/catalogues/mscl_manual_to_2025_upload_item_reconciliation.csv. Read-back 10/10 PASS. Current procurement authentication, SDS and science-expert gates remain open. Phase 1.1 IN PROGRESS; Phase 2 BLOCKED.


## MSCL reagent-list completeness and Biology manual source gap — 2026-11-09

The 124 numbered reagent labels in the 2018 MSCL manual were checked against the manual's own experiment/appendix text. Potassium permanganate is used in experiments 2.5/2.6 but has no exact numbered label; potassium iodide appears in experiment/appendix text while the numbered list says “Iodine solution” without a standalone identity/formulation record. This is recorded in `data/catalogues/ncert_mscl_manual_internal_reagent_omissions.csv`. The 124 numbered labels are therefore not exhaustive relative to the manual itself. No live chemistry use allowed; all labels remain blocked until SDS and expert approval.

NCERT's official kit-manuals index lists the Biology Laboratory Kit manual for Grades XI/XII; the publication catalogue gives code 13163. The official specification index separately lists Biology with and without microscope. Actual official manual PDF bytes could not be obtained; the third-party mirror was not accepted. Source gap register now has 14 records / 12 columns, including `SRC-BIO-MANUAL-13163`.

Next: obtain verifiable manual bytes; compare both Biology kit variants to the 28 XI/XII task crosswalk; do not treat the user-uploaded with-microscope specification as the manual. Phase 1.1 IN PROGRESS; Phase 2 BLOCKED.


## Biology task-gap consolidation — 2026-11-09

The 22 Class XI and 28 Class XII Biology task records now have a 50-row unresolved-gap register. All candidate item references resolve to the 177-row user-uploaded with-microscope item catalogue (0 dangling IDs), but the source remains unauthenticated. Overlapping unresolved tags: sample/specimen 37/50; measurement/apparatus 11/50; item/content verification 29/50; reagent/media 10/50. Most card/slide content remains INDEX_ONLY. The separate no-microscope variant and official Biology manual 13163 are not retrieved. These are candidate mappings, not verified practicals. See `docs/PHASE_1_1_BIOLOGY_TASK_LEVEL_GAP_REGISTER.md` and its CSV.

Phase 1.1 IN PROGRESS; Phase 2 BLOCKED.


## 2026-11-09 — MSCL reagent-to-task documentary screen

Phase 1.1 now has a 126-record preliminary screen for the 124 numbered reagent/material labels in the NCERT-hosted 2018 MSCL manual plus two references found in its own experiment/appendix text. The register preserves source order and duplicates, applies conservative name-based workflow flags, and records exact whole-label text occurrences against the RBSE Chemistry task registers. Eighteen register rows have candidate explicit text occurrences across 17 task IDs. This does not establish reagent-to-task method equivalence, supply, or safety approval; the manual is historical and the current official specification attachment is still unauthenticated.

See `docs/PHASE_1_1_MSCL_REAGENT_SAFETY_SCREEN.md` and `data/catalogues/ncert_mscl_manual_reagent_safety_screen.csv`. Every listed reagent remains simulation/reference-only and not approved for physical learner use. The 51-row apparatus inventory remains separately indexed; mercury and asbestos-related physical use is blocked.

Next bounded work: retrieve and authenticate the current NCERT MSCL attachment; reconcile the actual reagent BOM and item conditions against all 41 RBSE Chemistry task/choice records; source current SDS and expert approval. Also continue recovery of official Higher Secondary Biology manual code 13163. Phase 1.1 IN PROGRESS; Phase 2 BLOCKED.


## 2026-11-09 — RBSE Chemistry task-to-reagent traceability matrix

Phase 1.1 now includes a 41-row RBSE Chemistry task-to-reagent evidence matrix covering XI and XII task/choice records. Seventeen task rows have explicitly reviewed candidate 2018 MSCL manual reagent-label or manual-body references; 24 rows retain no exact label mapping. This is deliberately not a supply list: the 2018 manual is not the current procurement BOM, and neither topic-level crosswalk nor apparatus references prove that a reagent is supplied or that a specific method is validated.

See `docs/PHASE_1_1_RBSE_CHEMISTRY_TASK_REAGENT_EVIDENCE_MATRIX.md` and `data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv`. Manual omissions/ambiguities, duplicate rows, concentration variants and possible compound aliases remain explicit; all rows are blocked from physical chemistry pending official source, current SDS and expert approval.

Next: obtain and hash current official NCERT MSCL specification bytes; reconcile actual reagent BOM against all 41 tasks; validate method-specific reagents and safe virtual/reference data. Phase 1.1 IN PROGRESS; Phase 2 BLOCKED.
