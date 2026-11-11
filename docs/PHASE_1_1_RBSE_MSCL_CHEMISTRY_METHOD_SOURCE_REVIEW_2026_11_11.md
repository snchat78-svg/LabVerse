# RBSE Class XII Chemistry — task-to-method source review (2026-11-11)

## Scope and source boundary

This work unit continues the Phase 1.1 task-scoped reagent reconciliation. It adds method-level source evidence for seven Class XII Chemistry content-based tasks; it does not approve an experiment, a reagent bill of materials (BOM), a physical procedure, a reaction model, or a learner safety workflow.

Primary curriculum source inspected:
- Board of Secondary Education Rajasthan, *Higher Secondary Practical Examination 2026 — instructions and syllabus*, subject Chemistry (41), official PDF: https://rajeduboard.rajasthan.gov.in/SRS_INST_PRAC.pdf
- Chemistry practical section: Chemical Kinetics, Thermochemistry and Electrochemistry (official PDF extracted lines 2173–2197; printed practical section around p.50). It lists the task families matched below.

Primary method sources inspected:
- NCERT Class XII Chemistry Laboratory Manual, Unit 2 — Chemical Kinetics: https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/chemistry/lelm102.pdf (Experiments 2.1–2.3; printed pp.8–18).
- NCERT Class XII Chemistry Laboratory Manual, Unit 3 — Thermochemical Measurement: https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/chemistry/lelm103.pdf (Experiments 3.1–3.3; printed pp.21–30).
- NCERT Class XII Chemistry Laboratory Manual, Unit 4 — Electrochemistry: https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/chemistry/lelm104.pdf (Experiment 4.1; printed pp.31–33).

The RBSE practical PDF was opened and the Chemistry section was reviewed in extracted text. NCERT units were opened, matched at experiment level and relevant pages visually inspected where the web PDF renderer provided page images. Some requested screenshots returned cache-miss errors; the extracted text remains the evidence for those pages. The 2027 Class XII syllabus link is present on the RBSE official syllabus index, but direct retrieval of https://rajeduboard.rajasthan.gov.in/anudeshika-etc/12_2027.pdf returned an oversized-content error. Therefore the reviewed RBSE practical text is **2026 exam-session evidence only**, not a verified 2027 syllabus. Refresh against the 2027 primary document before declaring current-session curriculum coverage.

## Seven task-to-method findings

| RBSE task | NCERT method | Source-supported match | Critical unresolved issue |
|---|---|---|---|
| KIN-01 | Unit 2, Experiment 2.1 | Sodium thiosulphate/HCl kinetics; sulfur-colloid visibility endpoint; concentration and temperature dependence | The NCERT manual's 1.0 M HCl is not proof of RBSE or MSCL supplied concentration; uploaded MSCL labels dilute/concentrated variants. |
| KIN-02 | Unit 2, Experiment 2.2 | Iodide/H2O2 rate study and starch colour-clock endpoint | KI, H2SO4, sodium thiosulphate and starch participate in the documented NCERT method; RBSE task title only says iodide. KI remains distinct from the numbered iodine-solution label. |
| KIN-03 | Unit 2, Experiment 2.3 | KIO3/Na2SO3 clock reaction; starch endpoint | NCERT also specifies acidic medium, 5% starch and 6% solutions; preserve the two duplicate source KIO3 rows. |
| THERMO-01 | Unit 3, Experiment 3.1 | Calorimetric enthalpy of dissolution for copper sulphate or potassium nitrate | NCERT calculation uses CuSO4·5H2O molar mass; RBSE task label does not specify hydrate state. Calorimeter constant and heat-loss correction remain unverified. |
| THERMO-02 | Unit 3, Experiment 3.2 | Strong-acid/strong-base neutralisation calorimetry | NCERT example specifies 1.0 M HCl and 1.0 M NaOH; RBSE/MSCL candidate labels do not establish those exact grades/concentrations. |
| THERMO-03 | Unit 3, Experiment 3.3 | Acetone/chloroform interaction enthalpy | NCERT material-list volumes (20 mL/10 mL) conflict with the method's 0.1 mol quantities (~8.14 mL/~7.34 mL); MSCL's combined chloroform/carbon tetrachloride label does not prove standalone chloroform supply. |
| ELECTRO-01 | Unit 4, Experiment 4.1 | Zn/Zn2+ || Cu2+/Cu cell potential as electrolyte concentration changes | NCERT initial setup says 0.2 M CuSO4 while the material list/table starts at 0.25 M; method's worked path varies Cu2+ with Zn2+ fixed. Electrode plates must not be inferred from MSCL granules/turnings. |

Detailed source identifiers, source URLs, printed pages, source-listed apparatus/chemicals, role distinctions, hazards and explicit block states are in `data/catalogues/rbse_mscl_chemistry_method_source_review_2026_11_11.csv` (7 task rows, 20 columns).

## Source-supported method knowledge versus product truth

The NCERT manual is a method reference, not an MSCL stock certificate. The concentrations and quantities in its procedures must not be copied into the current BOM or represented as verified school stock. The 124-row uploaded MSCL reagent index is unauthenticated against NCERT's currently hosted original bytes; all associated rows remain NOT_APPROVED and not current supply/BOM. This work does not authenticate the upload.

The method comparison newly confirms the identity/role distinctions:
- KIN-02: iodide ion source (KI in NCERT method) is not the same record as iodine solution; sodium thiosulphate and starch are endpoint-system participants, not interchangeable reactants.
- KIN-03: iodide appears as an intermediate in the reaction sequence; it is not automatically an input KI requirement.
- THERMO-01: copper sulphate hydration state matters to molar-enthalpy calculation.
- THERMO-03: the combined MSCL chloroform/carbon tetrachloride label is ambiguous and is not standalone chloroform evidence.
- ELECTRO-01: metal plates/electrodes are distinct from zinc granules and copper turnings; no apparatus equivalence has been approved.

## Safety, metrology, rights and validation gates

All seven tasks stay DOCUMENTARY_ONLY. No physical use, preparation, mixing, quantities-as-stock, safe procedure, supply, reaction outcome or simulated number is authorised. Identity-specific current SDS, grade/formulation, concentration, compatibility, exposure, ventilation, fire/thermal/electrical risk, waste route and qualified Chemistry/Safety review remain mandatory. KIN-02 specifically retains the NCERT manual's hydrogen-peroxide/combustible-material fire warning; THERMO-03 retains chloroform/acetone volatility and exposure concerns.

Thermochemistry requires a validated calorimeter constant, temperature calibration/resolution, heat-loss model, mass/volume traceability and uncertainty budget. Electrochemistry additionally requires electrode/voltmeter or potentiometer profile, calibration, solution activity assumptions and uncertainty. No such model or measurement contract exists yet.

NCERT manuals are marked all-rights-reserved. Public accessibility does not grant permission to reproduce procedures, wording, figures, tables or diagrams. This register records provenance and concise paraphrased evidence only; LabVerse content and 3D assets must be independently authored/licensed with attribution.

The RBSE 2027 official Class XII syllabus PDF is linked but could not be read because the endpoint rejected the large response. That current-session mismatch is an open source gap, not a reason to assume 2026 content persists unchanged.

## Phase result and next bounded action

- Added method-source mapping for 7 of the 41 RBSE Chemistry practical task/choice rows.
- 12 shared + 4 contextual task-candidate reconciliation counts remain unchanged; this method review does not convert candidates to BOM inputs.
- All 41 Chemistry task rows remain documentary-only; all 126 MSCL safety-screen records remain blocked and unapproved.
- Phase 1 / 1.1 remains IN PROGRESS. Phase 2 scientific contracts/results remain BLOCKED. Phase 5 3D and Phase 6 runtime remain NOT STARTED.

**Next:** acquire/read the official RBSE 2027 Chemistry practical syllabus and extend this same task-to-method evidence review to the 24 tasks with no reagent candidate link, without declaring them reagent-free. Keep the 53-item MSCL technical/safety review queue and all Biology source-retrieval gaps open; do not repeat already completed MSCL visual pages.
