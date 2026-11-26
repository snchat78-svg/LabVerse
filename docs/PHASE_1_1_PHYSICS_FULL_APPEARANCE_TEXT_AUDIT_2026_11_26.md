# Phase 1.1 Physics — full 105-item official PDF appearance text audit

## Summary — 2026-11-26

- Captured the searchable `Figure/Setup` / `Photograph / Appearance` description text for **all 105 existing Physics catalogue rows**, serials 2–106, from the official NCERT *Manual of Secondary Stage Physics Laboratory Kit for Grades XI and XII* (ISBN 978-93-5292-653-4). The source's item schedule spans printed pages xi–xxv; the description text is transcribed/paraphrased from the PDF extraction.
- The existing `data/catalogues/ncert_physics_item_image_variant_review_2026_11_26.csv` now has three canonical fields: `official_pdf_appearance_description`, `official_pdf_description_evidence_status`, and `official_pdf_source_url`. The temporary `indexed_appearance_*` fields from the first small batch were consolidated/removed.
- The 12 already confirmed visual records (serials 2–5 and 19–26) remain unchanged. The other **93/105** remain `NOT_VISUALLY_CHECKED_THIS_PASS`; PDF text-layer descriptions are not promoted to visual verification.
- Direct screenshot attempts for printed pages xii and xiii and xv (zero-based PDF indices 13, 14 and 16) did not render: the official PDF screenshot endpoint returned HTTP 502 or timeouts. This access limitation is recorded; no absent screenshot is represented as a verified image.

## Coverage

| Evidence lane | Records | Meaning |
|---|---:|---|
| Official PDF appearance text extracted | 105/105 | Text description for each existing catalogue serial |
| Direct PDF screenshot visual review | 12/105 | Only serials 2–5 and 19–26 |
| Direct visual review still pending | 93/105 | Remaining source images not visually inspected in this run |

## Important source distinctions retained

- Serial 7 is an assembly listing with boss heads (2 each), two clamp types, G-clamp, M.S. rod and base plate; it is not converted into a kit stock count.
- Serial 14 and 15 retain the 50g and 500g item names; no number of weights per kit is inferred.
- Serial 16's wooden/plastic alternatives remain explicit; the delivered material variant is unknown.
- Serial 29's 100 mL and 250 mL beakers remain both present in the source appearance description.
- Serial 36's wooden/plastic syringe top remains an unresolved alternative.
- Serial 49 is retained as the source-labelled wire mesh/heating base, not interpreted as a wire-diameter instrument.
- Serial 79's source spelling `Maganin wire` is retained in the item label/crosswalk; its parsed appearance column labels the spool `MANGANUM WIRE`. No silent spelling correction is made.
- Serial 95's four-resistor composition is retained separately from school stock quantities.

## Evidence limits

- Text-layer appearance descriptions do not establish exact physical sample identity, actual dimensions, tolerance, manufacturer, supplied quantity, school-owned stock, procurement equivalence, or the right to reproduce the source figures.
- NCERT's publication page states ALL RIGHTS RESERVED and requires prior permission for reproduction. No NCERT figure/image was copied into LabVerse assets.
- The work does not approve any scientific method, hazard, action, model, experiment outcome or 3D asset.

## Validation and next pointer

- Extended `scripts/validate-physics-source-crosswalk.mjs` to require exactly 105 unique source-description rows, a nonempty official appearance description, the official PDF URL and the separate text-extraction evidence status. It also guards that only the 12 known serials retain direct visual-check status.
- The source-data workflow already includes the CSV and validator in its `main` push path filter. Actions result must be read before calling the run green.
- **Phase 1.1 remains IN PROGRESS**; Phase 2 remains BLOCKED; Phase 4.1 remains IN PROGRESS; real 3D and scientific runtime are NOT STARTED.
- Next: continue the source-order direct visual acquisition attempt for the 93 pending rows, starting with page xv / serials 27–35. In parallel, inspect NCERT's official Grade XI–XII Physics Laboratory Kit specification document for dimensions and supplied quantities; do not substitute catalogue image descriptions for specification evidence.

## Primary source

NCERT, *Manual of Secondary Stage Physics Laboratory Kit for Grades XI and XII*, ISBN 978-93-5292-653-4, first edition October 2018, reprints January 2019, March 2020 and August 2024. Official PDF: https://ncert.nic.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf