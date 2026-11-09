# RBSE 2026–2027 Class XII Chemistry — Traceability Summary

Audit date: 2026-11-08  
Phase: 1 / subphase 1.1  
Status: DESIGN_ONLY / CANDIDATE_APPARATUS_CROSSWALK — not verified for learner or research use.

## 1. Source-task structure

The RBSE Class XII Chemistry practical section (master register pages 137–140) is represented by 14 traceability records:
- Redox titration alternatives: REDOX-01 and REDOX-02; one source-listed alternative is selected, not both as separate mandatory exam tasks.
- Systematic qualitative analysis: QUAL-01.
- Four-mark OR block: OPT-01 through OPT-04; these are mutually exclusive branches in the source option group.
- Five-mark content-based practical block: KIN-01 through KIN-03, THERMO-01 through THERMO-03 and ELECTRO-01. These are source-listed alternatives/groups; do not interpret all seven as simultaneous requirements for one assessment attempt.

The CSV preserves these 14 source task IDs and their choice_group values.

## 2. Apparatus crosswalk totals

- 14 task/choice records.
- 167 candidate MSCL apparatus/material references across 38 distinct OCR catalogue item IDs.
- 82 proposed asset references.
- 14 proposed model/rule IDs.
- 62 planned test-vector IDs.

These are candidate apparatus references only. The source is the user-uploaded MSCL_copy.pdf OCR catalogue; it remains NOT_BYTE_AUTHENTICATED against the official NCERT attachment. The official MSCL attachment link returned HTTP 502 in the 2026-11-08 retrieval check.

## 3. Chemical reagent and method boundary

The MSCL CSV is not a reagent bill of materials. It does not prove that KMnO4, oxalic acid, ferrous ammonium sulphate, HCl, NaOH, salts, organic compounds, indicators, solvents or analytical standards are supplied. No reagent or reaction product should be inferred from the glassware list.

The RBSE task register lists 13 cation and 12 anion candidates for the qualitative-analysis group, but this does not provide the complete reagent group scheme, concentrations, confirmatory-test sequence or interference matrix. The app must use a finite curated and source-backed decision graph; unknown or conflicting samples return NOT_MODELLED/NEEDS_REVIEW.

## 4. Scientific, safety and rights controls

- Titration: balanced stoichiometry, standard solution identity/purity/hydration state, endpoint vs equivalence point, burette calibration and uncertainty are separate validated fields.
- Kinetics: reaction identity, concentrations, temperature, timing endpoint and calibrated observation method are required; no kinetic law inferred from the title alone.
- Thermochemistry: calorimeter constant, heat capacity, sample mass, temperature change and heat-loss correction must be declared.
- Electrochemistry: electrode/source identity, cell polarity, concentration/activity, temperature and voltage calibration are required.
- Organic synthesis and volatile/corrosive/toxic workflows remain virtual/reference-data only. No real handling, heating or disposal instructions are approved.
- The OCR MSCL copy includes a mercury thermometer and asbestos-centred wire gauze; neither can become a learner-usable physical asset.
- Original LabVerse assets and explanations are required; NCERT imagery/text reuse is subject to rights review.

## 5. Source and verification status

- All 14 task/choice IDs were checked against the RBSE master register.
- All 38 candidate MSCL catalogue item IDs were checked against the OCR catalogue before crosswalk creation.
- The CSV contains 14 rows and 18 columns, including choice_group, source-evidence status, candidate status, assets, model/test IDs, safety/rights/review fields and unresolved gaps.
- Repository/document checks are not scientific or software tests. No Chemistry model, solver, reaction engine, 3D asset or executable test has been implemented or run.
- Chemistry subject-expert, analytical-method, safety and source-rights review remain open.

Machine-readable register: data/catalogues/rbse_xii_chemistry_traceability.csv.  
Detailed crosswalk: docs/PHASE_1_1_RBSE_XII_CHEMISTRY_TRACEABILITY.md.

## 6. Next work unit

After read-back verification, inspect the task-family IDs and count against the master RBSE register, then continue to Class XII Biology. Keep reagent and analytical-source requirements explicit, especially where RBSE names chemicals but the available kit catalogue only lists apparatus. Phase 1.1 and Phase 1 remain IN PROGRESS; Phase 2 remains BLOCKED.


## Task-level reagent evidence matrix — 2026-11-09

The new consolidated matrix `data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv` contains one row for each of the 14 Class XII Chemistry task/choice IDs. It preserves redox and other OR choice groups and separately records candidate 2018 manual reagent labels, manual-body-only references, ambiguous labels, formulation variants and current-supply/method/safety blocks. See `docs/PHASE_1_1_RBSE_CHEMISTRY_TASK_REAGENT_EVIDENCE_MATRIX.md`. Candidate overlap is not evidence that the current kit supplies the chemical or that an experiment is approved.
