# Phase 4 Exit-Gate Review — 2026-11-20

## Decision

**Phase 4 remains IN PROGRESS.** Core static/React parity, subject/task navigation and candidate placeholder workbench acceptance has passed. One explicit mobile-workbench requirement in `docs/UI_UX_SPEC.md` remains open: the inventory tray and analysis panel must behave as collapsible bottom sheets on mobile.

This review does not close Phase 4 and does not authorize Phase 5, Phase 6 or science-engine work.

## Acceptance checklist

| UI requirement | Result | Evidence / boundary |
|---|---|---|
| Physics, Chemistry and Biology entry points | PASS | Both dashboards show the same three subjects |
| Class XI/XII practical catalogue | PASS | Class filter is shared and browser-tested |
| Searchable practical catalogue | PASS | Search by title, task ID or recorded group |
| Practical topic/type grouping | PASS WITH SCOPE | Filter uses the existing source `group` taxonomy; no invented topic hierarchy |
| Searchable inventory with type/category filtering | PASS | Static category filter is a keyboard-efficient dropdown; React has type/category selects |
| Practical → mapped source item navigation | PASS | Task mapping links preserve candidate IDs and show unmatched gaps |
| Practical card opens its candidate workbench | PASS | Both dashboards open Virtual Experiment Lab and insert mapped candidate source rows |
| Source evidence/status/safety disclosures | PASS | Chemistry no-live-use/reference-only and Biology not-supplied/school-managed boundaries preserved |
| Candidate workbench starts empty and supports add/remove/reset | PASS | Current items are 2D catalogue placeholders; not a validated physical setup |
| Drag desktop / tap fallback / repeated instance handling | PASS | React normal Add is idempotent; explicit Add another instance creates a new ID; static Add creates distinct instances |
| Keyboard Inspect/Add/copy/Remove | PASS | Paired browser tests, visible focus, labelled individual removal |
| Mobile narrow layout / touch without drag | PASS WITH SCOPE | 390×844 browser emulation; not a physical Android device test |
| Scientific Analysis boundary | PASS | NOT_MODELLED when no validated domain solver is connected |
| Research Studio | PASS WITH SCOPE | React schema-v2 local planning and checklist; static view intentionally remains generic roadmap placeholder |
| Mobile inventory tray and analysis collapsible bottom sheets | **OPEN** | Explicit UI spec requirement not yet implemented |
| Full WCAG / assistive-tech / physical-device validation | NOT CLAIMED | Follow-up review still required |

## CI evidence

- React app checks: SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/44688375282 (strict TypeScript/build/preview PASS; React smoke 36/36; parity 13/13).
- Dashboard integrity: SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/44688375294.
- Static desktop/mobile smoke: SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/44688375256 (9/9).

Latest code commits:
- `5bb08808679d343e8d885ac141ad35a777d3d5d8` — React practical-to-workbench navigation.
- `d9c1710e32590be88737682b699d90af31f4ebfd` — persistent static task-card workbench action.
- `8be6f5bad1c78da85aeb72967a7ce0d1f5b8937f` — source-backed practical-group filters and paired tests.

## Project-wide dependency gates

- Phase 1/1.1: IN PROGRESS — official source bytes/editions, full method/page mapping, procurement equivalence, rights, risk/safety and qualified expert review remain open.
- Phase 2: BLOCKED for scientific domain models and validated result generation until Phase 1 evidence gates pass.
- Phase 3: PARTIAL — React app foundation and CI are established; wider architecture hardening remains.
- Phase 4: IN PROGRESS — mobile collapsible bottom sheets are the next UI acceptance item.
- Phase 5 real 3D, Phase 6 experiment runtime and Phases 7–9 scientific solvers: NOT STARTED.

## Next action

The main roadmap phase remains Phase 1/1.1. Resume the queued Biology-with-microscope Kit Box visual/detail review at indexed page 9, using already-submitted source files or an approved official retrieval route. Do not request the PDFs again. Keep the Phase 4 mobile-sheet UI work registered as a parallel bounded follow-up; do not start 3D or scientific result generation ahead of the Phase 1/Phase 2 gates.
