# Phase 4 — Static dashboard ↔ React parity audit

**Updated:** 2026-11-20  
**Status:** Core cross-UI acceptance VERIFIED; overall Phase 4 remains IN PROGRESS.

Both interfaces consume the same committed `dashboard/data/inventory.json` records (static at runtime, React at build time).

## Current parity outcome

The matrix is `data/catalogues/phase4_static_react_parity_2026_11_20.csv`. Paired Chromium tests cover three subjects and 171 task-index rows; class and source-backed practical-group filters; inventory search/type/category filters; task-to-source mapping; direct practical-card navigation into Virtual Experiment Lab with mapped candidate items; Chemistry reference-only/no-live-use and Biology school-managed/not-supplied disclosures; repeated candidate instances with stable source/instance IDs and per-instance removal; keyboard-only Inspect/Add/copy/Remove; 390×844 touch emulation without drag; NOT_MODELLED/no-result boundary; documented static/React Research Studio difference; responsive width and browser runtime errors.

## Current CI evidence

- React workflow: **SUCCESS** — https://github.com/snchat78-svg/LabVerse/actions/runs/44688375282; TypeScript/build/preview PASS; React browser smoke **36/36 groups PASS**; static ↔ React parity **13/13 groups PASS**.
- Dashboard integrity: **SUCCESS** — https://github.com/snchat78-svg/LabVerse/actions/runs/44688375294.
- Static desktop/mobile smoke: **SUCCESS, 9/9 groups PASS** — https://github.com/snchat78-svg/LabVerse/actions/runs/44688375256.

## Differences documented, not hidden

1. Static has generic roadmap cards for non-learning workspace entry points. React provides subject-scoped workspace screens.
2. Static Research Studio remains a roadmap placeholder; React has local schema-v2 structured planning, validated JSON import/export and a non-approval checklist.
3. Static repeated Add creates a new candidate each time. React ordinary Add is idempotent; explicit Add another instance creates a separate instance.
4. Both workbenches hold 2D catalogue placeholders, not production 3D assets. Neither executes an experiment or generates scientific results.

## Exit-gate review result

Core catalogue, filtering, source navigation, safety disclosure, candidate-workbench interaction and paired keyboard/touch-emulation checks pass. However, `docs/UI_UX_SPEC.md` requires the mobile tray and analysis panel to behave as collapsible bottom sheets. That interaction is not yet implemented in either interface.

The bounded parity work-unit is accepted, but **Phase 4 is not DONE**. The next UI acceptance item is mobile collapsible bottom-sheet behavior. Full WCAG/assistive-technology review and physical Android device testing remain unclaimed. Guided/Free/Exam, progress and offline-pack features belong to later roadmap phases; real 3D, experiment runtime and scientific engines remain Phase 5/6/7–9 work and cannot start ahead of Phase 1/1.1 and Phase 2 dependency gates.
