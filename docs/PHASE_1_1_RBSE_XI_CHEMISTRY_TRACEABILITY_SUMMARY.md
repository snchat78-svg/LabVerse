# RBSE 2026–2027 Class XI Chemistry — Consolidated Traceability Summary

Audit date: 2026-11-08  
Phase: 1 / subphase 1.1  
Coverage state: **27/27 RBSE Chemistry task IDs reconciled** (19 practical groups + 8 projects).  
Science/implementation state: **DESIGN_ONLY / CANDIDATE_APPARATUS_MATCH**. Not source-verified, expert-approved or ready for learner use.

## 1. Task coverage and candidate mapping totals

| Task group | RBSE tasks | Candidate MSCL item references | Distinct source item IDs | Proposed asset references | Model/rule IDs | Planned test-vector IDs |
|---|---:|---:|---:|---:|---:|---:|
| Practical groups PRA-01–PRA-19 | 19 | 131 | 36 | 92 | 19 | 76 |
| Projects PRJ-01–PRJ-08 | 8 | 48 | 21 | 42 | 8 | 32 |
| **Total** | **27** | **179** | **37 across the combined pack** | **134** | **27** | **108** |

The combined pack references 57 distinct proposed asset IDs. The 37 MSCL item IDs are candidate apparatus/material rows from the current OCR-derived uploaded copy.

## 2. Source verification boundaries

- All 27 task IDs exist in the all-six-pack RBSE master task register and are present in the detailed traceability files.
- Every candidate MSCL item ID exists in data/catalogues/ncert_mscl_spec_items.csv.
- The MSCL CSV is OCR-derived from the user-uploaded MSCL_copy.pdf. Its hash identifies the uploaded bytes only; byte identity with NCERT's official attachment is NOT VERIFIED.
- The current official NCERT MSCL attachment direct URL returned HTTP 502 in the 2026-11-08 retrieval pass.
- The MSCL item register lists apparatus, consumables and some materials; it is NOT a complete supplied reagent list, analytical-method manual or external research dataset.
- Apparatus links do not prove that the item is supplied for a particular RBSE task.

## 3. RBSE marking conflict — unresolved

The source register retains both allocations from the supplied RBSE PDF:

| Component | Overview pages 123–124 | Detailed pages 125–126 |
|---|---:|---:|
| A–E introduction/techniques/purification/equilibrium/pH | 4 | 4 |
| Titrimetric analysis | 8 | 6 |
| Systematic qualitative analysis | 6 | 6 |
| Nitrogen/sulphur/halogen detection | 2 | 3 |
| Projects | 4 | 3 |
| Record | 3 | 4 |
| Viva | 3 | 4 |
| **Total** | **30** | **30** |

Do not select one allocation as canonical or configure official scoring until an authoritative board/teacher clarification is recorded.

## 4. Chemistry-specific research and safety gaps

- Acids, bases, salts, indicators, organic compounds, soap, tea, fibres, water samples and food samples are not automatically supplied because glassware or apparatus appears in the MSCL item register.
- Equilibrium tasks need verified species identities, stoichiometry, formation/equilibrium constants, temperature, ionic strength/activity assumptions and colour/spectral calibration.
- Titration tasks need balanced reactions, standard solution concentration/purity/hydration state, endpoint/equivalence handling, burette calibration and indicator method.
- Qualitative analysis requires a finite, curated decision graph for each source-listed ion pair and confirmatory tests. Unknown mixtures return NOT_MODELLED/NEEDS_REVIEW. No arbitrary reagent mixing.
- Water-quality and food projects require sample provenance, analytical methods, calibration, detection limits, units and citations. Do not infer bacterial cause from a sulphide measurement alone, drinking-water safety from visual clarity, or mineral content from pH.
- Volatile/flammable liquids, corrosives, gas generation, elemental detection, open-flame heating, mercury and asbestos hazards remain virtual-only or blocked. No operational hazardous wet-lab instructions are approved.

## 5. Reconciliation checks

- 19 practical + 8 project rows = 27 tasks.
- IDs are unique and in source order.
- All IDs exist in the RBSE master register.
- Every candidate MSCL item ID exists in the OCR source CSV.
- All 27 rows retain USER_UPLOADED_MSCL_COPY_OCR / NOT_BYTE_AUTHENTICATED status.
- All rows retain asset/model/test/safety/rights/review/gap fields.
- No application code, 3D assets, scientific simulation or executable tests were created.
- Documentary checks only; scientific tests are NOT RUN.

The consolidated CSV is data/catalogues/rbse_xi_chemistry_traceability.csv.

## 6. Phase gate and next work unit

Class XI Chemistry documentary task coverage: **27/27 task IDs reconciled**. This is not verification of reagent supply, method validity, scoring, safety or scientific results.

Next source-order work unit: Class XI Biology practical/spotting task groups from the RBSE master register, followed by the Biology projects/remaining requirements recorded there. Phase 1.1 and Phase 1 remain IN PROGRESS; Phase 2 remains BLOCKED.


## Task-level reagent evidence matrix — 2026-11-09

The new consolidated matrix `data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv` contains one row for each of the 27 Class XI Chemistry practical/project task IDs. It carries the existing topic match class while separately recording candidate 2018 manual reagent labels, source-body-only references, missing mappings and current-supply/method/safety blocks. See `docs/PHASE_1_1_RBSE_CHEMISTRY_TASK_REAGENT_EVIDENCE_MATRIX.md`. Candidate overlap is not evidence that the current kit supplies the chemical or that an experiment is approved.
