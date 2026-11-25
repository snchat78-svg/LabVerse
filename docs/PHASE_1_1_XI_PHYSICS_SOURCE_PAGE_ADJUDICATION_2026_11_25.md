# Phase 1.1 — Class XI Physics source-page adjudication (2026-11-25)

## Decision

The Class XI Physics slice of the Phase 1.2 practical register is now source-page adjudicated against the existing stable curriculum index and task catalogue. **41 of 41** register rows now have a source-confirmed curriculum/task identity. This closes the first Physics-lane curriculum-to-task identity review only; it does not approve apparatus relevance or experiment execution.

## Source inspected

- Existing Library file: `11_2027_copy.pdf` (RBSE 2026–27 Class XI syllabus copy), 155 pages, 23,343,499 bytes.
- Recorded SHA-256 in the source archive: `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5`.
- PDF pages 115–119 were read; English Physics practical wording appears on pp.117–119, with Hindi practical wording on p.115 used as corroboration where relevant.
- No repeat upload or new source substitution was requested.

## Adjudicated coverage

| Source group | Rows | Verified PDF pages | Task identity |
|---|---:|---|---|
| Class XI Physics experiments | 17 | 117–118 | 17 existing task rows |
| Section A activities | 7 | 118 | 7 punctuation-normalized task IDs |
| Section B activities | 6 | 118–119 | 6 punctuation-normalized task IDs |
| Projects | 11 | 119 | 11 existing task rows |
| **Total** | **41** | **115, 117–119** | **41/41** |

- Task-ID join: 28 exact stable-ID matches and 13 unique punctuation-normalized ID matches.
- The earlier similarity triage statuses among these 41 were 28 POSSIBLE_MATCH_REVIEW, 10 HIGH_SIMILARITY_REVIEW, 2 AMBIGUOUS_REVIEW and 1 NO_UNIQUE_CANDIDATE. Direct source-page review resolves all 41 curriculum/task identities; similarity scores were not used as approval evidence.
- The remaining 106 Phase 1.2 register rows were not changed. Current reconciliation status totals: SOURCE_PAGE_CONFIRMED=41; HIGH_SIMILARITY_REVIEW=57; POSSIBLE_MATCH_REVIEW=37; AMBIGUOUS_REVIEW=8; NO_UNIQUE_CANDIDATE=3; GROUP_LEVEL_REVIEW=1.

## Inventory presence is not item relevance

- The 41 tasks reference 219 candidate item-ID occurrences across 52 unique candidate IDs.
- All 219 references resolve to IDs present in the existing dashboard inventory catalogue; zero referenced IDs are missing from that catalogue snapshot.
- This is strictly an ID-presence check. It does not prove the item is required by the practical, physically stocked, procured, specification-equivalent, safe, rights-cleared or expert-approved.
- Candidate item relevance remains NOT_ADJUDICATED and all catalogue item IDs remain NOT_PROMOTED.
- Fortin barometer project (RBSE-XI-PHY-PRJ-08) has no candidate item IDs in the current task traceability row. Keep it as an unresolved equipment/catalogue gap, not an invented link.
- The 147-row Phase 1.2 register's item mapping status remains PENDING_ITEM_LEVEL_JOIN.

## Source distinctions preserved

- Experiment 15 keeps both sonometer options (i) and (ii) under one syllabus record.
- Activity A1 retains the two paper-scale least-count choices, 0.2 cm and 0.5 cm.
- Activity A7 has a wording discrepancy: English p.118 omits “pendulum”, while Hindi p.115 explicitly says simple pendulum. The source wording is not silently normalised.
- Project 1 and Project 11 remain separate entries; Project 11 explicitly specifies a seconds pendulum.
- Experiment 10 (oscillation T²–m graph) remains separate from Project 9 (load-extension graph).
- Experiment 8 and Experiment 11, and Project 1, had weak/ambiguous similarity scores; their source sequence and existing task rows now provide direct identity evidence. This does not promote any associated item IDs.

## Files and verification

- Adjudication detail: `data/curriculum/rbse_xi_physics_source_page_adjudication_2026_11_25.csv`.
- Updated 147-row reconciliation: `data/curriculum/rbse_2026_27_register_to_curriculum_reconciliation_2026_11_24.csv` (41 source-confirmed; 106 unchanged).
- All 41 curriculum IDs, source kind/sequence pairs, linked task rows and candidate inventory-presence rows were checked programmatically before commit.
- The CSV read-back checks confirm 41 adjudication rows, 41 task rows, 219 candidate references, 52 unique candidate IDs, zero missing referenced inventory IDs and unchanged 147-row reconciliation cardinality.
- No application code changed. No GitHub Actions workflow is configured to trigger on `data/curriculum/**` or `docs/**`; therefore no CI run is claimed. This is a data/documentation verification, not scientific validation.

## Phase gates and next exact task

- Phase 1.1 remains IN PROGRESS; the other Class XI/XII streams and item-level relevance work remain open.
- Phase 2 remains BLOCKED pending method provenance, source rights and hazard/expert evidence.
- Phase 5 real 3D and Phase 6 experiment runtime remain NOT STARTED.
- **Next:** audit the 219 candidate item references / 52 unique IDs for these same 41 Class XI Physics records against the item-level source evidence and task wording. Classify only source-supported exact item links, possible supporting items and evidence-backed gaps; preserve one-to-many relationships. Do not promote catalogue IDs from presence alone.
