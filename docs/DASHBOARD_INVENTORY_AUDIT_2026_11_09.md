# LabVerse Dashboard Inventory Audit — 2026-11-09

## Purpose

Check the available Physics, Chemistry and Biology apparatus/material catalogues and provide a three-direction dashboard without waiting for byte authentication to finish. Source authentication remains a separate evidence status. Dashboard presence does not make an item a verified current kit component or approve physical use.

## Subject-wise inventory snapshot

| Subject | Catalogue data available | RBSE task index | Current evidence boundary |
|---|---:|---:|---|
| Physics | 106 NCERT manual register rows, including 1 documentation row = 105 item rows | 80 (XI 41 + XII 39) | Manual text inspected in existing register; current procurement specification and supplied-stock status remain open |
| Chemistry | 55 uploaded MSCL candidate rows, including documentation/development rows = 53 item/material rows; separate historical manual index = 124 reagent labels | 41 (XI 27 + XII 14) | MSCL candidate is not byte-authenticated against current NCERT attachment; 124 reagent labels are from a separate historical manual, not a verified supply BOM |
| Biology | 177 with-microscope specification rows, including 2 documentation rows = 175 item/visual records | 50 (XI 22 + XII 28) | Existing upload-derived catalogue includes OCR/index-only rows; exact original-byte authentication and full visual-page audit remain open |

Total RBSE task-index rows: **171**. These are task index/crosswalk records, not 171 completed experiments or verified interactive lessons.

### Biology breakdown in the current with-microscope catalogue

- 82 apparatus/equipment/consumable-type catalogue records.
- 50 visual-aid cards.
- 7 embedded specimens.
- 35 permanent-slide records.
- 1 student microscope record.
- 2 documentation records excluded from the 175 content rows.

The without-microscope kit PDF was previously supplied according to the user. The repository currently holds no separate item-level catalogue surfaced from that prior upload. This is an internal retrieval/index gap; **do not ask the user to upload it again** and do not infer its differences from the with-microscope variant.

## Biology manual chemical/reagent/stain list

The newly received 141-page Biology Kit Manual code 13163 lists 58 entries on printed pages xxvii–xxviii (PDF pages 28–29). The list is separately stored in `data/catalogues/ncert_biology_manual_reagents_58.csv` and included in the dashboard read model.

Important source statement: the manual explicitly says these chemicals will **not** be provided with the kit and will be managed by the institution/school/teacher/related staff. Therefore the dashboard labels them as school-managed references, not kit contents.

The source labels include, among others, acetocarmine, acetone, ammonia, amylase powder, Benedict solution, benzene, chloroform, formaldehyde, glacial acetic acid, hydrochloric acid, mercury, nitric acid, potassium hydroxide, sodium hydroxide, sodium hypobromite and sulphuric acid. This list is an inventory transcription only. It does not specify a complete identity/formulation/concentration/quantity/SDS for every source label and is not a handling guide.

## Chemistry reagent boundary

The historical NCERT MSCL manual catalogue records 124 numbered reagent/material labels. The separate safety-screen register has 126 records because it preserves two additional internal body/appendix references. These are not a current procurement BOM. Concentration, grade, supplied quantity, exact formulation, current SDS, exposure/waste controls and qualified Chemistry/Safety approval are still required. Dashboard status is `SIMULATION_REFERENCE_ONLY / NO_LIVE_USE`.

## Dashboard capability delivered

The dashboard entry point is `dashboard/index.html` and is organized around the three subjects. It exposes:

- searchable instrument, apparatus, material, specimen, slide, visual-aid and reagent lists;
- class XI / XII filtering and the 171-row practical task index;
- tap-to-add and drag/drop into a placeholder workbench;
- selected-item source/evidence/safety information;
- Learning Lab, Virtual Experiment Lab, Scientific Analysis and Research Studio navigation.

The workbench currently uses 2D catalogue placeholders. No production 3D assets, experiment runtime, Physics/chemistry/biology solver, reaction outputs or calculated measurements are claimed.

## Validation

GitHub Actions run `LabVerse dashboard checks` for commit `1405e604d18e0ffe6fc104fae5fe6dcf740d9e61` completed successfully:

- JavaScript syntax check: PASS.
- Inventory read-model integrity: PASS.
- JSON schema syntax check: PASS.

The catalogue validator checks subject counts, unique item IDs, 171 total tasks, chemistry no-live-use status, Biology not-supplied-with-kit status and the no-repeat Biology variant acknowledgement. These checks are data/software integrity checks only, not scientific validation.

## Next work

1. Inspect the dashboard in a real browser at desktop and narrow Android viewport sizes, then fix any UI issues.
2. Recover the prior without-microscope catalogue/attachment record internally; do not request a repeat upload.
3. Continue detailed item-to-RBSE-practical-to-original-asset-to-model-rule-to-test traceability for each subject.
4. Keep Phase 1 source, rights, safety and expert-review gates open until their evidence is complete. The dashboard UI may progress in parallel; scientific engines remain gated.
