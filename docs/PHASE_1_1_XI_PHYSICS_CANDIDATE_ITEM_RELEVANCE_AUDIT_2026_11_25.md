# Class XI Physics candidate-item relevance desk audit — 2026-11-25

## Scope and method

- Reviewed **41/41** Class XI Physics practical/task records whose RBSE task identity and source page were confirmed in `data/curriculum/rbse_xi_physics_source_page_adjudication_2026_11_25.csv`.
- Expanded all **219 candidate task-to-item references** from the existing six-pack task index into a one-row-per-task/item audit; these refer to **52 unique candidate catalogue IDs**.
- Compared the confirmed RBSE task title with the candidate item's current name, detail and source/evidence fields in the dashboard inventory and stockroom item-level audit. Existing task-level unresolved-gap notes were carried into every row.
- No item page proof is present in the current item-level read model (`ITEM_PAGE_NOT_PRESENT_IN_READ_MODEL`). Consequently this is a **desk relevance triage**, not source-page validation of each NCERT item and not expert approval.

## Results

| Desk classification | References | Meaning |
|---|---:|---|
| Direct task or core-component candidate | 37 | The item name or defining apparatus component is named by the task. It remains a candidate, not a verified procurement match. |
| Possible supporting component candidate | 114 | A plausible ancillary role exists, but task title alone does not establish necessity or exact setup. |
| Conditional or unresolved candidate | 68 | Optional, ambiguous, weakly supported or potentially mismatched; see the row-level rationale. |
| **Total** | **219** | 41 tasks; 52 unique item IDs. |

## Specific findings and gaps retained

- **EXP-01:** Vernier caliper is a direct instrument candidate. Beam balance remains conditional because RBSE describes a regular object of known mass; it is needed only if mass is not already supplied.
- **EXP-03:** Spherometer is direct. Plane glass plate and watch glass remain conditional supports/samples; the task wording does not prove that watch glass is the required spherical surface.
- **EXP-09:** candidate wire, weights and generic stand do not establish the named **Searle's apparatus**, extension comparator or a procurement-complete setup. The principal apparatus remains a gap.
- **EXP-11:** the 60 mL syringe is a plausible gas-volume component; the listed measuring cylinder is not evidence of calibrated gas-volume or pressure measurement. A validated pressure gauge/sensor is absent.
- **EXP-14 / EXP-17 / ACT-B01 / ACT-B03:** the item named `Wire gauge` has a source-note describing a gauze/heating-support role. This label/identity discrepancy remains unresolved; do not silently rename it.
- **ACT-A01 / ACT-A03:** paper/graph paper is not present among these candidate items. Marking/drawing tools and a folding scale do not complete the material specification.
- **ACT-A04:** a pencil is referenced in a manual activity note, but its relation to the RBSE rolling-friction task is unclear; an inclined plane also does not by itself satisfy the stated horizontal-plane condition.
- **ACT-A06:** rollers are not automatically interchangeable with the RBSE-named ball; the double-inclined configuration is not established.
- **ACT-B03:** a glass side-arm assembly could support liquid-level observation, but the task-specific indicator and geometry are not verified.
- **ACT-B06:** scale, stand and masses are only candidate parts; a defined clamp geometry and deflection readout instrument remain absent.
- **PRJ-02:** bob/thread pendulum parts are not a demonstrated knife-edge bar-pendulum pivot assembly.
- **PRJ-03:** a hooked wooden block is not a verified low-friction cart/track; constant-force delivery and a validated acceleration timing method remain missing.
- **PRJ-04:** thermal containers/sensors do not supply the insulation-material sample set.
- **PRJ-05:** tuning forks/rubber pad/sonometer do not provide calibrated sound-level measurement or absorber samples; a sonometer does not measure sound absorption.
- **PRJ-06:** assorted rubber bands are not characterized standardized tensile specimens; cross-section, gauge length and extension measurement remain gaps.
- **PRJ-07:** steel balls are a plausible direct sample; rollers and an inclined plane are not a horizontal 2-D collision surface or tracking system.
- **PRJ-08:** no candidate item IDs are present; the available 106-item Physics manual catalogue has no Fortin barometer/mercury barometer row. Keep as an explicit equipment gap; any future learner interaction must be virtual and mercury-safe.
- **PRJ-09:** helical spring is direct. Stopwatch has no demonstrated role in a static load-extension graph; ruler resolution and setup still need evidence.
- **PRJ-10:** current candidates are ancillary heating/temperature items, not known-finish surface samples or a radiation sensor/emissivity measurement system.
- **PRJ-11:** pendulum components are plausible core candidates; seconds-pendulum length, local (g), calibration and energy/damping method remain unverified.

## Status boundary

- Candidate references: **NOT PROMOTED**.
- All 41 tasks retain source-page confirmation from the RBSE syllabus lane; item-page evidence remains missing from the current read model.
- All rows still require Physics subject-expert review, source-page/edition traceability for the item itself, rights review, procurement-equivalence review and task-specific safety review.
- This audit does not authorize an executable procedure, numeric model, real apparatus operation, or Phase 2 scientific engine.

## Files

- Row-level data: `data/curriculum/rbse_xi_physics_candidate_item_relevance_audit_2026_11_25.csv`
- Source task adjudication: `data/curriculum/rbse_xi_physics_source_page_adjudication_2026_11_25.csv`
- Practical register/task index: `data/curriculum/rbse_2026_27_practical_register_xi_xii.csv`, `data/catalogues/rbse_six_pack_task_index_traceability.csv`
- Item baseline: `data/catalogues/stockroom_item_level_audit_2026_11_23.csv`

