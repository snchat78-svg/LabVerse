# Phase 1.1 Physics — printed page xiii indexed appearance extraction

## Work completed — 2026-11-26

The exact live next-work pointer was read from `docs/NEXT_WORK_REGISTER_2026_11_10.md` before this batch. Printed page xii (serials 6–12) had a committed source-access audit after screenshot retrieval timed out on both official NCERT hosts. That audit allowed the source-index work to proceed without falsely marking the figures as visually inspected.

This batch records the official PDF's searchable `Photograph / Appearance` text for serials 13–18 (existing LabVerse IDs `NCERT-PHY-KIT-013` to `-018`). The request for PDF screenshot page index 14 (printed page xiii) also timed out. As a result, these six entries remain text-extraction-only.

## Row-level evidence

| NCERT serial | Existing catalogue ID | Source item | PDF-extracted appearance description | Use as stated in source |
|---:|---|---|---|---|
| 13 | NCERT-PHY-KIT-013 | Helical spring | Metallic spring with top and bottom loops and a small pointer-like metal strip | To find the force constant of a helical spring |
| 14 | NCERT-PHY-KIT-014 | 50g slotted weight with hook | Silver-coloured cylindrical slotted weights stacked together, with a metal hook at the top | To measure the weight of a body using the parallelogram law of vector addition |
| 15 | NCERT-PHY-KIT-015 | 500g slotted weight with hook | Dark-coloured cylindrical slotted weights stacked together, with a large curved hook at the top | Used for varying load in the pressure-volume study and varying tension in a sonometer study |
| 16 | NCERT-PHY-KIT-016 | Solid wooden/plastic block for holding beam balance and syringe | Black square solid block with a circular hole in the centre of its upper surface | For holding a beam balance; also for holding a syringe in a pressure-volume study |
| 17 | NCERT-PHY-KIT-017 | Pulley (S type) | Metal pulley mounted on an S-shaped black metal clamp with a screw arrangement | Used in a parallelogram apparatus and friction experiments |
| 18 | NCERT-PHY-KIT-018 | Steel balls | Cluster of small, shiny, spherical metallic balls | For determining coefficient of viscosity by terminal velocity |

## Evidence boundary

- Source is NCERT, *Manual of Secondary Stage Physics Laboratory Kit for Grades XI and XII*, ISBN 978-93-5292-653-4, printed item schedule page xiii.
- The extracted descriptions are text from the official PDF's `Photograph / Appearance` column. They are not a substitute for inspecting the source image pixels.
- The screenshot of zero-based PDF page index 14 timed out (HTTP 400 timeout). The equivalent official PDF on the second NCERT host was previously confirmed, but screenshot rendering also returned HTTP 502.
- The descriptions do not establish the actual supplied sample's variant, dimensions, manufacturer, mass tolerance, calibration, procurement quantity or school-owned stock.
- The 50g and 500g strings are source item names/ratings; no inventory counts are inferred.
- Item 16 explicitly retains wooden/plastic alternatives; the delivered version is unknown.
- No task-item link, stock quantity, current-catalogue label, hazard approval, scientific procedure, result or asset readiness was changed.
- NCERT's copyright page states ALL RIGHTS RESERVED and requires prior permission for reproduction. No NCERT source image was copied into LabVerse.

## Audit file changes

Three existing 105-row CSV fields are populated for serials 13–18. Serial 6–12 records are retained and all use the same explicit text-extraction-only evidence state. The prior 12 direct visual checks (serials 2–5 and 19–26) are unchanged.

Direct visual status remains **12/105 checked and 93/105 pending**. Text-extraction-only appearance descriptions now cover **13 records** (serials 6–18).

## Next exact pointer

Continue the 105-row Physics audit in source order. Printed page xiv / serials 19–26 are already visually checked, so the next unreviewed group is **printed page xv, serials 27–35**. Retry the official NCERT PDF screenshot at zero-based page index 16; if it remains inaccessible, document the access result and retain a text-only status rather than claiming visual review.
