# Technical Stack and Cost Strategy

## Proposed stack — validate in Phase 2

- TypeScript.
- React + Vite for application UI.
- Three.js (WebGL baseline) for 3D scene.
- Predictable reducer/state store; add a larger framework only if justified.
- Zod or JSON Schema-compatible validation for content packs.
- IndexedDB for offline persistence.
- Service worker and versioned offline content bundles for PWA.
- Capacitor for Android packaging after PWA is stable.
- Vitest + Testing Library + Playwright where practical.
- GitHub Actions for install, lint, typecheck, tests and production build.
- Blender or original procedural meshes for basic 3D assets.

These are recommendations, not installed dependencies or implemented code.

## Zero-cost principles

No paid AI API in the core simulation path; no required backend or sign-in in first release; curated rules and learner progress stored locally; original or appropriately licensed 3D assets; build/test in GitHub Actions where feasible; verify free hosting terms before deployment; optional cloud sync much later.

₹0 initial operating cost is a target, not a guarantee. App-store publishing, paid assets, hosting limits, domain names and device testing may create costs. Direct APK or PWA distribution can be considered before store publication.
