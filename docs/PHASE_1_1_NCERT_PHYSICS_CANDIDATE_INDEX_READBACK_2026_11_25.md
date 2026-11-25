

## Reproducible validation

- The 105-row full source index, 52-row candidate subset, 219-row method audit, 41-row task gap register and 515-row stockroom audit are checked by `scripts/validate-physics-source-crosswalk.mjs`.
- **CI Run #2 SUCCESS:** https://github.com/snchat78-svg/LabVerse/actions/runs/45634528491. Validation does not replace image, physical variant, procurement or safety review.

# NCERT Physics item-schedule text readback — 2026-11-25

- Read the text-extracted official item-schedule rows for **all 105 current Physics catalogue records**, serials **2–106**, across printed pages **xi–xxv**. The 105-row CSV now stores the NCERT schedule item label and a concise paraphrase of the listed use alongside the current LabVerse catalogue label.
- The **52 items** that appear in the current 219-row Class XI Physics task-to-item candidate audit are also isolated in `data/catalogues/ncert_physics_candidate_item_index_readback_2026_11_25.csv`; the remaining 53 rows are read from the item schedule but are not among those current Class XI Physics candidate links.
- Exact source spelling is retained where relevant. For example, serial 79 is printed as **“Maganin wire”** in the NCERT schedule; the crosswalk does not silently normalize that label to another spelling. Serial 49 is printed as **“Wire gauge”** and its listed use is a base on a tripod for uniform heating.
- **Not completed:** visual inspection of every item illustration; physical specification/variant, dimensions, supplied quantities, kit edition correspondence, actual school stock, procurement equivalence, safety, rights and expert review. The 105-row text readback must not be described as a product/asset verification.
- CSVs: `data/catalogues/ncert_physics_item_serial_page_crosswalk_2026_11_25.csv` (105 rows); `data/catalogues/ncert_physics_candidate_item_index_readback_2026_11_25.csv` (52 candidate-linked rows).
- Source: [NCERT Physics Laboratory Kit manual, official PDF](https://ncert.nic.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf), item list pp. xi–xxv.
- No item was promoted; catalogue raw names/categories were not overwritten. 
