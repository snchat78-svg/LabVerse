# Phase State — LabVerse

This is the single source of truth for the current phase. Update it in the same commit that completes a phase or changes the next phase.

## Current state

- Project: LabVerse — Scientific Discovery & Virtual Research Platform
- Repository: https://github.com/snchat78-svg/LabVerse
- Current phase: Phase 1 — Platform scope, source audit and first science catalogue
- Phase 0: DONE — planning/documentation baseline only
- Phase 1: IN PROGRESS — preliminary source audit and catalogue started
- Phase 2: BLOCKED until Phase 1 exit criteria are met
- Application code: not started
- 3D workbench/assets: not implemented
- Simulation/research engines: not implemented
- Last phase-state review: 2026-10-31

## Phase 0 — completed log

### Product definition and design baseline
- Status: DONE (documentation only).
- Evidence: product vision, requirements, roadmap, phase workflow, architecture, 3D workbench, real-time engine, Chemistry/Physics/Biology models, source/data pipeline, analysis/environment, Research Studio, scientific method policy, safety, tests, stack, decisions, backlog and release plan.
- Boundary: no UI, model asset, experiment content, research connector, application code or simulation engine was built in this phase.

## Phase 1 — progress recorded

### Completed in this phase so far
- [x] Expanded product scope beyond Class 11–12 to an extensible Physics/Chemistry/Biology scientific analysis and research platform.
- [x] Defined four workspaces: Learning Lab, Virtual Experiment Lab, Scientific Analysis and Research Studio.
- [x] Identified official RBSE syllabus index and its current Class 11/12 examination 2027 PDF links.
- [x] Retrieved/inspected the 2026 official baseline PDFs for preliminary Class 11/12 Physics, Chemistry and Biology practical scope.
- [x] Identified NCERT Grade 11/12 Physics, Biology and Micro-scale Chemistry kit manuals and kit specification pages.
- [x] Listed candidate cross-domain research sources for chemical data, physics reference data, biological datasets, biodiversity and scholarly literature.
- [x] Added a preliminary catalogue and source audit with limitations/blockers.
- [x] Defined research question, hypothesis, protocol, dataset provenance, analysis and reproducibility workflow.
- [x] Added model-expansion levels and requirements for new validated scientific domain packs.

### Mandatory remaining checklist
- [ ] Retrieve and inspect the official RBSE Class 11 examination 2027 syllabus PDF.
- [ ] Retrieve and inspect the official RBSE Class 12 examination 2027 syllabus PDF.
- [ ] Confirm exact page/section references for all six current-session subject/class practical catalogues.
- [ ] Extract every current practical, activity, project, spotting, slide/specimen, record and viva requirement.
- [ ] Obtain and inspect the NCERT Physics XI/XII kit manual.
- [ ] Obtain and inspect the NCERT Biology XI/XII kit manual.
- [ ] Obtain and inspect the NCERT Micro-scale Chemistry XI/XII kit manual.
- [ ] Reconcile RBSE practical requirements with NCERT manuals without silently merging or removing requirements.
- [ ] Build complete apparatus, instruments, glassware, chemicals, specimens, slides, models and consumables inventory.
- [ ] Review API/data terms, licence, attribution and update policy for each candidate research source.
- [ ] Build source -> claim/data -> catalogue item -> asset -> test coverage matrix.
- [ ] Resolve source wording inconsistencies with a teacher/subject reviewer.
- [ ] Complete scientific source and curriculum coverage review before Phase 1 sign-off.

## Current blocker
The official RBSE syllabus index lists 2027 Class 11 and Class 12 PDF links. Attempts to retrieve those large files through the current browsing retrieval route returned file-too-large errors (approximately 23.3 MB for Class 11 and 17.6 MB for Class 12). Those documents have NOT been audited. The official 2026 PDFs are used only as a preliminary comparison baseline, not as proof of the 2027 curriculum.

Tracking issue: https://github.com/snchat78-svg/LabVerse/issues/1

See docs/PHASE_1_SOURCE_AUDIT.md and docs/PHASE_1_INITIAL_CATALOGUE.md.

## Evidence and testing note
- Phase 1 work completed so far is source discovery and documentation.
- No application code or scientific engine was changed.
- No software test suite exists yet; therefore no code tests are claimed as passed.
- Current curriculum catalogue status: PRELIMINARY / NEEDS_REVIEW, not VERIFIED or PUBLISHED.

## Next action
Continue Phase 1 by obtaining the current 2027 RBSE PDFs through an accessible route, extracting exact pages/sections, inspecting NCERT kit manuals and completing the coverage/inventory matrix. Do not start Phase 2 while the Phase 1 exit gate remains open.

## Update protocol
For each phase update, add date, status, exact commit SHA/PR/CI link, files changed, tests run with pass/fail counts, remaining blockers and next phase. Repository evidence wins over chat history. Do not infer completion from a conversation statement.


## Phase 1 update — 2026-10-31 (continued)

### Additional source-audit work completed
- [x] Opened official NCERT-CIET Grade 11 and Grade 12 activity catalogues and mapped the displayed Physics, Chemistry and Biology rows into a separate NCERT crosswalk.
- [x] Inspected parsed text for official NCERT Class XI Physics, Chemistry and Biology laboratory manuals marked 2025–26.
- [x] Recorded NCERT manual copyright/all-rights-reserved notices and the need to create original assets/content or obtain permission.
- [x] Inspected parsed text from the RBSE 2026 Higher Secondary practical-instruction PDF for Physics and Chemistry examination format and Biology instructions. This is a 2026 Class XII baseline only.
- [x] Created the initial subject-wise apparatus and 3D asset family inventory for Physics, Chemistry and Biology.
- [x] Recorded PDF screenshot-access failures rather than claiming visual screenshot inspection.

### New Phase 1 documents
- docs/PHASE_1_NCERT_CROSSWALK.md
- docs/PHASE_1_EQUIPMENT_INVENTORY.md

### Important limitations
- RBSE 2027 Class 11 and Class 12 PDFs remain unread because the official files exceed the current retrieval route's size limit; repository Issue #1 tracks the blocker.
- NCERT CIET pages are a separate official NCERT digital-resource index, not a substitute for RBSE syllabus requirements.
- NCERT Class XI manual parsed text was inspected; Class XII manual page-level extraction and all kit specifications remain open.
- The RBSE 2026 practical instruction PDF applies to Higher Secondary practical examination 2026. It is not evidence of 2027 or Class XI requirements.
- Inventory categories are preliminary and not yet fully mapped item-by-item to each official practical.

### Test status
- No application source code exists yet.
- No software tests or scientific-engine regression tests can be run at this stage.
- No tests are claimed as passed. This phase is a source and content audit.

### Remaining exit gate
- [ ] Obtain and audit RBSE Class 11 examination 2027 PDF.
- [ ] Obtain and audit RBSE Class 12 examination 2027 PDF.
- [ ] Extract page-level 2027 practical requirements for each subject.
- [ ] Inspect NCERT Class XII Physics/Chemistry/Biology manual content and kit specifications.
- [ ] Build final apparatus/material inventory with quantity/specification and source page.
- [ ] Validate research-source licences, terms, API limits, data citation and update policies.
- [ ] Complete source-to-practical-to-inventory-to-asset-to-test coverage matrix.
- [ ] Obtain subject-teacher/expert review for disputed/unclear records.

Phase 1 remains IN PROGRESS. Phase 2 remains BLOCKED.


## Phase 1 update — additional kit-manual audit (2026-10-31)

### Newly completed source work
- [x] Inspected the official NCERT combined Grades XI/XII Physics Laboratory Kit PDF text: item table, experiment/activity index, circuit and multimeter activities, LDR and optical-bench assembly.
- [x] Inspected the official NCERT Micro Scale Chemistry Laboratory Kit PDF text for Classes XI/XII: apparatus families, dimensions/quantities where supplied, micro-scale sample handling, qualitative-analysis and other experiment categories.
- [x] Confirmed the NCERT Higher Secondary Biology Laboratory Kit title/code 13163 in the official publications catalogue; direct PDF retrieval from the NCERT kit page returned HTTP 502, so full content is still not inspected.
- [x] Rechecked NCERT Class XI Biology manual content for dissection equipment and safety.
- [x] Expanded the item-level Physics/Chemistry/initial Biology equipment inventory with source references and interaction implications.
- [x] Added detailed kit-manual evidence, usage restrictions and source-status vocabulary to the source audit/registry.

### New source limitations
- The NCERT Physics and Chemistry kit PDFs carry all-rights-reserved notices. LabVerse must create original 3D assets and learner-facing text or obtain permission; public availability is not reuse permission.
- PDF screenshot attempts failed with HTTP 502, so the parsed text layer was used and no screenshot-based visual audit is claimed.
- Biology kit manual direct retrieval remains blocked; the Class XI Biology manual and official title/catalogue listing provide only partial evidence.
- RBSE 2027 PDF retrieval blocker remains open under Issue #1.

### Test status
- Still a documentation/source-audit phase. There is no application code or simulation engine to test.
- No software test passes are claimed.

### Next unchecked work
- [ ] Obtain accessible RBSE Class 11 examination 2027 syllabus PDF and inspect practical sections.
- [ ] Obtain accessible RBSE Class 12 examination 2027 syllabus PDF and inspect practical sections.
- [ ] Obtain the official NCERT Biology Grade 11–12 kit manual PDF through a working official route.
- [ ] Inspect NCERT Grade XII manual content and kit specifications at page/section level.
- [ ] Complete the per-practical source-to-apparatus-to-asset mapping, including final item counts/specifications.
- [ ] Complete scientific database API/licence/attribution/rate-limit review before integrating connectors.
- [ ] Obtain subject-teacher review for ambiguous entries and coverage gaps.

Phase 1 remains IN PROGRESS. Phase 2 remains BLOCKED. The latest additions improve source and inventory detail but do not close the current-session RBSE syllabus audit.


## Phase 1 update — 2026-10-31 (coverage mapping and retrieval retry)

### Newly completed work
- [x] Re-opened the official RBSE syllabus index and reconfirmed the current displayed 2027 Class 11 and 12 syllabus links.
- [x] Retried both 2027 direct PDF links through the browser retrieval route; each timed out.
- [x] Retried direct PDF download from the execution container; DNS resolution for the RBSE host failed.
- [x] Kept the official 2026 material as historical comparison only; no unsupported substitution.
- [x] Created a representative practical-to-equipment-to-result matrix with 10 mappings across Physics, Chemistry and Biology.
- [x] Connected each representative activity to input variables, student actions, observations/calculations, 3D assets and live dashboard requirements.

### New file
- docs/PHASE_1_PRACTICAL_COVERAGE_MATRIX.md

### Current status
- Representative mapping slice: DONE as documentation.
- Complete RBSE/NCERT coverage matrix: NOT DONE.
- RBSE 2027 syllabus verification: BLOCKED by current retrieval timeout/DNS failure.
- NCERT Biology Higher Secondary kit manual: title/catalogue identified but complete manual not retrieved.
- Application code, 3D assets and scientific engines: NOT IMPLEMENTED.
- Software tests: NOT RUN because there is no application code/test suite. No passed tests are claimed.

### Remaining Phase 1 exit criteria
- [ ] Obtain and inspect official RBSE Class 11 examination 2027 PDF.
- [ ] Obtain and inspect official RBSE Class 12 examination 2027 PDF.
- [ ] Obtain and inspect full NCERT Biology Grade XI/XII kit manual.
- [ ] Extract exact page/section references from current official syllabus and relevant manuals.
- [ ] Complete all practical/activity/project/spotting/record/viva mappings for all six board/subject/class combinations.
- [ ] Complete final apparatus/material inventory with item sizes, ranges, quantities, source evidence and asset specifications.
- [ ] Review research-source API terms, licence, attribution, rate limits and data update practices.
- [ ] Obtain subject-matter teacher/expert review for unclear records and model assumptions.

Phase 1 remains IN PROGRESS. Phase 2 remains BLOCKED.
