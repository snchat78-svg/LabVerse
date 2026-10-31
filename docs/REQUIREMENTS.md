# Product Requirements

## Scope

- Primary board: Rajasthan/RBSE. NCERT laboratory manuals support procedures and apparatus understanding. CBSE may be separately tagged; it must not be silently merged with RBSE.
- Classes: 11 and 12.
- Subjects: Physics, Chemistry and Biology.
- Platform: mobile-first web/PWA first; Android package after the web app is stable.
- Languages: English initially; Hindi and English localisation planned.
- Cost: target ₹0 for initial development and core runtime. No paid AI API is required. Hosting and store fees can change and cannot be promised free forever.

## Functional requirements

### FR-01 — Class and subject selection
Dashboard provides Class 11 / Class 12 and Physics / Chemistry / Biology. The selected class filters practicals, inventory and exams.

### FR-02 — Practical catalogue
Search, filter and browse the official-source-mapped catalogue. Each entry shows class, subject, board, syllabus year, learning outcomes, apparatus/materials, duration, mode and readiness status.

### FR-03 — Equipment and material inventory
Each lab has categories, search, item descriptions, safety labels, 3D preview and compatibility metadata. Inventory covers apparatus, instruments, glassware, chemicals, specimens, slides, models, reagents and consumables required by the mapped practicals.

### FR-04 — Empty 3D workbench
The lab opens with an empty or explicitly reset workbench, a 3D scene, camera controls and equipment tray.

### FR-05 — Add and manipulate objects
Users tap an inventory item or drag it onto the bench. The actual 3D asset appears. It can be selected, moved, rotated, zoomed/inspected, removed and reset. Touch devices also have tap-to-add.

### FR-06 — Experiment actions
Depending on the practical, the student can connect leads, adjust a meter, place a lens, align apparatus, transfer liquid, add a reagent, swirl, heat virtually, focus a microscope, prepare a slide or select a specimen. Only supported and safe actions are enabled.

### FR-07 — Live simulation
The simulation updates apparatus, sample and dashboard in response to actions. Supported effects may include readings, colour, precipitate, bubbles/gas, pH indicator, temperature trend, flame appearance, optical image, specimen view and graph.

### FR-08 — Context-aware analysis
Analysis uses actual inputs: material IDs, quantities/concentrations, temperature, pH, apparatus, action order, readings and known constraints. It separates observation, inference, explanation, calculation and uncertainty.

### FR-09 — Modes
Guided Practice (hints and steps), Free Practice (minimal assistance) and Practical Exam (timed, scored, hints hidden by default).

### FR-10 — Observation notebook
Record raw observations, readings, units, repeat trials, calculations, graphs, result and conclusion. Keep observation separate from interpretation.

### FR-11 — Viva
Questions come from the practical's approved knowledge pack. Score answers and show explanations.

### FR-12 — Progress
Track completed practicals, accuracy, time, weak skills/topics, attempts and record completion locally.

### FR-13 — Offline support
After a content pack is installed, catalogue, apparatus assets, experiment rules and learner records work offline. Sync is optional and later.

### FR-14 — Accessibility and resilience
Readable labels, clear touch targets, keyboard alternatives, low-end device mode, reduced-motion option, recoverable session state and graceful unsupported-action handling.

## Non-functional requirements

- Responsive mobile-first layout for Android devices with limited RAM/GPU.
- Fast shell load; lazy-load 3D assets by subject/practical.
- No mandatory sign-in for first release.
- No external service call required for a core experiment.
- Deterministic results for the same initial state, action sequence and content version.
- Version all syllabus content, rules and experiment definitions.
- Every result is explainable and testable.
- Unknown result states are explicit; do not fabricate.
- Automated unit, integration, visual smoke and device-performance tests.

## Acceptance principle

A feature is not accepted because a screen exists. It must work end-to-end, pass tests and document unsupported states. See TEST_STRATEGY.md and phase gates in ROADMAP.md.
