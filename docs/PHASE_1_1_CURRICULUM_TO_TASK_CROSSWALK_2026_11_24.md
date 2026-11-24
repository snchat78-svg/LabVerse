# Phase 1.1 — RBSE curriculum-to-task crosswalk audit (2026-11-24)

## Result

Built a 158-row crosswalk joining the two Phase 1.1 source indices to the existing 171-row RBSE task traceability index. This is a task-identity crosswalk, **not an approved inventory/equipment join**.

| Status | Rows |
|---|---:|
| EXACT_STABLE_ID_MATCH | 46 |
| EXACT_ID_NORMALIZATION_MATCH | 27 |
| EXACT_TITLE_MATCH_REVIEW_ID | 6 |
| GROUP_LEVEL_ONLY | 18 |
| PENDING_REVIEW | 61 |
| **Total** | **158** |

## Method and boundaries

- Inputs: the 65-row Class XI Physics/Biology index, the 93-row remaining-stream index, and `data/catalogues/rbse_six_pack_task_index_traceability.csv` (171 task rows).
- Exact stable-ID matches use identical IDs. Normalized-ID matches remove punctuation only and require a unique target. Exact-title matches normalize case/punctuation/spacing and require a unique target; they remain flagged for ID review.
- Chemistry section/group records and Biology spotting groups remain `GROUP_LEVEL_ONLY` where no unique task identity exists.
- Candidate source item IDs and candidate match status are copied only from the linked existing traceability row. They remain candidate evidence; they are not expert verified, procurement verified, or approved catalogue joins.
- `catalogue_item_ids_promotion_status` remains `NOT_PROMOTED` for every row. No inventory IDs were fabricated or written into the 147-row Phase 1.2 register.
- The separate 147-row Phase 1.2 register still needs a deduplication/reconciliation pass against the 158-row index; row counts must not be added together as unique practical counts.
- No procedures, quantities, concentrations, hazard permissions, safety approvals, measurements, or scientific results were created.

## Next work

1. Reconcile the 147-row Phase 1.2 register to these 158 stable curriculum IDs and preserve alternatives/one-to-many group relationships.
2. Review the 61 pending task identities and the 6 title-only candidates.
3. For confirmed task identities, inspect the candidate item IDs against the live inventory and source records; only then classify exact item joins, possible matches, or evidence-backed gaps.
4. Keep Phase 2 blocked pending method provenance, rights and hazard review. Real 3D/runtime remain gated.

## Verification

- Input row counts read from GitHub: 65 + 93 source rows; 171 task traceability rows.
- Output rows generated: 158; status totals sum to 158.
- CSV structure generated with quoted UTF-8 fields. GitHub read-back verification is recorded after commit.
- This is a data/documentation audit; no application code or CI run is claimed.
