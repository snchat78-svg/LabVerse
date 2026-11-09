# RBSE 2026–2027 — Six-Pack Task-Index Reconciliation

Audit date: 2026-11-09  
Phase: 1 / subphase 1.1  
Scope: compare the six consolidated XI/XII Physics, Chemistry and Biology task registers against docs/PHASE_1_RBSE_ALL_PRACTICAL_COVERAGE_REGISTER.md.

## 1. Task-index reconciliation result

<badge>Task-index coverage reconciled — documentary level only</badge>

- RBSE master task-index IDs found: **171 unique IDs**.
- IDs represented in the six consolidated pack CSVs: **171 unique IDs**.
- Missing from pack registers: **0**.
- Extra/unrecognised pack IDs: **0**.
- Duplicate task IDs across packs: **0**.
- **171/171 task IDs match exactly** across the source master and the six pack registers.

This confirms the task index is covered. It does not verify that every physical apparatus, specimen, slide, reagent, image, simulation or scientific method has been validated.

## 2. Per-pack coverage

| Pack | Task rows | Task groups from pack CSV | Original schema columns |
|---|---:|---|---:|
| XI Physics | 41 | EXPERIMENT: 17; ACTIVITY: 13; PROJECT: 11 | 18 |
| XI Chemistry | 27 | PRACTICAL_GROUP: 19; PROJECT: 8 | 17 |
| XI Biology | 22 | BOTANY_MAJOR: 4; ZOOLOGY_MAJOR: 2; BOTANY_MINOR: 5; ZOOLOGY_MINOR: 2; SPOTTING: 9 | 17 |
| XII Physics | 39 | EXPERIMENT: 18; ACTIVITY: 14; PROJECT: 7 | 18 |
| XII Chemistry | 14 | REDOX_ALTERNATIVE: 2; QUALITATIVE_ANALYSIS: 1; OR_OPTION: 4; CONTENT_BASED_ALTERNATIVE: 7 | 18 |
| XII Biology | 28 | BOTANY_MAJOR: 6; ZOOLOGY_MAJOR: 6; BOTANY_MINOR: 5; ZOOLOGY_MINOR: 4; SPOTTING_BOTANY: 3; SPOTTING_ZOOLOGY: 3; INVESTIGATORY_PROJECT: 1 | 18 |
| **Total** | **171** | Six pack registers | — |

### Six-pack total

- XI Physics: 41 (17 experiments, 13 activities, 11 projects).
- XI Chemistry: 27 (19 practical groups, 8 project options).
- XI Biology: 22 (4 Botany major, 2 Zoology major, 5 Botany minor, 2 Zoology minor and 9 spotting groups).
- XII Physics: 39 (18 experiments, 14 activities, 7 projects).
- XII Chemistry: 14 task/choice records (2 redox alternatives, 1 qualitative analysis group, 4 OR options and 7 content-based alternatives).
- XII Biology: 28 (6 Botany major, 6 Zoology major, 5 Botany minor, 4 Zoology minor, 6 spotting groups and 1 required open-topic project).

## 3. Normalized master CSV and schema issue

A normalized 20-column CSV has been created at data/catalogues/rbse_six_pack_task_index_traceability.csv. It retains:
- source task ID, class/subject, task group, section/choice-group when the source pack supplied it;
- RBSE page range, title, candidate source IDs and source evidence/match state;
- proposed assets/models/test vectors, safety/rights/expert/implementation state and unresolved gaps;
- originating pack CSV path for data lineage.

The original pack schemas were not identical: four packs use 18 columns and two use 17 columns. Some do not define a separate `section` or `choice_group` field. In the normalized register these fields remain blank where absent; no choices or sections have been inferred. A later data-contract pass should harmonize source schemas without losing legacy evidence.

## 4. Explicit unmatched or partial source/task matches

- **RBSE-XI-PHY-PRJ-08:** NO_SOURCE_ITEM_MATCH
- **RBSE-XII-PHY-EXP-14:** PARTIAL_MATCH_TRAVELLING_MICROSCOPE_NO_SOURCE_ITEM
- **RBSE-XII-PHY-PRJ-04:** NO_SOURCE_ITEM_MATCH_PHOTOTRANSISTOR_AND_IR_SOURCE
- **RBSE-XII-BIO-PRJ-01:** NO_FIXED_TOPIC; NO_TOPIC_SPECIFIC_MATCH

Additional pack-level source gaps remain documented:
- XI Physics: Fortin barometer has no match in the current 106-row Physics manual item list.
- XII Physics: travelling microscope is absent for EXP-14; phototransistor and IR source are absent for PRJ-04. Do not substitute LDR/LED.
- XI/XII Chemistry: MSCL scan remains an unauthenticated OCR upload and is not a reagent BOM; acids, bases, salts, indicators, concentrations and methods require separate source evidence. XI Chemistry mark allocation conflict remains unresolved.
- XI/XII Biology: Biology-with-microscope upload remains unauthenticated; index-only cards/slides/specimens cannot be treated as individually inspected. Several field/environment measurement instruments are missing; XII Biology project title remains teacher-assigned.
- All packs: candidate kit item presence does not prove procurement, task equivalence, quantity, tolerance, calibration or physical asset acceptance.

## 5. Reconciliation checks

- 171 rows and 171 unique IDs: PASS.
- No duplicates: PASS.
- No source-master task ID missing: PASS.
- No extra/unrecognised task IDs: PASS.
- Per-pack task counts 41/27/22/39/14/28: PASS.
- Normalized 20-column schema: PASS.
- Source traceability CSV path populated for every row: PASS.
- Task title/class/subject/group fields populated: PASS.
- Missing section/choice fields left blank where source schemas lack them: PASS.

Result: **10/10 documentary task-index checks passed.** No scientific-model tests or app tests were run.

## 6. Phase 1 decision and exit gates

**Task-index coverage sub-gate: DONE (171/171).**  
**Phase 1 overall: IN PROGRESS. Phase 2: BLOCKED.**

The remaining Phase 1 exit gates are not satisfied:

1. Authenticate each uploaded NCERT/MSCL/Biology source against official attachments and record file/page hashes and revision.
2. Retrieve/reconcile authoritative procurement BOMs; verify quantities, dimensions, materials, grades, ranges, tolerances and safety notes.
3. Complete task-to-item review with qualified subject experts; resolve no-match and partial-match instrument requirements.
4. Inspect index-only visual cards, embedded specimens and permanent slides page-by-page; keep image rights/source IDs.
5. Build a separate verified reagent/material/specimen inventory; do not infer reagents from glassware lists.
6. Create item-level original 3D/2D asset acceptance sheets and licensing/attribution decisions.
7. Define deterministic scientific models and valid domains/assumptions/units/uncertainty.
8. Implement independent ordinary/boundary/invalid test vectors and execute scientific regression tests.
9. Complete ethics/safety reviews for biological samples, chemistry, heating, pressure, electrical circuits and field sampling.
10. Obtain recorded teacher/domain expert sign-offs and close all unresolved Phase 1 decision records.

## 7. Next work unit

Do not start Phase 2 yet. The next Phase 1 work unit is a source-authentication and procurement-gap register by source document/item family, prioritised by blockers that affect multiple task groups. Phase 2 can begin only after the Phase 1 exit checklist is explicitly satisfied and approved.
