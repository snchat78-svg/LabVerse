# Phase 1.1 — NCERT Biology source recovery runner

**Date:** 2026-11-23  
**Work unit:** Automate secure retrieval and page-level inspection of the official NCERT Biology-with-microscope specification, without requesting another upload.  
**Branch:** `phase-1-1-source-recovery-runner`

## Roadmap fit

The 2026-11-22 master-roadmap hand-off names Biology-with-microscope Kit Box, PDF page 9 (printed page 4), as the next Phase 1.1 evidence task. Catalogue row `NCERT-BIO-WM-SPEC-002` remains OCR-only and its detail page is not visually checked. Phase 1/1.1 remains IN PROGRESS; Phase 2 is BLOCKED. Phase 4 is DONE only for its bounded dashboard/workspace-navigation prototype. Starting real 3D or scientific solvers now would bypass the recorded authenticity and safety gates.

## What was implemented

- `scripts/recover_ncert_biology_spec.sh`: ephemeral-runner source retrieval, TLS chain inspection, official index bootstrap, session cookie isolation, response metadata capture, PDF-signature/size/SHA-256/page-count checks, page-9 render and text extraction.
- `.github/workflows/phase-1-1-ncert-biology-source-recovery.yml`: manual and branch-push GitHub Actions entry point, shell syntax validation, Poppler installation, recovery step and one-day diagnostic/review artifact.
- TLS uses the official Let's Encrypt YE1 intermediate and Root YE cross-certificate after verifying certificate identity/fingerprint and the server-presented intermediate. The request uses the certificate-matching `ncert.nic.in` host. Normal hostname and CA verification stay enabled; no `-k`, `--insecure`, anti-bot bypass or untrusted proxy was added.
- The source PDF and session cookie jar stay in ephemeral runner storage and are deleted/not uploaded. The one-day artifact may contain page-9 review outputs only after PDF signature/page checks, SHA-256 sidecars, TLS diagnostics, HTTP response metadata, NCERT index-bootstrap metadata, sanitized anchor diagnostics and the report.

## Actual CI result and blocker

Final diagnostic run: https://github.com/snchat78-svg/LabVerse/actions/runs/45123842519 (head `140ed33861bc89b1ced3cfef9e8fa8409875c168`; diagnostic artifact `14794527923`, five files, one-day retention).

- Shell syntax validation: PASS.
- PDF inspection tools installation: PASS.
- TLS chain and hostname validation: PASS.
- Source acquisition: BLOCKED — NCERT's server-side browser/session transaction.
- Diagnostic artifact upload: PASS.

The original direct PDF request was redirected to the site root with a transient `_event_transid`; the response was HTML, not the PDF. The runner then fetched the official specification-index URL first, preserved its short-lived session cookie only within the ephemeral job, and retried with browser-compatible request headers. That URL still returned the generic NCERT home page (HTTP 200 HTML), not the specification index. The final diagnostic counted 1,129 anchors and zero Biology/Microscope/SSBK matches; transaction links included `_event_attackname=Cross Site Request Forgery` and `_event_threatcategory=Cross Site Request Forgery`. The sanitized parser output and response diagnostics were preserved in the one-day artifact.

This proves the remaining problem is not the TLS chain or PDF parser. The automation receives an NCERT homepage/transaction response instead of the actual specification listing. The browser-side transaction flow is not completed by a plain HTTP session bootstrap.

## Evidence state and safety decision

- No valid Biology PDF was obtained. No PDF signature, PDF SHA-256, page count or page-9 image was produced by this work unit.
- `NCERT-BIO-WM-SPEC-002` stays OCR-only / `NOT_VISUALLY_CHECKED_THIS_PASS`; no catalogue value was promoted.
- Both historical upload hashes remain separate and unchanged. No repeat upload request was made.
- CI artifacts are diagnostic-only for the failed retrieval and expire after one day. The raw source PDF, raw HTML response and NCERT session cookie jar are not uploaded or committed.
- A successful HTTPS response alone is not evidence of PDF authenticity, rights clearance, procurement equivalence, scientific validity, hazard approval or expert review.

## Phase decision and next exact action

Phase 1/1.1 remains IN PROGRESS; Phase 2 BLOCKED; Phase 3 PARTIAL; Phase 4 DONE for bounded dashboard/workspace-navigation prototype only; Phase 5/6 and Phases 7–9 NOT STARTED.

Next: use an approved interactive browser session capable of completing NCERT's browser-side transaction flow, or find a newly accessible official NCERT mirror/source endpoint. Then obtain the actual PDF bytes, verify signature/size/SHA-256/page count, render PDF page 9, inspect the Kit Box detail, and complete source-rights, hazard and expert review before updating the catalogue. Do not weaken TLS verification, fabricate source data, merge historical hashes or bypass the phase gates.
