# Test Strategy and Phase Acceptance

## Test layers

### Unit tests
Schema/version validation; rule matching and boundaries; unit conversion; formula evaluation; action validation; dataset transformations; statistics; source/claim/evidence linking; reproducibility manifest validation.

### Integration tests
Practical setup -> action -> domain outcome -> visual state -> dashboard observation; apparatus compatibility; reset/replay determinism; notebook persistence; data import -> transformation -> analysis -> cited report; source connector timeout/stale data handling.

### UI and interaction tests
Dashboard filters; empty workbench; tap-to-add and drag-and-drop; move/rotate/zoom/remove/reset; keyboard/touch alternatives; guided/free/exam; research question and dataset workspace flows.

### Scientific regression tests
Every verified rule/model has test vectors, source references, validity range, expected outputs and known limitations. Re-run after any content or engine change.

### Evidence and data tests
- Source URL, DOI/identifier and retrieval date retained.
- Claim-to-source and observation-to-rule links resolve.
- Dataset raw values remain immutable.
- Unit conversions and missing-value handling are explicit.
- Licence/attribution restrictions travel with data.
- Conflicting sources remain visible.
- No citation or scientific fact is fabricated.

### Device/performance tests
At least one low-end and one modern Android phone; memory, frame rate, initial load, asset loading, touch response, offline startup, battery and thermal behaviour.

## Critical acceptance scenarios

1. Tap a Physics instrument: a real 3D model appears in the bench.
2. Drag a Chemistry flask: a real 3D object appears at the drop position.
3. Place a Biology microscope/slide and change supported focus/magnification.
4. A validated Chemistry action drives a rule-correct visual outcome and analysis.
5. Unknown chemical/sample produces no invented colour/product.
6. Correct/incorrect Physics connections produce distinct explanations.
7. Same deterministic session and action sequence reproduce the result.
8. Import a dataset; preserve raw data; record all transformations and units.
9. Generate a scientific claim summary where every claim links to evidence or is labelled unsupported.
10. A suggested hypothesis is labelled as a candidate and includes a discriminating test, not a claim of discovery.
11. Source/API outage or stale content is visible to the learner/researcher.
12. An installed learning content pack works offline.

## Phase evidence

Record commands, environment, test count, pass/fail/skip, CI link and manual device results. A UI snapshot, fluent explanation or green build alone does not establish scientific correctness.
