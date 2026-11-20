# Phase 4 — Static dashboard ↔ React parity hardening — 2026-11-20

## Status

Implementation committed to `main` at `f69b5c0f74c05959154ad18178bebe5f3707bcff`. Browser verification is **PENDING** while GitHub Actions installs Chromium. This report must not be treated as accepted until the React and static dashboard browser workflows finish successfully.

## Why this follow-up exists

The original static ↔ React comparison passed its defined 11/11 groups. A later React workbench change added explicit multiple-apparatus instances with stable per-instance IDs, but the parity test still described the old duplicate-handling difference. The static prototype also lacked a keyboard-operable inventory-inspection control, named per-instance removal controls and a keyboard/touch comparison against React. This follow-up closes those stale and uncovered cases; it does not repeat the earlier source-catalogue audit.

## Changes in this work-unit

- Static catalogue records now have a dedicated, labelled `Inspect {item}` button that works with Enter/Space and can be reached by Tab. The separate Add button remains available.
- Inventory re-rendering restores focus to the relevant inspect/Add control. After a candidate is added, focus moves to that newly created candidate's specifically labelled Remove control.
- Static workbench instances expose both the original `data-source-id` and their distinct `data-instance-id`. Remove labels include the item name and instance number, and the live item count is announced.
- Visible keyboard-focus indicators and touch-friendly control behavior were added to the static dashboard.
- The parity suite now checks that normal React Add remains idempotent, explicit React Add copy creates separate instances, static Add supports repeated instances, the two interfaces preserve source identity, and removing one instance leaves its sibling.
- Added keyboard-only inventory → Add → Remove acceptance for both UIs, plus 390×844 touch-emulation flows that do not require drag gestures.
- CI now runs the paired parity suite when the static dashboard HTML or assets change, not only when React code or inventory JSON changes.

## Verification

- Dashboard JavaScript syntax and catalogue integrity: PASS — https://github.com/snchat78-svg/LabVerse/actions/runs/44686626801
- React app checks: PENDING — https://github.com/snchat78-svg/LabVerse/actions/runs/44686626741
- Static dashboard desktop/mobile browser smoke: PENDING — https://github.com/snchat78-svg/LabVerse/actions/runs/44686626731

## Boundaries

The 390px touch tests are browser emulation, not physical Android device certification. The static Research Studio remains a roadmap placeholder while React contains the structured local Research Studio; this is an intentional, documented implementation difference. The workbench remains a catalogue-placeholder workspace, not a validated setup, real 3D scene, experiment runtime or scientific solver.

Phase 4 remains IN PROGRESS until the complete exit criteria are met. Phase 1/1.1 source and safety evidence remains IN PROGRESS; Phase 2 scientific models remain BLOCKED; real 3D and experiment runtime remain NOT STARTED.
