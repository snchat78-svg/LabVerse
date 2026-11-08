# RBSE 2026–2027 Class XII Physics — Experiment Traceability Register

Audit date: 2026-11-08  
Phase: 1 / subphase 1.1  
Status: DESIGN_ONLY / CANDIDATE_SOURCE_CROSSWALK — not verified for learner use.  
RBSE source range: user-supplied Class XII 2026–2027 PDF, PDF pages 124–129. Task IDs/titles follow the master register; no per-task page numbers are inferred.

## 1. Coverage and source boundary

- Experiments mapped: 18/18.
- Candidate NCERT Physics manual item IDs referenced: 42 distinct IDs.
- All source IDs exist in data/catalogues/ncert_physics_kit_manual_items.csv.
- The Physics CSV is based on the NCERT-hosted manual's 106-row item schedule, not the separate procurement specification attachment. Quantities, tolerances, material grades and acceptance criteria remain incomplete.
- The official Physics procurement specification URL returned HTTP 502 in the 2026-11-08 re-check; no attachment bytes or hash were obtained.
- Proposed assets/models/test vectors are names and plans only; no runtime asset or scientific solver is implemented.

## 2. Experiment-to-source candidate crosswalk

| RBSE task | Candidate Physics manual item IDs | Proposed original assets | Proposed model/rule | Evidence gap |
|---|---|---|---|---|
| RBSE-XII-PHY-EXP-01 — Resistance per unit length of a wire from V–I graph | NCERT-PHY-KIT-026, NCERT-PHY-KIT-057, NCERT-PHY-KIT-061, NCERT-PHY-KIT-080, NCERT-PHY-KIT-091, NCERT-PHY-KIT-092, NCERT-PHY-KIT-093, NCERT-PHY-KIT-095, NCERT-PHY-KIT-100 | LV-ASSET-PHY-WIRE-SET-001, LV-ASSET-PHY-VARIABLE-SUPPLY-001, LV-ASSET-PHY-AMMETER-001, LV-ASSET-PHY-VOLTMETER-001, LV-ASSET-PHY-RHEOSTAT-001, LV-ASSET-PHY-VI-GRAPH-001 | PHY-PHY-RESISTANCE-PER-LENGTH | Exact wire gauge/length and calibrated separate meter ranges are unknown. |
| RBSE-XII-PHY-EXP-02 — Wire resistance by metre bridge and material resistivity | NCERT-PHY-KIT-026, NCERT-PHY-KIT-061, NCERT-PHY-KIT-072, NCERT-PHY-KIT-075, NCERT-PHY-KIT-077, NCERT-PHY-KIT-085, NCERT-PHY-KIT-091, NCERT-PHY-KIT-092, NCERT-PHY-KIT-106 | LV-ASSET-PHY-METRE-BRIDGE-001, LV-ASSET-PHY-JOCKEY-001, LV-ASSET-PHY-GALVANOMETER-001, LV-ASSET-PHY-RESISTANCE-BOX-001, LV-ASSET-PHY-WIRE-SAMPLE-001 | PHY-PHY-METRE-BRIDGE-RESISTIVITY | Wire gauge, bridge-wire uniformity and end/contact corrections remain open. |
| RBSE-XII-PHY-EXP-03 — Series/parallel resistance combination laws by metre bridge | NCERT-PHY-KIT-057, NCERT-PHY-KIT-061, NCERT-PHY-KIT-072, NCERT-PHY-KIT-075, NCERT-PHY-KIT-077, NCERT-PHY-KIT-085, NCERT-PHY-KIT-091, NCERT-PHY-KIT-092, NCERT-PHY-KIT-095, NCERT-PHY-KIT-106 | LV-ASSET-PHY-METRE-BRIDGE-001, LV-ASSET-PHY-RESISTOR-SET-001, LV-ASSET-PHY-GALVANOMETER-001, LV-ASSET-PHY-JOCKEY-001, LV-ASSET-PHY-RESISTANCE-BOX-001 | PHY-PHY-RESISTOR-COMBINATION | Resistor set has stated nominal values but not a complete configurable range or tolerance. |
| RBSE-XII-PHY-EXP-04 — Compare EMF of Daniell and Leclanche primary cells using potentiometer | NCERT-PHY-KIT-061, NCERT-PHY-KIT-064, NCERT-PHY-KIT-072, NCERT-PHY-KIT-075, NCERT-PHY-KIT-077, NCERT-PHY-KIT-085, NCERT-PHY-KIT-088, NCERT-PHY-KIT-091 | LV-ASSET-PHY-POTENTIOMETER-001, LV-ASSET-PHY-DANIELL-CELL-001, LV-ASSET-PHY-LECLANCHE-CELL-001, LV-ASSET-PHY-GALVANOMETER-001, LV-ASSET-PHY-JOCKEY-001, LV-ASSET-PHY-KEYS-001 | PHY-PHY-POTENTIOMETER-EMF-COMPARISON | Cell construction/electrolyte data and potentiometer procurement tolerances are unverified. |
| RBSE-XII-PHY-EXP-05 — Internal resistance of a primary cell using potentiometer | NCERT-PHY-KIT-061, NCERT-PHY-KIT-064, NCERT-PHY-KIT-072, NCERT-PHY-KIT-075, NCERT-PHY-KIT-077, NCERT-PHY-KIT-085, NCERT-PHY-KIT-088, NCERT-PHY-KIT-091, NCERT-PHY-KIT-092 | LV-ASSET-PHY-POTENTIOMETER-001, LV-ASSET-PHY-PRIMARY-CELL-001, LV-ASSET-PHY-RESISTANCE-BOX-001, LV-ASSET-PHY-GALVANOMETER-001, LV-ASSET-PHY-JOCKEY-001 | PHY-PHY-POTENTIOMETER-INTERNAL-RESISTANCE | Cell parameters and standard resistance values remain unknown. |
| RBSE-XII-PHY-EXP-06 — Galvanometer resistance by half-deflection and figure of merit | NCERT-PHY-KIT-061, NCERT-PHY-KIT-072, NCERT-PHY-KIT-077, NCERT-PHY-KIT-085, NCERT-PHY-KIT-091, NCERT-PHY-KIT-092, NCERT-PHY-KIT-093 | LV-ASSET-PHY-GALVANOMETER-001, LV-ASSET-PHY-RESISTANCE-BOX-001, LV-ASSET-PHY-RHEOSTAT-001, LV-ASSET-PHY-POWER-SOURCE-001, LV-ASSET-PHY-KEYS-001 | PHY-PHY-GALVANOMETER-HALF-DEFLECTION | Galvanometer coil resistance/sensitivity and scale calibration are not specified. |
| RBSE-XII-PHY-EXP-07 — Convert a known galvanometer into an ammeter or voltmeter of desired range and verify | NCERT-PHY-KIT-057, NCERT-PHY-KIT-061, NCERT-PHY-KIT-072, NCERT-PHY-KIT-080, NCERT-PHY-KIT-091, NCERT-PHY-KIT-092, NCERT-PHY-KIT-095, NCERT-PHY-KIT-100 | LV-ASSET-PHY-GALVANOMETER-001, LV-ASSET-PHY-SHUNT-001, LV-ASSET-PHY-SERIES-MULTIPLIER-001, LV-ASSET-PHY-MULTIMETER-001, LV-ASSET-PHY-VARIABLE-SUPPLY-001 | PHY-PHY-GALVANOMETER-METER-CONVERSION | Dedicated shunt/multiplier set, galvanometer full-scale current/resistance and ranges are not established. |
| RBSE-XII-PHY-EXP-08 — AC frequency using sonometer and electromagnet | NCERT-PHY-KIT-026, NCERT-PHY-KIT-027, NCERT-PHY-KIT-028, NCERT-PHY-KIT-053, NCERT-PHY-KIT-074 | LV-ASSET-PHY-SONOMETER-001, LV-ASSET-PHY-U-MAGNET-001, LV-ASSET-PHY-SONOMETER-WIRE-001, LV-ASSET-PHY-TENSION-LOADS-001, LV-ASSET-PHY-AC-ELECTROMAGNET-001 | PHY-PHY-SONOMETER-AC-FREQUENCY | AC electromagnet/supply and its parameters are not explicit manual items. |
| RBSE-XII-PHY-EXP-09 — Concave mirror: find v for different u and focal length | NCERT-PHY-KIT-056, NCERT-PHY-KIT-060, NCERT-PHY-KIT-071, NCERT-PHY-KIT-081, NCERT-PHY-KIT-082, NCERT-PHY-KIT-083 | LV-ASSET-PHY-CONCAVE-MIRROR-001, LV-ASSET-PHY-OPTICAL-BENCH-001, LV-ASSET-PHY-OBJECT-001, LV-ASSET-PHY-SCREEN-001, LV-ASSET-PHY-SCALE-001 | PHY-PHY-CONCAVE-MIRROR-IMAGE | Mirror focal length and alignment/screen tolerances are unknown. |
| RBSE-XII-PHY-EXP-10 — Convex-lens focal length using u–v or reciprocal graph | NCERT-PHY-KIT-056, NCERT-PHY-KIT-062, NCERT-PHY-KIT-071, NCERT-PHY-KIT-081, NCERT-PHY-KIT-082, NCERT-PHY-KIT-083 | LV-ASSET-PHY-CONVEX-LENS-001, LV-ASSET-PHY-OPTICAL-BENCH-001, LV-ASSET-PHY-OBJECT-001, LV-ASSET-PHY-SCREEN-001, LV-ASSET-PHY-SCALE-001 | PHY-PHY-CONVEX-LENS-IMAGE | Lens focal length/diameter/holder geometry are not procurement verified. |
| RBSE-XII-PHY-EXP-11 — Convex-mirror focal length using convex lens | NCERT-PHY-KIT-056, NCERT-PHY-KIT-062, NCERT-PHY-KIT-063, NCERT-PHY-KIT-071, NCERT-PHY-KIT-081, NCERT-PHY-KIT-082, NCERT-PHY-KIT-083 | LV-ASSET-PHY-CONVEX-MIRROR-001, LV-ASSET-PHY-CONVEX-LENS-001, LV-ASSET-PHY-OPTICAL-BENCH-001, LV-ASSET-PHY-OBJECT-001, LV-ASSET-PHY-SCALE-001 | PHY-PHY-CONVEX-MIRROR-FOCAL-LENGTH | Two-stage alignment method requires detailed protocol confirmation. |
| RBSE-XII-PHY-EXP-12 — Concave-lens focal length using convex lens | NCERT-PHY-KIT-056, NCERT-PHY-KIT-059, NCERT-PHY-KIT-062, NCERT-PHY-KIT-071, NCERT-PHY-KIT-081, NCERT-PHY-KIT-082, NCERT-PHY-KIT-083 | LV-ASSET-PHY-CONCAVE-LENS-001, LV-ASSET-PHY-CONVEX-LENS-001, LV-ASSET-PHY-OPTICAL-BENCH-001, LV-ASSET-PHY-OBJECT-001, LV-ASSET-PHY-SCREEN-001 | PHY-PHY-CONCAVE-LENS-COMPOUND-METHOD | Lens holders, separation and virtual-object distance are not procurement verified. |
| RBSE-XII-PHY-EXP-13 — Prism refractive index using minimum-deviation angle and incidence/deviation graph | NCERT-PHY-KIT-065, NCERT-PHY-KIT-083, NCERT-PHY-KIT-089, NCERT-PHY-KIT-090 | LV-ASSET-PHY-CROWN-GLASS-PRISM-001, LV-ASSET-PHY-DRAWING-BOARD-001, LV-ASSET-PHY-PROTRACTOR-001, LV-ASSET-PHY-PINS-001 | PHY-PHY-PRISM-MINIMUM-DEVIATION | Light source/collimator and protractor resolution/uncertainty need confirmation. |
| RBSE-XII-PHY-EXP-14 — Glass-slab refractive index using travelling microscope | NCERT-PHY-KIT-065, NCERT-PHY-KIT-071, NCERT-PHY-KIT-073 | LV-ASSET-PHY-GLASS-SLAB-001, LV-ASSET-PHY-TRAVELLING-MICROSCOPE-001, LV-ASSET-PHY-OPTICAL-REFERENCE-001 | PHY-PHY-GLASS-SLAB-REFRACTIVE-INDEX | NO_SOURCE_ITEM_MATCH: travelling microscope is not in the current 106-row Physics manual register. |
| RBSE-XII-PHY-EXP-15 — Refractive index of water using concave mirror or convex lens and plane mirror | NCERT-PHY-KIT-008, NCERT-PHY-KIT-029, NCERT-PHY-KIT-060, NCERT-PHY-KIT-062, NCERT-PHY-KIT-071, NCERT-PHY-KIT-081, NCERT-PHY-KIT-084 | LV-ASSET-PHY-CONCAVE-MIRROR-001, LV-ASSET-PHY-CONVEX-LENS-001, LV-ASSET-PHY-PLANE-MIRROR-001, LV-ASSET-PHY-OPTICAL-BENCH-001, LV-ASSET-PHY-LIQUID-CONTAINER-001 | PHY-PHY-WATER-REFRACTIVE-INDEX-MIRROR-LENS | Exact method, vessel geometry, water depth and measurement reference need manual confirmation. |
| RBSE-XII-PHY-EXP-16 — p–n junction forward/reverse I–V curves | NCERT-PHY-KIT-061, NCERT-PHY-KIT-067, NCERT-PHY-KIT-080, NCERT-PHY-KIT-091, NCERT-PHY-KIT-095, NCERT-PHY-KIT-100, NCERT-PHY-KIT-102, NCERT-PHY-KIT-103, NCERT-PHY-KIT-104 | LV-ASSET-PHY-PN-DIODE-001, LV-ASSET-PHY-VARIABLE-SUPPLY-001, LV-ASSET-PHY-SERIES-RESISTOR-001, LV-ASSET-PHY-MULTIMETER-001, LV-ASSET-PHY-BREADBOARD-001, LV-ASSET-PHY-WIRES-001 | PHY-PHY-PN-DIODE-IV | Diode part number, current limit resistor and meter ranges/accuracy are unknown. |
| RBSE-XII-PHY-EXP-17 — Zener diode characteristic and reverse breakdown voltage | NCERT-PHY-KIT-061, NCERT-PHY-KIT-080, NCERT-PHY-KIT-091, NCERT-PHY-KIT-095, NCERT-PHY-KIT-100, NCERT-PHY-KIT-101, NCERT-PHY-KIT-102, NCERT-PHY-KIT-103, NCERT-PHY-KIT-104 | LV-ASSET-PHY-ZENER-DIODE-001, LV-ASSET-PHY-VARIABLE-SUPPLY-001, LV-ASSET-PHY-CURRENT-LIMITER-001, LV-ASSET-PHY-MULTIMETER-001, LV-ASSET-PHY-BREADBOARD-001, LV-ASSET-PHY-WIRES-001 | PHY-PHY-ZENER-CHARACTERISTIC | Part number, Vz, dynamic resistance and safe power/current are not specified. |
| RBSE-XII-PHY-EXP-18 — Common-emitter n-p-n or p-n-p transistor characteristics and current/voltage gains | NCERT-PHY-KIT-061, NCERT-PHY-KIT-070, NCERT-PHY-KIT-080, NCERT-PHY-KIT-091, NCERT-PHY-KIT-095, NCERT-PHY-KIT-100, NCERT-PHY-KIT-102, NCERT-PHY-KIT-103, NCERT-PHY-KIT-104 | LV-ASSET-PHY-TRANSISTOR-001, LV-ASSET-PHY-VARIABLE-SUPPLY-001, LV-ASSET-PHY-RESISTORS-001, LV-ASSET-PHY-MULTIMETER-001, LV-ASSET-PHY-BREADBOARD-001, LV-ASSET-PHY-WIRES-001 | PHY-PHY-BJT-COMMON-EMITTER | NPN/PNP part type/pinout/parameters, resistor values and safe ranges are unspecified. |

## 3. Proposed formulas and planned test vectors

### RBSE-XII-PHY-EXP-01 — Resistance per unit length of a wire from V–I graph

**Proposed model:** PHY-PHY-RESISTANCE-PER-LENGTH. R=V/I; resistance per unit length R/L under stable temperature and declared wire geometry.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP01-OHMIC-LINEARITY; TV-XII-PHY-EXP01-LENGTH-NORMALISATION; TV-XII-PHY-EXP01-CONTACT-RESISTANCE; TV-XII-PHY-EXP01-TEMP-DRIFT.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-02 — Wire resistance by metre bridge and material resistivity

**Proposed model:** PHY-PHY-METRE-BRIDGE-RESISTIVITY. At null balance X/R=l/(100−l), subject to gap orientation; ρ=RA/L needs measured A and L.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP02-BALANCE-POINT; TV-XII-PHY-EXP02-GAP-REVERSAL; TV-XII-PHY-EXP02-RESISTIVITY-AREA; TV-XII-PHY-EXP02-END-CORRECTION.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-03 — Series/parallel resistance combination laws by metre bridge

**Proposed model:** PHY-PHY-RESISTOR-COMBINATION. Rseries=ΣRi; 1/Rparallel=Σ(1/Ri); include lead/contact resistance where modelled.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP03-SERIES-RESULT; TV-XII-PHY-EXP03-PARALLEL-RESULT; TV-XII-PHY-EXP03-REVERSED-GAPS; TV-XII-PHY-EXP03-NONIDEAL-LEADS.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-04 — Compare EMF of Daniell and Leclanche primary cells using potentiometer

**Proposed model:** PHY-PHY-POTENTIOMETER-EMF-COMPARISON. For same potentiometer current E1/E2=l1/l2 at null balance; stable current and polarity required.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP04-LENGTH-RATIO; TV-XII-PHY-EXP04-CURRENT-STABILITY; TV-XII-PHY-EXP04-POLARITY; TV-XII-PHY-EXP04-NULL-POINT.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-05 — Internal resistance of a primary cell using potentiometer

**Proposed model:** PHY-PHY-POTENTIOMETER-INTERNAL-RESISTANCE. With open and loaded balance lengths l1,l2 and external R, r=R(l1/l2−1), under declared circuit convention.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP05-OPEN-CIRCUIT; TV-XII-PHY-EXP05-LOAD-RESISTANCE; TV-XII-PHY-EXP05-BALANCE-RATIO; TV-XII-PHY-EXP05-POLARITY.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-06 — Galvanometer resistance by half-deflection and figure of merit

**Proposed model:** PHY-PHY-GALVANOMETER-HALF-DEFLECTION. Half-deflection method G=RS/(R−S) under standard assumptions; figure of merit k=I/θ requires calibrated current/deflection.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP06-HALF-DEFLECTION; TV-XII-PHY-EXP06-RESISTANCE-BOUND; TV-XII-PHY-EXP06-FIGURE-MERIT; TV-XII-PHY-EXP06-SCALE-UNIT.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-07 — Convert a known galvanometer into an ammeter or voltmeter of desired range and verify

**Proposed model:** PHY-PHY-GALVANOMETER-METER-CONVERSION. Ammeter shunt S=IgG/(I−Ig); voltmeter series multiplier Rs=V/Ig−G. Need G, Ig and target range.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP07-AMMETER-SHUNT; TV-XII-PHY-EXP07-VOLTMETER-MULTIPLIER; TV-XII-PHY-EXP07-RANGE; TV-XII-PHY-EXP07-LOADING.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-08 — AC frequency using sonometer and electromagnet

**Proposed model:** PHY-PHY-SONOMETER-AC-FREQUENCY. String relation f=(1/(2L))√(T/μ); electromagnet excitation convention must be explicitly modelled; do not assume frequency relation without checking apparatus.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP08-STRING-DENSITY; TV-XII-PHY-EXP08-TENSION; TV-XII-PHY-EXP08-LENGTH; TV-XII-PHY-EXP08-EXCITATION-CONVENTION.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-09 — Concave mirror: find v for different u and focal length

**Proposed model:** PHY-PHY-CONCAVE-MIRROR-IMAGE. Under declared Cartesian convention 1/f=1/v+1/u; magnification m=−v/u; distinguish real and virtual images.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP09-REAL-IMAGE; TV-XII-PHY-EXP09-FOCAL-LIMIT; TV-XII-PHY-EXP09-SIGN-CONVENTION; TV-XII-PHY-EXP09-GRAPH.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-10 — Convex-lens focal length using u–v or reciprocal graph

**Proposed model:** PHY-PHY-CONVEX-LENS-IMAGE. Thin-lens relation 1/f=1/v−1/u using one consistent Cartesian sign convention; graph form depends on measured distance convention.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP10-REAL-IMAGE; TV-XII-PHY-EXP10-FOCAL-REGION; TV-XII-PHY-EXP10-RECIPROCAL-GRAPH; TV-XII-PHY-EXP10-SIGN.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-11 — Convex-mirror focal length using convex lens

**Proposed model:** PHY-PHY-CONVEX-MIRROR-FOCAL-LENGTH. Convex lens forms real image acting as virtual object for convex mirror; signed distances must be derived for the stated setup.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP11-REFERENCE-IMAGE; TV-XII-PHY-EXP11-VIRTUAL-OBJECT; TV-XII-PHY-EXP11-SIGN; TV-XII-PHY-EXP11-ALIGNMENT.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-12 — Concave-lens focal length using convex lens

**Proposed model:** PHY-PHY-CONCAVE-LENS-COMPOUND-METHOD. Convex lens provides a real image; concave lens shifts final image. Use signed distances and virtual-object convention.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP12-REFERENCE-IMAGE; TV-XII-PHY-EXP12-IMAGE-SHIFT; TV-XII-PHY-EXP12-SIGN; TV-XII-PHY-EXP12-FOCAL-BOUNDS.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-13 — Prism refractive index using minimum-deviation angle and incidence/deviation graph

**Proposed model:** PHY-PHY-PRISM-MINIMUM-DEVIATION. For prism angle A and minimum deviation δmin, n=sin((A+δmin)/2)/sin(A/2); angular uncertainty must be retained.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP13-MINIMUM-DEVIATION; TV-XII-PHY-EXP13-PRISM-ANGLE; TV-XII-PHY-EXP13-ANGLE-RESOLUTION; TV-XII-PHY-EXP13-SNELL.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-14 — Glass-slab refractive index using travelling microscope

**Proposed model:** PHY-PHY-GLASS-SLAB-REFRACTIVE-INDEX. For apparent-depth method n=real depth/apparent depth under stated normal-viewing/reference assumptions.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP14-REAL-DEPTH; TV-XII-PHY-EXP14-APPARENT-DEPTH; TV-XII-PHY-EXP14-CALIBRATION; TV-XII-PHY-EXP14-REPEAT.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-15 — Refractive index of water using concave mirror or convex lens and plane mirror

**Proposed model:** PHY-PHY-WATER-REFRACTIVE-INDEX-MIRROR-LENS. Use geometry-specific mirror/lens comparison with and without liquid; the exact relation depends on chosen validated setup.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP15-EMPTY-CONTAINER; TV-XII-PHY-EXP15-WATER-FILL; TV-XII-PHY-EXP15-REFERENCE-PLANE; TV-XII-PHY-EXP15-GEOMETRY.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-16 — p–n junction forward/reverse I–V curves

**Proposed model:** PHY-PHY-PN-DIODE-IV. Shockley equation may describe valid forward region; reverse leakage and breakdown are separate bounded models with device parameters.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP16-FORWARD; TV-XII-PHY-EXP16-REVERSE; TV-XII-PHY-EXP16-SERIES-LIMIT; TV-XII-PHY-EXP16-TEMPERATURE.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-17 — Zener diode characteristic and reverse breakdown voltage

**Proposed model:** PHY-PHY-ZENER-CHARACTERISTIC. Zener reverse breakdown is part-specific around rated Vz; enforce current/power limit and do not extrapolate ideal breakdown.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP17-BREAKDOWN-KNEE; TV-XII-PHY-EXP17-IZ-LIMIT; TV-XII-PHY-EXP17-POWER; TV-XII-PHY-EXP17-PART-NUMBER.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

### RBSE-XII-PHY-EXP-18 — Common-emitter n-p-n or p-n-p transistor characteristics and current/voltage gains

**Proposed model:** PHY-PHY-BJT-COMMON-EMITTER. Measure input/output characteristics with proper fixed-variable constraints; β=ΔIc/ΔIb only in the active region; distinguish cutoff/active/saturation.

**Planned test vectors (NOT RUN):** TV-XII-PHY-EXP18-INPUT-CHARACTERISTIC; TV-XII-PHY-EXP18-OUTPUT-CHARACTERISTIC; TV-XII-PHY-EXP18-BETA; TV-XII-PHY-EXP18-CUTOFF-SATURATION.

**Safety:** Low-voltage electrical tasks are virtual/current-bounded; optical tasks are virtual; no mains connections. Heater, cell and semiconductor values must be model-bounded.

**Review:** Candidate source item presence is confirmed in the manual register, but exact RBSE task equivalence, instrument calibration, material/range values and procurement specifications need qualified Physics review. All assets must be original LabVerse geometry/text; licensing review remains open.

## 4. Explicit missing-source item

**RBSE-XII-PHY-EXP-14 — travelling microscope:** the RBSE task requires a travelling microscope, but no such item occurs in the available 106-row NCERT Physics manual item schedule. The glass slab item is present. No NCERT item ID is invented for the missing instrument. Add it only when a separate authoritative source/specification is recovered.

Other important gaps include a dedicated AC electromagnet/AC supply for EXP-08, galvanometer shunt/multiplier values for EXP-07, exact semiconductor part numbers/ratings for EXP-16–18, and optical instrument calibration/range values.

## 5. Acceptance checks

- All 18 RBSE XII Physics EXP IDs occur in the master register.
- Every referenced NCERT Physics source item ID exists in the 106-row catalogue.
- EXP-14 travelling microscope absence is explicitly recorded.
- Candidate source status is not promoted to procurement-verified.
- Model/rule proposals and test vectors are not described as implemented or run.
- Application/software/scientific tests: NOT RUN.
- Expert review, safety and source-rights review: NOT DONE.

## 6. Next work unit

After read-back verification, map RBSE Class XII Physics activities A01–A06 and B01–B08 (14 rows), followed by its seven project rows. Then consolidate 18 experiments + 14 activities + 7 projects/choices into a 39-task pack register.
