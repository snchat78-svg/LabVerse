# RBSE Class XI Chemistry — PRA-14 Unit 6 source-to-item crosswalk (27 November 2026)

## Official source reviewed

NCERT Class XI Chemistry Laboratory Manual 2025–26, Unit 6 — *Titrimetric Analysis*:

- Official NCERT-hosted PDF: https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm206.pdf
- Reviewed sections: 6.1–6.4 and Experiment 6.1, printed pages 69–73.
- PDF text and relevant page images were inspected. The 2025–26 footer is visible.
- Local PDF bytes, byte size and SHA-256 were not captured in this work unit. The official text/image review is not a binary-byte authentication or calibration-certificate check.
- RBSE source remains user-supplied `11_2027_copy.pdf`, SHA-256 `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5`, practical-section pp.123–126; official-server byte identity has not been tested.

No NCERT prose, diagrams, figures, or result tables were copied into the repository. The data file contains original short requirement summaries and source links only.

## Experiment 6.1 — determination of NaOH solution strength

The official method determines the strength of a given sodium hydroxide solution by titrating it against 0.1 M standard oxalic acid. Standard-solution preparation is referred to Experiment 2.1. The calculation section uses oxalic acid dihydrate molar mass 126 g mol−1; that hydration form must not be silently dropped from a scientific model.

The material list names:

- One 50 mL burette and one 10 mL pipette
- One 100 mL conical flask, one burette stand and one funnel
- One white glazed tile and one 100 mL measuring flask
- Oxalic acid, sodium hydroxide solution and phenolphthalein indicator, each “as per need”

The method asks for three concordant readings. The source titre/observation table and final NaOH result are blank. No volume readings or unknown sodium-hydroxide strength are invented.

## Crosswalk outcome

| Decision group | Rows |
|---|---:|
| Source-to-item decisions | 17 |
| Candidate-backed references | 10 |
| Explicit unresolved/no-ID requirements | 7 |
| Apparatus candidate references | 7 |
| Historical reagent identity references | 3 |
| Unique candidate IDs | 10 |

All 10 candidate references remain **NOT_PROMOTED**. The candidate-backed rows resolve to existing Chemistry inventory names/details/status.

### Volumetric glassware and equipment

- Existing 5 mL micro-burette candidate is not the specified 50 mL burette; no 50 mL burette ID exists.
- Existing 5 mL graduated glass pipette is not the specified 10 mL pipette; no 10 mL pipette ID exists.
- The conical-flask candidate includes a 100 mL capacity variant, but its user-uploaded specification is not byte-authenticated and no volumetric accuracy class is established.
- Existing two-way burette clamp-and-stand candidate is only a possible supporting item; single-burette fit, compatibility, stability and actual school stock are unverified.
- Existing micro funnel is not proven to fit the 50 mL burette.
- Existing glazed tile candidate gives 100 × 100 × 8 mm; source says white glazed tile but no dimensions, and candidate whiteness/specification remains unauthenticated.
- Existing volumetric flask candidates are only 10 mL and 25 mL, not the source's 100 mL measuring flask. The 100 mL measurement vessel remains no-ID.

### Reagent references

- Historical 2018 manual `Oxalic acid` is identity-level only. The Unit 6 method's 0.1 M standard acid and dihydrate calculation do not become a verified prepared solution, concentration, purity, grade, quantity or stock record.
- Historical `Sodium hydroxide` is identity-only; the experiment's unknown solution concentration is an output, not something to pre-fill.
- Historical `Phenolphthalein` is an identity label only; solvent, concentration, grade, quantity and current stock are unverified.
- No reagent candidate is approved for live use. Current identity-specific SDS and qualified safety/teacher review remain pending.

## Data integrity and blockers

- `data/catalogues/rbse_xi_chemistry_unit6_pra14_apparatus_reagent_candidates_2026_11_27.csv` has 17 decision rows, 10 candidate-backed and 7 no-ID.
- Apparatus references are existing user-uploaded candidate records and remain `USER_UPLOADED_CANDIDATE / NOT_BYTE_AUTHENTICATED`.
- Reagent references are historical name-only records and remain `SIMULATION_REFERENCE_ONLY / NO_LIVE_USE`.
- Procurement, physical stock, volumetric class/calibration, glassware tolerances, exact reagent formulation/purity, and standard-solution preparation evidence are not established.
- Qualified Chemistry method review, RBSE scope reconciliation, current SDS, exposure/waste review and lab-safety approval remain mandatory before any runtime.
- The output table is blank; no sample titre or calculated NaOH concentration is inserted.
- Phase 2 remains blocked. This crosswalk does not implement an executable titration procedure, mixing engine or live-use simulation.

## Verification

Run:

```sh
node scripts/validate-chemistry-unit6-pra14-crosswalk.mjs
```

The validator checks row counts and task ID, every candidate ID against the live Chemistry inventory, candidate names/details/status, exact burette/pipette/flask capacity mismatches, the 0.1 M oxalic-acid-dihydrate formulation gap, historical chemical identity-only links, blank result/no invented titre, rights and safety gates.

## Phase status and next exact task

PRA-14 Unit 6 source-to-item crosswalk is complete at documentary/reference level. Expert method review is still **PENDING**. Phase 1.1 overall remains **IN PROGRESS**; Phase 2 is **BLOCKED** pending method/safety/rights review; Phase 4.1 remains **IN PROGRESS**; real 3D assets and scientific runtime remain **NOT STARTED**.

**Next exact task:** resolve the expert-method-review gate for PRA-14 without changing the no-live-use state, reconcile the full RBSE practical subtask and indicator choices against NCERT sections 6.1–6.4, and inspect the source's Experiment 2.1 standard-solution dependency. Any future crosswalk extension must preserve the exact volumetric-class/calibration gaps and the no-result boundary. Do not enable live titration until qualified review and SDS/waste approval exist.
