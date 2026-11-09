# Phase 1.1 — RBSE Biology task-level gap register

**Date:** 2026-11-09  
**Scope:** RBSE Class XI and XII Biology traceability against the user-uploaded NCERT Biology-with-microscope specification candidate.

## Coverage and integrity

- Class XI Biology task records: **22**.
- Class XII Biology task/choice records: **28**.
- Total unique task records: **50**.
- Uploaded Biology-with-microscope specification index: **177 rows total**; row 177 is document-development credit, leaving 176 candidate kit rows.
- Candidate source references: every referenced source ID was checked against the indexed 177-row CSV.
- Dangling source-item references: **0**.
- Every source reference currently resolves to an indexed row; this validates only ID integrity, not content/equivalence.

## Evidence and unresolved verification

The current Biology-with-microscope upload index has these evidence states:
- OCR_TEXT: 80 rows.
- OCR_TEXT + VISUAL_CHECK: 3 rows.
- INDEX_CONFIRMED samples: 3 rows (visual card 84; embedded specimen 134; permanent slide 141).
- INDEX_ONLY rows include 49 visual cards, six other specification/index rows, 34 permanent slides and one additional index-only record.
- One separate VISUAL_CHECK row also exists.
- The PDF is still a user-uploaded copy; its recorded SHA-256 identifies those bytes only and does not authenticate them against NCERT's official attachment.

The crosswalk therefore contains several types of unresolved gap: exact sample/specimen identity; actual individual visual-card/slide pages not inspected; reagent/stain/media and calibration not established; measurement apparatus not indexed; method/data/accuracy not independently verified; and school-managed or teacher-assigned material. The register preserves each task's original gap wording and status.

## Gap-category counts

Counts are the number of task rows tagged with each category, and categories overlap:
- SOURCE_AUTHENTICATION_OPEN: 50
- BIOLOGY_EXPERT_REVIEW_REQUIRED: 50
- METHOD_AND_RESULT_VALIDATION_OPEN: 50
- ITEM_OR_CONTENT_VERIFICATION_GAP: 29
- SAMPLE_OR_SPECIMEN_GAP: 37
- BIO_SAFETY_OR_ETHICS_REVIEW: 6
- REAGENT_OR_MEDIA_GAP: 10
- MEASUREMENT_OR_APPARATUS_GAP: 11
- TEACHER_ASSIGNED_PROJECT_SCOPE_OPEN: 1

## High-impact examples preserved from the task crosswalk

- XI respiration: a dedicated respirometer/manometer or calibrated gas sensor and validated reference setup are not confirmed.
- XI/Zoology biochemical tests: reagent/sample identities are not confirmed; human saliva/urine are not platform input material.
- XI spotting: visual cards/slides are mostly index-only; the indexed card is not automatically equivalent to a prepared specimen or permanent slide.
- XII quadrat work: a dimensioned frame and field data/sampling design are not established.
- XII soil texture and water-holding tasks: soil samples/sieves and controlled measurement references are missing or unverified.
- XII water turbidity: no confirmed turbidimeter/nephelometer or standards are in the kit index.
- XII urban-air SPM: no calibrated air sampler/flow meter/PM monitor is in the candidate index.
- XII biology spotting: cards 123/124 are not confirmed permanent T.S. testis/ovary slides; no exact Trichophyton item is established.
- XII investigatory project: RBSE leaves the topic teacher-assigned; no topic-specific source-item match is invented.

## Important separation

The current source is the user-uploaded **with-microscope** candidate. The official NCERT index lists with-microscope and without-microscope Biology kit specifications separately, but the official manual PDF and the without-microscope source bytes remain unretrieved. No differences are inferred. The official Biology manual publication code is 13163; it is also not retrieved/byte-authenticated.

## Safety, rights and approval gates

- Biology work remains virtual/reference-only or uses approved prepared digital specimens; no pathogen culturing, clinical sample collection or unapproved animal collection/dissection.
- Uploaded NCERT artwork/cards/slides are not assumed reusable. LabVerse assets must be original or separately licensed.
- All tasks remain pending Biology subject-expert review.
- No live experiment, sample handling, model validation or app implementation is claimed.

## Artifacts and checks

- Machine-readable one-row-per-task register: `data/catalogues/biology_task_level_gap_register.csv`.
- Task records: 50; CSV data rows: 50; schema columns: 15.
- Candidate refs: 382.
- Dangling refs: 0.
- Each record retains the original unresolved gap, safety, rights, expert and implementation fields.
- No phase gate is closed by this crosswalk.

**Decision:** Biology task-to-candidate-source integrity subtask DONE; task evidence, content verification, no-microscope comparison, manual and expert gates remain OPEN. Phase 1 / Phase 1.1 remain IN PROGRESS; Phase 2 remains BLOCKED.
