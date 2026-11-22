# Phase 1.1 — Biology-with-microscope Kit Box source recovery check

**Date:** 2026-11-22  
**Work unit:** Resolve the evidence path for item 2, **Kit Box**, whose detail page is PDF page 9 (printed page 4).  
**Decision:** SOURCE RECOVERY BLOCKED — no detail-page visual verification or specification promotion.

## 1. Existing repository record

The current catalogue row `NCERT-BIO-WM-SPEC-002` identifies:

- Index number: 2 — Kit Box.
- Detail-page locator: PDF page 9; printed page 4.
- Existing transcription: galvanised iron sheet; body/doors/partitions 26 SWG; 500–505 × 450–455 × 280–285 mm including door; mass 5.75 kg ± 100 g; hem edges 20–22 mm; folding handles 6 mm diameter; partitioned racks; rust-free hinges/locks; quantity 1.
- Existing note: “Edges blunt; no sharp edges”.
- Detail evidence remains `OCR_TEXT`; `detail_pdf_page_checked` is blank and `detail_visual_audit_status` is `NOT_VISUALLY_CHECKED_THIS_PASS`.

The index row's `VISUALLY_CONFIRMED_IN_CURRENT_UPLOAD` state refers to the index label/page mapping only. It does **not** mean the page-9 technical drawing or its measurements were visually checked.

## 2. Official source path resolved; binary retrieval unsuccessful

The current NCERT Specification Documents index lists separate “Secondary Stage Biology Kit with Microscope (Grade 11 & 12)” and “Secondary Stage Biology Kit without Microscope (Grade 11 & 12)” entries:

- Index: https://ncert.nic.in/division/dek/specification_documents.php?ln=en
- With-microscope attachment linked from the official index: https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf

The web retrieval attempt reached the official attachment but was rejected because the reported response body is 59,585,913 bytes, above the available reader limit. A direct container-side download attempt also failed at DNS resolution. No complete official PDF bytes were obtained in this work unit; therefore no official attachment SHA-256, page count, page-9 image or page-9 text has been independently captured here.

## 3. Hash conflict retained — do not merge source copies

The repository contains two historical user-upload records for 199-page, 59,620,970-byte files:

| Recorded filename | SHA-256 | Record |
|---|---|---|
| `SSBK_with_Microscope_copy.pdf` | `c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2` | Earlier source register / item register |
| `SSBK_with_Microscope_222.pdf` | `9df41c69800ae3e8da8cac3fae265b8a6c4a4035e4deec16325c32b225309dcb` | Current-upload index audit / catalogue provenance |

The sizes and page counts are recorded as equal, but the SHA-256 values differ. These are distinct byte streams and must remain separate evidence records until their content/provenance is reconciled. The official-hosted response size (59,585,913 bytes) differs as well; matching title/subject is not proof of byte identity.

## 4. Evidence decision

- Keep the Kit Box row and its existing OCR transcription intact.
- Do not mark the detail page visually checked.
- Do not replace the current upload hash with the official-hosted candidate or collapse the two historical upload hashes.
- Do not create or approve a 3D asset from the unverified measurements.
- No user re-upload request is made; the existing source archive explicitly records a no-repeat-upload rule.

## 5. Next exact action

Recover either previously supplied PDF bytes from the original conversation/file source or obtain an accessible official copy. Record its exact byte count and SHA-256 first. Then render **PDF page 9** (Kit Box, printed page 4), visually compare the drawing, labels, dimensions, construction details and safety notes against catalogue row 2, and update the row only for details actually visible in that source. If the recovered copy differs from either historical hash, preserve it as a third source record and document the relationship rather than silently overwriting prior evidence.

**Phase outcome:** this is a source-recovery checkpoint only. Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED; Phase 4 dashboard/navigation is DONE for its bounded prototype scope (see `docs/PHASE_4_EXIT_GATE_REVIEW_2026_11_22.md`); real 3D and experiment runtime remain NOT STARTED.

## 6. Internal Library recovery attempt — 2026-11-22

After the initial official-host retrieval failure, the current conversation attachments and the user's accessible ChatGPT Library were checked for the exact historical Biology-with-microscope PDF copies.

- Current conversation file list returned **0 attachments**.
- The accessible Library PDF listing completed without a next page and did not contain either `SSBK_with_Microscope_copy.pdf` or `SSBK_with_Microscope_222.pdf`.
- A Library content search for both filenames and the Kit Box/page-9 specification did not surface either PDF as a retrievable file. The only matching indexed records were project documentation and unrelated assets, not the source PDF bytes.
- Therefore no existing PDF bytes could be materialized, no new SHA-256 could be computed, and no PDF page 9 could be rendered in this session.

This is a retrieval-availability result, not evidence that the prior source records were deleted or that the two uploaded files are identical. Keep both historical hashes separate. Do not infer page details from the index, OCR text or a secondary copy. No repeat-upload request is made in this checkpoint.

**Next allowed action:** try a newly accessible official NCERT attachment route or a connector/source location already recorded in the project. On recovery, record exact file size and SHA-256 before rendering PDF page 9 and auditing the Kit Box drawing/labels. If the source remains unavailable, keep this row blocked and do not promote the catalogue fields.
