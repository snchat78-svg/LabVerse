# LabVerse Dashboard — starter build 0.1

This is a dependency-free, responsive static dashboard shell for the three subject directions:

- Physics
- Chemistry
- Biology

It includes four workspace entry points: Learning Lab, Virtual Experiment Lab, Scientific Analysis and Research Studio.

## Run locally

Open `index.html` through any static web server (recommended) or deploy the `dashboard/` directory as the site root. The page loads `data/inventory.json` at runtime.

No Python, Node installation or paid API is required to view the static dashboard.

## Included in this starter

- Three subject landing cards and subject-specific workspace navigation.
- Class XI / XII filters and practical task index.
- Searchable instrument, apparatus, specimen, slide, visual-aid and reagent tray.
- Tap-to-add and drag-and-drop placement to a placeholder workbench.
- Source/evidence/safety detail panel.
- Separate virtual-only or school-managed reagent labels.
- Candidate/unauthenticated statuses retained from source records.

## Important boundaries

This is a dashboard and catalogue prototype, not a completed laboratory simulator. Bench objects are 2D placeholders; no production 3D models, experiment action runtime, reaction solver, calibrated physics engine, microscope model, or validated live scientific analysis is implemented.

Unverified source records are deliberately shown as candidates. Chemistry and Biology reagent lists do not establish current kit supply, concentration, quantity, a current SDS, or permission for physical use. The Biology manual explicitly states that its 58 listed chemicals/reagents/stains are not supplied with the kit and must be managed by the institution/school/teacher.

## Data provenance

The inventory JSON is derived from existing LabVerse source catalogues, RBSE traceability CSVs and the newly received NCERT Biology kit manual. It preserves source IDs and evidence labels. It is not a substitute for primary-source byte authentication or subject-expert review.
