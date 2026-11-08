# RBSE 2026–2027 Class XI Physics — Experiment Traceability Register

Audit date: 2026-11-08  
Phase: 1 / subphase 1.1  
Status: PARTIAL TRACEABILITY DESIGN — not source-verified implementation and not ready for learners.  
RBSE source range: user-supplied Class XI 2026–2027 PDF, PDF pages 114–119. The current task ID/title strings are taken from docs/PHASE_1_RBSE_ALL_PRACTICAL_COVERAGE_REGISTER.md. The uploaded RBSE PDF provenance has not been independently cryptographically authenticated.

## 1. Coverage result

- Total Class XI Physics experiments in the audited RBSE index: 17.
- Experiments included in this register: 17/17.
- Candidate Physics manual source IDs referenced: 43.
- Source item ID existence check against data/catalogues/ncert_physics_kit_manual_items.csv: PASS for every referenced ID.
- RBSE task ID existence check against the all-six-pack register: PASS for all 17 IDs.
- Procurement specifications: NOT VERIFIED. The 106-row Physics catalogue is a manual item schedule; it does not provide complete procurement quantities/tolerances/acceptance criteria for each instrument.
- Proposed asset IDs are identifiers only; no GLB/3D or runtime assets are created.
- Model/rule and test IDs are plans only; no numerical model implementation or scientific validation is claimed.

## 2. Full experiment-to-source candidate crosswalk

| RBSE task (PDF pages 114–119) | Candidate NCERT manual item IDs | Proposed original asset IDs | Proposed model/rule IDs | Evidence state / unresolved gap |
|---|---|---|---|---|
| RBSE-XI-PHY-EXP-01 — Vernier calipers — sphere/cylinder dimensions, regular-object density and cylindrical volume | NCERT-PHY-KIT-003, NCERT-PHY-KIT-006 | LV-ASSET-PHY-VERNIER-CALIPER-001, LV-ASSET-PHY-BEAM-BALANCE-001 | PHY-MEASURE-VERNIER-001, PHY-GEOMETRY-DENSITY-001 | CANDIDATE_MATCH; RBSE wording says a regular object of known mass; the optional balance is needed only when mass is not supplied. Exact measurement range/accuracy and kit procurement specification remain unknown. |
| RBSE-XI-PHY-EXP-02 — Screw gauge — wire diameter, sheet thickness and irregular-lamina volume | NCERT-PHY-KIT-004, NCERT-PHY-KIT-026 | LV-ASSET-PHY-SCREW-GAUGE-001, LV-ASSET-PHY-METAL-WIRE-SAMPLE-001, LV-ASSET-PHY-LAMINA-SAMPLE-001 | PHY-MEASURE-SCREW-GAUGE-001, PHY-GEOMETRY-LAMINA-VOLUME-001 | CANDIDATE_MATCH; The wire set is listed in the Physics manual. A specific lamina specimen and its area/volume method are not identified in the available source register. |
| RBSE-XI-PHY-EXP-03 — Spherometer — radius of curvature of a spherical surface | NCERT-PHY-KIT-005, NCERT-PHY-KIT-039, NCERT-PHY-KIT-023 | LV-ASSET-PHY-SPHEROMETER-001, LV-ASSET-PHY-PLANE-GLASS-PLATE-001, LV-ASSET-PHY-WATCH-GLASS-001 | PHY-MEASURE-SPHEROMETER-001, PHY-OPTICS-RADIUS-CURVATURE-001 | CANDIDATE_MATCH; The manual includes a spherometer, plane glass plate and watch glass, but does not prove that watch glass is the required spherical surface for every setup. |
| RBSE-XI-PHY-EXP-04 — Beam balance — masses of two different objects | NCERT-PHY-KIT-006, NCERT-PHY-KIT-044, NCERT-PHY-KIT-014, NCERT-PHY-KIT-015, NCERT-PHY-KIT-045, NCERT-PHY-KIT-046 | LV-ASSET-PHY-BEAM-BALANCE-001, LV-ASSET-PHY-BALANCE-PAN-001, LV-ASSET-PHY-MASS-SET-001, LV-ASSET-PHY-OBJECT-SAMPLE-001 | PHY-MEASURE-BALANCE-EQUILIBRIUM-001 | CANDIDATE_MATCH; The beam balance and nominal slotted masses are listed; the two unknown objects and exact balance capacity/least count are not specified. |
| RBSE-XI-PHY-EXP-05 — Parallelogram law — weight of a wooden block | NCERT-PHY-KIT-007, NCERT-PHY-KIT-017, NCERT-PHY-KIT-024, NCERT-PHY-KIT-043, NCERT-PHY-KIT-014, NCERT-PHY-KIT-015, NCERT-PHY-KIT-045, NCERT-PHY-KIT-046 | LV-ASSET-PHY-FORCE-TABLE-001, LV-ASSET-PHY-S-PULLEY-001, LV-ASSET-PHY-SPRING-BALANCE-001, LV-ASSET-PHY-WOODEN-BLOCK-001, LV-ASSET-PHY-SLOTTED-WEIGHTS-001 | PHY-MECHANICS-VECTOR-ADDITION-001 | CANDIDATE_MATCH; The manual source rows are candidate components. A complete force-table assembly and wooden-block equivalence are not procurement-verified. |
| RBSE-XI-PHY-EXP-06 — Simple pendulum — L–T and L–T² graphs; seconds pendulum effective length | NCERT-PHY-KIT-007, NCERT-PHY-KIT-009, NCERT-PHY-KIT-021, NCERT-PHY-KIT-040, NCERT-PHY-KIT-041, NCERT-PHY-KIT-071 | LV-ASSET-PHY-PENDULUM-STAND-001, LV-ASSET-PHY-PENDULUM-BOB-001, LV-ASSET-PHY-PENDULUM-THREAD-001, LV-ASSET-PHY-STOPWATCH-001, LV-ASSET-PHY-METER-SCALE-001 | PHY-OSCILLATION-SIMPLE-PENDULUM-001 | CANDIDATE_MATCH; The manual includes bob, thread and supports; metre-scale item identity and timing accuracy need confirmation. Small-angle validity and damping assumptions must be visible. |
| RBSE-XI-PHY-EXP-07 — Limiting friction versus normal reaction; coefficient of friction for a block on a horizontal surface | NCERT-PHY-KIT-019, NCERT-PHY-KIT-024, NCERT-PHY-KIT-014, NCERT-PHY-KIT-015, NCERT-PHY-KIT-045, NCERT-PHY-KIT-046 | LV-ASSET-PHY-WOODEN-BLOCK-HOOK-001, LV-ASSET-PHY-SPRING-BALANCE-001, LV-ASSET-PHY-LOAD-SET-001, LV-ASSET-PHY-HORIZONTAL-PLANE-001 | PHY-MECHANICS-LIMITING-FRICTION-001 | CANDIDATE_MATCH; The manual lists a wooden block with hook, spring balance and weights. Surface material/finish is not itemised in the current register. |
| RBSE-XI-PHY-EXP-08 — Downward gravitational component on roller on inclined plane; force versus sin(theta) | NCERT-PHY-KIT-010, NCERT-PHY-KIT-011, NCERT-PHY-KIT-012, NCERT-PHY-KIT-024, NCERT-PHY-KIT-090 | LV-ASSET-PHY-INCLINED-PLANE-001, LV-ASSET-PHY-STEEL-ROLLER-001, LV-ASSET-PHY-ALUMINIUM-ROLLER-001, LV-ASSET-PHY-SPRING-BALANCE-001, LV-ASSET-PHY-PROTRACTOR-001 | PHY-MECHANICS-INCLINED-PLANE-COMPONENT-001 | CANDIDATE_MATCH; Inclined plane and rollers are listed. Spring-balance force method and angular measurement match are candidates; setup details need manual/teacher confirmation. |
| RBSE-XI-PHY-EXP-09 — Young’s modulus of wire material using Searle’s apparatus | NCERT-PHY-KIT-007, NCERT-PHY-KIT-014, NCERT-PHY-KIT-015, NCERT-PHY-KIT-026, NCERT-PHY-KIT-024 | LV-ASSET-PHY-SEARLE-APPARATUS-001, LV-ASSET-PHY-ELASTIC-WIRE-001, LV-ASSET-PHY-LOAD-SET-001, LV-ASSET-PHY-MEASUREMENT-GAUGE-001 | PHY-MATERIAL-YOUNGS-MODULUS-001 | CANDIDATE_MATCH; The 106-row kit manual list has candidate wire/stand/weights, but Searle’s apparatus, extension comparator and exact wire dimensions are not confirmed by a procurement spec. Main asset remains SPEC_PENDING. |
| RBSE-XI-PHY-EXP-10 — Helical spring force constant and effective mass using oscillation and T²–m graph | NCERT-PHY-KIT-013, NCERT-PHY-KIT-007, NCERT-PHY-KIT-009, NCERT-PHY-KIT-014, NCERT-PHY-KIT-015, NCERT-PHY-KIT-045, NCERT-PHY-KIT-046, NCERT-PHY-KIT-071 | LV-ASSET-PHY-HELICAL-SPRING-001, LV-ASSET-PHY-SPRING-STAND-001, LV-ASSET-PHY-LOAD-SET-001, LV-ASSET-PHY-STOPWATCH-001, LV-ASSET-PHY-METER-SCALE-001 | PHY-OSCILLATION-MASS-SPRING-001 | CANDIDATE_MATCH; Spring and masses are listed; exact spring rate, safe extension and effective-mass convention are not specified in the source register. |
| RBSE-XI-PHY-EXP-11 — Boyle’s law for air at constant temperature; P–V and P–1/V graphs | NCERT-PHY-KIT-036, NCERT-PHY-KIT-008, NCERT-PHY-KIT-007 | LV-ASSET-PHY-GAS-SYRINGE-001, LV-ASSET-PHY-VOLUME-SCALE-001, LV-ASSET-PHY-PRESSURE-SENSOR-001, LV-ASSET-PHY-TEMPERATURE-SENSOR-001 | PHY-GAS-IDEAL-BOYLE-001 | CANDIDATE_MATCH; The Physics manual lists a 60 mL syringe, but the available item catalogue does not identify a calibrated pressure gauge/sensor or a validated Boyle apparatus. Pressure sensor and temperature sensor are proposed assets, not sourced items. |
| RBSE-XI-PHY-EXP-12 — Surface tension of water by capillary rise | NCERT-PHY-KIT-020, NCERT-PHY-KIT-029, NCERT-PHY-KIT-007, NCERT-PHY-KIT-071 | LV-ASSET-PHY-CAPILLARY-TUBE-001, LV-ASSET-PHY-BEAKER-001, LV-ASSET-PHY-STAND-001, LV-ASSET-PHY-MEASUREMENT-SCALE-001 | PHY-FLUID-CAPILLARY-RISE-001 | CANDIDATE_MATCH; Capillary tube, beaker and stand are candidate manual items. Tube bore, contact angle and clean-surface assumptions need source/specification confirmation. |
| RBSE-XI-PHY-EXP-13 — Liquid viscosity using terminal velocity of a spherical body | NCERT-PHY-KIT-018, NCERT-PHY-KIT-030, NCERT-PHY-KIT-008, NCERT-PHY-KIT-009, NCERT-PHY-KIT-029, NCERT-PHY-KIT-031 | LV-ASSET-PHY-STEEL-BALL-001, LV-ASSET-PHY-FUNNEL-001, LV-ASSET-PHY-MEASURING-CYLINDER-001, LV-ASSET-PHY-STOPWATCH-001, LV-ASSET-PHY-LIQUID-COLUMN-001, LV-ASSET-PHY-THERMOMETER-001 | PHY-FLUID-STOKES-VISCOSITY-001 | CANDIDATE_MATCH; Ball, funnel, measuring cylinder, timer and thermometer are listed. Liquid identity, density/temperature dependence, sphere radius and wall corrections remain unspecified. |
| RBSE-XI-PHY-EXP-14 — Cooling curve of a hot body | NCERT-PHY-KIT-031, NCERT-PHY-KIT-029, NCERT-PHY-KIT-034, NCERT-PHY-KIT-035, NCERT-PHY-KIT-049, NCERT-PHY-KIT-009 | LV-ASSET-PHY-THERMOMETER-001, LV-ASSET-PHY-BEAKER-001, LV-ASSET-PHY-TRIPOD-001, LV-ASSET-PHY-HEAT-SOURCE-001, LV-ASSET-PHY-HEATING-SUPPORT-001, LV-ASSET-PHY-STOPWATCH-001 | PHY-THERMAL-NEWTON-COOLING-001 | CANDIDATE_MATCH; Heating/support items are candidate source rows, but the precise hot-body sample, thermometer range and cooling geometry are not settled. |
| RBSE-XI-PHY-EXP-15 — Sonometer — frequency versus wire length at fixed tension; length versus tension at fixed frequency | NCERT-PHY-KIT-053, NCERT-PHY-KIT-028, NCERT-PHY-KIT-074, NCERT-PHY-KIT-014, NCERT-PHY-KIT-015, NCERT-PHY-KIT-045, NCERT-PHY-KIT-046, NCERT-PHY-KIT-027 | LV-ASSET-PHY-SONOMETER-001, LV-ASSET-PHY-TUNING-FORK-SET-001, LV-ASSET-PHY-U-MAGNET-001, LV-ASSET-PHY-SLOTTED-WEIGHTS-001, LV-ASSET-PHY-WOODEN-WEDGE-001 | PHY-WAVES-SONOMETER-001 | CANDIDATE_MATCH; Sonometer, tuning forks, U magnet, weights and wedge occur in the manual list. String linear density, pulley/bridge configuration and tension calibration need inspection. |
| RBSE-XI-PHY-EXP-16 — Speed of sound in air at room temperature using a resonance tube | NCERT-PHY-KIT-033, NCERT-PHY-KIT-028, NCERT-PHY-KIT-031, NCERT-PHY-KIT-009, NCERT-PHY-KIT-007 | LV-ASSET-PHY-RESONANCE-TUBE-001, LV-ASSET-PHY-TUNING-FORK-SET-001, LV-ASSET-PHY-THERMOMETER-001, LV-ASSET-PHY-STOPWATCH-001, LV-ASSET-PHY-STAND-001 | PHY-ACOUSTICS-CLOSED-PIPE-RESONANCE-001 | CANDIDATE_MATCH; The manual lists resonance tube, tuning forks and thermometer. Tube end correction and tuning-fork frequencies must be explicit before numerical output is verified. |
| RBSE-XI-PHY-EXP-17 — Specific heat capacity of a solid and a liquid by method of mixtures | NCERT-PHY-KIT-032, NCERT-PHY-KIT-031, NCERT-PHY-KIT-006, NCERT-PHY-KIT-029, NCERT-PHY-KIT-034, NCERT-PHY-KIT-035, NCERT-PHY-KIT-049, NCERT-PHY-KIT-014, NCERT-PHY-KIT-015 | LV-ASSET-PHY-CALORIMETER-001, LV-ASSET-PHY-THERMOMETER-001, LV-ASSET-PHY-BEAM-BALANCE-001, LV-ASSET-PHY-BEAKER-001, LV-ASSET-PHY-HEAT-SOURCE-001, LV-ASSET-PHY-HEATING-SUPPORT-001, LV-ASSET-PHY-SOLID-SAMPLE-001, LV-ASSET-PHY-LIQUID-SAMPLE-001 | PHY-THERMAL-MIXTURES-SPECIFIC-HEAT-001 | CANDIDATE_MATCH; Calorimeter/stirrer and thermometer occur in the manual list; sample identities, masses, calorimeter water-equivalent and heat-loss corrections require explicit data. |

## 3. Model rule and test-vector plan

### RBSE-XI-PHY-EXP-01

**Proposed model/rule:** PHY-MEASURE-VERNIER-001, PHY-GEOMETRY-DENSITY-001. Reading = main-scale + vernier coincidence × least count − zero correction; derive volume from declared geometry and density = mass/volume.

**Planned test vectors (not run):** TV-XI-PHY-EXP-01-ZERO; TV-XI-PHY-EXP-01-LC-BOUNDARY; TV-XI-PHY-EXP-01-UNIT; TV-XI-PHY-EXP-01-REPEAT.

**Safety boundary:** Low physical hazard in a virtual tool; show uncertainty and avoid presenting synthetic readings as measured.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-02

**Proposed model/rule:** PHY-MEASURE-SCREW-GAUGE-001, PHY-GEOMETRY-LAMINA-VOLUME-001. Corrected thickness = pitch-scale reading + circular-scale reading × least count − zero correction; lamina volume requires a declared area/thickness or other stated geometry method.

**Planned test vectors (not run):** TV-XI-PHY-EXP-02-ZERO; TV-XI-PHY-EXP-02-ROLL-OVER; TV-XI-PHY-EXP-02-LC-BOUNDARY; TV-XI-PHY-EXP-02-UNIT.

**Safety boundary:** Virtual instrument manipulation; do not invent sample material or dimensions.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-03

**Proposed model/rule:** PHY-MEASURE-SPHEROMETER-001, PHY-OPTICS-RADIUS-CURVATURE-001. For equilateral leg spacing l and sagitta h: R = l²/(6h) + h/2; instrument geometry and sign convention must be specified.

**Planned test vectors (not run):** TV-XI-PHY-EXP-03-ZERO; TV-XI-PHY-EXP-03-GEOMETRY; TV-XI-PHY-EXP-03-UNIT; TV-XI-PHY-EXP-03-SMALL-SAGITTA.

**Safety boundary:** Low virtual handling hazard; geometry and contact-point assumptions require review.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-04

**Proposed model/rule:** PHY-MEASURE-BALANCE-EQUILIBRIUM-001. At balance equilibrium, compare unknown mass with calibrated standard masses; model sensitivity, zero offset and resolution separately.

**Planned test vectors (not run):** TV-XI-PHY-EXP-04-ZERO; TV-XI-PHY-EXP-04-EQUILIBRIUM; TV-XI-PHY-EXP-04-MASS-RANGE; TV-XI-PHY-EXP-04-REPEAT.

**Safety boundary:** Virtual only; do not imply an actual calibration certificate.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-05

**Proposed model/rule:** PHY-MECHANICS-VECTOR-ADDITION-001. For forces P and Q separated by θ: R = sqrt(P² + Q² + 2PQ cos θ); vector components and equilibrium residual must be retained.

**Planned test vectors (not run):** TV-XI-PHY-EXP-05-ANGLE-0; TV-XI-PHY-EXP-05-ANGLE-90; TV-XI-PHY-EXP-05-EQUILIBRIUM; TV-XI-PHY-EXP-05-UNITS.

**Safety boundary:** Weights/pulleys remain virtual; no falling-load instructions.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-06

**Proposed model/rule:** PHY-OSCILLATION-SIMPLE-PENDULUM-001. For small angular amplitudes, T = 2π√(L/g); T² = (4π²/g)L. Effective length is pivot-to-centre-of-bob, not thread length alone.

**Planned test vectors (not run):** TV-XI-PHY-EXP-06-SMALL-ANGLE; TV-XI-PHY-EXP-06-LENGTH; TV-XI-PHY-EXP-06-PERIOD; TV-XI-PHY-EXP-06-FIT.

**Safety boundary:** Virtual oscillation only; expose model validity limits and measurement uncertainty.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-07

**Proposed model/rule:** PHY-MECHANICS-LIMITING-FRICTION-001. At impending motion, F_lim = μ_s N under the stated simple Coulomb-friction model; distinguish static and kinetic friction.

**Planned test vectors (not run):** TV-XI-PHY-EXP-07-ZERO-LOAD; TV-XI-PHY-EXP-07-LINEARITY; TV-XI-PHY-EXP-07-COEFFICIENT; TV-XI-PHY-EXP-07-NEGATIVE-N.

**Safety boundary:** Virtual loads only; label friction model as idealised and surface-specific.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-08

**Proposed model/rule:** PHY-MECHANICS-INCLINED-PLANE-COMPONENT-001. For a roller of mass m on an ideal plane, downslope weight component = mg sin(θ); distinguish this component from net force after friction/other forces.

**Planned test vectors (not run):** TV-XI-PHY-EXP-08-ANGLE-0; TV-XI-PHY-EXP-08-ANGLE-90; TV-XI-PHY-EXP-08-LINEAR-SIN; TV-XI-PHY-EXP-08-FRICTION.

**Safety boundary:** Virtual only; no uncontrolled rolling-object workflow.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-09

**Proposed model/rule:** PHY-MATERIAL-YOUNGS-MODULUS-001. Y = (F/A)/(ΔL/L) = FL/(AΔL); wire diameter, gauge length, elastic range and extension measurement all affect uncertainty.

**Planned test vectors (not run):** TV-XI-PHY-EXP-09-LOAD-LINEAR; TV-XI-PHY-EXP-09-AREA-DIAMETER; TV-XI-PHY-EXP-09-ELASTIC-LIMIT; TV-XI-PHY-EXP-09-UNIT.

**Safety boundary:** Virtual tensile loading only; model elastic limit and overload refusal.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-10

**Proposed model/rule:** PHY-OSCILLATION-MASS-SPRING-001. For ideal mass-spring oscillation, T = 2π√((m + m_eff)/k); T² versus attached mass is linear under a fixed effective-mass convention.

**Planned test vectors (not run):** TV-XI-PHY-EXP-10-ZERO-MASS; TV-XI-PHY-EXP-10-SLOPE; TV-XI-PHY-EXP-10-EFFECTIVE-MASS; TV-XI-PHY-EXP-10-AMPLITUDE.

**Safety boundary:** Virtual load/extension bounds; no overstretching real springs.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-11

**Proposed model/rule:** PHY-GAS-IDEAL-BOYLE-001. For a fixed amount of ideal gas at constant absolute temperature, PV = constant; P = k/V. Non-ideal effects and leakage require separate models.

**Planned test vectors (not run):** TV-XI-PHY-EXP-11-CONSTANT-T; TV-XI-PHY-EXP-11-INVERSE-V; TV-XI-PHY-EXP-11-LEAK; TV-XI-PHY-EXP-11-UNIT.

**Safety boundary:** Sealed pressure changes are simulation-only with bounded safe parameters; no real-world pressurisation steps.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-12

**Proposed model/rule:** PHY-FLUID-CAPILLARY-RISE-001. For a circular capillary: h = 2γ cos(θ)/(ρgr); infer γ = ρgrh/(2cosθ), with contact angle, tube radius and density stated.

**Planned test vectors (not run):** TV-XI-PHY-EXP-12-RADIUS; TV-XI-PHY-EXP-12-CONTACT-ANGLE; TV-XI-PHY-EXP-12-UNIT; TV-XI-PHY-EXP-12-REPEAT.

**Safety boundary:** Virtual water-only model; detergent/contaminant effects not assumed unless separately modelled.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-13

**Proposed model/rule:** PHY-FLUID-STOKES-VISCOSITY-001. In the Stokes regime for a sphere: η = 2r²(ρ_s−ρ_l)g/(9v_t); validity requires low Reynolds number and terminal speed before the timed region.

**Planned test vectors (not run):** TV-XI-PHY-EXP-13-REYNOLDS; TV-XI-PHY-EXP-13-TERMINAL; TV-XI-PHY-EXP-13-RADIUS-SQUARED; TV-XI-PHY-EXP-13-TEMP.

**Safety boundary:** Virtual liquid/ball only; no chemical liquid is prescribed by this mapping.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-14

**Proposed model/rule:** PHY-THERMAL-NEWTON-COOLING-001. Newton cooling approximation: dT/dt = −k(T−T_env) over the declared small-temperature-difference/constant-condition range; fit and residuals required.

**Planned test vectors (not run):** TV-XI-PHY-EXP-14-EQUILIBRIUM; TV-XI-PHY-EXP-14-EXPONENTIAL; TV-XI-PHY-EXP-14-ENV-TEMP; TV-XI-PHY-EXP-14-FIT.

**Safety boundary:** Heating is a virtual bounded effect only. Do not teach real flame handling; preserve wire-gauze material ambiguity.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-15

**Proposed model/rule:** PHY-WAVES-SONOMETER-001. For a stretched string, f = (1/(2L))√(T/μ); at fixed T and μ, f∝1/L; at fixed f and μ, L∝√T.

**Planned test vectors (not run):** TV-XI-PHY-EXP-15-FREQ-LENGTH; TV-XI-PHY-EXP-15-TENSION-LENGTH; TV-XI-PHY-EXP-15-STRING-DENSITY; TV-XI-PHY-EXP-15-RESONANCE.

**Safety boundary:** Virtual string tension only; bound forces and string failure visualisation.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-16

**Proposed model/rule:** PHY-ACOUSTICS-CLOSED-PIPE-RESONANCE-001. For a closed-end tube at fundamental resonance: λ≈4(L+e), v=fλ; end correction e depends on tube geometry and frequency/model.

**Planned test vectors (not run):** TV-XI-PHY-EXP-16-FUNDAMENTAL; TV-XI-PHY-EXP-16-END-CORRECTION; TV-XI-PHY-EXP-16-TEMP; TV-XI-PHY-EXP-16-HARMONICS.

**Safety boundary:** Virtual sound/water-column behaviour only; no unsupported experimental readings.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

### RBSE-XI-PHY-EXP-17

**Proposed model/rule:** PHY-THERMAL-MIXTURES-SPECIFIC-HEAT-001. Energy balance: heat lost by hot component = heat gained by cooler component + calorimeter/other declared heat capacities; include heat losses only if modelled.

**Planned test vectors (not run):** TV-XI-PHY-EXP-17-EQUILIBRIUM; TV-XI-PHY-EXP-17-ENERGY-BALANCE; TV-XI-PHY-EXP-17-CALORIMETER; TV-XI-PHY-EXP-17-LOSS.

**Safety boundary:** Heating, hot solids and liquids remain virtual and bounded; no real flame instructions.

**Source / curriculum / expert review:** NCERT item-row presence is confirmed in the current Physics manual CSV, but task-to-kit equivalence remains CANDIDATE_MATCH. RBSE task text is captured from the user-supplied PDF; final apparatus matching and scientific interpretation need qualified Physics teacher review. Manual source material is copyrighted; create original LabVerse geometry and explanations, do not copy NCERT artwork or text.

## 4. Explicit evidence and confidence rules

- RBSE task IDs and titles: SOURCE_TASK_CAPTURED from the six-pack register; source page reference is the section range 114–119. No per-task PDF page number is invented where the existing transcription does not preserve one.
- NCERT source item IDs: PRESENT_IN_PHYSICS_MANUAL_REGISTER. This confirms the named item occurs in the manual item schedule; it does not authenticate a current procurement specification or establish exact compatibility with an RBSE task.
- Candidate item mapping: CANDIDATE_MATCH until source page-level use, kit variant and expert review confirm the match.
- Asset IDs: PROPOSED_ONLY. Assets must be independently modelled; licensing and technical dimensions are not cleared.
- Model IDs and formulas: PROPOSED_MODEL_RULE. They identify the intended mathematical scope, not implemented code. Declared assumptions/validity ranges must be tested before use.
- Test IDs: PLANNED_NOT_RUN. No tests or scientific regression checks were executed.
- Expert/safety status: NEEDS_EXPERT_REVIEW. No qualified sign-off recorded.

## 5. Known unresolved technical boundaries

- The official Physics procurement specification attachment could not be retrieved in the 2026-11-08 NCERT re-check (HTTP 502). The existing uploaded MSCL/Biology specifications are not substitutes for Physics procurement evidence.
- Physics kit manual has 106 indexed rows; a separate GeM bid record reported 105 items. The tender attachment list was not inspected; no reconciliation is inferred.
- Exact quantities, ranges, material grades, tolerances and measurement accuracy are unknown for many Physics manual item rows.
- Some RBSE practicals require assemblies or samples not clearly established in the 106-row item schedule (notably Searle’s apparatus, Boyle pressure measurement and the specified unknown samples).
- Heating apparatus and all hot-body work remain virtual-only. The source register's wire-gauze label is not permission to reproduce any hazardous/unclear physical material.
- XI Physics assessment duration conflict (Hindi says 4 hours; English scheme says 3 hours) remains unresolved. Do not silently set an official timed exam duration from the 180-minute convenience preset.

## 6. Acceptance checks and result

| Check | Result |
|---|---|
| All 17 XI Physics experiment IDs present in RBSE master register | PASS |
| Every referenced NCERT Physics source item ID present in Physics CSV | PASS |
| Candidate vs verified source statuses kept distinct | PASS |
| Proposed assets explicitly unimplemented | PASS |
| Model formulas and test vectors explicitly marked proposed/planned | PASS |
| Unknown procurement details preserved, not invented | PASS |
| Expert review and scientific tests completed | NOT DONE — intentionally remains open |

Result: documentary crosswalk coverage is 17/17 tasks. Verification of kit equivalence, procurement specification, model implementation, tests, safety and expert review is still pending. This does not close Phase 1.1 or Phase 1.

## 7. Exact next work unit

Continue in source order with RBSE Class XI Physics activities A01–A07 and B01–B06 (13 rows). Reuse the same evidence vocabulary. Then complete the 11 Class XI Physics projects before moving to Class XI Chemistry. Update the roadmap, phase state and work log only after this bounded deliverable is read back and checked from GitHub.
