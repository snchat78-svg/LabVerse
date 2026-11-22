# Phase 4 Exit-Gate Review — 2026-11-22

## Decision

**Phase 4 — Dashboard and workspace navigation: DONE (bounded prototype scope).**

The only OPEN item in the 2026-11-20 exit review was the mobile inventory tray / analysis collapsible bottom-sheet behavior. It has now been implemented and verified. All Phase 4 acceptance items in the previous review are passing, with the documented scope exceptions retained below.

This does NOT mean LabVerse is a completed virtual laboratory, production release or scientifically validated research environment. Phase 3 remains PARTIAL; Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED. Phase 5 real 3D, Phase 6 runtime and Phases 7–9 science engines remain NOT STARTED. Do not move into those phases until their dependency gates are met.

## Final Phase 4 acceptance matrix

| Phase 4 item | Result | Evidence / scope |
|---|---|---|
| Physics, Chemistry and Biology entry points | PASS | React and static dashboard expose all three subject directions |
| Class XI/XII practical catalogue | PASS | Class filter and task lists are browser-tested |
| Searchable practical catalogue | PASS | Search and existing source-backed task-group filtering |
| Practical topic/type grouping | PASS WITH SCOPE | Uses the source group taxonomy; no invented topic hierarchy |
| Searchable inventory with type/category filtering | PASS | React type/category selectors; static keyboard-efficient category dropdown |
| Practical → mapped source-item navigation | PASS | Candidate IDs retained and unmatched gaps remain visible |
| Practical card → candidate workbench | PASS | Both interfaces open the workbench with mapped candidate items |
| Source/evidence/status/safety disclosures | PASS | Reference-only, no-live-use, not-supplied, school-managed and hazard boundaries remain visible |
| Empty candidate workbench and Add/remove/reset | PASS | Candidate placeholder flow tested; reset and per-instance removal are covered by parity suite |
| Desktop drag, touch Add and repeated instances | PASS | Source ID and instance ID kept distinct; accidental duplicate Add avoided |
| Keyboard Inspect/Add/copy/Remove | PASS | Tab/Enter operation, visible focus and individually labelled removal tested |
| Narrow mobile layout and touch without drag | PASS WITH SCOPE | 390×844 touch-enabled browser emulation; no horizontal overflow; not physical-device certification |
| Mobile inventory and analysis bottom sheets | PASS (React app) | Fixed viewport-bottom dock; workbench remains primary; sheets collapse/expand one at a time; selecting an item reveals details; adding it closes the dock and returns to the workbench. Static dashboard retains its separate responsive layout and is not claimed to have identical bottom-sheet visuals |
| Scientific Analysis boundary | PASS | Missing validated domain solver is explicitly NOT_MODELLED; no calculated/predicted result is fabricated |
| Research Studio | PASS WITH SCOPE | React schema-v2 local draft, JSON import/export and planning checklist are tested; not cloud sync |
| Static ↔ React parity | PASS WITH DOCUMENTED DIFFERENCES | 13 parity groups pass; static Research Studio intentionally remains a generic roadmap placeholder; static dashboard does not duplicate the React fixed-bottom mobile sheet visual treatment |

## CI and reproducible evidence

### Current React code

- Final code commit: `d5b95afaa22f8d8bc8a40ad03511232cbb97c02c` (includes fixed-bottom dock hardening `1a8cf456f277603640dda183012ee58ab8c91650`).
- GitHub Actions: SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/44995645164.
- Strict TypeScript typecheck: PASS.
- Chromium installation: PASS.
- Production build and preview startup: PASS.
- Static preview startup for paired tests: PASS.
- React browser smoke: 37/37 groups PASS.
- Static ↔ React parity browser suite: 13/13 groups PASS.
- New mobile regression covers fixed viewport-bottom positioning, workbench-before-dock order, open/collapse/switch, one-sheet-at-a-time behavior, item selection revealing Analysis/Source Details, Add closing the dock and returning to the workbench, and subsequent touch Add-copy/remove.

### Static dashboard integrity and browser evidence

- Dashboard browser smoke: 9/9 groups PASS — https://github.com/snchat78-svg/LabVerse/actions/runs/44689290665.
- Dashboard integrity: SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/44689290820.
- Those static workflows are on the unchanged static-dashboard code head b43101101aa24f3a92d5eaeb94029fed5e98a5b8; the mobile bottom-sheet update changed the React app only.
- Documentation-only commits do not trigger the app workflow; test evidence above is tied to the tested code commits/run, not asserted for the later documentation commit.

## Explicitly outside Phase 4 / future gates

1. Real 3D assets and object transforms/connections: Phase 5. Current workbench is a 2D candidate placeholder list, not an actual 3D scene.
2. Validated experiment actions and deterministic runtime: Phase 6. No live simulated scientific state or experiment execution is present.
3. Chemistry, Physics and Biology domain solvers/results: Phases 7–9 and Phase 2 evidence/model contracts. Current Scientific Analysis correctly reports NOT_MODELLED.
4. Guided/free/exam workflows, viva, progress and learner recommendations: later learning/assessment scope (Phase 17).
5. Offline packs and cross-device sync: Phase 18 and later. Research Studio autosave/import/export is browser-local only.
6. Full WCAG/assistive-technology audit, low-end-device performance and physical Android certification: remain NOT CLAIMED and must be addressed in the explicit accessibility/performance and packaging/device QA phases (20 and 22) before a release claim.
7. Static Research Studio parity: documented as a deliberate starter-dashboard difference, not a completed static implementation.

## Dependency and phase status

| Phase | Status | Gate |
|---|---|---|
| 0 — planning baseline | DONE | Documentation baseline only |
| 1 / 1.1 — source audit and traceability | IN PROGRESS | Biology Kit Box page 9 and broader source/rights/safety/expert evidence remain open |
| 2 — scientific domain model/evidence contracts | BLOCKED | Wait for Phase 1 source/evidence gates |
| 3 — app foundation | PARTIAL | Typecheck/build/CI exist; broader architecture hardening remains |
| 4 — dashboard/workspace navigation | DONE | Phase-specific UI acceptance matrix above |
| 5 — real 3D workbench | NOT STARTED | Do not start ahead of Phase 1/2 gates |
| 6 — experiment runtime | NOT STARTED | Requires real model/action contracts |
| 7–9 — domain science engines | NOT STARTED | Require reviewed Phase 2 models and source evidence |

Phase 4 was a user-authorised UI-only track running in parallel with Phase 1. Closing its navigation scope does not waive Phase 1/2 dependencies or make Phase 5 eligible.

### Final mobile dock follow-up

The first fixed-bottom dock implementation let the open sheet overlay workbench instance controls. Commit `d5b95afaa22f8d8bc8a40ad03511232cbb97c02c` closes the dock after “Add selected item”, returning to the workbench. The final regression run above passes the fixed position, sheet toggles, selection, return-to-workbench and Add-copy/remove behavior.

## Next exact work

Resume the main active source task: Biology-with-microscope Kit Box, PDF page 9 (printed page 4). Recover an existing uploaded copy internally or retrieve the official NCERT attachment through an accessible route; compare byte count/SHA-256 before inspecting the page. The two historical user-upload hashes remain distinct, the catalogue row remains OCR-only and no repeat upload should be requested.
