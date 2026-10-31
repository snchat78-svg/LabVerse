# Known Issues and Open Risks

## Baseline status — 2026-10-31

- No application source code exists yet.
- No real 3D model assets have been added.
- No experiment definitions or reaction rules have been imported/reviewed.
- No test suite or CI workflow has been implemented.
- Current official RBSE Class 11/12 documents for the active session still need retrieval and audit in Phase 1.
- The surfaced RBSE practical PDF is labelled Examination 2026; applicability to a later session must not be assumed.
- Proposed stack needs a low-end Android performance spike before it is locked.
- Licensing/provenance must be recorded for every non-original visual asset.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Incomplete/changed syllabus | Session-specific official source register and coverage matrix |
| Incorrect chemistry observation | Curated rules, source review, regression tests, unsupported fallback |
| 3D assets too heavy | Low-poly assets, LOD, lazy loading and quality tiers |
| Drag/drop difficult on touch | Tap-to-add alternative and direct controls |
| Misleading visual effect | Rule-driven rendering and explicit approximation labels |
| Offline package too large | Subject-specific downloadable packs |
| Free hosting terms change | Keep core runtime local and deployable as static files |
| AI invents facts | Domain engine remains authoritative; analysis only uses structured evidence |
