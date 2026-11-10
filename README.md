# LabVerse — Scientific Discovery & Virtual Research Platform

**Explore. Experiment. Analyse. Discover.**

LabVerse is an expandable, evidence-grounded science platform for Physics, Chemistry and Biology. School practicals for Rajasthan/RBSE and NCERT Classes 11–12 are the first learning pack—not the limit of the platform.

The long-term goal is to let learners and researchers explore scientific questions, construct models, run virtual experiments, import real datasets, analyse observations, compare hypotheses and discover promising questions for further investigation.

## Four connected workspaces

1. **Learning Lab** — Class 11–12 practicals first, then separately versioned school, college and advanced topic packs.
2. **Virtual Experiment Lab** — an empty 3D workbench where real 3D apparatus, samples, specimens and instruments are placed by tap or drag-and-drop, then moved, rotated, inspected, connected and used.
3. **Scientific Analysis** — rule-based and equation-based calculations, material/chemical properties, conditions, measurements, graphs, uncertainty and cross-domain interpretation.
4. **Research Studio** — research question, literature/source search, hypothesis, experimental design, variables, datasets, statistical analysis, comparison of results, reproducible reports and candidate next questions.

## Non-negotiable product rules

- The workbench begins empty. Tap-to-add and drag-and-drop both work; a placed item is a manipulable 3D asset, not a text card.
- Physics, Chemistry and Biology outcomes come from explicit scientific models, reviewed rules or cited data—not decorative animations.
- Live visuals, dashboard observations, calculations and explanations refer to the same experiment-state events.
- A result clearly identifies whether it is measured, imported from a source, simulated, calculated, approximated, predicted or not modelled.
- Each scientific claim carries provenance: source/data version, model or rule version, assumptions, units and uncertainty.
- New hypotheses may be suggested, but are not labelled discoveries or facts until independently tested and reviewed.
- Unknown, unsupported, conflicting or unsafe cases are surfaced honestly. The platform does not invent reaction products, readings, biological facts or citations.
- Curriculum items are mapped to board, class, academic year, exact source and content version.
- Hazardous operations remain virtual, bounded and safety-reviewed; the platform does not direct unsupervised real-world experiments.

## Project status

- Phase 0: DONE — planning/documentation baseline only.
- Main source-audit phase: Phase 1 — IN PROGRESS.
- User-authorized dashboard track: Physics, Chemistry and Biology inventory dashboard includes task-to-source item navigation, candidate setup placeholders and item-level Biology audit visibility; static desktop/mobile browser smoke passes 9/9 groups.
- React/TypeScript/Vite app foundation: IMPLEMENTED and CI-validated (strict typecheck/build plus 22/22 browser groups). Real 3D assets and scientific simulation engines: NOT IMPLEMENTED; candidate source rows are not verified scientific or procurement claims.
- Phase 1 authentication, safety and expert-review gates remain open; the dashboard shell is allowed to progress in parallel without promoting candidate records.

## React app foundation

- [React/TypeScript/Vite application](app/)
- [React app architecture and current test boundary](app/README.md)
- [React app browser validation](https://github.com/snchat78-svg/LabVerse/actions/runs/42750813972)

The React app now passes strict typecheck, production build and 22/22 Chromium smoke groups. Learning Lab, Virtual Experiment Lab, Scientific Analysis and Research Studio have functional bounded screens; Biology item-level visual-audit status (25/175) is visible. The mapped-candidate placeholder workbench is not real 3D; Research Studio drafts are session-local and Analysis is explicitly NOT_MODELLED.

## Dashboard preview

- [Open the LabVerse dashboard source](dashboard/index.html)
- [Dashboard build notes and limitations](dashboard/README.md)
- [Next work and remaining items](docs/NEXT_WORK_REGISTER_2026_11_10.md)
- [Dashboard inventory audit](docs/DASHBOARD_INVENTORY_AUDIT_2026_11_09.md)
- [Biology manual 58-entry reagent list](data/catalogues/ncert_biology_manual_reagents_58.csv)
- [Free GitHub Pages publishing steps](docs/DASHBOARD_PUBLISHING.md)
- [Three-subject inventory read model](dashboard/data/inventory.json)
- [Persistent PDF source registry](data/catalogues/source_pdf_registry_2026_11_10.csv)
- [Completed and remaining work register](docs/NEXT_WORK_REGISTER_2026_11_10.md)
- [Three-subject item-to-asset/model/test traceability audit](docs/PHASE_1_1_THREE_SUBJECT_ASSET_MODEL_TRACEABILITY_2026_11_10.md)
- [515-row item-to-asset/model/test traceability CSV](data/catalogues/phase1_item_to_3d_asset_model_test_traceability_2026_11_10.csv)
- [PDF archive and no-repeat record](docs/SOURCE_PDF_ARCHIVE_REGISTER_2026_11_10.md)
- [Parallel dashboard track and evidence boundaries](docs/PHASE_2_DASHBOARD_PARALLEL_TRACK.md)

The dashboard currently has Physics, Chemistry and Biology directions, class filters, searchable equipment/reagent catalogues, a 2D placeholder workbench, source/evidence details and the 171-row RBSE task index. It is a starter prototype, not a finished 3D simulator.

## Main documentation

- [Master roadmap](docs/ROADMAP.md)
- [Phase state tracker](docs/PHASE_STATE.md)
- [Phase execution workflow](docs/PHASE_WORKFLOW.md)
- [Append-only work log](docs/WORK_LOG.md)
- [Product vision](docs/PRODUCT_VISION.md)
- [Requirements](docs/REQUIREMENTS.md)
- [System architecture](docs/SYSTEM_ARCHITECTURE.md)
- [3D workbench](docs/INTERACTION_3D_WORKBENCH.md)
- [Real-time simulation engine](docs/REALTIME_SIMULATION_ENGINE.md)
- [Live analysis and environment model](docs/ANALYSIS_AND_ENVIRONMENT_MODEL.md)
- [Research Studio](docs/RESEARCH_STUDIO.md)
- [Scientific source registry](docs/SCIENTIFIC_SOURCE_REGISTRY.md)
- [Research data pipeline](docs/RESEARCH_DATA_PIPELINE.md)
- [Scientific method and discovery integrity](docs/SCIENTIFIC_METHOD_AND_DISCOVERY.md)
- [Expandable domain model](docs/DOMAIN_EXPANSION_MODEL.md)
- [Phase 1 source audit](docs/PHASE_1_SOURCE_AUDIT.md)
- [Phase 1 initial catalogue](docs/PHASE_1_INITIAL_CATALOGUE.md)

## Proposed technology direction

React + TypeScript + Vite, Three.js, IndexedDB, a deterministic simulation core, validated data/content schemas, and later PWA/Capacitor packaging. Scientific analysis may use local calculation modules and, where practical, sandboxed WebAssembly/Web Workers. Technology is provisional until architecture/performance phases test it.

No paid AI API or mandatory cloud backend is required for core experiments. Optional AI-assisted literature summarisation or language explanations may be considered later, but cannot be the source of scientific truth or replace citations, calculations, evidence review or human experimental validation.

## Official and scientific starting sources

- [RBSE syllabus index](https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika-syllabus.htm)
- [NCERT Grade 11–12 laboratory kit manuals](https://ncert.nic.in/division/dek/kit-manuals.php?ln=en)
- [NCERT kit specification documents](https://ncert.nic.in/division/dek/specification_documents.php?ln=en)
- [PubChem](https://pubchem.ncbi.nlm.nih.gov/docs/about)
- [NIST Chemistry WebBook](https://webbook.nist.gov/)
- [NIST CODATA physical constants](https://www.nist.gov/programs-projects/codata-values-fundamental-physical-constants)
- [NCBI data resources](https://www.ncbi.nlm.nih.gov/comparative-genomics-resource/data-resources/)
- [Europe PMC REST API](https://dev.europepmc.org/RestfulWebService)
- [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/)
- [GBIF occurrence API](https://techdocs.gbif.org/en/openapi/v1/occurrence)

The scientific source registry records each source's role, limitations, licence/usage checks and citation requirements. Discovery and ingestion are not the same as verification.

## Phase 1 tracking issue

The user-supplied RBSE 2026–2027 Class XI/XII PDFs have now been inspected for all six Physics/Chemistry/Biology practical sections. [Issue #1](https://github.com/snchat78-svg/LabVerse/issues/1) remains open for the remaining inventory, specification and expert-review work; it is no longer a PDF-retrieval blocker.


## Current Phase 1 working documents

- [NCERT-CIET practical crosswalk](docs/PHASE_1_NCERT_CROSSWALK.md)
- [Preliminary equipment and 3D asset inventory](docs/PHASE_1_EQUIPMENT_INVENTORY.md)
- [RBSE 2026–2027 official practical audit](docs/PHASE_1_RBSE_2027_OFFICIAL_AUDIT.md)
- [RBSE-to-asset mapping delta](docs/PHASE_1_RBSE_2027_ASSET_DELTA.md)
- [RBSE 2027 syllabus retrieval issue](https://github.com/snchat78-svg/LabVerse/issues/1)


- [Phase 1 practical-to-equipment-to-result coverage matrix](docs/PHASE_1_PRACTICAL_COVERAGE_MATRIX.md)


## Additional Phase 1 audit documents

- [NCERT-CIET full Grade 11/12 Science index audit](docs/PHASE_1_NCERT_CIET_INDEX_AUDIT.md)
- [Scientific source usage, licences and API limits](docs/PHASE_1_SOURCE_USAGE_COMPLIANCE.md)
- [RBSE 2027 secondary cross-check history and official-page verification](docs/PHASE_1_RBSE_2027_SECONDARY_CROSSCHECK.md)
- [RBSE 2026–2027 official Class XI/XII practical syllabus audit](docs/PHASE_1_RBSE_2027_OFFICIAL_AUDIT.md)
- [RBSE practical-to-3D asset inventory delta](docs/PHASE_1_RBSE_2027_ASSET_DELTA.md)
- [NCERT Higher Secondary Biology Kit review](docs/PHASE_1_NCERT_BIOLOGY_KIT_REVIEW.md)
- [NCERT Grade XI–XII kit specification access audit](docs/PHASE_1_NCERT_SPECIFICATION_ACCESS_AUDIT.md)
- [NCERT Class XI Biology Exercises 2–6 crosswalk](docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_CROSSWALK.md)
- [NCERT Class XI Biology Exercises 2–6 detailed audit](docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_DETAILED_AUDIT.md)
- [NCERT Class XI Biology Exercises 2–6 current-edition source audit](docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_DETAILED_AUDIT.md)
- [NCERT Class XII Biology Exercises 4–6 audit](docs/PHASE_1_NCERT_XII_BIOLOGY_EXERCISES_4_6_AUDIT.md)
- [NCERT Class XII Biology Exercises 8–25 audit and RBSE crosswalk](docs/PHASE_1_NCERT_XII_BIOLOGY_EXERCISES_8_25_AUDIT.md)
- [NCERT Class XII Biology Exercises 11, 17–20 and Project Work audit](docs/PHASE_1_NCERT_XII_BIOLOGY_EXERCISES_11_17_20_PROJECT_AUDIT.md)
- [Science claim review — Class XII pedigree traits](docs/PHASE_1_SCIENCE_CLAIM_REVIEW_XII_BIO_EX11.md)
- [Exercise 2 scientific claim review — mesosomes and taxonomy](docs/PHASE_1_SCIENCE_CLAIM_REVIEW_BIO_EX02.md)

- [RBSE 2026–2027 all-six-pack practical coverage register](docs/PHASE_1_RBSE_ALL_PRACTICAL_COVERAGE_REGISTER.md)
- [NCERT official School Kits brochure audit — Biology kit category evidence](docs/PHASE_1_NCERT_OFFICIAL_SCHOOL_KITS_BROCHURE_AUDIT.md)

- [NCERT Biology kit slide and visual-aid candidate register](docs/PHASE_1_NCERT_BIOLOGY_KIT_SLIDE_AND_VISUAL_AID_REGISTER.md)


## Phase 1.1 — NCERT kit specification recovery
- [Phase 1.1 NCERT kit specification audit](docs/PHASE_1_1_NCERT_KIT_SPECIFICATION_AUDIT.md)

Current gate: Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED. The Physics manual has been text-inspected, while official kit procurement attachments and the complete Higher Secondary Biology kit manual remain open.


## Phase 1.1 — item-level Physics kit register
- [NCERT Physics manual 106-row item register](docs/PHASE_1_1_PHYSICS_MANUAL_ITEM_REGISTER.md)

The register assigns LabVerse source-row IDs and provisional equipment families to the NCERT manual's 106 numbered item rows. Procurement quantities, tolerances and acceptance specifications remain open unless explicitly evidenced.


- [Machine-readable NCERT Physics kit item catalogue (CSV, 106 rows)](data/catalogues/ncert_physics_kit_manual_items.csv)


## Phase 1.1 — uploaded NCERT specification analysis
- [Uploaded PDF analysis and source boundaries](docs/PHASE_1_1_UPLOADED_PDF_ANALYSIS.md)
- [Micro Scale Chemistry kit specification register](docs/PHASE_1_1_MSCL_SPECIFICATION_ITEM_REGISTER.md)
- [MSCL item catalogue CSV — 55 index rows](data/catalogues/ncert_mscl_spec_items.csv)
- [Biology with microscope specification register](docs/PHASE_1_1_BIOLOGY_WITH_MICROSCOPE_SPECIFICATION_REGISTER.md)
- [Biology with microscope item catalogue CSV — 177 index rows](data/catalogues/ncert_biology_with_microscope_spec_items.csv)

Uploaded copies were inspected as scanned NCERT-branded specification documents. Their SHA-256 hashes are recorded in the audit; a hash match to NCERT-hosted originals is still pending.


## Phase 1.1 — uploaded specification copies
- [Uploaded NCERT specification comparison and audit](docs/PHASE_1_1_UPLOADED_PDF_ANALYSIS.md)
- [MSCL specification item register](docs/PHASE_1_1_MSCL_SPECIFICATION_ITEM_REGISTER.md)
- [MSCL machine-readable item catalogue (55 index rows)](data/catalogues/ncert_mscl_spec_items.csv)
- [Biology-with-microscope specification register](docs/PHASE_1_1_BIOLOGY_WITH_MICROSCOPE_SPECIFICATION_REGISTER.md)
- [Biology-with-microscope machine-readable item catalogue (177 index rows)](data/catalogues/ncert_biology_with_microscope_spec_items.csv)

The two uploaded PDFs are scanned NCERT-branded copies. Their hashes and OCR limits are recorded; exact-byte identity against NCERT-hosted originals remains unverified.


## Phase 1.1 — latest verification and traceability work (2026-11-08)
- [Official NCERT attachment retrieval re-check](docs/PHASE_1_1_OFFICIAL_RETRIEVAL_RECHECK_2026_11_08.md)
- [Three-subject RBSE-to-NCERT-to-asset traceability pilot](docs/PHASE_1_1_RBSE_NCERT_ASSET_TRACEABILITY_PILOT.md)

The NCERT index links were confirmed, but all four direct attachment downloads returned HTTP 502 in the 2026-11-08 re-check. Previously uploaded copies remain unauthenticated. The traceability pilot is DESIGN_ONLY and does not indicate that 3D assets or scientific models are implemented.


## Roadmap execution and research-quality governance (2026-11-08)

Every completed and verified work unit is recorded in [WORK_LOG.md](docs/WORK_LOG.md), reflected in [PHASE_STATE.md](docs/PHASE_STATE.md), and aligned with the [master roadmap](docs/ROADMAP.md). The workflow forbids phase skipping and requires evidence, test counts, blockers and the next task to be committed and read back.

LabVerse is designed as a research-useful scientific platform: traceable sources, immutable raw data, reproducible analyses, explicit uncertainty, versioned scientific models, literature/evidence review, bounded simulations and independent human review. Current implementation status remains documentation/source-audit only; no app code, 3D assets or simulation engines are yet implemented.


## Phase 1.1 — RBSE Class XI Physics experiment traceability (2026-11-08)
- [Class XI Physics experiment traceability register — 17 tasks](docs/PHASE_1_1_RBSE_XI_PHYSICS_EXPERIMENT_TRACEABILITY.md)
- [Class XI Physics experiment traceability CSV — 17 rows](data/catalogues/rbse_xi_physics_experiment_traceability.csv)

The mapping is DESIGN_ONLY: source IDs exist in the current manual catalogue, but task equivalence, procurement specifications, scientific model implementation, test execution, safety and expert review remain open. Next: Class XI Physics activities A01–A07 and B01–B06.


## Phase 1.1 — RBSE Class XI Physics activity traceability (2026-11-08)
- [Activity traceability register — 13 tasks](docs/PHASE_1_1_RBSE_XI_PHYSICS_ACTIVITY_TRACEABILITY.md)
- [Activity traceability CSV — 13 rows](data/catalogues/rbse_xi_physics_activity_traceability.csv)

All rows are DESIGN_ONLY candidate mappings, not verified apparatus equivalence or implemented simulation. Next source-order task: Class XI Physics projects (11 rows).


## Phase 1.1 — RBSE Class XI Physics project traceability (2026-11-08)
- [Project traceability register — 11 tasks](docs/PHASE_1_1_RBSE_XI_PHYSICS_PROJECT_TRACEABILITY.md)
- [Project traceability CSV — 11 rows](data/catalogues/rbse_xi_physics_project_traceability.csv)

The Fortin barometer project has no matching item in the current NCERT Physics manual item catalogue. The crosswalk is DESIGN_ONLY and does not imply procurement verification or implementation. Next: reconcile all 41 Class XI Physics tasks.


## Phase 1.1 — RBSE Class XI Physics consolidated traceability (2026-11-08)
- [Consolidated Physics coverage summary — 41 tasks](docs/PHASE_1_1_RBSE_XI_PHYSICS_TRACEABILITY_SUMMARY.md)
- [Consolidated Physics traceability CSV — 41 rows](data/catalogues/rbse_xi_physics_traceability.csv)

Task coverage is reconciled at documentary level only; apparatus equivalence, procurement specifications, scientific models, executable tests and expert approval are still pending. Next roadmap item: Class XI Chemistry practical traceability.


## Phase 1.1 — RBSE Class XI Chemistry practical traceability (2026-11-08)
- [Chemistry practical traceability register — 19 task groups](docs/PHASE_1_1_RBSE_XI_CHEMISTRY_PRACTICAL_TRACEABILITY.md)
- [Chemistry practical traceability CSV — 19 rows](data/catalogues/rbse_xi_chemistry_practical_traceability.csv)

The mapping is candidate-only and uses OCR-derived rows from an unauthenticated MSCL upload. The apparatus catalogue does not establish reagent supply or validate reaction results. Next: Class XI Chemistry project tasks.


## Phase 1.1 — RBSE Class XI Chemistry project traceability (2026-11-08)
- [Chemistry project traceability register — 8 projects](docs/PHASE_1_1_RBSE_XI_CHEMISTRY_PROJECT_TRACEABILITY.md)
- [Chemistry project traceability CSV — 8 rows](data/catalogues/rbse_xi_chemistry_project_traceability.csv)

These are candidate apparatus links only. Source/reagent/sample/data and analytical-method verification remains open. Next: consolidate the Class XI Chemistry 27-task pack.


## Phase 1.1 — RBSE Class XI Chemistry consolidated traceability (2026-11-08)
- [Chemistry coverage summary — 27 tasks](docs/PHASE_1_1_RBSE_XI_CHEMISTRY_TRACEABILITY_SUMMARY.md)
- [Consolidated Chemistry traceability CSV — 27 rows](data/catalogues/rbse_xi_chemistry_traceability.csv)

The summary preserves the RBSE marks discrepancy and the unauthenticated MSCL source boundary. Reagent supply/method validation is not implied. Next: Class XI Biology source-to-task mapping.


## Phase 1.1 — RBSE Class XI Biology traceability (2026-11-08)
- [Biology task-level traceability register — 22 groups](docs/PHASE_1_1_RBSE_XI_BIOLOGY_TRACEABILITY.md)
- [Biology task-level CSV — 22 rows](data/catalogues/rbse_xi_biology_traceability.csv)
- [Biology consolidated traceability summary](docs/PHASE_1_1_RBSE_XI_BIOLOGY_TRACEABILITY_SUMMARY.md)
- [Biology consolidated CSV — 22 rows](data/catalogues/rbse_xi_biology_traceability_consolidated.csv)

The summary preserves OCR versus index-only evidence and the unauthenticated upload boundary. The RBSE XI Biology task register has no separate investigatory-project component. Next: Class XII Physics source-to-task mapping.


## Phase 1.1 — RBSE Class XII Physics experiment traceability (2026-11-08)
- [Experiment traceability register — 18 tasks](docs/PHASE_1_1_RBSE_XII_PHYSICS_EXPERIMENT_TRACEABILITY.md)
- [Experiment traceability CSV — 18 rows](data/catalogues/rbse_xii_physics_experiment_traceability.csv)

The travelling microscope required for RBSE-XII-PHY-EXP-14 is not listed in the currently available NCERT Physics manual item schedule. No source item was invented. All assets/models/tests remain proposed or planned only. Next: Class XII Physics activities.


## Phase 1.1 — RBSE Class XII Physics activity traceability (2026-11-08)
- [Activity traceability register — 14 tasks](docs/PHASE_1_1_RBSE_XII_PHYSICS_ACTIVITY_TRACEABILITY.md)
- [Activity traceability CSV — 14 rows](data/catalogues/rbse_xii_physics_activity_traceability.csv)

Activity mappings remain candidate-only; exact procurement specs, model implementation, scientific tests and expert review remain open. Household mains wiring and physical blade handling are not permitted app workflows. Next: Class XII Physics projects.


## Phase 1.1 — RBSE Class XII Physics consolidated traceability (2026-11-08)
- [XII Physics experiment register — 18 tasks](docs/PHASE_1_1_RBSE_XII_PHYSICS_EXPERIMENT_TRACEABILITY.md)
- [XII Physics activity register — 14 tasks](docs/PHASE_1_1_RBSE_XII_PHYSICS_ACTIVITY_TRACEABILITY.md)
- [XII Physics project register — 7 tasks](docs/PHASE_1_1_RBSE_XII_PHYSICS_PROJECT_TRACEABILITY.md)
- [XII Physics pack summary — 39 tasks](docs/PHASE_1_1_RBSE_XII_PHYSICS_TRACEABILITY_SUMMARY.md)
- [Consolidated XII Physics CSV — 39 rows](data/catalogues/rbse_xii_physics_traceability.csv)

Two known missing-instrument flags remain: travelling microscope (EXP-14) and phototransistor/IR source (PRJ-04). All mapped models/assets/tests remain design-only or planned.


## Phase 1.1 — RBSE Class XII Chemistry traceability (2026-11-08)
- [Class XII Chemistry traceability register](docs/PHASE_1_1_RBSE_XII_CHEMISTRY_TRACEABILITY.md)
- [Class XII Chemistry traceability CSV](data/catalogues/rbse_xii_chemistry_traceability.csv)
- [Class XII Chemistry option/choice summary](docs/PHASE_1_1_RBSE_XII_CHEMISTRY_TRACEABILITY_SUMMARY.md)

The register preserves redox alternatives, the four-mark OR choices and the content-based alternatives. The uploaded MSCL apparatus list is not treated as a reagent BOM. Next: Class XII Biology task mapping.


## Phase 1.1 — RBSE Class XII Biology traceability (2026-11-09)
- [Task-level Biology traceability register — 28 records](docs/PHASE_1_1_RBSE_XII_BIOLOGY_TRACEABILITY.md)
- [Task-level Biology CSV — 28 rows](data/catalogues/rbse_xii_biology_traceability.csv)
- [Consolidated Biology summary](docs/PHASE_1_1_RBSE_XII_BIOLOGY_TRACEABILITY_SUMMARY.md)
- [Consolidated Biology CSV — 28 rows](data/catalogues/rbse_xii_biology_traceability_consolidated.csv)

The register distinguishes OCR/visual/index evidence and keeps RBSE's investigatory-project topic teacher-assigned. Index-only cards/slides are not visually verified. Next: six-pack RBSE task-index reconciliation.


## Phase 1.1 — Six-pack RBSE task-index reconciliation (2026-11-09)
- [Six-pack reconciliation report — 171/171 task IDs](docs/PHASE_1_1_RBSE_SIX_PACK_TASK_INDEX_RECONCILIATION.md)
- [Normalized six-pack traceability CSV — 171 rows, 20 columns](data/catalogues/rbse_six_pack_task_index_traceability.csv)

All six packs match the RBSE master task index with zero missing, extra or duplicate task IDs. This is documentary task coverage only; source authentication, procurement equivalence, assets, scientific models, tests and expert/safety approvals remain Phase 1 gates. Next: source-authentication and procurement-gap register.


## Phase 1.1 — Source authentication and procurement gaps (2026-11-09)
- [Source authentication and procurement-gap register](docs/PHASE_1_1_SOURCE_AUTHENTICATION_AND_PROCUREMENT_GAP_REGISTER.md)
- [Machine-readable gap register — 12 rows](data/catalogues/phase1_source_authentication_procurement_gaps.csv)

Official RBSE 2027 and NCERT specification index listings are recorded separately from attachment retrieval. User-uploaded NCERT copies remain unauthenticated against the official bytes. The 171-task index is reconciled, but Phase 1 remains open and Phase 2 blocked.


## Phase 1.1 — Source authentication and GeM recovery lead (2026-11-09)
- [Source authentication/procurement gap register](docs/PHASE_1_1_SOURCE_AUTHENTICATION_AND_PROCUREMENT_GAP_REGISTER.md)
- [Gap register CSV — 13 records](data/catalogues/phase1_source_authentication_procurement_gaps.csv)

A third-party tender index reports GeM bid GEM/2026/B/8248336 with Physics, MSCL and Biology-without-microscope attachments. Attachment bytes and BOQ are not retrieved or authenticated; reported 105/54 item counts remain discovery-only. Phase 1 stays open, Phase 2 blocked.


## Phase 1.1 — Second source retrieval audit (2026-11-09)
- [GeM repeated attachment filename audit](docs/PHASE_1_1_GEM_MIRROR_RECURRENCE_AUDIT_2026_11_09.md)
- [GeM attachment recurrence CSV](data/catalogues/gem_kit_specification_mirror_recurrence.csv)
- [Updated source authentication and procurement gap register](docs/PHASE_1_1_SOURCE_AUTHENTICATION_AND_PROCUREMENT_GAP_REGISTER.md)
- [Updated machine-readable source gap register](data/catalogues/phase1_source_authentication_procurement_gaps.csv)

The exact uploaded RBSE 2027 PDF hashes and metadata are now recorded. Ten third-party GeM listings repeat the NCERT kit attachment filenames, but no attachment/BOQ bytes were retrieved or authenticated. Filename recurrence is not proof of official content or revision. Phase 1 remains IN PROGRESS and Phase 2 remains BLOCKED.


## Phase 1.1 — Physics manual edition clarification (2026-11-09)
- [NCERT Physics manual item register](docs/PHASE_1_1_PHYSICS_MANUAL_ITEM_REGISTER.md)
- [XII Physics task traceability summary](docs/PHASE_1_1_RBSE_XII_PHYSICS_TRACEABILITY_SUMMARY.md)

The NCERT Physics manual preface says the travelling microscope and Searle's apparatus were still being developed for inclusion in that kit edition. The RBSE XII EXP-14 crosswalk retains a distinct travelling microscope asset requirement; the current separate procurement attachment remains unverified. This is source interpretation only, not a completed procurement or scientific validation gate.


## Phase 1.1 — NCERT MSCL manual evidence (2026-11-09)
- [MSCL manual review and safety gate](docs/PHASE_1_1_MSCL_OFFICIAL_MANUAL_REVIEW.md)
- [34 experiment/topic entries](data/catalogues/ncert_mscl_manual_experiment_index.csv)
- [51 apparatus entries](data/catalogues/ncert_mscl_manual_apparatus_index.csv)
- [124 reagent/material labels — live use blocked](data/catalogues/ncert_mscl_manual_reagent_index.csv)
- [RBSE Chemistry topic crosswalk](data/catalogues/ncert_mscl_manual_to_rbse_chemistry_crosswalk.csv)

This is the NCERT-hosted 2018 educational manual, not the current procurement specification or delivered BOM. All reagent labels remain blocked from live use until identity-specific SDS and expert safety review. The full Chemistry crosswalk is topic-level evidence, not experimental validation. Phase 1.1 remains IN PROGRESS; Phase 2 remains BLOCKED.


## Phase 1.1 — MSCL manual and specification comparison
- [MSCL manual-to-upload item reconciliation report](docs/PHASE_1_1_MSCL_MANUAL_UPLOAD_ITEM_RECONCILIATION.md)
- [Machine-readable 51-item crosswalk](data/catalogues/mscl_manual_to_2025_upload_item_reconciliation.csv)

All 51 historical-manual apparatus entries have candidate mappings into the 54 numbered items from the uploaded MSCL specification index, with four upload-only rows identified. Differences are not promoted to official changes because the uploaded PDF is not authenticated against the current NCERT attachment. Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.


## Phase 1.1 — MSCL reagent completeness and Biology manual source gate
- [MSCL internal reagent-list omissions](data/catalogues/ncert_mscl_manual_internal_reagent_omissions.csv)
- [Updated MSCL manual review](docs/PHASE_1_1_MSCL_OFFICIAL_MANUAL_REVIEW.md)
- [Updated source authentication and procurement gaps](docs/PHASE_1_1_SOURCE_AUTHENTICATION_AND_PROCUREMENT_GAP_REGISTER.md)

The 2018 MSCL manual's 124-row reagent label list is not exhaustive against its own experiment/appendix text. All reagent references remain blocked from live use pending identity-specific SDS and expert review. NCERT confirms a Biology kit manual (publication code 13163) and separate with-/without-microscope specifications, but the official manual PDF bytes remain unretrieved. Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.


## Phase 1.1 — Biology task-gap audit
- [Task-level gap register report](docs/PHASE_1_1_BIOLOGY_TASK_LEVEL_GAP_REGISTER.md)
- [50-task machine-readable gap register](data/catalogues/biology_task_level_gap_register.csv)

All 22 Class XI and 28 Class XII Biology records are included. Their candidate source-item IDs resolve to the uploaded with-microscope catalogue (0 dangling references), but the source is not authenticated and many slide/card/specimen pages remain index-only. The Biology without-microscope specification and official manual 13163 are still unretrieved. Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.

### Phase 1.1 — MSCL official attachment retrieval re-check (2026-11-09)
- [Official MSCL attachment retrieval audit](docs/PHASE_1_1_MSCL_OFFICIAL_ATTACHMENT_RETRIEVAL_RECHECK_2026_11_09.md)
- [Machine-readable MSCL attachment retrieval attempts](data/catalogues/mscl_attachment_retrieval_attempts_2026_11_09.csv)
Current result: official NCERT attachment remains listed but retrieval-blocked; no current MSCL reagent BOM is authenticated. Phase 1.1 remains IN PROGRESS; Phase 2 remains BLOCKED.

### Phase 1.1 — Biology kit-manual source discovery (2026-11-09)
- [Official Biology kit-manual and variant source discovery](docs/PHASE_1_1_BIOLOGY_MANUAL_SOURCE_DISCOVERY_2026_11_09.md)
- [Machine-readable Biology manual discovery attempts](data/catalogues/biology_manual_source_discovery_2026_11_09.csv)
Current result: NCERT catalogue identifies Biology kit manual codes 13163 (English) and 13193 (Hindi title), and lists two separate kit variants; actual manual/specification bytes remain unretrieved. Phase 1.1 remains IN PROGRESS; Phase 2 remains BLOCKED.

### Phase 1.1 — official NCERT primary PDF intake (2026-11-09)
- [Official direct PDF links and upload checklist](docs/PHASE_1_1_OFFICIAL_PRIMARY_PDF_INTAKE_LINKS_2026_11_09.md)
- [Machine-readable five-document intake manifest](data/catalogues/phase1_official_pdf_intake_manifest_2026_11_09.csv)
Exact official targets are available for Biology kit manual 13163, Biology with/without microscope, MSCL and Physics; original PDFs are requested for byte-level verification. Phase 1.1 remains IN PROGRESS; Phase 2 remains BLOCKED.



### Phase boundaries after React app starter

Phase 3 remains partial: the React/TypeScript/Vite foundation is validated, but workspace migration continues. Phase 4 Dashboard remains in progress. Real 3D workbench and scientific engines are not implemented. See [Phase State](docs/PHASE_STATE.md) and [Next Work Register](docs/NEXT_WORK_REGISTER_2026_11_10.md).

## Persistent user-provided PDF source register

Previously supplied Physics, Chemistry and Biology PDFs are tracked in:
- data/catalogues/source_pdf_registry_2026_11_10.csv
- data/catalogues/source_pdf_upload_receipts_2026_11_10.csv
- docs/SOURCE_PDF_ARCHIVE_REGISTER_2026_11_10.md

These records preserve file fingerprints, variants, page counts, derived catalogues and no-repeat instructions. The public repository does not contain the original NCERT PDF binaries; upload receipts and source-derived records are retained instead. Do not ask for already registered PDFs again.
