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


## Link to experiment outcome mappings

The first 10 representative mappings connecting equipment to actions, inputs, observations and dashboard behaviour are in PHASE_1_PRACTICAL_COVERAGE_MATRIX.md. The current inventory categories are not yet final; the completed item-level catalogue must be derived from the complete official practical list and NCERT kit specifications.


## NCERT Higher Secondary Biology kit overview evidence

The official NCERT School Kits overview PDF (pages 8–9) describes the Higher Secondary Biology Lab Kit as having equipment for Biology syllabus experiments in Classes XI and XII. The overview specifically mentions:
- laboratory instruments;
- glassware;
- compound microscope;
- permanent slides;
- stains;
- cards.

This is broad kit evidence, not a complete item count/specification. The detailed Biology kit manual itself remains unavailable through the current PDF retrieval route. Do not infer exact slide/specimen counts, model types or sizes from the overview photograph. Source: https://www.ncert.nic.in/division/dek/pdf/NCERT_Educational_School_Kit-Enhancing-UN278.pdf (PDF pages 8–9).

## NCERT Higher Secondary Physics kit overview cross-check

The same official overview names optical bench, metre bridge, potentiometer, Boyle's-law apparatus, resonance-of-sound apparatus, diode/transistor characteristic apparatus, sonometer, resistance box and pan balance. The full Physics kit manual remains the stronger item-level source for exact apparatus details.

## NCERT Higher Secondary Chemistry kit overview cross-check

The overview confirms the micro-scale kit's intent to limit liquid reagent and solid chemical quantities and use plastic containers and unbreakable droppers instead of conventional racks/bottles. This supports a first-class micro-scale inventory and quantity-tracking model. The full micro-scale manual remains the detailed source.


## NCERT Higher Secondary Biology kit — provisional detailed inventory (2026-10-31)

Detailed evidence and source-confidence boundaries are recorded in `PHASE_1_NCERT_BIOLOGY_KIT_REVIEW.md`.

NCERT official pages confirm the Grades XI–XII Biology kit/manual and separately list kit specification options with and without microscope. A secondary-hosted transcription of the 2018 141-page manual supplies candidate item-level names and quantities. Until verified against NCERT-hosted PDF/specification attachments, all counts below remain provisional.

### Candidate object and equipment groups
- **Core equipment:** storage kit box, optional student microscope, dissecting microscope, human skeleton, digital pocket balance, mortar/pestle, cavity-block tiles and porcelain dish.
- **Tools/supports:** modular stand/base/rod/clamp/boss head, G-clamps, scalpel, surgical/dissecting scissors, forceps, dissecting needles, spatula, tripod, test-tube holders, wire gauze, spirit lamp, pins and U-clips.
- **Glassware/optics:** capillary tubes, 1 mL and 10 mL graduated pipettes, cavity slides, glass slides, cover slips, magnifiers, droppers, conical flasks, rods/tubes, watch glasses, −10 to 110 °C thermometers, test tubes and boiling tubes.
- **Plasticware/consumables:** 50/100/250 mL beakers; 10/50/100 mL measuring cylinders; reagent/dropper bottles; Petri dishes; sample boxes; test-tube stands; plastic funnels; 3 mL Pasteur pipettes; coloured Mendelian cubes; zipper bags; corks; gloves; rubber bands; tape; herbarium sheets; chromatography/graph/filter/blotting/lens paper; pH paper; labels/tags; rope/thread/cotton/muslin; wash and lens-cleaning materials.
- **Specimens/models:** seven acrylic-embedded plant specimen examples, a list of permanent plant/animal/microbial slides, visual-aid cards for representative animal/plant groups, and human skeleton.
- **Chemistry reagent/stain inventory:** transcription reports 58 listed entries, but says they are not supplied as part of the kit and are managed by the school/teacher. Do not treat this as permission to run arbitrary reagent combinations.

### RBSE links added
- Class XI Biology: microscope, plant/animal tissues, root/stem T.S., mitosis, plasmolysis, stomata, potato osmometer, chromatography, transpiration, imbibition, flower families, skeleton and animal/plant spotting.
- Class XII Biology: flower reproduction, onion mitosis, quadrat density/frequency, soil/water sampling, pH/turbidity, pollen and meiosis, Mendelian genetics, pedigree, xeric/hydric adaptations and controlled pollination.

The kit inventory may contain material beyond the RBSE board list. Keep the NCERT kit pack and RBSE curriculum pack separate; add no extra NCERT exercises to RBSE exam requirements without an explicit mapping.



## Biology kit candidate item groups and stable-ID proposal (2026-10-31)

These IDs are proposed domain identifiers, not implemented objects. The quantities below come from a secondary transcription and remain provisional until official NCERT item-specification PDFs are checked.

| Candidate ID family | Contents | Candidate quantity/specification evidence | Source mapping |
|---|---|---|---|
| BIO-CORE-OPTICS-* | Student microscope, dissecting microscope, magnifiers, lens-cleaning supplies | Microscope optional (1); dissecting microscope (1); magnifiers (2) | XI microscope spotting; XI/XII slide practicals |
| BIO-CORE-DISSECTION-* | Scalpel, scissors, forceps, needles, spatula, stand/clamp system, tripod | Forceps (2); dissecting needles (4); G-clamps (2); stand components individually listed | Flower dissections, controlled pollination, plant/animal samples |
| BIO-GLASS-SLIDE-* | Glass slides, cover slips, cavity slides, slide box, droppers, pipettes, test tubes | Slides 2 × 50; coverslips 40; cavity slides 12; droppers 10; test tubes 12 | XI tissue/mitosis/plasmolysis; XII pollen/meiosis/spotting |
| BIO-GLASS-MEASURE-* | Beakers, measuring cylinders, flasks, thermometer, glass rods/tubes, capillary tubes | Candidate nominal capacities and counts recorded in Biology kit review | XI osmosis/respiration; XII sample analysis |
| BIO-PLASTIC-CONSUMABLE-* | Sample boxes, reagent/dispensing bottles, Petri dishes, funnels, paper, bags, labels, gloves, thread, cloth | Multiple quantities and dimensions in the secondary transcription; not yet specification-verified | XI/XII slide prep, chromatography, field sampling |
| BIO-FIELD-QUADRAT-* | Measuring tape, thread, nails, hammer, bags and label cards | Tape 1; nails 5; hammer 1; thread 1 roll (provisional) | XII quadrat density/frequency and field projects |
| BIO-GENETICS-CUBES-* | Coloured inheritance cubes | Four colours × 72 each (provisional) | XII Mendel laws; digital phenotype/genotype representation |
| BIO-SPECIMEN-ACRYLIC-* | Embedded plant specimen models | Utricularia, Funaria, Dryopteris, Marsilea, Salvinia, Hydrilla, Pistia | XI/XII botany specimens and adaptation comparisons |
| BIO-SLIDE-PERMANENT-* | Plant/animal/microbial permanent slide sets, mitosis/meiosis stages | Individual candidate slide catalogue; full counts require official manual check | XI cell/tissue and spotting; XII mitosis/meiosis/spotting |
| BIO-VISUAL-AID-CARD-* | Plant/animal/microbe specimen and structure cards | Only subset visible in the retrieved transcription; exact complete list pending | XI/XII spotting and identification |
| BIO-REAGENT-VIRTUAL-* | Biology stains, indicators, enzyme/substrate/urine test reagents | 58 listed names in the transcription; manual says reagents are separately managed, not kit-supplied | XI enzyme/urine/food tests; XII stain/slide practicals |

### Asset acceptance rules specific to Biology
- Model taxonomy, common/scientific name and identity source are required before a specimen/card is published.
- Microscopy assets must state image resolution and which structures are actually visible.
- Slide states must distinguish temporary preparation, permanent slide and diagram/model.
- Reagent identities are versioned records with hazard metadata; unsafe chemistry is not exposed as real-world instruction.
- Quadrat and ecological analysis must preserve sample coordinates/area, replicate count, dataset provenance and uncertainty.
- The NCERT kit is a reference inventory, not a mandate to copy kit imagery or reproduce copyrighted manual pages. Create original meshes, slide art and lesson text or obtain permission.


## Official NCERT Class XI Biology manual — evidence-based asset detail (2026-11-01)

Source: NCERT, *Laboratory Manual: Biology, Class XI*, online label 2025–26, Exercise 1 and Introduction:
https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf

The following are **manual-described component/interaction candidates**, not a verified NCERT kit bill of materials:

| Stable candidate IDs | Evidence-based component/behaviour | LabVerse interaction/specification note | Verification |
|---|---|---|---|
| BIO-OPTIC-COMPOUND-MICROSCOPE | Monocular compound microscope; body tube, revolving nosepiece, stage, base/foot, arm and inclination joint | Tilt arm where supported; select eyepiece/objective; inspect named components; model the specific asset variant, not an assumed universal build | DESIGN_ONLY |
| BIO-OPTIC-EYEPIECE-* | Manual describes 5X, 10X and 15X eyepiece options | Lens magnification is discrete metadata; total magnification calculated as ocular × objective | DESIGN_ONLY |
| BIO-OPTIC-OBJECTIVE-* | Manual describes 10X, 40X or 45X objectives; some microscopes may add a 100X oil-immersion objective | Revolving nosepiece selection; 100X oil immersion is optional/variant-specific and must not be enabled without a supported slide/procedure model | DESIGN_ONLY |
| BIO-OPTIC-STAGE-FOCUS-* | Stage with slide clips, coarse/fine focus, iris diaphragm and condenser; some microscopes may omit condenser | Move slide, lock clips, adjust illumination/aperture, use coarse focus at low power and fine focus at high power; no unsupported mechanical precision claim | DESIGN_ONLY |
| BIO-OPTIC-ILLUMINATION-* | Adjustable mirror below condenser described for illumination | Illumination/aperture state changes visibility; avoid direct-sunlight focusing behaviour in learner actions | DESIGN_ONLY |
| BIO-OPTIC-CLEANING-* | Silk cloth, lens-cleaning fluid and lens-cleaning paper named for Exercise 1 | Cleaning interaction can alter a simulated “lens clean/dirty” state; do not model chemical handling beyond approved bounded virtual behaviour | DESIGN_ONLY |
| BIO-DISSECT-SCISSORS-* | Student dissection-box recommendation: two pairs (fine-tip/small and larger) | Sharp-tool handling is supervised/virtual-only; not a general free-form cutting capability | DESIGN_ONLY |
| BIO-DISSECT-SCALPELS-* | Student dissection-box recommendation: one small and one medium scalpel | Hazard-tagged, virtual-only, teacher-supervised workflows | DESIGN_ONLY |
| BIO-DISSECT-FORCEPS-* | Student dissection-box recommendation: two forceps, one fine sharp-tip and one medium blunt-tip | Tool geometry/interaction should match reviewed specimen protocols | DESIGN_ONLY |
| BIO-DISSECT-NEEDLES-* | Student dissection-box recommendation: two dissecting needles | Hazard-tagged, virtual-only, no unconstrained live-tissue action | DESIGN_ONLY |
| BIO-DISSECT-HANDLENS / BIO-DISSECT-DROPPER / BIO-DISSECT-BRUSH | Hand lens, dropper and fine brush listed in the dissection-box recommendation | Use only in named reviewed activity workflows | DESIGN_ONLY |
| BIO-SAFETY-APPAREL-* | Laboratory coat/apron and hand towel listed as student preparation | Represent as readiness/safety checklist state, not as kit-supplied inventory | DESIGN_ONLY |

**Supply boundary:** the manual's Introduction describes student preparation and laboratory equipment; it does not establish that these items are supplied with NCERT's Higher Secondary Biology kit. Kit-supplied, institution-supplied and learner-prepared items must remain separate inventory fields.

**Optics acceptance checks still required:** test focus direction, valid magnification combinations, coarse/fine focus behaviour, slide clipping, illumination/aperture response, objective-slide collision prevention, variant-dependent condenser/100X lens presence, and clear distinction between simulated optical appearance and a physically captured microscope image.

No 3D asset has been created and no microscope simulation has been implemented or tested.


## Exercise 1 — microscope source-specific interaction constraints (2026-11-01)

Official source: NCERT Class XI Biology Laboratory Manual, Exercise 1, printed pp. 5–7:
https://www.ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf

The accessible Exercise 1 figure and text describe candidate components: eyepiece, body tube, nosepiece/objectives, coarse/fine adjustment, stage and slide clips, stage aperture, iris diaphragm/condenser, mirror, vertical arm, inclination joint and basal foot. The source describes condenser absence on some microscopes, 5X/10X/15X eyepieces, 10X and 40X/45X objectives, and an optional third 100X oil-immersion objective on some microscopes.

New model constraints:
- Microscope asset variants must allow optional condenser and optional 100X objective; do not force both into every asset.
- At higher magnification, expose fine focus as the valid focus action; do not permit arbitrary coarse-focus jumps if the virtual model is intended to follow the cited exercise.
- Prevent objective-slide collision in the virtual interaction and present a diagnostic rather than silently passing through the slide.
- Do not expose a "focus direct sunlight into the tube" action. Keep illumination simulated and bounded.
- The exercise gives no numerical instrument dimensions, tolerances, resolution or calibration standard; none is added here.

Acceptance design remains DESIGN_ONLY. No microscope mesh, optical simulation or tests exist yet.


## NCERT Class XI Biology Exercises 2–6 — title-level asset families only (2026-11-01)

Crosswalk: docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_CROSSWALK.md  
Official manual: https://www.ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf

The NCERT contents index provides exercise titles/page starts, but the body pages for Exercises 2–6 were not retrieved. The following are placeholder families inferred only from those titles; they are not confirmed bill-of-materials entries:

| Exercise | Placeholder family IDs | Evidence state / hold |
|---|---|---|
| NCERT-XI-BIO-EX-02 — bacteria, fungi and plant-group morphology | BIO-SPECIMEN-MICROBE-*; BIO-SPECIMEN-PLANT-GROUP-*; BIO-OPTIC-*; BIO-SLIDE-* | TITLE_ONLY; do not assign taxa, quantities or slide types yet |
| NCERT-XI-BIO-EX-03 — selected animals by external features | BIO-SPECIMEN-ANIMAL-*; BIO-MODEL-ANIMAL-*; BIO-SPOTTING-* | TITLE_ONLY; animal list/diagnostic features pending |
| NCERT-XI-BIO-EX-04 — plant tissues and cell-shape diversity | BIO-SLIDE-PLANT-TISSUE-*; BIO-OPTIC-* | TITLE_ONLY; tissue list, plant parts and staining pending |
| NCERT-XI-BIO-EX-05 — temporary slide of animal tissues | BIO-SLIDE-ANIMAL-TISSUE-*; BIO-OPTIC-*; BIO-TRANSFER-* | TITLE_ONLY; sample, preparation, stain and precautions pending |
| NCERT-XI-BIO-EX-06 — mitosis | BIO-SLIDE-MITOSIS-*; BIO-OPTIC-*; BIO-STAIN-* | TITLE_ONLY; biological material and stage-preparation method pending |

**Do not infer:** onion-root-tip material, tissue type, organism species, stains, concentrations, apparatus quantities or timings. In particular, a Class XII onion-root-tip mitosis resource must not be silently substituted for the Class XI Exercise 6 protocol.

No apparatus record in this table is a verified procurement requirement. Each family remains DESIGN_ONLY pending official body-page extraction and Biology-teacher review.


## NCERT Biology Exercises 2–6 — body-level asset inventory extension (2026-11-01)

Evidence and confidence details: docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_DETAILED_AUDIT.md. Current manual contents are 2025–26; body-level detail comes from NCERT legacy chapter-wise PDFs stamped 23-04-2018. Candidate IDs remain DESIGN_ONLY pending current-edition body matching, taxonomy review and expert/safety approval.

### Exercise 2 — microbial and plant-group morphology
- BIO-SLIDE-BACTERIA-REP, BIO-SLIDE-OSCILLATORIA, BIO-SLIDE-SPIROGYRA, BIO-SLIDE-RHIZOPUS and BIO-SLIDE-YEAST.
- BIO-SPECIMEN-AGARICUS, BIO-SPECIMEN-LICHEN-FORMS, BIO-SPECIMEN-MARCHANTIA, BIO-SPECIMEN-FUNARIA, BIO-SPECIMEN-DRYOPTERIS, BIO-SPECIMEN-PINUS.
- BIO-SPECIMEN-ANGIOSPERM-MONOCOT and BIO-SPECIMEN-ANGIOSPERM-DICOT.
- Use prepared/virtual slides only; no culturing fungi/bacteria or spore-handling.

### Exercise 3 — animal external morphology
- BIO-ANIMAL-AMOEBA, BIO-ANIMAL-HYDRA, BIO-ANIMAL-FASCIOLA, BIO-ANIMAL-ASCARIS.
- BIO-ANIMAL-PHERETIMA, BIO-ANIMAL-HIRUDINARIA, BIO-ANIMAL-PALAEMON, BIO-ANIMAL-INSECT-EXAMPLES.
- BIO-ANIMAL-PILA, BIO-ANIMAL-ASTERIAS, BIO-ANIMAL-SCOLOIDON, BIO-ANIMAL-ROHU.
- BIO-ANIMAL-FROG, BIO-ANIMAL-CALOTES, BIO-ANIMAL-COLUMBA, BIO-ANIMAL-ORYCTOLAGUS.
- Use virtual/approved representations only; no animal collection or formalin handling.

### Exercise 4 — plant tissue/section assets
- BIO-SLIDE-TS-NERIUM-LEAF, BIO-SLIDE-TS-LOTUS-LEAF, BIO-SLIDE-TS-LOTUS-PETIOLE.
- BIO-SLIDE-VS-SHOOT-APEX, BIO-SLIDE-VS-ROOT-APEX, BIO-SLIDE-TS-CUCURBITA-MENTHA-STEM.
- BIO-SPECIMEN-MACERATED-PLANT-CELLS.
- BIO-TISSUE-PARENCHYMA, BIO-TISSUE-COLLENCHYMA, BIO-TISSUE-SCLERENCHYMA, BIO-TISSUE-XYLEM-PHLOEM, BIO-TISSUE-PALISADE-SPONGY, BIO-TISSUE-AERENCHYMA.
- Maceration chemistry in the current 2025–26 exercise is high hazard (corrosive acid/chromium(VI)); no real preparation ratios or heating instructions in the learner UI. Prepared slide or virtual tissue only.

### Exercise 5 — animal tissue slides (full current 2025–26 text extraction)
- BIO-SLIDE-CHEEK-EPITHELIUM, BIO-SLIDE-BLOOD-CELL-MIX.
- BIO-SLIDE-MUSCLE-STRIATED, BIO-SLIDE-MUSCLE-SMOOTH, BIO-SLIDE-MUSCLE-CARDIAC.
- BIO-SLIDE-KIT-CONSUMABLES.
- Full current 2025–26 text extraction covers epithelial/cheek-cell, blood/connective and striated/smooth/cardiac muscle content. Use synthetic/pre-prepared specimens only; no student cheek scraping, finger-prick, lancet/needle, real blood smear or animal dissection. Screenshot retrieval remains blocked.

### Exercise 6 — mitosis
- BIO-SLIDE-MITOSIS-PERMANENT.
- BIO-CELL-STAGE-INTERPHASE, BIO-CELL-STAGE-PROPHASE, BIO-CELL-STAGE-METAPHASE, BIO-CELL-STAGE-ANAPHASE, BIO-CELL-STAGE-TELOPHASE.
- BIO-CYTOKINESIS-PLANT, BIO-CYTOKINESIS-ANIMAL.
- Permanent-slide observation is source-supported; do not substitute an onion-root-tip preparation from a Class XII resource.

These are candidate IDs and design requirements, not a verified procurement list or built assets.


## Current-edition NCERT Class XI Biology Exercises 2–6 confirmation (2026-11-01)

The direct current NCERT host PDFs kelm302–kelm306 are now text-extracted; see docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_DETAILED_AUDIT.md.

Corrections and exact boundaries:
- EX02: current manual confirms permanent slides/hand sections/photographs and named bacteria, fungi and plant-group examples. Keep only virtual/prepared representations; no live microbial culture/spore handling. Historical taxonomy/biological statements need modern science review.
- EX03: current manual confirms slides, museum specimens, models, photographs/charts and microscope; it describes formalin-preserved specimens. No real specimen collection/preservation/formalin handling in LabVerse.
- EX04: current manual confirms prepared sections and macerated plant material; high-hazard nitric/chromic/sulfuric acid and potassium dichromate method. Keep reagent prep/heating/sharp-tool actions out of learner-facing content; use prepared slides/virtual tissue models.
- EX05: full current 6-page text confirms epithelial, connective/blood, striated, smooth and cardiac muscle content. Use synthetic/pre-prepared slides only. No cheek scraping, finger-prick, lancet/needle, real blood smear or animal dissection in LabVerse. The file does not provide a nervous-tissue procedure despite the general introductory list of four tissue groups.
- EX06: current manual confirms permanent slides, compound microscope, initial 10X and higher 40X observation, mitotic stages and plant/animal cytokinesis. Candidate 3D model must not pretend the student is preparing an onion-root-tip slide.

These remain candidate asset families and interaction requirements, not built or scientifically signed-off assets.
