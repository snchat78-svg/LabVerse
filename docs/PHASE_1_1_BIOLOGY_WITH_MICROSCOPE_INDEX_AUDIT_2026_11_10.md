# Biology Kit (With Microscope) — Visual Index and Safety-Page Audit

**Audit date:** 2026-11-10  
**Current-session upload:** `SSBK_with_Microscope_222.pdf`  
**File size / pages:** 59,620,970 bytes / 199 pages  
**SHA-256:** `9df41c69800ae3e8da8cac3fae265b8a6c4a4035e4deec16325c32b225309dcb`  
**Evidence boundary:** user-uploaded candidate; official NCERT byte equality is not authenticated.

## 1. Cover and index

The cover (PDF page 1) was visually inspected and identifies the NCERT *Specification Document of Items — Secondary Stage Biology Laboratory Kit (with microscope), Grades 11 & 12*.

All four index pages were visually inspected:

| PDF page | Index records |
|---:|---:|
| 2 | 1–66 |
| 3 | 67–111 |
| 4 | 112–155 |
| 5 | 156–177 |

The existing catalogue `data/catalogues/ncert_biology_with_microscope_spec_items.csv` contains 177 records with contiguous unique `index_no` values 1–177, no duplicate index numbers and no blank required index labels/page references. A separate 177-row visual index audit is stored at `data/catalogues/ncert_biology_with_microscope_index_audit_2026_11_10.csv`. The master catalogue now records the current index PDF page and current-upload SHA-256 for each row.

### Record classification

- Index row 1: Kit Manual — documentation/publication record, not physical equipment.
- Index rows 2–83: 82 kit item records.
- Index rows 84–133: 50 visual-card records.
- Index rows 134–140: 7 embedded-specimen records.
- Index rows 141–175: 35 permanent-slide records.
- Index row 176: Student Laboratory Microscope — actual instrument (see index-heading mismatch below).
- Index row 177: Document Development Team — publication credits, not a kit item.

Therefore, the source index has 177 numbered entries, of which 175 are catalogue item records after excluding the Kit Manual and Document Development Team. The 50 visual cards, 7 embedded specimens and 35 permanent slides are distinct catalogue classes, not loose apparatus.

## 2. Index-heading mismatch — row 176

The index on PDF page 5 labels row 176 as “Permanent Slide: Student Laboratory Microscope”. The actual detail page (PDF page 198; printed page 193) is headed “Permanent Slide: Student Laboratory Microscope”, but the specifications and photographs show a **student laboratory microscope**:
- metal body;
- two objectives, 10X and 45X;
- two eyepieces, 10X and 15X, with pointer;
- movable slide clip;
- coarse and fine motion adjustments;
- fixed condenser;
- ISI marked to IS 3686;
- quantity 1.

It is not a permanent slide. Keep it under catalogue category `MICROSCOPE`, separate from row 83 “Dissecting Microscope”. Do not count row 176 as a slide.

PDF page 199 / printed page 194 (index row 177) contains Document Development Team credits only. It is excluded from kit inventory.

## 3. Current-upload detail-page checks

The following source detail pages were rendered and visually inspected against the stored catalogue fields:

| Index row | Item | PDF page / printed page | Visually confirmed source detail | Safety / app handling |
|---:|---|---|---|---|
| 17 | Spirit Lamp | 26 / 21 | Stainless-steel body; base diameter 58 mm to top diameter 71 mm; 56 mm height; brass wick holder with metallic cap; quantity 1 | Open flame hazard; virtual-only model, no learner operation |
| 41 | Scalpel | 53 / 48 | Stainless steel; 150 mm; quantity 1 | Sharp tool; prepared specimen / simulation only |
| 44 | Dissecting Scissors | 56 / 51 | Stainless steel; 125 mm; both ends pointed; quantity 1 | Sharp tool; simulation only |
| 79 | Wire Gauze | 93 / 88 | Stainless-steel frame and mesh; asbestos centre of 55 mm diameter; 100 × 100 mm; quantity 1 | Asbestos-containing item; never make it a usable real-world learner asset |
| 176 | Student Laboratory Microscope | 198 / 193 | Objective/eyepiece/focus/condenser details listed above; quantity 1 | Virtual learning instrument; no claim about current physical stock |
| 177 | Document Development Team | 199 / 194 | Publication credits | Not a kit item |

The Wire Gauze page explicitly names an **Asbestos Centre**. This is now visually confirmed in the current upload, not merely copied from the earlier OCR-derived row. Keep the hazard block in inventory and any future model/asset contracts.

## 4. What is and is not verified

**Visually confirmed in this current upload:** cover identity, complete index row names/printed page references across PDF pages 2–5, the six listed detail/credits pages, and the source-specific asbestos statement.

**Not completed by this bounded audit:** visual re-inspection of all 175 item detail pages, full OCR comparison of every dimension/material/quantity, independent NCERT official-byte authentication, procurement/current-stock status, copyright permission, Biology subject-expert approval, and validation of biological specimen/slide labels.

The pre-existing 177-row catalogue has not been silently promoted to full page verification. For every row, the new `detail_visual_audit_status` says either that it was checked in this upload or that its detail page was not visually checked in this pass. Index confirmation is separate from detail specification confirmation.

## 5. GitHub data outputs

- `data/catalogues/ncert_biology_with_microscope_index_audit_2026_11_10.csv`
- `data/catalogues/ncert_biology_with_microscope_spec_items.csv` (index and selective detail-page audit fields appended)
- `dashboard/data/inventory.json` (source variant and selected item visual-audit metadata)
- `docs/SOURCE_PDF_ARCHIVE_REGISTER_2026_11_10.md`

The older uploaded variant `SSBK_with_Microscope_copy.pdf` remains registered with SHA-256 `c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2`. The current `SSBK_with_Microscope_222.pdf` has the same byte count/page count but a different SHA-256; both upload fingerprints remain preserved. No official byte-equality claim is made.

All previously supplied files are no-repeat sources. Do not request another upload.
