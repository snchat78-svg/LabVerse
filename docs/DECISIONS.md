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
