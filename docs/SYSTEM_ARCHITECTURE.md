# System Architecture — LabVerse Scientific Platform

## Architectural goal

Create an offline-first scientific learning and research platform where scientific truth, source evidence, experiment state, calculations and visual rendering remain separate but connected. A visual effect or fluent AI response must never become the authority for a scientific result.

## Main layers

1. **Experience layer** — Learning Lab, Virtual Experiment Lab, Scientific Analysis, Research Studio, notebook, progress and reports.
2. **3D interaction layer** — Three.js scene, asset loader, camera, touch/mouse hit-testing, transforms, snapping, selection and highlighting.
3. **Experiment orchestration layer** — session state, action validation, event history, undo/reset, simulated clock, timer and replay.
4. **Domain computation layer** — Physics, Chemistry and Biology models, equations, curated rules, numerical solvers and unit conversion.
5. **Scientific data/source layer** — source registry, connector adapters, reference-data retrieval, literature metadata, local datasets and licence/attribution metadata.
6. **Evidence and knowledge layer** — claim/evidence/source relationships, citation graph, contradictions, source quality, version and review state.
7. **Research workflow layer** — question, hypothesis, competing explanations, variables, design, data, analysis, interpretation and proposed next tests.
8. **Analysis/explanation layer** — structured explanation assembled from model outputs, observations and source-backed evidence. Optional AI can help phrase or organise content but cannot change computed results or fabricate citations.
9. **Content layer** — versioned experiment definitions, apparatus, substances, specimens, model packs, reaction rules, rubrics and curriculum packs.
10. **Persistence layer** — IndexedDB for local packs, progress, sessions, datasets, notebooks and cached references; export/import backup. Cloud sync optional and later.

## Authoritative runtime flow

User action or imported dataset -> validation/provenance check -> domain model or analysis pipeline -> structured result/evidence events -> 3D/dashboard rendering -> explanation/report -> reproducibility record.

The domain engine computes outcomes. Three.js renders state and does not decide which reaction or measurement occurred. Source connectors retrieve evidence but do not automatically make a source claim true.

## Scientific record types

- ExperimentDefinition and ExperimentSession
- ApparatusDefinition, SubstanceDefinition, SpecimenDefinition and MaterialDefinition
- ActionRequest and ActionResult
- Observation and Measurement
- Dataset and DatasetTransformation
- ScientificClaim, SourceRecord and EvidenceLink
- Hypothesis, ExperimentProtocol and AnalysisRun
- ModelDefinition, ModelVersion and ModelValidity
- AnalysisReport and ReproducibilityManifest

Every type is versioned where changes affect interpretation.

## Proposed app structure

- src/app/ — routes/layout/providers
- src/features/learning/
- src/features/workbench/
- src/features/analysis/
- src/features/research/
- src/features/catalogue/
- src/features/notebook/
- src/features/exam/
- src/features/progress/
- src/engine/core/
- src/engine/chemistry/
- src/engine/physics/
- src/engine/biology/
- src/engine/statistics/
- src/engine/analysis/
- src/sources/adapters/
- src/evidence/
- src/content/packs/
- src/assets3d/
- src/storage/
- src/i18n/
- tests/

These are target folders, not existing source code.

## Data and research boundaries

- Preserve raw imported observations separately from cleaned/derived data.
- Record source ID, retrieval date, licence/terms, citation and content checksum where possible.
- Do not scrape or redistribute full text/data without permission.
- Keep API credentials out of client code and never commit secrets.
- Apply dataset-specific privacy and sensitivity rules; sensitive biological/medical records require stronger controls and are not in the initial learning release.
- Cache source data with its version/date; online refresh must not silently change an existing experiment result.
- All computations store units, assumptions, model version and parameters.
- Optional language models receive only the minimum necessary non-sensitive context and cannot override the domain engine.

## Failure isolation

- Missing 3D asset: 2D fallback; scientific calculation remains available.
- Missing/unsupported rule: NOT_MODELLED or NEEDS_REVIEW; do not guess.
- Invalid action: explain the constraint and leave scientific state unchanged.
- Source unavailable: use explicitly dated cached data or report unavailable/stale.
- Conflicting sources: retain both claims and show provenance/conflict; do not arbitrarily average or pick one.
- Low-end device: reduce visual quality without altering computed science.
- Storage failure: surface it and offer export/recovery where possible.
