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


## Touch fallback acceptance

The React app Playwright suite now opens a separate 390×844 CSS-pixel Chromium context with mobile emulation and touch enabled. It confirms a user can select a Physics inventory item and add it to the Virtual Experiment Lab by tapping, without drag gestures; duplicate insertion and mobile horizontal overflow are checked. This is emulated browser coverage, not certification on a physical Android device. Latest CI: https://github.com/snchat78-svg/LabVerse/actions/runs/43226264684 (25/25 browser groups PASS).


## Keyboard accessibility

Interactive controls include visible `:focus-visible` outlines. Playwright covers a keyboard-only inventory-to-workbench flow using Tab and Enter to select, add and remove a candidate item. Latest CI: https://github.com/snchat78-svg/LabVerse/actions/runs/43226979927 (26/26 browser groups PASS). This is targeted keyboard-flow coverage, not a complete WCAG audit.


## Research Studio draft persistence

Research Studio drafts autosave in browser local storage using schema version 1, restore after reload, and can be cleared explicitly. The six text fields are capped at 5,000 characters and validated on read. Unsupported/malformed schema is not loaded as a current draft. Storage is local to the current browser profile only; there is no cloud sync or server backup. Playwright checks save, reload restore, clear and schema rejection. CI: https://github.com/snchat78-svg/LabVerse/actions/runs/43228437757 (28/28 browser groups PASS).


## Research Studio JSON portability

Validated JSON export/import is implemented and CI-accepted. Export includes a schema-version-1 envelope and all six fields. Import validates timestamp, schema version, required field types, the 5,000-character field limit and 32 KiB file ceiling. Unsupported, malformed and oversized input is rejected without replacing the current draft. Playwright verifies the downloaded file and clear/import round-trip. CI: https://github.com/snchat78-svg/LabVerse/actions/runs/44245446653 (31/31 browser groups PASS). This is manual file portability, not automated cross-device sync.


## Research Studio protocol-planning metadata — schema v2

The current implementation adds 11 structured metadata fields to the original six research-question fields. Older schema-v1 drafts migrate with their six existing fields preserved. Planned repeats are optional and, when supplied, must be an integer from 1 to 100. Each text field is limited to 5,000 characters; JSON imports are limited to 1 MiB. The safety-review state is a user-recorded tracking label only, not a safety approval. The schema-v2 protocol-planning implementation is CI-accepted: https://github.com/snchat78-svg/LabVerse/actions/runs/44674346187 (33/33 browser groups PASS).


## Research Studio protocol-readiness checklist

A live checklist marks whether planning notes are present for objective, method/source provenance, candidate equipment/materials, sample plan, measurement plan, environment, analysis plan and stopping rule. It separately displays optional repeats and the safety-review tracking status. The checklist reports text presence only; it does not validate science, data sources, units, sample adequacy, safety or permission to execute. CI: https://github.com/snchat78-svg/LabVerse/actions/runs/44675277209 (35/35 browser groups PASS).
