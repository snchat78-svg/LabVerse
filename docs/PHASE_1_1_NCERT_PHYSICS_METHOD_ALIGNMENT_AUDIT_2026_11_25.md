

## Automated source-data integrity verification

- Added `scripts/validate-physics-source-crosswalk.mjs` and `.github/workflows/labverse-source-data-check.yml`.
- **GitHub Actions Run #2 SUCCESS:** https://github.com/snchat78-svg/LabVerse/actions/runs/45634528491.
- Verified 105 item schedule rows, 52 unique candidate-linked items, 219 unique candidate task/item pairs, 41 task gap rows, 515 stockroom audit rows, matching item name/use/page bindings, and all candidate statuses remaining NOT_PROMOTED.
- The validator also guards against regressing the E12/item-49 classification. This automated check is data integrity only; item images/variants, procurement, physical stock, safety, rights and expert review remain open.

# NCERT Physics manual method-alignment audit — Class XI RBSE Physics

**Date:** 2026-11-25  
**Primary source:** NCERT, *Manual of Secondary Stage Physics Laboratory Kit for Grades XI and XII*, ISBN 978-93-5292-653-4, [official NCERT PDF](https://ncert.nic.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf). The manual is separate from the RBSE 2026–27 syllabus. It must not be treated as a procurement specification for the RBSE schools.

## Scope

- Re-audited the existing **219 task-to-item candidate references** for **41 source-page-confirmed RBSE Class XI Physics tasks** (40 tasks have one or more current candidate links; the Fortin-barometer project has none).
- Matched each candidate catalogue ID to its serial entry in the NCERT kit item schedule and paraphrased indexed use; compared that use with the closest NCERT method/Activity section where one exists.
- Added one row for each source task/candidate item pair. Added a separate 41-row equipment-gap review to identify catalogue items that appear relevant in the NCERT method but were omitted from the task's existing candidate list, and task materials missing from that list.
- Source references use the manual's experiment/activity printed page numbers; all **105 current Physics catalogue IDs** (serials 2–106) are now matched to item-schedule pages xi–xxv, and all 105 schedule table text rows have a paraphrased name/use record. The 52 candidate-linked items are attached to all 219 pair rows; item images, physical variants and procurement remain open. NCERT's preface explicitly says Searle's apparatus work was still in progress, and that the improvised Boyle's-law setup uses a syringe/wooden holder/weights. The preface also describes a resonance tube shared with viscosity practical work.

## Results

| Method-alignment status | Candidate references | Interpretation |
|---|---:|---|
| `EXPLICIT_METHOD_COMPONENT` | 81 | Method-specific evidence class; not approval. |
| `CONDITIONAL_OR_ANCILLARY` | 66 | Method-specific evidence class; not approval. |
| `NOT_CONFIRMED_IN_METHOD` | 6 | Method-specific evidence class; not approval. |
| `NOT_A_SUBSTITUTE_FOR_ABSENT_SEARLE_APPARATUS` | 5 | Method-specific evidence class; not approval. |
| `ITEM_ROLE_OR_VARIANT_MISMATCH` | 18 | Method-specific evidence class; not approval. |
| `NO_COMPARABLE_NCERT_METHOD` | 43 | Method-specific evidence class; not approval. |
| **Total** | **219** | All candidate pairs retained; no row promoted. |

These are not scores or confidence percentages. Where a task has no comparable NCERT method, a kit item may be a plausible object but cannot be validated by that manual method.

## Corrections and source-supported findings

1. **Spherometer practical (RBSE EXP-03):** NCERT E3 apparatus explicitly calls for a spherometer, a spherical surface such as a watch glass/convex mirror and a plane glass plate. The watch glass and plane plate are therefore method components, not merely speculative supports.
2. **Searle's apparatus (RBSE EXP-09):** NCERT's preface says this apparatus was still being improvised. Generic stand, wire and weights must not be treated as Searle's apparatus or as a complete substitute.
3. **Boyle's law (RBSE EXP-11):** the manual's direct method uses a 60 mL syringe, a wooden block holder, a piston disc, 500 g slotted weights, grease, thread and a support stand. The existing candidate set included a measuring cylinder, which is not the gas-volume measurement mechanism in that method; the wooden holder, 500 g weights and syringe grease are additional item crosswalk candidates in the catalogue and have been flagged for review.
4. **Sonometer (RBSE EXP-15):** the item index ties the wire set, wooden wedge and tuning fork set to the sonometer; the U-shaped magnet is specifically for the separate AC-frequency method. The wire set was missing from the task's existing candidate references; the magnet should not be treated as a required item for the two RBSE methods without a task-specific reason.
5. **Resonance tube (RBSE EXP-16):** the manual method names the tube assembly, tuning fork, rubber pad, thermometer and two stands with clamps. The candidate list omitted the rubber pad and pinch clip (water stopper).
6. **Item 49 label and use:** the NCERT schedule prints the label `Wire gauge` and says it is a base kept on a tripod for uniform heating. The schedule does not call it a wire-diameter measuring instrument. Do not silently rename it or infer use beyond the source wording.
7. **Cooling curve (RBSE EXP-14):** NCERT E12 uses an improvised double-walled cooling apparatus, two thermometers, stirrer, stopwatch, heater, water and tripod. Item 49 is not listed in that E12 apparatus; it remains `NOT_CONFIRMED_IN_METHOD`. The separate NCERT wax-cooling Activity A8 explicitly uses item 49 as a tripod heating base, but that is a different practical. The updated task gap row also records the unresolved double-wall outer container/second thermometer/heater setup.
8. **Rolling friction activity (RBSE ACT-A04):** the comparable NCERT activity uses a horizontal surface, a hook block, frictionless pulley, pan, spring balance, spirit level, weight box and 10–11 cylindrical pencils as rollers. The previous task mapping included an inclined plane and steel/aluminium rollers; those are not equivalent to the described horizontal-pencil arrangement. Several purpose-matched item IDs were not linked in the earlier candidate list.
9. **Water jet activity (RBSE ACT-A05):** the method requires pipe/nozzle, pressurised water source, measuring tape and large protractor. The kit's full protractor is indexed for glass-slab incidence/emergence angles, and the straw is only a miscellaneous item; neither proves a water-jet outlet or large ground protractor.
10. **Double-incline/ball activity (RBSE ACT-A06):** the manual uses a curved channel or flexible tube and a steel ball; the steel/aluminium rollers are not substitutes for a ball or a curved channel.
11. **Paper scale/graph activity (RBSE ACT-A01/A03):** the pencil is explicitly used in paper-scale construction and graphing, but graph paper/white paper are not catalogued as standalone supplied kit items. The drawing board is indexed for prism work; the folding metre scale belongs to the optical-bench assembly.
12. **Specific heat (RBSE EXP-17):** NCERT E15 apparatus specifies a calorimeter, two thermometers, sample, beakers, heating source, balance/weight box or spring balance, thread, stand, tripod and wire gauze. The current candidate crosswalk does not include the physical weight box and does not establish that one listed thermometer represents the two required thermometer positions.
13. **Projects:** RBSE project titles were not treated as validated NCERT methods. In particular, the static spring load-extension project is not the same method as NCERT's oscillation-based spring experiment; the bar-pendulum radius-of-gyration project is not the simple-bob pendulum set; and the Fortin barometer remains absent from the current 106-row kit catalogue.
14. **RBSE Activity B5:** no direct equivalent was identified among NCERT Physics kit Activities A1–A12. A generic cooling curve must not be misrepresented as a validated factor-comparison method for liquid heat loss.

## Files

- 219-row pair-level audit (includes source item name/use, serial and schedule page): `data/curriculum/rbse_xi_physics_ncert_method_alignment_audit_2026_11_25.csv`
- 105-row item table text crosswalk: `data/catalogues/ncert_physics_item_serial_page_crosswalk_2026_11_25.csv`
- 52-item candidate index slice: `data/catalogues/ncert_physics_candidate_item_index_readback_2026_11_25.csv`
- 41-row task equipment crosswalk gap register: `data/curriculum/rbse_xi_physics_method_equipment_gap_review_2026_11_25.csv`
- Prior RBSE task-page adjudication: `data/curriculum/rbse_xi_physics_source_page_adjudication_2026_11_25.csv`
- Prior candidate-ID presence/relevance triage is retained; this addendum supplies the stronger NCERT method evidence.

## Limitations and next gate

- The NCERT item schedule is a kit catalogue, not evidence that a given school physically owns the apparatus or that RBSE procurement requirements match the NCERT kit.
- NCERT method equivalence is a useful comparison, not authorisation to copy procedures verbatim or to assume the RBSE task adopts every NCERT condition.
- No candidate source item is promoted; all remain subject to exact item-page/edition traceability, rights review, domain expert adjudication, procurement equivalence and task-specific safety review.
- The 41 RBSE task rows stay source-page-confirmed, but the remaining 106 RBSE practical register entries are not covered by this work unit.
- Phase 1.1 remains IN PROGRESS. Phase 2 remains BLOCKED. This audit does not enable executable scientific models, numerical prediction or learner-operated hazards.
