# Phase Execution Workflow

This is the mandatory operating procedure for all LabVerse sessions. It exists to preserve project continuity, prevent repeated work and ensure the shipped app is suitable for evidence-based scientific learning and research.

## 1. Source of truth and session start

Before work:
1. Read docs/ROADMAP.md, docs/PHASE_STATE.md and docs/WORK_LOG.md.
2. Inspect the repository's default branch, latest commits, current issue/PR and CI status.
3. Read the files and tests for the active task; do not rely on chat history when repository evidence is available.
4. Select the first unchecked item in the current phase/subphase. Confirm dependencies and define a small acceptance checklist.
5. If repository state conflicts with a tracker, repository evidence wins; reconcile all trackers before new feature work.

Never ask the user to repeat a requirement already recorded in the repository.

## 2. Phase discipline

- Work in roadmap order and within the active phase.
- A subphase (for example Phase 1.1) is part of its parent phase; it does not permit advancing to the next main phase.
- Do not mark work complete because it was discussed, drafted, attempted, uploaded or listed by a source.
- Preserve separate evidence states: listed, retrieved, content-inspected, authenticated, reviewed and verified-for-use.
- Keep uncertain values UNKNOWN; keep inferred mappings INFERRED/DESIGN_ONLY until reviewed.
- Do not silently resolve conflicting sources or collapse separate curriculum/kit variants.

## 3. Implementation and research integrity

- Prefer the smallest end-to-end deliverable that advances the active acceptance gate.
- Use official/primary sources when possible and retain exact source URLs, version/date, page/row, licence and retrieval notes.
- Keep source data, domain models, experiment state, analysis and visual rendering separate.
- Never fabricate measurements, citations, scientific rules, apparatus specifications or test results.
- Label all results by epistemic type and retain units, uncertainty, assumptions, model/data version and provenance.
- Keep raw imported data immutable; make cleaning, conversion, filtering, imputation and normalisation explicit transformations.
- Every proposed discovery remains a hypothesis/candidate until suitable evidence, replication and independent review support it.
- Hazardous activities remain virtual, bounded and safety-reviewed; AI cannot override deterministic science or safety constraints.
- Core learning and experiment capabilities must not depend on a paid AI API.

## 4. Continuous update contract — mandatory after each completed work unit

As soon as a task/deliverable is actually completed and verified, update the repository in that same work session:

1. The relevant implementation, source register, catalogue, design or test files.
2. docs/WORK_LOG.md with date, phase/subphase, task ID, outcome, evidence links, files changed, test results, commit SHA and remaining blockers.
3. docs/PHASE_STATE.md with completed checklist items, current status and the exact next action.
4. docs/ROADMAP.md when a milestone/status/acceptance criterion or dependency changes.
5. README.md navigation/status when new top-level documents or user-visible capabilities are added.
6. The linked GitHub tracking issue/PR with a factual progress note when the work changes its evidence or blockers.

Do not wait until a whole phase ends to record completed work. Do not check off incomplete or unverified items.

## 5. Verification before reporting

- Run the relevant automated checks, scientific test vectors, lint/typecheck/build and integration tests that exist for the active task.
- Report exact commands/environment and pass/fail/skip counts.
- Inspect the GitHub diff or fetched committed files; do not rely only on a successful write response.
- Inspect CI where applicable. A docs consistency check is not an application test; a catalogue row-count check is not scientific validation.
- If tests cannot run, record NOT RUN and the concrete reason.
- Confirm the new commit SHA(s) and that trackers link to the actual commit.

## 6. Phase exit and next-phase gate

Before DONE:
- All phase deliverables and exit criteria in ROADMAP.md must be satisfied.
- No critical blocker remains hidden or waived by an informal assumption.
- Required scientific, safety, source-rights, privacy and expert reviews are recorded.
- Acceptance tests pass and CI evidence is recorded.
- ROADMAP.md, PHASE_STATE.md, WORK_LOG.md and README.md agree.
- State the next phase and its dependencies explicitly.

Only then mark DONE and begin the next main phase. Otherwise retain IN PROGRESS or BLOCKED and continue the first unchecked item.

## 7. New session hand-off

End each work session with:
- current main phase and subphase;
- completed deliverables and evidence;
- incomplete/blocked items and why;
- latest commit(s) and CI/test status;
- exactly one next task with acceptance checks.

On the next session, repeat the source-of-truth checks and resume that task. Never restart from Phase 0 unless an explicit reset is requested.

## 8. Status vocabulary

- NOT STARTED: no work has been performed.
- IN PROGRESS: work has started but its exit gate is not met.
- BLOCKED: a named dependency or external issue prevents progress.
- PARTIAL: only a bounded subset is accepted; further work remains.
- DONE: every exit criterion passed and evidence is committed and verified.

Never use DONE as a synonym for drafted, attempted, uploaded or merged.
