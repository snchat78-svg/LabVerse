# Phase 1.1 — Official NCERT attachment retrieval re-check

Audit date: 2026-11-08  
Repository: https://github.com/snchat78-svg/LabVerse  
Gate: Phase 1.1 IN PROGRESS; Phase 1 IN PROGRESS; Phase 2 BLOCKED.

## 1. Scope

Re-check the current NCERT English specification index and follow the Grade XI–XII links for the four pending procurement specification attachments. The objective is to distinguish (a) a link shown by NCERT, (b) successful retrieval of the attachment bytes, and (c) authentication of a user/tender copy against those bytes.

## 2. Official index evidence

The NCERT specification index lists these four distinct Grade XI–XII attachments:

| Kit family | Exact link target | Index state | Attachment retrieval on 2026-11-08 |
|---|---|---|---|
| Micro Scale Chemistry Laboratory Kit | https://ncert.nic.in/division/dek/pdf/MSCL.pdf | Listed on official index | HTTP 502 from direct link follow |
| Secondary Stage Biology Kit with Microscope | https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf | Listed on official index | HTTP 502 from direct link follow |
| Secondary Stage Biology Kit without Microscope | https://ncert.nic.in/division/dek/pdf/SSBK_without_Microscope.pdf | Listed on official index | HTTP 502 from direct link follow; separate container download attempt failed |
| Secondary Stage Physics Laboratory Kit | https://ncert.nic.in/division/dek/pdf/SSPhyLaboratoryKit.pdf | Listed on official index | HTTP 502 from direct link follow |

Official index: https://ncert.nic.in/division/dek/specification_documents.php

The official manual listing also identifies revised English manual listings for Physics, Higher Secondary Biology and Micro Scale Chemistry. The manual listing request timed out in this retrieval pass; no new manual PDF bytes were obtained. NCERT's publications catalogue separately identifies code 13163 as the Manual of Higher Secondary Biology Laboratory Kit, code 13164 as the Higher Secondary Physics kit manual and code 13166 as the Micro Scale Chemistry manual. Catalogue metadata is not a substitute for the full manual or procurement attachment.

## 3. Retrieval method and limits

- Opened the official specification index and read its Grade XI–XII link list.
- Followed the four exact PDF link targets from that page; each returned HTTP 502 in this pass.
- Attempted a separate direct download of the Biology-without-microscope attachment; the container download failed.
- Attempted alternate hostname/transport checks from the execution environment; DNS resolution was unavailable there.
- No attachment bytes were obtained in this pass. Consequently no SHA-256, PDF metadata, page count, revision comparison or exact-byte match could be computed.

A failed transport attempt is not evidence that a file is invalid or absent. It is recorded as RETRIEVAL_BLOCKED, not as a source-content defect.

## 4. Existing uploaded copies — status unchanged

| Uploaded copy | Existing repository register | Current authentication status |
|---|---|---|
| MSCL_copy.pdf | docs/PHASE_1_1_MSCL_SPECIFICATION_ITEM_REGISTER.md; data/catalogues/ncert_mscl_spec_items.csv | OCR inspected; SHA-256 identifies uploaded bytes; identity against official attachment NOT VERIFIED |
| SSBK_with_Microscope_copy.pdf | docs/PHASE_1_1_BIOLOGY_WITH_MICROSCOPE_SPECIFICATION_REGISTER.md; data/catalogues/ncert_biology_with_microscope_spec_items.csv | Partial page audit; SHA-256 identifies uploaded bytes; identity against official attachment NOT VERIFIED |
| Biology without microscope | No primary attachment bytes in this repository | NOT RETRIEVED |
| Physics procurement specification | Manual item register exists, but procurement attachment bytes are not present | NOT RETRIEVED |

The previously recorded asbestos-centred wire gauze and mercury thermometer remain source hazards. They are not approved LabVerse real-world learner assets.

## 5. Decision

- Official listing status: CONFIRMED for all four specification link targets.
- Attachment byte retrieval: BLOCKED in this pass for all four.
- Uploaded-copy authentication: NOT VERIFIED.
- Procurement specification content: NOT newly inspected.
- Phase 1.1: IN PROGRESS.
- Phase 1: IN PROGRESS.
- Phase 2: BLOCKED.

Do not promote an uploaded copy or third-party tender mirror to PRIMARY_OFFICIAL_CONTENT merely because its filename, displayed size or kit title matches an NCERT index entry.

## 6. Next action

Continue Phase 1 with the source material already inspectable: expand the RBSE task → NCERT source item → proposed original LabVerse asset → model/rule → test-vector crosswalk. Keep each link tagged as exact-source, candidate match, inferred or pending review. Retry the official attachment bytes only when a working official route or a verifiable attachment payload is available.

## 7. Evidence URLs

- NCERT specification index: https://ncert.nic.in/division/dek/specification_documents.php
- NCERT kit manuals index: https://ncert.nic.in/division/dek/kit-manuals.php?ln=en
- NCERT other-books catalogue: https://ncert.nic.in/uploads/publication/other_books_new.pdf
