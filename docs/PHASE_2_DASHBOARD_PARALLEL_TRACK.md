# User-authorized Dashboard Track — parallel delivery boundary

**Date:** 2026-11-09  
**Repository:** `snchat78-svg/LabVerse`  
**Current main phase:** Phase 1 remains IN PROGRESS  
**Dashboard status:** starter prototype committed; not a completed production application

## 1. Why this track exists

The user explicitly instructed LabVerse to proceed with the dashboard while Physics, Chemistry and Biology source authentication continues. The user also clarified that the subject PDFs have been supplied in earlier work and must not be repeatedly requested.

This note records a bounded parallel-delivery exception. It does not declare Phase 1 complete, authenticate an uploaded PDF, change a candidate inventory into a verified procurement BOM, or authorize live chemical/biological procedures.

## 2. Three subject directions and source catalogue review

The current dashboard read model uses existing repository catalogues and the newly received Biology kit manual:

| Subject | Current inventory view | RBSE task index | Evidence boundary |
|---|---:|---:|---|
| Physics | 105 non-documentation rows from a 106-row NCERT Physics kit-manual register | 80 tasks (XI 41 + XII 39) | Manual text inspected; separate/current procurement specification and supply status not established |
| Chemistry | 53 candidate apparatus/material rows from a 55-row uploaded MSCL specification register | 41 tasks (XI 27 + XII 14) | User-uploaded candidate is not byte-authenticated; historical NCERT MSCL manual has 124 reagent labels, not a current supplied BOM |
| Biology | 175 non-documentation item/visual rows from a 177-row with-microscope specification catalogue | 50 tasks (XI 22 + XII 28) | User-uploaded/index-derived candidate catalogue; separate no-microscope variant comparison and item-level visual verification remain open |

Additional Biology manual list, inspected from the newly received 141-page manual code 13163:

- 58 chemicals/reagents/stains listed on printed pages xxvii–xxviii (PDF pages 28–29).
- The same source explicitly states that these chemicals are **not supplied with the kit** and are to be managed by the institution/school/teacher/related staff.
- They are shown in the dashboard as reference-only labels; no concentration, quantity, formulation, SDS or physical handling approval is inferred.
- The manual contents list 60 exercises across Grades 11 and 12.

### Biology kit variants

- With microscope: existing catalogue `data/catalogues/ncert_biology_with_microscope_spec_items.csv` has 177 rows; prior upload hash is retained in the source register.
- Without microscope: the user confirms prior submission. The current repository file index does not surface its original bytes/catalogue, so this is recorded as a recovery task. **Do not ask for a repeat upload.** Do not infer differences until the earlier artifact/derived rows are recovered.

## 3. What the dashboard does now

Entry point: `dashboard/index.html`

- Overview for Physics, Chemistry and Biology.
- Class XI / XII / both selector.
- Subject-specific searchable apparatus and reagent trays.
- Category and item-type filtering.
- RBSE task list with source task IDs and page pointers.
- Tap-to-add and drag/drop into an empty workbench.
- Item detail panel with source/evidence/safety status.
- Four workspace entry points: Learning Lab, Virtual Experiment Lab, Scientific Analysis and Research Studio.

The machine-readable read model is `dashboard/data/inventory.json`; its presentation contract is `dashboard/data/schema.json`.

## 4. What it does not do

- No production 3D assets or 3D manipulation.
- No executable experiment procedure or action engine.
- No Physics calculations, Chemistry reaction prediction or Biology identification result.
- No chemical mixing, reagent preparation, live-use directions or safety approval.
- No final React/TypeScript/Vite architecture or Android packaging decision.
- No claim that 171 task-index rows are complete, expert-verified lessons.

Workbench entries are catalogue placeholders. They must never be described as simulated measurements or scientific outputs.

## 5. Implementation and checks

- `dashboard/assets/dashboard.css`: responsive layout.
- `dashboard/assets/dashboard.js`: subject selection, inventory search/filter, tap/drag placement, task list and evidence panel.
- `dashboard/tests/validate-catalogue.mjs`: deterministic integrity assertions for subject counts, IDs, task counts and reagent safety/status boundaries.
- `.github/workflows/labverse-dashboard-check.yml`: Node syntax and catalogue checks in GitHub Actions.

The automated catalogue check is a data-integrity check, not a scientific validation test.

## 6. Phase boundaries

- Phase 1 source audit remains IN PROGRESS.
- Phase 2 scientific domain models remain BLOCKED by open Phase 1 evidence, source-rights, safety and expert-review gates. Only the dashboard-facing read-model subset is started.
- Phase 3 is PARTIAL: a dependency-free prototype scaffold and CI checks exist; final production foundation remains pending.
- Phase 4 is IN PROGRESS: the dashboard/navigation starter is committed.
- Phase 5+ real 3D and executable simulation work has not started.

## 7. Next bounded work

Run the committed GitHub Actions checks and inspect the dashboard in a browser at desktop and narrow Android viewport sizes. Fix any UI/data integrity issue first. Then continue the first open source-to-item-to-asset review for Physics, Chemistry and Biology without asking the user to resend prior files.
