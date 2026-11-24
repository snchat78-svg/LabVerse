# Phase 1.1 — Phase 1.2 register reconciliation (2026-11-24)

## Outcome

Compared all **147** rows in `data/curriculum/rbse_2026_27_practical_register_xi_xii.csv` against the **158** stable-ID curriculum rows in the Phase 1.1 crosswalk. This is a rapid candidate reconciliation, not final source adjudication.

| Status | Rows |
|---|---:|
| POSSIBLE_MATCH_REVIEW | 65 |
| AMBIGUOUS_REVIEW | 10 |
| NO_UNIQUE_CANDIDATE | 4 |
| HIGH_SIMILARITY_REVIEW | 67 |
| GROUP_LEVEL_REVIEW | 1 |
| **Total** | **147** |

## Method

- Candidate search is restricted to the same class and subject.
- Titles are normalized for case, punctuation and spacing; token-set overlap is used only to rank candidate review targets.
- A candidate curriculum ID is consumed once to avoid accidental many-to-one assignment in this first pass.
- Every proposed link remains explicitly a review candidate. No candidate is promoted to an exact source match based on similarity alone.
- Chemistry group/alternative structures are preserved in the source register fields; Biology spotting and Botany/Zoology records remain review/group candidates where needed.
- No catalogue item IDs, methods, quantities, concentrations, hazards, permissions, or results are inferred.

## Next acceleration step

1. Resolve high-similarity candidates against the source PDF page wording and the 171-row task traceability index.
2. Reconcile Chemistry's differently granular XI/XII section records without flattening alternatives.
3. For confirmed task IDs, bulk-check candidate item IDs against the live subject inventory and classify exact item evidence, possible match, or documented gap.
4. Only then promote item joins; Phase 2 and real 3D/runtime gates remain unchanged.

## Verification

- GitHub read-back inputs: 147 Phase 1.2 register rows and 158 Phase 1.1 crosswalk rows.
- Output CSV rows: 147; status counts sum to 147.
- Automated similarity is a triage accelerator, not an expert/source approval. No CI run is claimed for this data-only pass.
