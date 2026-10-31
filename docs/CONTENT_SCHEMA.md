# Content and Data Contracts

This document defines conceptual contracts. TypeScript implementation and schema validation belong to Phase 2.

## ExperimentDefinition

Fields: stable ID and version; title; class; subject; board mappings; academic year; content status; learning objectives; prerequisites; estimated duration; source references (publisher, title, URL, page/section, retrieval date and optional content hash); apparatus and material IDs; sample assets; initial conditions; allowed actions and step sequence; domain rule references; observation schema; calculation references; safety level/warnings/limitations; guided hints; viva references; assessment rubric.

## ApparatusDefinition

Fields: ID, name, subject, category, description, purpose, asset reference, fallback asset, physical dimensions, allowed transforms, anchor points, compatible item IDs, allowed actions, safety notes and source/licence.

## SubstanceDefinition

Fields: ID, name, formula, class, hazard metadata, physical state, display profile, source references and review status. Concentration, quantity, solvent and temperature belong to a sample instance or experiment state, not global substance identity.

## ReactionRule

Fields: ID and version; reactant constraints; condition constraints; products; balanced equation; expected observations; calculation model reference; explanation template; validity range; limitations; source references; review status and test cases.

## ActionRequest / ActionResult

ActionRequest contains action ID, actor ID, target IDs, typed parameters and session sequence. ActionResult contains accepted/rejected, reason code, human-readable reason, state changes, observation event IDs and rule IDs.

## Observation

Fields: ID, type, value, unit, display value, conditions, simulated time, rule reference, source references, confidence and status: MODELLED, APPROXIMATION, NOT_MODELLED or NEEDS_REVIEW.

## AnalysisReport

Separate observed facts, interpretation/inference, equation/model, calculation and units, assumptions and uncertainty, consistency checks, source/rule provenance and unsupported/unknown aspects.

## Content status vocabulary

- DRAFT: authored but not checked.
- NEEDS_REVIEW: incomplete or disputed.
- VERIFIED: reviewed against primary source and test cases.
- PUBLISHED: included in a released content pack.
- RETIRED: superseded but retained for historical sessions.

DRAFT or NEEDS_REVIEW rules must never silently produce a definitive student-facing result.
