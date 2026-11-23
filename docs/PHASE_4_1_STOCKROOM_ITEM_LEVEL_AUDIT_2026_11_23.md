# Phase 4.1 — Stockroom item-level audit baseline (2026-11-23)

## Purpose
Create a row-level audit surface for the three subject stockrooms without changing, deleting, merging or upgrading any catalogue record. This is a completeness and review register, not a declaration that the proposed taxonomy or source claims are verified.

## Input and method
- Read the canonical product brief, current phase state, roadmap, next-work register, taxonomy CSV and `dashboard/data/inventory.json`.
- Expanded every existing subject `inventory` and `reagents` record into one audit row. Task links were derived only by exact matching of each task's `sourceItemIds` to the item `id`.
- Cabinet assignment and review state were copied from the current taxonomy CSV. The proposed assignments remain unreviewed; no domain assumptions were used to promote them.
- Item-page evidence is explicitly marked unavailable in the dashboard read-model row. Task page ranges are linked separately and must not be mistaken for item-level page proof.
- Asset and action readiness remain `NOT_ASSESSED`; this audit does not authorize a 3D model, operation or simulation.

## Reconciled baseline
| Subject | Apparatus / materials | Reagents | Other typed records | Total |
|---|---:|---:|---:|---:|
| Physics | 105 | 0 | 0 | 105 |
| Chemistry | 53 | 124 | 0 | 177 |
| Biology | 175 | 58 | 0 | 233 |
| **Total** | **333** | **182** | **0** | **515** |

The row-level type breakdown is 241 apparatus, 182 reagent, 50 visual aid, 7 specimen and 35 slide. These are read-model records, not current procurement counts.

## Findings
- 515/515 records were carried into the audit; 0 duplicate IDs were found in this snapshot.
- 135 subject/category combinations exist in the taxonomy. All 515 item rows find a taxonomy entry, but **all 515 mappings are still `PROPOSED_NEEDS_REVIEW`**; none is domain-reviewed.
- Four category combinations remain explicitly unmapped, affecting five records:
  - Physics `ALIGNMENT`: 2 (Spirit level; Plumb line (small size)).
  - Physics `LIQUID_TRANSFER`: 1 (Glass dropper with rubber bulb).
  - Biology `DATA_RECORDING`: 1 (Graph Paper).
  - Biology `SAMPLE_CONTAINER`: 1 (Plastic Petri Dish).
- 287/515 records are linked to at least one practical task through exact source item IDs; 228 have no task link in the current task index. No-task-link is a review flag, **not automatically a defect**: general supports, consumables, storage, reference items and research-only items may legitimately be broader than the practical list.
- 184/515 rows have no safety text in the current read model. Absence of a note is not evidence of safety.
- The current item rows contain source labels and evidence-status labels, but no item-level source-page field in this read model. All 515 rows therefore say `ITEM_PAGE_NOT_PRESENT_IN_READ_MODEL`. Practical task page ranges are not substituted for item-page provenance.
- Chemistry and Biology reagent rows are explicitly flagged for identity-specific hazard/SDS, supply and qualified review. Historical/manual labels are not confirmed current stock.
- No asset readiness or action contract has been assessed for any of the 515 rows.

## Files added
- `data/catalogues/stockroom_item_level_audit_2026_11_23.csv` — 515 rows, including subject, stable record ID, type, raw category, proposed cabinet, taxonomy review status, class/task links, source label, evidence/status, supply/safety notes, item-page evidence gap, asset/action readiness and audit flags.

## Decisions and boundaries
1. Do not auto-assign the four unresolved categories. Obtain subject/domain review and record the rationale.
2. Review the 135 category mappings against their actual member records; the CSV's proposed cabinet is a navigation proposal, not authoritative science classification.
3. Resolve item-level source document/page/edition/session/rights and source variant, including OCR-only and historical reagent records. Do not infer an item page from a linked task's page range.
4. Review the 228 unlinked records to decide whether they are supporting stock, research-only, intentionally unmapped, or genuine task-crosswalk gaps.
5. Review the 184 missing safety notes and all reagent-specific identities/SDS/compatibility/storage/waste evidence before executable use.
6. Only after the data/asset contract is stable, build the first real 3D workbench asset set. Unsupported objects remain honest placeholders; no decorative science result.

## Next work unit
Create a reviewed, item-level evidence and taxonomy reconciliation pass: begin with the five unresolved category rows and the 135 proposed category mappings, then audit record provenance/class/session/task scope and safety. Keep Phase 1/1.1 source-authentication blockers visible. Phase 5 real 3D remains gated by the asset licence/provenance contract and does not become complete from this CSV.
