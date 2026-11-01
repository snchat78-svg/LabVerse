# LabVerse — Scientific Discovery & Virtual Research Platform

**Explore. Experiment. Analyse. Discover.**

LabVerse is an expandable, evidence-grounded science platform for Physics, Chemistry and Biology. School practicals for Rajasthan/RBSE and NCERT Classes 11–12 are the first learning pack—not the limit of the platform.

The long-term goal is to let learners and researchers explore scientific questions, construct models, run virtual experiments, import real datasets, analyse observations, compare hypotheses and discover promising questions for further investigation.

## Four connected workspaces

1. **Learning Lab** — Class 11–12 practicals first, then separately versioned school, college and advanced topic packs.
2. **Virtual Experiment Lab** — an empty 3D workbench where real 3D apparatus, samples, specimens and instruments are placed by tap or drag-and-drop, then moved, rotated, inspected, connected and used.
3. **Scientific Analysis** — rule-based and equation-based calculations, material/chemical properties, conditions, measurements, graphs, uncertainty and cross-domain interpretation.
4. **Research Studio** — research question, literature/source search, hypothesis, experimental design, variables, datasets, statistical analysis, comparison of results, reproducible reports and candidate next questions.

## Non-negotiable product rules

- The workbench begins empty. Tap-to-add and drag-and-drop both work; a placed item is a manipulable 3D asset, not a text card.
- Physics, Chemistry and Biology outcomes come from explicit scientific models, reviewed rules or cited data—not decorative animations.
- Live visuals, dashboard observations, calculations and explanations refer to the same experiment-state events.
- A result clearly identifies whether it is measured, imported from a source, simulated, calculated, approximated, predicted or not modelled.
- Each scientific claim carries provenance: source/data version, model or rule version, assumptions, units and uncertainty.
- New hypotheses may be suggested, but are not labelled discoveries or facts until independently tested and reviewed.
- Unknown, unsupported, conflicting or unsafe cases are surfaced honestly. The platform does not invent reaction products, readings, biological facts or citations.
- Curriculum items are mapped to board, class, academic year, exact source and content version.
- Hazardous operations remain virtual, bounded and safety-reviewed; the platform does not direct unsupervised real-world experiments.

## Project status

- Phase 0: DONE — planning/documentation baseline only.
- Current phase: Phase 1 — source, scope and initial catalogue audit (IN PROGRESS).
- Application code, 3D assets and scientific simulation engines: NOT IMPLEMENTED.
- Phase 2 remains blocked until Phase 1 exit criteria pass.

## Main documentation

- [Master roadmap](docs/ROADMAP.md)
- [Phase state tracker](docs/PHASE_STATE.md)
- [Phase execution workflow](docs/PHASE_WORKFLOW.md)
- [Product vision](docs/PRODUCT_VISION.md)
- [Requirements](docs/REQUIREMENTS.md)
- [System architecture](docs/SYSTEM_ARCHITECTURE.md)
- [3D workbench](docs/INTERACTION_3D_WORKBENCH.md)
- [Real-time simulation engine](docs/REALTIME_SIMULATION_ENGINE.md)
- [Live analysis and environment model](docs/ANALYSIS_AND_ENVIRONMENT_MODEL.md)
- [Research Studio](docs/RESEARCH_STUDIO.md)
- [Scientific source registry](docs/SCIENTIFIC_SOURCE_REGISTRY.md)
- [Research data pipeline](docs/RESEARCH_DATA_PIPELINE.md)
- [Scientific method and discovery integrity](docs/SCIENTIFIC_METHOD_AND_DISCOVERY.md)
- [Expandable domain model](docs/DOMAIN_EXPANSION_MODEL.md)
- [Phase 1 source audit](docs/PHASE_1_SOURCE_AUDIT.md)
- [Phase 1 initial catalogue](docs/PHASE_1_INITIAL_CATALOGUE.md)

## Proposed technology direction

React + TypeScript + Vite, Three.js, IndexedDB, a deterministic simulation core, validated data/content schemas, and later PWA/Capacitor packaging. Scientific analysis may use local calculation modules and, where practical, sandboxed WebAssembly/Web Workers. Technology is provisional until architecture/performance phases test it.

No paid AI API or mandatory cloud backend is required for core experiments. Optional AI-assisted literature summarisation or language explanations may be considered later, but cannot be the source of scientific truth or replace citations, calculations, evidence review or human experimental validation.

## Official and scientific starting sources

- [RBSE syllabus index](https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika-syllabus.htm)
- [NCERT Grade 11–12 laboratory kit manuals](https://ncert.nic.in/division/dek/kit-manuals.php?ln=en)
- [NCERT kit specification documents](https://ncert.nic.in/division/dek/specification_documents.php?ln=en)
- [PubChem](https://pubchem.ncbi.nlm.nih.gov/docs/about)
- [NIST Chemistry WebBook](https://webbook.nist.gov/)
- [NIST CODATA physical constants](https://www.nist.gov/programs-projects/codata-values-fundamental-physical-constants)
- [NCBI data resources](https://www.ncbi.nlm.nih.gov/comparative-genomics-resource/data-resources/)
- [Europe PMC REST API](https://dev.europepmc.org/RestfulWebService)
- [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/)
- [GBIF occurrence API](https://techdocs.gbif.org/en/openapi/v1/occurrence)

The scientific source registry records each source's role, limitations, licence/usage checks and citation requirements. Discovery and ingestion are not the same as verification.

## Phase 1 tracking issue

The user-supplied RBSE 2026–2027 Class XI/XII PDFs have now been inspected for all six Physics/Chemistry/Biology practical sections. [Issue #1](https://github.com/snchat78-svg/LabVerse/issues/1) remains open for the remaining inventory, specification and expert-review work; it is no longer a PDF-retrieval blocker.


## Current Phase 1 working documents

- [NCERT-CIET practical crosswalk](docs/PHASE_1_NCERT_CROSSWALK.md)
- [Preliminary equipment and 3D asset inventory](docs/PHASE_1_EQUIPMENT_INVENTORY.md)
- [RBSE 2026–2027 official practical audit](docs/PHASE_1_RBSE_2027_OFFICIAL_AUDIT.md)
- [RBSE-to-asset mapping delta](docs/PHASE_1_RBSE_2027_ASSET_DELTA.md)
- [RBSE 2027 syllabus retrieval issue](https://github.com/snchat78-svg/LabVerse/issues/1)


- [Phase 1 practical-to-equipment-to-result coverage matrix](docs/PHASE_1_PRACTICAL_COVERAGE_MATRIX.md)


## Additional Phase 1 audit documents

- [NCERT-CIET full Grade 11/12 Science index audit](docs/PHASE_1_NCERT_CIET_INDEX_AUDIT.md)
- [Scientific source usage, licences and API limits](docs/PHASE_1_SOURCE_USAGE_COMPLIANCE.md)
- [RBSE 2027 secondary cross-check history and official-page verification](docs/PHASE_1_RBSE_2027_SECONDARY_CROSSCHECK.md)
- [RBSE 2026–2027 official Class XI/XII practical syllabus audit](docs/PHASE_1_RBSE_2027_OFFICIAL_AUDIT.md)
- [RBSE practical-to-3D asset inventory delta](docs/PHASE_1_RBSE_2027_ASSET_DELTA.md)
- [NCERT Higher Secondary Biology Kit review](docs/PHASE_1_NCERT_BIOLOGY_KIT_REVIEW.md)
- [NCERT Grade XI–XII kit specification access audit](docs/PHASE_1_NCERT_SPECIFICATION_ACCESS_AUDIT.md)
- [NCERT Class XI Biology Exercises 2–6 crosswalk](docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_CROSSWALK.md)
- [NCERT Class XI Biology Exercises 2–6 detailed audit](docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_DETAILED_AUDIT.md)
- [NCERT Class XI Biology Exercises 2–6 current-edition source audit](docs/PHASE_1_NCERT_XI_BIOLOGY_EXERCISES_2_6_DETAILED_AUDIT.md)
- [NCERT Class XII Biology Exercises 4–6 audit](docs/PHASE_1_NCERT_XII_BIOLOGY_EXERCISES_4_6_AUDIT.md)
- [NCERT Class XII Biology Exercises 8–25 audit and RBSE crosswalk](docs/PHASE_1_NCERT_XII_BIOLOGY_EXERCISES_8_25_AUDIT.md)
- [NCERT Class XII Biology Exercises 11, 17–20 and Project Work audit](docs/PHASE_1_NCERT_XII_BIOLOGY_EXERCISES_11_17_20_PROJECT_AUDIT.md)
- [Science claim review — Class XII pedigree traits](docs/PHASE_1_SCIENCE_CLAIM_REVIEW_XII_BIO_EX11.md)
- [Exercise 2 scientific claim review — mesosomes and taxonomy](docs/PHASE_1_SCIENCE_CLAIM_REVIEW_BIO_EX02.md)

- [RBSE 2026–2027 all-six-pack practical coverage register](docs/PHASE_1_RBSE_ALL_PRACTICAL_COVERAGE_REGISTER.md)
- [NCERT official School Kits brochure audit — Biology kit category evidence](docs/PHASE_1_NCERT_OFFICIAL_SCHOOL_KITS_BROCHURE_AUDIT.md)

- [NCERT Biology kit slide and visual-aid candidate register](docs/PHASE_1_NCERT_BIOLOGY_KIT_SLIDE_AND_VISUAL_AID_REGISTER.md)
