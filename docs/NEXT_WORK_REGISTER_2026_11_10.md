# LabVerse Next Work & Source Closure Register — 2026-11-10

## Work completed in this unit

### PDF preservation / no-repeat protection

- Added `data/catalogues/source_pdf_registry_2026_11_10.csv` with nine source identities and explicit `no_repeat_upload=TRUE`.
- Added `docs/SOURCE_PDF_ARCHIVE_REGISTER_2026_11_10.md` documenting original names, file sizes, page counts, SHA-256, existing derived catalogues, availability and evidence limits.
- Recorded verified hashes for the currently accessible unique originals:
  - Biology kit manual code 13163: 20,028,910 bytes, 141 pages, SHA-256 `c6303b94bcb9a94d08a54aabf56f22d94aaf87f296d083917ab8b6fb6a6bc086`; two uploaded copies are byte-identical.
  - Chemistry `MSCL_copy.pdf`: 19,798,501 bytes, 65 pages, SHA-256 `db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d`.
  - Biology with microscope prior upload: 59,620,970 bytes, 199 pages, SHA-256 `c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2`; existing 177-row catalogue retained.
  - RBSE XI 2026–27: 23,343,499 bytes, 155 pages, SHA-256 `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5`.
  - RBSE XII 2026–27: 18,279,805 bytes, 169 pages, SHA-256 `2249c6233817ba625460a97b1fab829d57d5ce6842a19bb12be80794c40e7e34`.
- Recorded prior Biology-without-microscope and Physics PDF submissions as acknowledged and no-repeat; exact old filenames/hashes are not surfaced in the current file index. No missing hash was invented.
- Updated the five-document NCERT intake manifest and Phase 1 source gap register so the old upload instructions are superseded. No further upload request should be made for previously supplied sources.

### Biology manual check

- Rendered and visually inspected PDF pages 28–29 (printed pages xxvii–xxviii) of Biology manual 13163.
- Confirmed 58 numbered chemicals/reagents/stains and the manual note that they are **not supplied with the kit** and are managed by the institution/school/teacher/related staff.
- Preserved the source's printed item-37 label `Petroleum Rther` exactly rather than silently normalising it.
- Stored the 58-entry list at `data/catalogues/ncert_biology_manual_reagents_58.csv`.

### Dashboard validation track

- Added a Playwright Chromium smoke suite for desktop and mobile subject navigation, search, tap/drag bench interaction, Chemistry and Biology reagent-status boundaries and the Biology Class XI filter.
- First browser attempt stopped before tests: Playwright 1.56.1 did not support the GitHub runner's new Ubuntu 26.04 image. CI was pinned to Ubuntu 24.04; the rerun is pending.
- Dashboard source/catalogue/schema workflow passed on commit `c0b928431621a7b6c9c7b7f7dc25ee87c3accd04`. Browser smoke must not be called PASS until its own run completes successfully.

## Repository phase status

- Phase 0: DONE (documentation baseline only).
- Phase 1 / Phase 1.1: IN PROGRESS; source authentication, remaining no-microscope/Physics record recovery, item-level audit, rights, safety and expert review remain open.
- Phase 2: PARTIAL only for the dashboard-facing read model; scientific domain contracts and result engines remain blocked.
- Phase 3: PARTIAL; dashboard prototype and catalogue checks exist; production React/TypeScript/Vite foundation not complete.
- Phase 4: IN PROGRESS; three-subject navigation and inventory dashboard prototype committed.
- Phase 5 onward: NOT STARTED; no real 3D assets or scientific action/simulation engines.

## Remaining work register

| ID | Remaining work | Current evidence | Next safe action |
|---|---|---|---|
| SRC-01 | Recover Biology without-microscope previously supplied PDF/catalogue | Prior upload acknowledged; no current hash/catalogue surfaced | Search older project records/attachments internally; do not ask user to resend; do not infer variant differences |
| SRC-02 | Recover Physics previously supplied PDFs and exact procurement-spec identity | User confirms previous submission; 106-row Physics manual register and 80-task crosswalk exist | Recover earlier raw source/derived register internally; keep manual and current procurement specification separate |
| SRC-03 | Reconcile current MSCL procurement PDF/BOQ and reagent supply status | MSCL_copy candidate hash + 55-row index; historical 124 reagent labels | Continue from current candidate and old registers; exact official revision/BOQ and supply/formulation details remain a source gap |
| SRC-04 | Finish Biology 177-row page/visual audit and map the manual | 177-row catalogue, 50 task IDs, manual 60 exercises | Audit index-only visual cards/slides/specimens page by page; preserve provenance and taxonomy review |
| SRC-05 | Finish source-to-asset/model/test traceability for all subjects | 171 task-index rows across six packs | Resolve every remaining apparatus, sample, reagent, measurement and evidence gap; keep design-only status |
| UI-01 | Complete desktop/mobile Chromium smoke | Playwright test and Ubuntu 24.04 workflow created; rerun pending | Inspect workflow result and fix any real UI failure |
| UI-02 | Publish live free dashboard | GitHub Pages workflow and setup guide exist; Pages is not enabled yet | One-time repository Settings → Pages → Source GitHub Actions, then run deploy workflow |
| UI-03 | Build real 3D workbench | Current bench uses 2D placeholders | Start real asset scene only after dashboard smoke and asset data contract are stable |
| SCI-01 | Implement validated Physics/Chemistry/Biology scientific engines | Models/rules not implemented | Keep Phase 1 and scientific evidence gates; do not produce simulated results from unreviewed entries |
| GOV-01 | Rights, safety and subject-expert sign-off | Open across source families and practicals | Complete per-item/per-task review before VERIFIED_FOR_USE or physical procedures |

## Important storage truth

GitHub now contains the PDF source register, hashes, extracted catalogues and evidence boundaries. The original PDF binaries themselves are **not committed to the repository**. Accessible originals remain in ChatGPT conversation/Library storage. This is explicitly recorded so future work resumes from the existing source records and does not request repeat uploads.

## Next single action

Complete the Ubuntu 24.04 Chromium smoke workflow. Only after its result is inspected should the next Dashboard implementation task be selected.
