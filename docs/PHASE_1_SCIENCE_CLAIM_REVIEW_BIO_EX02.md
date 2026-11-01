# Phase 1 — Science Claim Review: NCERT Class XI Biology Exercise 2

Review date: 2026-11-01  
Status: SOURCE CLAIMS PRESERVED / SCIENTIFIC CANONICALISATION REQUIRED  
Scope: NCERT Class XI Biology Laboratory Manual, Exercise 2 (representative bacteria, fungi and plant groups).

## 1. Why this review exists

The NCERT Class XI Biology manual is a curriculum source. It establishes what the manual teaches and what learners may be asked to observe, but a source statement is not automatically a currently accepted biological claim. LabVerse needs two separate records:

1. **Source statement** — what the named source literally states, with edition, page, URL and retrieval date.
2. **Scientific claim** — the independently reviewed interpretation selected for the app's scientific model, with evidence, confidence, taxonomic framework and review status.

Do not silently edit the textbook record. Do not silently promote every textbook sentence into the canonical science layer.

## 2. Claim A — bacterial mesosomes

### Source statement
The NCERT Class XI Biology Exercise 2 text describes bacterial mesosomes as membrane infoldings/structures and treats them as present in bacterial cells. The 2025–26 manual source is:
https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm302.pdf

Store this as:
- source_claim_id: NCERT-XI-BIO-EX02-MESOSOME-SOURCE
- source_literal_status: SOURCE_STATEMENT_ONLY
- source_edition: NCERT Class XI Biology Manual, online label 2025–26
- canonical_science_status: SCIENTIFIC_REVIEW_REQUIRED
- learner_rendering: DO_NOT_PRESENT_AS_UNIVERSAL_BACTERIAL_ORGANELLE

### Independent evidence

1. Ebersold, Cordier and Lüthy (1981), *Bacterial mesosomes: method dependent artifacts*, Archives of Microbiology 130:19–22, DOI 10.1007/BF00527066. Their study of *Bacillus cereus* concluded that classical mesosome-like structures seen after conventional electron-microscopy preparation arose as preparation artifacts; cryofixation/freeze-substitution did not show the same structures. PubMed: https://pubmed.ncbi.nlm.nih.gov/6796029/

2. Pilhofer et al. (2010), *Bacterial TEM: new insights from cryo-microscopy*, Methods in Cell Biology 96:21–45, DOI 10.1016/S0091-679X(10)96002-0. The review explains that dehydration and metal-staining methods can generate misleading ultrastructural artifacts and that cryo-EM preserves cells in a near-native frozen-hydrated state. PubMed: https://pubmed.ncbi.nlm.nih.gov/20869517/

3. The NCBI Bookshelf chapter *Structure* in Medical Microbiology says that thin-section mesosomes may arise from membrane perturbation and fixation artifacts; it also records that there is no satisfactory evidence for a unique biochemical or physiological function and that agreement on the interpretation has historically not been complete. https://www.ncbi.nlm.nih.gov/books/NBK8477/

### LabVerse decision

- Do not render “mesosome” as a universal, independently established bacterial cell organelle or assign it a canonical function.
- Keep the NCERT statement in the source transcript with its source edition/page reference.
- In the scientific model, show the bacterial cytoplasmic membrane without a generic mesosome feature by default.
- If an educational comparison is useful, show a separately labelled “historical mesosome interpretation / fixation-dependent appearance” panel, with the microscopy preparation method visible and a warning that classical mesosome structures are widely regarded as preparation artifacts.
- A specific membrane invagination observed with a defined organism and near-native imaging method must be evaluated as its own source-specific structure; do not automatically call every invagination a mesosome.
- Status stays SCIENTIFIC_REVIEW_REQUIRED until a Biology/microbiology reviewer signs off the specific educational wording.

This is a conservative content decision, not a claim that bacterial membranes can never form any invaginations.

## 3. Claim B — Kingdom Monera and taxonomic framework

### Source statement
The NCERT chapter uses the traditional school classification label “Kingdom Monera” for prokaryotic organisms. Store the wording as a versioned curriculum statement rather than converting it silently to a different taxonomic rank.

### Independent evidence and interpretation

Woese, Kandler and Wheelis (1990), *Towards a natural system of organisms: proposal for the domains Archaea, Bacteria, and Eucarya*, PNAS 87(12):4576–4579, DOI 10.1073/pnas.87.12.4576, proposed a domain rank above kingdom and three primary groupings based on molecular comparisons: Bacteria, Archaea and Eucarya. PubMed: https://pubmed.ncbi.nlm.nih.gov/2112744/

The phylogenetic relationship between Archaea and Eukarya has continued to develop. A Current Biology review (2020) discusses evidence that Eukarya arose from within Archaea, challenging a strictly separate three-branch tree interpretation: https://www.sciencedirect.com/science/article/pii/S0960982220300105

A 2024 Nature review surveys the emerging view of eukaryotic origin and the role of Asgard archaeal lineages: https://www.nature.com/articles/s41586-024-07677-6

### LabVerse decision

- Preserve “Kingdom Monera” as a historical/curriculum label attached to the NCERT source and its academic session.
- Do not use “Monera” as an unversioned, universal canonical taxon for all modern scientific records.
- Store the taxonomic framework alongside each taxonomy assertion, for example a curriculum framework, a named three-domain framework, or a separately reviewed current phylogenomic classification.
- Record the source and version/date of any mapping of a Monera example into Bacteria or Archaea. Do not assume every organism formerly placed in Monera maps into Bacteria; Archaea is a distinct lineage in domain-based systems.
- Do not present the three-domain framework as resolving every phylogenetic question. Taxonomic framework selection is an explicit versioned scientific decision and may be different for different curriculum packs.

## 4. Required claim/evidence schema

Every scientific claim sourced from a learning manual should have these fields:

| Field | Purpose |
|---|---|
| claim_id | Stable LabVerse claim identifier |
| source_id / source_claim_id | Exact source and raw statement identifier |
| source_literal | Source wording retained without silent correction |
| source_edition / source_page / source_url | Reproducible provenance |
| scientific_interpretation | Separately authored interpretation |
| supporting_sources[] | DOI/URL, publisher, date and evidence summary |
| taxonomic_framework_id | Framework used for the classification claim, if relevant |
| evidence_method | e.g. conventional TEM, cryo-EM, sequence phylogeny, prepared light microscopy |
| confidence | REVIEWED / PROVISIONAL / CONTESTED / OUTDATED / UNKNOWN |
| review_state | NEEDS_REVIEW / REVIEWED / APPROVED / REJECTED |
| display_policy | What the learner UI may or may not display |
| reviewer / reviewed_at | Human scientific accountability |
| supersedes / conflicts_with | Versioned claim history; never delete conflicting source statements |

## 5. Acceptance checks before publication

1. The manual's source statement is preserved exactly enough to identify its meaning and edition; source text/figures are not copied beyond permitted quotation.
2. A source statement and canonical scientific interpretation are stored as different records.
3. Any mesosome display exposes the imaging method and its historical/contested status; no unqualified universal-organelle label is shown.
4. Taxonomic records carry a named framework and source version/date; “Monera” is not silently rewritten or used as an unversioned current taxon.
5. Conflicting or uncertain claims render NEEDS_REVIEW and do not feed automatic quiz scoring as unquestionable scientific facts.
6. An expert reviewer approves the final learner-facing wording before VERIFIED_FOR_USE.

No code or schema implementation has been created by this document. These are Phase 1 content-contract requirements.
