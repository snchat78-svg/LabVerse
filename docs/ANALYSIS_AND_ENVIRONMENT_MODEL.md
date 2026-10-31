# Scientific Analysis and Environment Model

## Purpose

This is the reasoning and interpretation layer that connects an experiment's live state, relevant environmental conditions, reference data and scientific models. It supports both learning practicals and wider research workflows.

## Evidence inputs

Analysis may use:
- experiment, curriculum and model versions;
- apparatus layout, selected materials/substances/specimens and compatibility;
- quantities, concentration, calibration and units;
- action sequence and simulated time;
- experiment-specific environment variables such as temperature, pressure, illumination, pH, humidity or other explicitly modelled conditions;
- measured or imported datasets with provenance;
- observations emitted by Physics/Chemistry/Biology engines;
- reference-data records and scientific claims with citations;
- rule/model validity ranges, assumptions and limitations.

Only relevant variables are used. The engine must not invent environmental measurements that the experiment does not model.

## Result epistemic labels

Every displayed value or claim must be labelled as one of:
- MEASURED — recorded from an actual instrument/sensor with metadata.
- IMPORTED — supplied by a dataset or external source; source and date shown.
- SIMULATED — output of a named virtual model with version and parameters.
- CALCULATED — derived from inputs using a named equation/method.
- APPROXIMATION — simplified model with declared limits.
- PREDICTED — model-generated forecast/hypothesis, not an observation.
- NOT_MODELLED — no valid model for these inputs.
- NEEDS_REVIEW — source, condition or model is incomplete/conflicting.

## Live analysis output

Each update separates:
1. What changed — state transition or dataset operation.
2. What is observed — visible/measured/imported facts.
3. What was calculated — formula, substituted values and units.
4. Why it may have happened — matched rule/model and evidence.
5. Interpretation — inference tied to the research question/practical.
6. Alternative explanations — plausible competing interpretation where relevant.
7. Confidence and limitations — valid range, uncertainty and source quality.
8. Next useful test — only safe, relevant and supported actions.

## Runtime behaviour

When the student changes a material, quantity, connection, instrument control or modelled environmental condition:
- validate the new state and compatibility;
- recompute dependent values;
- update 3D visuals and dashboard from the same authoritative result;
- create an observation/analysis event;
- preserve prior readings and versions in the notebook.

For imported research data, do not recalculate raw values silently. Cleaning, unit conversion, filtering, imputation and normalisation are explicit, reviewable transformation steps.

## Example: chemical colour/result analysis

A student selects a validated syllabus practical, sample and allowed virtual action. A curated chemistry rule emits an observation event. The analysis panel describes the observed colour/precipitate/gas/indicator state, links to the rule/equation, explains the interpretation and shows limitations. The scene, dashboard, notebook and explanation refer to the same event ID.

An unknown sample, missing reagent identity or unverified condition returns an explicit unsupported state. Similarity of names is not proof of chemical identity.

## Example: environmental variable

If the selected model includes temperature or illumination, changing that variable recomputes only declared dependent quantities and visual effects. If the model does not use temperature, the control is absent/disabled with an explanation.

## Research analysis

For a research question, the system can:
- retrieve and cite relevant source records;
- compare claims, methods, sample sizes and reported findings;
- identify disagreement or missing evidence;
- import a dataset and inspect units/missingness/distribution;
- apply appropriate calculations/statistics;
- compare model predictions with observations;
- propose candidate hypotheses and tests.

It cannot certify novelty, prove causation from correlation, replace peer review or declare a discovery from simulation alone.

## AI boundary

Core calculation, reaction matching and scientific state are deterministic and offline-capable where feasible. Any future AI assistant can summarise retrieved evidence or rephrase structured analysis, but must cite the underlying sources, disclose gaps and never modify a computed result or invent evidence.

## Acceptance tests

- Same versioned inputs and actions reproduce the same deterministic result.
- Every explanation links to a rule, model, dataset or source.
- Visual scene and observation dashboard are consistent.
- Unsupported conditions are not guessed.
- Environmental parameters affect only declared models.
- Raw vs transformed dataset values remain traceable.
- Observation, calculation, inference and hypothesis are separately presented.
