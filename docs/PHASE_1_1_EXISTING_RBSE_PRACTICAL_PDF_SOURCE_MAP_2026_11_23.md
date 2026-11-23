# Phase 1.1 — Existing RBSE practical PDF source map (2026-11-23)

## Purpose
Resume from the user's already supplied LabVerse source PDFs. This work deliberately does **not** repeat the external NCERT Biology Kit Box PDF retrieval attempt. It establishes the exact locations of the existing Class XI/XII practical curriculum material so the next extraction pass can build the normalized inventory without re-searching or asking for re-uploads.

## Existing source files located in ChatGPT Library

| Library filename | Size | Scope confirmed from extracted text | Use in LabVerse |
|---|---:|---|---|
| `11_2027_copy.pdf` | 23,343,499 bytes | RBSE syllabus session 2026–27; Class XI, includes Physics, Chemistry and Biology practical sections | Primary curriculum scope for Class XI |
| `12_2027_copy.pdf` | 18,279,805 bytes | RBSE syllabus session 2026–27; Class XII, includes Physics, Chemistry and Biology practical sections | Primary curriculum scope for Class XII |

These are syllabus PDFs, not the separate 199-page NCERT Biology-with-Microscope kit specification. Do not conflate them. The earlier exact-file Library lookup for `SSBK_with_Microscope_copy.pdf` / `SSBK_with_Microscope_222.pdf` remains unresolved; their historic differing hashes remain separate and unmodified.

## Practical-section page map (PDF page numbers, 1-based)

| Class | Subject | Practical section | Source pages | Verified identifying text / coverage |
|---|---|---|---:|---|
| XI | Physics | Physics Practical (40) | 114–119 | 17 listed experiments, two activity sections, project list, evaluation scheme and minimum record requirement |
| XI | Chemistry | Chemistry Practical, subject code 41 | 123–125 | Laboratory conduct/basic techniques, purification, ionic equilibrium/pH, titrimetric analysis, systematic qualitative analysis, organic element detection, projects |
| XI | Biology | Biology Practical, subject code 42 | 132–140 | Botany/Zoology major and minor exercises, spotting/specimen identification, practical record and viva |
| XII | Physics | Physics Practical (40) | 124–129 | Practical evaluation scheme, experiments, Section A/B activities and projects |
| XII | Chemistry | Chemistry Practical, subject code 41 | 137–140 | Redox titrimetric analysis, qualitative analysis, functional-group tests OR preparation OR biomolecule tests, content-based experiment, record/viva |
| XII | Biology | Biology Practical, subject code 42 | 144–150 | Botany/Zoology major/minor exercises, spotting, investigatory project, record and viva |

## Confirmed extraction anchors

- Class XI Physics page 114 states the assessment scheme and record expectation (at least 12 experiments and 8 activities); the listed experiment set spans pages 114–115, activities pages 115–118 and projects through page 119.
- Class XI Chemistry practical begins around page 123; the practical section explicitly names basic laboratory techniques, purification, ionic equilibrium, pH, titrimetry, systematic qualitative analysis and nitrogen/sulphur/halogen detection. Page 125 contains titrimetric-analysis detail.
- Class XI Biology practical begins page 132. The extracted section identifies Botany and Zoology major/minor exercises and spotting; page 133 includes stomata, osmosis, plant pigment chromatography, transpiration, imbibition, biomolecule tests and compound-microscope/specimen spotting.
- Class XII Physics practical begins page 124 and continues through page 129; the final practical pages include activities/projects and the laboratory manual citation.
- Class XII Chemistry practical begins page 137 and continues through page 140. The syllabus gives alternatives for the organic/biomolecule component; alternatives must remain alternatives, not be counted as cumulative mandatory practicals.
- Class XII Biology practical begins page 144 and continues through page 150; the syllabus includes major/minor Botany and Zoology work, spots, investigatory project, practical record and viva.

## Source and safety boundaries

1. The two PDFs establish RBSE 2026–27 curriculum scope; they do not by themselves authenticate every detailed procedure, concentration, reagent compatibility, hazard control, apparatus specification or expected scientific result.
2. A syllabus mention is not permission to simulate or recommend real-world execution. Chemistry reagent rules and Biology specimen handling require method-level source evidence and safety review before any executable scenario.
3. Do not invent missing quantities, observations, apparatus models or result rules. Keep unknowns explicitly `PENDING_SOURCE`.
4. Preserve the distinction between syllabus practicals, optional alternatives, activities, projects, spotting specimens and supporting equipment.
5. No external PDF re-search is required for this source-map work-unit. Continue with these two existing files and the existing catalogue records.

## Next single work-unit

Build a normalized Class XI/XII × Physics/Chemistry/Biology practical register from these page ranges, joining existing catalogue IDs where they already exist. Include source filename/page, class, subject, practical kind, source title, required apparatus/materials/specimens only when explicitly supported, alternatives, and evidence status. Deduplicate by source identity without deleting historical rows. Do not start a second copy of the source-discovery task. Keep Phase 2 science models gated until method, rights and hazard evidence are adequate.

## Evidence limitation

The PDFs were located and their practical-section text/page anchors were extracted from the user's existing Library files. A fresh byte-level SHA-256 was not calculated in this pass; do not claim hash verification or visual page-image review.