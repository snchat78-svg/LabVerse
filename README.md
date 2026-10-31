# LabVerse — Virtual Science Laboratory

**Explore. Experiment. Understand.**

A mobile-first, interactive virtual laboratory for Rajasthan/RBSE and NCERT-aligned Classes 11–12 Physics, Chemistry and Biology.

LabVerse is intended to be much more than an MCQ app or a catalogue of laboratory items. Students will assemble a real 3D workbench, place and manipulate apparatus, perform guided or free experiments, observe changing visual states, take readings, and receive an evidence-based explanation of what happened.

## Core promise

- Three complete subject labs: Physics, Chemistry and Biology, for Classes 11 and 12.
- Real 3D workbench: tap or drag equipment from the inventory into an initially empty workspace. Objects appear as manipulable 3D models, not just labels or cards.
- Live experiment behaviour: valid actions update the scene and experiment state. Examples include meter readings changing as a circuit changes, an indicator changing colour near a titration endpoint, precipitate or gas appearing when a validated reaction is selected, a characteristic flame colour in a virtual flame-test activity, or a microscope image changing with focus.
- Reasoned analysis: explain the observed result using selected materials, quantities, conditions and experiment rules. Never invent an observation when data is unknown.
- Practical-exam preparation: guided practice, free practice, timed practical exam, observation notebook, calculations, graphs, viva and progress.
- Offline-first and cost-conscious: core lessons and simulations should work locally without a paid AI API or mandatory account.

## Non-negotiable product rules

1. The workbench starts empty. Tap-to-add and drag-and-drop are both supported.
2. Placed objects can be selected, moved, rotated, inspected/zoomed, connected or used where the experiment permits, removed and reset.
3. A visual effect must be driven by a scientific rule and experiment state. Animation alone is not a result.
4. Every practical is mapped to a named syllabus source, board, class, academic year and version.
5. Unknown or unverified chemistry returns NOT_MODELLED or NEEDS_REVIEW, not a made-up product or colour.
6. Virtual hazardous activities are clearly labelled as simulations. The app never tells students to reproduce unsafe experiments at home.
7. A phase is complete only after its exit criteria, tests and documentation are checked.

## Current project status

- Planning and product-design baseline: stored in docs/.
- Application code: not started at this baseline.
- Current phase: Phase 1 — Official syllabus mapping and practical catalogue.
- Phase 0 is complete for planning/documentation only; it does not mean an app has been built.

Start with:
- [Roadmap](docs/ROADMAP.md)
- [Phase state](docs/PHASE_STATE.md)
- [Requirements](docs/REQUIREMENTS.md)
- [System architecture](docs/SYSTEM_ARCHITECTURE.md)
- [Real-time simulation engine](docs/REALTIME_SIMULATION_ENGINE.md)
- [3D workbench](docs/INTERACTION_3D_WORKBENCH.md)
- [Scientific safety and integrity](docs/SAFETY_AND_SCIENTIFIC_INTEGRITY.md)

## Proposed technical direction

React + TypeScript + Vite for the app shell, Three.js for the interactive 3D scene, IndexedDB for offline data, and Capacitor for a later Android package. This stack is provisional until Phase 2 validates device performance and build constraints. Core experiment behaviour is deterministic, data-driven and testable; a generative AI service is not required to perform experiments.

## Official curriculum starting points

- RBSE syllabus/instructions: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika-syllabus.htm
- RBSE practical syllabus surfaced for Examination 2026: https://rajeduboard.rajasthan.gov.in/SRS_INST_PRAC.pdf
- NCERT school and kit manuals: https://ncert.nic.in/division/dek/kit-manuals.php?ln=en
- NCERT science laboratory manual index: https://ncert.ncert.org.in/science-laboratory-manual.php?ln=en
- CBSE 2026–27 curriculum, cross-check only: https://cbseacademic.nic.in/curriculum_2027.html

The catalogue must be rechecked against the latest official RBSE session before a practical is labelled current. See the syllabus policy in docs/SYLLABUS_AND_CATALOG_POLICY.md.
