# Architecture Decision Log

## ADR-001 — Offline-first and no mandatory AI API
Status: Accepted. Core experiment outcomes come from deterministic, reviewed rules and local content. A generative AI service is not required for correctness. Reason: predictable results, low operating cost, offline support and testability.

## ADR-002 — 3D workbench is core
Status: Accepted. Use a genuine 3D scene with placed assets and touch manipulation. Static inventory/cards are not acceptable. Reason: apparatus handling and experiment setup are learning outcomes.

## ADR-003 — Separate domain truth from rendering
Status: Accepted. Chemistry/Physics/Biology engines compute domain state; 3D layer renders it. Reason: scientific tests must not depend on animation/frame timing.

## ADR-004 — RBSE is primary Rajasthan mapping
Status: Accepted. Current official RBSE session documents are primary; NCERT manuals support procedures/apparatus; CBSE is a tagged cross-reference only. Reason: preserve board-specific scope.

## ADR-005 — Versioned content and provenance
Status: Accepted. Every experiment/rule includes sources and versions; unknown rules remain unsupported. Reason: prevent unsupported or outdated science claims.

## ADR-006 — Provisional technology
Status: Proposed pending Phase 2 validation. React + TypeScript + Vite + Three.js + IndexedDB + PWA + Capacitor. Reason: cross-platform toolchain; validate performance before locking.

## ADR-007 — LabVerse is an expandable scientific discovery platform
Status: Accepted. Class 11/12 RBSE/NCERT is the first curriculum pack, not the product boundary. Physics, Chemistry and Biology can expand through independently versioned domain, data and model packs. Reason: user explicitly wants wider scientific analysis and research capability.

## ADR-008 — Research Studio is a first-class workspace
Status: Accepted. Include question, literature/source links, hypothesis, alternatives, experimental design, datasets, analysis, reproducibility and candidate next tests. Reason: research workflow must be designed into the platform, not added as a chat box later.

## ADR-009 — No unsupported discovery claims
Status: Accepted. Distinguish measured/imported/simulated/calculated/approximate/predicted results. Hypotheses remain candidates until evidence and independent review support them. Reason: protect scientific integrity and prevent fabricated conclusions.


## ADR-010 — User-selected 3-hour practical assessment preset; learner-paced experiment workbench
Status: Accepted (user decision, 2026-10-31).

- The LabVerse timed practical-assessment preset is 180 minutes (3 hours).
- The virtual lab/workbench is learner-paced; users may run, inspect, repeat and record an experiment without the scientific simulation being coupled to an exam countdown.
- This is a product configuration, not an official RBSE syllabus correction. RBSE Class XI Physics PDF p.114 retains its source-level Hindi 4-hour / English 3-hour discrepancy in the audit record.
- Timer expiry may end a timed assessment session, but must not corrupt experiment state, erase notebook data or alter calculated scientific outcomes.
