# Phase 1.1 — Official NCERT Biology source recovery runner

**Date:** 2026-11-23  
**Work unit:** Recover the official Biology-with-microscope specification and produce a page-9 review artifact without asking for another upload.  
**Branch:** `phase-1-1-source-recovery-runner`

## Why this is the next roadmap task

The 2026-11-22 master-roadmap hand-off names Biology-with-microscope Kit Box, PDF page 9 (printed page 4), as the next Phase 1.1 source task. The corresponding catalogue item `NCERT-BIO-WM-SPEC-002` remains OCR-only; its detail page has not been visually inspected. Phase 1/1.1 remains IN PROGRESS and Phase 2 remains BLOCKED. Phase 4 is DONE only for its bounded dashboard/navigation prototype. Starting real 3D or scientific solvers now would bypass the recorded phase gates.

## Implementation

The GitHub Actions workflow `.github/workflows/phase-1-1-ncert-biology-source-recovery.yml` runs `scripts/recover_ncert_biology_spec.sh` on an ephemeral Ubuntu runner. It:

1. Retrieves the exact official NCERT attachment URL already recorded in the source audit, with retry and HTTP range-resume support.
2. Checks the previously observed official response byte count (59,585,913), PDF signature, SHA-256 and readable page count.
3. Renders PDF page 9 and extracts its text for a visual/source comparison.
4. Uploads only the review image, extracted page text, SHA-256 sidecar and diagnostic report as a one-day GitHub Actions artifact. The source PDF is neither committed nor uploaded as an artifact and is removed from the runner at exit.
5. Fails closed on download errors, a changed byte count, a non-PDF response or an unreadable/too-short PDF. A failed run still uploads its diagnostic report.

## Required human review after retrieval

- Compare the page-9 illustration, labels, dimensions, material, construction and safety notes with row `NCERT-BIO-WM-SPEC-002`.
- Keep the existing OCR transcription unchanged until each claim is visually supported.
- Preserve both prior upload hashes separately. A newly retrieved official file is a third provenance record; do not collapse or overwrite earlier hashes.
- A successful download/hash/page render is not procurement approval, rights clearance, science validation, safety approval or expert sign-off.

## Scope and current status

This work unit automates a previously blocked source retrieval/review path. It does not start Phase 2, implement a scientific engine, add 3D assets, or change application behaviour. Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED; Phase 3 remains PARTIAL; Phase 4 remains DONE for bounded prototype scope; Phase 5 onward remains NOT STARTED.

The result and exact artifact/run evidence must be appended to `PHASE_STATE.md`, `ROADMAP.md`, `NEXT_WORK_REGISTER_2026_11_10.md` and `WORK_LOG.md` after the workflow has actually completed.
