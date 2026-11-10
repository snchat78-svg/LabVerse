# MSCL item-level evidence and safety review queue — 2026-11-10

## Purpose

Convert the completed 53/53 visual detail-page audit into an explicit closure queue for source interpretation, dimensional accuracy, metrology, materials/compatibility, procurement acceptance and safety. This is a Phase 1.1 evidence-governance artifact. It is not a technical approval, supplier acceptance, safety approval, or scientific model.

## Traceability and limits

- Machine-readable queue: `data/catalogues/mscl_review_gap_queue_2026_11_10.csv` (53 data rows; 17 columns).
- Upstream source: `data/catalogues/mscl_detail_audit_2026_11_10.csv` (53 physical item rows, 15 columns).
- Source file fingerprint: `MSCL_copy.pdf`, SHA-256 `db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d`.
- Authentication state remains `USER_UPLOADED_UNAUTHENTICATED`. The 53/53 claim means the item detail pages were visually checked against this registered uploaded copy only.
- The 17-column queue preserves the source visual-audit status verbatim in addition to item ID, source page, evidence gap and safety boundary. This preserves explicit states such as `NEEDS_DIMENSION_REVIEW` / `NEEDS_GEOMETRY_REVIEW` rather than losing them during queue creation.
- Every row remains `OPEN_NOT_REVIEWED_OR_APPROVED`; owner is `NOT_ASSIGNED`. The queue deliberately preserves source gaps and safety boundaries verbatim.
- A queue row never authorises a real-world practical, chemical use, CAD dimension, calibrated reading or scientific result.

## Domain coverage

The queue assigns overlapping review domains because one item can have multiple unresolved dimensions:

- `MATERIAL_IDENTITY_OR_COMPATIBILITY`: 19 item records
- `PROCUREMENT_AND_ACCEPTANCE`: 25 item records
- `METROLOGY_OR_MODEL_VALIDATION`: 20 item records
- `SAFETY_AND_USE_BOUNDARY`: 26 item records
- `DIMENSION_OR_GEOMETRY`: 24 item records
- `SOURCE_SPECIFICATION_CLARIFICATION`: 1 item records

Counts are item-to-domain assignments, not unique items and not approvals. The validator also checks every review row against all applicable source audit fields.

## High-consequence source boundaries retained

- Boiling Tube (index 4): text/drawing dimension ambiguity remains open; no OD/ID inference.
- Micro Scale Test Tube (index 15): written OD/ID and drawing callouts conflict; do not choose one for CAD.
- Micro Test Tube Stand (index 27): hole-callout interpretation is unresolved.
- Micro Well Plate (index 32): major text/drawing dimensions conflict; no dimension-accurate geometry.
- W Tube (index 33): bore/bend/branch/bulb geometry remains unresolved.
- Wire Gauze (index 34): the source specifies an asbestos centre; never recreate as a usable real-world asset. Any alternative must be a separately designed and reviewed item.
- Mercury Thermometer (index 24): mercury hazard; exclude from physical learner use. A separate digital sensor alternative requires its own review.
- Spirit Lamp (index 22): open-flame source reference only; digital-only and no fuel/live-flame instructions.
- Gas Generator (index 52): virtual-only for explicitly approved bounded models; no arbitrary gas-generation behaviour or reagent recipes.
- Multimeter (index 39): do not imply high-voltage safety or calibration from the pictured device.
- Other quantitative glassware, balances, stopwatch, pH indicator and calorimetry items retain their calibration, accuracy, uncertainty or response-model gaps.

## Closure workflow

1. Assign the appropriate qualified reviewer/owner for each queue row; no owners are presumed.
2. Attach authoritative primary evidence (current manufacturer specification, certificate, SDS, official clarification or expert-approved protocol) with source/version/date.
3. Record a disposition: `APPROVED_WITH_EVIDENCE`, `APPROVED_WITH_LIMITS`, `REJECTED` or `UNRESOLVED`; retain original claims and the evidence that changed the state.
4. Update the source item, risk/review record, 3D asset gate and experiment/model traceability together. Never clear a gap by deleting its history.
5. Only after Phase 1 gates close may Phase 2 scientific contracts and later Phase 5/6 assets/runtime be enabled.

## Current phase state

- Phase 0: DONE (documentation baseline).
- Phase 1 / 1.1: IN PROGRESS.
- Phase 2 scientific contracts/results: BLOCKED.
- Phase 5 real 3D assets: NOT STARTED.
- Phase 6 experiment runtime: NOT STARTED.

**Next:** use the open queue to assign qualified owners and collect authoritative evidence for high-consequence rows; continue internal recovery of the already-submitted Biology-with-microscope PDF and resume queue order 1 `NCERT-BIO-WM-SPEC-002` (Kit Box, indexed page 9) only when readable. No repeat-upload request.
