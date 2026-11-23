# RBSE 2026–27 practical register — Classes XI and XII

## Scope and source
Created `data/curriculum/rbse_2026_27_practical_register_xi_xii.csv` from the user's existing RBSE syllabus PDFs:
- Class XI: `11_2027_copy.pdf`, Physics pp.114–119, Chemistry pp.123–125, Biology pp.132–134.
- Class XII: `12_2027_copy.pdf`, Physics pp.124–129, Chemistry pp.137–140, Biology pp.144–147.
The source map is `docs/PHASE_1_1_EXISTING_RBSE_PRACTICAL_PDF_SOURCE_MAP_2026_11_23.md`. PDF page numbers are 1-based.

## Register contents
147 normalized rows:
- Physics: XI 17 experiments + 13 activities + 11 projects; XII 18 experiments + 14 activities + 7 projects.
- Biology: XI 4 Botany major + 2 Zoology major + 5 Botany minor + 2 Zoology minor + 11 spotting groups; XII 6 Botany major + 6 Zoology major + 5 Botany minor + 4 Zoology minor + 6 spotting groups.
- Chemistry: XI 9 source-level practical sections (including laboratory introduction/techniques, purification, equilibrium, pH, titrimetry, qualitative analysis, organic-element detection and projects); XII 7 source-level groups, retaining the stated alternatives under the Class XII third practical component.

## Evidence and modelling boundaries
- Titles and page ranges are transcribed/normalized from extracted English text in the RBSE PDF pages; this is not a byte-hash or visual-page audit.
- The register does not invent quantities, exact chemical concentrations, procedures, observations, safety permissions or expected results.
- Chemistry alternatives are retained explicitly; alternatives are not cumulative mandatory tasks.
- Biology Botany/Zoology major/minor sections and spotting groups remain distinct.
- Physics activities and projects remain separate from experiments.
- `catalogue_item_ids` is intentionally blank and `mapping_status=PENDING_ITEM_LEVEL_JOIN` for every row. No inventory-to-practical links were fabricated in this pass.
- Chemistry XI project details are not itemized in the cited practical-page extract; the register records only the source-level project section.
- This register is a normalized curriculum index, not yet a full executable practical specification.

## Next work
Join each register row to existing catalogue IDs using exact source-supported task/item references, preserve one-to-many relationships and alternatives, and report unresolved equipment/material gaps. Then deepen method-level source, rights and safety evidence before any scientific simulation is enabled.

Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED; Phase 4.1 remains IN PROGRESS. This work changes curriculum data and documentation only; no application CI run is claimed.
