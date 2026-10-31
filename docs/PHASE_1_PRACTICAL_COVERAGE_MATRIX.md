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
- Second slice: 13 additional representative mappings.
- Total in this design matrix: 25 representative mappings.
- This is still not exhaustive coverage of all current RBSE or NCERT practical items.
- All mappings remain DESIGN_ONLY. No rule, simulation, 3D model or software test is implemented by this document.
