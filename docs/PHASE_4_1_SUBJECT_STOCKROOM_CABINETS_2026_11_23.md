# Phase 4.1 — Subject stockroom cabinet navigation (2026-11-23)

## Product requirement
The canonical LabVerse goal is a subject-wise Physics/Chemistry/Biology stockroom, organised as cabinets/shelves, connected to a free-assembly 3D workbench. Fixed practical templates are optional starting points, not the product's limit. The permanent product brief is `docs/PRODUCT_VISION_STOCKROOM_AND_3D_WORKBENCH.md`.

## Existing read-model audit
The existing `dashboard/data/inventory.json` is the shared source of truth:
- Physics: 105 apparatus records, 80 task-index records.
- Chemistry: 53 apparatus/material records plus 124 historical reagent labels, 41 task-index records.
- Biology: 175 apparatus/specimen/slide/visual records plus 58 manual reagent labels, 50 task-index records.
- Total: 171 task-index rows and 515 catalogue/reagent rows. These are not claims of current procurement, fully authenticated sources, safe physical handling or existing 3D models.

## Implemented
- Added responsive category-cabinet shelf navigation to the React subject inventory.
- Each shelf is generated from the active subject's existing inventory/reagent records; counts are computed from the same records, so there is no second catalogue or duplicated stock.
- Added an All stock shelf and category shelf buttons. Selecting a shelf clears stale search text and selects the existing category filter; the existing search/type filters and item source identities remain intact.
- Added accessible button semantics and `aria-pressed` state.
- Added Playwright smoke coverage for Physics cabinet listing, measurement shelf filtering and return to All stock.
- Code commits: App.tsx `5cd03dd53c2d2a243b0a7ebea77919ffa4089b41`; styles `2e2d9f71f6b65f5963044d619b540294b53fee79`; test `6b876b63b296d78b6e84fc1b5a6742a638d786b1`.

## Explicit not-yet-done boundaries
- These shelves are catalogue navigation, not a completed 3D cupboard or 3D object library.
- The workbench still uses candidate placeholders; no live experiment, heating/chemical reaction, measurement solver or scientific outcome is claimed.
- Dark/black 3D scene, actual licensed 3D assets, camera controls, object manipulation, per-asset on/off actions and deterministic experiment runtime remain future implementation gates.
- Existing source and hazard limitations remain. A source-listed chemical is not automatically available or approved for real handling.

## Verification
The React app workflow is triggered by changes under `app/**`; final workflow result must be recorded after it completes. Local tool session cannot claim browser test pass before GitHub Actions reports it.

## Next exact work unit
Extend cabinet browsing into a complete inventory taxonomy and item-level completeness audit across all three subjects: define canonical cabinet/category taxonomy, reconcile current categories (including mixed and historical categories), verify every catalogue record is reachable, identify duplicate/uncategorised/unknown rows without deleting them, and attach class/task/source/asset-readiness links. Then proceed to the first real 3D workbench only in the order permitted by source, rights and hazard gates.

## Taxonomy groundwork added in the same work session

- Added `data/catalogues/stockroom_category_taxonomy_2026_11_23.csv` with all **135 existing subject/category combinations**: Physics 60, Chemistry 30, Biology 45.
- Each mapping preserves the raw source category and its item count; proposed cabinet grouping is explicitly `PROPOSED_NEEDS_REVIEW`, not a source fact or final mapping.
- Four categories are deliberately unmapped pending human/domain review: Physics `ALIGNMENT` (2), Physics `LIQUID_TRANSFER` (1), Biology `DATA_RECORDING` (1), Biology `SAMPLE_CONTAINER` (1).
- No catalogue item or source category was deleted or rewritten. Next work must validate every item row against the proposed shelf, correct composite/ambiguous placements and make every item reachable.
