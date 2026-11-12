# Phase 4 — Research Studio local draft persistence — 2026-11-12

## Goal

Make the current Research Studio draft useful across reloads without introducing paid services, a server dependency or a cloud-sync claim.

## Delivered

- Added a versioned local storage envelope under key `labverse.research-studio.draft.v1`.
- Schema version is explicitly `1`; saved records include an ISO timestamp and six named draft fields (question, hypothesis, alternative, independent variable, dependent variable, controls).
- Draft fields are capped at 5,000 characters at the UI and validated when read.
- Valid drafts restore when the application reloads.
- The user can clear the local draft explicitly; emptying all fields also removes the stored record.
- Unknown schema versions or malformed data are not loaded as current data. The UI labels the state and lets the user clear or replace it.
- Storage exceptions are caught and reported as unavailable; no cloud sync or upload occurs.

## Automated acceptance

React app CI SUCCESS: https://github.com/snchat78-svg/LabVerse/actions/runs/43228437757

- Dependency install: PASS.
- TypeScript typecheck: PASS.
- Chromium setup: PASS.
- Vite production build: PASS.
- Preview startup: PASS.
- Playwright browser smoke: **28/28 groups PASS**.
- Specific new checks:
  1. Autosave with schema version 1 and timestamp parse validation.
  2. Reload restore of question and hypothesis.
  3. Clear action removes the storage key and clears fields.
  4. Schema version 99 is rejected, not rendered as an active draft, and can be explicitly cleared.
- Code commit: 8ea6c8d9bd4caad5e10cef85ee8c141eb8b8ce82; follow-up assertion fix: 0544ac13dddd6ad3a8c635f286ec4dec6ad47610.

## Data and privacy boundary

The saved draft stays in browser local storage on the current device/browser profile. It is not sent to a server, synced across devices or protected by a cloud account. Browser storage can be cleared by the browser/user; storage may be unavailable in private/restricted contexts. Do not use this as the only copy of important research notes.

## Phase boundary

This closes one Phase 4 Research Studio usability work-unit only. It is not cloud persistence, a collaborative notebook, a validated scientific protocol, a solver or a scientific conclusion. Phase 1/1.1 remains IN PROGRESS; Phase 2 remains BLOCKED; real 3D and experiment runtime remain NOT STARTED.
