# Phase 1.1 — RBSE-to-NCERT-to-asset traceability pilot

Audit date: 2026-11-08  
Status: DESIGN_ONLY / PARTIAL PILOT; not a production catalogue.  
Phase gate: Phase 1.1 IN PROGRESS; Phase 1 IN PROGRESS; Phase 2 BLOCKED.

## 1. Purpose and boundary

Create a small cross-subject traceability slice using the RBSE 2026–2027 six-pack task index and the NCERT source-row catalogues already present in the repository. This demonstrates the required linking contract without pretending that every practical is mapped or that the current NCERT uploaded specifications have been byte-authenticated.

RBSE task source: user-supplied 2026–2027 Class XI PDF, pages 114–119 (Physics), 123–126 (Chemistry), 132–134 (Biology), as indexed in docs/PHASE_1_RBSE_ALL_PRACTICAL_COVERAGE_REGISTER.md. The RBSE PDF copy's provenance is not independently cryptographically authenticated.

NCERT source evidence:
- Physics: NCERT kit manual item schedule, with item rows recorded in data/catalogues/ncert_physics_kit_manual_items.csv.
- Chemistry: uploaded MSCL specification copy, OCR-derived rows in data/catalogues/ncert_mscl_spec_items.csv; exact-byte identity to the official NCERT attachment is NOT VERIFIED.
- Biology: uploaded Biology-with-microscope specification copy, rows in data/catalogues/ncert_biology_with_microscope_spec_items.csv; the detailed register is partial and exact-byte identity to the official NCERT attachment is NOT VERIFIED.

## 2. Pilot mapping table

| RBSE task | Candidate NCERT source item(s) | Proposed original LabVerse asset ID(s) | Student action / evidence | Model and test status |
|---|---|---|---|---|
| RBSE-XI-PHY-EXP-01 — Vernier calipers for sphere/cylinder dimensions and regular-solid density | NCERT-PHY-KIT-003 Vernier caliper; optional NCERT-PHY-KIT-006 Beam balance only where mass must be measured rather than supplied as known | LV-ASSET-PHY-VERNIER-CALIPER-001; LV-ASSET-PHY-BEAM-BALANCE-001 | Zero-check the instrument; measure external/internal dimensions or depth; record repeated readings and units; calculate geometric volume and density only when mass is available. | Reading/zero-correction and geometry/density rule IDs remain MODEL_RULE_PENDING. Test vectors for zero error, least-count boundary, repeatability and unit conversion are PLANNED_NOT_RUN. |
| RBSE-XI-CHEM-PRA-10 — Determine pH of fruit juices | NCERT-MSCL-SPEC-046 Universal pH Indicator Paper (source states pH 1–14); NCERT-MSCL-SPEC-009 Pasteur Pipette (3 mL, graduation least count 0.5 mL); NCERT-MSCL-SPEC-003 Beaker (10 mL and 50 mL variants) | LV-ASSET-CHEM-PH-PAPER-001; LV-ASSET-CHEM-PASTEUR-PIPETTE-001; LV-ASSET-CHEM-BEAKER-001 | Select and label a sample; transfer a controlled drop/aliquot; compare the developed indicator response against a separately verified colour reference; record sample identity and observation. | Do not assign a fixed pH to a fruit name. Sample pH, indicator colour chart, lighting and comparison uncertainty need trusted calibration evidence. Chemistry result model and test vectors remain MODEL_RULE_PENDING / PLANNED_NOT_RUN. |
| RBSE-XI-BIO-SP-01 — Identify compound microscope parts | NCERT-BIO-WM-SPEC-176 Student Laboratory Microscope (uploaded specification row 176; source text/photo show a microscope despite the index heading inconsistency). Candidate attributes include 10X/45X objectives, 10X/15X eyepieces, slide clip, coarse/fine motion and condenser. | LV-ASSET-BIO-COMPOUND-MICROSCOPE-001 | Tap/inspect original 3D components; identify part names and functions; distinguish objective, eyepiece, stage/clip, focus controls, condenser and mirror/light path only after subject review. | Optical path, component naming and magnification interpretation require Biology/Physics expert review. Model and question test vectors remain MODEL_RULE_PENDING / PLANNED_NOT_RUN. |

## 3. Source-to-asset evidence boundaries

### Physics

The Physics CSV lists item 3 as “Vernier caliper” and item 6 as “Beam balance”. The manual schedule is evidence that these tool names occur in the kit manual. It does not provide a complete procurement specification for every attribute, quantity, tolerance, measurement range or acceptance rule. Those fields remain pending until the procurement attachment or another primary source is inspected.

### Chemistry

The uploaded MSCL CSV identifies item 46 as Universal pH Indicator Paper, item 9 as Pasteur Pipette and item 3 as Beaker. These are OCR-derived from a user-uploaded scanned specification copy. The pH paper source row states pH 1–14; this does not provide a verified colour chart or establish the pH of any particular fruit-juice sample. Do not synthesize reaction colours or pH results from sample names alone.

### Biology

The uploaded Biology-with-microscope CSV identifies row 176 as Student Laboratory Microscope. Its title/heading inconsistency is retained. This is a candidate source match for the RBSE compound-microscope spotting task, not an expert-approved equivalence statement. The proposed asset must be an original LabVerse model; source photographs/artwork are not to be copied.

## 4. Proposed asset naming contract

The LV-ASSET-* identifiers above are reserved proposals for catalogue continuity only. They are NOT implemented files, 3D models, GLB assets or runtime objects. Do not create a learner-visible asset catalogue until its source row, geometry, units, materials, interaction affordances, safety state and review status are all attached.

## 5. Required traceability record for every future row

Each complete row must carry:

1. RBSE board/session/class/subject source and exact page/section/task/choice ID.
2. NCERT/manual/specification source ID, version and exact item row/page; source status (PRIMARY_OFFICIAL, USER_UPLOADED_UNAUTHENTICATED, SECONDARY, INDEX_ONLY).
3. Catalogue item ID with stated material, dimensions, range, quantity and explicit UNKNOWN fields.
4. Original LabVerse asset ID, geometry/material/scale, origin/licence and interaction contract.
5. Scientific model/rule ID, equations, assumptions, operating bounds, units, uncertainty and unsupported-state behaviour.
6. Test-vector IDs for positive, negative, boundary, unit, uncertainty and repeatability behaviour.
7. Safety review, subject expert, decision, date and approval evidence.

## 6. Pilot acceptance checks

| Check | Result |
|---|---|
| Three RBSE task IDs exist in the all-six-pack task register | PASS — documentary reference check |
| Physics source item IDs exist in the Physics CSV | PASS — repository source-row check |
| Chemistry source item IDs exist in the MSCL CSV | PASS — repository source-row check |
| Biology microscope source item exists in the Biology CSV | PASS — repository source-row check |
| Uploaded-copy source boundaries are explicit | PASS — documentary check |
| Proposed asset IDs are explicitly marked unimplemented | PASS — documentary check |
| Model validation and test execution are not falsely claimed | PASS — documentary check |

These are repository/document consistency checks, not application or scientific-engine tests. No source item is marked fully VERIFIED_FOR_USE. No 3D asset or simulation code was built in this pilot.

## 7. Remaining work and next step

- Extend mappings from these three examples to every practical, activity, project, spotting group and OR branch across all six RBSE packs.
- Retrieve/authenticate the NCERT procurement specification attachments and resolve Physics 105/106 item discrepancy.
- Inspect remaining Biology card/specimen/slide pages individually.
- Complete model rules, test vectors, licensing and safety records.
- Obtain qualified subject-teacher/domain-expert review.

Phase 1.1 and Phase 1 remain IN PROGRESS. Phase 2 remains BLOCKED.
