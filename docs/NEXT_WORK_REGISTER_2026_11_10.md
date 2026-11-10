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

- Playwright Chromium desktop/mobile smoke suite passed **9/9 groups** on commit `28f8452d1409b086e0a0c80244a7e4874aafaf`: dashboard overview/counts; Physics search/tap/reset; HTML5 drag/drop; practical-to-inventory navigation; candidate setup placeholder; Fortin barometer gap; Chemistry reagent boundary; Biology chemical/class/open-project boundary; mobile navigation.
- Inventory/source-registry/schema integrity workflow also passed on the same commit. Browser run: https://github.com/snchat78-svg/LabVerse/actions/runs/42747870645. Data checks: https://github.com/snchat78-svg/LabVerse/actions/runs/42747870414.
- Practical-source coverage: 169/171 task records have candidate item links. Physics 79/80; Chemistry 41/41; Biology 49/50. All 287 subject-distinct mapped source-item IDs resolve; 0 unresolved IDs. Explicit unmatched tasks are Fortin barometer (not in current 106-row Physics manual register) and the open-ended Biology teacher-assigned investigatory project (no fixed apparatus list).

## Repository phase status

- Phase 0: DONE (documentation baseline only).
- Phase 1 / Phase 1.1: IN PROGRESS; source authentication, remaining no-microscope/Physics record recovery, item-level audit, rights, safety and expert review remain open.
- Phase 2: PARTIAL only for the dashboard-facing read model; scientific domain contracts and result engines remain blocked.
- Phase 3: PARTIAL; React/TypeScript/Vite foundation passes strict typecheck, production build and latest 13/13 Chromium groups; full static-preview parity and architecture hardening remain.
- Phase 4: IN PROGRESS; React has four workspace destinations, item-type/category filters, per-subject task/source coverage, both explicit unmatched-task reasons and a candidate placeholder workbench. Full static-preview parity and real 3D remain.
- Phase 5 onward: NOT STARTED; no real 3D assets or scientific action/simulation engines.

## Remaining work register

| ID | Remaining work | Current evidence | Next safe action |
|---|---|---|---|
| SRC-01 | Recover Biology without-microscope previously supplied PDF/catalogue | Prior upload acknowledged; no current hash/catalogue surfaced | Search older project records/attachments internally; do not ask user to resend; do not infer variant differences |
| SRC-02 | Recover Physics previously supplied PDFs and exact procurement-spec identity | User confirms previous submission; 106-row Physics manual register and 80-task crosswalk exist | Recover earlier raw source/derived register internally; keep manual and current procurement specification separate |
| SRC-03 | Reconcile current MSCL procurement PDF/BOQ and reagent supply status | MSCL_copy candidate hash + 55-row index; historical 124 reagent labels | Continue from current candidate and old registers; exact official revision/BOQ and supply/formulation details remain a source gap |
| SRC-04 | Finish Biology 177-row page/visual audit and map the manual | 177-row catalogue, 50 task IDs, manual 60 exercises | Audit index-only visual cards/slides/specimens page by page; preserve provenance and taxonomy review |
| SRC-05 | Finish source-to-asset/model/test traceability for all subjects | 171 task-index rows across six packs | Resolve every remaining apparatus, sample, reagent, measurement and evidence gap; keep design-only status |
| UI-01 | Complete desktop/mobile Chromium smoke | 9/9 Playwright Chromium groups pass on commit `28f8452d1409b086e0a0c80244a7e4874aafaf` | DONE — maintain regression workflow on dashboard changes |
| APP-01 | Functional React workspace destinations | Learning Lab, Virtual Experiment Lab, Scientific Analysis and Research Studio functional; 10/10 browser groups PASS | DONE for bounded workspace shell; maintain regression checks |
| APP-02 | Maintain React app CI | Typecheck, Vite build and 10/10 React browser groups pass | DONE for current workspace shell; expand smoke tests as controls migrate |
| APP-03 | React inventory filters and traceability summary | Type/category filters; per-subject coverage; Physics and Biology unmatched-task reason cards; React CI passed 13/13 | DONE for current scope; maintain regression tests |
| UI-02 | Publish live free dashboard | GitHub Pages workflow and setup guide exist; Pages is not enabled yet | One-time repository Settings → Pages → Source GitHub Actions, then run deploy workflow |
| UI-03 | Build real 3D workbench | Current bench uses 2D placeholders | Start real asset scene only after dashboard smoke and asset data contract are stable |
| SCI-01 | Implement validated Physics/Chemistry/Biology scientific engines | Models/rules not implemented | Keep Phase 1 and scientific evidence gates; do not produce simulated results from unreviewed entries |
| GOV-01 | Rights, safety and subject-expert sign-off | Open across source families and practicals | Complete per-item/per-task review before VERIFIED_FOR_USE or physical procedures |

## Important storage truth

GitHub now contains the PDF source register, hashes, extracted catalogues and evidence boundaries. The original PDF binaries themselves are **not committed to the repository**. Accessible originals remain in ChatGPT conversation/Library storage. This is explicitly recorded so future work resumes from the existing source records and does not request repeat uploads.

## Next single action

Continue Phase 1.1 page-level Biology kit source audit, then recover the previously supplied Biology-without-microscope and Physics attachments/catalogues internally. Keep all source variants separate and do not request repeat uploads.


## 2026-11-10 — Practical-to-inventory navigation and candidate setup delivered

### Completed
- 169/171 subject task rows now have candidate source-item links; all 287 subject-distinct linked item IDs resolve with no broken source IDs.
- Dashboard task details show candidate links, open them in the inventory tray, disclose the two unmatched task reasons, and offer mapped candidate setup as placeholders.
- Playwright Chromium smoke: 9/9 groups PASS. Source/inventory/schema checks: PASS.
- Verified commit: `28f8452d1409b086e0a0c80244a7e4874aafaf` (repository run refs above).

### Remaining / next
1. **Phase 3:** create production React/TypeScript/Vite app foundation and migrate Dashboard components into it.
2. **Phase 4:** finish polished Dashboard navigation and responsive subject workspaces after migration.
3. **Phase 5:** implement real 3D object scene, with original asset manifests/low-poly apparatus instead of placeholder cards.
4. **Phase 6+:** deterministic action runtime, then separate Chemistry/Physics/Biology validated models.
5. Continue Phase 1 in parallel: recover prior no-microscope/Physics attachment records internally (never re-upload request), finish Biology visual/manual audit, MSCL current procurement/BOM, rights/safety/expert reviews.


## 2026-11-10 — Phase 3 React app foundation verified

### Completed
- Added a pinned React 19 / TypeScript 7 / Vite 8 application in `app/`, preserving the static `dashboard/` preview.
- React now displays all three science directions, XI/XII selector, searchable instrument/material/reagent inventory, source/evidence/safety detail, task list, practical-to-source item navigation and candidate placeholder workbench.
- Strict TypeScript check passed.
- Vite production build passed.
- React Chromium browser smoke passed **6/6 groups** (overview/subjects; Physics search/detail; XI filter; practical mapping/candidate setup; Chemistry/Biology safety details; mobile/no console errors).
- CI result: https://github.com/snchat78-svg/LabVerse/actions/runs/42749292145
- Verified commit: `4b435bb7fdd9ef1190b99dcdab818807e61d9320`.

### Remaining after this bounded unit
1. Make all four workspaces (Learning Lab, Virtual Experiment Lab, Scientific Analysis, Research Studio) functional in React, not static tabs.
2. Migrate remaining static Dashboard controls (item type/category filtering, exact source coverage, unmatched-task gap disclosure).
3. Continue Phase 1 item/page audit, no-microscope/Physics prior-record recovery, MSCL BOM and safety/rights/expert reviews in parallel.
4. Implement original real 3D assets only in Phase 5 after asset contracts and scope; scientific engines remain separately gated.

### Current phase position
- Phase 1 / 1.1: IN PROGRESS
- Phase 2: PARTIAL dashboard read model only; science models/results remain BLOCKED
- Phase 3: PARTIAL; app foundation and validation passed, broader codebase migration remains
- Phase 4: IN PROGRESS
- Phase 5+: NOT STARTED
- Previously supplied PDFs remain registered as no-repeat sources. No new PDF upload is requested.


## 2026-11-10 — React app foundation validated; migration continues

- Phase 3 React/TypeScript/Vite starter is committed and verified. Typecheck PASS; production build PASS; React Chromium smoke 6/6 PASS.
- CI: https://github.com/snchat78-svg/LabVerse/actions/runs/42749292145
- App milestone commit: `4b435bb7fdd9ef1190b99dcdab818807e61d9320`.
- React migration includes subject overview, source inventory search, class filter, item/evidence/safety detail, practical catalogue, task-to-item links and candidate placeholder setup.
- This is not a completed React migration: four workspace tabs are not yet separate functional workflows; remaining category/type filters, unmatched source disclosure and fuller responsive navigation must be ported from the static preview.
- No real 3D assets, deterministic experiment runtime or scientific solvers are implemented.
- **Next single action:** make the four workspace destinations functional in React, preserving source labels, no-repeat PDF registry, static preview and browser CI.



## 2026-11-10 — React workspace destinations verified

### Completed
- Learning Lab practical catalogue and source mapping.
- Virtual Experiment Lab candidate placeholder workbench.
- Scientific Analysis evidence/model-readiness panel with explicit NOT_MODELLED state.
- Research Studio question/hypothesis/alternative/variables/controls draft preview, session-local only.
- Sidebar workspace selection asks for a subject when no subject is active.
- Strict TypeScript check PASS, Vite production build PASS, Chromium smoke **10/10 groups PASS**.
- CI: https://github.com/snchat78-svg/LabVerse/actions/runs/42750813972
- Verified commit: `689af07c086005b79fa6444aff600c620eb789f6`.

### Remaining after this unit
1. Port inventory item-type/category filters and source coverage summary to React.
2. Surface unmatched Physics Fortin barometer and Biology open project reasons in React task cards.
3. Add persistent notebook/research draft storage only after data provenance/version contract; current draft is session-only.
4. Phase 5 real 3D models, Phase 6 runtime and Phase 7–9 scientific engines remain future work.
5. Continue Phase 1 source/rights/safety/expert audit; never ask for previously supplied PDFs again.


## 2026-11-10 — Current-session PDFs fingerprinted; Biology gap regression added

### Completed
- Recorded all three current-session PDFs in data/catalogues/source_pdf_upload_receipts_2026_11_10.csv.
- Biology manual 13163 upload exactly matches its existing registered hash; no duplicate catalogue or copy was created.
- Current MSCL upload is recorded as a distinct 65-page byte variant; cover and index visually inspected; existing 55-row specification register retained.
- Current Biology-with-microscope upload is recorded as a distinct 199-page hash variant; previous fingerprint and 177-row catalogue retained.
- Public-repository binary boundary remains explicit: hashes/receipts/catalogues are committed, raw PDFs are not redistributed without permission.
- Latest prior React workflow result: https://github.com/snchat78-svg/LabVerse/actions/runs/42751276338 — typecheck PASS, production build PASS, 12/12 browser groups PASS.
- Added a React smoke case for Biology open-ended task RBSE-XII-BIO-PRJ-01 so that its missing topic/apparatus match must remain explicit.

### Phase state
- Phase 1/1.1 IN PROGRESS; Phase 2 science solvers BLOCKED; Phase 3 PARTIAL; Phase 4 IN PROGRESS.
- Do not close any science phase from dashboard test evidence alone.

### Next single action
- Continue the page-level Biology kit specification audit: reconcile the with-microscope 177-row catalogue against source page evidence, then recover the previously supplied without-microscope record internally and compare variants only where source evidence supports the comparison. Do not request repeat uploads.
