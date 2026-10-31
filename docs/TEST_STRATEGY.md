# Test Strategy and Phase Acceptance

## Test layers

### Unit tests
Schema validation/version compatibility; rule matching and boundaries; unit conversions and formula evaluation; state transitions/action validation; observation generation and analysis assembly.

### Integration tests
Practical setup -> action -> domain outcome -> visual state -> dashboard observation; apparatus compatibility; reset/replay determinism; notebook persistence/export; offline content loading.

### UI/interaction tests
Dashboard filtering; empty workbench; tap-to-add and drag-and-drop; move/rotate/zoom/remove/reset; keyboard/touch alternatives; guided/free/exam differences.

### Scientific regression tests
Every verified rule has input/output vectors, source references and expected observations. Changes rerun related tests.

### Device/performance tests
At least one low-end and one modern Android phone; check memory, frame rate, initial load, asset loading, touch response, offline startup, battery and thermal behaviour.

## Critical acceptance scenarios

1. Tap a voltmeter in Physics: a real 3D voltmeter appears.
2. Drag a conical flask in Chemistry: a real 3D flask appears at drop position.
3. Tap/drag a microscope or slide in Biology: a real 3D model appears and works.
4. In a validated chemistry practical, selected sample + allowed action drive the correct visual outcome and analysis.
5. Unknown chemical/sample: no invented colour/product; explicit unsupported state.
6. Correct and incorrect Physics connections produce distinct, explained results.
7. Microscope focus changes the modelled view; identification is supported by visible features.
8. Replaying the same session/action sequence yields the same result.
9. Installed content pack works offline.
10. Practical exam score and feedback match its rubric.

## Phase evidence

Record test command, environment, test count, pass/fail/skip, CI run and manual device results. A passing screenshot alone does not establish scientific correctness.
