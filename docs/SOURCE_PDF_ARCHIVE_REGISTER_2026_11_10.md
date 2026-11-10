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

The repository currently stores:
- source IDs, original filenames where recovered, file sizes, page counts and SHA-256 hashes;
- derived CSV catalogues, source page references, task mappings and safety/evidence statuses;
- no-repeat-upload instructions and official source URLs.

The original PDF binaries themselves have **not** been committed to GitHub. The accessible originals remain in ChatGPT conversation/Library storage. This register ensures future work can resume from the repository's extracted data and hash records without repeatedly asking the user for the same PDFs. A missing old raw attachment is recorded honestly rather than invented as recovered.

## Resume order

1. Use current GitHub catalogues first; never repeat PDF requests.
2. Recover the previously supplied Biology without-microscope attachment/catalogue internally.
3. Keep Physics manual and Physics current procurement specification as separate documents.
4. Continue item-level source → practical → dashboard inventory → asset/model/test mapping.
5. Keep authentication, safety, rights and expert review statuses explicit. Candidate data may appear in the dashboard, but must never be promoted to verified stock or executable scientific procedures without review.
