# RBSE Chemistry 2026–27 — recovered source and NCERT method-body recheck (2026-11-12)

## Outcome

**Bounded source-recovery and crosswalk-correction work unit: COMPLETE. Phase 1 / 1.1: IN PROGRESS.**

The latest Phase 1.1 resume point was the 24 Chemistry task rows that had no assigned input-reagent or product/output candidates. This work resumed from that exact register. It did not regenerate the 41-task Chemistry matrix, repeat the MSCL 53/53 visual audit, or ask the user to upload existing files again.

## 1. RBSE source recovery and byte checks

Both previously uploaded current-session PDFs were recovered from the existing Library. Their SHA-256 digests match the prior archive register:

| Source | Pages | Size | SHA-256 | Content inspected |
|---|---:|---:|---|---|
| `11_2027_copy.pdf` | 155 | 23,343,499 bytes | `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5` | RBSE Board syllabus 2026–27, Class XI Chemistry practical, PDF pp.123–126 |
| `12_2027_copy.pdf` | 169 | 18,279,805 bytes | `2249c6233817ba625460a97b1fab829d57d5ce6842a19bb12be80794c40e7e34` | RBSE Board syllabus 2026–27, Class XII Chemistry practical, PDF pp.137–140 |

The rendered pages visibly identify the Board of Secondary Education Rajasthan, session 2026–2027, subject code 41, and the relevant class. This confirms the recovered Library files match the earlier archived bytes. It **does not** establish byte equality with a fresh download from the RBSE server or validate any digital signature. The official RBSE index exposes the 2027 syllabus links, but the large server PDF response was not independently downloaded in this pass.

Official index: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika.htm  
Linked PDF paths: `11_2027.pdf` and `12_2027.pdf`.

## 2. Corrected Class XII crosswalk

The prior 2026-11-11 index-only review was too narrow because it compared the Class XII RBSE choices against the Class XI Chemistry contents index.

| RBSE task | Actual RBSE source | NCERT source found | Updated state |
|---|---|---|---|
| `RBSE-XII-CHEM-QUAL-01` | Class XII, p.138 | Official Class XII manual index lists Unit 7, Systematic Qualitative Analysis | Direct syllabus/index match; Unit 7 method-body retrieval still open |
| `RBSE-XII-CHEM-OPT-01` | Class XII, p.138 | Class XII Chemistry Unit 8, Tests for Functional Groups in Organic Compounds, manual pp.87–98 | Direct task-to-body match; Unit 8 text inspected |
| `RBSE-XII-CHEM-OPT-04` | Class XII, p.139 | Class XII Chemistry Unit 11, Tests for Carbohydrates, Fats and Proteins, manual pp.115–124 | Direct task-to-body match; Unit 11 text inspected |

The earlier statement that OPT-01 had no functional-group locator was true only for the inspected **Class XI** index. It is not a valid Class XII conclusion. Likewise, the former Biology-only cross-reference for OPT-04 is superseded by the direct RBSE Chemistry and NCERT Class XII Chemistry Unit 11 evidence.

NCERT official links:
- Unit 7 Class XII manual index: https://ncert.nic.in/science-laboratory-manual.php
- Unit 8: https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXII/chemistry/lelm108.pdf
- Unit 11: https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/chemistry/lelm111.pdf

The Unit 8 body groups the scope into unsaturation, alcoholic, phenolic, aldehydic/ketonic, carboxyl and amino sections; the RBSE list separates aldehydic and ketonic groups and identifies primary amino groups. LabVerse must preserve those distinctions rather than store a single undifferentiated “functional group” result. Unit 11 distinguishes pure-compound tests from foodstuff tests; those are different sample matrices and should not be collapsed into one result.

## 3. Class XI Chemistry method-body sources recovered

Three relevant NCERT Class XI body sources were accessible:

- Unit 6, Titrimetric Analysis (2025–26): https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm206.pdf. Its body describes endpoint detection, indicator choice, standard solutions, titration error and a worked volumetric-analysis experiment. This is a source reference, not approval of a current kit reagent or instrument specification.
- Unit 7, Systematic Qualitative Analysis (2025–26): https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm207.pdf. Its body contains Experiment 7.1 and Experiment 7.2. The Class XI source ion set must not be reused for the separate Class XII salt list without a direct comparison.
- Class XI Unit 7 explicitly includes Lassaigne’s extract/sodium-fusion content and warns against applying its test to chloroform/carbon tetrachloride because violent explosions may result. This is a hard non-executable safety boundary. Keep this as teacher-facing digital reference only unless a specialist-approved alternative is designed.

The Class XI main manual PDF remains a contents/partial-body source in the current retrieval path. Units 1–5 still require full method-body retrieval and review before those 19 remaining records can progress beyond index-level evidence.

## 4. Twenty-four task rows: what changed and what did not

The original 24 task IDs and their matrix order are preserved. The two new registers are:
- `data/catalogues/rbse_mscl_chemistry_unlinked_task_ncert_index_map_2026_11_11.csv` — corrected for the Class XII Unit 7/8/11 source distinctions and the recovered 2026–27 RBSE copy.
- `data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv` — one source-recovery row per task, including both PDF hashes and explicit evidence limits.

Current count:
- 24/24 task IDs reconciled to the recovered 2026–27 RBSE page range.
- 5/24 task rows have relevant official NCERT method-body text inspected in this pass: XI PRA-14, PRA-18, PRA-19 and XII OPT-01, OPT-04.
- 19/24 remain at contents/index/source-locator level or require the Class XII Unit 7 body.
- 0 reagent/product candidates promoted; 0 current procurement/BOM or stock records authenticated; 0 chemical procedures approved for physical student use; 0 scientific reaction/result models validated.

The empty candidate fields still do **not** mean reagent-free. NCERT manual material lists are not proof of current NCERT kit supply, RBSE kit supply, supplier stock, CAS/formulation, current SDS, concentration, compatibility, waste route or licence to reproduce the text/figures.

## 5. Safety, rights and scientific-engineering consequences

- Keep chemistry interactions as explicit, validated state transitions. A colour change alone cannot be treated as universal identity proof; preserve sample identity, controls, conditions, observations, uncertainty and competing explanations.
- High-consequence chemistry, toxic/corrosive substances, volatile solvents, gas evolution, silver reagents, open heating and sodium-fusion content remain non-executable. No automatic real-world method steps are authorised.
- Do not copy NCERT prose, tables or illustrations into the product. Use source links/citations and create original, reviewed explanations, diagrams and 3D assets; record rights before redistribution.
- Scientific outputs must identify whether they are source-imported, measured, simulated or calculated, plus source/model version, units, assumptions, uncertainty and run history.
- Research Studio may suggest hypotheses and discriminating tests; it must never label a model-generated suggestion as a new discovery without independent evidence, reproducibility and qualified review.

## 6. Product roadmap alignment

The long-term platform goal remains wider than school practicals. The roadmap still sequences:
1. complete source, rights, safety and item-level Phase 1 evidence;
2. define Phase 2 scientific data/evidence contracts;
3. harden the React app and workspace UI;
4. implement the real 3D bench and object/instrument interaction;
5. implement deterministic event/state runtime and Physics, Chemistry and Biology solvers;
6. connect live instrument visuals to the same experiment-state events;
7. build datasets, graphs, uncertainty/statistics, evidence graph, hypothesis workflow and reproducible Research Studio;
8. add practical assessment, offline mode, multilingual low-end Android and release validation.

A 3D object must not calculate science by animation. The eventual flow is: **3D asset + calibrated instrument model → learner action/event → deterministic domain solver → observation/result with units and uncertainty → analysis/graph → evidence-linked hypothesis → replayable notebook and independent validation.** New discovery is a research outcome that may be supported by LabVerse; it is not guaranteed or automatically declared by the app.

## 7. Phase status and next work

- Phase 1 / 1.1: **IN PROGRESS** — Chemistry source recovery/crosswalk correction advanced, but source specifications, all 515 item-level traceability rows, rights, safety, procurement and expert reviews remain open.
- Phase 2: **BLOCKED** for scientific models/results until Phase 1 gates close; dashboard read-model subset only.
- Phase 3: PARTIAL; React/TypeScript/Vite foundation and existing CI evidence remain as previously recorded.
- Phase 4: IN PROGRESS; dashboard workspace shell only.
- Phase 5: NOT STARTED; real 3D assets and interactive bench do not exist yet.
- Phase 6–9: NOT STARTED; deterministic runtime and domain solvers do not exist yet.

**Next bounded task:** retrieve the official Class XII Unit 7 method body and the remaining NCERT Class XI Units 1–5 body sources; then perform method-by-method, analyte/ion and apparatus reconciliation for the 19 remaining rows. Do not re-upload existing source files, re-run completed audits, assign guessed reagent IDs or skip the expert/safety/rights gates.
