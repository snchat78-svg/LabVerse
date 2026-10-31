# System Architecture

## Architectural goal

Build an offline-first, mobile-first 3D learning environment where UI, scientific state and visual scene are separate but synchronized. A rendered effect must never be the source of scientific truth.

## Layers

1. Experience: dashboard, catalogue, workbench, controls, live dashboard, notebook, viva and progress.
2. 3D interaction: Three.js scene, asset loader, camera, hit testing, touch/mouse gestures, transforms, snapping and highlighting.
3. Experiment orchestration: session, step/action validation, undo/reset, event dispatch, timer and replay.
4. Domain simulation: Chemistry, Physics and Biology engines; deterministic rules and calculations.
5. Analysis/explanation: turns structured state and observations into causal explanations with evidence, confidence and limitations. No generative model is trusted as the result engine.
6. Content: versioned experiment definitions, apparatus metadata, substance/specimen registry, action rules, visual profiles, rubrics and source citations.
7. Persistence: IndexedDB for content packs, progress, sessions and assets; export/import backup. Cloud sync is optional and later.

## Runtime flow

User action -> action validator -> domain rule evaluation -> new experiment state -> observation events -> 3D/dashboard render -> analysis explanation -> notebook event.

The simulation engine is authoritative. Three.js reads state and renders it; it does not decide which reaction occurred.

## Proposed application structure

- src/app/ — routes, layout and providers
- src/features/dashboard/
- src/features/catalogue/
- src/features/workbench/
- src/features/experiment/
- src/features/notebook/
- src/features/exam/
- src/features/progress/
- src/engine/core/ — state, actions, event bus, clock, validation
- src/engine/chemistry/
- src/engine/physics/
- src/engine/biology/
- src/engine/analysis/
- src/content/ — schemas, catalogues and packs
- src/assets3d/ — manifest and loaders
- src/storage/
- src/i18n/
- tests/

These are target folders, not files that already exist.

## Key contracts

- ExperimentDefinition: declarative and versioned experiment definition.
- ExperimentSession: initial conditions and current domain state.
- ActionRequest: student action, actor/item IDs and parameters.
- ActionResult: accepted/rejected, reason, state changes and observations.
- Observation: type, value, unit, conditions, source rule and confidence.
- AnalysisReport: observation, inference, calculation, conclusion, uncertainty and citations.
- AssetManifest: stable domain IDs mapped to 3D asset paths, scale, origin, materials and mobile LODs.

See CONTENT_SCHEMA.md, REALTIME_SIMULATION_ENGINE.md and subject-engine specifications.

## Offline and privacy

Core experiments run on-device. The first release has no compulsory learner account and should avoid collecting personal data. Save only learning progress required. Any later sync is opt-in. No student data is sent to an AI provider for core simulation.

## Fault isolation

- Missing 3D asset: show an accessible 2D fallback and log the content defect; do not block valid computation.
- Missing rule: return NOT_MODELLED; do not guess.
- Invalid action: explain the violated constraint and leave domain state unchanged.
- Device performance issue: lower visual quality, particles, shadows and texture resolution without changing simulation outputs.
- Storage failure: surface the issue and offer export/recovery where possible.
