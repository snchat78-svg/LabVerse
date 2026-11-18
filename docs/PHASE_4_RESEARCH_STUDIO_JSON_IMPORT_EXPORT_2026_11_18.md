# Phase 4 — Research Studio JSON export/import — 2026-11-18

## Goal

Give users a portable, user-controlled backup and restore path for Research Studio drafts without adding a cloud service, paid dependency or account backend.

## Implementation

- Export downloads a readable JSON envelope with `schemaVersion: 1`, an ISO `savedAt` timestamp and all six draft fields.
- Import accepts JSON files only and enforces a 32 KiB file-size ceiling.
- A shared schema validator checks the supported schema version, timestamp, six required string fields and the 5,000-character per-field limit.
- Invalid, malformed, future-version and oversized imports are rejected without replacing the active draft or the last valid local save.
- A successful import becomes the current draft and is autosaved through the existing versioned local-storage path.
- Exported files are user-managed. They are not uploaded or synchronized automatically.
- No new package or cloud dependency is introduced.

## Browser acceptance added

1. Export a populated six-field draft and inspect the downloaded JSON envelope.
2. Clear the local draft, import the exported file and verify all six fields round-trip.
3. Reject a future schema version, a field over the documented limit and malformed JSON.
4. Verify invalid imports do not overwrite the active draft or its local saved copy.
5. Preserve the existing save/reload/clear, touch, keyboard, desktop drag/drop and subject-navigation coverage.

## Verification

- Code commit: `0901566387b546086050226f38b5a382ef121b24`.
- CI status: pending; results will be added after the current GitHub Actions run completes.
- Required checks: strict TypeScript typecheck, Vite production build and Playwright browser smoke.
- This report does not claim cloud sync, automated cross-device transfer, scientific validation, executable protocols or 3D simulation.

## Phase boundary

This is one bounded Phase 4 Research Studio portability work-unit. Phase 4 remains IN PROGRESS. Phase 1/1.1 remains IN PROGRESS; Phase 2 scientific models remain BLOCKED; Phase 5 real 3D and Phase 6 experiment runtime remain NOT STARTED.
