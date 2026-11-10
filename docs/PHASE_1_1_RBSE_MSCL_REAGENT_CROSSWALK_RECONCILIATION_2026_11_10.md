# Phase 1.1 — RBSE / MSCL reagent crosswalk reconciliation — 2026-11-10

## Purpose and decision

Compared the existing 126-record MSCL reagent safety screen with the 41-row RBSE Chemistry task-to-reagent evidence matrix. This is a reconciliation audit, not a new chemical method, hazard classification, formulation decision or reagent approval.

**Decision:** preserve both source tracks and record differences for expert review. Do not auto-add text mentions as reagents or delete contextual candidates. A text occurrence can refer to a sample, product, example or incidental mention rather than a reagent used by a procedure.

## Source files

- Numbered MSCL manual reagent index: `data/catalogues/ncert_mscl_manual_reagent_index.csv` — 124 numbered records.
- Safety screen: `data/catalogues/ncert_mscl_manual_reagent_safety_screen.csv` — 126 records (124 numbered labels plus 2 supplemental manual-body references).
- Supplemental omissions: `data/catalogues/ncert_mscl_manual_internal_reagent_omissions.csv` — potassium permanganate and potassium iodide ambiguity.
- RBSE task evidence matrix: `data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv` — 41 unique task/choice rows.
- Reconciliation output: `data/catalogues/rbse_mscl_reagent_crosswalk_reconciliation_2026_11_10.csv` — one row per all 41 task IDs, 20 columns.

The NCERT MSCL manual register is historical and text-extracted. It is not the current kit BOM. The user's uploaded MSCL specification copy is not exact-byte authenticated to the official NCERT attachment. No supplied quantity, grade, purity, formulation, concentration, supplier, stock, compatibility or live-use approval is inferred.

## Reconciled counts

| Measure | Count |
|---|---:|
| Numbered manual reagent/material labels | 124 |
| Supplemental manual-body references | 2 |
| Safety-screen records | 126 |
| Name-only HIGH_CONCERN_NAME_FLAG rows | 21 |
| Corrosive/reactive family flags | 23 |
| Volatile/flammable organic family flags | 7 |
| General review required | 74 |
| Lower-concern reference-only | 1 |
| Exact-label text-occurrence candidate records | 18 |
| Unique task IDs with safety-screen text occurrences | 17 |
| RBSE Chemistry task/choice rows | 41 |
| Matrix rows with one or more candidate record IDs | 17 |
| Unique candidate IDs used in the task matrix | 25 |

Name-only triage labels are workflow flags, not GHS classifications, hazard statements or SDS replacements. All 126 screening records remain blocked from live use, require current identity-specific SDS/exposure review, are NOT_APPROVED and are NOT_CURRENT_BOM records.

## Task-set reconciliation

The two sets each contain 17 task IDs, but they are not identical:

| Relationship | Tasks |
|---|---:|
| Both tracks have at least one candidate link | 15 |
| Safety-screen exact-text task link only | 2 |
| Task-matrix contextual/species candidate only | 2 |
| Neither track currently has a candidate link | 22 |
| Total RBSE tasks | 41 |

### Exact-text task occurrences not linked in the matrix

- `RBSE-XII-CHEM-OPT-01` — the safety screen flags source-label text occurrences for Alcohol and Phenol; the matrix leaves its candidate reagent fields empty. The task is a functional-group test task. Determine whether either label is a specific test reagent, sample or merely textual context before adding a candidate link.
- `RBSE-XII-CHEM-OPT-04` — the screen flags Starch; the matrix leaves candidate fields empty. Determine whether the occurrence is a sample/material or a reagent reference in the underlying RBSE source before mapping.

### Matrix candidates without an exact-text task link in the screen

- `RBSE-XII-CHEM-THERMO-02` — matrix candidates are dilute/concentrated HCl and sodium hydroxide / pellets, linked by task species and formulation variants. These remain candidate-only; concentration, grade, method and product identity are unknown.
- `RBSE-XII-CHEM-ELECTRO-01` — matrix candidates include copper/zinc sulphate electrolytes and copper/zinc material candidates. The matrix correctly distinguishes electrolyte labels from material candidates; it does not prove electrode form or kit supply.

### Record-ID differences inside tasks linked by both tracks

Ten task rows have both track types but differing candidate ID sets. These differences must be resolved from full task context and approved methods, not by string equality alone. Examples:

- Class XI `PRA-15` and `PRA-17`: matrix uses sodium-hydroxide or hydrochloric-acid formulation variants not tagged as exact task-text matches in the safety screen.
- Class XII `REDOX-02` and `OPT-02`: the screen's Ammonium sulphate label text and the matrix's Mohr's salt / potassium-permanganate references require salt identity and method-role review; ammonium sulphate must not be silently equated with ferrous ammonium sulphate.
- Class XII `KIN-02`: potassium iodide is a separate supplemental manual-body reference. Do not equate it automatically with numbered “Iodine solution”.
- Class XII `KIN-01` / `THERMO-03` and Class XI `PRJ-04`: matrix includes acid, combined solvent or soap/detergent candidates whose exact task relevance requires source-context review.

The reconciliation CSV records each task's screen IDs, matrix IDs, shared IDs and screen-only / matrix-only IDs. It preserves the existing mapping basis and validation status.

## Duplicate and omission handling

- `MSCL-MAN-REAG-080` and `MSCL-MAN-REAG-087` are both source rows labelled “Potassium iodate”. Both are retained. Do not merge records or imply two separate formulations without source evidence.
- `MSCL-MAN-OMIT-001` is Potassium permanganate referenced in manual experiment text but absent as a numbered label; it is separately retained in the matrix where applicable.
- `MSCL-MAN-OMIT-002` is Potassium iodide (KI) referenced in manual text, while numbered row 56 is “Iodine solution”. Identity/formulation equivalence is unresolved; keep the separate records.

## Mandatory gate for all 41 task rows

Every task remains `DOCUMENTARY_CANDIDATE_ONLY; CHEMISTRY_EXPERT_AND_METHOD_SOURCE_REVIEW_REQUIRED`. Current BOM authentication and physical use remain blocked. Before any virtual reaction/result is authored, the following must be independently evidenced for that exact task:

1. Source task text and full context, including samples versus reagents, alternatives and choice groups.
2. Exact chemical identity, CAS/structure where unambiguous, grade/purity and formulation/concentration from an authoritative source.
3. Current product-specific SDS and exposure / incompatibility / storage / waste review.
4. Validated method, reaction/model assumptions, observables, expected range and independent Chemistry/Safety expert approval.
5. Versioned provenance and regression cases; unknown or conflicting cases must return NOT_MODELLED / REVIEW_REQUIRED, not invented products or readings.

No quantities, concentrations, preparation, mixing, handling, reaction or disposal instructions are supplied by this audit.

## CI validation — pending

The new reconciliation integrity assertions must pass before this deliverable is treated as validated. Existing safety-screen and task-matrix status remains documentary only; this does not close Phase 1.1 or unblock Phase 2.

## Current phase and next work

- Phase 0: DONE (planning baseline).
- Phase 1 / 1.1: IN PROGRESS.
- Phase 2 scientific contracts/results: BLOCKED.
- Phase 5 real 3D assets: NOT STARTED.
- Phase 6 deterministic experiment runtime: NOT STARTED.

**Next:** obtain full-source contextual confirmation for the two screen-only and two matrix-only task IDs, then reconcile the ten differing item-ID sets under qualified Chemistry/Safety review. Keep all 41 tasks blocked until evidence and sign-off exist.
