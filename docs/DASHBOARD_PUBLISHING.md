# Publish the LabVerse dashboard with GitHub Pages

The repository is public and a static dashboard is available in `dashboard/`. A no-backend, no-paid-API publishing workflow is prepared. The repository currently reports `has_pages: false`, so the site is **not live yet**.

## One-time setup

1. Open [LabVerse repository settings](https://github.com/snchat78-svg/LabVerse/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open [GitHub Actions](https://github.com/snchat78-svg/LabVerse/actions).
4. Select **Deploy LabVerse dashboard**, then **Run workflow** on branch `main`.

The deployment workflow publishes the contents of `dashboard/` at the repository Pages root. The expected project-site address is:

`https://snchat78-svg.github.io/LabVerse/`

Do not share that address as live until the deployment workflow completes successfully and GitHub Pages exposes the site.

## Ongoing updates

The deployment workflow is manual-dispatch only. After changing dashboard files, run it again from Actions. This avoids failed deploy attempts before the one-time Pages setting is enabled.

## What is published

The static site includes the subject dashboard, source-based inventory read model, class selector, practical task list and placeholder workbench. It contains no backend, secrets or user sign-in.

It does **not** publish the complete PDF binaries. It publishes catalogue labels/metadata and UI code only. Candidate evidence states remain visible, and the workbench remains a placeholder until later 3D and scientific-model phases.
