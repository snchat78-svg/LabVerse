# Scientific Data and Evidence Pipeline

## End-to-end pipeline

Research question -> source discovery -> source/claim extraction -> evidence map -> hypothesis -> protocol/design -> simulation or permitted data acquisition -> raw data validation -> explicit transformations -> analysis -> interpretation -> reproducibility review -> report and follow-up test.

## Source discovery

- Search sources appropriate to the scientific domain.
- Store canonical IDs and citations, not just copied snippets.
- Distinguish primary research, review, reference dataset, standard, official syllabus and community observation.
- Check publication date, correction/retraction status where available, methods, sample and access/licence.
- Keep search query and retrieval date so the research path can be repeated.

## Claim/evidence graph

Core nodes:
- ScientificQuestion
- Hypothesis
- Claim
- Source
- Dataset
- Observation
- Experiment
- Model
- Calculation
- ReviewerDecision

Core links:
- SUPPORTS, CONTRADICTS, DERIVED_FROM, MEASURED_IN, SIMULATED_BY, CITED_BY, REPLICATES and REQUIRES_REVIEW.

Do not collapse multiple sources into one unsupported summary. Each generated statement should link to its supporting evidence or be labelled as an unverified suggestion.

## Dataset lifecycle

1. Acquire/import and record source/licence/attribution.
2. Preserve immutable raw file and calculate checksum.
3. Inspect delimiter, encoding, column schema, units, missing values and possible duplicates.
4. Validate expected ranges and identify outliers without silently deleting them.
5. Record each cleaning/normalisation/aggregation step as a transformation.
6. Store derived dataset separately with parent IDs.
7. Run analysis against a named dataset version.
8. Export tables/figures with method, units and provenance.

## Scientific computation

- Use explicit units and dimensional checks.
- Store formula/model version, parameters, initial conditions and tolerances.
- Record software/calculation version and random seed where relevant.
- Report sample size, assumptions, uncertainty and statistical method.
- Distinguish statistical association from causal evidence.
- Avoid unsupported extrapolation beyond model/data scope.

## API and offline behaviour

Connectors are separate adapters with typed responses, retries, timeouts, rate-limit awareness and caching. Store when data was retrieved. If offline, identify cached data as dated/cached. Do not silently substitute stale values for current values.

Never store API secrets in the browser bundle, Git history or public repository. Prefer public read-only APIs where allowed and move protected credentials behind a later, secured service if required.

## Reproducibility manifest

A report should be reproducible from:
- research project and protocol version;
- raw and derived dataset IDs/checksums;
- source IDs and retrieval timestamps;
- transformation sequence and parameters;
- model/rule/formula version;
- input values and units;
- software/environment version;
- random seed where relevant;
- reviewer notes and known limitations.
