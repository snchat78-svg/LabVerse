# Phase 4 — Static dashboard ↔ React parity hardening — VERIFIED 2026-11-20

## Status

<badge color="success">Browser acceptance passed</badge>

This bounded Phase 4 work-unit is accepted. The overall Phase 4 remains **IN PROGRESS** pending a separate exit-gate review.

## Why this follow-up existed

The earlier static ↔ React comparison passed its original 11/11 groups. Later, React gained explicit multiple-apparatus instances with stable per-instance IDs, but the parity test still recorded the old duplicate-handling difference. The static prototype also lacked a keyboard-operable inventory-inspection control, named per-instance removal controls and paired keyboard/touch comparison.

## Changes

- Static catalogue rows now have separate, labelled Inspect and Add buttons. Inspect works with keyboard Enter/Space.
- Inventory rerender restores focus to the corresponding Inspect/Add control. After adding an item, focus moves to the newly created instance's specifically labelled Remove control.
- Static workbench rows expose the original `data-source-id` and distinct `data-instance-id`. Remove labels include apparatus name and instance number. The count is announced as a live status.
- Added visible keyboard focus and touch-friendly styles.
- Parity tests now confirm React's normal Add remains idempotent; explicit React Add copy and static repeated Add create distinct instances; both retain source identity; removing one instance leaves its sibling.
- Added paired keyboard-only Inspect/Add/Remove and 390×844 touch-emulation workflows for both UIs. Drag gestures are not required.
- CI path filters include `dashboard/index.html` and `dashboard/assets/**`, so static UI changes trigger the paired parity tests.

## Issue found and corrected

The first paired run failed because Physics had 60 category chips in the static dashboard's Tab order. This made inventory inspection technically focusable but impractical to reach. Replaced the category chip row with one accessible category dropdown, matching the React filter pattern. The second run verified the category selection and the keyboard flow passed.

## Commits

- Initial parity hardening: `f69b5c0f74c05959154ad18178bebe5f3707bcff`.
- Category dropdown and keyboard-order correction: `5ebb0e48dcff7cca7ad9d7ace205720126d5fbb1`.

## Verification

- React app CI: **SUCCESS** — https://github.com/snchat78-svg/LabVerse/actions/runs/44687059489
  - Strict TypeScript typecheck: PASS
  - Chromium setup: PASS
  - Production build and preview: PASS
  - React browser smoke: **36/36 groups PASS**
  - Static ↔ React parity: **13/13 groups PASS**
- Dashboard integrity: **SUCCESS** — https://github.com/snchat78-svg/LabVerse/actions/runs/44687059565
- Static desktop/mobile browser smoke: **SUCCESS** — https://github.com/snchat78-svg/LabVerse/actions/runs/44686626731
- The final paired parity suite additionally tests the latest category dropdown in the 390px touch-emulation and keyboard paths.

## Coverage

Shared catalogue and task counts; three subject summaries; four workspace destinations; Physics category and class filters; source identity and practical mapping; Chemistry/ Biology safety and stock disclosures; multi-instance workbench provenance and individual removal; Research Studio's documented static/React difference; scientific-analysis NOT_MODELLED/no-results boundary; 390px mobile layout; keyboard-only operation; touch operation without drag; and browser error checks.

## Boundaries and remaining work

- Touch acceptance is browser emulation, not physical Android-device certification.
- This is targeted keyboard acceptance, not full WCAG or assistive-technology certification.
- Static Research Studio remains a documented roadmap placeholder; React Research Studio has structured local schema-v2 planning.
- Workbench contents remain catalogue placeholders, not a validated setup or connected physical apparatus.
- No real 3D scene, experiment runtime, chemistry/physics/biology solver, scientific result or safety approval is claimed.

**Next exact action:** perform the Phase 4 exit-gate review against every recorded UI, data, source-detail, safety-disclosure, keyboard and touch acceptance criterion. Do not advance to real 3D or scientific engines while Phase 1/1.1 source/safety evidence is still open and Phase 2 is blocked.

Phase gates remain: Phase 1/1.1 IN PROGRESS; Phase 2 BLOCKED; Phase 4 IN PROGRESS; Phase 5 real 3D NOT STARTED; Phase 6 experiment runtime NOT STARTED.
