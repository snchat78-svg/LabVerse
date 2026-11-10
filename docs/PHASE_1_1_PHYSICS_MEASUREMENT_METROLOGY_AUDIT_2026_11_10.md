# Physics measurement and metrology readiness audit — 2026-11-10

## Purpose

A Physics result is only as defensible as the measurement chain behind it. This audit turns the existing NCERT Physics kit-manual item schedule into an explicit metrology readiness register for instruments that produce readings or control measured quantities.

**Evidence source:** `data/catalogues/ncert_physics_kit_manual_items.csv`, 106 item rows derived from the previously inspected NCERT Manual of Secondary Stage Physics Laboratory Kit (code 13164). The manual source is text-inspected in prior repository work. The manual item schedule is not the current procurement specification and does not establish delivered stock, a complete model, calibration status or approval for real use.

## Scope

The register has 18 source-linked records:
- dimensional instruments: Vernier caliper, screw gauge, spherometer, folding meter scale and protractor;
- mass/volume/time/force/temperature: beam balance, measuring cylinder, stopwatch, spring balance and laboratory thermometer;
- electrical instruments and measurement setups: galvanometer, multimeter, potentiometer, resistance box, rheostat and meter bridge;
- alignment and resonance: spirit level and sonometer.

Each record preserves the manual's stated role and only the supported attributes. It separately records procurement specification status, usable range/span, least count/resolution, calibration traceability, zero correction, uncertainty budget, setup dependence, model/test status and release boundary.

## Summary of evidence gaps

| Evidence dimension | Current status from the manual item schedule |
|---|---|
| Item identity and practical role | Manual text inspected for all 18 selected source rows |
| Current NCERT procurement specification and supplier/model | Not established by item schedule |
| Delivered stock and acceptance inspection | Not established |
| Full measurement range or operating span | Unknown for all selected instruments except specific non-metrological source descriptions such as the 1 m joined meter-bridge scale |
| Least count/display resolution and tolerance | Unknown or incomplete; one Vernier example in Experiment 1 is not a universal procurement specification |
| Calibration certificate/traceability and date | Not recorded |
| Zero offset/correction and drift | Not recorded or not yet source-verified |
| Combined uncertainty budget and repeatability | Not calculated; input components are incomplete |
| Validated equations and expected-result test vectors | Not implemented; Phase 2/8 gates remain |
| Physical hardware control | Not supported; virtual-only boundary |

## High-priority instrument-specific review notes

1. **Vernier caliper, screw gauge and spherometer:** do not assume common school-kit least counts. Each supplied instrument needs its own range, divisions, pitch (where applicable), actual least count, zero error, calibration and uncertainty.
2. **Balance, measuring cylinder and stopwatch:** range/capacity alone does not specify sensitivity, graduation, timing accuracy or uncertainty. Meniscus, parallax, reaction time, eccentric load and repeatability must be represented where relevant.
3. **Thermometer:** range, graduation, immersion depth, response time, working liquid and calibration must be known before a numerical temperature reading is called calibrated.
4. **Galvanometer and multimeter:** the manual's multimeter terminal/function description is not a full range/accuracy/safety specification. Galvanometer coil resistance and current sensitivity are not provided in the item schedule. No real hazardous electrical setup may be enabled.
5. **Potentiometer and meter bridge:** their physical scale/assembly descriptions do not validate wire uniformity, resistance per length, contact/joint resistance, heating, endpoint corrections or calibration.
6. **Resistance box and rheostat:** selectable/variable resistance is a role, not a numeric model. Values, steps, tolerance, power rating and contact behaviour must be established.
7. **Sonometer and spirit level:** frequency, wire tension/length and vial sensitivity/straightness are required for quantitative inference; the item schedule alone does not establish them.

## Required future measurement contract

Before a future Physics engine may emit a measurement-derived result, the selected instrument profile must include:
- instrument identity, model/revision and provenance;
- measurand, unit, range and overload/unsupported conditions;
- scale interval/least count or digital resolution and accuracy/tolerance;
- calibration provider/standard, certificate ID, date, due date and traceability;
- zero offset, correction direction, hysteresis/drift and repeatability method;
- environmental/setup dependencies and allowed measurement procedure;
- an uncertainty budget with standard/expanded uncertainty conventions and coverage factor where applicable;
- expected-result, negative and boundary test vectors, independently checked against a reference method.

The engine should return a typed status such as `NOT_CALIBRATED`, `OUT_OF_RANGE`, `ZERO_CHECK_REQUIRED`, `UNCERTAINTY_INCOMPLETE`, `MODEL_NOT_VALIDATED` or `RESULT_VALIDATED_WITHIN_SCOPE`. It must not substitute nominal instrument labels for actual calibration data.

## Implementation boundary

This is **readiness documentation only**. It does not create a calibration certificate, infer product specifications from other manufacturers, implement an instrument simulator or authorize physical operations. All 18 records remain procurement/specification-incomplete and NOT_IMPLEMENTED_PHASE_8_BLOCKED. They are not measured or simulated observations.

## Next work

1. Continue internal recovery of the previously supplied Physics procurement PDF/variant to compare against the official NCERT attachment (official response size 42,539,010 bytes; actual payload remains unavailable). Do not request re-upload.
2. Review the manual experiment pages for instrument-specific principles and examples only where the underlying text/source record supports them; maintain separate instrument profile versus experimental method.
3. Perform equivalent metrology/data-quality readiness review for Chemistry (pipettes, burettes, pH indicators, balances, thermometers) and Biology (microscope magnification/focus, pipettes, balances, thermometers) after Phase 1 source records are ready.
4. Do not start Phase 8 quantitative physics models until Phase 1 exit and Phase 2 measurement contracts have passed.

**Phase gate:** Phase 1 / 1.1 remains IN PROGRESS; Phase 2 scientific model contracts remain BLOCKED.
