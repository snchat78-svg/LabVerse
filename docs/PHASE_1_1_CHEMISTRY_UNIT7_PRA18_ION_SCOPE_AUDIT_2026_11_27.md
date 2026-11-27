# Class XI Chemistry PRA-18 — Unit 7 ion-scope and inventory gap audit

Audit date: 2026-11-27  
Roadmap pointer: Class XI Chemistry PRA-18 — NCERT Unit 7, Experiment 7.1  
Task ID: `RBSE-XI-CHEM-PRA-18`

## Decision

The RBSE 2026–27 Class XI Chemistry practical syllabus and the NCERT 2025–26 Chemistry Laboratory Manual are separate sources. They must not be merged into a single presumed ion list.

The recovered RBSE PDF `11_2027_copy.pdf`, subject code 41, printed pp.123–126, says to detect one cation and one anion in the given salt and lists the analysis headings (systematic anion analysis, systematic cation analysis, dry cation tests and cation groups zero–VI). **Those RBSE pages do not enumerate any individual cation or anion identities.** The existing claim that “13 cations and 12 anions are source-listed in RBSE” is therefore unsupported by the inspected RBSE syllabus pages and has been corrected in the task traceability, task-reagent matrix and Chemistry traceability note.

The separate official NCERT-hosted Class XI Chemistry Laboratory Manual 2025–26, Unit 7, Experiment 7.1, lists **14 cations and 12 anions** and says insoluble salts are excluded. This is a possible supporting curriculum reference, not proof that RBSE specifically prescribes those ions or that any salt is present in a current school kit.

## Source comparison

| Evidence source | What it actually states | What it does not establish |
|---|---|---|
| RBSE Class XI Chemistry syllabus, session 2026–27, subject 41, printed pp.123–126 | One cation and one anion in a given salt; systematic analysis and Group 0–VI headings | No named ions, individual group membership, unknown salt composition, reagent list, concentrations, apparatus BOQ or operational method details |
| NCERT Class XI Chemistry Laboratory Manual, Unit 7, 2025–26, Experiment 7.1, printed p.80 | 14 cations and 12 anions; insoluble salts excluded | No equivalence statement that makes this roster an RBSE-specific salt list or a current kit stock list |
| NCERT Unit 7 Table 7.11, printed p.100 | Cation group membership for Groups 0–VI | Does not group anions; does not make the method safe or authorize implementation |

NCERT Table 7.11 places Pb²⁺ in both the Group-I and Group-II rows. The crosswalk retains both memberships instead of silently choosing one. The group table is cation-only; anion rows intentionally carry no group classification.

## Data change

Added `data/catalogues/rbse_xi_chemistry_unit7_pra18_ion_scope_crosswalk_2026_11_27.csv` with 26 records: 14 NCERT candidate cations and 12 NCERT candidate anions. Every record marks its RBSE ion identity as `NOT_ENUMERATED_BY_RBSE_PRA18_SOURCE` and its relationship as `POSSIBLE_NCERT_SUPPORT_ONLY_NOT_EXACT_RBSE_MATCH`.

Added `data/catalogues/rbse_xi_chemistry_unit7_pra18_official_source_readback_2026_11_27.csv` to keep the RBSE and NCERT source claims separate. The RBSE archive SHA-256 and byte count are carried forward from the existing source-recheck register; the register itself says the official server bytes were not independently authenticated. The NCERT PDF footer 2025–26 was visible; the official PDF text layer was inspected and printed page 100 was visually checked. The screenshot request for printed page 80 returned HTTP 502; the ion roster is supported by the official PDF text extraction, not a claimed successful page-80 screenshot or a local binary hash.

## Inventory and method gates

- The existing ten PRA-18 apparatus references remain **task-level candidates** from an unauthenticated OCR/legacy catalogue. No ion-specific apparatus link or exact kit equivalence was created.
- No reagent IDs, concentrations, grades, quantities, sample identities, stock counts, compatibility rules, confirmed test matrix or result values were assigned.
- `MSCL-EXP-3.1` remains a topic/index pointer only; topic overlap is not proof of identical method, supplied material or safe operation.
- NCERT Unit 7 discusses acid reactions and gas evolution, including H₂S, SO₂ and NO₂. The crosswalk is non-executable documentary scope only. No gas-generation, mixing, heating, salt-analysis or live-use capability is approved.
- NCERT content remains link-and-citation only. Create original LabVerse explanations and assets; do not copy protected text, tables or figures.

## Phase state

PRA-18 ion-scope adjudication is complete as a documentary correction. The larger PRA-18 method-to-item crosswalk remains in Phase 1.1 and is not promoted to an implementation-ready state. Phase 2 remains **BLOCKED** pending method provenance, rights review, identity-specific SDS, hazards/exposure, compatibility, waste controls and qualified Chemistry/lab-safety approval. No real 3D or experiment runtime is claimed.

## Next precise task

Proceed to `RBSE-XI-CHEM-PRA-19`: NCERT Unit 7, Experiment 7.2, detection of nitrogen, sulphur and halogens in an organic compound. The existing source register records the Lassaigne sodium-fusion method and an explicit explosion warning for cross-use with chloroform/carbon tetrachloride. Next work must be a source-specific safety/rights/method-gap audit only; do not expose operational sodium-fusion steps or create an executable workflow.

## Source links

- [NCERT Class XI Chemistry Laboratory Manual 2025–26, Unit 7 PDF](https://www.ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm207.pdf)
- RBSE evidence: existing source register `data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv`, PRA-18 row; recovered Library source `11_2027_copy.pdf`.
