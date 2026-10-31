# Scientific Source Registry — Initial Reference Map

This registry records candidate sources for future connectors. A source being listed does not mean its API is integrated, its entire dataset is open-licensed, or its content has been independently verified by LabVerse.

## Curriculum and practical sources

| Source | Domain | Role | Important constraint |
|---|---|---|---|
| RBSE syllabus index | Curriculum | Board/session authority and document discovery | Read the exact current-session PDF before declaring coverage |
| NCERT XI/XII lab kit manuals | Curriculum/lab | Apparatus and procedure reference for Physics, Biology and micro-scale Chemistry | Respect NCERT copyright and attribution; use manuals as source material, not copied app content without rights |

## Chemistry

| Source | Role | Limits and checks |
|---|---|---|
| PubChem — https://pubchem.ncbi.nlm.nih.gov/docs/about | Chemical identities, structures, properties, bioactivities, safety annotations and cross-links | Records are contributed by many providers. Inspect the source of each property/annotation and its licence; do not treat all records as equally curated |
| PubChem PUG REST — https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest | Programmatic lookup of compound, substance, assay and related records | Respect API limits, timeout/throughput rules, attribution and update notices |
| NIST Chemistry WebBook SRD 69 — https://webbook.nist.gov/ | Reference thermochemistry, thermophysical data, spectra and ion energetics | Data coverage varies by species/property; preserve identifiers, data citation and limitations |
| NIST reference data — https://www.nist.gov/data | Additional measurement and physical/chemical reference resources | Use the individual dataset's terms, release and validity metadata |

## Physics

| Source | Role | Limits and checks |
|---|---|---|
| NIST CODATA constants — https://www.nist.gov/programs-projects/codata-values-fundamental-physical-constants | Recommended fundamental constants and conversion factors | The NIST page identifies 2022 CODATA as the current published adjustment; retain version and citation |
| NIST constants database — https://physics.nist.gov/constants | Query and citation access for constants | Store the adjustment/version with all calculations |
| NIST data catalogue — https://www.nist.gov/data | Physical reference data, atomic spectroscopy and measurement references | Each resource has its own coverage and data policy |

## Biology and biodiversity

| Source | Role | Limits and checks |
|---|---|---|
| NCBI Datasets — https://www.ncbi.nlm.nih.gov/datasets/ | Organism, genome, gene, transcript, protein and metadata access | Record assembly/accession/version; not every dataset has identical usage terms |
| NCBI Taxonomy — https://www.ncbi.nlm.nih.gov/datasets/taxonomy/ | Curated organism names, lineage and taxonomic status | Taxonomic names/status can change; keep retrieval date and taxon ID |
| NCBI E-utilities — https://www.ncbi.nlm.nih.gov/home/develop/api/ | Programmatic access to PubMed, PMC, Gene, Protein and other Entrez databases | Follow NCBI usage policies and rate limits |
| GBIF Occurrence API — https://techdocs.gbif.org/en/openapi/v1/occurrence | Biodiversity/species occurrence records and dataset access | Occurrence records have quality and sampling biases; cite datasets and inspect licence/geospatial uncertainty |

## Literature and scholarly metadata

| Source | Role | Limits and checks |
|---|---|---|
| Europe PMC REST — https://dev.europepmc.org/RestfulWebService | Literature metadata, abstracts, open full-text records, references and annotations | Full text availability is not the same as permission to redistribute; respect article licences |
| Crossref REST API — https://www.crossref.org/documentation/retrieve-metadata/rest-api/ | DOI and publication metadata, licences, funding and post-publication updates | Metadata is deposited by publishers/members; abstracts may remain copyrighted |
| PubMed/PMC via NCBI E-utilities | Biomedical literature search and retrieval | Distinguish abstract from full text and confirm reuse permissions |

## Data stewardship reference

- FAIR Guiding Principles: https://doi.org/10.1038/sdata.2016.18
- Findability, accessibility, interoperability and reusability are design goals for LabVerse data, metadata and connectors.

## Source quality record

Every future source connector or dataset record should capture:
- source ID, publisher/owner and canonical URL;
- source type: official standard, reference database, primary research, systematic review, secondary source or community observation;
- author/editor and publication/release date;
- retrieval timestamp and last-updated value where available;
- DOI/accession/taxon/compound/dataset identifier;
- licence, permitted use, attribution and redistribution restrictions;
- API version, rate limits and known availability limits;
- methodology, coverage, provenance and known biases;
- source-quality review state and reviewer notes.

A search result, abstract or contributed annotation is not automatically a verified scientific fact. Conflicting sources must remain traceable.


## Additional official NCERT learning and manual sources

| Source | Domain | Role | Constraints / audit note |
|---|---|---|---|
| NCERT-CIET Grade 11 activities | https://ciet.ncert.gov.in/activity/grade11 | Indexed Physics, Chemistry and Biology manual exercises and activities | Preserve exercise IDs and link targets; duplicates/alternate links need canonicalisation |
| NCERT-CIET Grade 12 activities | https://ciet.ncert.gov.in/activity/grade12 | Indexed Physics, Chemistry and Biology manual exercises, projects and demonstrations | Preserve source pack and do not assume every item maps to RBSE |
| NCERT Class XI Physics Lab Manual | https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/physics/kelm101.pdf | Experiments, activities, projects, demonstrations and measurement/graph/reporting skills | Parsed text labels the online edition 2025–26; all-rights-reserved notice |
| NCERT Class XI Chemistry Lab Manual | https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm201.pdf | Equipment, handling, heating, filtration, basic techniques, titrimetry and qualitative analysis | Parsed text labels the online edition 2025–26; all-rights-reserved notice |
| NCERT Class XI Biology Lab Manual | https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf | Microscope, specimen and practical-work skills; dissection equipment and safety | Parsed text labels the online edition 2025–26; all-rights-reserved notice |
| NCERT School Kit Manuals index | https://ncert.nic.in/division/dek/kit-manuals.php?ln=en | Physics, Biology and Micro-scale Chemistry Grade 11–12 kit manuals | Manual listing confirmed; direct full manual page retrieval/asset reuse rights remain to be checked |
| NCERT Kit Specifications index | https://ncert.nic.in/division/dek/specification_documents.php?ln=en | Physics, Biology with/without microscope, Chemistry and Molecular Model kit specification documents | Use specifications to ground inventory; confirm latest edition and reuse permissions |

## Source access policy

Manual text and index listings can be used for catalogue traceability; full reproduction of copyrighted manual text, figures, tables or illustrations is not authorised by merely having a public URL. Create original app text and 3D assets or obtain permission/licences. Source attribution must remain attached to derived catalogue records.


## Detailed Grades XI/XII kit manual records

| Source | URL | Evidence retrieved | Important constraints |
|---|---|---|---|
| NCERT Secondary Stage Physics Laboratory Kit manual | https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf | PDF text inspected; combined Grades XI/XII item list and experiments/activities; reprints through Aug 2024 indicated in front matter | All rights reserved. Do not republish manual contents/figures without permission. Screenshot attempts returned HTTP 502. |
| NCERT Micro Scale Chemistry Laboratory Kit manual | https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf | PDF text inspected; Classes XI/XII; special micro apparatus, item details and experiments; first edition 2018 | All rights reserved. Preserve small-quantity/microscale context; screenshot attempts returned HTTP 502. |
| NCERT Higher Secondary Biology Laboratory Kit manual, catalogue code 13163 | https://ncert.nic.in/uploads/publication/other_books_new.pdf | Official publications catalogue confirms the title/code; manual page lists its availability | Direct manual PDF from official kit-manual page returned HTTP 502 during audit; content not yet inspected. |
| NCERT Class XI Biology Laboratory Manual, online edition 2025–26 | https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf | PDF text inspected; lab equipment, safety and practical record expectations | Do not copy protected manual text/figures wholesale; use original content and cite the source. |

## API/source status vocabulary

- DISCOVERED: URL/title identified.
- METADATA_READ: basic publication/API metadata verified.
- CONTENT_INSPECTED: accessible content text or data reviewed.
- TERMS_REVIEWED: licence, reuse and attribution rules checked.
- CONNECTOR_TESTED: API behaviour tested against documented examples/rate limits.
- VERIFIED_FOR_USE: source scope, content and terms reviewed for a specific use case.

Do not mark a source VERIFIED_FOR_USE just because its page is public or search results are visible.
