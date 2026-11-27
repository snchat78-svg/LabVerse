# Class XI Chemistry Unit 5 — official source retrieval audit

**Date:** 2026-11-27  
**Active workstream:** Phase 1.1 — source-backed curriculum-to-practical crosswalk

## Scope

This audit covers the three exact RBSE Class XI Chemistry task records already mapped to NCERT Unit 5. It does not create an apparatus or reagent crosswalk because the primary Unit 5 method body was not retrieved in this run.

| RBSE task | Existing task title | NCERT locator |
|---|---|---:|
| RBSE-XI-CHEM-PRA-10 | Determine pH of fruit juices | p. 54 |
| RBSE-XI-CHEM-PRA-11 | Study pH change on dilution of acid/base | p. 56 |
| RBSE-XI-CHEM-PRA-12 | Study common-ion effect in weak acids/bases | p. 58 |

## Retrieval finding

- The existing GitHub endpoint register records NCERT Class XI Chemistry manual index hyperlink ID 245 and the direct Unit 5 PDF target `https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm205.pdf`.
- NCERT's indexed manual contents identify Unit 5 as “pH and pH Change in Aqueous Solutions”; the three experiment locators are pp.54, 56 and 58. This is index/page evidence only, not the method body.
- 2026-11-27 attempts: direct ncert.nic.in PDF timed out; ncert.gov.in equivalent target inaccessible; n20.ncert.org.in alternate host inaccessible; direct NCERT manual index page timed out.
- No official Unit 5 PDF bytes, SHA-256, ETag, PDF metadata or exact current revision were obtained. Prior alternate-host text inspection remains unauthenticated and is not promoted to official evidence.

## Decisions held open

- PRA-10: fruit cultivar, maturity/freshness, sample preparation, temperature, pH-meter/indicator calibration and uncertainty are unknown; no universal pH value.
- PRA-11: acid/base identities, initial concentrations, dilution series, volumes and pH values remain unknown.
- PRA-12: weak acid/base identities, common-ion species, concentrations, buffer formulation and ionic-strength assumptions remain unknown.
- No apparatus or reagent IDs were assigned; no current kit BOM or school stock was inferred. Historical MSCL reagent labels are not a Unit 5 BOM.
- NCERT protected content remains link/citation-only. No protected page text, tables or figures were copied; no live-use permission or experiment runtime is created.

## Repository changes and verification gate

- Added the three-row retrieval CSV, updated the endpoint/source/method registers, added a dedicated Unit 5 validator, and added the new CSV/validator/endpoint register to both CI path filters. GitHub Actions now runs the Unit 5 retrieval validator.
- Validator requirements: exactly PRA-10/11/12; page locators p.54/p.56/p.58; one consistent official URL; missing official payload/hash; prior alternate host stays unverified; no candidate IDs/no promotion; no live use; rights boundary retained.
- This is a completed source-retrieval audit, not completion of the Unit 5 method-body review or crosswalk. Phase 1.1 remains IN PROGRESS and Unit 5 remains BLOCKED on primary retrieval; Phase 2 remains BLOCKED.

## Next action

Recover the already-mapped official `kelm205.pdf` through an accessible NCERT route or existing prior source records; do not ask for a repeat upload. When primary bytes become available, record SHA-256/PDF metadata and inspect pp.54/56/58 with screenshots and text before any task-item mapping. If still unavailable, preserve the no-ID state and move to the next unlocked Phase 1.1 source task rather than using alternate-host text as primary.
