# Expandable Scientific Domain and Model Packs

## Goal

LabVerse must be expandable beyond the initial RBSE/NCERT practical curriculum. New topics are added as validated domain packs, not as unbounded prompts or hard-coded exceptions.

## Domain pack contract

Each domain pack supplies:
- domain ID, version and scope;
- concepts/entities, units and identifiers;
- source/data connectors and licence/attribution;
- equations, reaction rules, algorithms or classification rules;
- supported parameter range and assumptions;
- observation/result schemas;
- 3D/2D asset requirements;
- safety and privacy requirements;
- test vectors, expected results and uncertainty limits;
- reviewer and release status.

## Initial domain families

### Physics
Mechanics, measurement/metrology, circuits/electromagnetism, optics, waves/acoustics, thermodynamics, atomic/modern physics, materials and model-based experiments.

### Chemistry
Chemical identity and properties, stoichiometry, acid-base/equilibrium, redox, kinetics, thermochemistry, phase behaviour, spectra and curated reaction systems.

### Biology
Cell/tissue structure, microscopy, taxonomy, genetics, molecular biology, physiology, microbiology, biodiversity and ecology.

### Cross-domain extensions
Environmental science, biophysics, chemical biology, materials science, geoscience and other areas can be added when source data and models are validated.

## Model fidelity levels

- REFERENCE_LOOKUP: retrieves a cited property/value; it is not a simulation.
- QUALITATIVE_MODEL: explains direction or category of change with explicit limits.
- QUANTITATIVE_MODEL: computes numerical outcomes using equations/parameters and declared tolerances.
- PREDICTIVE_MODEL: estimates outcomes beyond direct observations; must show validation range, error and uncertainty.

A model must declare its level and must not be presented as more accurate than its evidence supports.

## Extension workflow

1. Define the research/learning use case.
2. Identify authoritative sources and legal data/asset rights.
3. Define domain entities, units, initial state and possible actions.
4. Select model fidelity and validity range.
5. Create expected-result test vectors and negative/unsupported cases.
6. Review scientific assumptions and safety.
7. Add 3D assets only where they improve understanding.
8. Integrate into engine through stable contracts.
9. Run regression and device tests.
10. Publish a versioned pack with limitations and provenance.

## Explicit limits

- Do not claim arbitrary chemistry prediction or unrestricted biological prediction.
- Do not extrapolate a model past validated conditions.
- Do not equate a realistic animation with molecular-level physical fidelity.
- High-cost simulations such as broad quantum chemistry, molecular dynamics or computational fluid dynamics are future specialised options, not assumed first-release capabilities.
- New domain packs can be added indefinitely in principle, but each still needs data, models, computing resources and expert review.
