# RBSE Class XI Chemistry — NCERT Unit 4 task-to-item crosswalk (27 November 2026)

## Scope and primary source

This bounded Phase 1.1 work unit reviews the existing RBSE Class XI Chemistry tasks PRA-08 and PRA-09 against the official NCERT Class XI Chemistry Laboratory Manual, Unit 4, *Chemical Equilibrium (Ionic Equilibrium in Solution)*.

- Official NCERT PDF: https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm204.pdf
- Official NCERT PDF text was opened and inspected for printed pages 47–52. The 2025–26 footer is visible. The PDF's local binary and SHA-256 were not captured in this work unit; do not claim byte-level authentication or a stored binary.
- RBSE source: `11_2027_copy.pdf`, SHA-256 `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5`, practical section pp.123–126. The user-uploaded RBSE bytes match the existing archive register; official-server byte identity remains untested.
- NCERT rights boundary: link and cite only. No NCERT text, tables, diagrams or figures were copied into the repository.

## Task coverage and decisions

| RBSE task | NCERT source | Crosswalk rows | Candidate-backed rows | No-ID rows |
|---|---|---:|---:|---:|
| PRA-08 — ferric/thiocyanate equilibrium shift | Unit 4 Exp. 4.1, printed pp.47–49 | 11 | 8 | 3 |
| PRA-09 — cobalt aqua/chloride equilibrium shift | Unit 4 Exp. 4.2, printed pp.50–52 | 14 | 11 | 3 |
| **Total** | | **25** | **19** | **6** |

The machine-readable file is `data/catalogues/rbse_xi_chemistry_unit4_apparatus_reagent_candidates_2026_11_27.csv`. It links exact RBSE task IDs to official NCERT Unit 4 method references and then to existing read-model IDs only where a source-supported name/type reference exists. One-to-many relationships are retained as separate rows.

- 12 apparatus candidate rows point to existing user-uploaded MSCL specification IDs. They remain `USER_UPLOADED_CANDIDATE_NOT_BYTE_AUTHENTICATED` and `NOT_PROMOTED`.
- 7 reagent rows point to historical 2018 manual labels. They remain `SIMULATION_REFERENCE_ONLY / NO_LIVE_USE`; a historical label is not a current kit supply, formulation, SDS or approval.
- 6 source requirements have no catalogue ID assigned. No substitute or new item ID was invented.
- All 19 candidate-backed rows remain `NOT_PROMOTED`. The crosswalk does not establish current procurement, school stock, dimensions beyond the existing candidate record, live-use permission or a validated scientific model.

## Source-specific limits preserved

### PRA-08 — Experiment 4.1

The official manual describes the ferric/thiocyanate colour-intensity comparison as **purely qualitative** and explicitly says molarity is not stressed. The observed colour is not a concentration measurement and cannot be used by this crosswalk to calculate an equilibrium constant.

The material table lists six boiling tubes, while the procedure describes five tubes in the first comparison series and another four in the second. This table/procedure count conflict is retained; it is not resolved into a procurement quantity. The source lists 100 mL and 250 mL beakers, while the current candidate read model lists only 10 mL and 50 mL beakers. No capacity substitute is approved.

Ferric chloride's source warning says to avoid skin and eye contact. Potassium thiocyanate remains subject to identity-specific current SDS, exposure/waste and qualified review.

### PRA-09 — Experiment 4.2

The source material table lists six test tubes, while the procedure describes five tubes in each of two series. The conflict is retained. The procedure states 4.0 mL total solution per tube; the existing micro-scale test-tube candidate is 2 mL and is explicitly not treated as equivalent. The current micro test-tube stand has four holes, not the five positions used in a series.

The material table says **acetone/alcohol**; the procedure specifically names **acetone**. Both historical labels are retained as separate rows, but alcohol is not treated as a demonstrated procedure substitute. Concentrated hydrochloric acid and cobalt chloride remain historical references only, not approved materials.

The official source includes corrosive and crossed-X warnings for hydrochloric acid and flammable/toxic pictograms for acetone and alcohol, with instructions to keep those bottles away from flames. Cobalt chloride is high-concern screened in the historical reagent register. No live handling or mixing workflow is approved.

## Verification

Run:

`node scripts/validate-chemistry-unit4-crosswalk.mjs`

The validator checks:
- exact task IDs and per-task row counts;
- one-to-many uniqueness and candidate/no-ID totals;
- every candidate apparatus ID against `dashboard/data/inventory.json`;
- every historical reagent ID against the inventory, 2018 manual register and safety screen;
- no-promotion, procurement, SDS, rights and teacher-approval boundaries;
- official Unit 4 source-state updates and source-specific qualitative/count/alternative constraints.

The source-data workflow is extended to run this validator on pushes and pull requests affecting the Unit 4 CSV, validator or relevant evidence inputs.

## Phase status and next task

Phase 1.1 remains **IN PROGRESS**. This closes only the Unit 4 source-body and task-to-item crosswalk sub-unit for PRA-08/PRA-09. Phase 2 remains **BLOCKED** until method provenance, asset/data rights, identity-specific hazard/SDS, waste and qualified teacher/safety evidence gates pass. Phase 4.1 remains in progress. Real 3D assets and scientific experiment runtime remain **NOT STARTED**.

**Next exact task:** recover and inspect the official NCERT Unit 5 body PDF `kelm205.pdf` for PRA-10, PRA-11 and PRA-12. The current source register records only alternate-host body text with host/edition unauthenticated. Use official NCERT body text as the primary method source; preserve fruit cultivar/maturity/preparation/temperature/calibration/uncertainty, acid/base identity and dilution-series gaps, and common-ion species/concentration-basis gaps. Do not claim a universal fruit pH or promote any reagent/method without source and safety review.
