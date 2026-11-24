# Phase 1.1 — Candidate item inventory-presence audit (2026-11-24)

## Scope and result

A bulk, deterministic ID-presence check was run across the 158-row curriculum-to-task crosswalk, the 171-row task traceability index, and the current dashboard inventory catalogue.

- Crosswalk records inspected: **158**
- Candidate item-ID references expanded: **514**
- Unique candidate item IDs: **128**
- Candidate IDs found in the dashboard inventory: **514**
- Candidate IDs not found: **0**
- Task-index rows available: **171**
- Dashboard catalogue IDs indexed (apparatus plus reagent collections): **515**

## Curriculum/task join statuses (crosswalk-level)

- `EXACT_STABLE_ID_MATCH`: 46
- `EXACT_ID_NORMALIZATION_MATCH`: 27
- `PENDING_REVIEW`: 61
- `EXACT_TITLE_MATCH_REVIEW_ID`: 6
- `GROUP_LEVEL_ONLY`: 18

## Interpretation

The audit establishes only that the referenced candidate IDs currently exist in the dashboard catalogue. It does **not** prove that an item is required for the linked RBSE practical, physically present in a school laboratory, procured, safe for a particular procedure, rights-cleared, or expert-approved.

PDF-derived curriculum records and page references remain the source authority for what RBSE lists. Existing candidate item associations remain candidate associations until task-level expert review. In particular, OCR/manual-origin inventory labels and their procurement/evidence statuses are preserved as recorded; they are not promoted to procurement-verified stock.

## Verification boundaries preserved

- No `CANDIDATE_MATCH_NOT_EXPERT_VERIFIED` value was promoted to expert verified.
- No safety, rights, procurement, or physical-stock status was upgraded.
- Curriculum/task join statuses were not overwritten by this ID lookup.
- Missing source detail remains an explicit gap rather than an inferred match.

## Output

- `data/catalogues/rbse_curriculum_candidate_item_inventory_presence_audit_2026_11_24.csv` — one row per candidate item-ID reference, with curriculum/task/source and inventory-presence fields.
- Source inputs: `data/curriculum/rbse_2026_2027_curriculum_to_task_crosswalk_2026_11_24.csv`, `data/catalogues/rbse_six_pack_task_index_traceability.csv`, and `dashboard/data/inventory.json`.

## Next parallel batch

1. Review all exact-ID and normalized-ID curriculum/task joins against the corresponding PDF pages; keep ambiguous/group-only joins separate.
2. Resolve remaining pending/title/group-level joins without collapsing Chemistry alternatives or optional practicals.
3. Run subject-wise candidate-item relevance review using each practical's actual PDF wording and the item detail/evidence fields.
4. Keep Phase 2 evidence gates and Phase 5/6 implementation gates unchanged until their own evidence and tests exist.
