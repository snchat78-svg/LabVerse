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


## NCERT kit-derived item details added (2026-10-31)

### Physics — combined Grades XI/XII NCERT laboratory kit

Primary source: https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf

Item-level additions/confirmation:
- Measurement: Vernier caliper, screw gauge, spherometer, beam balance, measuring cylinder, stopwatch.
- Stand/support: MS rod, boss head, G clamp, clamps, base plate, sliding bases/uprights.
- Mechanics: inclined plane, steel and aluminium rollers, helical spring, slotted weights, wooden block with hook, S-pulley, steel balls, pendulum bob.
- Fluids/thermal: capillary tube, boiling tube, beakers, thermometer/calorimetry-related apparatus, wire gauze.
- Sound/waves: sonometer, tuning forks, resonance-tube support parts, pinch clip.
- Electrical/electronic: battery eliminator, multimeter, resistor, rheostat, plug key, connecting wires, bulbs, fuse, diode, LED, transistor, IC, capacitor and LDR.
- Optics: optical-bench scales, joining strips/pins, sliding bases/uprights, lens/mirror holders, screen, object/image pencils, mirrors, lenses, prism/glass slab and spirit level.

Interaction implications:
- Vernier/screw-gauge jaws and ratchet need constrained movement and scale readout.
- Stand assemblies need stable snap/anchor points.
- Pendulum length, load, inclined-plane angle, wire tension and capillary radius/height must be experiment state variables.
- Circuit parts need terminal anchors and connection validation; ammeter is series, voltmeter parallel. Wrong polarity/loose connection should produce a diagnostic state.
- Multimeter must expose mode/range, leads, input terminals and units.
- LDR must respond to a modelled incident-light variable.
- Optical bench items need linear constrained movement, alignment and ray/image rendering.
- The Physics kit manual is copyrighted; create original meshes/materials and interaction logic.

### Chemistry — NCERT Micro Scale Chemistry kit, Classes XI/XII

Primary source: https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf

Item-level additions/confirmation:
- 50 mL graduated beaker.
- Borosilicate boiling tube.
- Capillary tube for melting/boiling-point apparatus.
- China dish/water-bath vessel.
- 25 mL, 50 mL and 100 mL conical flasks.
- Labelled 15 mL squeeze dispensing bottles.
- Graduated 3 mL Pasteur dropper/pipette and glass dropper.
- Ignition/fusion tubes.
- Glass stirring rod.
- 32 mm micro funnel and micro-filtration unit.
- Multi-well plate (the manual describes the multi-well format).
- W-tube, micro test tubes, micro test-tube stand and micro-spatula.
- Burner/water bath and thermometer where an approved experiment definition requires them.

Interaction/data implications:
- Reagent transfer should support drop-count and volume units, with sample identity and source reagent ID.
- A well plate is a multi-position sample container; each well tracks its own sample state.
- W-tube belongs to specific, reviewed gas-observation workflows; no general gas-generation sandbox.
- Micro-filtration should model filter/filtrate/residue states only for mapped experiments.
- Colour/precipitate observation is emitted by the relevant reaction/confirmatory-test rule and shown in both scene and analysis panel.
- Microscale quantities must be visible in the notebook and should not silently be converted to macro quantities.
- All chemical operations remain virtual and safety-labelled.

### Biology — manual identification and first-class assets

Sources:
- NCERT Class XI Biology manual: https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf
- NCERT Higher Secondary Biology Lab Kit catalogue code 13163: https://ncert.nic.in/uploads/publication/other_books_new.pdf
- NCERT Grade 11/12 Biology CIET activity index: https://ciet.ncert.gov.in/activity/grade11 and https://ciet.ncert.gov.in/activity/grade12

Additional initial items: scissors (fine-tip and larger), scalpel, fine/blunt forceps, dissecting needles, razor, hand lens, dropper, fine brush, prepared slides, cover slips and labelling/record tools. Handle sharp implements in a supervised virtual context. Final kit-specific quantities and detailed item list are pending Biology kit PDF retrieval.

## Inventory status

This file is an item-family and source-grounded preliminary inventory. Stable IDs, final counts, sizes, licence status, exact source pages, class/session applicability and item-to-practical mapping remain to be completed before inventory sign-off.
