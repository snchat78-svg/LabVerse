# LabVerse React application foundation

This directory begins Phase 3 of the master roadmap. It is a separate React + TypeScript + Vite application and does not delete or replace the tested static prototype in `../dashboard/`.

## Stack

- React 19.3.1 + React DOM 19.3.1
- Vite 8.3.7 + `@vitejs/plugin-react` 6.3.0
- TypeScript 7.0.2
- Strict TypeScript settings and a production build target at repository `dist/`

These versions are pinned exactly. The Vite compatibility guide requires Node.js 20.19+ or 22.12+; CI uses Node 24. See the official [React versions](https://react.dev/versions), [Vite release notes](https://vite.dev/releases), [Vite getting started](https://vite.dev/guide/) and npm package version records.

## Commands

Run from this directory:

- `npm install --no-package-lock`
- `npm run typecheck`
- `npm run build`
- `npm run dev`

GitHub Actions runs install, typecheck and build. No local Python, Node or Android SDK is required for the current repository-managed checks.

## First foundation scope

- React app entry, strict TypeScript config, Vite configuration and reusable subject overview.
- Subject selection for Physics, Chemistry and Biology.
- Class XI/XII filter.
- Searchable apparatus/material inventory sourced from the existing single dashboard inventory JSON.
- Practical-to-candidate-source-item navigation and candidate placeholder workbench setup.
- Functional workspace switching across Learning Lab, Virtual Experiment Lab, Scientific Analysis and Research Studio.
- Research Studio structured local draft autosave, reload restore, explicit clear, versioned JSON export/import and non-executable protocol-planning metadata for question, hypothesis, provenance, candidate materials/equipment, sample plan, repeats, measurements, conditions, analysis and safety-review tracking.
- Scientific Analysis readiness panel that explicitly shows NOT_MODELLED until a validated engine exists.
- Visible Chemistry reference-only/no-live-use and Biology school-managed/not-supplied-with-kit labels.
- Task catalogue and selected-item source/evidence/safety information.

## Current implementation and remaining boundaries

The React app now includes the four workspace destinations, class XI/XII filtering, inventory type/category filters, subject-specific source coverage, practical-to-candidate-item navigation, explicit unmatched-task explanations and a candidate-only workbench. The selected practical's mapped candidate items can be added together; duplicate item IDs are not added twice.

The Biology with-microscope catalogue now shows its item-level visual audit state. The current GitHub evidence records 25 of 175 physical item detail pages as visually checked against a user-uploaded candidate PDF; the other 150 remain OCR/index-only. This is not official NCERT byte authentication, procurement confirmation or scientific approval.

Research Studio drafts persist in browser local storage and can be exported/imported as validated version-2 JSON backup files. Schema-version-1 drafts are migrated without losing the original six fields. Protocol metadata records user planning notes only; safety status is not an approval, methods are not executed and files are not uploaded or cloud-synced. The Virtual Experiment Lab is still a placeholder workbench, not a real 3D environment. Scientific Analysis displays NOT_MODELLED where no validated solver exists. The static dashboard is preserved for parity review.

Still not implemented: original/licensed 3D assets and manipulation, deterministic experiment runtime, validated Chemistry/Physics/Biology solvers, reproducible notebook and data pipeline, offline content-pack persistence, full expert/safety/source-rights sign-off, and Android packaging.


## Phase 4 work-unit — candidate workbench drag/drop (2026-11-12)

- Desktop inventory items can be dragged into the candidate workbench.
- Duplicate source IDs are ignored; individual placeholders can be removed or the whole workbench cleared.
- Touch/mobile fallback remains the select-item plus “Add selected item” action.
- This is a 2D catalogue-placeholder interaction only, not 3D, apparatus connectivity, an executable procedure or a scientific result.


## Current browser acceptance — 2026-11-20

- React checks: https://github.com/snchat78-svg/LabVerse/actions/runs/44688375282 — strict TypeScript, production build and preview PASS; React browser smoke **36/36 groups PASS**.
- Cross-UI parity: **13/13 groups PASS**. The same job covers shared catalogue records, subject/class/group filtering, task-to-source mapping, direct practical-to-workbench navigation, safety disclosures, multi-instance candidate behavior, keyboard operation and responsive layout.
- Static dashboard: https://github.com/snchat78-svg/LabVerse/actions/runs/44688375294 — integrity PASS; https://github.com/snchat78-svg/LabVerse/actions/runs/44688375256 — desktop/mobile browser smoke **9/9 groups PASS**.

Practical-group options derive only from the actual `group` field in `dashboard/data/inventory.json` (for example Physics EXPERIMENT / ACTIVITY / PROJECT). No new topic taxonomy is inferred. Class and group filters operate together. Practical cards provide a direct route to the Virtual Experiment Lab with mapped source records inserted as candidate placeholders.

React's ordinary Add action is idempotent; the explicit Add another instance action creates a separate candidate with a distinct instance ID. The static prototype creates a separate instance on each Add. Both preserve the original source ID and support per-instance removal.

The 390×844 touch-enabled Chromium test is mobile emulation, not certification on a physical Android phone. Keyboard tests cover selected inventory/workbench flows, not a complete WCAG or assistive-technology audit. Static Research Studio remains a roadmap placeholder; React Research Studio contains the structured schema-v2 local workflow. No cloud synchronization is claimed.

The workbench still displays 2D catalogue placeholders, not actual 3D apparatus. Scientific Analysis stays NOT_MODELLED until a validated domain model exists. Phase 4 remains IN PROGRESS because the mobile workbench tray and analysis panel still need the collapsible bottom-sheet behavior specified in `docs/UI_UX_SPEC.md`. Phase 1/1.1 remains the main active phase and Phase 2 science remains blocked.
