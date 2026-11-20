# Phase 4 — Static Dashboard ↔ React parity audit — 2026-11-20

## Purpose and scope

Compare the preserved dependency-free static dashboard with the React application before Phase 4 is closed. The comparison covers subject navigation, task index, inventory access, source/evidence and safety details, candidate placeholder workbench, analysis boundaries and Research Studio.

## Evidence reviewed

- Static shell: `dashboard/index.html`; behavior: `dashboard/assets/dashboard.js`; documentation: `dashboard/README.md`; existing static browser smoke: `dashboard/tests/smoke.mjs`.
- React shell: `app/src/App.tsx`; browser smoke: `app/tests/smoke.mjs`.
- Both UI paths point to the same committed source data: static dashboard fetches `dashboard/data/inventory.json`; React imports that exact JSON file.
- The machine-readable matrix is `data/catalogues/phase4_static_react_parity_2026_11_20.csv`.

## Main result

The core first-pack capabilities have corresponding implementations in both UIs: three subject directions, 171 RBSE task-index records, class filters, searchable catalogue, task-to-source navigation, safety/reference-only disclosures, candidate placeholder bench and a no-results scientific analysis boundary.

React is more advanced in several places: it displays explicit task traceability coverage and unresolved links, source detail fields and Biology visual-audit information, a subject-scoped Research Studio with schema-v2 protocol metadata and local JSON portability, and keyboard-only workbench acceptance.

There are two intentional scope/UI differences:
1. Static dashboard presents generic roadmap cards for standalone workspace entry points; React asks the learner to choose a subject before entering a workspace and contains actual bounded subject workspace screens.
2. Static bench permits repeated instances of a source item; React suppresses duplicate catalogue IDs. This is recorded as a known gap because real apparatus setups can need multiple identical items. A future quantity/instance model should distinguish intentional multiplicity from accidental duplicate taps.

## Automated cross-UI acceptance added

The new `app/tests/parity.mjs` opens both local previews in the same Chromium run and compares:
- the shared inventory JSON payload and subject/record/task totals;
- the four workspace destinations;
- Class XI Physics task count;
- Vernier-caliper inventory/source identity and practical-to-source navigation;
- Chemistry no-live-use and Biology not-supplied reagent disclosures;
- the documented difference in repeated bench instances;
- Research Studio placeholder versus structured React implementation;
- NOT_MODELLED/no-scientific-results boundary;
- 390px responsive width and browser runtime errors.

GitHub Actions now starts the static dashboard preview alongside the React preview and runs this parity suite after the React smoke tests.

## Verification

- Status: pending the cross-UI CI run for this report's code commit.
- Existing React suite remains required.
- This audit does not validate real 3D, a scientific solver, live physical method, procurement equivalence, safety approval or physical Android behavior.

## Phase boundary and next action

Phase 4 remains IN PROGRESS. Fix or explicitly scope the repeated-item/quantity gap, complete the static-preview accessibility/responsive review, and keep the static and React behavior boundaries documented before advancing to Phase 5.
