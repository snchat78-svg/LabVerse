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
