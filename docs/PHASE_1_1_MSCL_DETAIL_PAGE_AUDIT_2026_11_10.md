# MSCL specification detail-page visual audit — 2026-11-10

## Scope and source identity

<badge>Complete for this uploaded copy: 53/53 physical index items visually checked</badge>

This page-level visual audit covers all physical item-detail entries in the previously registered `MSCL_copy.pdf` upload.

- Source filename: `MSCL_copy.pdf`, 65 pages.
- Registered SHA-256: `db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d`.
- Authentication boundary: `USER_UPLOADED_UNAUTHENTICATED`. This hash identifies the uploaded bytes; it does not prove exact-byte identity with an NCERT-hosted original.
- A later MSCL upload variant has a different SHA-256 and remains a separate receipt. The findings here are attached only to the registered earlier byte variant.
- Item-level records: `data/catalogues/mscl_detail_audit_2026_11_10.csv` (53 item rows, 15 columns).
- Source catalogue: `data/catalogues/ncert_mscl_spec_items.csv` (55 index rows plus header); all 53 physical rows (index 2–54) are marked `OCR_TEXT + VISUAL_CHECK`.

## Coverage

- **53/53 physical item rows visually checked:** index items 2–54, in continuous source order.
- **Excluded from physical-item denominator:** index 1 Kit Manual (documentation/publication) and index 55 Document Development Team (credit page).
- **Detail page range:** PDF pages 5–64, including separate drawing pages where present.
- No item was inferred from the index alone in this visual-audit denominator; each physical item row has a page-level visual record.

## What the audit establishes—and what it does not

For every item, the audit records source material, written dimensions, stated quantity, what is visible in its photograph/drawing, unresolved specifications, and a safety/usage boundary. It establishes only what is depicted or written in this exact uploaded copy.

It does **not** establish:
- that the PDF bytes are identical to an official NCERT-hosted attachment;
- that a school or supplier actually owns or delivered the source-stated quantities;
- manufacturer, current availability, grade, dimensional tolerance or compliance;
- instrument calibration, measurement accuracy, uncertainty or fitness for a physical experiment;
- chemical compatibility, reaction validity, SDS completeness, waste rules or permission for real-world use;
- permission to reproduce NCERT photographs/drawings in LabVerse.

## Important technical discrepancies and unresolved points

| Item | Source observation | Treatment |
|---|---|---|
| 4 — Boiling Tube | Text states diameter 20 mm; drawing has 20/21 and R5/R6 callouts that cannot confidently be reconciled | `NEEDS_TECHNICAL_REVIEW`; do not select dimensions for CAD by guess |
| 15 — Micro Scale Test Tube | Text states OD 10 mm / ID 8 mm; drawing shows 11/10 and R5/R6 callouts | `NEEDS_TECHNICAL_REVIEW`; keep text and drawing values separately |
| 27 — Micro Test Tube Stand | Four-hole stand is shown; drawing includes R7/R5 hole callouts | Hole opening/fit interpretation requires technical review before dimension-accurate CAD |
| 32 — Micro Well Plate | Text says 125 × 82 × 15 mm; drawing contains 170 × 255 and 251 callouts | Major discrepancy; logical 96-well layout may be indexed, but physical scale/model must wait |
| 33 — W Tube | Image shows W-shaped glass tubes; text provides OD/arm information and an unusual 1 mm bulb statement | Bore, bend radii and branch geometry remain unresolved |
| 45 — Volumetric Flask | 10 mL and 25 mL capacities are stated; visible dimensioned drawing is for 25 mL | Do not extrapolate 10 mL geometry or assert calibration class |
| 46 — Universal pH Indicator Paper | Text says 10 booklets × 20 strips = 200; package image says 100 leaves | `PACKAGE_COUNT_REVIEW`; retain both source statements |
| 3, 16, 17, 25, 39, 40, 43, 54 | Source gives graduations, least count or accuracy/range claims for some measurement devices but no calibration certificate or full accuracy/uncertainty evidence | Display source-stated resolution/range separately from validated accuracy; future measurement models need calibration and uncertainty contracts |
| 37 — Copper/Zinc electrodes | Material names/dimensions pictured; purity/surface condition not stated | No universal electrochemical potential/result without electrolyte and material evidence |
| 36 — Calorimeter | Beaker/foam case pictured; no insulation coefficient or heat capacity supplied | Any future calorimetry model requires validated heat-loss assumptions and uncertainty |

## Hazard and safe-use boundaries retained

- **Item 22 Spirit Lamp:** open-flame hazard; virtual-only.
- **Item 24 Mercury Thermometer:** mercury-filled glass; breakage/toxicity hazard; excluded from physical learner use.
- **Item 34 Wire Gauze:** source explicitly specifies an asbestos centre; never recreate as a usable real-world asset. A virtual asbestos-free alternative must be separately designed and reviewed, not represented as the source item.
- **Item 39 Multimeter:** no model, fuse rating, overvoltage category or calibration data; the picture does not authorise real high-voltage use.
- **Item 48 Forceps:** pointed tool; digital-only handling pending practical-specific review.
- **Item 52 Gas Generator:** no approved gas identity, reagent recipe, pressure/flow rating or experiment-specific approval; never expose arbitrary mixing or real gas-generation instructions.
- **Item 53 Tongs and item 26 Tripod Stand:** hot-object/pinch/hot-surface context; virtual-only until bounded, reviewed models exist.
- **Item 20 Platinum Wire:** high-cost material and hot-wire use requires separate material and safety review.
- Glassware, sharp tools, electrical apparatus, solvents and reagent-related items remain constrained to explicit reviewed virtual workflows.

## CI validation

The source/catalogue validator is being expanded to require:
- 54 logical CSV records (header + 53 physical items), 15 columns per record;
- unique continuous source item IDs/index 2–54 in order;
- the exact earlier-upload SHA and `USER_UPLOADED_UNAUTHENTICATED` source state on all records;
- all 53 source catalogue rows marked visually checked while excluding Kit Manual and documentation credit;
- explicit tests for technical discrepancies, asbestos/mercury/open-flame/gas-generation hazards and package-count/calibration gaps.

The current validation run for the 53-row register must be read before claiming CI PASS. The prior eight-row validation result is historical and does not validate this expanded register.

## Phase and next-work boundary

- This completes the **visual detail-page audit** for the registered earlier MSCL upload only.
- It does **not** complete all Phase 1.1 procurement/source authentication, safety/SDS, licensing or expert-review exit criteria.
- Physics attachment/specification closure and Biology kit-source page audit remain open.
- The first Biology-with-microscope queue item remains `NCERT-BIO-WM-SPEC-002` / Kit Box / indexed page 9 when the previously submitted binary or a legitimate official primary payload is accessible. No repeat upload request.
- Phase 1 / 1.1 remains **IN PROGRESS**; Phase 2 scientific models remain **BLOCKED**. No solver, 3D asset or deterministic experiment runtime was implemented by this audit.
