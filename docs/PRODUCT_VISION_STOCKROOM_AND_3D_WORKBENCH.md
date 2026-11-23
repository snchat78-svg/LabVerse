# LabVerse Product Goal — Subject Stockrooms + Free-Assembly 3D Science Workbench

**This is the canonical product brief. Read it at the start of every LabVerse work session before choosing the next task. Do not ask the user to restate this brief.**

## 1. Product identity

LabVerse is not a fixed-practical simulator or a set of copied experiment screens. It is a subject-organised science stockroom connected to an open-ended, interactive 3D workbench and evidence-grounded scientific analysis.

The primary interaction is:

1. Open Physics, Chemistry or Biology stockroom.
2. Choose a cabinet/shelf (or search the whole subject stock).
3. Pick one or more individual instruments, apparatus, glassware, chemicals/reagents, samples, specimens, slides or models.
4. Place them on an initially empty 3D workbench.
5. Inspect, move, rotate, connect, configure, switch on/off, pour/heat/focus/measure only when the asset/action contract supports it.
6. Observe a live scene and analysis panel driven by the same experiment state.
7. Save the session, measurements, observations and provenance in a lab notebook.

Practical guides are optional starting templates and learning aids. They must never restrict the learner to only pre-scripted setups. Learners must be able to assemble their own supported combinations and ask research/analysis questions.

## 2. Subject stockrooms

Each subject has its own persistent catalogue and visual cabinet organisation.

### Physics stockroom
Cabinets/shelves should grow to cover measurement and metrology; mechanics, force, mass and motion; oscillations, waves and sound; heat, thermal physics and fluids; optics and optical benches; electricity, circuits, electronics, magnetism and power; consumables, supports, clamps, storage and safety accessories.

### Chemistry stockroom
Cabinets/shelves should grow to cover glassware; volumetric glassware; transfer and liquid handling; filtration/separation; heating and supports; balances and measurement; electrochemistry; pH/temperature/timing; sample and reagent storage; chemicals/reagents/indicators/stains; PPE, waste and safety references.

Every chemical/reagent record needs a stable identity, formula/CAS where source-supported, concentration/grade/quantity only when evidenced, hazard/SDS references, compatibility, storage/waste controls and evidence status. A source label alone is not permission for physical use. Historical reagent labels remain clearly distinguished from current kit contents and school-managed supplies.

### Biology stockroom
Cabinets/shelves should grow to cover microscopy and microscope care; slides and cover slips; prepared/permanent slides; specimens and sample containers; dissection and sample-preparation tools; glassware/liquid handling; staining/reagent references; plant/botany materials; zoology/anatomy models; genetics models; field/ecology instruments; visual aids, storage and safety accessories.

A visual aid, specimen, slide, instrument and chemical are distinct catalogue types; do not flatten them into generic apparatus.

## 3. Curriculum and completeness

- Class XI and XII are the initial curriculum filters, based on the user's already supplied RBSE/NCERT sources and existing repository catalogues.
- A source record can be shared across both classes only when the source/curriculum mapping explicitly supports it.
- Inventory is broader than the practical task list: include analysis/research instruments and supporting materials when supported by source evidence and an explicit scope decision.
- Preserve source identity, filename/document ID, page, variant, academic session, evidence status, rights status, safety review and mapping to relevant practicals.
- Never silently drop unmatched practical items or infer differences between with-microscope/without-microscope variants.
- "All stock" must show all records for the selected subject; category shelves are navigational views over the same catalogue, not separate duplicated catalogues.

## 4. Workbench visual and interaction goal

- A dark/black, high-quality 3D lab workbench is the main workspace, not a list of cards.
- It starts empty or can be reset to empty.
- Inventory objects have actual 3D models with consistent scale, pivot, materials, collision/placement footprint, labels, source provenance and supported action metadata.
- Tap/click or drag-and-drop places an object; objects can be selected, inspected, moved, rotated, duplicated when allowed, removed and reset.
- Camera orbit, zoom and object manipulation must not conflict; touch, mouse and keyboard paths are required.
- The same stockroom item ID must remain attached to every 3D instance; instance IDs remain unique.
- Use original or permissively licensed assets and record exact licence/source. Do not use an image/card as a substitute for a 3D model.
- Until an actual model is integrated, label the item honestly as a 2D/candidate placeholder. Never claim a production 3D asset prematurely.

## 5. Real behaviour, not decorative animation

Objects expose only scientifically meaningful, implemented actions. Example: if a compatible beaker containing a supported solution is placed on a supported burner/heating setup and the learner activates the burner, the simulation state may change temperature over time; liquid appearance, thermometer reading and analysis update from the same model. A random flame or colour animation without a validated model is forbidden.

Action/state examples:
- Physics: power on/off, circuit connection, instrument range, zeroing/calibration, reading, force/displacement, optical alignment and measurement where a model supports it.
- Chemistry: sample/reagent identity, quantity and units, transfer, mixing, heating, cooling, pH/indicator, titration and validated reaction/endpoint outputs.
- Biology: microscope power/illumination, slide insertion, focus/magnification, specimen/model rotation, structure inspection and measurement/counting where supported.

The runtime is state-driven and deterministic where feasible. A single versioned state event updates the 3D scene, readings, analysis, notebook and replay. Unsupported combinations return an explicit NOT_MODELLED/UNSUPPORTED result, not an invented outcome.

## 6. Result integrity

Every output must identify whether it is a source fact, measured value, imported data, simulated observation, calculated value, estimate, prediction, hypothesis or unsupported state. Show units, assumptions, uncertainty, rule/model version and source. Keep raw readings immutable and preserve transformations. AI may explain evidence but may not fabricate or overwrite a scientific result.

## 7. Safety and evidence gates

- Source-catalogue presence does not mean verified current procurement, safe handling or permission to execute.
- Hazardous reagents, open flame, sharp tools, biological specimens and waste scenarios remain virtual and safety-reviewed.
- Real-world handling instructions require method-level evidence and qualified review.
- Phase 1 source authenticity/rights and Phase 2 domain/hazard gates continue to apply to executable science models. UI browsing and catalogue organisation can progress in parallel.
- Never bypass a gate by presenting an illustrative animation as a scientific simulation.

## 8. Existing catalogue baseline (repository read-model snapshot)

- Physics: 105 apparatus item rows; 80 RBSE task rows.
- Chemistry: 53 apparatus/material rows; 124 historical reagent labels; 41 RBSE task rows.
- Biology: 175 item/visual records; 58 manual reagent labels; 50 RBSE task rows.
- Total: 171 task-index rows and 515 item/reagent records across the current three subject read models.
- These are catalogue rows, not a claim that all records are authenticated, current kit stock, safe for physical use, or already modelled in 3D.
- Detailed evidence/limitations are maintained in `docs/DASHBOARD_INVENTORY_AUDIT_2026_11_09.md` and `dashboard/data/inventory.json`.

## 9. Phased implementation order

A. Complete stockroom information architecture and subject cabinet navigation using existing catalogue data.
B. Complete item-level completeness, source, class/session, category and safety metadata; recover old user-provided source variants internally without repeat upload.
C. Define a reusable asset contract and implement an initial real 3D scene, dark workbench, camera and object placement using a small representative set; expand all stockroom models systematically.
D. Implement reusable interaction/action contracts and event-sourced experiment runtime.
E. Implement reviewed Physics, Chemistry and Biology domain models and cross-check visual results against deterministic outputs.
F. Add lab notebook, save/replay, research analysis, packaging, device/performance, accessibility and launch readiness.

Do not call the product launch-ready until the acceptance criteria in the master roadmap, platform/device testing and safety/evidence gates are satisfied.

## 10. Acceptance gates

- Each of three subjects opens its own cabinet stockroom.
- Class 11/Class 12/All and search/type/category filters work without duplicating source rows.
- Every current item is reachable through All stock or exactly one/more appropriate shelf categories.
- Clicking a shelf filters the shared inventory and preserves source IDs.
- Empty 3D workbench accepts supported assets by tap/drag; every instance can be inspected/moved/rotated/removed/reset.
- Object controls appear only when supported by its asset/action contract.
- Valid state changes synchronise 3D visuals, dashboard result, analysis and notebook.
- Unknown, unsupported or unsafe states are clearly blocked/not modelled.
- Mobile touch, desktop mouse and keyboard workflows are tested.
- All data, models, images and source records retain provenance and rights metadata.
