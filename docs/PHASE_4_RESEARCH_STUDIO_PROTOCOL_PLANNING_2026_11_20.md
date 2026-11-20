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

- GitHub Actions SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/44674346187 (code head `793271ec7ae2074aacf427292513c7a1504d5bd9`).
- Required workflow: strict TypeScript typecheck, Vite production build and Playwright browser smoke.
- Strict TypeScript typecheck PASS; Chromium install PASS; Vite production build PASS; preview startup PASS; Playwright browser smoke **33/33 groups PASS**.

## Phase boundary

Phase 4 remains IN PROGRESS. Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific models remain BLOCKED; Phase 5 real 3D and Phase 6 runtime remain NOT STARTED.


## Additional work-unit — live protocol-readiness checklist — 2026-11-20

- Added a live list that marks planning fields as “Text present” or “Not entered”, shows optional repeats and displays the safety-review tracking label.
- The checklist makes no quality score or approval claim. Its own note says source quality, equipment compatibility, units, sample design, analysis suitability and risk assessment are not checked.
- CI SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/44675277209 — TypeScript, Chromium, build, preview and **35/35 Playwright browser groups PASS**.
- Tested code head: `fab766bcebd9a3139367d1bc8f949675a07b2fe5`.
