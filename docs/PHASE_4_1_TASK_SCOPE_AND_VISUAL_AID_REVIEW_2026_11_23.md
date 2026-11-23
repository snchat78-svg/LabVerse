# Phase 4.1 — Task-scope and Biology visual-aid review (2026-11-23)

## Work completed
Added `data/catalogues/stockroom_scope_and_visual_aid_review_2026_11_23.csv`, a 276-row review register: all 228 records without a current RBSE practical-task link plus all 50 Biology visual-aid records. Rows retain original IDs, names, record types, raw categories, source labels, evidence status and existing task links. Every decision remains `PENDING_DOMAIN_AND_SOURCE_REVIEW`.

## Findings from the current 515-row audit snapshot
- The 228 records without a current task link comprise 182 reagent-label records (124 Chemistry historical labels + 58 Biology manual labels) and 46 non-reagent records.
- Therefore, absence of a direct RBSE task link must not be treated as a defect: the 182 reagent labels are source-catalogue/support candidates whose exact edition, identity, formulation and task applicability still require evidence review.
- The remaining 46 non-reagent records are scope-review candidates: 10 Physics apparatus, 8 Chemistry apparatus, 20 Biology apparatus, 2 Biology visual aids, 3 Biology specimens and 3 Biology permanent slides. Their disposition must be established from source pages and subject review; no task was invented.
- The 50 Biology visual aids remain a separate record type, not specimens or permanent slides. 48 currently have task links and 2 (Mitosis and Meiosis cards) do not. Evidence is uneven: one visual card (item 84) is marked index-confirmed with its visual sample inspected; the other 49 are index-only in this audit. Index presence is not individual-page verification.
- A grouping check over the 515 rows found no raw subject/category group containing mixed `record_type` values in this snapshot. This is a data consistency observation, not proof that taxonomy placement is scientifically approved.
- The four unresolved raw category groups and all 135 proposed cabinet mappings remain open. No source record, raw category, task mapping, safety statement or cabinet approval was changed.

## Review semantics
The CSV's proposed dispositions are deliberately non-authoritative:
- Reagent labels: possible source-catalogue support/research references, not automatically missing practical links and not permission to handle/use.
- Other unlinked items: supporting stock/research candidates versus a possible crosswalk gap, pending domain review.
- Visual aids: retain `visual_aid` separately from specimens/slides; verify individual source pages before asset work.

## Gates still open
1. Obtain source-page-level provenance for each item; do not substitute a practical task's page range for the item's own page.
2. Resolve the 46 non-reagent unlinked records and the 2 unlinked visual cards using source evidence and subject review.
3. Verify the 49 index-only visual cards at individual-page level; retain the one item-84 inspection distinction.
4. Complete cabinet taxonomy and the four unresolved categories with expert decisions.
5. Reconcile safety metadata and asset licensing/provenance before real 3D assets or executable actions.

Phase 4.1 remains **IN PROGRESS**. Phase 1/1.1 remains **IN PROGRESS**, Phase 2 remains **BLOCKED**, and Phase 5 real 3D remains **NOT STARTED**. No CI run was triggered because this commit changes audit data and documentation only; no application code or tests changed.
