# Phase 4 — Mobile inventory and analysis bottom sheets

**Date:** 2026-11-22  
**Status:** VERIFIED bounded work unit; Phase 4 overall remains IN PROGRESS.

## 1. Requirement

The mobile UI specification says the inventory tray and analysis panel must be collapsible bottom sheets and the workbench must remain primary. The prior React layout stacked the inventory and selected-item detail panels before the candidate workbench. Small-screen users therefore had to scroll past the panels to reach the workbench.

## 2. Implementation

- The mobile Virtual Experiment Lab places the candidate workbench before the inventory and analysis/detail panels.
- The inventory tray and selected-item analysis panel each have a clear, labelled toggle and `aria-expanded` / `aria-controls` state.
- Both panels start collapsed on mobile. Opening one closes the other, preventing overlap.
- Selecting a catalogue item opens the analysis/detail sheet automatically so source information and the existing candidate Add action are reachable.
- The mobile sheet content has a bounded scroll area; the main desktop layout keeps panel contents visible and does not depend on the mobile collapse state.
- Existing catalogue IDs, candidate-instance provenance, explicit copies, removal behavior, touch Add fallback and drag-and-drop behavior are unchanged.

## 3. Verification

Final code commit: `5e3ccaf230b1fa68ae0a522c9f31d4de4fc0d72d`  
Implementation commit: `248eff43709a19be65323b0e138e35a6acfdf338`  
CI: https://github.com/snchat78-svg/LabVerse/actions/runs/44994884760

| Check | Result |
|---|---|
| TypeScript typecheck | PASS |
| Chromium installation | PASS |
| Production build | PASS |
| Production preview startup | PASS |
| Static dashboard preview startup | PASS |
| React browser smoke | 37/37 groups PASS |
| Static ↔ React parity | 13/13 groups PASS |
| Mobile sheet open/close and one-at-a-time behavior | PASS |
| Mobile workbench-before-sheets order | PASS |
| Tap selection opens analysis details | PASS |
| Existing Android-sized touch Add/copy/remove flow | PASS |
| Browser runtime/console errors | None reported |

The first run on the implementation commit exposed that selecting an item did not reveal the collapsed analysis sheet. The follow-up fix auto-opens the sheet after selection; the final CI run above includes and passes this regression test.

## 4. Boundaries and known differences

- This verifies browser-emulated 390px touch behavior, not a physical Android phone, device performance or accessibility certification.
- The workbench still contains candidate catalogue placeholders; this does not create real 3D apparatus, a scientific solver, experiment execution or validated results.
- The React app now has this mobile bottom-sheet interaction. The separate static dashboard is not converted to the same visual bottom-sheet UI; its existing 390px touch flow remains covered by parity tests.
- Phase 1/1.1 source authenticity and detailed specification evidence remain open. Phase 2 remains blocked by those foundations.

## 5. Next action

Conduct the full Phase 4 exit-gate review against the complete requirements, current UI specification, documented static/React differences, source/safety disclosures and passing CI evidence. Keep Phase 4 IN PROGRESS until the exit review proves every applicable criterion or records each explicit accepted gap. Continue to preserve the Biology-with-microscope Kit Box PDF page-9 source-recovery task as open; no repeat upload should be requested.
