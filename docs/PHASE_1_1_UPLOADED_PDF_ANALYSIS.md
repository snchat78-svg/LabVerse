# Uploaded NCERT Kit Specification Analysis — Phase 1.1

Audit date: 2026-11-01  
Project: LabVerse  
Phase state: Phase 1.1 IN PROGRESS; Phase 1 IN PROGRESS; Phase 2 BLOCKED.

## 1. Files received and structural inspection

| Uploaded file | Page count | File size | PDF creation/modification metadata | SHA-256 |
|---|---:|---:|---|---|
| MSCL_copy.pdf | 65 | 19,798,501 bytes | 2025-03-21 09:10:15 UTC | db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d |
| SSBK_with_Microscope_copy.pdf | 199 | 59,620,970 bytes | 2025-03-21 09:08:43 / 09:39:13 UTC | c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2 |

Both files have A4 page geometry, are unencrypted, carry a 270-degree page-rotation flag, and consist of scanned raster pages. Standard text extraction yielded no usable text. One full-page JPEG image was embedded per PDF page at nominal 200 dpi. OCR was performed on rotated page images and spot-checked against rendered PNGs. The PDF metadata dates are file creation/modification metadata, not confirmed NCERT issue/revision dates.

## 2. Micro Scale Chemistry Laboratory Kit — uploaded specification

The cover reads “NCERT Specification Document of Items — Micro Scale Chemistry Laboratory Kit — Grades 11 & 12”.

### Index reconciliation

- 55 numbered index rows.
- Rows 1–54 are the indexed kit/manual entries.
- Row 55 is the Document Development Team credit, not apparatus.
- Row 1 “Kit Manual” is a publication item, not laboratory equipment.
- The PDF has 65 pages. Index item page references end at printed page 63; drawings and additional pages account for the difference.

### Important recovered specifications

| Item | Source-stated detail |
|---|---|
| Micro scale test tube | Transparent graduated borosilicate; OD 10 mm, ID 8 mm, height 45 mm including rim; 2 mL capacity; quantity 24 |
| Micro measuring cylinder | PP; 10 mL graduated; ID 12 mm; overall length 142 mm with 45 mm hexagonal base; quantity 2 |
| Micro burette | Borosilicate, 5 mL; least count 0.05 mL; 385 mm overall, 17 mm diameter, 300 mm graduated part; PTFE screw stopcock; quantity 1 |
| Micro well plate | Polystyrene, 96 wells; 125 x 82 x 15 mm; wells 6 mm diameter x 10 mm deep; quantity 4 |
| Micro filtration unit | Borosilicate boiling tube, porcelain Hirsch funnel, rubber bulb and cork; boiling tube 80 mm high x 20 mm diameter; quantity 4 (visually checked) |
| Digital thermometer | -50 °C to 350 °C; selectable °C/°F; stated accuracy 0.1 °C; quantity 1 |
| Mercury thermometer | 0-250 °C, 1 °C subdivisions; mercury-filled; quantity 2 |
| Multimeter | DC voltage to 1000 V, AC voltage to 750 V, DC current to 10 A, resistance to 2000 ohm, transistor and continuity functions; quantity 1 |
| Pocket balance | 200 g capacity; 0.1 g least count; 122 x 63 x 20 mm; quantity 1 |
| Copper and zinc electrodes | Each strip 80 x 5 x 1 mm; quantity 4 each |
| Gas generator | Borosilicate assembly with boiling tube, inner tube, corks, L-shaped glass tube, PVC tube and nozzle; complete OCR-extracted dimensions are in the CSV |
| Wire gauze | Stainless-steel frame and mesh, 100 x 100 mm, with asbestos centre diameter 55 mm; quantity 1 (visually checked) |

### Safety and design implications

- The source explicitly specifies an **asbestos-centred wire gauze**. Preserve the source fact in provenance, but do not reproduce asbestos as a usable real-world asset or teach its handling. Any successor simulation should use a reviewed asbestos-free virtual alternative and document the substitution separately.
- The source lists a mercury-filled thermometer. Do not use this as real-world learner instruction; prefer a simulated/digital sensor.
- Spirit lamp, ignition tube, hot supports, gas generator and chemistry glassware must be virtual, bounded and experiment-specific.
- A gas-generator entry is not permission to expose arbitrary gas-generation or arbitrary reagent-mixing actions.
- Micro quantities and units must remain explicit; do not silently scale them to conventional macro apparatus.

## 3. Secondary Stage Biology Laboratory Kit (with microscope) — uploaded specification

The cover reads “NCERT Specification Document of Items — Secondary Stage Biology Laboratory Kit (with microscope) — Grades 11 & 12”.

### Index and category reconciliation

The index has 177 numbered rows:

| Index rows | Category | Count |
|---|---|---:|
| 1–83 | Manual/box/equipment/consumables and dissecting microscope | 83 |
| 84–133 | Visual cards | 50 |
| 134–140 | Embedded specimens | 7 |
| 141–175 | Permanent slides | 35 |
| 176 | Student laboratory microscope (body text and photo show an actual microscope) | 1 |
| 177 | Document Development Team credit | 1 non-kit row |

Thus the file contains 176 kit-index rows (including the row 1 Kit Manual) plus one documentation credit. Do not describe the 177th row as a physical item.

### High-value specifications recovered

| Item | Source-stated detail |
|---|---|
| Kit box | Galvanised iron sheet; body/doors/partitions 26 SWG; overall 500–505 x 450–455 x 280–285 mm including door; weight 5.75 kg ±100 g; no sharp edges |
| Cavity block tile | Ceramic, 6 cavities; 100 x 70 x 18 mm; each cavity 20 mm diameter x 7 mm deep, nominal 1 mL; quantity 2 |
| Plastic funnel | PP; overall 140 mm; mouth 90 mm; stem length 60 mm, OD 7 mm/ID 4 mm; quantity 2 |
| Four colour cubes | Yellow, green, red and white PP cubes; 1 cm³ each; 72 per colour (288 total) |
| Human skeleton | Synthetic; 460 mm with stand, skeleton 445 mm; tripod base radius 60 mm, base weight 175 g; quantity 1 |
| Pocket digital balance | 200 g capacity; 0.1 g least count; 122 x 63 x 20 mm; quantity 1 |
| Laboratory thermometer | Alcohol-filled glass; -10 °C to 110 °C; graduation 1 °C; quantity 3 |
| pH indicator paper | Narrow pH 1–11 and broad pH 1–14; each strip 60 x 7 mm; 1000 strips per large box for each range |
| Dissecting microscope (item 83) | Plastic body; rack-and-pinion; eyepieces 10X/20X; 80 x 80 mm platform with two movable clips; 50 mm mirror; platform height 110 mm; quantity 1. The source phrase for base/rack dimensions “120 x 15/18 mm” is preserved and needs technical clarification. |
| Visual card sample (item 84, Amoeba) | Plastic-coated 300 gsm art paper; 210 x 300 mm; Hindi and English printing (1+1); quantity 1 |
| Embedded specimen sample (item 134, Utricularia) | Acrylic embedded specimen; source note says specimen is to be original; 85 x 60 x 14 mm; quantity 1 piece |
| Permanent slide sample (item 141, W.M. Spirillum) | Whole-mount permanent slide with contrast-stained dye and organism information label; borosilicate glass; 75 x 25 x 1 mm; quantity 1 piece |
| Student laboratory microscope (item 176) | Metal body; objectives 10X and 45X; eyepieces 10X and 15X with pointer; movable slide clip; coarse/fine motion; fixed condenser; ISI marked to IS 3686; quantity 1. The page heading calls this a “Permanent Slide”, but its specification and photograph clearly describe a microscope. |

The Biology register preserves index names/page pointers for all 50 cards, 7 specimens and 35 slides. Only representative pages (card 84, specimen 134, slide 141 and microscope 176) were visually checked; individual specification pages for all other cards/specimens/slides were not all transcribed in this pass. Their category/count is index-based, not a substitute for page-by-page content validation.

### Important differences versus the earlier secondary Biology transcript

The uploaded NCERT-with-microscope specification is a separate source. Its index records 83 rows for the initial equipment/manual section, 50 visual cards, 7 embedded specimens, 35 permanent slides, a student laboratory microscope as row 176, and document credits as row 177. It does not reproduce the 58 school-managed reagent entries mentioned in the earlier third-party manual transcript. Do not merge those 58 entries into this uploaded specification or treat them as kit-supplied. The separate Biology-without-microscope variant was not uploaded here; this file is not evidence of its precise differences.

### Safety and design implications

- Item 79 explicitly specifies stainless-steel wire gauze with a 55 mm **asbestos centre**. Do not recreate asbestos as a usable real-world object; preserve it as a source hazard and use a documented, reviewed asbestos-free virtual alternative.
- Scalpel, pointed dissecting scissors, dissecting needle, hammer, nails, spirit lamp, glass items and field tools remain virtual-only/teacher-reviewed in LabVerse.
- Synthetic skeleton is explicitly described as synthetic; do not use human remains.
- Source visual-card/slide/specimen artwork and photographs are reference material only. LabVerse should create original diagrams/assets or obtain rights clearance; do not copy the images into the application.

## 4. Data products and source evidence

- data/catalogues/ncert_mscl_spec_items.csv: 55 source-index rows, including the non-kit documentation credit.
- data/catalogues/ncert_biology_with_microscope_spec_items.csv: 177 source-index rows; row 177 is explicitly documentation-only.
- Both registers separate OCR-derived detail from index-only rows, and keep source claims separate from LabVerse implementation status.
- The Biology no-microscope specification has not been uploaded in this turn. The Physics specification attachment is also still outstanding.
- File creation/modification metadata (March 21, 2025) is not a confirmed NCERT revision date.
- SHA-256 values identify the uploaded bytes; they do not authenticate those bytes against the NCERT-hosted download. Exact-byte verification against the official NCERT URLs remains open.

## 5. Phase gate

Phase 1.1 remains IN PROGRESS. This upload materially closes item-level source inspection for the uploaded MSCL and Biology-with-microscope copies, but not the full Phase 1 gate.

Remaining:
1. Obtain/inspect the Physics procurement specification attachment and Biology-without-microscope variant.
2. Authenticate file identity/revision and compare uploaded PDFs against NCERT-hosted originals by SHA-256 or authoritative metadata.
3. Complete item-level page audit for all 50 visual cards, 7 embedded specimens and 35 permanent slides; resolve unclear source entries (including dissecting microscope dimensions).
4. Complete source-to-practical-to-kit-item-to-asset-to-scientific-model/test-vector links for all six RBSE packs.
5. Complete record-level licensing, safety and qualified subject-expert review.
6. Only when Phase 1 exit criteria pass, unblock Phase 2 scientific domain contracts.

No application code, 3D assets, scientific simulation engine or application test suite was created in this upload-analysis pass.