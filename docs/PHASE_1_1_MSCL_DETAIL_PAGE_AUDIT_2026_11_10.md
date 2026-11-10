# MSCL specification detail-page audit — 2026-11-10

## Scope and source identity

This audit records visual inspection of eight item-detail pages in the previously registered `MSCL_copy.pdf` upload.

- Source: user-uploaded `MSCL_copy.pdf`, 65 pages.
- SHA-256 of registered bytes: `db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d`.
- Evidence state: USER_UPLOADED_UNAUTHENTICATED. This hash identifies the uploaded file; it does not prove exact-byte identity with an NCERT-hosted original.
- The separate 2026-11-10 MSCL upload variant has a different hash and remains a separate source record. This visual pass must not be attributed to that uninspected byte variant.
- Detailed page evidence is stored in `data/catalogues/mscl_detail_audit_2026_11_10.csv`; the original catalogue `data/catalogues/ncert_mscl_spec_items.csv` now marks only the five newly inspected rows with `OCR_TEXT + VISUAL_CHECK`.

## Pages inspected

| Index item | PDF page(s) | Result |
|---|---:|---|
| 2 — Kit Box | 5 | Transparent HDPE storage container, lid, locks and four wheels visually present; source text gives weight and dimensions |
| 3 — Beaker | 6 | Both 10 mL and 50 mL graduated borosilicate beakers shown; quantities remain exactly as source-stated |
| 4 — Boiling Tube | 7–8 | Photograph and drawing inspected; dimension callouts need technical clarification |
| 5 — Capillary Tube | 9 | Soda-glass tubes and storage cylinder shown; 100 tubes per box source claim retained |
| 6 — Porcelain Dish | 10 | Porcelain dish shown; apparent lip in photo is not promoted to a measured specification |
| 14 — Micro Filtration Unit | 18 | Assembled unit and separate perforated porcelain Hirsch funnel shown |
| 21 — Micro Spatula | 26 | Stainless-steel double-ended form and dimensioned drawing shown |
| 34 — Wire Gauze | 43 | Square mesh and circular centre shown; source explicitly identifies asbestos |

## Audit result

- 55 catalogue/index rows remain; row 55 is documentation credit and is not physical apparatus.
- Physical catalogue scope is index rows 2–54: **53 item rows**. The Kit Manual row is a publication, not a physical tool.
- Visually inspected item detail pages: **8/53** (items 2, 3, 4, 5, 6, 14, 21 and 34). Remaining physical item details: **45/53**.
- The audit has not verified current stock, manufacturer identity, procurement equivalence, tolerance, calibration or source authenticity.
- The source's wire gauze remains explicitly asbestos-centred. It must never become a usable real-world LabVerse asset. Any safe virtual alternative is a separate designed/reviewed object, not a reinterpretation of this source item.
- Boiling Tube: the page text states diameter 20 mm; its drawing shows 20/21 and R5/R6 annotations that cannot be confidently interpreted as a consistent bore/outer-diameter specification from the scan. Keep the original text and drawing observation separately; flag NEEDS_TECHNICAL_REVIEW.
- Porcelain Dish: the photo appears to show a lip, but the text does not dimension or describe it. Do not use it as a procurement requirement.

## Evidence interpretation and limits

The visual check confirms what is depicted on the relevant pages of this uploaded copy. It does not authenticate the upload to NCERT, prove that a school has received the listed quantities, establish modern product availability, or authorise any physical chemistry procedure. Exact reactions, reagent formulations, safety data, compatibility and waste handling remain separate gates.

## Next source-order work

1. Continue with MSCL index item 7 (Conical Flask), PDF page 11, then proceed sequentially through the remaining physical item pages.
2. Keep hazardous pages (open flame, mercury thermometer, asbestos-centred gauze, gas generator) explicitly flagged and digital-only.
3. Maintain the distinct uploaded variant receipt; do not silently merge byte variants.
4. Continue Biology queue order 1 (Kit Box, page 9) when its previously supplied binary or legitimate official payload is accessible. No repeat upload request.

**Phase gate:** Phase 1 / Phase 1.1 remains IN PROGRESS. Phase 2 scientific models remain BLOCKED. This audit creates source evidence only; it does not implement a chemistry solver, 3D asset or simulation.
