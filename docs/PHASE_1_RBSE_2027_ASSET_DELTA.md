# RBSE 2026–2027 Asset and Equipment Delta — Classes XI/XII

Audit date: 2026-10-31  
Status: SOURCE-MAPPED CANDIDATE INVENTORY / NOT FINAL SPECIFICATION  
Parent evidence: `docs/PHASE_1_RBSE_2027_OFFICIAL_AUDIT.md`.

## Asset classification
- **Explicit RBSE requirement:** the practical names the instrument, sample, slide, model or apparatus.
- **Derived/candidate asset:** the task requires an apparatus/material by implication, but RBSE does not provide a full equipment specification.
- **Specification pending:** size, range, precision, quantity, material grade or geometry must be taken from the relevant current NCERT kit specification/manual or reviewed teacher input.
- **Virtual-only:** hazardous chemical operations, biological specimens and any potentially unsafe workflow are represented only in bounded, reviewed simulations.

The board syllabus is an experiment list, not a procurement bill. Do not interpret this catalogue as an exhaustive physical-kit list or assume quantities.

## 1. Physics asset families

| Candidate stable ID family | RBSE 2026–27 source tasks | Candidate asset records and interaction requirements | Evidence status |
|---|---|---|---|
| `PHY-MEAS-XI` | XI Physics p.114–115: Vernier caliper, screw gauge, spherometer, beam balance, metre scale | Vernier caliper with sliding jaw/depth rod/scale and zero error; screw gauge with anvil, spindle, ratchet and pitch scale; spherometer with three legs and central screw; beam balance; metre scale; regular/irregular solids, wire, sheet and spherical objects | Instrument names explicit; dimensions/tolerance/least-count variants pending |
| `PHY-MECH-XI` | XI p.114–119: vector parallelogram, pendulum, friction, inclined plane, spring, projects | Force board/vector-force components; pendulum stand/thread/bob and stopwatch; horizontal plane/friction block; adjustable inclined plane and roller; helical spring, hanger and slotted loads; double-inclined plane/ball; bar-pendulum metre scale | Most apparatus inferred from experiment; exact board kit spec pending |
| `PHY-FLUID-THERM-XI` | XI p.115–119: Boyle’s law, capillary rise, viscosity, cooling curve, specific heat, wax, bimetallic strip, barometer | Boyle apparatus with pressure/volume state; capillary tube/liquid vessel; falling sphere and liquid-viscosity observation; hot body/thermometer/cooling setup; calorimeter or mixing calorimetry vessels; molten-wax vessel; bimetallic strip; Fortin barometer; heat-loss and insulation specimens | Some named explicitly; auxiliary apparatus inferred |
| `PHY-WAVE-XI` | XI p.115–119: sonometer, resonance tube, sound absorption | Sonometer with variable string length/tension and bridge positions; tuning fork/electromagnet/frequency reference; resonance tube and air column; sound-absorbing material samples | Sonometer/resonance tube named; supporting parts and acoustic measurement scale pending |
| `PHY-ELEC-XII` | XII p.124–127: metre bridge, potentiometer, primary cells, galvanometer, ammeter, voltmeter, circuit activities, LDR, diode/transistor/Zener, LCR | Metre bridge and jockey; potentiometer wire/jockey; Daniel and Leclanche cells; galvanometer; ammeter/voltmeter; resistance box, rheostat, keys, leads and power source; multimeter; inductor/core; household circuit (3 bulbs, 3 switches, fuse); LDR; diode/LED/Zener/transistor/IC/resistor/capacitor; logic gate/time-switch/LCR/phototransistor/laser project boards | Many devices named in tasks; exact rated ranges, wiring/terminal geometry and safe limits pending |
| `PHY-OPT-XII` | XII p.125–129: mirrors, lenses, prism, slab, travelling microscope, Polaroids, slit, candle and screen, laser | Concave/convex mirrors; convex/concave lenses; plane mirror; prism; glass slab; travelling microscope; optical bench/angle scale; candle/light source/screen; two Polaroids; narrow slit; laser and diffraction screen | Apparatus mostly explicit; optical dimensions, focal-length set and laser safety specification pending |

## 2. Chemistry asset families

| Candidate stable ID family | RBSE 2026–27 source tasks | Candidate asset records and interaction requirements | Evidence status |
|---|---|---|---|
| `CHEM-LAB-BASIC-XI` | XI Chemistry p.123–124: glass tube/rod cutting and bending, jet drawing, cork boring, heating, filtration, volume measurement, weighing | Glass rod/tubing, safe virtual glass-working station, cork and cork borer, heating device, test tubes/beakers/flasks, filtration funnel/filter paper, measuring vessels, balance, reagent bottles | Techniques explicitly named; detailed model specs/quantity inferred |
| `CHEM-PURITY-XI` | XI p.125: crystallisation, melting point, boiling point | Crystallisation vessel, sample container, filter/filtrate, heating/temperature readout, melting-point and boiling-point observation setup | Tasks explicit; apparatus set inferred |
| `CHEM-EQUIL-PH-XI` | XI p.125: ferric/thiocyanate and cobalt equilibrium; pH of juices and aqueous solutions; dilution/common-ion effect | Versioned reagent/sample bottles for only the named reviewed cases; dropper/pipette; test tubes or micro-wells; pH paper/meter/readout; dilution volumes and concentration metadata; controlled solution colour/state | Chemical systems explicit; supporting equipment inferred; reaction models need validated rules |
| `CHEM-TITRATION-XI` | XI p.125–126: oxalic acid, NaOH, Na2CO3, dilute HCl titrimetry | Burette, pipette, conical flask, stand/clamp, indicator, standard-solution/sample records, meniscus/readout and raw titre table | Method/reagents explicit; apparatus inferred from titration |
| `CHEM-QUAL-XI` | XI p.125–126: one cation + one anion, dry/wet tests, group analysis 0–VI, N/S/halogen organic test | Test tubes, racks, droppers, sample labels, reagent bottle records, observation cards and a finite rule registry for each allowed test; heating/handling tools only where reviewed | Analytical branches explicit; exact reagent list/quantities not complete in board text |
| `CHEM-REDOX-XII` | XII p.137–138: KMnO4 vs standard oxalic acid or ferrous ammonium sulphate | Burette, pipette, conical flask, stand/clamp, standard solution records, titration volume/endpoint state, balanced-reaction metadata | Standard solutions explicit; equipment inferred; stoichiometry/rubric review required |
| `CHEM-QUAL-XII` | XII p.138: cation/anion from listed soluble-salt sets | Finite cation/anion identity catalogue, soluble-salt sample records, labelled reagents, micro-well/test tube, observation states; explicitly exclude insoluble salts as the board text does | Ion choice set explicit; reagents and detailed kit specs pending |
| `CHEM-ORGANIC-XII` | XII p.138–139: functional groups OR compound preparations OR carbohydrate/fat/protein tests | Functional-group sample IDs; option groups; preparation product/sample models for the listed compounds; carbohydrate/oil/fat/protein test cards and approved reagent sets | Choice groups explicit; supporting labware inferred |
| `CHEM-CONTENT-XII` | XII p.139–140: kinetics, thermochemistry, electrochemical cell | Timer and model state for named kinetics reactions; calorimetry vessel/temperature readout for dissolution/neutralisation/interaction; Zn|Zn2+||Cu2+|Cu electrochemical cell with CuSO4/ZnSO4 concentration state and potential readout | Chemical systems explicit; model/range/uncertainty and safe virtual rules pending |

**Chemistry safety rule:** no general “mix any two chemicals” action. A user can only execute a named, reviewed and bounded virtual procedure with source-linked reagent identities, amount/concentration metadata, outputs and limitations. Unsafe real-world instructions are not exposed.

## 3. Biology asset families

| Candidate stable ID family | RBSE 2026–27 source tasks | Candidate asset records and interaction requirements | Evidence status |
|---|---|---|---|
| `BIO-MICRO-XI` | XI Biology p.132–134: compound microscope, T.S. roots/stems, plasmolysis, cells/tissues, mitosis slides | Compound microscope with objective selector, stage and focus; temporary/permanent slides; coverslips; prepared dicot/monocot root/stem T.S.; Rhoeo epidermis; onion root-tip/grasshopper mitosis slides | Microscope/slides explicit; exact objective/scale/image resolution pending |
| `BIO-BOTANY-XI` | XI p.132–134: Fabaceae/Leguminosae, Solanaceae, Liliaceae; stomata, osmosis, chromatography, transpiration, imbibition, respiration, plant forms | Specimen/flower/leaf/seed records for the families listed; stomata slides; potato osmometer; paper chromatography chamber/paper; leaf surfaces; germinating seeds/flower buds; root/stem/leaf/inflorescence models; setup cards for anaerobic respiration, phototropism, apical bud removal and transpiration suction | Species/categories explicit; exact specimen set/slide catalogue quantity pending |
| `BIO-ZOOLOGY-XI` | XI p.132–134: salivary amylase, urine tests, animal specimens, tissues, skeleton/joints and frog | Starch/enzyme model and timed reaction readout; bounded virtual urine test samples; listed animal specimen cards/models; plant/animal tissue and blood-smear slides; human skeleton/joint models; frog model/preserved-specimen representation | Task/specimen names explicit; test reagents/slide counts/specifications pending |
| `BIO-REPRO-XII` | XII p.144–147: flowers, pollen, pollen tube, female gametophyte, onion mitosis, meiosis, nucleic acid stain, testis/ovary T.S. | Pea/china rose/mustard flower structures; anther/pistil/pollen/pollen-tube/female gametophyte models; onion root-tip temporary slide; permanent meiosis slides; acetocarmine staining model; testis/ovary T.S. slides | Subject material explicit; microscopy resolution and staining simulation validation pending |
| `BIO-ECO-XII` | XII p.144–147: quadrat density/frequency, soil texture/water holding, pH, water microbes/turbidity, SPM, xeric/hydric specimens | Quadrat frame and sample field map; site and sample IDs; soil texture and water-holding test vessels; pH/turbidity observation; water microbe slide/sample; SPM sampling or clearly labelled modelled dataset; xeric/hydric plants and animals with adaptation labels | Exercises explicit; measuring method/specimen catalogue and dataset provenance pending |
| `BIO-GEN-XII` | XII p.145–147: Mendel laws, homologous/analogous organs, pedigree, blastula, controlled pollination, spotting | Pedigree canvas/symbols; reviewed genetic cross dataset; homologous/analogous specimen pair cards; mammalian blastula model/slide; emasculation/bagging/tagging workflow; plant/animal spotting cards | Topic and choice structure explicit; individual validated datasets/models pending |

## 4. Cross-subject 3D interaction requirements
- Every object has a stable ID, source mapping, asset provenance/licence, scale, pivot, bounding box, LOD and accepted transformations.
- Instrument controls must change the measured state, not just animate. Examples: Vernier jaws change scale readings; potentiometer jockey changes balance length; microscope focus/objective changes visible detail; burette meniscus changes titre; quadrat placement changes counts.
- Student actions, live observations, calculations and notebook records must refer to the same experiment-state event.
- Wrong connections, unsupported ranges, incomplete circuits or unavailable models return a diagnostic state; they must not fabricate a reading.
- Exact size/range/calibration are added only from a traceable specification or expert-verified measurement. Do not guess realistic-looking values.

## 5. Remaining asset inventory tasks
- Obtain and inspect the full NCERT Higher Secondary Biology kit manual and current kit specification documents.
- Check NCERT Physics/Chemistry kit specifications against each RBSE experiment, especially measuring tolerances, instrument ranges and microscale quantities.
- Assign canonical item IDs and source references to every specimen, slide, reagent/sample and accessory.
- Record dimensions, material, precision, quantity, calibration state, safety label, licence and approved interactions.
- Map every asset to each RBSE practical, then to a model/rule and acceptance test.
- Have Biology/Chemistry/Physics teachers review species, tests, equations, equipment and exam-choice structures.

No 3D mesh, game object, physical experiment implementation or simulator is created by this document. Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.
