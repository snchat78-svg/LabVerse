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


## Source terms and usage details audited on 2026-10-31

### PubChem
- PUG REST usage policy requests no more than 5 requests/second.
- Citation guidance asks users to cite PubChem and/or trace the original contributing source from the individual record.
- Official policy: https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest
- Citation guidance: https://pubchem.ncbi.nlm.nih.gov/docs/citation-guidelines
- LabVerse status: source policy discovered; no connector tested.

### NIST Chemistry WebBook and CODATA
- Chemistry WebBook SRD 69 contains thermochemical, thermophysical and ion-energetics data, with a disclaimer that NIST uses best efforts but does not warrant error-free data.
- WebBook: https://webbook.nist.gov/chemistry/
- CODATA version history identifies the 2022 recommended values, Web Version 9.0, as the latest published set available in this audit. The 2026 adjustment is the next scheduled set; data cut-off for consideration is 31 December 2026.
- Version history: https://physics.nist.gov/cuu/Reference/versioncon.html
- NIST copyright policy says material not marked copyrighted is generally public information, with appropriate credits; individual dataset or software terms may add restrictions.
- NIST use/citation: https://www.nist.gov/copyrights-disclaimers and https://www.nist.gov/open/copyright-fair-use-and-licensing-statements-srd-data-software-and-technical-series-publications
- LabVerse status: version/citation policy recorded; source connector not tested.

### NCBI E-utilities and Datasets
- E-utilities default guidance: no more than 3 requests per second. An API key permits 3–10 requests/second; above 10 requires additional approval/request. Tool identity/contact registration may be required.
- Guidance: https://eutilities.github.io/site/API_Key/usageandkey/
- NCBI Datasets API: default 5 requests/second; API key increases to 10 requests/second.
- Datasets policy: https://www.ncbi.nlm.nih.gov/datasets/docs/v2/api/api-keys/ and https://www.ncbi.nlm.nih.gov/datasets/docs/v2/troubleshooting/faq/
- PMC full-text content is not uniformly available for text mining or reuse; use only permitted automated services and check each article licence.
- PMC developer rules: https://pmc.ncbi.nlm.nih.gov/tools/developers/
- LabVerse status: policies documented; connectors not tested.

### GBIF
- Open-access occurrence datasets use CC0, CC BY or CC BY-NC licensing. Licence applies at dataset/record level and must be retained.
- Terms: https://www.gbif.org/terms
- Rapid or numerous API queries may be throttled dynamically; large queries should use the download API, which supports citation/DOI.
- API/data use: https://techdocs.gbif.org/en/openapi/ and https://techdocs.gbif.org/en/data-use/
- LabVerse status: licence/rate-limit policy recorded; connector not tested.

### Crossref
- Public REST API requires no account; polite pool uses mailto/agent identification.
- Documented limits: public pool 5 requests/sec and 1 concurrent; polite pool 10/sec and 3 concurrent; Metadata Plus is a paid tier.
- Metadata is generally reusable, while some abstracts may be copyright-protected.
- API docs: https://www.crossref.org/documentation/retrieve-metadata/rest-api/
- Access/rate limits: https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication
- LabVerse status: source terms recorded; no connector tested.

### Europe PMC / PMC
- Europe PMC REST exposes literature metadata and access to a subset of open full-text articles; metadata, abstract and full-text use must be distinguished.
- API: https://dev.europepmc.org/RestfulWebService
- PMC states not all articles are available for text mining/reuse, and article licence terms apply individually.
- PMC developer rules: https://pmc.ncbi.nlm.nih.gov/tools/developers/
- LabVerse status: API identified; article-level licence workflow required; no connector tested.

### NCERT
- Official kit-manual index lists Grades 11–12 Physics, Biology and Micro Scale Chemistry kits.
- A published NCERT School Kits overview describes the Higher Secondary Physics kit as including optical bench, metre bridge, potentiometer, Boyle's-law apparatus, resonance apparatus, diode/transistor-characteristic apparatus, sonometer, resistance box and pan balance.
- It describes the Chemistry kit as using special low-volume apparatus, plastic containers and unbreakable droppers.
- It describes the Biology kit as including laboratory instruments, glassware, compound microscope, permanent slides, stains and cards.
- Overview PDF: https://www.ncert.nic.in/division/dek/pdf/NCERT_Educational_School_Kit-Enhancing-UN278.pdf (PDF pages 8–9)
- Manual index: https://ncert.nic.in/division/dek/kit-manuals.php?ln=en
- NCERT Lab manuals displayed all-rights-reserved notices. The overview does not grant reuse rights for images, text, or manual figures.
- LabVerse status: kit family descriptions inspected; full Biology kit manual remains inaccessible; reproduce neither NCERT's photographs nor its full text without permission.

## Compliance status summary

The source-specific policies are documented, but this does not mean the services are integrated or that every record is safe/accurate to use. No source is CONNECTOR_TESTED or VERIFIED_FOR_USE. Phase 1 still needs a record-level licence/quality sample review and Phase 2 must implement throttling/caching contracts before connector code.


## NCERT source additions — 2026-11-01

| Source | Evidence retrieved | Status | Limits |
|---|---|---|---|
| NCERT Class XI Biology Laboratory Manual, *Laboratory Manual: Biology, Class XI* | https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf — PDF front matter, contents list (34 exercises), Introduction and Exercise 1 microscope description inspected in parsed text; online label 2025–26; ISBN 978-93-5007-064-2 | CONTENT_INSPECTED (partial exercise-level audit) | All Rights Reserved; no reproduction of manual text/figures without permission. Screenshot retrieval for relevant PDF pages failed with HTTP 502. It is not the Higher Secondary Biology Kit manual and does not verify kit bill of materials. |
| NCERT Higher Secondary kit Specification Documents index | https://ncert.nic.in/division/dek/specification_documents.php?ln=en — search-indexed official page text lists separate Biology-with-microscope and Biology-without-microscope variants, Physics Laboratory Kit and Micro Scale Chemistry Laboratory Kit for Grades XI–XII, plus Molecular Model Kit | DISCOVERED | Direct page open returned HTTP 502; specification attachment payloads/URLs and detailed procurement requirements were not inspected. Do not infer item counts or dimensions from the index. |

The Class XI Biology learning manual must remain a separate source pack from RBSE curriculum requirements and from the official Biology kit procurement document. The official index's two Biology kit variants mean that microscope inclusion must be represented as a kit-variant property until the actual specification attachments are inspected.


## Official NCERT Class XI Biology manual retrieval extension (2026-11-01)

- Alternate official PDF host: https://www.ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf
- Source identity: Laboratory Manual: Biology, Class XI, ISBN 978-93-5007-064-2, online label 2025–26, ALL RIGHTS RESERVED.
- Evidence from returned PDF: contents index lists 34 exercise titles with printed page starts; Introduction describes the practical-record schema; Exercise 1 body and figure (printed pp. 5–7) were text- and screenshot-inspected.
- Retrieval limitation: available PDF representation exposed 17 parsed pages only, covering front matter, contents, Introduction and Exercise 1. Exercise body content for 2–34 was not available in the returned representation.
- Status: CONTENT_INSPECTED (partial; Exercise 1 only); 34 exercise titles are INDEXED. Not a full 34-exercise procedure audit.
- Reuse: ALL RIGHTS RESERVED; create original prose and 3D assets, and seek permission before reproducing manual text/illustrations.
- Classification: this is the Class XI learning/practical manual, not the separate Higher Secondary Biology Kit manual or its procurement specification. Do not use it as proof of kit-supplied quantities.
