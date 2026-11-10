# Phase 1.1 — RBSE / MSCL reagent crosswalk reconciliation — task-context review — 2026-11-10

## Purpose and decision

Reconcile the 2018 NCERT MSCL manual's reagent labels with the complete RBSE Class XI/XII Chemistry practical-task text, and keep input reagents separate from samples, functional-group names, products, material/electrode candidates and references outside the practical section.

**Decision:** do not treat full-document word hits as reagent evidence. The original whole-PDF lexical screen was retained, but each hit has now been checked against the relevant task section. Six false-scope/role hits were excluded from task-reagent mapping, and Acetanilide was moved out of the input-reagent list into a separate product/output-reference field. No task method, concentration, formulation, stock or physical-use permission is inferred.

## Source files and evidence boundary

- Historical manual reagent index: `data/catalogues/ncert_mscl_manual_reagent_index.csv` — 124 numbered labels.
- Preliminary MSCL safety screen: `data/catalogues/ncert_mscl_manual_reagent_safety_screen.csv` — 126 records (124 numbered + 2 separately indexed manual-body references); now 19 columns including task-scope review status/note.
- Supplemental omissions: `data/catalogues/ncert_mscl_manual_internal_reagent_omissions.csv`:
  - `MSCL-MAN-OMIT-001`: potassium permanganate in manual experiments 2.5/2.6, not as a numbered reagent label.
  - `MSCL-MAN-OMIT-002`: potassium iodide (KI) in manual body/appendix text; do not collapse into numbered row 56 “Iodine solution”.
- RBSE task matrix: `data/catalogues/rbse_chemistry_task_reagent_evidence_matrix.csv` — 41 task/choice rows, 23 columns. Input reagent candidates and product/output references are separate.
- Task-context reconciliation: `data/catalogues/rbse_mscl_reagent_crosswalk_reconciliation_2026_11_10.csv` — 41 rows, 24 columns.
- This review used the existing user Library uploads of the RBSE XI 2026–27 PDF (pages 123–126) and RBSE XII 2026–27 PDF (pages 137–140). No repeat upload was requested.

The NCERT MSCL manual is a historical teaching reference and is not the current procurement BOM. The separate uploaded MSCL kit-specification PDF remains not byte-authenticated to the current official NCERT attachment. No formulation, purity/grade, concentration, quantity, supplier, stock, CAS/formula equivalence or compatibility is inferred from a manual label or task text.

## Corrected counts

| Measure | Count |
|---|---:|
| Numbered historical manual labels | 124 |
| Supplemental manual-body references | 2 |
| Safety-screen records | 126 |
| Name-only HIGH_CONCERN_NAME_FLAG | 21 |
| Name-only CORROSIVE_OR_REACTIVE_FAMILY_FLAG | 23 |
| Name-only VOLATILE_OR_FLAMMABLE_ORGANIC_FAMILY_FLAG | 7 |
| Name-only GENERAL_REAGENT_REVIEW_REQUIRED | 74 |
| LOWER_CONCERN_REFERENCE_ONLY | 1 |
| Preliminary full-document exact-label text hits | 18 records |
| Hits excluded from task-reagent mapping after context/role review | 6 records |
| Task-section text candidates retained | 12 records across 12 tasks |
| RBSE Chemistry task/choice rows | 41 |
| Matrix rows with one or more input-reagent candidate IDs | 16 |
| Unique matrix input-reagent candidate IDs | 24 |
| Separate product/output-reference rows | 1 |
| Tasks with no candidate link in either input-reagent track | 24 |

The safety-screen classes remain **conservative name-only triage**. They are not GHS classifications, hazard statements, SDS replacements or safety approvals. Every one of the 126 screen rows still says NO_LIVE_USE, requires current identity-specific SDS/exposure review, is NOT_APPROVED and is NOT_A_CURRENT_SUPPLY_OR_BOM_RECORD.

## Full-context corrections from the RBSE PDFs

### Six whole-document lexical hits excluded from task-reagent mapping

1. **Alcohol (MSCL-MAN-REAG-001)** — RBSE XII practical page 138 says “Alcoholic” as a functional-group class. The task does not name the manual-listed Alcohol as a required test reagent.
2. **Phenol (MSCL-MAN-REAG-086)** — page 138 says “Phenolic” as a functional-group class. It is not a task instruction to use the standalone manual-listed Phenol.
3. **Ammonium sulphate (MSCL-MAN-REAG-014)** — page 138 names *ferrous ammonium sulphate*. The full phrase refers to Mohr's salt; it is not proof that standalone Ammonium sulphate is the same input. The record was marked a distinct-identity substring occurrence.
4. **Acetanilide (MSCL-MAN-REAG-005)** — RBSE XII practical page 139 lists Acetanilide under “Preparation of Organic Compounds”. It is a target product, not evidence that it is an input reagent. The task matrix now stores it only in `candidate_manual_product_or_output_reference_ids`.
5. **Aniline (MSCL-MAN-REAG-019)** — page 139 lists “Aniline yellow (p-Aminoazobenzene)” as a target product. The substring “Aniline” in the product name does not prove standalone manual-listed Aniline is an input reagent.
6. **Starch (MSCL-MAN-REAG-117)** — whole-PDF matches occur in other RBSE XII content (page 110 manure/milk tests and page 136 theory), not in the practical page 139 line “Tests for Carbohydrates, Fats and Proteins”. Do not map it to the Class XII practical task solely from an out-of-section lexical hit.

The screen retains all original raw full-document hits and separately records these exclusions; nothing was silently deleted.

### Candidate links supported by the practical task sections (still not approved methods)

- **RBSE XI page 125:** Sodium chloride, ferric chloride and sodium carbonate are explicitly named in the pH study; sodium hydroxide, oxalic acid and dilute hydrochloric acid appear in the titrimetric-analysis text. Page 126 names sodium carbonate in a soap-foaming project. These are task-section mentions, but their exact method role/formulation/concentration and supply remain unverified.
- **RBSE XII page 138:** Oxalic acid and ferrous ammonium sulphate are named in KMnO4 titrimetric tasks; functional-group words remain non-reagent group names. Mohr's salt remains a candidate alias needing explicit identity/formulation confirmation.
- **RBSE XII page 139:** Hydrogen peroxide, potassium iodate, sodium sulphite and sodium thiosulphate are explicitly named in kinetics tasks. KI remains a separate supplemental manual-body reference, not equated with numbered “Iodine solution”.
- **RBSE XII page 140:** Copper sulphate / potassium nitrate, HCl / NaOH, chloroform / acetone, and CuSO4/ZnSO4 electrolytes are named in thermochemical/electrochemical tasks. These matrix links are species/formulation/context candidates; the text does not establish product grade, concentration, supplier, calibrated electrode form or approved procedure.

### Task-set relationship after source-page review

| Relationship | Tasks |
|---|---:|
| Both task-section screen and matrix have input-reagent candidates | 12 |
| Of those 12, candidate record-ID sets align | 5 |
| Of those 12, matrix has additional contextual/formulation IDs | 7 |
| Matrix-only contextual/species/body-reference candidates | 4 |
| No task-scoped candidate link in either input-reagent track | 24 |
| Product/output reference only (Acetanilide) | 1 |
| Total | 41 |

The four matrix-only candidate tasks are:
- `RBSE-XII-CHEM-OPT-02`: partial/alias candidates (e.g. Mohr's salt) not equivalent to every product named in the task.
- `RBSE-XII-CHEM-REDOX-02`: Mohr's salt plus separate potassium permanganate manual-body reference.
- `RBSE-XII-CHEM-THERMO-02`: HCl / NaOH species and formulation variants explicitly present in the task text; candidate identity and concentrations still unverified.
- `RBSE-XII-CHEM-ELECTRO-01`: CuSO4/ZnSO4 electrolyte labels and copper/zinc material candidates; material candidates are not proof of specified electrodes.

The 24 tasks without candidate links are **not** declared reagent-free. They remain unresolved until task-specific method sources are reviewed. The separate product-only OPT-03 row is not counted as an input-reagent mapping.

## Duplicate and omission handling

- `MSCL-MAN-REAG-080` and `MSCL-MAN-REAG-087` both preserve the source label “Potassium iodate”. The source duplicate is retained; do not infer distinct formulations or quantities.
- `MSCL-MAN-OMIT-001` keeps potassium permanganate as a manual-body reference separate from the 124 numbered labels.
- `MSCL-MAN-OMIT-002` keeps potassium iodide (KI) separate from numbered “Iodine solution”; no identity or formulation equivalence is assumed.
- Acetanilide remains a separate product/output reference for OPT-03, not an input-reagent ID.

## Mandatory gates before a scientific practical can run

Every one of the 41 RBSE task rows remains `DOCUMENTARY_CANDIDATE_ONLY; CHEMISTRY_EXPERT_AND_METHOD_SOURCE_REVIEW_REQUIRED`, and current BOM/physical use remain blocked. For each exact task, LabVerse still needs:

1. Source-backed distinction between input reagent, sample, product/output, material/electrode, alternative OR choice and incidental text.
2. Exact identity and formulation from an authoritative source; CAS/structure only where unambiguous; grade/purity/concentration and task-specific quantities.
3. Current product-specific SDS plus qualified exposure, incompatibility, storage and waste review.
4. A validated method and model with conditions, assumptions, expected observations/ranges, test cases and independent Chemistry/Safety approval.
5. Versioned provenance and regression coverage; unknown/conflicting cases must return NOT_MODELLED / REVIEW_REQUIRED rather than inventing reactions or readings.

No preparation, concentrations, mixing, handling, reaction or disposal instructions are authorised by this reconciliation.

## Final validation — 2026-11-10

- Source/catalogue integrity PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42800381733 (validator commit `43b880a32635110df8821ed3dbc9c5871adb85bf`).
- Desktop/mobile Chromium browser smoke PASS 9/9 groups: https://github.com/snchat78-svg/LabVerse/actions/runs/42800382248.
- Validator covers source order/IDs, 126 fail-closed SDS/supply states, 19-column task-scope screen, 23-column task matrix, 24 unique input candidate IDs, the separate Acetanilide output reference, six excluded lexical/role false hits and all 41 reconciliation rows/statuses.
- These checks validate repository evidence integrity and browser smoke only. They do not approve physical chemistry, authenticate the current official reagent BOM, validate SDS or establish a scientific solver.

## Current phase and next work

- Phase 0: DONE (planning baseline).
- Phase 1 / 1.1: IN PROGRESS.
- Phase 2 scientific contracts/results: BLOCKED.
- Phase 5 real 3D assets: NOT STARTED.
- Phase 6 deterministic experiment runtime: NOT STARTED.

**Next:** close the remaining candidate/method source gaps task by task with qualified Chemistry/Safety review and authoritative current SDS/BOM/method sources. Keep all 41 task records documentary-only until their evidence and approval gates pass.
