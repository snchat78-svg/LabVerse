# Physics catalogue item-schedule source crosswalk — 2026-11-25

## Work completed

- Mapped all **105 current Physics catalogue rows** (`NCERT-PHY-KIT-002` through `NCERT-PHY-KIT-106`) to the corresponding serial-number rows in the NCERT *Manual of Secondary Stage Physics Laboratory Kit for Grades XI and XII*.
- Recorded the printed Roman-numeral schedule-page group from the official manual: **pp. xi–xxv**.
- Read the text-extracted **item name and listed-use row for all 105 serial entries** and paraphrased the source use. Source spelling is retained, including the printed label “Maganin wire” (serial 79) and “Wire gauge” (serial 49).
- The 52 item IDs used in the Class XI Physics candidate-link audit are separately exposed in `data/catalogues/ncert_physics_candidate_item_index_readback_2026_11_25.csv`; other 53 schedule rows are also text-read but are not among those current 41-task candidate links.
- Updated Physics rows in `data/catalogues/stockroom_item_level_audit_2026_11_23.csv` so `item_page_evidence` records the printed item-schedule page and table-text-read status.

## Schedule page groups

| Printed page | NCERT item serial range |
|---|---:|
| xi | 2–5 |
| xii | 6–12 |
| xiii | 13–18 |
| xiv | 19–26 |
| xv | 27–35 |
| xvi | 36–44 |
| xvii | 45–50 |
| xviii | 51–57 |
| xix | 58–64 |
| xx | 65–71 |
| xxi | 72–79 |
| xxii | 80–87 |
| xxiii | 88–94 |
| xxiv | 95–103 |
| xxv | 104–106 |

## Evidence limits

- The NCERT catalogue ID suffix is used as the corresponding kit item serial; this crosswalk retains both the current LabVerse label and the NCERT schedule label/use text.
- The page field refers to the **item schedule/listing page**, not the experiment method page. Method evidence is recorded separately in `data/curriculum/rbse_xi_physics_ncert_method_alignment_audit_2026_11_25.csv`.
- This is a **text readback**, not a visual audit of all item pictures, a full physical specification, a procurement verification, or actual school stock. Image/variant, dimensions, materials, quantities, version, safety, procurement equivalence, rights and expert review remain OPEN.
- No source item was promoted and no catalogue item name/category was overwritten.

## Current Phase 4.1 consequence

Physics now has serial/page and item-name/use text crosswalks for 105/105 current catalogue records. Chemistry and Biology still need equivalent source-item serial/page, text, image and variant audit. Phase 4.1 remains IN PROGRESS; text provenance does not clear broader safety, procurement, rights or asset gates.
