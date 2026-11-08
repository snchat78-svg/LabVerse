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


## NCERT Class XI Biology Exercises 2–6 and DIKSHA crosswalk (2026-11-01)

| Source | Evidence read | Status | Limit |
|---|---|---|---|
| NCERT Class XI Biology Laboratory Manual (2025–26 label) | Official PDF contents list titles/page starts for Exercises 2–6 (pp.8, 16, 30, 33, 39) | SOURCE INDEX VERIFIED | Body extraction accessible only through Exercise 1 in this audit; no procedure/material assertions for 2–6 |
| NCERT-CIET Grade 11 activity index | Exercise 2 morphology link, Exercise 3 animal external-features link, and a mitosis link whose exercise field is shown as Exercise 1 | INDEX CONTENT INSPECTED | DIKSHA viewer returned an application shell; linked content body and licence not inspected |
| SCERT Delhi circular F 3(2)/ET/ICT in Education/DIKSHA/SCERT/2025-26/2043-52 (13 May 2025) | Annexure lists selected Class XI Biology OLABS resources, including row 212 external features of animals | SECONDARY ADMINISTRATIVE CROSS-CHECK | Selected list only; not exhaustive NCERT manual coverage or proof that omitted resources do not exist |
| DIKSHA content IDs | do_3145708682307010561283; do_431395072902686310419344; do_31457142767262105613385 | IDENTIFIERS DISCOVERED | Per-resource metadata, version, creator, language and licence remain uninspected |

Crosswalk and raw comparison: docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_CROSSWALK.md

DIKSHA's official FAQ lists licence families accepted on the platform, but this is not the licence of any specific resource. Inspect each individual item's metadata before reusing content or assets. See https://api.diksha.gov.in/help/faqs/user/index.html.


## NCERT Class XI Biology legacy chapter-wise exercise sources (2026-11-01)

Current 2025–26 contents reference: https://www.ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf  
Legacy chapter PDFs below show 23-04-2018 stamps. These are official NCERT-hosted source files, but their procedure text has not been matched page-by-page to the current manual revision.

| Source ID | URL | Review state |
|---|---|---|
| NCERT_XI_BIO_EX02_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm302.pdf | Body text + screenshot inspected |
| NCERT_XI_BIO_EX03_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm303.pdf | Body text + screenshot inspected |
| NCERT_XI_BIO_EX04_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm304.pdf | Text inspected; screenshot retrieval failed |
| NCERT_XI_BIO_EX05_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm305.pdf | Partial text only; later retrieval returned HTTP 502 |
| NCERT_XI_BIO_EX06_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm306.pdf | Body text + screenshot inspected |

Source-specific safety flags recorded in docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_DETAILED_AUDIT.md: fungal culture/spore exposure; formalin-preserved animal specimens; corrosive/chromium(VI) maceration chemistry; human cheek/blood sampling with needle/lancet; and permanent-slide mitosis observation. These are not approved real-world learner instructions.

NCERT rights notices apply; use original explanations/assets or obtain permission. Do not copy diagrams, tables or manual text into LabVerse.


## Current-edition NCERT Class XI Biology exercise PDFs — Exercises 2–6 (2026-11-01)

Direct official current-host PDF sources; PDF text carries 2025–26 markers:

| Source ID | URL | Page count / evidence | Status |
|---|---|---|---|
| NCERT_XI_BIO_EX02_2025_26 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm302.pdf | 8 pages, text extracted; first two pages visually inspected | CONTENT_INSPECTED |
| NCERT_XI_BIO_EX03_2025_26 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm303.pdf | 14 pages, text extracted; first page visually inspected | CONTENT_INSPECTED |
| NCERT_XI_BIO_EX04_2025_26 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm304.pdf | 3 pages, text extracted; screenshot returned HTTP 502 | CONTENT_INSPECTED / visual audit pending |
| NCERT_XI_BIO_EX05_2025_26 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm305.pdf | 6 pages, full text extracted; screenshot returned HTTP 502 | CONTENT_INSPECTED / visual audit pending |
| NCERT_XI_BIO_EX06_2025_26 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm306.pdf | 3 pages, text extracted; first two pages visually inspected | CONTENT_INSPECTED |

The corresponding 2018 n20-host copies remain legacy sources, not the primary text for current audit. The current manual cover states ALL RIGHTS RESERVED. No redistribution of NCERT prose, figures, tables or diagrams is authorised by public access alone.

The exercise content raises safety flags that must remain attached to source records: microbial/fungal culture/spore exposure (EX02); formalin-preserved animal specimens (EX03); corrosive/chromium(VI) maceration chemistry and heating (EX04); human cheek/blood sampling, lancet/needle and animal tissue handling (EX05). LabVerse learner workflows remain virtual/pre-prepared only unless a separate qualified institutional safety approval is documented.


## NCERT Class XII Biology Exercises 4–6 — official-host sources (2026-11-01)

NCERT Laboratory Manuals index: https://ncert.nic.in/science-laboratory-manual.php

| Source ID | URL | Evidence inspected | Limitation |
|---|---|---|---|
| NCERT_XII_BIO_EX04_EX05 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm203.pdf | Four-page chapter file; text extracted for Exercise 4 and Exercise 5 | Page-image screenshot retrieval returned HTTP 502; publication/revision date not confirmed |
| NCERT_XII_BIO_EX06 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm204.pdf | Five-page chapter file; text extracted and selected page images inspected | Publication/revision date not confirmed from accessible pages |

The NCERT manual index groups Class XII Biology resources by Exercise 4 & 5 and Exercise 6. The NCERT-CIET Grade 12 index separately lists Exercise 4 gametogenesis, Exercise 5 female gametophyte development and Exercise 7 stages of meiosis. Use the actual manual exercise labels and preserve CIET metadata as a separate layer.

Exercise 6 includes root-tip preparation reagents/heat; store a hazard record and keep it virtual/pre-prepared only. Do not turn the source method into real chemical instructions.


## Science-claim review sources — NCERT Biology Exercise 2 (2026-11-01)

| Source | Claim/role | Evidence status |
|---|---|---|
| NCERT Class XI Biology manual, Exercise 2, 2025–26 label | Source statement about bacterial mesosomes and historical Monera classification | Curriculum source; retain literal wording, do not treat as standalone scientific validation |
| Ebersold, Cordier & Lüthy (1981), *Bacterial mesosomes: method dependent artifacts*, DOI 10.1007/BF00527066; https://pubmed.ncbi.nlm.nih.gov/6796029/ | Classical mesosome-like structures associated with conventional EM preparation in *Bacillus cereus* | Peer-reviewed primary study; supports method-dependent artifact caution |
| Pilhofer et al. (2010), *Bacterial TEM: new insights from cryo-microscopy*, DOI 10.1016/S0091-679X(10)96002-0; https://pubmed.ncbi.nlm.nih.gov/20869517/ | Dehydration/metal stains can generate misleading artifacts; cryo-EM preserves near-native structures | Peer-reviewed methods review |
| NCBI Medical Microbiology, “Structure”; https://www.ncbi.nlm.nih.gov/books/NBK8477/ | Notes uncertainty about mesosome interpretation/function and possible fixation artifacts | Scientific textbook reference |
| Woese, Kandler & Wheelis (1990), *Towards a natural system of organisms*, DOI 10.1073/pnas.87.12.4576; https://pubmed.ncbi.nlm.nih.gov/2112744/ | Molecular basis and proposal of a domain rank with Archaea, Bacteria and Eucarya | Foundational primary taxonomy paper |
| Current Biology (2020), “Evolution: Two Domains of Life or Three?”; https://www.sciencedirect.com/science/article/pii/S0960982220300105 | Reviews evidence that eukaryotes arose from within Archaea | Phylogenetic model context; preserve framework as a versioned scientific decision |
| Nature (2024), “The emerging view on the origin and early evolution of eukaryotic cells”; https://www.nature.com/articles/s41586-024-07677-6 | Reviews current research on eukaryotic origins/Asgard archaeal relatives | Recent review; not an all-purpose taxonomic authority |

All of these are research references only; the content remains awaiting a domain expert review. See docs/PHASE_1_SCIENCE_CLAIM_REVIEW_BIO_EX02.md.


## NCERT Class XII Biology additional chapter sources (2026-11-01)

| Source ID | URL | Exercise(s) | Evidence state / limitation |
|---|---|---|---|
| NCERT_XII_BIO_EX08_EX09 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm206.pdf | 8–9 | Five-page PDF; text inspected; screenshot 502 |
| NCERT_XII_BIO_EX10 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm207.pdf | 10 | Four-page PDF; text inspected; screenshot 502 |
| NCERT_XII_BIO_EX12_EX13 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm209.pdf | 12–13 | Four-page PDF; text inspected; EX12 first page visually inspected |
| NCERT_XII_BIO_EX14 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm210.pdf | 14 | Four-page PDF; text inspected; first page visually inspected |
| NCERT_XII_BIO_EX15 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm211.pdf | 15 | Six-page PDF; text inspected; first page visually inspected |
| NCERT_XII_BIO_EX16_TO_20 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm212.pdf | 16–20 | Sixteen-page PDF; EX16 body inspected; later individual exercise audit incomplete; first page visually inspected |
| NCERT_XII_BIO_EX21 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm213.pdf | 21 | Eight-page PDF; text inspected; screenshot timed out |
| NCERT_XII_BIO_EX22_TO_24 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm214.pdf | 22–24 | Five-page PDF; text inspected; screenshot 502 |
| NCERT_XII_BIO_EX25 | https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm215.pdf | 25 | Three-page PDF; text inspected; first page visually inspected |

The official NCERT-host files do not expose a clear publication/reprint date in the retrieved chapter pages. Their precise revision date remains NOT_CONFIRMED. Exercise 7 (lelm205), Exercise 11 (lelm208) and Investigatory Project Work (lelm216) did not retrieve successfully. Do not infer content for these files from filename sequence.

See docs/PHASE_1_NCERT_XII_BIOLOGY_EXERCISES_8_25_AUDIT.md.


## NCERT Class XII Biology additional chapter and project sources (2026-11-01)

| Source ID | URL | Content inspected | Revision / limit |
|---|---|---|---|
| NCERT_XII_BIO_EX11_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm208.pdf | Six-page Exercise 11 pedigree chart text | 21/04/2018 stamp; current-edition body match not confirmed |
| NCERT_XII_BIO_EX17_TO_20_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm212.pdf | Exercise 17, 18, 19 and 20 body sections located and text-inspected | 21/04/2018 stamp; current-edition match not confirmed |
| NCERT_XII_BIO_PROJECT_WORK_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm216.pdf | Project guidance, reporting format and example project areas | 21/04/2018 stamp; current-edition match not confirmed |

See docs/PHASE_1_NCERT_XII_BIOLOGY_EXERCISES_11_17_20_PROJECT_AUDIT.md. Do not mark these historical chapter bodies as confirmed 2025–26 revisions.


## NCERT Class XII Biology legacy chapter evidence and kit-index recheck (2026-11-01)

| Source ID | Official/discovery URL | Evidence read | Current-use status / limitation |
|---|---|---|---|
| NCERT_CIET_GRADE12_INDEX_2026 | https://ciet.ncert.gov.in/activity/grade12 | Current CIET Grade 12 index page; Biology rows include pedigree, pollen, gametophyte, genetics, adaptations, soil/water, SPM and quadrat entries | INDEX_ONLY; duplicated/contradictory exercise labels preserved; index is not the RBSE syllabus |
| NCERT_XII_BIO_EX11_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm208.pdf | Six-page text extraction; pedigree chart construction/analysis; visible stamp 21/04/2018 | LEGACY BODY INSPECTED; 2025–26 match NOT_CONFIRMED |
| NCERT_XII_BIO_EX17_TO_20_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm212.pdf | Exercise 17 plant adaptations, 18 animal adaptations, 19 soil/water pH and 20 water turbidity body text; visible stamp 21/04/2018 | LEGACY BODY INSPECTED; 2025–26 match NOT_CONFIRMED |
| NCERT_XII_BIO_PROJECT_WORK_LEGACY | https://n20.ncert.org.in/pdf/publication/sciencelaboratorymanuals/classXII/biology/lelm216.pdf | Investigatory project framework, planning and report structure; visible stamp 21/04/2018 | LEGACY BODY INSPECTED; not a list of RBSE-prescribed project topics; 2025–26 match NOT_CONFIRMED |
| NCERT_BIO_KIT_MANUALS_INDEX | https://ncert.nic.in/division/dek/kit-manuals.php?ln=en | Official NCERT page lists “Manual of Secondary Stage Biology Laboratory Kit for Grades 11th and 12th” (English) | LISTING_CONFIRMED; full Biology kit manual bytes/page text not inspected |
| NCERT_BIO_KIT_SPECIFICATIONS_INDEX | https://ncert.nic.in/division/dek/specification_documents.php?ln=en | Official NCERT index lists separate Secondary Stage Biology Kit with Microscope and without Microscope (Grades 11 & 12) | VARIANTS_CONFIRMED; downloadable specification attachment contents, item counts and revision not inspected |
| NCERT_PUBLICATIONS_CATALOGUE_13163 | https://ncertbooks.ncert.gov.in/static/NCERT%20GENERAL.pdf | Catalogue lists code 13163, Manual of Higher Secondary Biology Laboratory Kit | METADATA_CONFIRMED; catalogue entry is not the item-level manual/specification |

The source bodies above were accessed via NCERT's legacy n20 host. Their 2018 stamp is retained as source-version metadata; do not silently promote them to current NCERT edition. The NCERT kit manual/specification pages are official listing evidence only, not an item-level procurement audit.


## Crossref REST request-type limit update (2026-11-01)

Crossref's current general access page describes Public pool 5 requests/sec (concurrency 1) and Polite pool 10 requests/sec (concurrency 3), but the 21 July 2026 Crossref announcement makes an important request-type distinction:
- Single-record DOI lookups: 5/sec Public, 10/sec Polite.
- Multi-record/list/query requests: 1/sec Public, 3/sec Polite.
- Clients should read `x-rate-limit-limit`, `x-rate-limit-interval`, `x-rate-limit-type`, and `x-concurrency-limit` from live responses; 429 requires pause/backoff.

Primary policy references:
- https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication
- https://community.crossref.org/t/refining-rest-api-limits-for-improved-stability-and-reliability/16137

The connector implementation must use header-driven throttling and separate endpoint classes. This replaces any interpretation of the general pool limit as a single global QPS applicable to every request. Policy review only; connector is not implemented/tested.


## NCERT Biology kit manual — full secondary transcript evidence (2026-11-01)

| Source ID | URL | Evidence inspected | Status / limitation |
|---|---|---|---|
| NCERT_BIO_KIT_MANUAL_SECONDARY_TRANSCRIPT | https://www.scribd.com/document/870673944/Manual-Secondary-Stage-Biology-Laboratory-Kit-11-12-En | Readable 141-page transcript; front matter shows ISBN 978-93-5292-528-5, March 2018 first edition, reprints October 2018 / January 2019 / March 2020; contents list XI exercises 1–34 and XII 35–60; item schedule lists 84 item rows, 7 acrylic specimens, 35 permanent slides, VA-1 to VA-50 and 58 school-managed reagent entries | SECONDARY_FULL_TEXT_INSPECTED / NOT PRIMARY VERIFIED; quantity, OCR and specification matching still pending |
| NCERT_BIO_KIT_MANUAL_OFFICIAL_LISTING | https://ncert.nic.in/division/dek/kit-manuals.php?ln=en | Official NCERT page lists the Grade XI/XII Secondary Stage Biology Laboratory Kit manual in English | OFFICIAL_LISTING_CONFIRMED; page returned 502 to full open in this research route |
| NCERT_BIO_KIT_SPECIFICATIONS_INDEX | https://ncert.nic.in/division/dek/specification_documents.php?ln=en | Official index lists Biology kit with microscope and Biology kit without microscope for Grades XI/XII | OFFICIAL_VARIANTS_CONFIRMED; attachments are not yet inspected |

The transcript's own front matter says ALL RIGHTS RESERVED and that the manual is distributed only with its kit. The chemistry list is explicitly school-managed/not supplied, and a blade entry is explicitly not supplied. Treat the full transcript as provisional evidence for inventory planning only; do not redistribute its prose/figures or label it official primary evidence.
## NCERT official School Kits brochure — higher-secondary Biology category evidence (2026-11-01)

| Source ID | URL | Evidence inspected | Status / limit |
|---|---|---|---|
| NCERT_SCHOOL_KITS_BROCHURE | https://www.ncert.nic.in/division/dek/pdf/NCERT_Educational_School_Kit-Enhancing-UN278.pdf | Official brochure, printed p. 8: HSBLK purpose for Classes XI/XII and broad categories (instruments, glassware, compound microscope, permanent slides, stains, cards); text and page image inspected | CONTENT_INSPECTED; no publication/reprint date identified in retrieved PDF text; not an item-level bill of materials; not evidence for exact variant contents |

The NCERT kit index separately lists Biology-with-microscope and Biology-without-microscope variants. Keep the microscope item conditional on the selected variant. The brochure photograph is contextual only and must not be used to infer item IDs or quantities. Full manual/specification attachment contents remain NOT_INSPECTED. See `docs/PHASE_1_NCERT_OFFICIAL_SCHOOL_KITS_BROCHURE_AUDIT.md`.


## NCERT Higher Secondary Physics kit manual — primary-host text inspection (2026-11-01)

| Source ID | URL | Evidence inspected | Status / limit |
|---|---|---|---|
| NCERT_XI_XII_PHYSICS_KIT_MANUAL_13164 | https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf | NCERT-hosted PDF front matter: code 13164, ISBN 978-93-5292-653-4, October 2018 first edition, reprints through August 2024; searchable item schedule 1–106 and experiment descriptions | CONTENT_INSPECTED via text; PDF screenshot endpoint returned HTTP 502; not a procurement BOM; all-rights-reserved |
| NCERT_XI_XII_KIT_SPECIFICATION_INDEX | https://ncert.nic.in/division/dek/specification_documents.php?ln=en | Official Grade XI–XII listing for Micro Scale Chemistry, Biology with/without microscope, Physics and Molecular Model kit families | INDEX_CONFIRMED; actual attachment payloads not inspected |
| NCERT_XI_XII_KIT_MANUAL_INDEX | https://ncert.nic.in/division/dek/kit-manuals.php?ln=en | Revised English manual listings for Physics, Biology and Micro Scale Chemistry Grade XI/XII kits | INDEX_CONFIRMED; Biology/Chemistry complete kit-manual payloads remain uninspected in this pass |
| GEM_PHYSICS_KIT_BID_2026_03 | https://docs.primetenders.com/documents/tender/2026/03/31/12491799102179779884/GeM-Bidding-9125140.pdf | 15-03-2026 GeM bid for six Secondary Stage Physics kits states 105 items per kit and quantities as per an attached list | PROCUREMENT_CROSSCHECK_ONLY; attached item list not inspected and not the NCERT master spec |

The Physics manual schedule enumerates 106 rows. The separate GeM bid record says 105 items. Preserve this as an unresolved attachment/version discrepancy; do not infer which row is omitted or collapse a compound entry to force agreement.

A tender mirror page lists candidate attachment filenames for Physics, Micro Scale Chemistry and Biology without microscope, but those file payloads and signatures were not retrieved. Record these as discovery locators only, not as official content-inspected sources.

## GeM tender records exposing repeated NCERT kit attachment filenames (2026-11-01)

| Record | Products | Attachments displayed | Evidence / limit |
|---|---|---|---|
| GEM/2026/B/7498690 (tender 9283608), Etah | Physics, Micro Scale Chemistry, Biology without microscope | Physics file 11.63 MB; MSCL file 18.89 MB; Biology-without-microscope file 17.60 MB | Third-party tender page displays filenames/sizes; bytes not downloaded or hashed |
| GEM/2026/B/7413934 (tender 9188847), Fatehpur | Physics, Biology without microscope, Micro Scale Chemistry | Same three filenames and same displayed sizes | Independent tender-record occurrence; file identity still unverified |

URLs:
- https://tenderkart.in/tender/9c2d3976-3ef0-415d-baef-16dbe9826d30
- https://tenderkart.in/tender/04da282b-7f7e-4a80-978c-6afc1dd7af28

This is procurement discovery metadata, not proof that the PDF bytes are official NCERT files. Before using the content, obtain the actual files, calculate SHA-256, inspect PDF metadata/revision and compare the attachment contents to the official NCERT link targets. Biology with microscope is not present in these two records.


## User-supplied NCERT kit specification copies — OCR inspected (2026-11-01)

| Source ID | Uploaded file | Source content inspected | Verification state / limitation |
|---|---|---|---|
| NCERT_MSCL_SPEC_UPLOAD_2026_11_01 | MSCL_copy.pdf | NCERT-branded Micro Scale Chemistry Laboratory Kit Grades 11 & 12 specification; 65 scanned pages; 55 index rows incl. one documentation credit; OCR item specifications for rows 1–54 | USER_UPLOADED_COPY / OCR_INSPECTED; SHA-256 recorded; exact identity to official NCERT-hosted attachment not yet matched |
| NCERT_BIO_WITH_MICROSCOPE_SPEC_UPLOAD_2026_11_01 | SSBK_with_Microscope_copy.pdf | NCERT-branded Secondary Stage Biology Laboratory Kit (with microscope), Grades 11 & 12; 199 scanned pages; 177 index rows incl. one documentation credit; OCR detailed text rows 1–83 and sample visual inspection of card/specimen/slide/microscope pages | USER_UPLOADED_COPY / PARTIAL_PAGE_AUDIT; SHA-256 recorded; remaining 49 visual cards, 6 embedded specimens and 34 slides require individual-page review; exact identity to official NCERT-hosted attachment not yet matched |

Audit and registers:
- docs/PHASE_1_1_UPLOADED_PDF_ANALYSIS.md
- docs/PHASE_1_1_MSCL_SPECIFICATION_ITEM_REGISTER.md
- data/catalogues/ncert_mscl_spec_items.csv
- docs/PHASE_1_1_BIOLOGY_WITH_MICROSCOPE_SPECIFICATION_REGISTER.md
- data/catalogues/ncert_biology_with_microscope_spec_items.csv

Important source facts:
- Both MSCL and Biology-with-microscope wire-gauze rows explicitly specify an asbestos centre; retain as a source hazard, not a LabVerse real-world asset.
- MSCL includes a mercury-filled thermometer; virtual/digital sensor preferred.
- The Biology-with-microscope index includes a student microscope as row 176 even though the index heading says “Permanent Slide”; the body text and image identify a microscope. Preserve the discrepancy.


## User-supplied NCERT kit specification copies — extended audit (2026-11-01)

The user uploaded two NCERT-branded specification copies. OCR and page-image inspection were required because the PDFs had no useful text layer.

| Source ID | Uploaded file | Structural finding | Status |
|---|---|---|---|
| NCERT_MSCL_SPEC_UPLOAD_2026_11_01 | MSCL_copy.pdf | 65 pages; 55 index rows; 54 kit/manual entries plus one documentation-credit row; specification rows represented in CSV | USER_UPLOADED_COPY / OCR_INSPECTED; SHA-256 recorded; origin not byte-authenticated |
| NCERT_BIO_WITH_MICROSCOPE_SPEC_UPLOAD_2026_11_01 | SSBK_with_Microscope_copy.pdf | 199 pages; 177 index rows; 83 first-section entries, 50 cards, 7 specimens, 35 slides, one student microscope and one documentation-credit row | USER_UPLOADED_COPY / PARTIAL_PAGE_AUDIT; first-section specifications OCR-transcribed; remaining card/specimen/slide pages primarily index-derived |

Associated files:
- docs/PHASE_1_1_UPLOADED_PDF_ANALYSIS.md
- docs/PHASE_1_1_MSCL_SPECIFICATION_ITEM_REGISTER.md
- data/catalogues/ncert_mscl_spec_items.csv
- docs/PHASE_1_1_BIOLOGY_WITH_MICROSCOPE_SPECIFICATION_REGISTER.md
- data/catalogues/ncert_biology_with_microscope_spec_items.csv

Both specifications explicitly contain asbestos-centred wire gauze. The uploaded MSCL specification also contains a mercury-filled thermometer. Flag these as source hazards; no asbestos or mercury real-world use is to be exposed to learners. The Biology row 176 index label/body mismatch is retained rather than silently corrected.


## Official NCERT attachment retrieval re-check — 2026-11-08

The official Grade XI–XII specification index was reopened and all four exact link targets were followed:
- MSCL: https://ncert.nic.in/division/dek/pdf/MSCL.pdf
- Biology with microscope: https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf
- Biology without microscope: https://ncert.nic.in/division/dek/pdf/SSBK_without_Microscope.pdf
- Physics: https://ncert.nic.in/division/dek/pdf/SSPhyLaboratoryKit.pdf

The four direct PDF follows returned HTTP 502 in this pass. A separate container download attempt for the Biology-without-microscope attachment failed. No new PDF bytes, SHA-256 hashes, metadata or page content were obtained.

Registry status:
- Official index listing: CONFIRMED.
- Attachment byte retrieval: RETRIEVAL_BLOCKED (2026-11-08).
- Existing uploaded MSCL and Biology-with-microscope copies: USER_UPLOADED_COPY / NOT_BYTE_AUTHENTICATED.
- Biology-without-microscope and Physics procurement attachment bytes: NOT_RETRIEVED.

Do not equate filename, listing, file size or third-party tender locator with proof of exact NCERT attachment identity. See docs/PHASE_1_1_OFFICIAL_RETRIEVAL_RECHECK_2026_11_08.md.
