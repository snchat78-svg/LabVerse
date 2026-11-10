# LabVerse React application foundation

This directory begins Phase 3 of the master roadmap. It is a separate React + TypeScript + Vite application and does not delete or replace the tested static prototype in `../dashboard/`.

## Stack

- React 19.3.1 + React DOM 19.3.1
- Vite 8.3.7 + `@vitejs/plugin-react` 6.3.0
- TypeScript 7.0.2
- Strict TypeScript settings and a production build target at repository `dist/`

These versions are pinned exactly. The Vite compatibility guide requires Node.js 20.19+ or 22.12+; CI uses Node 24. See the official [React versions](https://react.dev/versions), [Vite release notes](https://vite.dev/releases), [Vite getting started](https://vite.dev/guide/) and npm package version records.

## Commands

Run from this directory:

- `npm install --no-package-lock`
- `npm run typecheck`
- `npm run build`
- `npm run dev`

GitHub Actions runs install, typecheck and build. No local Python, Node or Android SDK is required for the current repository-managed checks.

## First foundation scope

- React app entry, strict TypeScript config, Vite configuration and reusable subject overview.
- Subject selection for Physics, Chemistry and Biology.
- Class XI/XII filter.
- Searchable apparatus/material inventory sourced from the existing single dashboard inventory JSON.
- Practical-to-candidate-source-item navigation and candidate placeholder workbench setup.
- Visible Chemistry reference-only/no-live-use and Biology school-managed/not-supplied-with-kit labels.
- Task catalogue and selected-item source/evidence/safety information.

## Not yet implemented

This is the app foundation, not the completed product. The four workspace destinations are not fully functional yet; the separate static dashboard remains the richer preview. The existing static `dashboard/` remains the richer interaction preview until its task-to-source-item navigation, candidate placeholder setup, and browser checks have been migrated into React. Real 3D models, scientific runtime, deterministic Physics/Chemistry/Biology solvers, offline persistence, Research Studio data workflows and Android packaging remain future roadmap work.
