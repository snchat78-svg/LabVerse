## 2026-11-26 — Physics printed page xii: indexed appearance text captured; visual gate still blocked

- Resumed the exact next pointer from the live register: NCERT Physics item schedule printed page xii, serials 6–12 (NCERT-PHY-KIT-006 through -012). Earlier completed visual rows (2–5 and 19–26) were left unchanged.
- The official NCERT PDF was opened on both official hosts: https://ncert.nic.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf and https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf. The parsed source table confirms item identities and uses on printed page xii (PDF zero-based page index 13).
- The browser PDF screenshot request timed out on both official hosts for page index 13; a direct binary download also failed. Therefore none of serials 6–12 is marked visually checked.
- The official PDF search index exposed supplementary Photograph / Appearance descriptions for all seven items. These were paraphrased into three new fields in the existing 105-row audit: indexed_appearance_description, indexed_appearance_evidence_status, and indexed_appearance_source_url. Their status is deliberately OFFICIAL_PDF_SEARCH_INDEX_DESCRIPTION_ONLY_NOT_VISUALLY_VERIFIED.
- The seven descriptions are clues for later visual comparison only. They do not establish a delivered physical variant, exact dimensions, calibration, manufacturer, material grade, quantity, current stock or procurement. No item IDs, practical links, raw catalogue labels, safety permissions or scientific actions were changed.
- NCERT's manual retains its ALL RIGHTS RESERVED / prior-permission statement. No NCERT figure/image file was copied into LabVerse or treated as an asset.
- The source-data validator now asserts all seven descriptions and, critically, fails if any is incorrectly promoted to a screenshot-verified status. The source-data workflow already watches this CSV and validator.
- Screenshot/visual status remains 12/105 checked, 93/105 pending. The page-xii text-only evidence batch is 7 rows; it does not reduce the pending visual count.

**Phase status:** Phase 1.1 IN PROGRESS; Phase 4.1 IN PROGRESS; Phase 2 BLOCKED; Phase 5 real 3D and Phase 6 runtime NOT STARTED.

**Next exact task:** retry direct page-index-13 screenshot retrieval for the same official NCERT PDF (serials 6–12) using an accessible official source route. Do not advance to printed page xiii until page xii has been visually inspected or a source-access audit explicitly records why it remains blocked. Only pixel-inspected items may be marked visually checked.
- Commits: [audit data](https://github.com/snchat78-svg/LabVerse/commit/65dd07d66fd0b7f1002a2a2fc08d2c9e350e3b21), [validator](https://github.com/snchat78-svg/LabVerse/commit/b8ac98bedbcf24fa22b5c7a804de06f7b0a05062), [report](https://github.com/snchat78-svg/LabVerse/commit/3a03086c36561543d51511883fad9878cb9b6667).

## 2026-11-26 — Physics item image/edition/variant evidence pass (partial visual review)

- Added a 105-row audit: `data/catalogues/ncert_physics_item_image_variant_review_2026_11_26.csv`. It joins each existing Physics catalogue ID to the manual serial/page and records image-column presence, actual screenshot-review status, edition history, unresolved physical variant/dimensions/stock, source-listed composition and rights.
- Visually inspected only the rows actually rendered from the official NCERT PDF: serials 2–5 (printed p. xi; PDF screenshot page index 12) and 19–26 (printed p. xiv; index 15): **12/105 checked, 93/105 still pending**. Other page screenshots timed out; no visual verification is claimed for the remaining rows.
- Source edition evidence: ISBN 978-93-5292-653-4; first edition October 2018; reprints January 2019, March 2020 and August 2024. The exact impression of the online PDF is not identified.
- The manual states ALL RIGHTS RESERVED and requires prior permission for reproduction. NCERT item images must not be copied into LabVerse assets until written permission is confirmed. Item-schedule dimensions, physical variant equivalence, actual school stock and procurement quantities remain unverified. Item 7 component listing and item 95 resistor composition are retained as source notes, not kit-stock counts.
- Report: `docs/PHASE_1_1_PHYSICS_ITEM_IMAGE_VARIANT_REVIEW_2026_11_26.md`.
- Commits: [audit CSV](https://github.com/snchat78-svg/LabVerse/commit/7495a47f0c4e7388883cbc7c3d677c42a5c7d63f), [report](https://github.com/snchat78-svg/LabVerse/commit/f4ef9231cc23d990ead29cc83aaf985d1f638673), [validator](https://github.com/snchat78-svg/LabVerse/commit/d5bf568b2ee1e8f9609b80f3dd51bbdaa9c45f02), [workflow](https://github.com/snchat78-svg/LabVerse/commit/b795a48295669bdacda9f1abf16355f798166908).
- **Source-data CI Run #8 SUCCESS:** https://github.com/snchat78-svg/LabVerse/actions/runs/45751956098. Validator read back 105 image-review rows, exactly 12 visually checked and 93 pending, alongside the existing 105 item rows, 52 candidate IDs, 219 method pairs, 41 task gaps and 515 stockroom audit rows.
- No catalogue labels, practical links, inventory quantities or readiness statuses were changed. No application code, 3D asset or experiment runtime was added.

**Phase status:** Phase 1.1 IN PROGRESS; Phase 4.1 IN PROGRESS; Phase 2 BLOCKED; Phase 5 real 3D and Phase 6 runtime NOT STARTED.

**Next exact task:** continue official-PDF screenshot inspection of the remaining 93 item rows in source order, starting printed p. xii (serials 6–12), then p. xiii (13–18), through p. xxv. Record only visible identity/variant evidence. After the image pass, seek exact kit specification/procurement evidence for dimensions and supplied quantities, then resume the 41-task equipment-gap register.

## 2026-11-25 — Physics label comparison gate passed

- 105 LabVerse catalogue labels compared with the NCERT item schedule: 104 normalized matches; one detail difference, `NCERT-PHY-KIT-095`, where the manual specifies resistor quantities 1×5Ω, 1×10Ω, 2×20Ω, 1×30Ω. No source catalogue label was changed.
- Comparison CSV: `data/catalogues/ncert_physics_catalogue_label_comparison_2026_11_25.csv`; report: `docs/PHASE_4_1_PHYSICS_CATALOGUE_LABEL_COMPARISON_2026_11_25.md`.
- **Source-data CI Run #5 SUCCESS:** https://github.com/snchat78-svg/LabVerse/actions/runs/45635222749. The data validator now checks this exact one-row discrepancy.
- Next exact work remains item image/source edition/physical variant/dimension/quantity review on the 105 Physics rows, followed by the 41-task gap register review.

## 2026-11-25 — Source-data integrity validator accepted

- Added `scripts/validate-physics-source-crosswalk.mjs` and `.github/workflows/labverse-source-data-check.yml`.
- **Run #2 SUCCESS:** https://github.com/snchat78-svg/LabVerse/actions/runs/45634528491. Checks 105 item schedule rows/pages, 52 candidate items, 219 method pair rows, 41 task gaps, 515 source audit rows, and row bindings/status counts.
- Run #1 was a validator-only failure from assuming padded serial strings; the test was fixed to compare integer serial values. The data itself was unchanged.
- Next exact task remains physical/image/edition variant verification for 105 Physics item rows, then source-backed adjudication of proposed candidate supplements in the 41-task gap register.

## 2026-11-25 — Physics catalogue source-table readback completed

- Added text item name/use and schedule printed-page references for all 105 Physics item serials 2–106; index page range xi–xxv. See `data/catalogues/ncert_physics_item_serial_page_crosswalk_2026_11_25.csv`.
- All 105 Physics entries in the 515-row stockroom item-level audit now carry schedule-page and table-text-read provenance. The 52 items referenced in 219 Class XI Physics candidate links are isolated in `data/catalogues/ncert_physics_candidate_item_index_readback_2026_11_25.csv`; the other 53 are also read from the index table but are not in this 41-task candidate set.
- Corrected NCERT E12 cooling-curve classification: item 49 (printed label “Wire gauge”; use: base for uniform heating) is NOT_CONFIRMED_IN_METHOD for E12. The double-walled calorimeter, second thermometer, heater and other apparatus gaps are in the EXP-14 row of the 41-task gap register.
- **Next exact task:** visual/source-edition and physical variant/dimension/quantity review of all 105 Physics inventory rows; only after that, adjudicate the possible omitted task-item links in the 41-row gap register. Don't rewrite catalogue names from a paraphrase or treat source text as procurement/stock proof.
- Once Physics review has reached a defensible stop point, continue Chemistry and Biology source-item traceability in source order.

## 2026-11-25 — Physics 105-row item schedule crosswalk committed

- Added serial/page/name/use paraphrase for all 105 Physics inventory entries in `data/catalogues/ncert_physics_item_serial_page_crosswalk_2026_11_25.csv`.
- Physics item-page evidence in the 515-row stockroom audit now points to the NCERT item schedule page group and retains variant review as OPEN.
- Important distinction: 219 method-alignment rows cover 40 tasks that actually have one or more candidate IDs; the remaining source-page-confirmed RBSE Physics task, PRJ-08 Fortin barometer, has zero candidate links and appears in the 41-row gap register.
- **Next exact work:** reconcile all 105 Physics item source names/uses with current catalogue labels, details and raw categories; record only evidenced corrections as proposed changes. Continue with the 41-task possible missing links after the row identity pass.

## 2026-11-25 — Verified 515-item stockroom coverage and Physics method review

- **Run #86 SUCCESS:** https://github.com/snchat78-svg/LabVerse/actions/runs/45371257779. The React browser suite traversed all 34 subject/cabinet routes and checked all 515 unique inventory/reagent IDs: each ID exactly once in All stock and once in its mapped cabinet (Physics 105, Chemistry 177, Biology 233). Typecheck, build, existing app smoke and static↔React parity passed as well.
- Phase 4.1 stays IN PROGRESS: taxonomy is still proposed/unreviewed and evidence/rights/procurement/safety/task-scope exit gates remain.
- Added a 219-row NCERT item-method alignment audit and a 41-task equipment-gap register for the 41 source-page-confirmed Class XI Physics tasks. No candidate links were promoted. The method review corrected mismatches and found potential omitted IDs/items; see `docs/PHASE_1_1_NCERT_PHYSICS_METHOD_ALIGNMENT_AUDIT_2026_11_25.md`.
- **Next exact work:** item-level NCERT manual serial and printed-page provenance for the Physics catalogue; then cross-check the 41-task missing-link candidates against both the RBSE wording and the exact NCERT item-use entry. Do not use an analogous NCERT method as approval for an RBSE procedure, and do not promote any ID until the source-page, procurement, rights, safety and expert gates are separately satisfied.
- Phase 1.1 remains IN PROGRESS; Phase 2 remains BLOCKED; Phase 5 real 3D and Phase 6 runtime remain NOT STARTED.

# LabVerse Next Work & Source Closure Register — 2026-11-10

## 2026-11-25 — Phase 1.1 Class XI Physics source-page adjudication

- Source-reviewed all **41/41** Class XI Physics rows in the Phase 1.2 practical register against the existing `11_2027_copy.pdf` (PDF pp.115–119; English practical pages 117–119, Hindi corroboration p.115). Existing source fingerprint: 23,343,499 bytes; SHA-256 `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5`.
- Confirmed curriculum/task identity for 17 experiments, 7 Section A activities, 6 Section B activities and 11 projects. Existing task joins: **28 exact stable-ID** and **13 unique punctuation-normalized-ID** matches. Earlier similarity-only outcomes (including 2 ambiguous and 1 no-unique-candidate) were resolved only for this source-backed lane.
- Reconciliation CSV now marks these 41 rows `SOURCE_PAGE_CONFIRMED`; the remaining **106** rows are unchanged. Updated status totals: 41 source-confirmed, 57 high-similarity review, 37 possible-match review, 8 ambiguous review, 3 no-unique-candidate and 1 group-level review.
- The 41 tasks retain **219 candidate item-ID references / 52 unique IDs**; all 219 references exist in the current dashboard catalogue snapshot. This proves ID presence only, not practical relevance, physical stock, procurement equivalence, safety, rights or expert approval. Item relevance remains NOT_ADJUDICATED; catalogue IDs remain NOT_PROMOTED. Fortin barometer project `RBSE-XI-PHY-PRJ-08` still has no candidate item IDs.
- Preserved source distinctions: both sonometer alternatives in one record; paper-scale least-count choices; the p.118 English/p.115 Hindi wording discrepancy for Activity A7; separate pendulum projects; and separate helical-spring oscillation vs load-extension tasks.
- Data/report commit: [`2c7ac15a8eaa`](https://github.com/snchat78-svg/LabVerse/commit/2c7ac15a8eaa2f1a5721073538d845335eadc49d). Report: `docs/PHASE_1_1_XI_PHYSICS_SOURCE_PAGE_ADJUDICATION_2026_11_25.md`; row-level audit: `data/curriculum/rbse_xi_physics_source_page_adjudication_2026_11_25.csv`.
- Verification: 41/41 source-index IDs, task rows and register mappings checked; 219/219 candidate item references found in the inventory-presence audit; 0 missing referenced IDs; reconciliation remains 147 rows. No application code changed. No configured GitHub Actions workflow watches `data/curriculum/**` or `docs/**`, so no CI run is claimed.

**Phase status:** Phase 1.1 IN PROGRESS; Phase 2 BLOCKED pending method provenance, rights and hazard/expert evidence; Phase 5 real 3D and Phase 6 runtime NOT STARTED.

**Next exact task:** audit candidate-item relevance for these same 41 Class XI Physics records (219 references / 52 unique IDs) against task wording and item-level source evidence. Classify only source-supported exact links, possible supporting items and evidence-backed gaps; preserve one-to-many links. Do not promote an item merely because its ID exists.



## 2026-11-24 — Phase 1.1 curriculum-to-task identity crosswalk

- Added `data/curriculum/rbse_2026_2027_curriculum_to_task_crosswalk_2026_11_24.csv` (158 rows) and `docs/PHASE_1_1_CURRICULUM_TO_TASK_CROSSWALK_2026_11_24.md`.
- Joined the two Phase 1.1 indices (65 + 93) to the existing 171-row task traceability index. Results: 46 exact stable-ID; 27 unique punctuation-normalized ID; 6 exact-title matches requiring ID review; 18 group-level-only; 61 pending review.
- Candidate source item IDs were copied only from matched task traceability rows and remain unverified candidates. No catalogue item IDs were promoted. The separate 147-row Phase 1.2 register remains to be reconciled; do not add 147 and 158 as unique practical counts.
- No procedure, safety, quantity, concentration, permission, measurement or result data was invented. Phase 2 remains BLOCKED; Phase 5 real 3D and Phase 6 runtime remain NOT STARTED.
- Verification: input counts 65, 93 and 171 were read from GitHub; output CSV generated with 158 records and status totals sum to 158. Read-back verification follows.

## Latest progress hand-off — 2026-11-24

**Completed first source-backed curriculum batch:** `data/curriculum/rbse_2026_2027_class_xi_physics_biology_practical_index.csv` (65 entries; Class XI Physics 41 and Biology 24). Report: `docs/PHASE_1_1_CLASS_XI_PHYSICS_BIOLOGY_PRACTICAL_INDEX_2026_11_24.md`. Source is existing `11_2027_copy.pdf`: Physics pp.115–119 and Biology pp.132–134. Stable IDs and source pages are included; catalogue joins remain NOT_JOINED and no procedures/safety approvals were invented.

**Next exact work:** normalize Class XI Chemistry and Class XII Physics, Chemistry and Biology from the already mapped RBSE PDFs; preserve alternatives and page ranges. Then join normalized IDs to existing task rows without duplicating them. Keep Phase 2 science execution blocked pending method/rights/hazard review.

## Current hand-off — 2026-11-23 (RBSE practical register added)

- Latest Phase 1.2 artifact: `data/curriculum/rbse_2026_27_practical_register_xi_xii.csv` (147 rows); report `docs/PHASE_1_2_RBSE_PRACTICAL_REGISTER_2026_11_23.md`.
- Source pages: XI Physics 114–119, Chemistry 123–125, Biology 132–134; XII Physics 124–129, Chemistry 137–140, Biology 144–147, from existing `11_2027_copy.pdf` and `12_2027_copy.pdf`.
- Includes physics experiment/activity/project lists, Biology major/minor/spotting groupings, Chemistry practical groups and alternatives. All catalogue_item_ids are deliberately blank pending exact source-backed join.
- **Next exact work:** map each practical to existing catalogue IDs and item records via existing task IDs/source references, preserving alternatives and one-to-many links; then identify genuinely missing equipment/materials. Do not invent joins or safety/method details. Continue Phase 4.1 audits separately; Phase 2 remains BLOCKED.

## Current hand-off — 2026-11-23 (task-scope and Biology visual-aid review)

- Latest register: `data/catalogues/stockroom_scope_and_visual_aid_review_2026_11_23.csv` (276 rows) with report `docs/PHASE_4_1_TASK_SCOPE_AND_VISUAL_AID_REVIEW_2026_11_23.md`.
- 228 no-task-link rows = 182 reagent labels + 46 non-reagent items. Do not treat the reagent labels as automatic task-link defects; review source identity/edition/formulation. Domain-review the 46 non-reagent rows as support stock, research-only or true task-crosswalk gaps.
- Biology visual aids: 50 total; 48 linked, Mitosis/Meiosis cards unlinked. 49 are index-only; item 84 alone has visual sample inspection recorded. Preserve visual_aid as a separate type from specimen/slide.
- No mixed record types were found in a raw subject/category group in this snapshot; taxonomy remains unapproved. No source/task/safety values changed.
- **Next exact work:** resolve the 46 non-reagent scope rows and two unlinked visual cards against item-level source pages; separately verify 49 index-only visual-card entries. Continue 515-row item provenance and 184 safety-text gaps. Then complete 135 cabinet decisions and four unmapped category decisions before asset manifest/licence contract and Phase 5.


## Current hand-off — 2026-11-23 (135-category membership crosswalk)

- Latest commit adds `data/catalogues/stockroom_category_membership_review_2026_11_23.csv` (135 category rows; 515 member records) and `docs/PHASE_4_1_CATEGORY_MEMBERSHIP_REVIEW_2026_11_23.md`.
- Four unmapped category suggestions are provisional only: Physics ALIGNMENT → Mechanics, Oscillations & Waves; Physics LIQUID_TRANSFER → Fluids & Materials; Biology DATA_RECORDING → Visual Aids; Biology SAMPLE_CONTAINER → Storage & Lab Support. No domain approval or raw-category change.
- **Next exact work:** second-pass review of mixed record types, ambiguous category names and OCR/index-only evidence groups; then prepare category approval decisions and update authoritative taxonomy only with evidence-backed rationale. Continue item-level provenance/safety/task scope.
- Phase 4.1 IN PROGRESS; Phase 1/1.1 IN PROGRESS; Phase 2 BLOCKED; Phase 5 real 3D NOT STARTED.


## Current hand-off — 2026-11-23 (Phase 4.1 item audit baseline)

- Latest work: item-level audit baseline committed to `data/catalogues/stockroom_item_level_audit_2026_11_23.csv` (515 rows); methodology/report at `docs/PHASE_4_1_STOCKROOM_ITEM_LEVEL_AUDIT_2026_11_23.md`.
- Phase 4.1 remains IN PROGRESS. All 515 proposed taxonomy mappings still need domain review; four raw category combinations (five records) are unmapped. 287 records have exact practical task links; 228 need scope disposition. 184 rows lack safety text. Item-level page evidence is missing from the current read model for all rows.
- **Next exact task:** validate all 135 proposed category mappings against actual member rows; domain-review the five unmapped records; record reviewed rationale without silently changing raw categories. Then reconcile item-level source/page/edition/variant/class/session/rights, no-task-link scope and safety.
- Phase 1/1.1 Biology-with-microscope Kit Box page-9 source recovery remains blocked; do not ask for repeat upload. Phase 2 remains BLOCKED; Phase 5 real 3D remains NOT STARTED pending asset contract and evidence gates.

## Current hand-off — 2026-11-22 (source recovery still blocked)

- Phase 4 dashboard/workspace navigation: DONE for bounded prototype scope. Final React CI: https://github.com/snchat78-svg/LabVerse/actions/runs/44995645164; 37/37 React smoke, 13/13 static↔React parity, TypeScript and production build PASS. Final code: `d5b95afaa22f8d8bc8a40ad03511232cbb97c02c`; docs: `fa0d0da632b84756188de13346d16e98c9e4abf0`.
- **Next main task (Phase 1.1):** Biology-with-microscope Kit Box, PDF page 9 (printed page 4). Source recovery was re-attempted in the current conversation and Library; 0 conversation attachments and no exact SSBK PDF in the accessible Library listing/search. Official PDF is still blocked by reader size limit/DNS. See `docs/PHASE_1_1_BIOLOGY_KIT_BOX_SOURCE_RECOVERY_2026_11_22.md`.
- Do not ask for repeat upload. Try only a newly accessible official/source route, record exact file size and SHA-256, then render/inspect page 9. Until then the catalogue row stays OCR-only and unpromoted; historic upload hashes remain separate.
- Phase 1/1.1 IN PROGRESS; Phase 2 BLOCKED; Phase 3 PARTIAL; Phase 4 DONE; Phase 5/6 and Phases 7–9 NOT STARTED.

---

## Current hand-off — 2026-11-22 (after Phase 4 exit-gate review)

- Phase 4 is DONE for its bounded Dashboard and Workspace Navigation scope. Final review: docs/PHASE_4_EXIT_GATE_REVIEW_2026_11_22.md.
- Final React CI on d5b95afaa22f8d8bc8a40ad03511232cbb97c02c: https://github.com/snchat78-svg/LabVerse/actions/runs/44995645164 — TypeScript/build PASS, React browser smoke 37/37, static↔React parity 13/13; mobile fixed-bottom dock and Add-to-workbench return behavior included.
- Static dashboard code remained unchanged: smoke 9/9 PASS https://github.com/snchat78-svg/LabVerse/actions/runs/44689290665; integrity PASS https://github.com/snchat78-svg/LabVerse/actions/runs/44689290820.
- Next active task (Phase 1.1): Biology-with-microscope Kit Box, PDF page 9 (printed page 4). Recover existing uploaded bytes internally or use an accessible official NCERT path; verify size/SHA-256, then visually inspect and update only evidence actually shown. No repeat upload request.
- Current source blocker: official attachment URL is known but the 59,585,913-byte PDF could not be retrieved; two historical 199-page/59,620,970-byte upload records have distinct SHA-256 hashes and must remain separate. See docs/PHASE_1_1_BIOLOGY_KIT_BOX_SOURCE_RECOVERY_2026_11_22.md.
- Phase gates: Phase 1/1.1 IN PROGRESS; Phase 2 BLOCKED; Phase 3 PARTIAL; Phase 4 DONE; Phase 5 real 3D, Phase 6 runtime and Phases 7–9 NOT STARTED.
- Phase 4 does not claim real 3D, scientific results, a physical Android test, full WCAG certification or a release. Accessibility/performance and device validation remain Phase 20/22 work.

---

## Current hand-off — 2026-11-22 (after mobile bottom-sheet verification)

- **Last verified work unit:** Phase 4 React mobile inventory/analysis bottom sheets. Commit: `5e3ccaf230b1fa68ae0a522c9f31d4de4fc0d72d`; CI: https://github.com/snchat78-svg/LabVerse/actions/runs/44994884760 — typecheck/build PASS, React browser smoke 37/37, static↔React parity 13/13.
- Mobile Virtual Experiment Lab keeps the workbench before its two collapsible panels. Inventory and selected-item analysis panels start closed and open one at a time. Selecting an inventory item opens its analysis/details.
- **Next exact Phase 4 action:** conduct a full exit-gate review against requirements, UI_UX_SPEC, existing known differences, source/safety disclosures and current test evidence. Do not mark Phase 4 complete before that review.
- **Phase 1.1 source task remains open:** Biology-with-microscope Kit Box, PDF page 9 (printed page 4). Its catalogue values remain OCR-only. Official NCERT attachment retrieval failed due the 59,585,913-byte reader limit / DNS failure; the two historical user-upload hashes differ and remain separate. See `docs/PHASE_1_1_BIOLOGY_KIT_BOX_SOURCE_RECOVERY_2026_11_22.md`. Recover old bytes or an accessible official copy, compare byte count/hash, then inspect page 9. Do not ask for a repeat upload.
- Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED; Phase 4 remains IN PROGRESS pending exit review; real 3D and experiment runtime remain NOT STARTED.
- Report: `docs/PHASE_4_MOBILE_BOTTOM_SHEETS_2026_11_22.md`.

---

## Current hand-off — 2026-11-22

- Main active work remains Phase 1/1.1 source audit; the dashboard/UI-only track continues separately under its own exit criteria.
- Next source task is unchanged: Biology-with-microscope Kit Box, PDF page 9 (printed page 4). Current GitHub catalogue transcription remains OCR-only; detail-page visual status is not checked.
- Official NCERT attachment URL is known, but PDF retrieval failed because the 59,585,913-byte response exceeds the available web reader limit and the container could not resolve DNS.
- Preserve two historical 199-page/59,620,970-byte user-upload copies separately: `c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2` and `9df41c69800ae3e8da8cac3fae265b8a6c4a4035e4deec16325c32b225309dcb`. Their SHA-256 hashes differ; do not treat them as byte-identical.
- **Next exact action:** recover existing PDF bytes internally or use an accessible official retrieval path; verify byte count/hash; then visually inspect page 9 and update only source-supported details. Do not ask the user to upload it again.
- Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED; Phase 4 remains IN PROGRESS pending mobile bottom-sheet behavior; real 3D and runtime remain NOT STARTED.
- Evidence report: `docs/PHASE_1_1_BIOLOGY_KIT_BOX_SOURCE_RECOVERY_2026_11_22.md`.

---
## Current hand-off — 2026-11-20

- Main active phase remains Phase 1/1.1; dashboard UI work is a separate user-authorized parallel track.
- Latest UI code commit: `8be6f5bad1c78da85aeb72967a7ce0d1f5b8937f`; React browser smoke 36/36, static ↔ React parity 13/13, dashboard integrity PASS and static smoke 9/9.
- Phase 4 exit review found one explicit UI-spec gap: mobile collapsible bottom sheets for the inventory tray and analysis panel remain unimplemented. Phase 4 therefore stays IN PROGRESS; Phase 5/6 must not be started.
- **Next main-phase work:** continue Phase 1.1 with the already queued Biology-with-microscope Kit Box detail/visual review at indexed page 9. Use the previously submitted file/register or legitimate official retrieval route; do not request a repeat upload.
- Keep Phase 1/1.1 open until official source bytes/edition, item/page traceability, rights, procurement equivalence, safety and qualified subject review gates pass. Phase 2 scientific models/results remain BLOCKED.

## Verification update — Research Studio protocol planning — 2026-11-20

- Latest code commit under test: `793271ec7ae2074aacf427292513c7a1504d5bd9`.
- GitHub Actions: SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/44674346187
- Strict TypeScript typecheck: PASS.
- Chromium install: PASS.
- Production build: PASS.
- Production preview startup: PASS.
- Playwright browser smoke: **33/33 groups PASS**, including all 17-field JSON round-trip, schema-v1 migration, bounded repeat validation, unsupported/oversized/malformed import rejection, desktop drag/drop, keyboard operation, Android-sized touch fallback and mobile layout.
- The schema-v2 protocol-planning work-unit is CI-verified. Phase 4 overall remains IN PROGRESS; this does not mark Phase 4 complete.




## Latest Phase 4 work-unit — Static Dashboard ↔ React parity audit — 2026-11-20

- Added a cross-UI Playwright suite and machine-readable parity matrix: `data/catalogues/phase4_static_react_parity_2026_11_20.csv`.
- Both previews run in CI; verified shared JSON data, subject/task summary, class filter, Physics source navigation, Chemistry/Biology safety disclosures, research and analysis boundaries and mobile layout (11/11 parity groups PASS).
- Known repeated-item gap retained after acceptance: static allows multiple instances of a source item; React currently de-duplicates IDs.
- CI ACCEPTED: https://github.com/snchat78-svg/LabVerse/actions/runs/44677004043 — React smoke **35/35 groups PASS** and static↔React parity **11/11 groups PASS**.


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
- Phase 3: PARTIAL; React/TypeScript/Vite foundation passes strict typecheck, production build and latest 22/22 Chromium groups (commit 111cf04); broader architecture hardening remains.
- Phase 4: IN PROGRESS; React has four workspace destinations, item-type/category filters, per-subject task/source coverage, explicit unmatched-task reasons, practical-to-item navigation, bulk mapped-candidate add and Biology visual-audit visibility. Full static-preview parity and real 3D remain.
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

## 2026-11-10 — Biology with-microscope index and safety-page audit

### Completed
- Visually inspected current PDF cover and index pages 2–5; confirmed the 177-row catalogue index is contiguous and complete, with 175 kit item records plus two documentation records.
- Added `data/catalogues/ncert_biology_with_microscope_index_audit_2026_11_10.csv` and `docs/PHASE_1_1_BIOLOGY_WITH_MICROSCOPE_INDEX_AUDIT_2026_11_10.md`.
- Visually checked six detail/credits pages: Spirit Lamp (26), Scalpel (53), Dissecting Scissors (56), Wire Gauze (93), Student Laboratory Microscope (198), Document Development Team (199).
- Confirmed source p.93 identifies an asbestos centre in Wire Gauze; row 176 is a microscope, not a slide; row 177 is credits only.
- React detail panel now displays item-specific Safety / review notes; added browser checks for asbestos, open flame and sharp tools.

### Remaining
- Full page-by-page technical verification of the remaining Biology kit item pages.
- Internal retrieval of previously supplied Biology-without-microscope and Physics source records; Library search did not surface the old raw files in this pass. Do not request re-upload or invent fingerprints.
- Continue chemistry current specification/BOM audit and Rights / safety / subject expert reviews.

### Next single action
- Extend visual detail audit in source order for Biology-with-microscope rows 2–83, starting with remaining heating, glassware, microscopy and field equipment; separately keep source-reported quantities distinct from current kit stock.

## 2026-11-10 — Biology with-microscope detail audit, batch 2

### Completed
- Visually checked All-Pins, Forceps, Mortar and Pestle, Nails, Surgical Scissors, Dissecting Needle, Claw Hammer and Laboratory Thermometer from the current upload.
- Confirmed the Laboratory Thermometer is alcohol-filled (not mercury-filled), -10 °C to 110 °C, 1 °C graduation, quantity 3.
- Extended detail-audit page metadata in both Biology catalogue CSVs and the source archive/registry.

### Current coverage
- 177 index entries reconciled; 175 kit item records after excluding two documentation entries.
- 13/175 kit-item detail pages visually checked (14 pages including credits); 162 item detail pages remain unaudited in this work unit.

### Next single action
- Continue source-order page audit for the remaining Biology equipment detail pages, then proceed to indexed visual cards, specimens and permanent slides. Keep asset artwork original/licensed; do not extract NCERT card/slide artwork as app assets.

## 2026-11-10 — Biology glassware page audit, batch 3

### Completed
- Visually checked 12 glassware pages: Capillary Tubes, Glass Pipette, Cavity Slide, Glass Dropper, Test Tube, Cover Slips, Glass Rod, Glass Tube, Watch Glass, Conical Flask, Boiling Tube and Glass Slide.
- Confirmed the source lists 12 test tubes and 100 glass slides (two packs of 50); cover slips are two packs of 20.
- Preserved the manual warning that Watch Glass should never be heated.
- Appended page hashes, page numbers and source details to the master catalogue and audit CSV; added dashboard data provenance and React quantity assertions.

### Current Biology-with-microscope visual coverage
- 177 index entries reconciled.
- 175 physical/catalogue item records after excluding the Kit Manual and Document Development Team entries.
- 25/175 physical item detail pages visually checked, plus one credits page. 150 item detail pages remain unaudited.

### Next single action
- Continue page-level review of remaining equipment items and fragile/heat-related items in source order; after the equipment register, review the embedded specimens and permanent slides scientifically without copying protected NCERT artwork.


## 2026-11-10 — Latest verified continuation (commit 111cf04c087000f43983ef6058e0d7ff31d8aef3)

### Completed
- React Biology inventory displays current with-microscope detail audit coverage: **25/175 visually checked; 150 pending**. Individual records state whether detail-page visual verification exists.
- Created `data/catalogues/biology_with_microscope_detail_audit_queue_2026_11_10.csv`: exactly 150 unique pending rows in index/source order, including equipment, visual cards, embedded specimens, permanent slides and microscope record. Does not count documentation/credits or repeat already audited rows.
- React browser suite: **22/22 groups PASS**, with strict typecheck and production build PASS. Run: https://github.com/snchat78-svg/LabVerse/actions/runs/42760967194.
- Dashboard integrity suite: archive 9 assertions, index/detail audit, queue integrity, 18 catalogue assertions and schema parse PASS. Run: https://github.com/snchat78-svg/LabVerse/actions/runs/42760967344.
- Static Dashboard desktop/mobile browser smoke: **9/9 groups PASS**. Run: https://github.com/snchat78-svg/LabVerse/actions/runs/42760967331.

### Remaining source gates
- Visually verify the other 150 indexed Biology detail pages; all 50 visual cards, 7 embedded specimens and 35 permanent slides need content/identity review in their own right where applicable.
- Internally recover previous Biology-without-microscope and Physics PDF source records; user has already supplied these and MUST NOT be asked to upload again.
- Authenticate current Physics and MSCL procurement attachments/BOM; preserve user-copy vs official-source distinction.
- Close source-rights, Chemistry SDS/safety/waste, Biology sample/specimen ethics, and Physics/Biology/Chemistry expert review.
- Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific engines/results remain BLOCKED.

### Immediate next bounded action
Start at queue order 1: `NCERT-BIO-WM-SPEC-002` (Kit Box; indexed PDF page 9), visually inspect the existing registered source if its uploaded bytes can be recovered internally, then update master catalogue, audit CSV/report, queue and smoke/data checks together. Current Library listing/search did not surface that original PDF; a direct NCERT URL retry also failed (web internal error and DNS resolution failure). See `docs/PHASE_1_1_BIOLOGY_DETAIL_SOURCE_RECOVERY_RECHECK_2026_11_10.md`. This is an internal retrieval limitation, not a request for a repeat upload. Never promote OCR/index-only records to visually checked.

### Dashboard/architecture next
The practical-to-inventory mapping and bulk-add workbench flow already exist. Do not recreate them. Continue only after the current source-audit batch, then focus on remaining static-preview parity and architecture hardening. Real 3D assets/scene, deterministic simulation, scientific solvers, offline storage and Android packaging are later roadmap phases, not completed.


## 2026-11-10 — Three-subject asset/model/test traceability readiness

### Completed
- Added a 515-row register over all current catalogue items: Physics 105; Chemistry 177 including 124 separate historical reagent references; Biology 233 including 58 separate school-managed reagent references.
- 287 item rows have existing task links from the RBSE task read model: Physics 95, Chemistry 45, Biology 147.
- Added proposed asset IDs and explicitly unimplemented/unapproved status for geometry, original/licensed visual representation, experiment-specific interaction, scientific model, model validation and regression testing.
- Added a CI validator and detailed report: `docs/PHASE_1_1_THREE_SUBJECT_ASSET_MODEL_TRACEABILITY_2026_11_10.md`.
- Verification: multiline-safe traceability CSV validation (516 logical records / 25 columns / 515 data rows), source archive/mapping/Biology detail queue and schema checks PASS; static Dashboard desktop/mobile smoke 9/9 PASS. Latest runs: https://github.com/snchat78-svg/LabVerse/actions/runs/42765487693 and https://github.com/snchat78-svg/LabVerse/actions/runs/42765487537.

### Remaining / immediate next
- The Biology-with-microscope Kit Box page 9 audit remains blocked by internal binary retrieval. Resume queue order 1 when prior bytes or a legitimate official payload becomes accessible; do not ask for repeat upload.
- Complete current Physics/MSCL/Biology kit procurement source recovery, 150 Biology page details, visual cards/specimens/slides, SDS and other safety, rights and expert approvals.
- Phase 1/1.1 remains IN PROGRESS. Phase 2 scientific engines remain BLOCKED. Phase 3 PARTIAL and Phase 4 IN PROGRESS. Phase 5+ NOT STARTED.


## 2026-11-10 — Phase 1 research capability map and nuclear-source review

### Completed bounded work unit
- Added `docs/PHASE_1_RESEARCH_DISCOVERY_DOMAIN_SCOPE_2026_11_10.md` and a 14-row machine-readable register at `data/catalogues/research_discovery_capability_register_2026_11_10.csv`.
- Mapped research workflows across Chemistry, Physics, Biology and cross-domain science, with a future design-only Nuclear Matter Explorer.
- Explicitly separated chemical compound/material formation from new-element nuclear synthesis; defined nuclide, nuclear-reaction, decay-event, detector-event and discovery-claim records; added candidate/observed/simulated/reproduced/independently-reviewed/formally-recognised evidence labels.
- Added IUPAC/IUPAP discovery-governance, DOE/GSI process references and candidate data sources NNDC ENSDF (public beta) and IAEA EXFOR (coverage limits documented) to the scientific source registry.
- All capabilities remain DESIGN_ONLY; no solver, connector, app feature or 3D asset was implemented. Phase order and Phase 1 exit gate are unchanged.

### Retrieval and next safe action
- Rechecked the current Library PDF listing and semantic search; the registered Biology-with-microscope source binary (59,620,970 bytes, known SHA retained in the archive register) did not surface. This does not invalidate the old upload receipt and is not a request to upload again.
- **Resume first:** queue order 1, NCERT-BIO-WM-SPEC-002 / Kit Box / indexed PDF page 9, only when the previously supplied bytes or an accessible official primary payload can be read.
- **In parallel:** continue Phase 1.1 procurement/source closure for Physics and MSCL, internal recovery of previously supplied Biology-without-microscope/Physics files, remaining Biology pages/cards/specimens/slides, licensing, instrument calibration, reagent SDS/compatibility/waste and subject-expert review.
- Do not begin Phase 2 scientific solvers, Phase 5 assets or Phase 6 runtime until their dependency gates are met.

## Research capability register CI — verified (2026-11-10)

- The new research capability CSV is structurally validated in dashboard-integrity CI: 14 ordered unique capability rows, 11 columns, all DESIGN_ONLY; new-element validation gate explicitly requires qualified nuclear-scientist review and IUPAC/IUPAP decision.
- Final run PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42778819472 (commit `9f929ced9f45b0c8cb64a81fa34fcbf4a4e3ecb2`). Browser smoke remains 9/9 PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42778597556.
- A first assertion failed because it checked the wrong semantic cell; the gate text was clarified and rerun passed. This correction and its failure trail are in WORK_LOG.
- This does not close Phase 1.1 or unblock science engines. Resume first Biology page queue item Kit Box / page 9 if the already-submitted source bytes or official primary file can be accessed; otherwise continue the remaining source/procurement/rights/safety/expert tasks. No repeated PDF upload request.

## MSCL source audit continuation — item 7 next (2026-11-10)

- **Completed:** MSCL registered upload detail pages 5–10, 18, 26 and 43 were visually checked. Coverage is 8/53 physical item rows; 45 remain. See `docs/PHASE_1_1_MSCL_DETAIL_PAGE_AUDIT_2026_11_10.md` and `data/catalogues/mscl_detail_audit_2026_11_10.csv`.
- **Integrity validation PASS:** https://github.com/snchat78-svg/LabVerse/actions/runs/42780001376. Browser smoke for this batch is separately tracked and must not be marked complete before its conclusion is available.
- **Next unblocked source-order task:** MSCL index item 7 / Conical Flask / PDF page 11. Keep going in item/page order. Preserve the Boiling Tube dimensional annotation as a technical-review gap and the Wire Gauze asbestos warning.
- **Still blocked first Biology queue item:** `NCERT-BIO-WM-SPEC-002` / Kit Box / indexed page 9 until existing source bytes or an accessible official payload are recovered. Do not ask for repeat upload.
- These are parallel source-audit tasks within Phase 1.1; Phase 2 science models, Phase 5 3D and Phase 6 runtime remain gated and unstarted.

## Official NCERT attachment-size evidence — 2026-11-10

### Completed
- Captured official NCERT Grade XI–XII specification-index attachment response sizes for four distinct kit URLs in `data/catalogues/ncert_official_spec_attachment_size_recheck_2026_11_10.csv` and analysed the comparison in `docs/PHASE_1_1_OFFICIAL_ATTACHMENT_SIZE_RECHECK_2026_11_10.md`.
- MSCL official response size equals the later registered user-upload size, but this is only SIZE_MATCH_ONLY (no official hash/bytes); earlier audited MSCL copy remains 53/53 detail pages checked and is tied to its own earlier SHA.
- Biology-with-microscope official response size is 35,057 bytes smaller than both registered user uploads; without-microscope and Physics upload comparisons remain UNKNOWN.
- Full MSCL page audit integrity CI PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42783080330; desktop/mobile smoke 9/9 PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42783079985.

### Next ordered Phase 1.1 work
1. Internal retrieval of the previously supplied Biology-with-microscope original to continue its 150-row page-detail queue, starting `NCERT-BIO-WM-SPEC-002` (Kit Box / indexed page 9). Current Library listing and search do not surface it; do not request re-upload.
2. Keep Biology-without-microscope and Physics prior upload records no-repeat; exact old hashes/sizes are UNKNOWN until existing source bytes are recovered.
3. Continue official procurement attachment authentication where the bytes become retrievable; do not equate title, size or page count with exact-byte identity.
4. Continue record-level rights, SDS/compatibility/waste, instrument calibration/uncertainty and subject-expert gates.

Phase 1 / 1.1 remains IN PROGRESS. Phase 2 scientific engines remain blocked; no phase gate was skipped.

### Final validation for official NCERT size comparison register
- Source integrity CI PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42783648434.
- Browser smoke PASS 9/9: https://github.com/snchat78-svg/LabVerse/actions/runs/42783648615.
- Validator assertions now lock the official response-size observations, the 19,808,858-byte MSCL later-upload size match as non-authenticated, and the 35,057-byte Biology-with-microscope mismatch. This does not provide actual official PDF bytes or SHA.
- Next single action remains: internally recover the previously supplied Biology-with-microscope original and resume queue order 1, Kit Box / indexed PDF page 9. Do not ask for re-upload. Until then, continue other Phase 1.1 source closure from already accessible catalogues and preserve the Phase 2 block.

## Physics measurement/metrology readiness — 2026-11-10

### Completed bounded work unit
- Added 18 measurement instrument readiness records in `data/catalogues/physics_measurement_metrology_readiness_2026_11_10.csv` and report `docs/PHASE_1_1_PHYSICS_MEASUREMENT_METROLOGY_AUDIT_2026_11_10.md`.
- Explicitly separated manual item identity/role from current procurement specification, measurement range, resolution, calibration/traceability, zero offset and uncertainty. No unknown value was inferred from a familiar school instrument.
- All records remain NOT_IMPLEMENTED / Phase 8 blocked. Validator/browser CI is pending in this initial record; final status must be appended after the run completes.

### Next source-ordered task
- Continue the previously supplied Biology-with-microscope source recovery internally and resume queue order 1 (`NCERT-BIO-WM-SPEC-002`, Kit Box, PDF page 9) only if its existing bytes/official payload become readable. No repeat-upload request.
- In parallel, keep Physics procurement attachment identity separate from Physics manual 13164; official response-size metadata (42,539,010 bytes) is not attachment content authentication.


### Physics metrology register CI PASS — 2026-11-10
- Integrity test PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42784987543; 18 source-linked records / 17 columns; all rows resolve to the NCERT manual item schedule and preserve UNKNOWN calibration and Phase 8 blocked state.
- Browser smoke PASS 9/9: https://github.com/snchat78-svg/LabVerse/actions/runs/42784988030.
- First assertion failure was a wrong-column check; it was corrected and the successful rerun is accepted. No scientific instrument measurement or solver validation is claimed.
- The next unresolved source-ordered action remains internal recovery of the user's already submitted Biology-with-microscope original, starting Kit Box / indexed page 9; no repeat-upload request.

## Latest resume point — MSCL evidence and safety review queue (2026-11-10)

### Completed in the latest work unit
- MSCL detail audit is **53/53 physical items visually checked** against the earlier upload SHA `db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d`; the upload remains unauthenticated to official NCERT bytes.
- Created a 53-row / 17-column per-item review queue at `data/catalogues/mscl_review_gap_queue_2026_11_10.csv` and its protocol at `docs/PHASE_1_1_MSCL_REVIEW_GAP_QUEUE_2026_11_10.md`.
- Every queue row maps exactly to the visual audit and retains source visual-audit status, technical gap and safety text verbatim. All rows remain OPEN_NOT_REVIEWED_OR_APPROVED; reviewer ownership is NOT_ASSIGNED.
- New catalogue validator assertions were committed in `dashboard/tests/validate-catalogue.mjs`; final validator commit `8cf28ce97362b98b8aabcba738b2712fa09a6ff4`; source/catalogue CI PASS https://github.com/snchat78-svg/LabVerse/actions/runs/42792680753. Desktop/mobile browser smoke PASS 9/9 groups: https://github.com/snchat78-svg/LabVerse/actions/runs/42792681348 (chromium-smoke job success).
- A second internal semantic search for Biology-with-microscope returned no Library or Conversation matches. The old submission is acknowledged; do not request it again.

### Immediate next actions — keep this order
1. **DONE:** new 17-column queue integrity validator PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42792680753. Desktop/mobile browser smoke PASS 9/9 groups: https://github.com/snchat78-svg/LabVerse/actions/runs/42792681348. The validator checks all 53 source links, visual-status fields, verbatim technical/safety gaps and fail-closed approval states.
2. Use the new MSCL queue to prioritize an actual qualified review/evidence owner for the high-consequence rows: Boiling Tube, Micro Scale Test Tube, Micro Test Tube Stand, Micro Well Plate, W Tube, Wire Gauze, Spirit Lamp, Mercury Thermometer, Multimeter and Gas Generator. Do not mark approvals without the relevant primary evidence and qualified sign-off.
3. Continue internal recovery of the already-submitted Biology-with-microscope bytes. If readable, resume `NCERT-BIO-WM-SPEC-002` / Kit Box / indexed PDF page 9 and update the catalogue, detail audit, queue and tests together. No repeat-upload request.
4. Continue the remaining Physics/MSCL/Biology official procurement, rights, safety/SDS, calibration, compatibility/waste and subject-expert gates from accessible evidence.
5. Keep Phase 2 scientific contracts/models, Phase 5 3D assets and Phase 6 experiment runtime blocked until their dependencies pass.

### Current authoritative phase state
- Phase 0: DONE (planning/documentation baseline).
- Phase 1 / 1.1: IN PROGRESS.
- Phase 2 scientific models/results: BLOCKED.
- Phase 3 React foundation: PARTIAL.
- Phase 4 dashboard/workspaces: IN PROGRESS.
- Phase 5 real 3D: NOT STARTED.
- Phase 6 deterministic experiment runtime: NOT STARTED.
- Phase 7–9 Chemistry/Physics/Biology engines: NOT STARTED.

The older "MSCL item 7 / Conical Flask next" note is historical; it is superseded by the accepted 53/53 visual audit and current 53-row review queue. Do not repeat old MSCL detail pages.

## Latest resume point — RBSE/MSCL reagent crosswalk reconciliation (2026-11-10)

### Completed
- Cross-referenced all 124 numbered MSCL manual reagent labels, 2 supplemental manual-body records and the 41-row RBSE Chemistry task matrix.
- Created 41-task / 20-column reconciliation CSV: `data/catalogues/rbse_mscl_reagent_crosswalk_reconciliation_2026_11_10.csv`, with a report that explains task-set and candidate-ID differences.
- Source integrity validator PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42797725206. Desktop/mobile browser smoke PASS 9/9 groups: https://github.com/snchat78-svg/LabVerse/actions/runs/42797724772.
- No candidate was silently added to the matrix. All names remain documentary references; no current SDS, formulations, supply or live-use approval is implied.

### Immediate next actions
1. Check desktop/mobile browser smoke run 42797724772 and update its result in the report and phase trackers.
2. Review full-source context for screen-only tasks OPT-01 and OPT-04; establish whether Alcohol, Phenol and Starch are reagents, samples, products or incidental mentions before mapping.
3. Review matrix-only contextual tasks THERMO-02 and ELECTRO-01; preserve the formulation/grade/concentration and electrolyte/material-candidate distinctions.
4. Resolve the ten shared task rows with differing candidate ID sets under Chemistry/Safety expert review; do not infer that ammonium sulphate equals ferrous ammonium sulphate or potassium iodide equals iodine solution.
5. Keep all 126 reagent records blocked from live use and all 41 task rows documentary-only until identity-specific current SDS, validated methods, compatibility/waste review and qualified approval are present.

### Phase gates
- Phase 0: DONE.
- Phase 1 / 1.1: IN PROGRESS.
- Phase 2 scientific contracts/models: BLOCKED.
- Phase 3 React foundation: PARTIAL.
- Phase 4 Dashboard/workspaces: IN PROGRESS.
- Phase 5 real 3D: NOT STARTED.
- Phase 6 experiment runtime: NOT STARTED.
- Phase 7–9 Chemistry/Physics/Biology engines: NOT STARTED.

## Latest resume point — task-scoped RBSE/MSCL reagent crosswalk — 2026-11-10

### Completed and validated
- Reconciled the full original RBSE XI/XII Chemistry practical pages against the preliminary MSCL text screen and task matrix.
- Corrected six whole-document lexical/role false hits, including Alcohol/Phenol functional-group names, the Ammonium sulphate substring inside ferrous ammonium sulphate, Acetanilide and Aniline yellow product names, and Starch outside the relevant practical section.
- Acetanilide in RBSE-XII-CHEM-OPT-03 is stored as a product/output reference and removed from input-reagent candidates.
- Updated 126-row safety screen to 19 columns; RBSE task matrix to 23 columns; reconciliation file to 41 rows / 24 columns.
- Final source/catalogue integrity PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/42800381733. Desktop/mobile browser smoke PASS 9/9: https://github.com/snchat78-svg/LabVerse/actions/runs/42800382248.

### Current corrected counts
- 12 task IDs have task-section screen candidates and matrix candidates (5 candidate-ID aligned; 7 with extra contextual/formulation IDs).
- 4 tasks have matrix-only contextual/species candidates.
- 24 tasks have no assigned input-reagent candidate in either track (not proof that no reagent is needed).
- 1 product/output-only task (Acetanilide in OPT-03); no screen-only candidates remain.
- All 126 safety-screen records remain blocked, SDS-required, not approved, not current BOM. All 41 task records remain documentary-only.

### Immediate next actions
1. Continue task-by-task source-method review for the 12 shared and 4 contextual candidate tasks; retain task identity, sample/product/reagent role, alternatives and page evidence.
2. For the 24 tasks without reagent candidate links, inspect appropriate NCERT/manual/authoritative practical method sources before marking them reagent-free or creating an experiment.
3. Obtain current official MSCL BOM bytes and current identity-specific SDS/grade/formulation/concentration/compatibility/waste evidence; no name-only screen is sufficient.
4. Keep all task methods, virtual reaction outcomes and physical-use features blocked until qualified Chemistry/Safety review and regression evidence pass.

### Phase state
- Phase 0: DONE.
- Phase 1 / 1.1: IN PROGRESS.
- Phase 2 scientific models/results: BLOCKED.
- Phase 3 React foundation: PARTIAL.
- Phase 4 Dashboard/workspaces: IN PROGRESS.
- Phase 5 real 3D: NOT STARTED.
- Phase 6 experiment runtime: NOT STARTED.
- Phase 7–9 Chemistry/Physics/Biology engines: NOT STARTED.


## Latest resume point — 2026-11-11 — Chemistry task-to-method evidence

### Completed bounded work
- Added 7 task-to-method evidence rows (20 columns) for RBSE-XII-CHEM-KIN-01/02/03, THERMO-01/02/03 and ELECTRO-01.
- Sources: RBSE 2026 official Chemistry practical instructions; NCERT Class XII Chemistry Unit 2 Experiments 2.1–2.3, Unit 3 Experiments 3.1–3.3 and Unit 4 Experiment 4.1.
- Report and CSV: `docs/PHASE_1_1_RBSE_MSCL_CHEMISTRY_METHOD_SOURCE_REVIEW_2026_11_11.md`; `data/catalogues/rbse_mscl_chemistry_method_source_review_2026_11_11.csv`.
- Critical method source gaps preserved: THERMO-01 hydrate state; THERMO-03 incompatible NCERT quantity descriptions; ELECTRO-01 conflicting CuSO4 concentration entries. KIN-02 method has multiple endpoint-system inputs beyond the task title. Nothing is promoted to current BOM or approved procedure.
- RBSE 2027 Class XII syllabus PDF URL is known but the 17,565,238-byte response was rejected. Until its content can be read, RBSE 2026 practical content is reference-only.
- New source/candidate regression assertions are added to `dashboard/tests/validate-catalogue.mjs`; run the Actions workflows and record conclusions before declaring this unit validated.

### Immediate next actions — exact order
1. Retry retrieval of the official RBSE 2027 Class XII Chemistry syllabus/practical PDF through a legitimate official retrieval path; do not substitute a third-party mirror or infer content from a filename.
2. Once 2027 source text is accessible, reconcile KIN/THERMO/ELECTRO task coverage with 2027 changes and update source-session scope.
3. Review authoritative methods for the 24 RBSE Chemistry task rows with no assigned input-reagent candidate. Empty fields are unresolved, not proof of reagent-free tasks.
4. Continue method-level review of the 12 shared and 4 contextual candidate tasks, retaining task/choice identity, sample/product/reagent roles and alternative choices.
5. Obtain current official MSCL BOM bytes and identity-specific SDS/grade/formulation/concentration/compatibility/waste evidence; all 126 safety-screen rows remain blocked and unapproved.
6. Preserve Biology-with-microscope first unreviewed item `NCERT-BIO-WM-SPEC-002` / Kit Box / indexed PDF page 9 for internal binary recovery only; do not ask for repeat upload. Maintain the 53-row MSCL technical/safety review queue without repeating the finished 53/53 visual audit.

### Phase gates
- Phase 1 / 1.1: IN PROGRESS.
- Phase 2 scientific contracts/results: BLOCKED.
- Phase 5 real 3D: NOT STARTED.
- Phase 6 deterministic runtime: NOT STARTED.
- Phase 7–9 Chemistry/Physics/Biology engines: NOT STARTED.


## Latest resume point — 2026-11-11 — Chemistry source retrieval and method-body gate

### Newly completed
- Mapped 7 RBSE XII Chemistry tasks to method references in NCERT manual Units 2–4 (separate report/CSV above).
- Cross-checked all 24 currently unlinked Chemistry task rows against the NCERT Class XI Chemistry contents index and CIET activity index.
- 22 rows now have index locators; OPT-01 has no direct functional-group index match; OPT-04 has a Biology Exercise 20 cross-disciplinary locator.
- The Class XI manual's accessible response gives a 27-page PDF prefix and a contents index; later procedure pages could not be retrieved/rendered. All 24 mappings remain INDEX_ONLY. No reagent link is inferred.

### Next actions — ordered
1. Retrieve the complete official NCERT Class XI Chemistry manual through a legitimate official route, with the experiment-body pages matching Units 2–7 and project pages. Then review exact method, sample, reagent roles, apparatus and safety rather than using TOC titles as procedure evidence.
2. Retrieve/read the official RBSE Class XII 2027 Chemistry practical section; the official link is known but 17,565,238-byte content retrieval is blocked. Do not replace it with third-party summaries.
3. Keep all 24 tasks unlinked until each source body and reagent identity is verified. OPT-01 functional-group test and OPT-04 food-test cross-disciplinary path stay separately open.
4. For 7 earlier mapped XII tasks, preserve hydrate, concentration and method-volume conflicts; no BOM, safety or scientific models are promoted.
5. Continue current official MSCL BOM/SDS/grade/concentration/compatibility/waste evidence closure and qualified expert review. All 126 safety-screen rows remain blocked/unapproved.

### Current phase gates
- Phase 1 / 1.1 IN PROGRESS.
- Phase 2 scientific contracts/results BLOCKED.
- Phase 5 real 3D NOT STARTED.
- Phase 6 runtime NOT STARTED.
- Phase 7–9 subject engines NOT STARTED.


## Latest resume point — 2026-11-11 — Chemistry source retrieval and method-body gate

### Newly completed
- Mapped 7 RBSE XII Chemistry tasks to method references in NCERT manual Units 2–4 (separate report/CSV above).
- Cross-checked all 24 currently unlinked Chemistry task rows against the NCERT Class XI Chemistry contents index and CIET activity index.
- 22 rows now have index locators; OPT-01 has no direct functional-group index match; OPT-04 has a Biology Exercise 20 cross-disciplinary locator.
- The Class XI manual's accessible response gives a 27-page PDF prefix and a contents index; later procedure pages could not be retrieved/rendered. All 24 mappings remain INDEX_ONLY. No reagent link is inferred.

### Next actions — ordered
1. Retrieve the complete official NCERT Class XI Chemistry manual through a legitimate official route, with the experiment-body pages matching Units 2–7 and project pages. Then review exact method, sample, reagent roles, apparatus and safety rather than using TOC titles as procedure evidence.
2. Retrieve/read the official RBSE Class XII 2027 Chemistry practical section; the official link is known but 17,565,238-byte content retrieval is blocked. Do not replace it with third-party summaries.
3. Keep all 24 tasks unlinked until each source body and reagent identity is verified. OPT-01 functional-group test and OPT-04 food-test cross-disciplinary path stay separately open.
4. For 7 earlier mapped XII tasks, preserve hydrate, concentration and method-volume conflicts; no BOM, safety or scientific models are promoted.
5. Continue current official MSCL BOM/SDS/grade/concentration/compatibility/waste evidence closure and qualified expert review. All 126 safety-screen rows remain blocked/unapproved.

### Current phase gates
- Phase 1 / 1.1 IN PROGRESS.
- Phase 2 scientific contracts/results BLOCKED.
- Phase 5 real 3D NOT STARTED.
- Phase 6 runtime NOT STARTED.
- Phase 7–9 subject engines NOT STARTED.


## Latest resume point — 2026-11-12 — RBSE 2026–27 Chemistry source recovery and Class XII crosswalk correction

- Resumed the exact 24-task Chemistry set from the 2026-11-11 index-only register. Existing uploads were recovered internally; no re-upload requested.
- Recovered `11_2027_copy.pdf` (155 pages; 23,343,499 bytes; SHA-256 `a1899f74bdf72303c0ada379c96b515f11ac3e61ba0d10c30f146b56e345a8c5`) and `12_2027_copy.pdf` (169 pages; 18,279,805 bytes; SHA-256 `2249c6233817ba625460a97b1fab829d57d5ce6842a19bb12be80794c40e7e34`). Both hashes match the prior archive register. This does not prove a new download equals the Board server copy.
- Visually checked RBSE Chemistry pages XI 123–126 and XII 137–140. Corrected the earlier class-scope error: XII OPT-01 directly maps to NCERT XII Unit 8; XII OPT-04 directly maps to NCERT XII Unit 11. XII QUAL-01 maps to the official NCERT XII Unit 7 index, while the full Unit 7 body remains to be retrieved.
- Inspected official NCERT body text for XI Unit 6 (PRA-14), XI Unit 7 experiments 7.1/7.2 (PRA-18/PRA-19), XII Unit 8 (OPT-01), XII Unit 11 (OPT-04). Five tasks now have body-source text; method, safety, rights and expert review are not approved.
- Added `data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv` and `docs/PHASE_1_1_RBSE_2027_CHEMISTRY_CURRICULUM_RECHECK_2026_11_12.md`; corrected the 2026-11-11 map and validator.
- All 24 task IDs remain without reagent/product candidate IDs. No BOM, procurement, SDS, concentration, safe physical procedure, simulation result or discovery claim was promoted.
- CI acceptance: dashboard catalogue validator must pass the new 24-row source recheck; browser smoke must pass because the validator under `dashboard/**` changed.
- Next exact action: retrieve Class XII Unit 7 and Class XI Units 1–5 method body sources, then method-by-method reconciliation for the 19 remaining rows. Do not repeat completed audits or request existing PDFs again. Keep Phase 2 blocked until Phase 1 exit criteria pass.


## 2026-11-12 — Chemistry method-body continuation

- 19 remaining tasks classified: 1 official-host body, 11 secondary/alternate bodies, 7 index-only projects.
- Cover 2025–26 vs August 2008 first-edition metadata retained; 2018 archived XII Unit 7 As3+ mismatch recorded.
- No reagent/BOM/SDS/live-use approval promoted.
- Next: authenticate official XI Units 2–5 and XII Unit 7 bodies, compare copies, then retrieve seven project methods.



## Final verification — 2026-11-12

- Chemistry method-body evidence unit verified on `562e98508eb13f8f42b09198cd54c93ec3cc4b35`.
- Dashboard integrity SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/43157162565.
- Desktop/mobile Chromium smoke: 9/9 PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/43157162699.
- Next action unchanged: retrieve authenticated official XI Units 2–5 and XII Unit 7 body bytes; compare alternates and then retrieve project methods.


## CI accepted — Chemistry NCERT endpoint / CIET crosswalk (2026-11-12)

- Endpoint register 24/24 PASS and CIET crosswalk 13/13 PASS in dashboard-integrity workflow: https://github.com/snchat78-svg/LabVerse/actions/runs/43214251322.
- Next exact task remains retrieval of official XI Unit 2–5 and Projects PDFs plus XII Unit 7, with byte/hash/edition evidence; direct 502 responses remain blockers, not evidence of missing content.


## Latest resume point — 2026-11-12 — NCERT Chemistry official PDF retry

- Rechecked the exact interrupted targets: NCERT XI Units 2–5, XI Projects and XII Unit 7; added one Unit 1 partial-body control.
- New report: docs/PHASE_1_1_NCERT_CHEMISTRY_OFFICIAL_PDF_RETRY_2026_11_12.md; seven-row machine-readable retry register: data/catalogues/ncert_chemistry_official_pdf_retry_2026_11_12.csv.
- The NCERT XI combined manual at ncert.gov.in kelm201.pdf confirms the 2025–26 cover and August 2008 first-edition metadata, but body retrieval still only exposes printed pages 1–15. Later contents entries are locators only.
- NCERT XI Unit 7 kelm207.pdf is independently available from the official host and screenshot-checked at page 1; this is XI evidence and does not close XII QUAL-01.
- Official fetch remains blocked for XI Units 2–5 / Projects and XII Unit 7 (HTTP 502 from the web retrieval path; container DNS cannot resolve the two NCERT hosts). Secondary/2018 copies remain non-primary.
- No source-body count, reagent/product mapping, BOM/SDS, live-use permission or scientific result was promoted. Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED.
- Next exact action: retrieve the six blocked official documents through an NCERT-approved route; authenticate bytes/edition/pages; then compare the complete methods and project bodies. Keep the issue open and do not progress from contents titles or secondary copies.


## CI acceptance — NCERT Chemistry retry audit (2026-11-12)

- Dashboard integrity: SUCCESS on main commit d8b65b8d78819d47fbc8fa44523ce70561674df4 — https://github.com/snchat78-svg/LabVerse/actions/runs/43218797696.
- New retry audit validator: 7 source targets, partial Unit 1 control, five XI index-only/502 targets, one XII Unit 7 index-only/502 target; secondary and archived sources remain non-primary. PASS.
- Existing repository regressions also passed: 515-row three-subject asset traceability; 53/53 MSCL visual records; 18 Physics metrology records; 41-task Chemistry reagent crosswalk; 24-task Chemistry source map; 19-task method-body evidence; 24/24 endpoint register; 13-resource CIET crosswalk; JSON schema parse.
- Desktop/mobile Chromium browser smoke: 9/9 groups PASS — https://github.com/snchat78-svg/LabVerse/actions/runs/43218797779.
- Browser smoke covers the existing dashboard and navigation only; it does not validate a scientific solver, physical lab safety, procurement, or real 3D rendering.
- Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific models remain BLOCKED; Phase 5 real 3D and Phase 6 runtime remain NOT STARTED.


## Additional NCERT domain-alias retry — 2026-11-12

- Repeated direct PDF checks for XI Units 2–5, XI Projects and XII Unit 7 on the ncert.gov.in hostname; all were inaccessible through the retrieval tool.
- Search surfaced ncert.ncert.org.in as a possible alias. Its index page and all six corresponding PDF candidates returned 502/internal errors; the alias was not accepted as an authenticated primary host.
- Updated the seven-target retry CSV and report with these attempts. Do not retry the same host/path set unless NCERT changes availability or a new official reference is supplied.
- Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED.


## Latest verified Phase 4 work-unit — 2026-11-12 — React candidate workbench drag/drop

- Commit: 57c72d49c4fa79c51a0ddd243a0534f42a8c462b; report: docs/PHASE_4_REACT_CANDIDATE_WORKBENCH_DRAG_DROP_2026_11_12.md.
- Desktop inventory drag/drop, source-ID duplicate prevention, individual placeholder removal and touch select/add fallback implemented.
- React app CI SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/43224557685. TypeScript typecheck PASS; Vite production build PASS; Playwright browser smoke 24/24 groups PASS, including desktop drag/drop, repeated-drop de-duplication and item removal.
- Phase 4 remains IN PROGRESS; this is 2D placeholder workbench interaction, not a 3D scene or experiment runtime.
- Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific models BLOCKED; Phase 5 real 3D and Phase 6 runtime NOT STARTED.
- **Next exact task:** add a dedicated 390px Android/touch-flow browser acceptance test for selecting a catalogue item and adding it to the candidate bench without drag gestures; preserve the desktop drag/drop test.


## Latest verified Phase 4 work-unit — Android-sized touch fallback — 2026-11-12

- Test commit: 6dfd55e9b6677c6fd8d8acb4283438eada815445; React app CI SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/43226264684.
- Dedicated Playwright context uses 390×844 viewport, `isMobile=true`, `hasTouch=true`; verified a touch-capable browser with `navigator.maxTouchPoints`.
- The test selected a Physics Vernier caliper and tapped “Add selected item” without drag gestures; it confirmed one candidate placeholder, prevented duplicate insertion, and checked no horizontal overflow.
- Complete app CI: dependency install PASS; TypeScript typecheck PASS; Chromium install PASS; Vite production build PASS; preview startup PASS; Playwright browser smoke **25/25 groups PASS**.
- Phase 4 remains IN PROGRESS; the drag/drop + touch fallback work-unit is verified. Workbench is still 2D candidate UI only.
- Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific models BLOCKED; Phase 5 real 3D and Phase 6 runtime NOT STARTED.
- **Next exact task:** audit and implement keyboard-accessible focus/order and accessible add/remove controls for the candidate workbench; add keyboard-only Playwright coverage while preserving desktop/touch tests.


## Latest verified Phase 4 work-unit — keyboard-accessible candidate workbench — 2026-11-12

- Code/test commit: 02afde9294266008a1e0a809bf8f4979ea43bd37; report: docs/PHASE_4_REACT_CANDIDATE_WORKBENCH_DRAG_DROP_2026_11_12.md.
- Added visible `:focus-visible` styling to interactive controls and a dedicated keyboard-only Playwright path.
- Test verified Tab navigation from search → item-type filter → category filter → Vernier caliper item; Enter selected; Tab + Enter added candidate; Tab + Enter removed it. Focus outline was checked on item and Add button.
- CI SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/43226979927; TypeScript typecheck PASS; Vite production build PASS; browser smoke **26/26 groups PASS**. Desktop drag/drop, touch Add, keyboard Add/Remove all remain in the same regression suite.
- Phase 4 remains IN PROGRESS; Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific models BLOCKED; Phase 5 3D and Phase 6 runtime NOT STARTED.
- **Next exact task:** implement versioned local-only persistence for Research Studio drafts (restore after reload, explicit clear, and schema validation); keep drafts on the device and do not imply cloud sync.


## Latest verified Phase 4 work-unit — Research Studio local draft persistence — 2026-11-12

- Code commit: 8ea6c8d9bd4caad5e10cef85ee8c141eb8b8ce82; test assertion follow-up: 0544ac13dddd6ad3a8c635f286ec4dec6ad47610; report: docs/PHASE_4_RESEARCH_STUDIO_LOCAL_DRAFT_PERSISTENCE_2026_11_12.md.
- Research drafts now autosave in browser local storage under a versioned schema (version 1), restore on reload, support explicit clear, and validate six text fields with a 5,000-character limit.
- Unsupported/malformed schema is not loaded; the UI reports it and allows clear/replace. Storage exceptions are caught and disclosed.
- React app CI SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/43228437757; dependency install, TypeScript typecheck, Chromium setup, Vite production build and preview all PASS; Playwright smoke **28/28 groups PASS**.
- This is local browser storage only: no cloud sync, server backup, cross-device persistence or collaborative notebook is claimed.
- Phase 4 remains IN PROGRESS; Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific models BLOCKED; Phase 5 real 3D and Phase 6 runtime NOT STARTED.
- **Next exact task:** add a versioned JSON export/import for the Research Studio draft, validate the imported schema and field limits before accepting it, and test round-trip + invalid-file rejection. Keep files user-controlled and local; do not add cloud dependencies.


## Latest Phase 4 work-unit — Research Studio JSON export/import — 2026-11-18

- Commit: `0901566387b546086050226f38b5a382ef121b24`; report: `docs/PHASE_4_RESEARCH_STUDIO_JSON_IMPORT_EXPORT_2026_11_18.md`.
- Added local JSON download and validated file restore for the six-field Research Studio draft.
- Automated browser acceptance inspects the exported envelope, restores all six fields after clear, and rejects future schema, malformed JSON and 5,001-character field values without overwriting the current valid draft.
- Import accepts schema version 1 only, validates a timestamp and all six text fields, and caps file size at 32 KiB. Files remain user-controlled; no cloud dependency was added.
- CI ACCEPTED: https://github.com/snchat78-svg/LabVerse/actions/runs/44245446653 — TypeScript typecheck, Chromium install, Vite production build, preview startup and **31/31 Playwright browser groups PASS**.
- Phase 4 remains IN PROGRESS; Phase 1.1 remains IN PROGRESS; Phase 2 BLOCKED; Phase 5/6 NOT STARTED.
- **Next after CI acceptance:** review Research Studio protocol-design completeness against the research-method governance. Add only non-executable planning metadata (materials/equipment references, procedure provenance, repeats, measurement units and risk-review status) with the same local versioned portability. Do not generate or approve real Chemistry/Biology methods while Phase 1 source/safety gates remain open.


## Latest Phase 4 work-unit — Research Studio protocol-planning metadata — 2026-11-20

- Implementation/report: `docs/PHASE_4_RESEARCH_STUDIO_PROTOCOL_PLANNING_2026_11_20.md`; code head `24e8b911da77218e8d87e5481c6f32093636359e`.
- Added 11 protocol-planning fields while preserving the six existing research-question fields. Draft envelope now uses schema version 2.
- Schema-v1 drafts are migrated without losing their original content; protocol fields begin blank. Planned repeats are optional, otherwise integer 1–100. All text fields max 5,000 characters; import file max 1 MiB.
- Safety workflow labels remain NOT_REVIEWED / REVIEW_REQUESTED / REFERENCE_RECORDED_NOT_VERIFIED; none means LabVerse has approved a real procedure.
- CI ACCEPTED: https://github.com/snchat78-svg/LabVerse/actions/runs/44674346187 — TypeScript, Chromium, production build, preview and **33/33 Playwright browser groups PASS**.
- **Readiness checklist accepted:** live text-presence indicators cover objective, provenance, candidate materials/equipment, sample plan, measurement plan, environment, analysis plan and stopping rule; repeat planning and safety-review tracking remain visibly separate. This does not validate scientific content or safety.
- CI SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/44675277209 — 35/35 browser groups PASS.
- **Next exact task:** complete the Phase 4 static dashboard ↔ React parity audit across workspace navigation, inventory/source details, safety disclosures, responsive touch and keyboard behavior. Do not advance to Phase 5 until this Phase 4 acceptance is complete.


## Exact next React work-unit after parity audit — multi-instance apparatus support

- Add an explicit “Add another instance” action or quantity control to the React candidate bench.
- Each placed instance must have a stable instance ID and retain the original catalogue/source item ID for provenance.
- Keep normal Add tap idempotent so accidental repeat clicks do not create duplicate instances; only the explicit multi-instance action increases quantity.
- Test two/three instances, per-instance removal, clear/reset, task-mapped setup and source-ID provenance. Do not imply a validated apparatus connection or 3D object yet.


## Phase 4 follow-up — static/React keyboard, touch and apparatus parity — 2026-11-20

- Commit: `f69b5c0f74c05959154ad18178bebe5f3707bcff`.
- The React workbench's explicit multi-instance support had landed, but the earlier parity test still described the previous limitation. This follow-up updates the test and verifies both interfaces retain original source IDs plus unique instance IDs and remove one repeated instance without deleting its sibling.
- Static dashboard now supports keyboard inspection, visible focus, focus restoration and accessible per-instance removal labels. Paired browser coverage compares keyboard-only and 390px touch flows in React and static dashboard.
- Workflow trigger filters now include `dashboard/index.html` and `dashboard/assets/**`.
- Report: `docs/PHASE_4_STATIC_REACT_PARITY_HARDENING_2026_11_20.md`.
- Dashboard integrity PASS: https://github.com/snchat78-svg/LabVerse/actions/runs/44686626801.
- React app CI PENDING: https://github.com/snchat78-svg/LabVerse/actions/runs/44686626741. Static dashboard browser smoke PENDING: https://github.com/snchat78-svg/LabVerse/actions/runs/44686626731.
- Phase 4 remains IN PROGRESS until browser acceptance completes. Phase 1/1.1 remains IN PROGRESS; Phase 2 BLOCKED; Phase 5/6 NOT STARTED.
- **Next action after acceptance:** perform a Phase 4 exit-gate review against all current UI, source-detail, safety-disclosure, keyboard and touch criteria. Do not start scientific engines while Phase 1/1.1 and Phase 2 gates remain open.


## Phase 4 follow-up — static/React keyboard, touch and apparatus parity — VERIFIED 2026-11-20

- Implementation commits: `f69b5c0f74c05959154ad18178bebe5f3707bcff`; category-filter correction: `5ebb0e48dcff7cca7ad9d7ace205720126d5fbb1`.
- The static dashboard now supports a separate keyboard-accessible Inspect action, visible focus, focus restoration and focus transfer to the newly added candidate's named Remove control. Source and instance IDs remain distinct; individual removal is tested.
- A first test uncovered that 60 Physics category chips made item inspection impractical by keyboard. Replaced them with one labelled category dropdown and added filter verification.
- React app CI SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/44687059489 — TypeScript/build/preview PASS, React smoke **36/36 groups PASS**, static ↔ React parity **13/13 groups PASS**.
- Dashboard integrity SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/44687059565. Static desktop/mobile smoke SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/44686626731.
- Report: `docs/PHASE_4_STATIC_REACT_PARITY_HARDENING_2026_11_20.md`.
- **Next action:** Phase 4 exit-gate review of the full acceptance register, known UI differences and documented boundaries. Phase 4 remains IN PROGRESS until that review finishes; Phase 1/1.1 remains IN PROGRESS; Phase 2 BLOCKED; Phase 5/6 NOT STARTED.


## Next active work-unit — normalized six-slice RBSE practical register (2026-11-23)

**Input sources already located (do not search/re-upload again):**
- `11_2027_copy.pdf`: Class XI RBSE 2026–27; Physics practical pp.114–119, Chemistry practical pp.123–125, Biology practical pp.132–140.
- `12_2027_copy.pdf`: Class XII RBSE 2026–27; Physics practical pp.124–129, Chemistry practical pp.137–140, Biology practical pp.144–150.
- Detailed source map: `docs/PHASE_1_1_EXISTING_RBSE_PRACTICAL_PDF_SOURCE_MAP_2026_11_23.md`.

**Deliverable:** one normalized register across all six class/subject slices, including practical kind (experiment/activity/project/spotting/record/viva), source title, source filename/page, class, subject, explicit apparatus/material/specimen evidence, alternative-vs-mandatory status, existing catalogue ID and verification state. Preserve existing row identities/history; deduplicate only by defensible source identity. Mark unsupported fields `PENDING_SOURCE` rather than guessing.

**Acceptance:** all six page ranges represented; page citations for every imported row; alternatives not flattened into mandatory tasks; no source row silently dropped; CI/schema/duplicate checks pass; update PHASE_STATE, ROADMAP, WORK_LOG and this register in the same work-unit. Do not advance Phase 2 science engines until method, rights and hazard evidence is sufficient. The separate NCERT kit Box page-9 retrieval is not a prerequisite for this RBSE curriculum extraction.


## Active product work — Phase 4.1 subject stockroom taxonomy and completeness (2026-11-23)

**Canonical brief:** `docs/PRODUCT_VISION_STOCKROOM_AND_3D_WORKBENCH.md`. Read this before future LabVerse work; do not ask the user to repeat the product requirements.

**Completed in current work-unit:** React stockroom category shelves and All stock navigation are implemented from existing shared inventory rows; Playwright coverage added. See `docs/PHASE_4_1_SUBJECT_STOCKROOM_CABINETS_2026_11_23.md`.

**Next exact deliverable:** one taxonomy and inventory reachability audit across all current records (Physics 105; Chemistry 53 + 124 historical reagent labels; Biology 175 + 58 manual reagent labels). Produce row-level mapping: canonical subject, cabinet, shelf, item type, class/session mapping, source ID/page/evidence, safety/rights state, 3D asset readiness, supported action contract readiness, linked practical task IDs. Identify uncategorised, duplicate, ambiguous and missing records; do not silently delete, merge or invent values. All stock must retain every source row. Cabinet categories are views, not duplicate catalogue data.

**After taxonomy:** define asset manifest and licence/provenance contract, then a representative real 3D scene/workbench and asset interaction prototype. Keep real-world chemistry/biology execution and scientific outputs behind Phase 1/2 evidence, rights, hazard and expert-review gates. User's target remains a dark 3D bench where supported items can be picked, placed, rotated, connected and operated; results must be state/model-derived, not pre-scripted decoration.

**Taxonomy input already generated:** `data/catalogues/stockroom_category_taxonomy_2026_11_23.csv` (135 subject/category rows). Review every proposed cabinet placement; explicitly resolve Physics ALIGNMENT, Physics LIQUID_TRANSFER, Biology DATA_RECORDING and Biology SAMPLE_CONTAINER. Then perform item-by-item reachability, source/class/safety/asset metadata audit without dropping or duplicating rows.

**Current verification:** GitHub Actions SUCCESS — https://github.com/snchat78-svg/LabVerse/actions/runs/45132091549; TypeScript/build PASS, React smoke 38 groups PASS, static↔React parity 13 groups PASS. The first ambiguous category selector test was corrected and the rerun is green.


## Latest hand-off — 2026-11-24 (all remaining syllabus streams indexed)

- Added `data/curriculum/rbse_2026_2027_remaining_streams_index_2026_11_24.csv` (93 records) and report `docs/PHASE_1_1_REMAINING_STREAMS_INDEX_2026_11_24.md`.
- Dedicated Phase 1.1 indexes now contain 158 records across XI Physics, Chemistry, Biology and XII Physics, Chemistry, Biology. XI Chemistry uses 7 section/group records; XII Physics 39; XII Chemistry 20; XII Biology 27.
- Exact PDF page provenance is recorded; all new rows remain unjoined and not safety-reviewed. Existing 147-row Phase 1.2 register is intentionally separate.
- **Next exact work:** reconcile Phase 1.1 indices to the Phase 1.2 practical register, then link to stockroom items only where source evidence supports exact stable IDs. Preserve alternatives and one-to-many links; produce unmatched and missing-equipment reports. No invented joins or methods.


## 2026-11-24 — Next work (accelerated)

- Completed first-pass comparison of all 147 Phase 1.2 rows against 158 Phase 1.1 stable-ID rows.
- Artifacts: `data/curriculum/rbse_2026_27_register_to_curriculum_reconciliation_2026_11_24.csv` and `docs/PHASE_1_1_REGISTER_RECONCILIATION_2026_11_24.md`.
- Review buckets: 67 high similarity, 65 possible, 10 ambiguous, 4 no unique candidate, 1 group-level. These are NOT approved joins; title similarity is triage only.
- **Next exact work:** inspect the 67 high-similarity candidates in source order against source PDF page wording and the 171-row task traceability index; bulk-check their candidate source item IDs against `dashboard/data/inventory.json`. Then resolve the remaining buckets. Preserve one-to-many and alternatives; never promote similarity alone.
- Phase 2 remains BLOCKED; Phase 5 real 3D and Phase 6 runtime NOT STARTED.


## 2026-11-24 — Next parallel batch: source and relevance reconciliation

Completed this batch: `data/catalogues/rbse_curriculum_candidate_item_inventory_presence_audit_2026_11_24.csv` and `docs/PHASE_1_1_CANDIDATE_ITEM_INVENTORY_PRESENCE_AUDIT_2026_11_24.md`. All 514 candidate item-ID references were checked against the dashboard catalogue (514 present; 0 absent). This is not task-level or stock verification.

Next batch (parallel subject lanes):
1. Physics: reconcile each curriculum/task join and candidate item against RBSE PDF wording/pages and catalogue detail.
2. Chemistry: separately preserve experiment/activity/project alternatives and reconcile reagent/glassware candidates; do not merge alternatives.
3. Biology: reconcile specimen, microscope, slide, and reagent candidates against exact PDF requirements.
4. Cross-subject: resolve pending/title/group-only joins and publish unresolved gaps.
5. Update task traceability only where the PDF/source supports a curriculum fact; expert, safety, rights, procurement, and physical-stock gates remain separate.

Do not mark Phase 1.1 complete until the remaining join and relevance review is closed.

- Completed PDF page inspection in parallel across all six lanes: XI Physics pp.114–119, XI Chemistry pp.123–125, XI Biology pp.132–140, XII Physics pp.124–129, XII Chemistry pp.137–140, XII Biology pp.144–150. Next is per-record wording-to-candidate relevance reconciliation.


## Active work — Phase 4.1 item-level reachability (2026-11-24)

- Latest audit covers all 515 rows across Physics (105), Chemistry apparatus (53) + historical reagent labels (124), and Biology items (175) + manual reagent labels (58). All 515 IDs are unique and all 135 subject/category pairs have a proposed cabinet destination.
- Four previously unmapped categories now have item-led proposals: Physics ALIGNMENT, Physics LIQUID_TRANSFER, Biology DATA_RECORDING and Biology SAMPLE_CONTAINER. They remain proposals needing subject review.
- Deliverables: `data/catalogues/stockroom_item_level_reachability_audit_2026_11_24.csv`, `docs/PHASE_4_1_ITEM_LEVEL_STOCKROOM_REACHABILITY_AUDIT_2026_11_24.md`.
- Next exact action: inspect the React stockroom shelf/category rendering and integrate a canonical taxonomy-backed cabinet view without changing raw source categories or duplicating catalogue records; add tests for all 515 IDs, unique appearance in All stock, and cabinet reachability. Run CI before marking verified.


## 2026-11-24 — Phase 4.1 React cabinet integration — CI RUNNING

- Added `app/src/stockroomTaxonomy.ts` generated from the canonical subject/category taxonomy; React now groups stockroom shelf buttons by proposed cabinet and filters items through the selected cabinet while preserving the raw source category filter and All stock.
- Added Physics smoke coverage for Measurement & Metrology, Alignment & Levelling (Spirit level + Plumb line), and the full 105-row All stock view. Updated selector assertion to avoid strict multi-match locator behaviour.
- Commits: taxonomy module `4ec84e64b7acfe5816954eb13dfd8ab607ba44e8`; app `15456ea76718e8ea74c569a525ccd86440d0a282`; smoke test `f7f9a5381692e18ad1d106b0884b8c761caff91d`; smoke locator correction `93b1fcb8c2d1e2f9d2fa84ab1b553273f1c6777d`.
- GitHub Actions run #80: https://github.com/snchat78-svg/LabVerse/actions/runs/45365935422. Dependency installation and TypeScript typecheck have passed; Chromium, production build, browser smoke and parity steps are still running/pending. Do not mark CI green until final conclusion is SUCCESS.
- Phase 4.1 remains IN PROGRESS pending full workflow and cabinet taxonomy review. No 3D assets/runtime claims.


## 2026-11-24 — Phase 4.1 cabinet integration CI verified

- GitHub Actions SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/45365935422 (run #80, commit `93b1fcb8c2d1e2f9d2fa84ab1b553273f1c6777d`). TypeScript typecheck PASS; production build PASS; React browser smoke PASS including Measurement & Metrology cabinet, Alignment & Levelling cabinet (2 tools), and all 105 Physics rows in All stock; static dashboard ↔ React parity PASS.
- This verifies the current React integration and tested Physics paths only. It does not approve all 135 taxonomy proposals, test every Chemistry/Biology cabinet path, certify procurement/safety/rights, or implement 3D assets/runtime.
- Phase 4.1 remains IN PROGRESS. Next: add equivalent Chemistry and Biology cabinet/All stock reachability tests and automated all-515-row uniqueness/reachability assertions; subject-review the proposed cabinet taxonomy before closing the phase.


## 2026-11-24 — Phase 4.1 three-subject cabinet smoke verification SUCCESS

- GitHub Actions SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/45366247565 (run #81, commit `89807d49b8c5a13a9e7f5bee9cc45e24dcacf460`). TypeScript typecheck PASS; production build PASS; React browser smoke **38 groups PASS**; static↔React parity **13 groups PASS**.
- Smoke coverage now exercises Physics Measurement & Metrology, Alignment & Levelling and 105-row All stock; Chemistry Glassware & Volumetric Ware and 177-row All stock; Biology Data & Recording, Samples & Containers and 233-row All stock. Biology/chemistry tests retain reagent and safety disclosure checks.
- A Vite bundle-size warning remains (main JS chunk ~586 kB before gzip); build succeeds. Track code-splitting/performance as a follow-up, not a release failure.
- This verifies current navigation/test paths, not every item-to-task relationship, expert approval of all taxonomy proposals, procurement, safety/rights, 3D models or scientific runtime. Phase 4.1 remains IN PROGRESS pending full taxonomy review and item-level exactly-once/reachability acceptance across all 515 records.


## 2026-11-24 — Expanded three-subject cabinet tests verified

- GitHub Actions run #81 SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/45366247565 (commit `89807d49b8c5a13a9e7f5bee9cc45e24dcacf460`). TypeScript typecheck PASS; production build PASS; React browser smoke 38 groups PASS; static↔React parity 13 groups PASS.
- Additional smoke checks: Physics All stock 105; Chemistry Glassware & Volumetric Ware 13 and All stock 177; Biology Data & Recording (Graph Paper), Samples & Containers (Petri Dish), All stock 233. Run log confirms the three-subject paths passed.
- Remaining: exhaustive DOM-level exactly-once proof for every one of 515 rows and subject review of proposed cabinet taxonomy. Phase 4.1 remains IN PROGRESS; Phase 5 asset manifest/real 3D is not started until the Phase 4.1 gate closes.


## 2026-11-24 — Cross-subject cabinet reachability smoke tests PASS

- GitHub Actions run #81 SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/45366247565 (commit `89807d49b8c5a13a9e7f5bee9cc45e24dcacf460`). TypeScript typecheck, production build, React browser smoke and static dashboard ↔ React parity all passed.
- Browser smoke now verifies Physics Measurement & Metrology, Alignment & Levelling and all 105 Physics rows; Chemistry Glassware & Volumetric Ware (13 rows) and All stock (177 apparatus + reagent-reference rows); Biology Data & Recording (Graph Paper), Samples & Containers (Petri Dish) and All stock (233 catalogue + reagent-reference rows).
- This verifies these selected cabinet routes and current All stock totals in the UI, not every cabinet row individually or expert approval of all taxonomy proposals. Chemistry reagent references and Biology manual reagent references are not confirmed physical kit stock.
- Phase 4.1 remains IN PROGRESS. Next gate: add a data-driven automated assertion covering all 515 IDs (exactly once in All stock and one mapped cabinet), review taxonomy proposals across all 135 category rows, then only close Phase 4.1 after that gate passes.
