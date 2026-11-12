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


## Final acceptance — PASS

- GitHub Actions React app check: SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/43226264684.
- Dependency installation: PASS.
- TypeScript typecheck: PASS.
- Chromium installation: PASS.
- Vite production build: PASS.
- Production preview startup: PASS.
- Playwright browser smoke: **25/25 groups PASS**.
- Dedicated touch context: 390×844 CSS px, `isMobile=true`, `hasTouch=true`, `navigator.maxTouchPoints > 0`; user selected a Physics Vernier caliper and added it without a drag event. Repeated tap/Add did not duplicate the source ID; mobile horizontal overflow check passed.
- Test commit: 6dfd55e9b6677c6fd8d8acb4283438eada815445.
- This closes the drag/drop plus touch fallback work-unit, not Phase 4 itself. The workbench remains a 2D candidate placeholder, not real 3D or an executable science engine.


## Keyboard accessibility acceptance — PASS

- Code/test commit: 02afde9294266008a1e0a809bf8f4979ea43bd37.
- Added clear `:focus-visible` outlines to interactive controls, with a dedicated search-field focus rule.
- Keyboard-only Playwright flow tabs from the inventory search through item-type and category filters to the Vernier caliper item; Enter selects it; Tab reaches “Add selected item”; Enter adds it; Tab reaches its Remove control; Enter removes it.
- The test checks that the focused inventory item and Add button expose a visible outline.
- Latest React app CI: SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/43226979927; TypeScript typecheck PASS; Vite production build PASS; Playwright browser smoke **26/26 groups PASS**.
- This validates the browser interaction and does not certify formal WCAG conformance.
