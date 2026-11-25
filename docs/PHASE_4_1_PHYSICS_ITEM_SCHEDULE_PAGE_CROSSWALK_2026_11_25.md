# Physics catalogue item-schedule page provenance — 2026-11-25

## Work completed

- Mapped all **105 current Physics catalogue rows** (`NCERT-PHY-KIT-002` through `NCERT-PHY-KIT-106`) to the serial-number rows in the NCERT *Manual of Secondary Stage Physics Laboratory Kit for Grades XI and XII* item schedule.
- Recorded the printed Roman-numeral schedule-page group from the official manual: **pp. xi–xxv**.
- Added the 105-row crosswalk `data/catalogues/ncert_physics_item_serial_page_crosswalk_2026_11_25.csv` with the catalogue label beside a provisional NCERT schedule-name/use reference. The text fields are not a completed independent row-by-row source-table/image readback.
- Updated the Physics rows in `data/catalogues/stockroom_item_level_audit_2026_11_23.csv` so `item_page_evidence` now records the printed item-schedule page and explicitly retains `ITEM_VARIANT_REVIEW_OPEN`.

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

- The NCERT catalogue ID suffix is used as the corresponding kit item serial; the current catalogue contains 105 rows covering serials 2–106. This is a serial crosswalk, not an independent visual or procurement verification of all item descriptions.
- The page field refers to the **item schedule/listing page**, not the experiment method page. Method evidence is recorded separately in `data/curriculum/rbse_xi_physics_ncert_method_alignment_audit_2026_11_25.csv`.
- Name/variant, dimensions, material, quantities, kit edition, physical school stock, safety, procurement equivalence, rights and subject-expert review remain OPEN. For example, the listed wire-mesh heating support, folding metre scale, and full protractor have distinct intended uses; do not infer a different role from a short catalogue label.
- No source item was promoted and no catalogue item name or category was changed.

## Current Phase 4.1 consequence

Physics now has item-schedule page provenance at the index-row level for 105/105 current catalogue records. Chemistry and Biology still need the same source-item serial/page and variant audit. Phase 4.1 remains IN PROGRESS; page provenance alone does not clear its broader source, safety, rights or asset gates.
