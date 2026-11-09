# Phase 1.1 — Source Authentication and Procurement Gap Register

Audit date: 2026-11-09  
Phase: Phase 1 / subphase 1.1  
Status: **IN PROGRESS — source discovery and partial item transcription exist; critical primary bytes and procurement specifications remain unauthenticated.**

## 1. Why this register exists

The six RBSE pack CSVs now reconcile 171/171 task IDs, but task-index completeness is not the same as source authentication or apparatus verification. This register separates:
1. official index/listing evidence;
2. successful retrieval of exact primary document bytes;
3. uploaded-copy provenance/hash;
4. item/page inspection depth;
5. procurement/BOM completeness;
6. scientific method, safety and rights approval.

Do not upgrade a source to PRIMARY_OFFICIAL_CONTENT merely because a user-uploaded filename/title matches a link displayed by an official index.

## 2. Current official-source checks (2026-11-09)

### RBSE 2027 syllabus

The official RBSE syllabus index is currently accessible and displays a “पाठ्यक्रम 2027” section with separate Class XI and Class XII links. Direct retrieval of both PDFs timed out in the current pass. The 171-task master register is transcribed from user-supplied 11_2027_copy.pdf and 12_2027_copy.pdf; the master records visual inspection of the practical pages but does not record their SHA-256. Therefore, the six-pack reconciliation proves agreement with the repository's RBSE master index, not byte-authenticated equivalence to current official RBSE 2027 PDFs.

Official index: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika-syllabus.htm  
Class XI PDF: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/11_2027.pdf  
Class XII PDF: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/12_2027.pdf

### NCERT Grade XI–XII specification index

The official NCERT index is currently accessible and separately lists:
- Micro Scale Chemistry Laboratory Kit;
- Biology Kit with Microscope;
- Biology Kit without Microscope;
- Physics Laboratory Kit.

All four official ncert.nic.in PDF link targets returned HTTP 502 in the 2026-11-09 retrieval pass. A second direct check of the parallel ncert.gov.in host was also not accessible through the current retrieval route. These transport/tool failures do not prove file absence; the current attachment bytes remain unauthenticated and uninspected.

Official index: https://ncert.nic.in/division/dek/specification_documents.php?ln=en

### NCERT kit manuals and source rights

The official NCERT manual index search listing includes revised Physics, Higher Secondary Biology and MSCL English manuals. NCERT's publication catalogue identifies code 13163 (Higher Secondary Biology Laboratory Kit manual), 13164 (Higher Secondary Physics Laboratory Kit manual) and 13166 (Micro Scale Chemistry Laboratory Kit manual). Catalogue/index metadata establishes that titles/codes are listed; it is not the same as full manual bytes, procurement specification attachments or a reagent BOM.

Physics manual source identity is separately recorded as code 13164, ISBN 978-93-5292-653-4, first edition October 2018, reprints through August 2024, with an ALL RIGHTS RESERVED notice. Its 106-row item schedule was text-inspected and registered; it is not a complete procurement BOM. The current NCERT procurement specification attachment is still blocked.

## 3. Source-family gap register

### SRC-RBSE-2027-PDFS — RBSE Class XI/XII Examination 2027 syllabus PDFs

- **Official index/listing:** 2027 Class 11 and Class 12 links visible on official RBSE syllabus index (checked 2026-11-09)
- **URL(s):** https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika-syllabus.htm | https://rajeduboard.rajasthan.gov.in/anudeshika-etc/11_2027.pdf | https://rajeduboard.rajasthan.gov.in/anudeshika-etc/12_2027.pdf
- **Retrieval/authentication:** Official index opened; both direct PDF follows timed out in the 2026-11-09 retrieval pass. The exact user-supplied uploads were recovered from the current conversation Library and locally hashed/metadata-inspected on 2026-11-09. Official endpoint bytes were not obtained.
- **Uploaded-copy provenance:** User-supplied `11_2027_copy.pdf` — 23,343,499 bytes, 155 pages, SHA-256 `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5`; PDF Author `Deepak Mudgal`, Creator `Microsoft Word 2007`, Producer `4-Heights PDF Library 3.4.0.6904`, CreationDate 2026-05-19, ModDate 2026-05-22. User-supplied `12_2027_copy.pdf` — 18,279,805 bytes, 169 pages, SHA-256 `2249c6233817ba625460a97b1fab829d57d5ce6842a19bb12be80794c40e7e34`; Producer `4-Heights PDF Library 3.4.0.6904`, ModDate 2026-06-01, PDF 1.7.
- **Evidence limit:** Hashes and PDF metadata now identify the exact uploaded bytes used for the task extraction. They do not prove that those bytes are identical to the current RBSE-hosted files. No official-byte hash or errata comparison has been obtained.
- **Affected tasks/packs:** ALL_171_RBSE_XI_XII_TASK_RECORDS
- **Unknown fields:** Exact-byte identity, revision/metadata of current official PDFs, and any later correction/errata.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Obtain the official PDFs through a working official route; hash the official responses and compare against these recorded user-upload hashes, including pages 114–147 and all 171 task IDs.

### SRC-NCERT-SPEC-INDEX — NCERT Grade XI–XII kit specification index and four attachment targets

- **Official index/listing:** Official index opened 2026-11-09; lists all four distinct XI–XII attachments, including Biology with and without microscope.
- **URL(s):** https://ncert.nic.in/division/dek/specification_documents.php?ln=en | MSCL: https://ncert.nic.in/division/dek/pdf/MSCL.pdf | Biology with microscope: https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf | Biology without microscope: https://ncert.nic.in/division/dek/pdf/SSBK_without_Microscope.pdf | Physics: https://ncert.nic.in/division/dek/pdf/SSPhyLaboratoryKit.pdf
- **Retrieval/authentication:** Direct follow/click for all four PDFs returned HTTP 502 in the 2026-11-09 web pass; previous 2026-11-08 re-check also recorded 502.
- **Uploaded-copy provenance:** Local uploaded copies exist only for MSCL and Biology-with-microscope; no Physics or Biology-without-microscope attachment bytes recorded.
- **Evidence limit:** Official listing evidence only; no new official attachment bytes, SHA-256, PDF metadata or procurement revision verified.
- **Affected tasks/packs:** XI/XII Physics, XI/XII Chemistry, XI/XII Biology; variant-specific microscope inventory
- **Unknown fields:** Official attachment content/revision, procurement BOM, delivered quantities, makes, materials, ranges, tolerances, acceptance criteria, supplied-vs-school-managed items.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Recover official attachment payloads; hash and compare to local copies; inspect each page and reconcile exact BOM, variants and safety notes.

### SRC-NCERT-PHY-MANUAL-13164 — Manual of Secondary Stage Physics Laboratory Kit for Grades XI and XII — code 13164

- **Official index/listing:** Manual identity recorded as NCERT code 13164, ISBN 978-93-5292-653-4; first edition October 2018; reprints listed through August 2024. Official listing and manual text were previously inspected; official catalogue lists code 13164.
- **URL(s):** https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf
- **Retrieval/authentication:** Text layer/item register inspected previously; screenshot/page visual audit returned HTTP 502. Not re-downloaded/byte-hashed in the 2026-11-09 pass.
- **Uploaded-copy provenance:** No uploaded local PDF hash is recorded in the current item-register header.
- **Evidence limit:** 106-row item schedule transcribed to data/catalogues/ncert_physics_kit_manual_items.csv. Register says short labels/uses only; procurement fields remain unknown.
- **Affected tasks/packs:** XI Physics EXP/ACT/PRJ, XII Physics EXP/ACT/PRJ; candidate no-match flags include Fortin barometer, travelling microscope, phototransistor/IR source and other devices.
- **Unknown fields:** Full procurement specification, delivered quantities, material grades, tolerances, instrument ratings/calibration, exact assembly compatibility; GeM 105-item schedule reconciliation.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Preserve the manual as a supporting source, retrieve the separate NCERT specification attachment and authenticated GeM schedule; compare all 106 manual rows to the final BOM without treating row count as SKU count.

### SRC-MSCL-UPLOAD — Micro Scale Chemistry Laboratory Kit specification — MSCL_copy.pdf

- **Official index/listing:** Official NCERT specification index lists MSCL Grades XI–XII; direct PDF returned HTTP 502 on 2026-11-09.
- **URL(s):** Official listing: https://ncert.nic.in/division/dek/pdf/MSCL.pdf | official index: https://ncert.nic.in/division/dek/specification_documents.php?ln=en
- **Retrieval/authentication:** User upload OCR-inspected; 65 pages; 19,798,501 bytes; PDF metadata 2025-03-21 09:10:15 UTC; SHA-256 db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d. Hash identifies uploaded bytes only. A separate NCERT-hosted 2018 MSCL manual has now been retrieved and text-extracted; it is not the current kit specification attachment.
- **Uploaded-copy provenance:** MSCL_copy.pdf; OCR register data/catalogues/ncert_mscl_spec_items.csv; hash db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d. Separate manual: https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf; ISBN 978-93-5007-861-7; first edition April 2018; catalogue code 13166; no source-byte hash in this work unit.
- **Evidence limit:** Upload rows 1–54 catalogued; row 55 is document development team. Upload is NOT_BYTE_AUTHENTICATED against NCERT official specification bytes. Its apparatus/consumable schedule is not a supplied reagent BOM. The 2018 manual catalogue has 34 experiment topics, 51 apparatus entries and 124 numbered reagent labels, but does not establish current kit contents, supplied quantities or safe learner handling. PDF page screenshot retrieval failed; text extraction only.
- **Affected tasks/packs:** RBSE-XI-CHEM-PRA-01..PRA-19; RBSE-XI-CHEM-PRJ-01..PRJ-08; RBSE-XII-CHEM REDOX/QUAL/OPT/KIN/THERMO/ELECTRO groups.
- **Unknown fields:** Official source equivalence, reagent identities/concentrations/purity/hydration state, school-managed items, method validity, supplied-vs-optional boundaries, revision and procurement acceptances.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Authenticate uploaded bytes against official MSCL attachment; obtain/verify a separate full reagent inventory and experiment-method source; mark school-managed and hazardous entries separately.

### SRC-BIO-WITH-MICROSCOPE-UPLOAD — Secondary Stage Biology Kit with Microscope — SSBK_with_Microscope_copy.pdf

- **Official index/listing:** Official index separately lists Biology with microscope; direct PDF returned HTTP 502 on 2026-11-09.
- **URL(s):** Official listing: https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf | official index: https://ncert.nic.in/division/dek/specification_documents.php?ln=en
- **Retrieval/authentication:** User upload partially OCR/visually audited; 199 pages; 59,620,970 bytes; metadata 2025-03-21 09:08:43 / 09:39:13 UTC; SHA-256 c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2. Hash identifies uploaded bytes only.
- **Uploaded-copy provenance:** SSBK_with_Microscope_copy.pdf; catalogue data/catalogues/ncert_biology_with_microscope_spec_items.csv; hash c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2.
- **Evidence limit:** 177 index rows: 1–83 equipment/consumables, 84–133 visual cards, 134–140 embedded specimens, 141–175 permanent slides, 176 microscope, 177 documentation credit. Row 84, 134, 141, 176 have individual sample/visual checks; most remaining card/specimen/slide pages are index-only.
- **Affected tasks/packs:** XI Biology 22 rows and XII Biology 28 rows.
- **Unknown fields:** Exact-byte NCERT identity, detailed content of index-only cards/slides/specimens, full page-wise specifications, supplied reagents, microscopy/slide quality, variant-dependent items, licensing.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Authenticate copy; inspect each index-only page individually; preserve card/specimen/slide modality; validate image identity/taxonomy with Biology experts; capture variant requirements.

### SRC-BIO-WITHOUT-MICROSCOPE — Secondary Stage Biology Kit without Microscope

- **Official index/listing:** Official index lists this as a separate Grades XI–XII kit variant.
- **URL(s):** https://ncert.nic.in/division/dek/pdf/SSBK_without_Microscope.pdf
- **Retrieval/authentication:** No local copy; official direct link returned HTTP 502 on 2026-11-09; previous alternate download attempt failed/was over retrieval limit.
- **Uploaded-copy provenance:** No upload bytes or local catalogue exist in current repository.
- **Evidence limit:** NOT_RETRIEVED; no variant delta can be inferred.
- **Affected tasks/packs:** All XI/XII Biology task rows and future hardware/profile configuration for microscope availability.
- **Unknown fields:** What microscope, slides, cards, specimens and other items are omitted/modified; whether shared components/quantities differ.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Retrieve official without-microscope PDF; hash it; diff item-by-item against with-microscope variant; model variant-specific inventory and UI availability.

### SRC-NCERT-MANUALS-13163-13166 — NCERT Higher Secondary Biology and Micro Scale Chemistry manuals (codes 13163, 13166)

- **Official index/listing:** Search-indexed official NCERT manual index lists revised Physics, Biology and MSCL English manuals; catalogue identifies Biology code 13163 and MSCL code 13166. Public catalogue search result identifies code/title, not manual content.
- **URL(s):** https://ncert.nic.in/division/dek/kit-manuals.php?ln=en | publication catalogue: https://ncert.nic.in/uploads/publication/other_books_new.pdf
- **Retrieval/authentication:** Direct NCERT manual-index page timed out in the 2026-11-09 web pass; no full official Biology or MSCL manual bytes obtained in this subtask.
- **Uploaded-copy provenance:** No authenticated local official manual PDF hash for Higher Secondary Biology/MSCL is recorded in the source registers referenced here.
- **Evidence limit:** Catalogue metadata only for Biology/MSCL manuals; do not confuse the Biology class XI lab manual or uploaded specification copy with the Higher Secondary Biology kit manual.
- **Affected tasks/packs:** XI/XII Biology and XI/XII Chemistry task procedures, method validation, school-managed reagents/consumables.
- **Unknown fields:** Official manual content, exercises, reagent inventories, school-managed items, exact procedures, copyright permissions for derived text/images.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Obtain official manuals, record codes/ISBN/edition/reprint/date/hash, inspect exercise-to-RBSE mapping; do not treat metadata as content evidence.

### SRC-GEM-PHYSICS-105-106 — GeM Physics bid item count versus NCERT manual item count

- **Official index/listing:** A public GeM bid dated 2026-03-15 for six Secondary Stage Physics Laboratory Kits states 105 items per kit in an attached list. This is a bid document, not the NCERT master specification.
- **URL(s):** Discovery copy: https://docs.primetenders.com/documents/tender/2026/03/31/12491799102179779884/GeM-Bidding-9125140.pdf
- **Retrieval/authentication:** Tender bid document discovery record inspected; actual attached 105-item schedule bytes were not inspected/authenticated.
- **Uploaded-copy provenance:** No authenticated attachment list/hash in repository.
- **Evidence limit:** Physics manual contains 106 numbered item rows (including Meter Bridge item 106). Difference 105 vs 106 is unresolved, not a proven contradiction.
- **Affected tasks/packs:** All Physics task crosswalks; item additions/deletions, BOM and procurement mapping.
- **Unknown fields:** Actual 105-item attachment, revision, grouping of composite rows, whether tender consolidates/removes manual line items.
- **Severity:** HIGH_PHASE_1
- **Required next action:** Retrieve GeM attachment list itself and compare each row to the 106-row manual; do not delete or renumber rows to force count equality.

### SRC-MISSING-PHYSICS-INSTRUMENTS — Physics apparatus not found or only partially found in current manual crosswalk

- **Official index/listing:** Candidate source item catalogue lists 106 rows; current RBSE mapping flags explicit missing/partial instruments.
- **URL(s):** Physics manual register: https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf
- **Retrieval/authentication:** Manual text item schedule inspected; procurement attachment not retrieved.
- **Uploaded-copy provenance:** No separate procurement BOM.
- **Evidence limit:** The official NCERT Physics manual preface (2018 first edition; reprints listed through August 2024) explicitly says the travelling microscope and Searle's apparatus were still being improvised for future inclusion in the kit; students can complete the required number of experiments using the prescribed alternatives when those items are absent. This confirms the travelling microscope is absent from that manual edition's 106-row kit schedule, but does not establish what a later separate procurement specification contains. Fortin barometer (RBSE-XI-PHY-PRJ-08) and phototransistor/IR source (RBSE-XII-PHY-PRJ-04) remain no-match/partial-match gaps. Other AC source/lux sensor/photometer/electromagnet/specific ratings remain unverified.
- **Affected tasks/packs:** RBSE-XI-PHY-PRJ-08; RBSE-XII-PHY-EXP-14; RBSE-XII-PHY-PRJ-04; relevant Class XII Physics activities/projects.
- **Unknown fields:** Current separate NCERT procurement specification content, whether school-managed/optional items supplement the kit, current quantities/materials/ranges/tolerances/calibration and exact technical specifications for all remaining missing/partial devices.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Preserve the manual-edition omission as an explicit source fact; retrieve the current separate procurement specification and any official supplementary instrument schedules; classify each task apparatus as kit-supplied, school-managed, optional, or external-required only when primary evidence supports it. Keep Fortin barometer and phototransistor/IR source distinct; no fictional catalogue IDs.

### SRC-CHEM-REAGENT-BOM — Chemistry reagents, sample and method inventory

- **Official index/listing:** NCERT's official kit-specification index lists the separate MSCL procurement attachment. The NCERT-hosted *Manual of Microscale Chemistry Laboratory Kit* has now also been retrieved as a distinct historical teaching/manual source: https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf. Publication catalogue identifies the Higher Secondary MSCL manual as code 13166.
- **Retrieval/authentication:** Official-hosted manual text extracted; first edition April 2018, ISBN 978-93-5007-861-7, ALL RIGHTS RESERVED. Page screenshot attempt returned HTTP 502; no byte SHA-256 captured. Manual contents index gives 34 experiments and 51 apparatus entries; chemical/reagent list gives 124 numbered labels.
- **Uploaded-copy provenance:** The previously supplied `MSCL_copy.pdf` remains separately recorded at 19,798,501 bytes, 65 pages, SHA-256 db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d. This hash identifies the upload only, not NCERT official bytes.
- **Evidence limit:** The 2018 manual is not the current procurement specification or a verified supplier BOM. Its 124 labels do not establish actual supplied quantities, formulation, purity, concentration, batch identity, or permission for school/student handling. All 124 LabVerse reagent rows are blocked from live use pending SDS and expert review.
- **Affected tasks/packs:** All 19 XI Chemistry practical groups, 8 XI Chemistry projects/options; all 14 XII Chemistry task/choice records.
- **Unknown fields:** Current full reagent BOM, CAS/identity where ambiguous, grade/concentration/purity/hydrate, supplied quantity/packaging, school-managed/optional entries, current revision, validated methods, disposal route and written safety approval.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Retrieve and hash the current official MSCL procurement attachment; compare it with the 2025 uploaded copy and historical manual. Resolve every RBSE task reagent against primary source and current SDS, with exact identity/formulation and safety sign-off; do not enable live handling or arbitrary reactions.

### SRC-BIO-SAMPLE-AND-MEASUREMENT-BOM — Biology samples, environmental instruments and prepared specimen identity

- **Official index/listing:** Two kit variants listed separately; neither attachment retrieved in this pass.
- **URL(s):** Biology with microscope specification: https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf | without microscope: https://ncert.nic.in/division/dek/pdf/SSBK_without_Microscope.pdf
- **Retrieval/authentication:** Uploaded with-microscope OCR index available but partially page inspected and unauthenticated.
- **Uploaded-copy provenance:** SSBK_with_Microscope_copy.pdf hash c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2.
- **Evidence limit:** Task gaps include quadrat frame, soil texture/WHC measurement method, turbidimeter/nephelometer, SPM air sampler/flow meter, pollen medium/samples, named flower/onion/soil/water samples, permanent T.S. testis/ovary slide, Trichophyton visual/slide, and index-only slide/card/specimen contents.
- **Affected tasks/packs:** RBSE-XI-BIO-BM/ZM/BN/ZN/SP; RBSE-XII-BIO-BM/ZM/BN/ZN/SP; RBSE-XII-BIO-PRJ-01.
- **Unknown fields:** Supplied specimens/consumables, school-managed items, measuring instrument accuracy/calibration, safe water micrographs, slide/specimen identity, rights and collection ethics.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Retrieve both kit variants; inspect index-only pages; obtain authoritative specimen/instrument sources and validated datasets; obtain Biology/ecology/microbiology reviewer approval.

### SRC-RIGHTS-AND-REUSE — NCERT manual, PDF, image and derived-content reuse

- **Official index/listing:** Physics manual register records ALL RIGHTS RESERVED; source item labels are used briefly for traceability, but artwork/figures are not copied.
- **URL(s):** https://ncert.nic.in/division/dek/kit-manuals.php?ln=en | official Physics manual URL above
- **Retrieval/authentication:** Rights notice recorded in official Physics manual and source compliance audit; per-asset licensing has not been completed.
- **Uploaded-copy provenance:** Uploaded PDF hashes identify bytes only and do not grant reuse permission.
- **Evidence limit:** NCERT source manuals/diagrams/images cannot be copied into app as a default. Each external dataset/image must carry licence and attribution.
- **Affected tasks/packs:** All packs and original 3D/2D/slide/card/diagram assets.
- **Unknown fields:** Per-resource licence/permission, attribution format, derived-work boundaries, commercial redistribution terms.
- **Severity:** BLOCKER_PHASE_1
- **Required next action:** Create asset provenance/license manifest; use original geometry/illustration or licensed/public-domain data; document attribution and counsel review where required.

## 4. New procurement recovery lead discovered — 2026-11-09

A current third-party tender index lists **GeM bid GEM/2026/B/8248336**, published 6 November 2026 by the Basic Education Department, Uttar Pradesh, for:
- 364 Secondary Stage Physics Laboratory Kits;
- 516 Micro Scale Chemistry Laboratory Kits;
- 556 Secondary Stage Biology Laboratory Kits without microscope;
- total 1,436 kits; listed bid closing 16 November 2026 at 18:00 IST.

The third-party listing names these attachments:
- `ss_phy_laboratory_kit_2025-08-05-14-27-28_7159927680c0a63ae4624c30ec52c8b8.pdf`
- `mscl_2025-08-05-14-26-21_3a5a681bb380b96ec69bc9e461f50115.pdf`
- `ssbk_without_microscope_2025-08-05-14-23-11_a136470235d8a05b047e905400caead5.pdf`
- `1793944092.xlsx` plus bid/ATC documents.

Discovery source: https://www.tenderdetail.com/Indian-Tenders/TenderNotice/58427290/5da42d2773dfee38b9a9444aa4b7809d (third-party tender index). A second third-party listing also reports bid ID and kit quantities. The official portal is GeM, https://bidplus.gem.gov.in/, where the bid ID should be checked.

**Authentication state:** NOT RETRIEVED / NOT HASHED / NOT AUTHENTICATED. The filename suffixes, bid listing, quantities and dates are discovery metadata only. The 2025-08-05 filename date does not prove an NCERT revision or that the documents match NCERT's official specification PDFs. Do not promote these attachment names to official source status or merge their item rows until the official GeM attachment payloads or NCERT original bytes are retrieved and compared. Do not automate seller login or bypass access controls.

This is a promising recovery route for three currently missing attachments (Physics, MSCL and Biology without microscope), but it does not close any source-authentication gate yet.

### 4.1 Second retrieval pass: public GeM attachment recurrence and official-route limits (2026-11-09)

A second retrieval attempt was made after the current-bid discovery:

- The official GeM BidPlus domestic host and public document routes could not be read through the current retrieval channel. The official GeM global-bid listing page was reachable, but it is a Global Tender Enquiry interface and did not expose the domestic Basic Education Department bid.
- The third-party indexes were cross-checked against several earlier public GeM tender records. The same three NCERT kit attachment filenames recur in multiple separate GeM bid listings. This improves confidence that the filenames are persistent shared attachment names, but it does **not** prove that the byte payloads are identical, official, current or unchanged.
- No publicly readable attachment payload or BOQ bytes were obtained from the tender-index pages. The page listings expose document names (and, on one TenderKart record, displayed file sizes) but not a direct unauthenticated download URL in the current retrieval interface.
- No GeM seller-login workflow, session-cookie extraction, credential use, anti-bot bypass or paid third-party API was used.

The machine-readable recurrence ledger is `data/catalogues/gem_kit_specification_mirror_recurrence.csv` (10 unique tender references). Listed filename recurrence counts:
- Physics specification filename: 9 of the 10 third-party tender records.
- MSCL specification filename: 10 of the 10 records.
- Biology-without-microscope filename: 8 of the 10 records.
- Current bid `GEM/2026/B/8248336` also lists BOQ `1793944092.xlsx`; it remains listing metadata only.

TenderKart displayed 11.63 MB for the Physics file, 18.89 MB for MSCL and 17.60 MB for Biology without microscope in one older tender record. These are third-party page metadata only; no downloaded bytes exist to compare or hash. All rows in the recurrence ledger remain `LISTING_ONLY_NOT_AUTHENTICATED`.

The same second pass recovered the exact user-supplied RBSE 2027 PDF bytes from the conversation Library and recorded their SHA-256 and PDF metadata in the RBSE gap entry. This closes the missing-upload-hash documentation gap, not official RBSE byte authentication.

**Result:** source discovery coverage improved; no NCERT/GeM attachment-content gate closed. Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.

## 5. Exact uploaded-copy manifests

| Uploaded copy | Page count | Size | PDF metadata | SHA-256 | Authentication |
|---|---:|---:|---|---|---|
| MSCL_copy.pdf | 65 | 19,798,501 bytes | 2025-03-21 09:10:15 UTC | db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d | Uploaded bytes identified; official identity NOT VERIFIED |
| SSBK_with_Microscope_copy.pdf | 199 | 59,620,970 bytes | 2025-03-21 09:08:43 / 09:39:13 UTC | c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2 | Uploaded bytes identified; official identity NOT VERIFIED |
| SSBK_without_Microscope | — | — | — | — | NOT RETRIEVED |
| RBSE 11_2027_copy.pdf | — | — | — | Not recorded in master | User-supplied; official-byte authentication pending |
| RBSE 12_2027_copy.pdf | — | — | — | Not recorded in master | User-supplied; official-byte authentication pending |
| NCERT Physics procurement specification | — | — | — | — | NOT RETRIEVED; do not substitute the separate Physics manual |
| NCERT MSCL/SSBK official specification attachments | — | — | — | — | Officially listed; direct retrieval blocked |

## 6. Procurement and task-level consequences

- A candidate item ID in a manual/spec OCR catalogue establishes only that the source register names the item. It does not establish current purchase supply, quantity, dimensions, make/model, grade, tolerance, accuracy, calibration, acceptance method or school-managed/optional status.
- Chemistry apparatus entries do not establish acids, bases, salts, indicators, solvents, concentrations, reagent purity or reaction methods. A separate reagent/material BOM is required.
- Biology card/specimen/slide categories must stay distinct. OCR/index-only entries cannot be used to claim page-level visual identity. The with-microscope and without-microscope variants must remain separate inventory profiles.
- The Physics manual lists 106 item rows. A separate 15 March 2026 GeM bid states 105 items, but its attached schedule was not inspected. Preserve this as unresolved discovery evidence, not a proven contradiction.
- The explicit task-level no/partial-match flags remain: XI Physics Fortin barometer; XII Physics travelling microscope; XII Physics phototransistor/IR source; Biology task-specific instruments/specimens listed above.
- No substitute asset should be represented as the original instrument. Candidate virtual models must be labelled as proposed/simulated until verified.

## 7. Phase 1 exit gates

| Gate | Status |
|---|---|
| Six-pack RBSE task-index reconciliation (171/171) | DONE — documentary only |
| Official 2027 RBSE PDF byte authentication and comparison | OPEN |
| Official NCERT procurement attachment retrieval/authentication | OPEN |
| Full NCERT kit manual retrieval/edition/hash capture for Biology/MSCL | OPEN |
| Biology-without-microscope variant comparison | OPEN |
| Procurement BOM quantities/materials/ranges/tolerances/calibration | OPEN |
| Chemistry reagent/material/school-managed inventory | OPEN |
| Task-to-apparatus expert review and no-match resolution | OPEN |
| Index-only Biology slide/card/specimen page inspection and taxonomy review | OPEN |
| Original 3D/2D asset specifications and rights/license clearance | OPEN |
| Deterministic model domains, equations, units and uncertainty | OPEN |
| Independent test vectors and executed scientific regression tests | OPEN |
| Safety/ethics review and subject-expert approvals | OPEN |

**Decision: Phase 1 remains IN PROGRESS. Phase 2 remains BLOCKED.** The task index is complete; the evidence and implementation gates are not.

## 8. Next work unit

Continue pursuing primary-source bytes for the official RBSE 2027 PDFs and all four NCERT kit specification attachments through openly accessible official routes. For the recurring GeM attachment filenames, obtain the actual files only from a permitted public source or user-provided copy, record provenance before inspection, hash every byte payload and compare with the NCERT-index targets and existing uploads. In parallel, continue Phase 1 source-to-item-to-asset/model/test gap resolution on already inspectable material. Do not promote third-party mirrors to official status or move to Phase 2 until all Phase 1 exit gates have evidence and approvals.


### 4.2 Official Physics manual preface clarifies the travelling-microscope omission (2026-11-09)

The NCERT-hosted Physics kit manual (publication code 13164; ISBN 978-93-5292-653-4) was re-opened as a PDF text extraction. Its preface explains that Searle's apparatus and the travelling microscope were still being improvised for future inclusion in the kit in that edition. It also states that learners can complete the required number of experiments using available prescribed options when those devices are absent.

This is stronger evidence than simply failing to find the term in the 106-row catalogue: for that manual edition, the travelling microscope is an acknowledged omission from the kit design. It does **not** establish whether a later separate procurement specification or another school-managed instrument schedule includes it.

The RBSE XII Physics crosswalk row `RBSE-XII-PHY-EXP-14` therefore retains the travelling microscope as a distinct apparatus for the named glass-slab method, but now records that it is **not included in the cited NCERT manual edition**, rather than presenting the absence as an unexplained catalogue miss. The glass slab is not a substitute for the microscope. Fortin barometer and phototransistor/IR source gaps are unchanged.

The PDF text extraction was readable, but its page screenshot attempt returned HTTP 502. This evidence is recorded as text-extracted, not visually inspected. The manual carries an ALL RIGHTS RESERVED notice; LabVerse will use paraphrased source notes and original assets rather than reproducing NCERT artwork/text.

Source: https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf (Preface; PDF text lines 85–105 in the retrieval view).


### 4.3 NCERT-hosted MSCL teaching manual recovered and indexed (2026-11-09)

The legacy NCERT-hosted *Manual of Microscale Chemistry Laboratory Kit* is now available at https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf. It identifies itself for Classes XI–XII, first edition April 2018, ISBN 978-93-5007-861-7, and carries an ALL RIGHTS RESERVED notice. The NCERT publication catalogue associates the Higher Secondary MSCL manual with publication code 13166.

The manual's contents index exposes 34 experiments in 11 chapters; its kit-description section lists 51 apparatus entries; its reagent section lists 124 numbered chemical/material labels. LabVerse added separate paraphrased indices and a topic-level crosswalk to the 41 RBSE XI/XII Chemistry task records. The crosswalk explicitly preserves partial and no-match outcomes; it does not establish equivalent methods or validated results.

**Critical separation:** this is a 2018 educational manual, not the current MSCL procurement specification attachment. The current NCERT specification index lists the latter separately, and its direct PDF retrieval remains HTTP 502. The older manual's 124 reagent labels are not a reagent BOM, delivery manifest or safety authorisation.

All 124 reagent records are marked `BLOCKED_NO_LIVE_USE; SIMULATION_REFERENCE_ONLY`, with SDS/identity/concentration/exposure review pending and no approval. The manual names several materials requiring specialist risk review (including arsenic oxide, benzene, carbon disulphide, chloroform/carbon tetrachloride, bromine water, hydrogen sulphide, lead acetate, sodium metal, uranyl zinc acetate and concentrated mineral acids). The mercury thermometer item is explicitly excluded from physical learner use. No protocol, exact concentration, mixture ratio or handling instruction was copied into the catalogues.

New LabVerse artifacts:
- `docs/PHASE_1_1_MSCL_OFFICIAL_MANUAL_REVIEW.md`
- `data/catalogues/ncert_mscl_manual_experiment_index.csv`
- `data/catalogues/ncert_mscl_manual_apparatus_index.csv`
- `data/catalogues/ncert_mscl_manual_reagent_index.csv`
- `data/catalogues/ncert_mscl_manual_to_rbse_chemistry_crosswalk.csv`

Read-back validation: 12/12 checks passed. These validate row counts/schema, preserved numbering/duplicate Potassium iodate entries, universal reagent blocks, mercury-asset restriction, full 41/41 RBSE Chemistry task crosswalk coverage and continued separation from the current procurement gap. They are documentary checks only.


### 4.4 Historical MSCL manual vs 2025 uploaded candidate item comparison (2026-11-09)

A line-by-line comparison was recorded in `docs/PHASE_1_1_MSCL_MANUAL_UPLOAD_ITEM_RECONCILIATION.md` and `data/catalogues/mscl_manual_to_2025_upload_item_reconciliation.csv`.

- 51/51 apparatus records from the 2018 manual receive candidate mappings into the uploaded `MSCL_copy.pdf` item catalogue.
- Manual 50 mL and 10 mL beaker rows are consolidated into uploaded row NCERT-MSCL-SPEC-003; the manual's 5 mL glass pipette is at uploaded row NCERT-MSCL-SPEC-054.
- Four uploaded-candidate-only item rows: pocket balance (040), glazed tile (051), gas generator (052), tongs (053).
- The comparison flags material, dimension, range, quantity and configuration differences, including wire-gauze asbestos content and several quantity differences.

**Authentication boundary:** this comparison is between an NCERT-hosted 2018 teaching manual and an unauthenticated 2025 user upload. These are not official current-source amendments or delivered-kit deltas. Keep the current specification authentication gate open.


### 4.5 MSCL reagent-list completeness cross-check (2026-11-09)

Manual body and appendix text were checked against the numbered 124-label reagent register. Potassium permanganate is named in experiments 2.5/2.6 but has no exact standalone label in the numbered list; potassium iodide is named in experiment/appendix text but is represented ambiguously at best by the numbered label “Iodine solution” (no standalone Potassium iodide row). Potassium iodate is a different chemical and must not be used as a match for potassium permanganate. This demonstrates that the 124-item register is not an exhaustive list relative to the manual's experiment text. Two supplement records are in `data/catalogues/ncert_mscl_manual_internal_reagent_omissions.csv`; no recipe or concentration has been copied. Both remain blocked from live use pending current procurement documents, SDS and expert sign-off.


### 4.6 Biology task-to-item reference integrity and unresolved gaps (2026-11-09)

The XI and XII Biology crosswalks were combined into a one-row-per-task register. It contains 22 Class XI and 28 Class XII task/choice records (50 total). Every candidate source item ID was checked against the 177-row user-uploaded with-microscope item catalogue; 0 dangling references were found. This is reference-integrity validation only. The upload is not byte-authenticated against NCERT; 49 visual card rows, 34 permanent slide rows and several specimen/visual-aid pages remain index-only. The Biology without-microscope variant and official Biology manual code 13163 are not retrieved. The consolidated outputs are `docs/PHASE_1_1_BIOLOGY_TASK_LEVEL_GAP_REGISTER.md` and `data/catalogues/biology_task_level_gap_register.csv`.

The register explicitly retains the unresolved task gaps: 37/50 rows have sample/specimen gaps, 11/50 have measurement/apparatus gaps, 29/50 have item/content verification gaps, and 10/50 have reagent/media gaps. All 50 remain open for source authentication, Biology expert review and method/result validation. Do not promote candidate mappings to verified assets or runnable experiments.
