# LabVerse Requirements — Scientific Discovery Platform

## Product scope

LabVerse is an expandable, evidence-grounded platform for Physics, Chemistry and Biology. RBSE/NCERT Class 11–12 is the first curriculum pack, not the full product boundary. Future packs can add other boards, school/college levels, interdisciplinary science and advanced research topics.

## Core workspaces

- Learning Lab
- Interactive 3D Virtual Experiment Lab
- Scientific Analysis Workspace
- Research Studio

## Functional requirements

### FR-01 — Curriculum packs
Select class, board, session and subject. Each curriculum pack is source-mapped, versioned and independently auditable. Class 11–12 must not constrain future content packs.

### FR-02 — Practical catalogue
Search and filter experiments, activities, projects, spotting, specimen/slide work, investigatory work, record and viva. Show exact source, academic year, status and required equipment.

### FR-03 — Scientific knowledge and source registry
Maintain a source catalogue for scientific literature, reference data, constants, chemical properties, biological taxonomy/sequences, species observations, standards and official curricula. Each connector records authority, scope, update date, API/format, rate limits, licence/terms, attribution and known limitations.

### FR-04 — Equipment/material inventory
Versioned inventory for Physics instruments, Chemistry glassware/reagents/materials, Biology microscopes/slides/specimens/models, sensors and future research apparatus. Stable IDs connect content, 3D assets and experiment rules.

### FR-05 — Real 3D workbench
Open with an empty bench. Tap or drag inventory items into it; show actual 3D objects. Support selection, move, rotate, zoom/inspect, connect, use, remove and reset. Tap-to-add is mandatory on touch screens.

### FR-06 — Experiment action model
Actions are typed and validated against the active experiment, apparatus compatibility, quantities, conditions, role and safety policy. Invalid actions explain why and do not mutate the scientific state.

### FR-07 — Live simulation
A deterministic domain engine updates experiment state from meaningful actions and modelled time/conditions. The 3D scene and dashboard render the same authoritative state. Effects may include meter values, graphs, colour, precipitate, bubbles, pH, temperature, flame appearance, optical views, microscope views, growth/ecological trends or other explicitly supported outputs.

### FR-08 — Context-aware scientific analysis
Analyse selected material/specimen, apparatus, quantity, concentration, modelled environment, action sequence, measurements, source data and model constraints. Separate observed facts, calculations, interpretations, hypotheses and uncertainties.

### FR-09 — Research question and hypothesis
Create a research question, rationale, hypothesis, alternative explanations, measurable predictions, required variables and potential falsification tests. Link each background claim to a source.

### FR-10 — Experimental design
Define independent/dependent/control variables, sample size, controls, method, instruments, calibration, safety level, inclusion/exclusion criteria and stopping rules. Support virtual experiments and recorded/imported real experiments. Do not present an unsafe or unreviewed method as approved.

### FR-11 — Dataset import and provenance
Import supported CSV/TSV/JSON files in later implementation, inspect schema and units, track source/licence, checksum, missing data, transformations and version. Preserve immutable raw data and derived datasets separately.

### FR-12 — Analysis and visualisation
Provide scientific calculator/formula engine, unit conversion, tables, charts, descriptive statistics, uncertainty, regression/model fitting and comparisons appropriate to the dataset. Advanced methods are added by tested modules, not as unvalidated free-form answers.

### FR-13 — Evidence-backed research synthesis
Search and connect literature/data records, compare claims and findings, expose conflicting evidence, preserve citations and distinguish primary/secondary sources, full text/abstract/metadata and open/restricted content.

### FR-14 — Novelty and hypothesis assistance
Suggest patterns, gaps, contradictions and possible new questions from reviewed sources and user data. Label suggestions as candidates. Never state that a result is novel or proven without adequate review and external evidence.

### FR-15 — Notebook and reproducibility
Store protocol, raw observations, units, parameters, data transformations, source IDs, rule/model versions, random seed, code/calculation version, graphs, analysis, conclusion and limitations. Reproduce a run from the stored session.

### FR-16 — Learning and assessment
Guided Practice, Free Practice, timed Practical Exam, viva, scoring, observation notebook, progress and weak-topic insights.

### FR-17 — Offline/local-first
Core educational packs and selected simulations work offline. Research search connectors may require internet; downloaded content must preserve source date and citation. Sync is optional.

### FR-18 — Safety and permissions
Virtual-only boundary for hazardous content; tiered risk labels; reject unsupported dangerous operations; consent/privacy for user datasets; protect sensitive biological/medical data. No clinical diagnosis or unsupervised wet-lab recipe generator.

### FR-19 — Extensibility
New scientific domains enter via typed content/rule/data packs with source, schema, tests, licence, safety review and versioning. No hard-coded assumption that the system covers all science.

## Non-functional requirements

- Scientific results deterministic where the model is deterministic.
- Every result labels its epistemic type: MEASURED, IMPORTED, SIMULATED, CALCULATED, APPROXIMATION, PREDICTED, NOT_MODELLED or NEEDS_REVIEW.
- Traceable source/model/version, units, assumptions and uncertainty.
- Reproducible datasets and experiment sessions.
- Mobile-first and low-end device fallback for the 3D lab.
- Offline educational core and no mandatory paid AI API.
- Accessibility, localisation and reliable recovery.
- Unit, integration, scientific regression, security, data provenance, performance and usability testing.

## Acceptance principle

A screen or fluent explanation is not proof. Accept only working flows with traceable inputs, correct calculations/models, tests, documented limits and reproducible results.
