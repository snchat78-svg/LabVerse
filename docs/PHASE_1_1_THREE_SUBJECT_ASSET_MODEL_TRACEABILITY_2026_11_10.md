# Phase 1.1 — Three-subject item-to-asset/model/test traceability audit

**Date:** 2026-11-10  
**Phase:** Phase 1 / Phase 1.1 — IN PROGRESS  
**Purpose:** create an item-level hand-off from existing subject catalogues to future original/licensed 3D assets, experiment-specific interactions, scientific models, safety reviews and regression tests.  
**Source read model:** `dashboard/data/inventory.json` (blob SHA `3c6c5c978f5fd7c40369376f029e6c51c2bc6568`).  
**Machine-readable register:** `data/catalogues/phase1_item_to_3d_asset_model_test_traceability_2026_11_10.csv`.

## 1. Scope and exact counts

| Subject | Physical catalogue records | Reagent references | Total rows | Records already linked to at least one task |
|---|---:|---:|---:|---:|
| Physics | 105 | 0 | 105 | 95 |
| Chemistry | 53 | 124 | 177 | 45 |
| Biology | 175 | 58 | 233 | 147 |
| **Total** | **333** | **182** | **515** | **287** |

Biology's 175 physical catalogue rows contain 83 apparatus/instrument/consumable records, 50 visual aids/cards, 7 embedded specimens and 35 permanent-slide records. The 58 Biology manual reagent entries are separate from supplied kit inventory; the uploaded manual states they are school-managed / not supplied. Chemistry's 124 historical manual reagent labels are separate from current verified procurement stock.

A "task-linked" row means its item ID appears in an existing task `sourceItemIds` array. No new task/item equivalence was inferred. Records without a direct task link remain in the inventory register; absence of a mapping is not proof of irrelevance.

## 2. Item-level traceability fields

Each row contains:
- source item ID, canonical name, type/category, source title, evidence label and source quantity;
- dimension/specification-text presence (not visual verification or calibrated accuracy);
- already-existing task IDs and their syllabus-page references;
- a deterministic proposed LabVerse asset key (an ID proposal only; no file or geometry is created);
- rendering target: original/licensed geometry for apparatus; original/licensed artwork for cards/specimens/slides; a labelled virtual container only after chemical identity and safety approval;
- explicit status for asset geometry, allowed interactions, scientific model, validation and regression tests;
- source authentication, safety, live-hardware and copyright-review boundaries.

## 3. Scientific authenticity rules encoded

All 515 records remain `CANDIDATE_REFERENCE_ONLY_NOT_APPROVED_FOR_USE`. All geometry is `NOT_CREATED`; all model links are `NOT_ASSIGNED`; scientific validation is `NOT_VALIDATED_PHASE_2_BLOCKED`; and experiment-specific interactions are not yet defined. The register does not mark any row as scientifically verified.

**Instruments:** a source dimension or quantity is not proof of calibration, tolerance or stock. Authentic measurement models will require instrument-specific measurement range, resolution/least count, zero correction, calibration evidence, units, repeat readings, uncertainty and bounded error behaviour.

**Chemicals:** no arbitrary mixing or live dispensing is allowed. Every reagent remains blocked pending exact identity/formulation, concentration/grade where relevant, current SDS, exposure/compatibility/waste review and qualified Chemistry/Safety approval. Biology manual-listed chemicals remain school-managed/not-supplied references, not a kit BOM.

**Biology samples, cards and slides:** taxonomy/specimen identity and observable details require primary-source and Biology-expert review. Future app artwork must be original or appropriately licensed; NCERT artwork is not copied by default.

**3D/live separation:** Three.js or another renderer may display state but may not decide scientific outcomes. A deterministic domain model must validate actions and compute observations/readings first; the visual layer only renders those outputs. Physical hardware control is not implemented or supported.

## 4. Official source boundaries

NCERT's official specification index lists distinct Grade 11–12 source families for Biology with microscope, Biology without microscope, Micro Scale Chemistry and Physics: https://ncert.nic.in/division/dek/specification_documents.php?ln=en. This establishes that the source families are separate; it does not authenticate user-uploaded bytes, prove current supplied stock, or supply absent item detail.

The previously provided Biology-with-microscope PDF remains in the source archive with its known fingerprint/catalogue; the current session could not recover its original binary and direct NCERT retrieval failed. See `docs/PHASE_1_1_BIOLOGY_DETAIL_SOURCE_RECOVERY_RECHECK_2026_11_10.md`. Do not ask for another upload. Keep the Kit Box page 9 and remaining 149 detail-audit queue rows pending until already-submitted bytes or an accessible official primary payload become available.

## 5. What this audit does not claim

This is a traceability/readiness register—not a verified procurement BOM, current physical stock count, approved compatibility graph, 3D model, working experiment, computed result, calibration certificate, or expert/safety/licensing sign-off. No measurements, model parameters, scientific outcomes or chemical properties were invented to fill missing fields.

## 6. Acceptance for this work unit

- Exactly 515 unique rows: Physics 105; Chemistry 177; Biology 233.
- Every row uses a unique source item ID and deterministic traceability key.
- Existing task links only; no new scientific/task equivalence is created.
- All rows remain candidate-only, geometry not created, no model assigned and no validation/test claimed.
- Reagent rows cannot be promoted to live or approved through this register.
- Original/licensed asset provenance remains a release gate.

## 7. Next action / phase discipline

This completes a bounded Phase 1.1 traceability-readiness unit only. It does not close Phase 1.1 or unblock Phase 2.

The first blocked Biology source task remains queue order 1: `NCERT-BIO-WM-SPEC-002` (Kit Box; indexed PDF page 9). Resume that visual audit when the already-submitted source bytes or an accessible official payload can be recovered. Continue parallel source recovery and Physics/Chemistry/Biology safety/rights/expert gaps inside Phase 1.1. Only after Phase 1 exits may Phase 2 define/validate subject-specific models; real 3D assets belong in Phase 5, with deterministic simulation/action runtime in Phase 6. No phase is skipped.


## CI verification

- Multiline-safe CSV/source integrity validation passed: https://github.com/snchat78-svg/LabVerse/actions/runs/42765487693.
- Static Dashboard desktop/mobile browser smoke passed 9/9 groups: https://github.com/snchat78-svg/LabVerse/actions/runs/42765487537.
