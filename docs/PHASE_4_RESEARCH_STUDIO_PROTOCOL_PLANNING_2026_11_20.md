# Phase 4 — Research Studio protocol-planning metadata — 2026-11-20

## Goal

Extend the research question/hypothesis draft into a more complete protocol-planning record while keeping it explicitly non-executable.

## New structured fields

Alongside the original six fields (question, hypothesis, alternative, independent variable, dependent variable and controls), schema v2 adds:

1. Protocol objective.
2. Method/source provenance (source title, version, pages or URL).
3. Candidate materials/equipment references.
4. Sample/specimen selection and inclusion plan.
5. Optional planned repeats.
6. Measurement plan, including observable, unit and instrument range.
7. Environmental conditions and timing.
8. Planned analysis.
9. Stopping rule / exclusion criteria.
10. Safety-review tracking status.
11. Safety-review evidence/reference.

## Data integrity

- Existing schema-version-1 drafts migrate with all six original values preserved; new fields start blank and safety tracking starts at NOT_REVIEWED.
- Schema v2 validates all 17 string fields; the safety status must be one of NOT_REVIEWED, REVIEW_REQUESTED or REFERENCE_RECORDED_NOT_VERIFIED.
- Planned repeats may be blank; otherwise they must be a whole number from 1 to 100.
- Each text field remains limited to 5,000 characters; JSON files are limited to 1 MiB to allow Unicode text safely.
- Local storage and JSON import/export use the same versioned envelope.

## Safety and scientific boundaries

- Catalogue/material names remain candidate references, not confirmed stock, compatibility or safe-use instructions.
- Method provenance identifies a source; the app does not generate a procedure from it.
- A repeat count is user-entered planning data, not a statistically recommended sample size.
- Safety-review status is self-recorded workflow metadata. Even REFERENCE_RECORDED_NOT_VERIFIED is not a safety approval.
- No real-world procedure, scientific output, solver, 3D asset or experiment runtime was added.

## Acceptance tests added

- Save schema v2 with all 17 fields and export/import them without data loss.
- Migrate a schema-v1 six-field draft into schema v2.
- Reject repeat counts outside 1–100.
- Preserve existing limits and app regression checks.

## Verification

- CI status pending for head `24e8b911da77218e8d87e5481c6f32093636359e`.
- Required workflow: strict TypeScript typecheck, Vite production build and Playwright browser smoke.
- Results will be appended after the workflow is observed.

## Phase boundary

Phase 4 remains IN PROGRESS. Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific models remain BLOCKED; Phase 5 real 3D and Phase 6 runtime remain NOT STARTED.
