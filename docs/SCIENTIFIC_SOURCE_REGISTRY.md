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
