# Phase 1 — Practical-to-Equipment-to-Result Coverage Matrix

Audit date: 2026-10-31  
Status: DESIGN MAPPING / PRELIMINARY — not a complete syllabus coverage sign-off and not implemented software.

## Why this matrix exists

A practical must map to more than a title and equipment list. Each supported activity is connected to:
- authoritative source and curriculum pack;
- apparatus, materials and sample IDs;
- actions the student can perform in the 3D workbench;
- variables/conditions that drive the scientific model;
- expected observations and calculated outputs;
- 3D visual states and live dashboard fields;
- formula/model/rule required;
- safety, uncertainty and unsupported conditions;
- tests and evidence needed before publication.

## Result status vocabulary

DESIGN_ONLY means the mapping is planned but no code exists.  
NEEDS_SOURCE_REVIEW means current board mapping/page audit is incomplete.  
NOT_MODELLED means no validated rule is available.  
VERIFIED can be assigned only after domain review and test vectors pass; none of the records below is VERIFIED.

## Physics coverage mappings

| Mapping ID | Level / source | Apparatus and materials | Student actions / model inputs | Live observations / calculations | 3D and dashboard requirements | Status |
|---|---|---|---|---|---|---|
| PHY-XI-VERNIER | NCERT-CIET Grade 11, Physics Lab Manual Experiment 1; https://ciet.ncert.gov.in/activity/grade11 | Vernier caliper, measured object, optional balance | Close jaws, set zero, measure external/internal dimension/depth; inputs: main-scale reading, coincident division, least count, zero error, repeated readings | Main scale + Vernier contribution, corrected reading, mean, uncertainty; density only when independent mass/volume data are available | 3D sliding jaw, depth rod, scale marks, cursor/callout for coincident division; panel shows raw and corrected readings with units | DESIGN_ONLY |
| PHY-XI-PENDULUM | NCERT-CIET Grade 11, Experiment 6; same source | Stand, clamp, thread, bob, metre scale, stopwatch | Change length, release at supported small angle, record time for N oscillations; inputs: length, trial times, N, repeats | Mean period T=t/N, T², L–T and L–T² plots; estimate g only with stated ideal assumptions and uncertainty | 3D stand/thread/bob with length control; live timer, trial table and graph | DESIGN_ONLY |
| PHY-XII-METRE-BRIDGE | NCERT-CIET Grade 12, Experiments 2–3; https://ciet.ncert.gov.in/activity/grade12 | Metre bridge, known resistance, unknown resistor, cell, key, galvanometer, jockey, wires | Connect valid Wheatstone bridge arrangement, move jockey to null point, vary known resistance; input includes which gap contains each resistor and balance length | Unknown resistance from the declared bridge ratio; repeated readings, mean and percentage difference | 3D bridge wire with movable jockey, terminal anchors and connection validation; live galvanometer null and resistance table | DESIGN_ONLY |
| PHY-XII-PN-JUNCTION | NCERT-CIET Grade 12, Experiment 16; https://ciet.ncert.gov.in/activity/grade12 | p-n diode board, regulated low-voltage source, series resistor, ammeter, voltmeter, leads | Select forward/reverse mode within documented safe model range; vary voltage; record current | I–V table/curve, threshold-region annotation only within the teaching model, compare forward/reverse behaviour | 3D diode terminals, leads and meters; current/voltage update only after valid circuit state | DESIGN_ONLY |

## Chemistry coverage mappings

| Mapping ID | Level / source | Apparatus and materials | Student actions / model inputs | Live observations / calculations | 3D and dashboard requirements | Status |
|---|---|---|---|---|---|---|
| CHEM-XI-PH-DILUTION | NCERT-CIET Grade 11, Chemistry Unit 5; https://ciet.ncert.gov.in/activity/grade11 | Beaker, pipette/dropper, pH paper or pH meter, labelled acid/base sample and solvent | Select known sample, choose a validated dilution series; inputs: chemical identity, initial concentration, dilution factor, temperature if modelled | Calculated concentration and modelled pH; indicator colour is a visual approximation tied to the declared pH range, not a universal exact colour | 3D pipette/dropper, beaker, sample volume; dashboard shows concentration, pH model status and indicator band | DESIGN_ONLY |
| CHEM-XI-EQUILIBRIUM | NCERT-CIET Grade 11, Chemistry Unit 4; ferric-thiocyanate / cobalt complex equilibrium items; https://ciet.ncert.gov.in/activity/grade11 | Labelled virtual reagent bottles, test tube/well plate, dropper, sample cells | Add only permitted known components or change a modelled condition; input: species IDs, concentrations and rule-supported condition change | Equilibrium-state/colour-category change from the matching curated rule; equilibrium expression and qualitative explanation; no arbitrary reagent mixing | 3D well/test tube, virtual drop transfer, solution colour changes synchronised with rule event | DESIGN_ONLY; curated rule required |
| CHEM-XII-REDOX-TITRATION | NCERT-CIET Grade 12, Chemistry Unit 1/6 KMnO4 titration entries; https://ciet.ncert.gov.in/activity/grade12 | Burette, pipette, conical flask, standard oxalic-acid or ferrous-ammonium-sulphate solution, supported acidic medium metadata | Record initial/final burette readings and replicate titres; select the exact standard/reaction variant and conditions | Mean titre and concentration/molarity from balanced stoichiometry; endpoint observation from approved rule; units and significant figures | 3D burette stopcock/meniscus, flask swirl, virtual endpoint tint; notebook stores raw readings separately from calculated concentration | DESIGN_ONLY; reaction variant-specific rule required |
| CHEM-XII-KINETICS | NCERT-CIET Grade 12 kinetics activities; https://ciet.ncert.gov.in/activity/grade12 | Virtual reaction vessels, timer, sample/reagent IDs and optional optical/turbidity indicator | Use a pre-approved reaction scenario and record time-dependent observation; inputs: defined starting state, temperature only where modelled, simulation clock | Rate proxy/relative trend from modelled observations; no invented kinetic constants; unsupported conditions return NOT_MODELLED | 3D vessel/solution state, timed observation timeline and graph; hazardous reagents never leave virtual scenario | DESIGN_ONLY; kinetics model validation required |

## Biology coverage mappings

| Mapping ID | Level / source | Apparatus and materials | Student actions / model inputs | Live observations / calculations | 3D and dashboard requirements | Status |
|---|---|---|---|---|---|---|
| BIO-XI-MICROSCOPE-MITOSIS | NCERT-CIET Grade 11, Biology Exercise 1; https://ciet.ncert.gov.in/activity/grade11 | Compound microscope, prepared slide, cover slip where the activity uses one | Place slide, select objective, adjust focus and inspect fields; input: slide identity, focus, magnification | Visible cell structures/stage classification only to the resolution represented by the reviewed slide asset; count/percentage only if the exercise defines sampling | 3D microscope with stage and focus controls; rendered microscope view changes with focus/objective; label only represented structures | DESIGN_ONLY |
| BIO-XI-PLASMOLYSIS | NCERT-CIET Grade 11, Biology Exercise 16; https://ciet.ncert.gov.in/activity/grade11 | Microscope, slide, plant epidermal specimen, coverslip, modelled solution samples | Place and focus the prepared slide; choose a reviewed concentration condition in the virtual scenario | Qualitative cell-state comparison and explanation of water movement; do not claim exact live-cell kinetics unless a quantitative model is validated | 3D slide/microscope plus magnified cell view with reversible state states; analysis links visual change to modelled condition | DESIGN_ONLY |
| BIO-XII-QUADRAT | NCERT-CIET Grade 12, Biology Exercise 23; https://ciet.ncert.gov.in/activity/grade12 | Quadrat frame, field/site grid, species observation cards or imported/sample dataset | Place quadrats on a defined site grid, count individuals and record presence/absence; inputs: quadrat area, number of quadrats, counts | Density/frequency calculations according to the declared sampling definition; sampling limitations and site variability shown | 3D/2D field map with draggable quadrat, recorded counts, species legend and chart | DESIGN_ONLY |
| BIO-XII-PEDIGREE | NCERT-CIET Grade 12, Biology Exercise 1; https://ciet.ncert.gov.in/activity/grade12 | Pedigree symbols, family data table and trait definition | Place/connect individuals, enter sex/trait state and generate candidate inheritance patterns | Probability/model consistency under stated inheritance assumptions; uncertain inheritance pattern remains ambiguous rather than overcalled | Interactive pedigree canvas, symbol connectors, genotype/phenotype inference panel and confidence/alternative models | DESIGN_ONLY |

## Cross-cutting source and evidence rules

- The CIET pages are NCERT learning-resource indices; they are not proof that each activity is a current RBSE practical.
- RBSE mapping is a separate field and remains NEEDS_SOURCE_REVIEW until the examination 2027 PDFs have been inspected.
- Each final entry must carry an exact source URL and page/section or CIET exercise ID; no copied manual page is required to model a concept.
- A chemistry colour, flame, precipitate, gas indicator or pH display is generated only from a reviewed rule and its exact input conditions.
- Biological image resolution limits what can be identified; do not claim microscopic structures not present in the slide asset.
- Physics numerical output is labelled simulated/calculated/measured/imported as appropriate and carries units/uncertainty.
- Any hazardous reagent or operation remains a supervised virtual scene; this matrix is not a laboratory procedure or home experiment instruction.

## Coverage-matrix completion checklist

- [ ] Add every practical and activity from the current RBSE Class 11 and Class 12 syllabus.
- [ ] Add every applicable NCERT XI/XII lab manual exercise and activity as a separate NCERT source pack.
- [ ] Resolve duplicate CIET entries while preserving all canonical source references.
- [ ] Add all apparatus/material IDs and final size/range/quantity specifications.
- [ ] Add source page references for every final entry.
- [ ] Define rule/model IDs and test vectors.
- [ ] Add asset path/licence/LOD and interaction tests.
- [ ] Add teacher/expert review status.
- [ ] Reconcile all source-to-practical-to-equipment-to-result gaps before Phase 1 completion.

This is the first representative mapping slice. It is not the final exhaustive coverage matrix.


## Expanded representative mappings — second slice (2026-10-31)

These extend the first 12 mappings. All are still DESIGN_ONLY, not implemented or scientifically verified.

### Additional Physics mappings

| Mapping ID | NCERT-CIET item | Required apparatus | Key actions/inputs | Results and visual behaviour | Status |
|---|---|---|---|---|---|
| PHY-XI-BOYLE | Grade 11 Experiment 11 — Boyle's law | Boyle apparatus, pressure gauge/manometer, volume scale, temperature indicator | Change volume in a closed model at constant temperature; record P and V pairs | Check P×V trend, plot P–V and P–1/V; visual gas volume and pressure indicator must use the same state | DESIGN_ONLY |
| PHY-XI-CAPILLARY | Grade 11 Experiment 12 — capillary rise/surface tension | Capillary tube, liquid vessel, scale, radius measurement tool | Select known liquid and capillary radius, observe modelled rise; vary supported radius/liquid property | Rise height and derived surface-tension estimate only under declared assumptions; 3D meniscus, capillary ruler and formula panel | DESIGN_ONLY |
| PHY-XI-SONOMETER | Grade 11 Experiment 15 — frequency/length/tension | Sonometer, bridges, wire, pulley, weights, tuning fork/frequency reference | Adjust vibrating length or tension, select known wire linear density and record resonance | Compare frequency with the stated string relation; show stationary-wave nodes and graph; no uncalibrated audio estimate | DESIGN_ONLY |
| PHY-XII-POTENTIOMETER | Grade 12 Experiment 5 — internal resistance of a cell | Potentiometer wire, primary cell, galvanometer, jockey, resistance box, key and leads | Configure correct circuit, obtain balance lengths under defined conditions | Derive internal resistance using approved relation, show null point and raw balance lengths; enforce polarity/connection checks | DESIGN_ONLY |
| PHY-XII-PRISM | Grade 12 Experiment 13 — minimum deviation | Glass prism, optical bench, light source, screen, angular scale/goniometer | Rotate prism/measure angle of incidence and deviation | Plot deviation versus incidence/derive refractive index with assumptions; 3D prism rotation, ray path and angle readout | DESIGN_ONLY |

### Additional Chemistry mappings

| Mapping ID | NCERT-CIET item | Required apparatus/materials | Key inputs/actions | Results and visual behaviour | Status |
|---|---|---|---|---|---|
| CHEM-XI-QUALITATIVE | Grade 11 Unit 1 — qualitative anion/cation analysis | Well plate/micro test tube, dropper, labelled sample/reagent records, test-tube stand | Select a syllabus-approved unknown from a closed curated set, run permitted virtual test sequence | Report only observations and confirmatory evidence encoded in reviewed rules; never infer identity from one colour alone | DESIGN_ONLY; rule review required |
| CHEM-XI-CRYSTALLISATION | Grade 11 Unit 3 — purification by crystallisation | Beaker, heating/water-bath model, evaporating/crystallisation vessel, filter funnel, solvent/sample model | Select pre-approved compound/solvent and modelled temperature/cooling states | Qualitative crystal formation/purification model; purity claims only when linked to a supported melting point or assay | DESIGN_ONLY |
| CHEM-XII-THERMOCHEM | Grade 12 Unit 3 — dissolution/neutralisation enthalpy | Insulated calorimeter, thermometer/probe, sample containers, approved virtual solution records | Select a defined reaction/dissolution pack, record initial/final temperature and amounts | q=mcΔT or declared calorimeter model; ΔH per mole only with balanced stoichiometry and heat-loss assumptions; show temperature curve | DESIGN_ONLY; exact reaction pack required |
| CHEM-XII-CHROMATOGRAPHY | Grade 12 Exercise 23 — paper chromatography of leaf/flower pigments | Chromatography paper, capillary/dropper, solvent chamber, sample spot and ruler | Place sample spot, run supported solvent-front model, measure spots and solvent front | Rf = spot travel / solvent front; 3D/2D chromatogram band separation linked to solvent/sample model; no identity beyond reference standards | DESIGN_ONLY |
| CHEM-XII-COLLOID | Grade 12 Unit 1 — lyophilic/lyophobic sol | Micro vessels/well plate, droppers, sample records and observation light | Select a curated virtual sol preparation/model and compare declared stability/dispersion conditions | Tyndall/dispersion or stability observations only where a reviewed rule supports them; visual particles are schematic, not molecular-scale truth | DESIGN_ONLY |

### Additional Biology mappings

| Mapping ID | NCERT-CIET item | Apparatus/specimens | Key actions/inputs | Results and visual behaviour | Status |
|---|---|---|---|---|---|
| BIO-XI-STOMATA | Grade 11 Exercise 18 — stomatal distribution | Microscope, leaf epidermal slides, count grid | Select leaf surface and magnification, count stomata in defined fields | Stomatal density per area and upper/lower comparison only with declared field area and sampling protocol; microscope view shows actual reviewed slide assets | DESIGN_ONLY |
| BIO-XI-TRANSPIRATION | Grade 11 Exercise 19 — rate of transpiration | Potometer/demonstration setup, leafy shoot model, time/scale | Change supported virtual conditions such as light, airflow or humidity where modelled | Water uptake/time as proxy with clear limitation that uptake is not identical to transpiration under all conditions; live trend and labelled inputs | DESIGN_ONLY |
| BIO-XI-ENZYME | Grade 11 activity — salivary amylase on starch | Virtual sample tubes, timer, substrate/enzyme records and approved indicator model | Select validated enzyme/substrate condition and observe a modelled time point | Qualitative substrate-change result only from reviewed rule; temperature/pH affects output only when explicitly modelled | DESIGN_ONLY |
| BIO-XII-POLLEN | Grade 12 Exercise 2 — pollen germination percentage | Microscope, slide, pollen sample asset, field-count grid | Inspect defined fields, count germinated/total pollen grains using a consistent inclusion rule | Percentage = germinated/total ×100; sample size and field selection recorded; 3D/slide image only supports visible features | DESIGN_ONLY |
| BIO-XII-SOIL-WATER | Grade 12 Exercise 1 — soil water-holding capacity / soil texture | Soil samples, weighing vessels, balance, filter/collection vessel, measuring tools | Select a labelled sample dataset or run virtual sample protocol; enter dry/wet mass or water volume | Water-holding capacity from declared mass/volume definition; texture classification only when measurement scheme and category thresholds are explicit | DESIGN_ONLY |
| BIO-XII-SPM | Grade 12 Exercise 22 — suspended particulate matter in air | Filter/sample card, mass measurement model, area/time/site metadata | Compare site samples or permitted preloaded dataset; define area and sampling duration | Concentration only if sampled air volume and measurement units are known; site comparison and uncertainty; no claim of live air monitoring unless a calibrated sensor is connected | DESIGN_ONLY |

## Expanded coverage status

- First slice: 12 representative mappings.
- Second slice: 16 additional representative mappings (row IDs counted directly on 2026-10-31).
- Total in this design matrix: 28 representative mappings (12 first-slice rows + 16 second-slice rows).
- This is still not exhaustive coverage of all current RBSE or NCERT practical items.
- All mappings remain DESIGN_ONLY. No rule, simulation, 3D model or software test is implemented by this document.


## RBSE current-session source mapping index — 2026–2027

The six board practical catalogues below are now extracted directly from the supplied current-session PDFs. This index is a subject-level source register; it does not convert every practical into an implemented experiment model. Detailed lists and assessment splits are in `PHASE_1_RBSE_2027_OFFICIAL_AUDIT.md`; candidate apparatus/specimen mapping is in `PHASE_1_RBSE_2027_ASSET_DELTA.md`.

| Source pack ID | Class / subject code | Official PDF pages | Source-extracted practical structure | State |
|---|---|---:|---|---|
| RBSE-2027-XI-PHY | XI Physics / 40 | 114–119 | 17 experiments; 7 Section A + 6 Section B activities; 11 projects; minimum record requirement 12 experiments + 8 activities; 30-mark scheme | SOURCE_EXTRACTED; time conflict needs review |
| RBSE-2027-XI-CHEM | XI Chemistry / 41 | 123–126 | A–E laboratory practice; titrimetry; systematic qualitative analysis; organic N/S/halogen test; 8 project topics; record and viva | SOURCE_EXTRACTED; internal marks discrepancy needs review |
| RBSE-2027-XI-BIO | XI Biology / 42 | 132–134 | Botany/Zoology major and minor exercises; 8-mark spotting list with organisms, slides, tissues and models; record and viva | SOURCE_EXTRACTED; asset/specimen list needs expert review |
| RBSE-2027-XII-PHY | XII Physics / 40 | 124–129 | 18 experiments; 6 Section A + 8 Section B activities; 7 projects; minimum record requirement 12 experiments + 8 activities; 30-mark scheme | SOURCE_EXTRACTED; model and apparatus specs pending |
| RBSE-2027-XII-CHEM | XII Chemistry / 41 | 137–140 | Redox titrimetry; one-cation/one-anion qualitative analysis; option group for functional groups/preparations/biomolecule tests; content-based kinetics/thermochemistry/electrochemistry | SOURCE_EXTRACTED; reaction rules and safety review pending |
| RBSE-2027-XII-BIO | XII Biology / 42 | 144–147 | Botany/Zoology major/minor lists; 3 Botany + 3 Zoology spots; investigatory project, record and viva; selection annexures B–F | SOURCE_EXTRACTED; specimen/model validation pending |

### Interpretation and guardrails
- `SOURCE_EXTRACTED` means the listed curriculum items and page ranges were read from the supplied RBSE PDFs. It does not mean a scientific simulation is verified.
- The original 28 representative NCERT/CIET mappings remain `DESIGN_ONLY`; the RBSE register is a separate current-session source pack.
- Board source choices must be modelled explicitly: Chemistry alternatives marked OR and Biology “any one/any three” selection groups must not be flattened into mandatory sequential experiments.
- The XI Physics time conflict and XI Chemistry marks conflict remain recorded as source discrepancies. The user-selected LabVerse timer is 180 minutes; this product setting does not alter the RBSE source. The Chemistry XI component-mark split must remain unconfigured until reviewed.
- The exhaustive practical-to-apparatus-to-asset-to-test mapping remains an open Phase 1 task. Do not promote any row to `VERIFIED` solely because it appears in the syllabus.


## RBSE Biology practical → NCERT kit candidate crosswalk (2026–2027)

These rows connect board practical needs to candidate kit assets discovered in the NCERT Higher Secondary Biology kit transcription. The official NCERT source confirms the kit/manual family; the individual item counts and detailed catalogue are still secondary-transcription evidence pending official PDF/specification verification. Every row remains `DESIGN_ONLY`.

| Mapping ID | RBSE practical source | Candidate assets / transcription quantities where visible | Interaction and model acceptance | Status |
|---|---|---|---|---|
| BIO-XI-MICROSCOPE-PARTS | XI Biology p.133, microscope spotting | Student microscope (1, optional); dissecting microscope (1); magnifier (2); lens paper and lens-cleaning materials | Objective selection, focus controls, illumination, lens-cleaning state; only visible structures may be labelled | DESIGN_ONLY; quantities unverified |
| BIO-XI-ROOT-STEM-TS | XI Biology p.132, dicot/monocot root and stem T.S. | Glass slides (2 packets × 50), coverslips (40), slide box (1), forceps, needles, temporary/permanent slide candidates | Specimen type, section plane and magnification control the visual; slide preparation is a bounded workflow | DESIGN_ONLY |
| BIO-XI-PLASMOLYSIS | XI Biology p.132, epidermal peel / plasmolysis | Slides, coverslips, droppers (10), pipettes (1 mL and 10 mL; 2 each per transcription), cavity slides (12) | Concentration and specimen identity control qualitative cell-state representation; exact kinetics remain NOT_MODELLED unless validated | DESIGN_ONLY |
| BIO-XI-POTATO-OSMOSIS | XI Biology p.133, potato osmometer | Pins (50), corks, glassware, pipettes, measuring tools | Track initial/final level or mass only where a reviewed protocol supplies geometry and units | DESIGN_ONLY |
| BIO-XI-CHROMATOGRAPHY | XI Biology p.133, plant-pigment paper chromatography | Capillary tubes (1 packet), chromatography paper (6), split cork, glassware | Track sample lane, solvent-front distance and pigment bands; do not infer solvent composition from kit list | DESIGN_ONLY |
| BIO-XI-TRANSPIRATION | XI Biology p.133, upper/lower leaf transpiration and suction setup | Rubber tube (1), rubber bands (30), glass tubes (6), glass pipettes, thread and sample containers | Show apparatus state and time-series readings only under a reviewed model/protocol | DESIGN_ONLY |
| BIO-XI-ENZYME-ASSAY | XI Biology p.132, salivary amylase on starch | Cavity-block tiles (2), test tubes (12), dropper/pipette family, digital pocket balance (1); amylase/starch listed among reagents | Only predefined enzyme/substrate assay; input conditions and visual endpoint tied to a reviewed reaction rule | DESIGN_ONLY; chemical rule review required |
| BIO-XII-QUADRAT-SAMPLING | XII Biology p.144, quadrat density/frequency | Measuring tape (1), thread (1 roll), nails (5), claw hammer (1), sample bags/labels | Quadrat area, placement, replicate count and species counts drive density/frequency; do not invent field data | DESIGN_ONLY |
| BIO-XII-SOIL-WATER-TEST | XII Biology pp.144–145, soil texture/water-holding, water/soil pH, microorganisms/turbidity, SPM | Plastic beakers (50/100/250 mL, 2 each), measuring cylinders (10/50/100 mL, 1 each), pH papers (narrow/broad range), plastic funnels (2), sample boxes (12), wash bottle (1), filter paper | Track sample ID, location, units, observation method and uncertainty; SPM needs a validated collection/measurement method or clearly labelled supplied dataset | DESIGN_ONLY; method details pending |
| BIO-XII-GENETICS | XII Biology pp.145–147, Mendel laws and pedigree | Yellow/green/red/white cubes (72 each per transcription), pedigree cards/visual aids (exact catalogue pending) | Each colour must map to a documented allele/state before use; random sampling and probability calculations must be reproducible | DESIGN_ONLY |
| BIO-XII-CONTROLLED-POLLINATION | XII Biology p.146, emasculation/bagging/tagging | U-clips (12), zipper bags (10), tags (20), brush (3), thread and flower models | Stage-labelled and reversible workflow; do not claim seed set, pollination success or offspring outcome without a biological model | DESIGN_ONLY |
| BIO-XI-XII-SPOTTING-CATALOGUE | XI pp.133–134 and XII pp.145–147, plant/animal/microbial spotting and slide studies | Acrylic-embedded plants, permanent slides and visual-aid card families; manual transcription identifies examples including algae, fungi, protists, plants and animals | Every specimen/slide needs canonical identity, taxonomy/source, diagnostic visible traits and confidence bounds; card list remains incomplete until primary audit | DESIGN_ONLY; identity review required |

### Assessment timer configuration
- LabVerse timed practical-assessment preset: 180 minutes (3 hours), selected by the user.
- Virtual experiment workbench is learner-paced; simulation state is independent of the timer.
- This configuration does not resolve or rewrite the RBSE XI Physics p.114 source discrepancy. See `PHASE_1_NCERT_BIOLOGY_KIT_REVIEW.md` and `docs/DECISIONS.md`.

### Release gate
The RBSE Biology source rows are extracted, but these candidate mappings cannot be published as VERIFIED until NCERT kit items/specs are confirmed, biological identities and methods are reviewed, and each implemented model has test vectors.


## NCERT Class XI Biology Laboratory Manual — 34-exercise index coverage baseline (2026-11-01)

Primary source: NCERT *Laboratory Manual: Biology, Class XI*, online label 2025–26, contents section:
https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf

The manual contents list 34 exercises. The list is recorded in `PHASE_1_NCERT_BIOLOGY_KIT_REVIEW.md`. The following coverage groups are now explicitly in the Phase 1 source-to-asset backlog:

| NCERT manual exercise IDs | Coverage group | Candidate inventory families | Status |
|---|---|---|---|
| NCERT-XI-BIO-MICROSCOPE-MAP | Compound microscope parts (design mapping record; source exercise is NCERT-XI-BIO-EX-01) | BIO-OPTIC-* | EXERCISE 1 TEXT INSPECTED; MODEL DESIGN ONLY |
| NCERT-XI-BIO-EX-02–06 | Microbial/plant/animal morphology, plant/animal tissues, mitosis | BIO-SPECIMEN-*, BIO-SLIDE-*, BIO-OPTIC-*, BIO-DISSECT-* | INDEXED ONLY; identity/procedure review pending |
| NCERT-XI-BIO-EX-07–14 | Root/stem/leaf modifications, inflorescences, flowering families, anatomy, herbarium and animal models | BIO-PLANT-*, BIO-SPECIMEN-*, BIO-SLIDE-*, BIO-GEN-* | INDEXED ONLY; asset-level mapping pending |
| NCERT-XI-BIO-EX-15–19 | Osmosis, plasmolysis, imbibition, stomata and transpiration | BIO-PLANT-*, BIO-SLIDE-*, BIO-OPTIC-*, BIO-TRANSFER-* | INDEXED ONLY; protocol and variable review pending |
| NCERT-XI-BIO-EX-20–24 | Carbohydrate/protein/lipid tests, chromatography and respiration | BIO-PLANT-*, BIO-SLIDE-*, BIO-TRANSFER-*, CHEM-REAGENT-* | INDEXED ONLY; reagent rules and safety review pending |
| NCERT-XI-BIO-EX-25–28 | Experimental setup observation and salivary amylase tests with starch, temperature and pH | BIO-PLANT-*, BIO-SLIDE-*, CHEM-REAGENT-* | INDEXED ONLY; finite reviewed assay models required |
| NCERT-XI-BIO-EX-29–32 | Urine tests for urea, sugar, albumin and bile salts | CHEM-REAGENT-*, CHEM-GLASS-*, BIO-SLIDE-* | INDEXED ONLY; simulated sample/reaction models require expert review |
| NCERT-XI-BIO-EX-33–34 | Human skeleton and joints | BIO-SPECIMEN-*, BIO-GEN-* | INDEXED ONLY; model identity/articulation review pending |

This source pack is distinct from RBSE 2026–27 Board practical requirements and from NCERT's Higher Secondary Biology Kit procurement specification. The source contents list is evidence of exercise titles only. Only Exercise 1's microscope description received a detailed text review in this pass; the other 33 exercises still require procedure, materials, safety, observation and calculation extraction.

All exercise rows/groups remain non-verified. No 3D assets, model rules or tests are implemented.


## NCERT Class XI Biology — granular exercise register (official contents index, 2026-11-01)

Primary source: NCERT, Laboratory Manual: Biology, Class XI, ISBN 978-93-5007-064-2, online label 2025–26.
Official PDF: https://www.ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf

The official contents index exposes 34 exercise titles and printed page starts. This register creates a stable source ID for each title. The status means title/page start read from the contents page; it does not mean the body procedure, apparatus, reagents, scientific model or result has been audited.

| Source ID | Official contents title (transcribed) | Printed page start | Evidence state |
|---|---|---:|---|
| NCERT-XI-BIO-EX-01 | To study parts of a compound microscope | 5 | TITLE + EXERCISE BODY PARTIALLY AUDITED |
| NCERT-XI-BIO-EX-02 | To identify and study the morphology of representative types of bacteria, fungi and different plant groups | 8 | TITLE ONLY |
| NCERT-XI-BIO-EX-03 | To study some selected animals on the basis of their external features | 16 | TITLE ONLY |
| NCERT-XI-BIO-EX-04 | Study of tissues and diversity in shapes and sizes of plant cells | 30 | TITLE ONLY |
| NCERT-XI-BIO-EX-05 | Preparation of temporary slide of animal tissues and their study | 33 | TITLE ONLY |
| NCERT-XI-BIO-EX-06 | Study of mitosis | 39 | TITLE ONLY |
| NCERT-XI-BIO-EX-07 | To study modifications of root | 42 | TITLE ONLY |
| NCERT-XI-BIO-EX-08 | To study modifications of stem | 44 | TITLE ONLY |
| NCERT-XI-BIO-EX-09 | To study modifications of leaf | 46 | TITLE ONLY |
| NCERT-XI-BIO-EX-10 | To study and identify different types of inflorescences | 48 | TITLE ONLY |
| NCERT-XI-BIO-EX-11 | Study and describe flowering plants of families Solanaceae, Fabaceae and Liliaceae | 52 | TITLE ONLY |
| NCERT-XI-BIO-EX-12 | To study anatomy of stem and root of monocots and dicots | 66 | TITLE ONLY |
| NCERT-XI-BIO-EX-13 | Preparation of herbarium sheets of flowering plants | 74 | TITLE ONLY |
| NCERT-XI-BIO-EX-14 | Study of external morphology of animals through models | 76 | TITLE ONLY |
| NCERT-XI-BIO-EX-15 | To demonstrate osmosis by potato osmometer | 81 | TITLE ONLY |
| NCERT-XI-BIO-EX-16 | Study of plasmolysis in epidermal peel of leaf | 83 | TITLE ONLY |
| NCERT-XI-BIO-EX-17 | Study of imbibition in raisins or seeds | 85 | TITLE ONLY |
| NCERT-XI-BIO-EX-18 | To study the distribution of stomata on the upper and lower surfaces of leaves | 87 | TITLE ONLY |
| NCERT-XI-BIO-EX-19 | To demonstrate difference in rate of transpiration between two surfaces of leaf | 89 | TITLE ONLY |
| NCERT-XI-BIO-EX-20 | To detect the presence of carbohydrates like glucose, sucrose and starch | 91 | TITLE ONLY |
| NCERT-XI-BIO-EX-21 | To detect the presence of proteins | 95 | TITLE ONLY |
| NCERT-XI-BIO-EX-22 | To detect the presence of fats (lipid) in different plants and animal materials | 97 | TITLE ONLY |
| NCERT-XI-BIO-EX-23 | Separation of plant pigments (chloroplast pigments) by paper chromatography | 98 | TITLE ONLY |
| NCERT-XI-BIO-EX-24 | To study the rate of respiration in flower buds/germinating seeds | 101 | TITLE ONLY |
| NCERT-XI-BIO-EX-25 | Observation and comment on the setup | 103 | TITLE ONLY |
| NCERT-XI-BIO-EX-26 | To study the enzymatic action of salivary amylase on starch | 107 | TITLE ONLY |
| NCERT-XI-BIO-EX-27 | To study the effect of temperature on the activity of salivary amylase | 110 | TITLE ONLY |
| NCERT-XI-BIO-EX-28 | To study the effect of pH on the action of salivary amylase | 112 | TITLE ONLY |
| NCERT-XI-BIO-EX-29 | To detect the presence of urea in the given sample of urine | 114 | TITLE ONLY |
| NCERT-XI-BIO-EX-30 | To test the presence of sugar in the given sample of urine | 117 | TITLE ONLY |
| NCERT-XI-BIO-EX-31 | To detect the presence of albumin in the given sample of urine | 120 | TITLE ONLY |
| NCERT-XI-BIO-EX-32 | To detect the presence of bile salts in the given sample of urine | 122 | TITLE ONLY |
| NCERT-XI-BIO-EX-33 | To study the human skeleton | 124 | TITLE ONLY |
| NCERT-XI-BIO-EX-34 | To study different types of joints in human skeleton | 129 | TITLE ONLY |

### Exercise extraction contract from the NCERT manual's Introduction

The manual describes a standard practical record structure: aim, principle, required materials, stepwise procedure, observation/result, discussion and precautions. Its description of required materials calls for sample identity, apparatus type, glassware type and quantity, reagents/solutions, concentrations/specifications, preparation method and acceptable alternatives where supplied. Results can use tables, graphs or histograms and should retain units.

LabVerse will use this as an original structured extraction template, not copy NCERT prose or diagrams. Each exercise record must separately capture exact sample/specimen identity and provenance; apparatus, glassware quantity and supported variant; reagent identity/concentration only where the full source and safety review support it; step sequence and hazard/precaution tags; raw observation fields, units and uncertainty; inference/discussion separated from observations; and modelled vs not-modelled outcomes with test vectors.

The manual explicitly emphasises correct observation and honest data recording. LabVerse must not prefill simulated values as if observed by the learner.

### Retrieval boundary and next extraction batch

The alternate official ncert.gov.in PDF route was found. The indexed PDF representation available in this audit exposes the front matter, contents, Introduction and Exercise 1 only (17 parsed PDF pages; contents page itself refers to later printed pages through 129). The procedures/body text for Exercises 2–34 were not available from the retrieved representation. Screenshots of the accessible Exercise 1 pages (printed pp. 5–7) were visually inspected.

Therefore all 34 titles/page starts are recorded; only Exercise 1 has a partial body-level audit; Exercises 2–34 remain TITLE_ONLY; no apparatus, reagents, procedure or scientific outcome is inferred from their titles. The title index remains a separate NCERT learning-manual source pack, not an RBSE 2026–27 exam requirement list.


## NCERT Class XI Biology Exercises 2–6 — cross-source traceability

Exercise-level mapping, DIKSHA IDs, the mitosis index-number conflict, title-only asset families and retrieval limitations are recorded in:
- docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_CROSSWALK.md

Current evidence state:
- Exercise 2 and 3: NCERT contents title/page plus CIET index link located; DIKSHA body not audited.
- Exercise 4 and 5: NCERT contents title/page verified; no link surfaced in the inspected Grade 11 CIET table.
- Exercise 6: NCERT manual labels mitosis as Exercise 6, while the CIET index labels the mitosis row Exercise 1. Preserve both raw records until reconciled.
- All apparatus families are title-level DESIGN_ONLY. Do not infer species, slide contents, stain/reagent concentrations or quantities.


## Evidence update — detailed NCERT Class XI Biology Exercises 2–6 audit (2026-11-01)

Detailed source notes: docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_DETAILED_AUDIT.md.

| Exercise | Body-level evidence now available | Candidate coverage | Required status |
|---|---|---|---|
| EX-02 p.8 | Legacy NCERT chapter text inspected; current 2025–26 title/page cross-check | Bacterial/fungal/plant-group slides and models | LEGACY BODY INSPECTED / DESIGN_ONLY |
| EX-03 p.16 | Legacy NCERT chapter text inspected; current title/page cross-check | Animal external morphology models/images | LEGACY BODY INSPECTED / DESIGN_ONLY |
| EX-04 p.30 | Legacy chapter text inspected; screenshot unavailable | Plant tissue/section slides; high-hazard source chemistry flagged | LEGACY BODY INSPECTED / DESIGN_ONLY |
| EX-05 p.33 | Partial legacy body text only; later retrieval blocked | Synthetic/pre-prepared animal tissue slides | PARTIAL LEGACY BODY / DESIGN_ONLY |
| EX-06 p.39 | Legacy chapter text and screenshot inspected; current title/page cross-check | Permanent mitosis slide, stages and cytokinesis | LEGACY BODY INSPECTED / DESIGN_ONLY |

The 2018 legacy PDFs have not been page-by-page matched to the current 2025–26 manual. Candidate assets are not scientific validation or implementation. Retain raw source and edition provenance. Human sample, formalin, fungal culture/spores, chromium(VI)/corrosive chemistry remain virtual-only or prepared-slide-only.
