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
- Task rows with at least one explicitly reviewed candidate manual reagent/body reference: 17.
- Task rows without an exact reagent-label mapping assigned: 24.
- Every task remains marked `NOT_ESTABLISHED_BY_MANUAL_OR_ITEM_INDEX` for current supply and `NOT_RETRIEVED_OR_AUTHENTICATED` for current official BOM.

| Mapping basis | Task rows |
|---|---:|
| NO_EXACT_REAGENT_LABEL_MAPPING_ASSIGNED | 24 |
| EXACT_LABEL_IN_TASK_TITLE | 5 |
| EXACT_OR_FORMULATION_VARIANT | 2 |
| NUMBERED_LABEL_PLUS_MANUAL_BODY_REFERENCE | 2 |
| PARTIAL_EXACT_LABEL_COVERAGE | 2 |
| EXACT_LABEL_WITH_ACID_VARIANTS | 1 |
| NUMBERED_LABEL_PLUS_AMBIGUOUS_MANUAL_REFERENCE | 1 |
| EXACT_LABEL_DUPLICATE_PRESERVED | 1 |
| EXACT_OR_FORMULATION_VARIANTS | 1 |
| PARTIAL_COMBINED_LABEL | 1 |
| ELECTROLYTE_LABELS_PLUS_MATERIAL_CANDIDATES | 1 |

The candidate map intentionally leaves some compounds unmatched. Examples:
- RBSE potassium permanganate is separately referenced in the 2018 manual's experiment text but is not a numbered reagent label.
- Potassium iodide appears in experiment/appendix text while numbered row 56 is “Iodine solution”; equivalence/formulation is not assumed.
- The manual has a combined “Chloroform/Carbon tetrachloride” row; the RBSE Chloroform + acetone task does not permit silently choosing a formulation.
- Mohr's salt is kept as a candidate alias for ferrous ammonium sulphate, but potash alum and potassium trioxalatoferrate are not inferred from other aluminium/iron entries.
- Acetanilide is mapped by exact name; dibenzalacetone, p-nitroacetanilide and aniline yellow are not assigned an equivalent numbered row.
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

**Decision:** this task-level documentary matrix is DONE as an evidence-gap register only. Phase 1 / Phase 1.1 remain IN PROGRESS; Phase 2 remains BLOCKED. No scientific solver, executable Chemistry model, 3D asset, app code or software test was implemented/run in this work unit.
