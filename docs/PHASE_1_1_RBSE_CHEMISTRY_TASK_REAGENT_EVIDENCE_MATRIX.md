# Phase 1.1 — RBSE Chemistry task-to-reagent evidence matrix

**Audit date:** 2026-11-09  
**Scope:** All RBSE Class XI/XII Chemistry task/choice records (repository source count: 41) cross-referenced with the NCERT-hosted 2018 MSCL manual's 124 numbered reagent/material labels and two separately tracked manual-body references.  
**State:** TASK-LEVEL DOCUMENTARY MATRIX COMPLETE; NOT A CURRENT REAGENT BOM; NO LIVE CHEMISTRY.

## 1. Why this matrix exists

The MSCL manual's 2018 reagent list is a source reference, not a proof that a reagent is included in a current kit, supplied in a given concentration, or authorised for learner handling. The separate apparatus index cannot fill reagent gaps. This matrix creates one row per RBSE Chemistry task/choice and keeps four concepts separate: (1) what the RBSE task names, (2) topic-level manual links, (3) candidate reagent labels in the historical manual, and (4) current supply / safety / method status.

Machine-readable file: `data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv`.

## 2. Coverage and candidate mappings

- RBSE XI Chemistry records: 27.
- RBSE XII Chemistry task/choice records: 14.
- Total unique task IDs: 41.
- Task rows with one or more input-reagent candidate IDs: 16 (24 unique candidate IDs).
- One additional task has a separate product/output reference only (Acetanilide in OPT-03); it is not an input-reagent link.
- Task rows with no input-reagent candidate ID: 24.
- Every task remains marked `NOT_ESTABLISHED_BY_MANUAL_OR_ITEM_INDEX` for current supply and `NOT_RETRIEVED_OR_AUTHENTICATED` for current official BOM.

| Mapping basis | Task rows |
|---|---:|
| NO_EXACT_REAGENT_LABEL_MAPPING_ASSIGNED | 24 |
| EXACT_LABEL_IN_TASK_TITLE | 5 |
| EXACT_OR_FORMULATION_VARIANT | 2 |
| NUMBERED_LABEL_PLUS_MANUAL_BODY_REFERENCE | 2 |
| PARTIAL_EXACT_LABEL_COVERAGE | 1 |
| PRODUCT_OUTPUT_REFERENCE_ONLY; INPUT_REAGENTS_NOT_ESTABLISHED | 1 |
| EXACT_LABEL_WITH_ACID_VARIANTS | 1 |
| NUMBERED_LABEL_PLUS_AMBIGUOUS_MANUAL_REFERENCE | 1 |
| EXACT_LABEL_DUPLICATE_PRESERVED | 1 |
| EXACT_OR_FORMULATION_VARIANTS | 1 |
| PARTIAL_COMBINED_LABEL | 1 |
| ELECTROLYTE_LABELS_PLUS_MATERIAL_CANDIDATES | 1 |

The candidate map intentionally leaves some compounds unmatched. The original whole-document lexical screen also produced false role/scope hits; these are preserved but not used as task input-reagent links. Examples:
- RBSE potassium permanganate is separately referenced in the 2018 manual's experiment text but is not a numbered reagent label.
- Potassium iodide appears in experiment/appendix text while numbered row 56 is “Iodine solution”; equivalence/formulation is not assumed.
- The manual has a combined “Chloroform/Carbon tetrachloride” row; the RBSE Chloroform + acetone task does not permit silently choosing a formulation.
- Mohr's salt is kept as a candidate alias for ferrous ammonium sulphate, but potash alum and potassium trioxalatoferrate are not inferred from other aluminium/iron entries.
- Acetanilide is a named target product in RBSE XII practical p.139, not an input reagent; it is held in the separate `candidate_manual_product_or_output_reference_ids` field. Dibenzalacetone, p-nitroacetanilide and aniline yellow remain distinct target products, not inferred input materials.
- In the electrochemistry task, copper sulphate and zinc sulphate are candidate electrolyte labels; zinc granules and copper turnings are only material candidates, not specified electrodes.

## 3. Topic links are not reagent equivalence

The existing crosswalk retains DIRECT_TOPIC_MATCH, PARTIAL_TOPIC_MATCH, apparatus-only and no-match distinctions. This matrix carries those values to each task ID without upgrading topic similarity into exact method evidence. A manual topic match does not establish the same species, counterion, concentrations, endpoint, equilibrium constant, yield, calibration or observation.

## 4. Mandatory current-supply and science gates

All 41 rows retain:
- current supply: `NOT_ESTABLISHED_BY_MANUAL_OR_ITEM_INDEX`;
- current official BOM: `NOT_RETRIEVED_OR_AUTHENTICATED`;
- physical use: `BLOCKED; SIMULATION_OR_PREPARED_REFERENCE_DATA_ONLY`;
- validation: `DOCUMENTARY_CANDIDATE_ONLY; CHEMISTRY_EXPERT_AND_METHOD_SOURCE_REVIEW_REQUIRED`.

The 2018 manual is not the current procurement attachment. The user's uploaded MSCL specification copy is still not byte-authenticated against NCERT's current attachment. No concentrations, formulations, preparation methods, handling, mixing or waste instructions are approved here. All named hazardous source labels retain the separate safety screen and remain blocked.

## 5. Validation checklist

- [x] Exactly one row per unique RBSE Chemistry task/choice ID.
- [x] XI + XII source row count reconciled to 41.
- [x] Every row includes the existing manual topic-match status where present.
- [x] Candidate reagent labels and supplemental references use existing source IDs only.
- [x] Unmatched compounds and ambiguous source rows are stated, not guessed.
- [x] Choice groups retained; alternatives are not combined as simultaneous requirements.
- [x] All rows retain current-supply, official-BOM, live-use and expert-review blockers.
- [ ] Obtain official current MSCL specification bytes and exact supplied reagent BOM.
- [ ] Verify each task's reagents/method against authoritative RBSE/NCERT method sources and qualified Chemistry/Safety review.
- [ ] Obtain identity-specific current SDS and calibration / waste / exposure validation.

## Task-scope and product/output correction — 2026-11-10

The full RBSE PDFs already supplied by the user were recovered from the Library and pages were inspected directly: Class XI practical pages 123–126 and Class XII practical pages 137–140. Based on that source context:

- The safety screen's 18 preliminary whole-document exact-label hits are not 18 input reagents. Six were excluded from task-reagent mapping: Alcohol and Phenol are group names in “Alcoholic/Phenolic”; Ammonium sulphate is a substring inside “ferrous ammonium sulphate” and a separate identity; Acetanilide is a named product; Aniline is part of the product name Aniline yellow; Starch occurs in other syllabus sections, not the Class XII practical task page.
- The safety screen now retains a 19-column task-scope disposition and note on every one of the 126 records. The preliminary raw lexical match and ID were not deleted.
- The matrix now has 23 columns and a separate `candidate_manual_product_or_output_reference_ids` field. For `RBSE-XII-CHEM-OPT-03`, `MSCL-MAN-REAG-005=Acetanilide` is an output/product reference; it is removed from the input-reagent candidate field. Input starting materials for the organic preparation remain not established.
- Current task-scoped reconciliation: 41 tasks / 24 columns; 12 tasks have task-section text candidates plus matrix candidates; 4 have matrix-only contextual/species candidates; 24 have no candidate link in either input-reagent track (not proof of reagent-free); 1 has product/output reference only. In the 12 dual-track tasks, five have aligned record IDs and seven have extra contextual/formulation IDs in the matrix.
- Corrected report and machine-readable file: `docs/PHASE_1_1_RBSE_MSCL_REAGENT_CROSSWALK_RECONCILIATION_2026_11_10.md` and `data/catalogues/rbse_mscl_reagent_crosswalk_reconciliation_2026_11_10.csv`.

## Final task-scoped CI — 2026-11-10

- Source/catalogue integrity PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42800381733.
- Desktop/mobile Chromium browser smoke PASS 9/9 groups: https://github.com/snchat78-svg/LabVerse/actions/runs/42800382248.
- This validates source-to-matrix links, role separation and fail-closed status integrity only. It does not authenticate the current reagent BOM, provide SDS approval, validate methods or implement a Chemistry solver.

**Decision:** this task-level documentary matrix is DONE as an evidence-gap register only. Phase 1 / Phase 1.1 remain IN PROGRESS; Phase 2 remains BLOCKED. No scientific solver, executable Chemistry model, 3D asset, app code or software test was implemented/run in this work unit.
