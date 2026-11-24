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
