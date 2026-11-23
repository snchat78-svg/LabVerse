# Phase 4.1 — Category membership review register (2026-11-23)

## Work performed
- Re-read the canonical product brief, current phase state, roadmap, next-work register, source taxonomy and inventory read-model.
- Joined every one of the 135 subject/category taxonomy entries to the actual member records in `dashboard/data/inventory.json`.
- Preserved all raw categories, IDs, member names, record types and evidence-state labels.
- Added `data/catalogues/stockroom_category_membership_review_2026_11_23.csv`, one row per subject/category combination, including member IDs/names, current proposal, membership consistency notes, a desk-review candidate and the required expert decision.

## Reconciliation
- Category combinations reviewed: **135/135**.
- Underlying member rows represented: **515/515**.
- The register is a complete membership crosswalk for the current snapshot. It is not an approval of cabinet mappings.
- All recommendations carry `DESK_REVIEW_CANDIDATE_NOT_DOMAIN_APPROVED`. No source category or catalogue record was changed.

## Four previously unmapped category decisions — provisional only
| Subject/category | Actual member records | Desk-review candidate | Why it remains provisional |
|---|---|---|---|
| Physics / ALIGNMENT | Spirit level; Plumb line (small size) | Mechanics, Oscillations & Waves | Alignment/verticality tools; domain reviewer should confirm whether mechanics or a dedicated alignment/support shelf is more suitable |
| Physics / LIQUID_TRANSFER | Glass dropper with rubber bulb | Fluids & Materials | Liquid-transfer tool; no dedicated Physics transfer shelf currently exists |
| Biology / DATA_RECORDING | Graph Paper | Visual Aids | Observation/recording support; a dedicated measurement/recording shelf may be more discoverable |
| Biology / SAMPLE_CONTAINER | Plastic Petri Dish | Storage & Lab Support | Sample/culture container; confirm whether it belongs in a dedicated sample-preparation/container shelf |

The four suggestions are navigation candidates based on the member names/details, not scientific classification, safe-use permission or source authentication. The raw `ALIGNMENT`, `LIQUID_TRANSFER`, `DATA_RECORDING` and `SAMPLE_CONTAINER` labels remain intact in the source taxonomy and item audit.

## Important scope findings
- Biology has a separate `VISUAL_CARD` group with 50 visual-aid records; these are not specimens or slides and remain their own record type.
- The taxonomy membership crosswalk exposes source-evidence limits but does not repair them. OCR/index-only rows remain at their original evidence state.
- Mixed record types and broad source labels must be reviewed before any shelf can be treated as a definitive science taxonomy.
- No asset, 3D model, physical procurement status, safety approval, scientific action or runtime capability is created by this review.

## Next work
1. Perform a second pass across category groups with mixed types, ambiguous names or source-evidence limitations.
2. Domain-review and approve/revise/reject the four provisional cabinet candidates; only then update the authoritative taxonomy and regenerate the item audit.
3. Continue the 515-record source/page/edition/variant/class/session/rights, safety and task-scope review.
4. Keep Phase 1/1.1 source authentication and Phase 2 hazard/domain blockers visible. Phase 5 real 3D remains gated by the asset provenance/licence contract.
