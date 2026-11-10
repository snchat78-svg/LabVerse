# Phase 1.1 — MSCL reagent screening and RBSE task-link audit

**Audit date:** 2026-11-09  
**State:** DOCUMENTARY SCREEN COMPLETE; NO LIVE CHEMISTRY; NOT A CURRENT KIT BOM  
**Scope:** NCERT-hosted 2018 Manual of Microscale Chemistry Laboratory Kit (Classes XI–XII), its numbered reagent/material list, internal experiment/appendix references, and the 41 RBSE XI/XII Chemistry task/choice records in LabVerse.

## 1. Source boundary

The official NCERT School Kits index lists the *Manual of Micro Scale Chemistry Laboratory Kit for Grades 11 and 12*. The manual copy indexed in this repository identifies first edition April 2018, publication code 13166, ISBN 978-93-5007-861-7, and carries an ALL RIGHTS RESERVED notice. The manual was text-extracted; its screenshot/page-image retrieval failed earlier (HTTP 502), so no visual-page verification is claimed.

- NCERT official kit-manuals index: https://ncert.nic.in/division/dek/kit-manuals.php?ln=en
- NCERT-hosted manual PDF used for text review: https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf

This manual is a historical teaching reference, not the current procurement attachment or a current bill of materials. The separately uploaded 2025 MSCL candidate PDF remains not byte-authenticated against the official NCERT attachment. Neither source establishes supplied quantity, formulation, purity, grade, packaging, current availability or supplier equivalence.

## 2. Reagent register produced

Machine-readable register: `data/catalogues/ncert_mscl_manual_reagent_safety_screen.csv`.

- 124 numbered labels retained in the manual's source order, including duplicate labels.
- 2 supplemental internal references retained separately: potassium permanganate (experiments 2.5/2.6) and potassium iodide (experiment/appendix text, where numbered row 56 says “Iodine solution” without a standalone identity/formulation record).
- Total screening records: **126**.
- No source label was silently replaced, deduplicated or converted into a vendor SKU.
- The 51-item apparatus list remains in `data/catalogues/ncert_mscl_manual_apparatus_index.csv`; apparatus is not used as proof that a reagent is supplied.

## 3. Preliminary name-only triage

| Screening label | Records | Meaning |
|---|---:|---|
| HIGH_CONCERN_NAME_FLAG | 21 | Conservative specialist-review flag from the source label |
| CORROSIVE_OR_REACTIVE_FAMILY_FLAG | 23 | Broad family flag; exact identity/formulation matters |
| VOLATILE_OR_FLAMMABLE_ORGANIC_FAMILY_FLAG | 7 | Broad organic/solvent family flag |
| GENERAL_REAGENT_REVIEW_REQUIRED | 74 | No definitive class inferred from label alone |
| LOWER_CONCERN_REFERENCE_ONLY | 1 | Distilled-water reference only; still not approval |

These labels are **not GHS classifications**, hazard statements, legal classifications or a substitute for a current SDS. They are conservative workflow triage to stop unsafe assumptions. An SDS-specific identity, concentration/formulation, exposure scenario, compatibility, waste route, storage and qualified chemistry/safety approval would be needed before any physical-lab decision.

## 4. RBSE task linking — deliberately strict

- Total RBSE Chemistry task/choice rows in source registers: **41** (XI + XII).
- Register rows with an exact source-label occurrence in the RBSE task-register text: **18**.
- Distinct task IDs with such explicit occurrences: **17**.

The CSV stores the matching task IDs and marks them `EXACT_LABEL_TEXT_OCCURRENCE_CANDIDATE; EXPERT_VALIDATION_REQUIRED`. No exact match is marked “not proof of absence”. Topic-level links in `ncert_mscl_manual_to_rbse_chemistry_crosswalk.csv` remain topic evidence only; they are not reagent-to-task equivalence or supply evidence. Generic apparatus availability is never treated as reagent coverage.

## 5. Mandatory safety and simulation restrictions

All 126 records retain:
- `BLOCKED_NO_LIVE_USE; SIMULATION_REFERENCE_ONLY`
- identity-specific current SDS/exposure review required
- expert approval: NOT_APPROVED
- supply status: NOT_A_CURRENT_SUPPLY_OR_BOM_RECORD

No concentrations, quantities, recipes, preparation, mixing, handling or disposal instructions have been added. Particularly concerning named substances already identified in the manual review (including arsenic oxide, benzene, carbon disulphide, halogenated solvents, hydrogen sulphide, lead compounds, sodium metal and uranyl compounds) remain source-reference flags only. The mercury thermometer in the manual apparatus list and asbestos-centred gauze described in the unauthenticated uploaded candidate are excluded from physical learner-use assets. Do not build arbitrary reaction/mixing controls or enable live chemical handling.

## 6. Apparatus and task traceability boundary

- 51 apparatus entries: indexed separately in `ncert_mscl_manual_apparatus_index.csv`.
- 34 experiment/topic entries: indexed separately in `ncert_mscl_manual_experiment_index.csv`.
- 41 RBSE Chemistry task/choice rows: XI + XII traceability registers.
- 2 internal reagent-label omissions/ambiguities: retained in `ncert_mscl_manual_internal_reagent_omissions.csv`.

Current NCERT specification attachment authentication, exact reagent BOM, reagent/task expert cross-check, SDS set, waste/compatibility review, and method-specific scientific review remain OPEN. Chemistry remains design/reference only; no scientific solver, app code, reaction engine, 3D asset or executable test was created by this work unit.

## 7. Checks and decision

- [x] 124 numbered manual labels preserved.
- [x] 2 supplemental internal manual references included separately.
- [x] Duplicate source rows preserved; no source list deduplication.
- [x] All register rows blocked from live use and marked not a current supply/BOM record.
- [x] Exact text-link candidates stored separately from topic-level crosswalk evidence.
- [x] Preliminary safety flags explicitly marked non-GHS and non-SDS.
- [ ] Identity-specific SDS and formulation review.
- [ ] Current official NCERT MSCL procurement attachment retrieved and authenticated.
- [ ] Chemistry subject-expert and institutional safety approval.
- [ ] RBSE task-by-task reagent completeness and method validation.

**Decision:** this bounded MSCL reagent screening subtask is DONE as a documentary triage/register only. It does not close Phase 1.1. Phase 1 / Phase 1.1 remain IN PROGRESS; Phase 2 remains BLOCKED.


## RBSE Chemistry task-level reagent matrix addendum — 2026-11-09

The new 41-row task-level matrix (`data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv`) links candidate labels from this manual register to RBSE task IDs without converting the manual's list into a supplied BOM. Seventeen task rows contain candidate label/body references; 24 have no exact match assigned. All remain blocked from live use. Details and ambiguity handling are in `docs/PHASE_1_1_RBSE_CHEMISTRY_TASK_REAGENT_EVIDENCE_MATRIX.md`.

## RBSE task-level crosswalk reconciliation addendum — task-context review — 2026-11-10

The previous 18 matches were preliminary exact-label **whole-document text occurrences**, not confirmed reagent-use mappings. Original RBSE XI/XII files already in the user's Library were recovered and practical pages were inspected directly (XI pp.123–126; XII pp.137–140).

### Corrected task-scope decision

- Safety-screen CSV remains 126 records but now has 19 columns; the two added fields record `task_scope_review_status` and a human-readable reason.
- The 18 raw full-document text hits are preserved. Six are excluded from task-reagent mapping after inspecting task section/role:
  - Alcohol and Phenol are “Alcoholic” / “Phenolic” functional-group names, not input-reagent mentions.
  - Ammonium sulphate is only a substring within ferrous ammonium sulphate; the identities must not be conflated.
  - Acetanilide is a product/output in Class XII practical p.139; it is not confirmed as an input reagent.
  - Aniline is part of “Aniline yellow (p-Aminoazobenzene)” product text, not proof of input Aniline.
  - Starch appears elsewhere in the PDF (Class XII p.110 / p.136), not in the relevant practical page 139.
- Twelve task-section candidate records remain. The matrix has 16 task rows with input reagent candidate IDs, plus one separate product/output reference (Acetanilide in OPT-03). Twenty-four task rows have no assigned input-reagent candidate link; this is not proof that no reagent is needed.
- The task-scoped reconciliation CSV has 41 rows / 24 columns: 12 tasks with both task-section and matrix candidates (five with aligned IDs; seven with extra contextual/formulation candidates), four matrix-only contextual/species candidate tasks, 24 with neither candidate link, and one product/output-only task. No screen-only candidates remain after source-context review.
- In Class XII practical p.138, “Alcoholic” and “Phenolic” describe functional groups; “ferrous ammonium sulphate” is the named redox standard, not standalone Ammonium sulphate.
- In Class XII practical p.139, Acetanilide and Aniline yellow are listed as preparation products; kinetics tasks explicitly mention hydrogen peroxide, potassium iodate, sodium sulphite and sodium thiosulphate.
- In Class XII practical p.140, task species include copper sulphate / potassium nitrate, HCl / NaOH, chloroform / acetone and CuSO4/ZnSO4 electrolytes. These are candidate identity mentions only, not concentration, supply or approved method evidence.
- In Class XI practical p.125, sodium chloride, ferric chloride and sodium carbonate appear in pH studies; sodium hydroxide, oxalic acid and dilute HCl appear in titrimetry. Page 126 names sodium carbonate in a soap project.

Machine-readable task-context file: `data/catalogues/rbse_mscl_reagent_crosswalk_reconciliation_2026_11_10.csv`.
Updated task matrix: `data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv` (23 columns, separate product/output-reference field).
Detailed reconciliation: `docs/PHASE_1_1_RBSE_MSCL_REAGENT_CROSSWALK_RECONCILIATION_2026_11_10.md`.

### Final integrity validation — 2026-11-10

- Source/catalogue integrity PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42800381733.
- Desktop/mobile browser smoke PASS 9/9 groups: https://github.com/snchat78-svg/LabVerse/actions/runs/42800382248.
- All 126 screening records remain blocked from live use, SDS-required, not approved and not a current BOM. All 41 RBSE task rows remain documentary-only; no formulation, CAS, concentration, procedure or approval has been invented.

