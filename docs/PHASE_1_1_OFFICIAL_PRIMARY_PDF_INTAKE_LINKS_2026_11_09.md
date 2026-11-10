# Phase 1.1 — Official NCERT primary PDF intake links and upload request

**Date:** 2026-11-09  
**Phase:** Phase 1 / subphase 1.1  
**Purpose:** user-assisted retrieval of large official NCERT source PDFs that the current retrieval environment cannot download.

## 1. Why these files are requested

NCERT publishes the relevant Grade XI–XII kit manuals and four distinct kit specification PDFs from its own School Kits pages. The official specification index links directly to Micro Scale Chemistry, Biology with microscope, Biology without microscope and Physics. The revised kit-manuals page separately links the Higher Secondary Biology Kit Manual in English. The link targets below were followed from the official NCERT pages; they are not third-party mirrors.

Current NCERT index pages:
- Specification Documents: https://ncert.nic.in/division/dek/specification_documents.php?ln=en
- Revised Kit Manuals: https://ncert.nic.in/division/dek/kit-manuals.php?ln=en

## 2. Direct files to download and upload

| Priority | Document | Official direct PDF URL | Tool-reported size hint |
|---|---|---|---:|
| P1 | Biology Kit Manual English, publication code 13163 | https://ncert.nic.in/division/dek/pdf/Manual_Secondary_Stage_Biology_Laboratory_Kit-11%2612_EN.pdf | Not returned |
| P1 | Biology kit WITH microscope | https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf | 59,585,913 bytes |
| P1 | Biology kit WITHOUT microscope | https://ncert.nic.in/division/dek/pdf/SSBK_without_Microscope.pdf | 63,918,957 bytes |
| P1 | Current MSCL kit specification | https://ncert.nic.in/division/dek/pdf/MSCL.pdf | 19,808,858 bytes |
| P1 | Current Physics kit specification | https://ncert.nic.in/division/dek/pdf/SSPhyLaboratoryKit.pdf | 42,539,010 bytes |

The size hints are content-length values surfaced by the web retrieval system when it refused to load the large PDF payloads. They are not locally downloaded file sizes or SHA-256 evidence. The Biology manual URL was resolved from the official manual page, but the retrieval tool returned an unusable `400 OK` response and no size.

## 3. Retrieval attempts already made

- Followed all four specification PDF links directly from the official NCERT specification page. The retrieval tool surfaced their content lengths but refused the large responses.
- Followed the Biology kit manual English link from the official Revised Manuals page. The exact target URL resolved, but no manual bytes were made available.
- Tried direct container downloads of all five official PDF URLs. All attempts failed; no files were created.
- No login, credential use, session-cookie extraction, access-control bypass or third-party mirror substitution was used.

## 4. Upload instructions

Please download each file using the direct PDF links above and upload the original files here in this chat. Do not re-save, compress, OCR, rename/re-export or alter the PDFs before uploading. If a download fails, use the corresponding official NCERT index page and select the same listed document; do not use a third-party mirror unless its bytes can later be authenticated against NCERT.

Current received/previously supplied source records:
1. Biology kit manual 13163: received; two byte-identical copies deduplicated to one unique source.
2. Biology with microscope: prior upload hash and 177-row catalogue already recorded.
3. Biology without microscope: prior submission acknowledged; recover the original/derived catalogue internally; no repeat upload.
4. MSCL: `MSCL_copy.pdf` is present in Library with SHA-256 and 55-row candidate index.
5. Physics: user confirms prior PDFs; the 106-row Physics manual register and 80-task crosswalk already exist. Exact old procurement-spec filename/hash remains an internal retrieval issue, not a new upload request.
6. RBSE XI and XII 2026–27 syllabus PDFs: present in Library, hashed and mapped to six subject task registers.

Previously submitted MSCL and Biology-with-microscope candidates remain in the source registry with their hashes; do not request repeat uploads. Their hashes identify the uploaded bytes only and do not establish exact identity with the current official NCERT attachments.

## 5. What LabVerse will do after upload

For each uploaded PDF, record byte length and SHA-256 first; inspect PDF metadata, page count, edition/revision, and extraction quality; visually inspect image-only/ambiguous pages where needed; preserve source page/item references; compare against existing source registers; and update the six-pack task-to-item-to-asset/model/test traceability. For Chemistry, do not infer reagent concentration, quantity or permission for physical use without exact source evidence, current SDS and qualified institutional approval. For Biology, retain the microscope/no-microscope variants separately and do not infer specimen equivalence from a shared label.

## 6. Phase governance

This intake is still Phase 1.1 of Phase 1. It does not close any Phase 1 gate and does not authorise Phase 2. Phase 2 remains BLOCKED until all Phase 1 exit criteria are verified. No app implementation, scientific solver or 3D asset is claimed by this work unit.

Machine-readable manifest: `data/catalogues/phase1_official_pdf_intake_manifest_2026_11_09.csv`.


## 7. Biology kit manual received — 2026-11-09

Two files were uploaded in the current conversation:

- `Manual_Secondary_Stage_Biology_Laboratory_Kit-11&12_EN_111.pdf`
- `Manual_Secondary_Stage_Biology_Laboratory_Kit-11&12_EN_111 (1).pdf`

**Duplicate check:** both files are 20,028,910 bytes and have identical SHA-256:
`c6303b94bcb9a94d08a54aabf56f22d94aaf87f296d083917ab8b6fb6a6bc086`.
They are one unique source candidate, not two different kit variants.

**PDF inspection:** PDF metadata reports 141 physical pages. The visible title is *Manual of Secondary Stage Biology Laboratory Kit for Grades 11th & 12th*; ISBN 978-93-5292-528-5; First Edition March 2018; reprints listed October 2018, January 2019 and March 2020. The table of contents lists Exercises 1–60 for Grades 11 and 12, and the manual includes equipment, specimen, permanent-slide and chemical/reagent/stain indexes.

**Evidence status:** user-supplied NCERT manual candidate received and hash-identified. The visible publication data is consistent with the NCERT manual listing, but the live NCERT PDF payload could not be retrieved for an independent byte-for-byte comparison. Therefore it is **not yet marked OFFICIAL_BYTE_AUTHENTICATED**. Keep it separate from the Biology-with-microscope and Biology-without-microscope specification PDFs.

## 8. Previously uploaded PDF files retained in Library

- `MSCL_copy.pdf`: retained; 19,798,501 bytes; 65 pages; SHA-256 `db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d`. Visual inspection of page 1 confirms the cover title *NCERT Specification Document of Items — Micro Scale Chemistry Laboratory Kit, Grades 11 & 12*. It remains a user-uploaded candidate, not independently authenticated against the current official NCERT attachment.
- `11_2027_copy.pdf`: retained as RBSE Class 11 syllabus session 2026–2027; 155 pages.
- `12_2027_copy.pdf`: retained as RBSE Class 12 syllabus session 2026–2027; 169 pages.

The RBSE PDFs are curriculum sources, while MSCL is a Chemistry kit specification candidate; they are not duplicates of the Biology kit manual.

## 9. Next bounded work

Continue the Phase 1.1 content audit of the received Biology manual: extract the full apparatus/specimen/permanent-slide/chemical indexes and map Exercises 1–60 to the existing RBSE XI/XII Biology task records. Keep the two Biology specification variants separate and retain Phase 2 as BLOCKED until all Phase 1 exit criteria pass.


## 10. Correction — prior Biology kit variant uploads (2026-11-09)

The user has clarified that both the **with-microscope** and **without-microscope** Biology kit specification PDFs were already supplied in earlier work. The previous intake checklist and source-gap register incorrectly treated the without-microscope file as not previously submitted, which caused an unnecessary repeat request.

- With-microscope: the repository already contains `data/catalogues/ncert_biology_with_microscope_spec_items.csv` (177 indexed rows) and a prior uploaded-copy hash recorded in the source-gap register.
- Without-microscope: acknowledge the user's prior submission. The raw attachment and its hash are not exposed by the current conversation file listing; this is a project record/archive-retrieval problem, not a request for the user to upload again.
- **Instruction:** do not ask the user to resend either Biology kit variant. First recover the earlier attachment or existing extracted records. If the original without-microscope bytes remain inaccessible, record the exact evidence limitation and continue the other available Phase 1 tasks; never silently label the file as never received.
- The two variants remain separate sources and must not be conflated. No variant-specific additions or omissions are inferred until the relevant evidence is inspected.


## 11. Persistent source register added — 2026-11-10

- Machine-readable no-repeat source registry: `data/catalogues/source_pdf_registry_2026_11_10.csv`.
- Human-readable archive and evidence register: `docs/SOURCE_PDF_ARCHIVE_REGISTER_2026_11_10.md`.
- Existing accessible source hashes rechecked: Biology manual 13163 (2 duplicate uploads, one unique hash); MSCL_copy.pdf; RBSE XI syllabus; RBSE XII syllabus.
- Prior Biology with-microscope upload hash and 177-row catalogue were recovered from the existing Phase 1.1 register.
- Biology without-microscope and older Physics source submissions are acknowledged as prior submissions; exact previous raw filename/hash is not currently surfaced. These must not trigger repeat upload requests.
- Original PDF binaries are not committed to the GitHub repository in this package. GitHub stores their source identifiers, hashes/metadata where available, extracted catalogues, page references and no-repeat status. Originals remain in ChatGPT upload/Library storage when accessible.
