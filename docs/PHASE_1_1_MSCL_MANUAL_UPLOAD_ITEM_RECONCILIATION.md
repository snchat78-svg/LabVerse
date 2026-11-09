# Phase 1.1 — MSCL 2018 manual vs uploaded 2025 specification item reconciliation

**Date:** 2026-11-09  
**Scope:** Manual apparatus list (51 numbered entries) versus the 54 numbered kit items transcribed from the user-uploaded `MSCL_copy.pdf` index. The upload is not byte-authenticated against NCERT; this is an internal comparison, not proof of a current official-specification delta.

## Result

- 51/51 manual numbered apparatus entries have a proposed correspondence in the uploaded 2025 candidate register.
- The manual's 50 mL graduated beaker (#3) and 10 mL micro beaker (#16) are combined in one uploaded specification row (NCERT-MSCL-SPEC-003).
- The manual's graduated 5 mL glass pipette (#42) appears at the end of the uploaded register as NCERT-MSCL-SPEC-054 rather than in its earlier sequence.
- Four uploaded-copy item rows have no direct predecessor in the inspected 2018 manual: pocket balance (#40), glazed tile (#51), gas generator (#52), and tongs (#53).
- Thus the 54 uploaded candidate items comprise 50 distinct item rows used by the 51 manual crosswalk records (one combined row), plus four upload-only rows.
- The uploaded CSV has a separate row 55 for the document development team; that row is not a kit item.
- All uploaded candidate item references remain `NOT_BYTE_AUTHENTICATED; UPLOAD_COPY_ONLY`.

The full 55-row provenance-qualified comparison is `data/catalogues/mscl_manual_to_2025_upload_item_reconciliation.csv`.

## Material / dimension / quantity deltas for review

The strongest observed comparison deltas (manual statement first; uploaded-copy statement second):
- Boiling tube material: borosilicate vs soda glass.
- Pipette material: polypropylene body with LDPE bulb vs LDPE.
- Glass rod diameter: 5 mm vs 7 mm (same 150 mm length).
- Micro funnel: 32 mm / 80 mm overall vs 30 mm / 75 mm.
- Measuring cylinders: four vs two.
- Micro burettes: eight vs one.
- Micro test-tube brushes: four vs one.
- Micro spatula: four vs one.
- Spirit lamp/Bunsen burner wording and quantity: four vs one spirit lamp.
- Digital thermometer maximum range: 300 C vs 350 C.
- Tripod stands: four vs one.
- Vials: PVC vs HDPE.
- W-tubes: eight vs ten, with arm geometry differences.
- Wire gauze: manual does not state asbestos in its short apparatus entry; uploaded copy specifies an asbestos centre and quantity one.
- Stopwatches: two vs one.
- Volumetric flask distribution: four 25 mL vs two 25 mL plus two 10 mL.
- Universal indicator boxes: two boxes (manual wording) vs one box (uploaded copy).
- Plastic box second height: 75 mm vs 80 mm.
- Chromatography jar: 200 mm x 50 mm with rubber cock/hook vs 225 mm x 52 mm with cover/cork/hook.

Some rows are only wording or specificity differences rather than demonstrated contradictions: Petri-dish "sets"; Cu/Zn electrodes "4 pairs" vs "4 each"; litmus paper pack counts; manual quantities not stated for burette clamp and thread; micro-filter assembly component details. These remain as ambiguous or detail-variance flags, not forced into exact/equivalent status.

## Safety interpretation

- Mercury thermometer row: exclude from physical learner use.
- Asbestos-centred wire gauze described only in the uploaded-copy register: do not create an asbestos asset or physical use; require an asbestos-free approved alternative and subject/safety review.
- Spirit lamp/Bunsen burner ambiguity: do not collapse as interchangeable heat sources.
- Gas-generator row: no arbitrary gas generation or user-composed reaction; only specifically approved virtual/reference scenarios.
- No quantity, material or dimension difference is promoted as an official NCERT amendment because the uploaded PDF bytes are not authenticated.

## Limitations

The 2018 manual is NCERT-hosted and copyright-protected; the 2025 candidate is a user upload with a recorded hash only. Both were converted into LabVerse-authored short labels/paraphrases. No visual comparison of PDF page screenshots is claimed for the manual (its screenshot call failed HTTP 502). The upload's own index was OCR/text-inspected earlier. Procurement, authenticity, latest revision, delivered-item equivalence and subject-expert acceptance remain open.

## Checks

- Manual source rows: 51.
- Uploaded candidate item rows compared: 54.
- Manual-to-upload proposed mapping rows: 51.
- Upload-only rows: 4.
- Non-item/document-team row excluded: 1.
- Unauthenticated-source status retained in every mapping row: yes.
- Quantity/material/safety differences documented rather than overwritten: yes.
- Current official equivalence asserted: no.

**Read-back checks:** 10/10 PASS (see verification details below).

**Decision:** comparison subtask DONE for the two available text/index records; official current-specification reconciliation remains OPEN. Phase 1 / Phase 1.1 remain IN PROGRESS; Phase 2 remains BLOCKED.


## Read-back verification (2026-11-09)

**10/10 checks PASS:** 55-row/9-column comparison table; 51 unique manual item numbers mapped; every uploaded item reference exists; four upload-only item IDs exactly 040/051/052/053; no manual predecessor falsely assigned to upload-only rows; manual beaker 3/16 combined in uploaded row 003; every row retains upload-only/not-byte-authenticated provenance; asbestos wire-gauze difference explicitly flagged; mercury thermometer remains restricted. These checks validate record integrity, not source authenticity, procurement or scientific correctness.
