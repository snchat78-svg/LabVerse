# RBSE Class XI Chemistry — Unit 5 official method and item crosswalk (27 November 2026)

## Source and evidence boundary

The primary body inspected for this bounded work unit is the official NCERT-hosted Hindi Class XI Chemistry Laboratory Manual, Unit 5, *pH and pH Changes in Aqueous Solutions*:

- Official URL: https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry%28hindi%29/khlm205.pdf
- The 2025–26 footer is visible in the returned PDF text layer.
- Printed pages inspected: Experiment 5.1 pp.54–55; Experiment 5.2 pp.56–57; Experiment 5.3 pp.58–60.
- The official English endpoint `kelm205.pdf` was not retrieved. This crosswalk uses the official NCERT Hindi variant, not the prior unauthenticated alternate-host text.
- The PDF body text was available through the official PDF text layer. Local PDF bytes, byte length and SHA-256 were not captured. Relevant screenshot requests returned HTTP 502, and exact first-edition/reprint metadata was not established.
- RBSE source remains user-supplied `11_2027_copy.pdf`, SHA-256 `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5`, practical section pp.123–126; official-server byte identity has not been tested.

No NCERT text, protected tables, diagrams or figures were copied into the repository. The machine-readable file contains original requirement summaries and source links only.

## Three practicals reviewed

| RBSE task | NCERT source | Rows | Candidate-backed | No-ID |
|---|---|---:|---:|---:|
| PRA-10 — pH of fruit juices | Exp. 5.1, pp.54–55 | 8 | 4 | 4 |
| PRA-11 — pH change on dilution | Exp. 5.2, pp.56–57 | 13 | 7 | 6 |
| PRA-12 — common-ion effect | Exp. 5.3, pp.58–60 | 13 | 7 | 6 |
| **Total** | | **34** | **18** | **16** |

The 18 candidate-backed rows comprise 12 apparatus references from user-uploaded candidate specifications and 6 historical 2018 NCERT MSCL reagent-label references. They resolve to 12 unique IDs. **All 18 candidate links remain NOT_PROMOTED.** The 16 no-ID rows preserve exact source requirements where no supported equivalent exists.

### PRA-10 — fresh fruit-juice pH

The official text names lemon, orange, apple and pineapple juice, four 100 mL beakers, four glass droppers, four test tubes, one pH chart, and pH paper/universal indicator solution as needed. It describes fresh-juice and comparative indicator/paper readings. The observation table has blank cells: no universal or measured fruit pH values are supplied.

The existing beaker candidate has only 10 mL and 50 mL variants; neither replaces the 100 mL beaker. The glass dropper and pH paper candidate references are type-level links only. A 2 mL micro test tube is not asserted to be an equivalent working tube. Fruit samples, pH chart and universal-indicator solution have no catalogue IDs.

### PRA-11 — dilution of acids and base

The official text lists 0.1 M HCl, 0.05 M H2SO4 and 0.1 M NaOH, 20 mL each, along with eight boiling tubes, four glass droppers, pH chart and pH paper/universal indicator as needed. It describes serial dilutions and contains a direct corrosive-acid warning: never add water into acid. The observation table is blank.

Historical 2018 manual entries for dilute HCl, NaOH and dilute sulphuric acid are retained only as name/identity references. The old register does not provide the exact 0.1 M / 0.05 M method formulations, quantities, current stock or approvals. Each exact solution is therefore separately recorded as a no-ID gap. No preparation or mixing workflow is enabled.

### PRA-12 — common-ion effect

The official source lists four 100 mL beakers, two 25 mL pipettes, four test tubes, one pH chart, 2 g sodium ethanoate, 2 g ammonium chloride, 50 mL 1 M ethanoic acid and 50 mL 1 M ammonia solution; pH paper/universal indicator as needed. The four-system comparison has an empty observation table and is qualitative.

The available beaker candidate is 10/50 mL only; the existing glass pipette is 5 mL, not 25 mL. Historical acetic-acid and sodium-acetate labels are synonym-level references, and the ammonium-chloride label is compound-identity-only. None proves the source concentration/form, quantity, current stock or safe use. The old “liquor ammonia” label was not assigned as an equivalent to 1 M ammonia solution.

## Data integrity and gates

- `data/catalogues/rbse_xi_chemistry_unit5_apparatus_reagent_candidates_2026_11_27.csv` has 34 rows, task split 8/13/13, 18 candidate-backed and 16 explicit no-ID.
- Existing user-uploaded apparatus candidates remain `USER_UPLOADED_CANDIDATE / NOT_BYTE_AUTHENTICATED`; historical reagents remain `SIMULATION_REFERENCE_ONLY / NO_LIVE_USE`.
- Current procurement, school inventory, exact formulation equivalence, reagent grade, calibration, stock quantity, physical safety approval and scientific runtime are not established.
- Identity-specific current SDS, exposure/waste review and qualified Chemistry/teacher/safety sign-off remain mandatory.
- Phase 2 is still blocked; this source crosswalk does not create an executable experiment.
- Unit 5 method body is now inspected from an official NCERT source, but the downloadable binary/hash and screenshot-level visual audit remain incomplete.

## Verification

Run:

```sh
node scripts/validate-chemistry-unit5-crosswalk.mjs
```

The validator checks all task IDs and row counts, candidate IDs against the live Chemistry read model, historical reagent labels against the inventory, unpromoted/no-ID states, exact beaker/pipette capacity gaps, concentration/formulation gaps, official source-state fields, blank-result boundaries, safety and NCERT rights gates.

## Phase and next exact task

Phase 1.1 remains **IN PROGRESS**. The Unit 5 source-body and task-to-item crosswalk sub-unit is complete for PRA-10/PRA-11/PRA-12, subject to later binary/hash, screenshot and expert-review evidence. Phase 2 remains **BLOCKED**. Phase 4.1 remains **IN PROGRESS**; real 3D assets and deterministic scientific runtime remain **NOT STARTED**.

**Next exact task:** use the same official-source-first process for the next uncompleted Chemistry method stream in the canonical source register. Before any method/item promotion, verify that the next task's body source is official and page-specific; then crosswalk exact apparatus, formulation, capacity and quantity to existing item IDs, explicitly preserve unresolved no-ID rows, add a validator/CI check, and update the master roadmap. Do not jump into Phase 2 or invent a simulation result.
