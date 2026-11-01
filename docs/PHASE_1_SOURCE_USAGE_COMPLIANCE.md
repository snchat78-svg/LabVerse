# Phase 1 — Scientific Source Usage, Licensing and Compliance Audit

Audit date: 2026-10-31  
Status: DOCUMENTATION REVIEW / PRE-INTEGRATION. No API connectors have been implemented or load-tested.

## Source-by-source rules

| Source | Role | Verified access/use facts | Required LabVerse handling | Current status |
|---|---|---|---|---|
| PubChem PUG REST | Chemical identity, structures, contributed properties/annotations, spectra and linked data | Official PUG REST policy asks users/apps not to exceed 5 requests per second; citation guidance says use record attribution/original contributing source and cite the PubChem service | Rate-limited adapter, caching, record ID, contributor attribution, retrieval date, property-level source and version; no arbitrary unbounded bulk querying | POLICY DISCOVERED; integration not tested |
| NIST Chemistry WebBook SRD 69 | Thermochemical, thermophysical and ion energetics reference data; spectra | WebBook describes data compiled by NIST SRD program and includes a disclaimer that NIST uses best efforts but gives no warranty against errors/omissions | Store species identifier, property, units, dataset/source citation, retrieval date and limitations; cross-check important values | SOURCE/METHOD DISCOVERED; integration not tested |
| NIST CODATA constants | Fundamental physical constants and conversion factors | NIST version history identifies 2022 CODATA values, Web Version 9.0, as latest published in this audit; 2026 adjustment is the next scheduled update and data cut-off is 31 Dec 2026 | Pin constant set/version to each calculation. Monitor for a new adjustment; never silently change constants in saved work | VERSION 2022 IDENTIFIED; update monitoring required |
| NIST public information | NIST reference data/standards | NIST general copyright notice says material not marked copyrighted is public information and may be copied/distributed, with appropriate credits; individual datasets/software may have additional terms | Check the individual resource notice before use; keep byline/citations and disclaimers | GENERAL POLICY READ; per-dataset checks remain |
| NCBI E-utilities | PubMed, PMC and Entrez database metadata/records | NCBI policy: default no more than 3 requests/second; API key allows 3–10 requests/second; above 10 needs request/approval. NCBI advises identifying/registering the tool and following specific service policies | Set conservative global throttling, identify software/contact where policy requires, cache responses and respect database-specific rules | POLICY DISCOVERED; integration not tested |
| NCBI Datasets API | Genome/gene/taxonomy data packages | Official documentation states default 5 requests/second; API key increases to 10 requests/second | Use accession/version identifiers, retain assembly/source metadata, rate-limit and avoid using an API key in public client code | POLICY DISCOVERED; integration not tested |
| NCBI Taxonomy | Organism taxonomy/lineage/status | NCBI describes taxonomy as a curated classification system with taxon IDs, lineage and status-check resources | Keep taxon ID and retrieval date; names/status can change; avoid treating taxonomy record as an identification from an image | SOURCE DISCOVERED; integration not tested |
| GBIF occurrence API | Biodiversity and occurrence observations | Each occurrence/dataset has a licence selected among CC0, CC BY or CC BY-NC. API rate may be limited dynamically based on server load; heavy queries should use download API and cite the download DOI | Store occurrence/dataset IDs, coordinates uncertainty, date, basis of record, dataset DOI, licence and attribution; filter CC BY-NC if the product's distribution model may be commercial | TERMS/API POLICY DISCOVERED; integration not tested |
| Crossref REST API | DOI and scholarly publication metadata | Current Crossref notice (21 July 2026) separates request types: single-record DOI lookup 5 requests/sec Public / 10 Polite; multi-record/list/query 1 Public / 3 Polite. General access page lists Public pool 5 with concurrency 1 and Polite 10 with concurrency 3; live response headers carry request-specific rate, type and concurrency. Some abstracts may be copyrighted. | Send mailto + identifying User-Agent; inspect x-rate-limit-limit, x-rate-limit-interval, x-rate-limit-type and x-concurrency-limit; use route-specific throttling, cache, back off on 429 and preserve DOI/licence/update metadata. Do not assume abstract reuse rights. | POLICY DISCOVERED; 2026 request-type guidance reviewed; integration not tested |
| Europe PMC REST | Literature discovery, abstracts, open full text where available, citation/references | Europe PMC states it exposes metadata and access to a subset of full text; PMC warns not all articles are available for text mining/reuse and each article licence controls reuse | Distinguish metadata/abstract/full text; retrieve via permitted APIs only; check per-article licence and open-access subset status | API DISCOVERED; per-article licensing workflow needed |
| NCERT manuals/CIET | Curriculum and learning resource sources | NCERT manuals opened in this audit include all-rights-reserved notices; CIET index links activity records and DIKSHA content | Use for bibliographic/source mapping; create original teaching text, diagrams and 3D models or obtain permission. Do not bulk copy manual pages/figures | INDEX/MANUALS INSPECTED; rights for derived reuse not granted |

## Core compliance rules for connector implementation

1. Never commit private API keys or credentials to the public repository or client bundle.
2. Use a source-specific adapter with timeout, retry/backoff, concurrency and request-rate limits.
3. Cache records with retrieval date and source version; show stale/cached status when offline.
4. Preserve identifiers: DOI, PubChem CID/SID, NCBI accession/taxon ID, GBIF occurrence/dataset ID.
5. Respect per-record/per-dataset licences; do not infer a blanket licence from the website being public.
6. Distinguish metadata, abstract, open full text and restricted full text.
7. Attribute the original data contributor where applicable, not only the aggregator.
8. Store units, conditions and known limitations with reference values.
9. Record a source update without silently rewriting saved experiment results.
10. Never claim a reference database itself validates an experimental outcome; its record is one evidence input.

## Implementation decision

Initial learning runtime should not make continuous research-source calls. Curated, versioned content packs will carry the minimum reviewed data required for offline practicals. Research Studio can query source APIs when online and use caching with provenance.

No source is marked CONNECTOR_TESTED or VERIFIED_FOR_USE by this audit. Phase 1 compliance research is documented; technical integration and per-record use review remain future tasks.


## Crossref REST — request-type limits update (2026-11-01)

The general Crossref access page lists Public pool 5 requests/sec with concurrency 1 and Polite pool 10 requests/sec with concurrency 3, and explicitly instructs clients to read the live response headers for rate and concurrency limits.

A Crossref forum announcement dated 21 July 2026 clarifies that rate limits differ by request type:
- Single-record lookup (for example, one DOI): Public 5 requests/sec; Polite 10 requests/sec.
- Multi-record/list/query requests using filters: Public 1 request/sec; Polite 3 requests/sec.
- Headers: `x-rate-limit-limit`, `x-rate-limit-interval`, `x-rate-limit-type`; concurrency is still exposed as `x-concurrency-limit`.
- HTTP 429 means the client has been rate-limited and must pause/back off.

Sources:
- Official access/authentication and general limit documentation: https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication (page last updated 2025-10-16 in the page footer).
- Crossref API request-type announcement, 21 July 2026: https://community.crossref.org/t/refining-rest-api-limits-for-improved-stability-and-reliability/16137

**Implementation acceptance rule:** do not hard-code one global Crossref QPS. Read all rate/concurrency headers on each response, distinguish single-record vs multi-record routes, use the conservative limits above when headers are absent, apply exponential/backoff on 429, cache repeated responses, and test behaviour separately for each endpoint class before labelling the connector CONNECTOR_TESTED.

This remains policy documentation only. No API calls, connector code or load tests were added to LabVerse in this update.
