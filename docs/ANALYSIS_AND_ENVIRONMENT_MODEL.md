# Live Analysis and Environment Model

## Purpose

This is the layer that makes LabVerse more than an animated lab. It interprets the current virtual-lab context and explains what the student is seeing while the practical is running.

## Inputs

The analysis engine may use only structured, session-scoped information:
- selected experiment, syllabus version and domain-rule versions;
- apparatus present, position/orientation and connection state;
- selected substances/specimens, amounts, concentrations and compatibility;
- action sequence and simulated time;
- experiment-specific environmental variables such as virtual temperature, pressure, illumination, pH or other explicitly modelled conditions;
- instrument readings, calibration, units and measurement uncertainty;
- observations emitted by the Chemistry, Physics or Biology engine;
- rule provenance, validity range and known limitations.

Only relevant variables are included for a given experiment. The engine must not invent environmental measurements that the experiment does not model.

## Output contract

Every analysis update is structured into:
1. What changed — the latest state transition.
2. What is observed — visible/measured facts, without explanation.
3. Why it happened — the matched rule, equation or model.
4. What it means — inference tied to the practical objective.
5. Calculation — formula, substituted values and units, when applicable.
6. Confidence/limitations — validated, approximate, unsupported or needs review.
7. Next useful action — only an action allowed by the practical.

## Real-time behaviour

When a student adds a material, changes a quantity, connects an instrument, adjusts a control or changes a modelled environmental condition:
- revalidate the experiment state;
- recompute dependent values;
- update the visual scene and dashboard from the same result;
- append an explanation event to the session;
- preserve the previous observation for the notebook.

Avoid an analysis flicker on every rendering frame. Trigger analysis from meaningful state changes or timed model ticks.

## Example: chemistry colour/result analysis

The learner has selected a syllabus-approved test, selected a known sample and performed its allowed virtual action. The chemistry rule produces an observation record. The analysis panel then identifies the observed colour/precipitate/gas/indicator state, links it to the rule, explains the relevant chemical interpretation and lists limitations. The 3D scene, result badge, notebook and explanation all reference the same observation event ID.

An unknown sample, missing reagent identity or unverified condition must produce an explicit unknown/unsupported result. Do not guess based on a similar name.

## Example: changing environment

If a practical has a modelled temperature or illumination variable, changing it updates only the dependent calculations and visual state declared by that practical. If temperature is not an input to a particular practical model, the temperature control is absent or disabled with an explanation.

## AI boundary

The first release does not need a remote AI model. Use deterministic templates and rule-derived reasoning so explanations remain repeatable and can run offline. A later optional language assistant may rephrase an already-computed analysis, but it cannot change the result, invent an observation, select an unsupported reaction or override rule provenance.

## Acceptance tests

- Same inputs/action history always produce the same analysis.
- Every explanation links to an observation/rule.
- Visual state and analysis dashboard never contradict one another.
- An unsupported condition is reported as such.
- Environmental variables affect only experiments that declare them.
- User-facing output separates observation, inference and calculation.
