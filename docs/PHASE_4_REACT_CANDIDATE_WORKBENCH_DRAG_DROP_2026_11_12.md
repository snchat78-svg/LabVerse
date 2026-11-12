# Phase 4 — React candidate workbench drag/drop — 2026-11-12

## Goal and scope

Close one concrete React/static-preview parity gap: move catalogue items into the Virtual Experiment Lab candidate workbench by desktop drag-and-drop while preserving a tap/select workflow for touch devices.

## Delivered

- Inventory items are draggable only when Virtual Experiment Lab is selected.
- Drop adds the source item as a candidate placeholder.
- Duplicate source IDs are ignored.
- Each placeholder can be removed independently; Clear workbench remains available.
- The selected-item Add button remains the touch/mobile fallback.
- Drop target has a visible hover state and placeholder-only labelling.

## Validation

The React app GitHub Actions workflow runs TypeScript typecheck, Playwright browser smoke and Vite production build. Smoke coverage checks drag/drop, duplicate suppression and individual removal. Final CI evidence will be recorded in WORK_LOG and PHASE_STATE.

## Boundaries

This is Phase 4 presentation/workbench parity only. It does not close Phase 1, unblock Phase 2, create 3D geometry, implement experiment runtime, or release scientific solvers. Catalogue items remain candidate placeholders, not verified kit assemblies or physical-use instructions.
