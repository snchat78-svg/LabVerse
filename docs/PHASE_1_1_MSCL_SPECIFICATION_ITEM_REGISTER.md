# Phase 1.1 — NCERT Micro Scale Chemistry Kit Specification Item Register

Uploaded source: MSCL_copy.pdf  
Cover title: NCERT Specification Document of Items — Micro Scale Chemistry Laboratory Kit — Grades 11 & 12  
PDF pages: 65; PDF creation/modification metadata: 2025-03-21; SHA-256: db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d.

## Index interpretation

- Index rows 1–54 are kit/manual entries.
- Row 55 is the Document Development Team credit, not a kit item.
- Row 1, Kit Manual, is a publication item, not physical apparatus.
- The machine-readable source table is data/catalogues/ncert_mscl_spec_items.csv.
- Source-row IDs are LabVerse identifiers, not NCERT-issued product codes.

## Safety-critical source entries

1. Row 22, Spirit Lamp: stainless-steel body and brass wick holder with metallic cap. Simulate only.
2. Row 24, Mercury Thermometer: mercury-filled; 0–250 °C; 1 °C subdivisions. Flag mercury/breakage hazards.
3. Row 34, Wire Gauze: stainless-steel frame/mesh with an asbestos centre (55 mm diameter). The source is explicit. Do not reproduce asbestos as a usable real-world asset; record a separately reviewed asbestos-free virtual substitution.
4. Row 52, Gas Generator: glass/tube/cork/nozzle assembly. This is not permission to expose arbitrary gas-generation or arbitrary chemical-mixing actions.

See docs/PHASE_1_1_UPLOADED_PDF_ANALYSIS.md for the cross-file analysis and current phase gate.

## Companion official teaching manual (separate from this specification upload)

A separate NCERT-hosted 2018 *Manual of Microscale Chemistry Laboratory Kit* has been retrieved and text-extracted: https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf (Classes XI–XII; ISBN 978-93-5007-861-7; catalogue publication code 13166; ALL RIGHTS RESERVED). It is not the current procurement specification PDF described by this 2025 upload. See:
- docs/PHASE_1_1_MSCL_OFFICIAL_MANUAL_REVIEW.md
- data/catalogues/ncert_mscl_manual_experiment_index.csv (34 experiment/topic entries)
- data/catalogues/ncert_mscl_manual_apparatus_index.csv (51 apparatus entries)
- data/catalogues/ncert_mscl_manual_reagent_index.csv (124 numbered labels)
- data/catalogues/ncert_mscl_manual_to_rbse_chemistry_crosswalk.csv (41/41 RBSE chemistry task records represented; topic evidence only)

Do not merge the 2018 manual's reagent labels into this 2025 specification upload as if they were delivered consumables. All 124 reagent records are blocked from live use pending identity-specific SDS and written chemistry/safety review. The manual's mercury thermometer is excluded from physical learner use. Current official specification authentication and current reagent BOM remain open.
