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
