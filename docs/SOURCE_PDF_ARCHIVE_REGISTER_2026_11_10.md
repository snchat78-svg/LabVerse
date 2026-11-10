# Persistent PDF Source Archive Register

**Last audited:** 2026-11-10  
**Purpose:** prevent repeated PDF requests and preserve exact source provenance for LabVerse across future sessions.

## Critical no-repeat rule

The user confirms that Physics, Chemistry and Biology PDF materials were supplied in earlier work. Every record in the machine-readable register is marked `no_repeat_upload=TRUE`. **Do not ask the user to upload these files again.** If a raw prior attachment is not surfaced in a current session, treat that as an internal retrieval/index gap and continue from the extracted GitHub catalogues wherever possible.

## Verified byte-identical/currently available source files

| Source | Original filename | Bytes | Pages | SHA-256 | Current location/status |
|---|---|---:|---:|---|---|
| Biology kit manual 13163 | `Manual_Secondary_Stage_Biology_Laboratory_Kit-11&12_EN_111.pdf` and `... (1).pdf` | 20,028,910 each | 141 | `c6303b94bcb9a94d08a54aabf56f22d94aaf87f296d083917ab8b6fb6a6bc086` | Current conversation upload; two copies are one unique byte stream |
| Chemistry MSCL specification candidate | `MSCL_copy.pdf` | 19,798,501 | 65 | `db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d` | ChatGPT Library; cover visually checked |
| RBSE Class XI syllabus 2026–27 | `11_2027_copy.pdf` | 23,343,499 | 155 | `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5` | ChatGPT Library; practical scope extracted |
| RBSE Class XII syllabus 2026–27 | `12_2027_copy.pdf` | 18,279,805 | 169 | `2249c6233817ba625460a97b1fab829d57d5ce6842a19bb12be80794c40e7e34` | ChatGPT Library; practical scope extracted |

## Earlier source PDFs already represented in repository records

| Source | Prior record | Derived records | Remaining limitation |
|---|---|---|---|
| Biology kit with microscope | 199 pages; 59,620,970 bytes; SHA-256 `c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2` | 177-row item/visual catalogue | Upload hash identifies user-supplied bytes only; exact NCERT byte equality and most visual pages not verified |
| Biology kit without microscope | User confirms prior upload; exact filename/bytes/hash not surfaced in current index | No separate item catalogue currently found | Recover existing prior artifact/catalogue internally; do not request another upload |
| Physics kit manual 13164 | Existing 106-row source item schedule | `data/catalogues/ncert_physics_kit_manual_items.csv` | Exact earlier raw source filename/hash not surfaced in current index |
| Current Physics kit specification | User confirms prior Physics PDFs were supplied | Source gap register and 80-task traceability | Current exact attachment/hash/item catalogue not surfaced here; do not request a repeat upload |
| Historical MSCL manual 13166 | Existing extracted manual registers | 51 apparatus rows; 124 reagent labels; safety screen | This is a separate teaching manual, not the uploaded MSCL specification candidate |

## Biology manual page audit

The newly received manual code 13163 was rendered and visually inspected on PDF pages 28–29 (printed pages xxvii–xxviii). Both pages show a numbered list of 58 chemicals/reagents/stains. The note beneath item 58 says these chemicals are **not provided with the kit** and are managed by the institution/school/teacher/related staff. The list is retained in `data/catalogues/ncert_biology_manual_reagents_58.csv`.

The exact printed source label at item 37 is `Petroleum Rther`; preserve the printed label in the source record rather than silently correcting it to a presumed spelling.

## GitHub binary-storage boundary

The repository is currently **public**. Several NCERT kit manuals/specifications carry all-rights-reserved notices. Without a clear redistribution licence or permission, the original copyrighted PDF binaries must not be copied into this public repository. This is separate from source receipt: it does **not** mean the user never supplied the PDFs.

The repository stores:
- source IDs, original filenames where recovered, file sizes, page counts and SHA-256 hashes;
- derived CSV catalogues, source page references, task mappings and safety/evidence statuses;
- no-repeat-upload instructions, official source URLs and current/prior attachment status.

Accessible original PDFs remain in the user's ChatGPT conversation/Library files; derived catalogues and hash evidence are persisted in GitHub. A few prior attachments (notably the old Biology-without-microscope and Physics procurement PDFs) are acknowledged as previously supplied but their raw bytes are not surfaced in the current file index. **Do not ask for them again.** Resume from GitHub's stored registers and extracted catalogues, and recover old raw bytes internally only when available. A missing old hash is left UNKNOWN, never invented.

Do not change the visibility of the existing public LabVerse repository just to store PDFs.

## Resume order

1. Use current GitHub catalogues first; never repeat PDF requests.
2. Recover the previously supplied Biology without-microscope attachment/catalogue internally.
3. Keep Physics manual and Physics current procurement specification as separate documents.
4. Continue item-level source → practical → dashboard inventory → asset/model/test mapping.
5. Keep authentication, safety, rights and expert review statuses explicit. Candidate data may appear in the dashboard, but must never be promoted to verified stock or executable scientific procedures without review.

## Current-session upload receipt — 2026-11-10 (append-only)

The user supplied three files in the current session. Their bytes were fingerprinted directly and are retained in the machine-readable receipt at data/catalogues/source_pdf_upload_receipts_2026_11_10.csv.

| Source | Current filename | Bytes | Pages | SHA-256 | Relationship / inspection |
|---|---|---:|---:|---|---|
| Biology kit manual 13163 | Manual_Secondary_Stage_Biology_Laboratory_Kit-11&12_EN_111 (1).pdf | 20,028,910 | 141 | c6303b94bcb9a94d08a54aabf56f22d94aaf87f296d083917ab8b6fb6a6bc086 | Exact SHA-256 match to existing canonical Biology manual record; no new source variant |
| NCERT MSCL specification candidate | MSCL (1).pdf | 19,808,858 | 65 | b991bd409074478c6ff0557a481b251de4a65727f50872e0c47e14d2df472b2e | Cover and index visually inspected. Same title and 65-page structure as earlier MSCL upload, but file size/hash differ; preserve as a separate byte variant |
| Biology kit specification (with microscope) | SSBK_with_Microscope_222.pdf | 59,620,970 | 199 | 9df41c69800ae3e8da8cac3fae265b8a6c4a4035e4deec16325c32b225309dcb | Cover visually inspected. Same size/page count as prior record but hash differs; preserve both fingerprints and do not assume byte identity |

### Current upload content boundary

- The current MSCL scan cover identifies the NCERT Specification Document of Items — Micro Scale Chemistry Laboratory Kit, Grades 11 & 12. Its visually inspected index contains 55 numbered entries; the final entry is Document Development Team, not kit apparatus. Existing 55-row catalogue is retained; item-specific technical dimensions have not been re-audited from all 65 pages in this pass.
- The current Biology-with-microscope scan cover identifies the NCERT Specification Document of Items — Secondary Stage Biology Laboratory Kit (with microscope), Grades 11 & 12. It remains linked to the existing 177-row item catalogue; this upload's distinct hash does not authenticate it against an official NCERT copy.
- The Biology manual upload is an exact fingerprint match to the already registered manual 13163 copy. Its existing 58-chemical manual catalogue and not-supplied-with-kit note remain in force.
- All three upload records remain no-repeat. Do not ask the user to resend any of these files.

### Repository storage boundary

The public GitHub repository stores fingerprints, file/page metadata, the append-only receipt, existing extracted catalogues and source/evidence states. It does not contain the original PDF binaries. This is deliberate: the uploaded NCERT documents contain rights notices, and no redistribution permission has been established. Do not commit these raw PDF bytes into the public repository or change repository visibility as a workaround.

## Biology with-microscope current-upload index audit — 2026-11-10

- Current variant `SSBK_with_Microscope_222.pdf` SHA-256: `9df41c69800ae3e8da8cac3fae265b8a6c4a4035e4deec16325c32b225309dcb`; prior `SSBK_with_Microscope_copy.pdf` SHA-256 remains `c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2`. Both variants are retained; byte count and page count match but hash does not.
- Current variant cover and index pages 2–5 were visually inspected. All 177 catalogue index numbers are present in sequence and the visual audit CSV records each index page.
- Selective detail-page review confirms Spirit Lamp (PDF p.26), Scalpel (p.53), Dissecting Scissors (p.56), Wire Gauze (p.93), Student Laboratory Microscope (p.198) and credits page (p.199).
- Wire Gauze detail expressly identifies asbestos at its centre; preserve the hazard prohibition. Row 176 is a microscope instrument notwithstanding the index's “Permanent Slide” prefix; row 177 is document credits, not an item.
- This is a selective index/safety audit, not a complete 175-item detail-page verification or an official-byte authentication.
- Audit outputs: `data/catalogues/ncert_biology_with_microscope_index_audit_2026_11_10.csv`, updated `data/catalogues/ncert_biology_with_microscope_spec_items.csv`, and `docs/PHASE_1_1_BIOLOGY_WITH_MICROSCOPE_INDEX_AUDIT_2026_11_10.md`.

### Biology with-microscope safety-item detail audit — batch 2 (2026-11-10)

Additional current-upload pages visually checked: All-Pins p.22; Forceps p.43; Mortar and Pestle p.57; Nails p.64; Surgical Scissors p.66; Dissecting Needle p.67; Claw Hammer with Handle p.68; Laboratory Thermometer p.79. The thermometer is explicitly alcohol-filled in this source (-10 °C to 110 °C; 1 °C graduation; quantity 3), not mercury-filled. The item catalogue and visual audit CSV link each page to the current upload SHA-256. Current coverage: 13/175 physical item detail pages, plus the credits page. The rest remains unaudited.

### Biology glassware detail audit — batch 3 (2026-11-10)

Current-upload PDF pages 13, 14, 15, 55, 69, 72, 73, 74, 75, 83, 84 and 87 were visually checked: Capillary Tubes, Glass Pipette, Cavity Slide, Glass Dropper, Test Tube, Cover Slips, Glass Rod, Glass Tube, Watch Glass, Conical Flask, Boiling Tube and Glass Slide. Key quantities confirmed include 12 test tubes, 100 glass slides (two packs of 50), two packs of 20 cover slips and one packet of six glass tubes. The Biology manual's warning that Watch Glass should never be heated remains applicable. Total current detail audit coverage is 25/175 physical item detail pages plus one credits page; no complete verification claim is made.
