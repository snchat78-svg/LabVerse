# Phase 1 — Subject-wise Equipment and 3D Asset Inventory

Status: PRELIMINARY / NEEDS_REVIEW (2026-10-31)  
Purpose: identify object families and asset requirements from RBSE 2026 baseline and NCERT/CIET reference lists. This is not yet a final count or a claim that every item is required by the current 2027 RBSE syllabus.

## Item schema

Every inventory record will eventually use:
- stable item ID and canonical name;
- English/Hindi aliases;
- subject/domain, class/level and category;
- source practical IDs and source page/section;
- model/visual fidelity tier;
- 3D asset path, source/licence, scale, pivot, bounding box and LOD;
- allowed transforms and interactions;
- compatibility with other apparatus/materials;
- measured range/precision/calibration metadata where applicable;
- safety/supervision labels;
- verification state and reviewer.

## Physics — initial object families

| Candidate item IDs | Equipment family | Example items / interactions | Source mapping |
|---|---|---|---|
| PHY-MEAS-* | Measurement | Vernier calipers, screw gauge, spherometer, metre scale, beam balance, stopwatch; scale/least-count/zero-correction controls | NCERT XI Physics experiments E1–E4 |
| PHY-MECH-* | Mechanics | Pendulum stand/bob, thread, weights, spring, hanger, friction block, inclined track, pulley/force board; move, load, angle and timing | NCERT XI Physics E5–E10, activities/demonstrations |
| PHY-FLUID-* | Fluids/materials | Boyle's-law apparatus, capillary tube, liquid vessel, falling sphere/viscometer, thermometer; pressure/volume/flow observations | NCERT XI Physics E11–E13 |
| PHY-THERM-* | Thermal | Calorimeter/mixing setup, thermometer, hot body/cooling apparatus | NCERT XI Physics E14/E17 and related practicals |
| PHY-WAVE-* | Waves/sound | Sonometer, tuning fork/electromagnet, resonance tube, coupled pendulums, spring | NCERT XI Physics E15–E16 and demonstrations |
| PHY-ELEC-* | Circuit/electricity | Cell/power supply, key, wires, resistance wire, metre bridge, resistance box, rheostat, ammeter, voltmeter, galvanometer, potentiometer, diode/transistor boards | NCERT XII Physics experiments |
| PHY-OPT-* | Optics | Concave/convex mirrors, convex/concave lenses, optical bench, screen, prism, glass slab, travelling microscope, light source | NCERT XII Physics experiments |
| PHY-MAG-* | Magnetism/modern physics | Bar magnet, compass/magnetic field board, induction coil, transformer, diode modules | NCERT XII Physics demonstrations |

## Chemistry — initial object families

| Candidate item IDs | Equipment/material family | Example items / interactions | Source mapping |
|---|---|---|---|
| CHEM-GLASS-* | Glassware | Test tubes, beakers, conical flasks, measuring/volumetric flasks, measuring cylinders, burette, pipette, glass rods, funnels, reagent bottles, watch glass | NCERT XI Chemistry basic lab equipment; titration and preparation practicals |
| CHEM-TRANSFER-* | Transfer/filtration | Droppers, pipettes, filter funnels, filter paper, wash bottle, glass tubing, corks/cork borer | NCERT XI Chemistry basic techniques |
| CHEM-HEAT-* | Heating | Approved virtual heat source, tripod/wire gauze where used, test-tube holder/clamp, evaporating/crystallisation vessel, thermometer | NCERT XI Chemistry heating/crystallisation; only virtual actions |
| CHEM-MEASURE-* | Measurement | Laboratory balance, volumetric scale, thermometer, pH paper/meter, conductivity/EMF apparatus where required | NCERT Chemistry titration, pH, thermochemistry/electrochemistry |
| CHEM-ANALYT-* | Analysis apparatus | Spotting tile, test-tube rack, wash bottle, filtration setup, chromatography paper/chamber, melting/boiling-point setup | NCERT qualitative analysis, chromatography, purity tests |
| CHEM-REAGENT-* | Reagents/samples | Versioned substance/sample records; only reagents explicitly mapped to a reviewed practical; amount/concentration/solvent/state and hazard metadata | Practical-specific source mapping required |

Do not create a generic “mix any two chemicals” action. Chemical compatibility and visible outcomes are controlled by reviewed experiment rules; hazardous content remains a supervised virtual representation.

## Biology — initial object families

| Candidate item IDs | Equipment/specimen family | Example items / interactions | Source mapping |
|---|---|---|---|
| BIO-OPTIC-* | Microscopy | Compound microscope, objective lenses, stage, focus knobs, prepared slide, blank slide, cover slip; focus/magnification | NCERT XI Biology microscope exercises |
| BIO-DISSECT-* | Dissection/handling | Scissors, scalpel, forceps, dissecting needles, razor, hand lens, dropper, fine brush; limited virtual manipulation | NCERT XI Biology manual introduction |
| BIO-SLIDE-* | Slides/staining | Slides, cover slips, stains/reagents, mounting medium, slide holder, labelled tissue/cell slides | Biology microscopy, mitosis, plasmolysis and staining exercises |
| BIO-SPECIMEN-* | Specimens/models | Plant root/stem/leaf/flower, fungi, bacteria representations, animal specimens, life-cycle models, cell/DNA models | NCERT-CIET XI/XII Biology resource catalogue |
| BIO-PLANT-* | Plant physiology | Leaf, seed/germinating seed, flower, osmometer setup, capillary/water-loss demonstration apparatus | NCERT XI/XII osmosis, transpiration, pollen practicals |
| BIO-ECO-* | Ecology/field | Quadrat frame, soil sample containers, water sample containers, turbidity comparison vessel, SPM observation sample/card | NCERT XII Ecology practical resource list |
| BIO-GEN-* | Genetics/reproduction | Pedigree cards, chromosome/meiosis models, gametophyte and pollen models, hybridisation diagrams/models | NCERT XII Biology CIET resource catalogue |

## Cross-subject and research equipment (future packs)

- Environmental measurement: temperature, pH, humidity, light intensity, turbidity and particulate-matter sensors or explicitly labelled imported datasets.
- Materials science: sample coupons, hardness/tensile/thermal/electrical property test fixtures.
- Biophysics: optics, imaging and measurement apparatus linked to biological samples.
- Digital-only tools: graph board, equation/units panel, dataset table, hypothesis board, source/evidence graph and notebook.

Any real sensor connection is a future feature requiring permission, calibration, device compatibility and data-provenance rules. The initial product is a virtual lab and data-analysis platform.

## Asset production and acceptance rules

1. Prefer original low-poly models or permissively licensed assets; record provenance and licence per asset.
2. Use realistic proportions only when supported by measurement/specification sources.
3. Build high/medium/low LOD tiers and a 2D fallback.
4. An object must have a stable domain ID and usable controls; a static icon is not a 3D asset.
5. Test tap-to-add and drag-drop, movement, rotation, zoom/inspection, remove and reset.
6. Connectors, snap points and allowed actions must be experiment-specific.
7. The inventory is not final until every official practical has been traced to required items and every item to a source.
