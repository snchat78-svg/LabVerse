# LabVerse Master Roadmap

This is the controlling phase order. Do not skip a phase because a later screen is easier to build. A phase can be complete only when its exit gate is evidenced in the repository.

| Phase | Name | Main outcome | Initial status |
|---|---|---|---|
| 0 | Product definition and design baseline | Scope, requirements, architecture, risks and phase rules | DONE — documentation baseline only |
| 1 | Official syllabus audit and full practical catalogue | RBSE Class 11/12 catalogue, sources, year/version and coverage matrix | NEXT |
| 2 | Domain model and contracts | Typed schemas for experiments, assets, substances, actions, rules and observations | BLOCKED by Phase 1 |
| 3 | Codebase foundation and CI | React/TS app shell, lint/typecheck/tests/build and release skeleton | NOT STARTED |
| 4 | Dashboard and navigation | Class/subject dashboard, catalogue, filters and progress shell | NOT STARTED |
| 5 | 3D workbench and inventory | Empty bench, real model placement, tap/drag, manipulation and reset | NOT STARTED |
| 6 | Real-time simulation kernel | Deterministic state machine, event loop, action validation and replay | NOT STARTED |
| 7 | Chemistry behaviour and visual engine | Validated reaction rules and synchronized visual observations | NOT STARTED |
| 8 | Physics experiment engine | Instruments, circuits, mechanics, optics, readings and uncertainty | NOT STARTED |
| 9 | Biology observation engine | Microscope, slides, specimens, models and structured observations | NOT STARTED |
| 10 | Full experiment/content packs | Practical-specific setup, actions, hints, observations and assessment | NOT STARTED |
| 11 | Observation notebook and calculations | Raw readings, formula evaluator, tables, graphs and report | NOT STARTED |
| 12 | Guided, free and practical-exam modes | Timers, scoring, viva, rubric and review | NOT STARTED |
| 13 | Live analysis and explanation layer | Context-aware interpretation, evidence trace and uncertainty | NOT STARTED |
| 14 | Offline storage and content delivery | IndexedDB, installable content bundles and recovery | NOT STARTED |
| 15 | Learner progress and personal practice | Weak-skill insights, attempt history and recommendations | NOT STARTED |
| 16 | Accessibility, Hindi/English and performance | Mobile optimisation, translation, low-end mode and accessibility | NOT STARTED |
| 17 | Scientific, syllabus and safety QA | Expert-reviewed outcomes, regression suite and content sign-off | NOT STARTED |
| 18 | PWA and Android packaging | Installable PWA, Capacitor Android build and device tests | NOT STARTED |
| 19 | Release, maintenance and optional sync | Versioned release, feedback process, optional cloud sync later | NOT STARTED |

## Phase gates

Every phase must provide: scope and files changed; tests run and actual results; acceptance checklist; unresolved issues and risks; updated PHASE_STATE.md; evidence such as test output, CI link, screenshots or reproducible steps; and explicit next phase/dependencies.

## Phase 0 exit evidence

Phase 0 is complete only as a planning/documentation baseline: vision, requirements, architecture, science/safety rules, interaction specification, roadmap and tracking docs are stored. It does not imply an application implementation or experiment engine.

## Phase 1 expected work — next phase

- Retrieve current official RBSE Class 11 and 12 subject/practical syllabus documents for the active session.
- Collect NCERT XI/XII Physics, Chemistry and Biology laboratory manuals and relevant practical kit manuals.
- Build a row-per-practical catalogue with source URL, page/section, class, subject, academic year, marks/assessment where applicable, apparatus/materials, procedure, measurable outcomes and asset needs.
- Include practicals, activities, projects, investigatory work, spotting/slide work and record/viva wherever required.
- Compare RBSE against NCERT without silently adding or removing board requirements.
- Flag uncertain, missing or changed items for review.
- Produce a coverage report and obtain review before Phase 2.

## Change control

When a requirement is added, update REQUIREMENTS.md, the relevant architecture document, this roadmap if phase scope changes, and DECISIONS.md. Preserve completed evidence. Never rewrite phase history to make incomplete work appear complete.
