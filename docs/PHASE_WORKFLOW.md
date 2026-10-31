# Phase Execution Workflow

This process applies to every phase so that work is not repeated or skipped between sessions.

## Before starting a phase

1. Read ROADMAP.md and PHASE_STATE.md.
2. Inspect the current GitHub branch and latest commits.
3. Review the previous phase's evidence and unresolved issues.
4. Confirm the phase's dependencies are satisfied.
5. Create a short phase checklist and define expected files/tests.

## While working

- Make changes only within the current phase scope, except for necessary bug fixes.
- Keep changes small enough to review.
- Do not replace verified content with guesses.
- Use official sources for curriculum facts and record exact references.
- Keep user-facing claims aligned with implemented behaviour.
- Do not claim a 3D interaction, experiment result or test exists unless it can be run.

## Before marking complete

- Run all required tests and the relevant regression tests.
- Record command, environment, counts and failures.
- Inspect the actual GitHub diff and CI result.
- Resolve critical failures or leave the phase blocked with a clear reason.
- Update PHASE_STATE.md and ROADMAP.md in the same phase-completion commit.
- Record commit SHA and the exact next phase.

## On a new conversation/session

Resume from PHASE_STATE.md, inspect GitHub to verify it still matches the repository, and continue from the first unchecked task. Do not ask the user to repeat information already in project documents. If repository state differs from the document, repository evidence wins and the tracker must be reconciled.

## Completion vocabulary

- NOT STARTED: no work has been performed.
- IN PROGRESS: work has started but exit gate is not met.
- BLOCKED: progress is prevented by a named dependency or issue.
- DONE: all exit criteria have passed and evidence is committed.
- PARTIAL: some deliverables are accepted, but the full phase is not complete.

Never use DONE as a synonym for drafted, attempted, uploaded or merged.
