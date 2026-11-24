# LabVerse — Item-level Stockroom Reachability Audit (2026-11-24)

## Scope and method
Generated from `dashboard/data/inventory.json` and `data/catalogues/stockroom_category_taxonomy_2026_11_23.csv`. Every current Physics, Chemistry and Biology inventory and reagent row was joined to the proposed subject/category cabinet taxonomy using the exact `subject + source_category` pair. No source row, ID, category or evidence label was rewritten.

## Results
- Rows audited: **515** (Physics inventory 105, Chemistry inventory 53 + reagent references 124, Biology inventory 175 + reagent references 58).
- Taxonomy categories: **135**.
- Unique non-empty item IDs: **515**.
- Duplicate ID groups: **0**.
- Rows with a missing taxonomy mapping or explicitly unresolved cabinet: **5**.
- The detailed row-level result is `data/catalogues/stockroom_item_level_reachability_audit_2026_11_24.csv`.

## Unresolved category rows
- `physics` — `ALIGNMENT` — `REVIEW REQUIRED` — `PROPOSED_NEEDS_REVIEW`
- `physics` — `LIQUID_TRANSFER` — `REVIEW REQUIRED` — `PROPOSED_NEEDS_REVIEW`
- `biology` — `DATA_RECORDING` — `REVIEW REQUIRED` — `PROPOSED_NEEDS_REVIEW`
- `biology` — `SAMPLE_CONTAINER` — `REVIEW REQUIRED` — `PROPOSED_NEEDS_REVIEW`

## Interpretation
A mapped cabinet is a proposed navigation destination only; it does not mean the cabinet UX has been approved, an item is physically available, or that the item is safe, licensed, modelled in 3D or executable. The detailed CSV retains original source/evidence/procurement fields and explicitly records these boundaries. Reagent references remain separate from apparatus inventory; historical reagent labels are not current kit stock.

## Next actions
1. Resolve each remaining unmapped category with source-item inspection and subject-level taxonomy review; do not infer a cabinet solely from a category name.
2. Review item-level duplicate/variant identity, class/session applicability, and source provenance; preserve alternatives.
3. Only after taxonomy approval, connect the audit to the React stockroom and add tests that every source row is reachable exactly once through All stock and at least one cabinet, without duplicate catalogue records.
4. Continue asset rights, hazard and action-contract work as separate gates. Phase 4.1 remains IN PROGRESS until cabinet mappings and item-level reachability tests pass.


## Follow-up — proposed cabinet destinations added (2026-11-24)

The first audit identified four category keys with no proposed cabinet. Item inspection identified the relevant records: Physics Spirit level and Plumb line; Physics Glass dropper with rubber bulb; Biology Graph Paper; Biology Plastic Petri Dish. The taxonomy now proposes Alignment & Levelling, Liquid Handling & Transfer, Data & Recording, and Samples & Containers respectively. These are item-led navigation proposals only and remain `PROPOSED_NEEDS_REVIEW`.

Updated results: 515 rows, 515 unique IDs, 135 taxonomy rows, zero missing category mapping rows. The row-level CSV records all 515 mappings and retains the explicit non-claims. Next is React integration and automated all-row reachability testing; Phase 4.1 is not complete yet.


## 2026-11-24 — Phase 4.1 cabinet integration CI verified

- GitHub Actions SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/45365935422 (run #80, commit `93b1fcb8c2d1e2f9d2fa84ab1b553273f1c6777d`). TypeScript typecheck PASS; production build PASS; React browser smoke PASS including Measurement & Metrology cabinet, Alignment & Levelling cabinet (2 tools), and all 105 Physics rows in All stock; static dashboard ↔ React parity PASS.
- This verifies the current React integration and tested Physics paths only. It does not approve all 135 taxonomy proposals, test every Chemistry/Biology cabinet path, certify procurement/safety/rights, or implement 3D assets/runtime.
- Phase 4.1 remains IN PROGRESS. Next: add equivalent Chemistry and Biology cabinet/All stock reachability tests and automated all-515-row uniqueness/reachability assertions; subject-review the proposed cabinet taxonomy before closing the phase.


## 2026-11-24 — Phase 4.1 three-subject cabinet smoke verification SUCCESS

- GitHub Actions SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/45366247565 (run #81, commit `89807d49b8c5a13a9e7f5bee9cc45e24dcacf460`). TypeScript typecheck PASS; production build PASS; React browser smoke **38 groups PASS**; static↔React parity **13 groups PASS**.
- Smoke coverage now exercises Physics Measurement & Metrology, Alignment & Levelling and 105-row All stock; Chemistry Glassware & Volumetric Ware and 177-row All stock; Biology Data & Recording, Samples & Containers and 233-row All stock. Biology/chemistry tests retain reagent and safety disclosure checks.
- A Vite bundle-size warning remains (main JS chunk ~586 kB before gzip); build succeeds. Track code-splitting/performance as a follow-up, not a release failure.
- This verifies current navigation/test paths, not every item-to-task relationship, expert approval of all taxonomy proposals, procurement, safety/rights, 3D models or scientific runtime. Phase 4.1 remains IN PROGRESS pending full taxonomy review and item-level exactly-once/reachability acceptance across all 515 records.


## 2026-11-24 — Expanded three-subject cabinet tests verified

- GitHub Actions run #81 SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/45366247565 (commit `89807d49b8c5a13a9e7f5bee9cc45e24dcacf460`). TypeScript typecheck PASS; production build PASS; React browser smoke 38 groups PASS; static↔React parity 13 groups PASS.
- Additional smoke checks: Physics All stock 105; Chemistry Glassware & Volumetric Ware 13 and All stock 177; Biology Data & Recording (Graph Paper), Samples & Containers (Petri Dish), All stock 233. Run log confirms the three-subject paths passed.
- Remaining: exhaustive DOM-level exactly-once proof for every one of 515 rows and subject review of proposed cabinet taxonomy. Phase 4.1 remains IN PROGRESS; Phase 5 asset manifest/real 3D is not started until the Phase 4.1 gate closes.


## 2026-11-24 — Cross-subject cabinet reachability smoke tests PASS

- GitHub Actions run #81 SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/45366247565 (commit `89807d49b8c5a13a9e7f5bee9cc45e24dcacf460`). TypeScript typecheck, production build, React browser smoke and static dashboard ↔ React parity all passed.
- Browser smoke now verifies Physics Measurement & Metrology, Alignment & Levelling and all 105 Physics rows; Chemistry Glassware & Volumetric Ware (13 rows) and All stock (177 apparatus + reagent-reference rows); Biology Data & Recording (Graph Paper), Samples & Containers (Petri Dish) and All stock (233 catalogue + reagent-reference rows).
- This verifies these selected cabinet routes and current All stock totals in the UI, not every cabinet row individually or expert approval of all taxonomy proposals. Chemistry reagent references and Biology manual reagent references are not confirmed physical kit stock.
- Phase 4.1 remains IN PROGRESS. Next gate: add a data-driven automated assertion covering all 515 IDs (exactly once in All stock and one mapped cabinet), review taxonomy proposals across all 135 category rows, then only close Phase 4.1 after that gate passes.
