

## Automated validation

- The source-data validator enforces 105 comparison rows, 104 normalized matches, the single `NCERT-PHY-KIT-095` detail exception, and preservation of the source quantity note without modifying the catalogue label.
- **GitHub Actions Run #5 SUCCESS:** https://github.com/snchat78-svg/LabVerse/actions/runs/45635222749.

# Physics catalogue label and detail comparison — 2026-11-25

## Result

- Compared the current LabVerse Physics label on all **105/105 catalogue rows** against the item label in the NCERT official Physics Laboratory Kit item schedule (serials 2–106; printed pages xi–xxv).
- After whitespace, punctuation, symbol and capitalization normalization, **104/105 labels match**.
- One difference needs a detail-level review: **NCERT-PHY-KIT-095**, the resistor set. The LabVerse label lists 5 Ω, 10 Ω, 20 Ω and 30 Ω; the NCERT schedule further specifies quantities of one 5 Ω, one 10 Ω, two 20 Ω and one 30 Ω resistors. The label was not overwritten. The composition has been recorded as a separate source-note proposal.
- Data: `data/catalogues/ncert_physics_catalogue_label_comparison_2026_11_25.csv`.

## Decision boundary

- No catalogue label was edited and no source item was merged or promoted.
- The NCERT list's resistor-set composition is a source reference, not proof of the actual quantity supplied in a school kit or physically present in a particular institution.
- All 105 image/physical-variant, dimensions, version, actual-stock, procurement, safety, rights and qualified expert reviews remain open.
