# Known Issues and Open Risks

## Baseline status — 2026-10-31

- No application source code exists yet.
- No 3D model assets have been added.
- No experiment definitions or simulation rules have been implemented/reviewed in code.
- No test suite or CI workflow has been implemented.
- Phase 1 is IN PROGRESS; no curriculum catalogue is VERIFIED for the current 2027 session.
- RBSE official index lists 2027 Class 11 and 12 syllabus PDFs, but retrieval through the current browsing route returned file-too-large errors. Both files still require inspection.
- RBSE 2026 official PDFs are used as preliminary comparison baseline only; they cannot be treated as current 2027 requirements.
- NCERT Grade 11/12 Physics, Biology and Micro-scale Chemistry manuals are listed on the official source page but their full contents still need extraction and page-level mapping.
- Candidate scientific data and literature sources have been identified; connectors, terms, licence checks and source-quality validation are not implemented.
- Proposed stack requires a low-end Android performance spike before it is locked.

## Active Phase 1 blockers

1. Retrieve and inspect the official RBSE Class 11 2027 PDF.
2. Retrieve and inspect the official RBSE Class 12 2027 PDF.
3. Extract exact page/section references for all six subject/class practical catalogues.
4. Inspect and map the full NCERT lab kit manuals.
5. Verify API use, data licence, attribution, rate-limit and redistribution rules for each research source.
6. Resolve source wording/section inconsistencies with a teacher or subject reviewer.

See PHASE_1_SOURCE_AUDIT.md and PHASE_STATE.md for the working checklist.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Incomplete or changed syllabus | Current-session official source register and coverage matrix |
| Incorrect Chemistry outcome | Curated rules, source review, regression tests and unsupported fallback |
| Incorrect scientific interpretation | Separate observation/inference/hypothesis and require evidence provenance |
| Research source quality varies | Store source type, method, date, licence, review status and limitations |
| False novelty/discovery claim | Candidate-only hypothesis status and independent validation requirement |
| 3D assets too heavy | Low-poly assets, LOD, lazy loading and quality tiers |
| Drag/drop difficult on touch | Tap-to-add alternative and direct controls |
| Misleading visual effects | Rule-driven rendering and explicit model-fidelity labels |
| Restricted research datasets | Source-level licence/terms review and provenance retention |
| Offline cache becomes stale | Show retrieval date/version and stale/offline state |
| User data contains sensitive information | Minimise collection, local-first storage and additional privacy controls |
| Free hosting terms change | Keep core runtime local and deployable as static files |
| AI produces unsupported claims | Domain engine and evidence graph remain authoritative; AI cannot invent or override results |
