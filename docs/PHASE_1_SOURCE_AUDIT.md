# Phase 1 — Source Audit and Research Platform Scope

Audit date: 2026-10-31  
Status: IN PROGRESS — preliminary sources found; current syllabus PDFs and full coverage not yet verified.

## 1. RBSE current-session discovery

The official RBSE syllabus index currently displays the heading for Syllabus 2027 and separate links for Class 11 and Class 12:

- Index: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika-syllabus.htm
- Class 11 2027 PDF: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/11_2027.pdf
- Class 12 2027 PDF: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/12_2027.pdf

The current-session links were discovered on the official index, but the PDF retrieval service returned file-too-large errors when opening them (reported payload sizes approximately 23.3 MB and 17.6 MB). Their practical sections have therefore **not** been read in this audit. They are a mandatory Phase 1 blocker, not a completed source check.

## 2. RBSE 2026 baseline documents — comparison only

The official Class 11 PDF for the 2025–26 session is:
https://rajeduboard.rajasthan.gov.in/anudeshika-etc/11_2026.pdf

The official Class 12 PDF for the 2025–26 session is:
https://rajeduboard.rajasthan.gov.in/anudeshika-etc/12_2026.pdf

The board's practical examination instruction document for 2026 is:
https://rajeduboard.rajasthan.gov.in/SRS_INST_PRAC.pdf

Its index identifies Higher Secondary Physics, Chemistry and Biology practical sections at pages 33–43, 44–53 and 54–62 respectively. The document is for the 2026 examination, so its procedures must not be assumed to remain current for 2027.

### Extracted preliminary areas from 2026 baseline

| Class | Subject | Sections observed | Status |
|---|---|---|---|
| 11 | Physics | Vernier calipers, screw gauge, spherometer, beam balance, vector/force setup, pendulum graphs, friction, inclined plane, elasticity, spring oscillations, gas law, surface tension, viscosity, cooling and sonometer | Preliminary extraction |
| 11 | Chemistry | Basic lab techniques, purification/crystallisation, melting/boiling point, ionic equilibrium, pH changes, titrimetric analysis, systematic qualitative analysis, nitrogen/sulphur/halogen tests, projects, record and viva | Preliminary extraction |
| 11 | Biology | Plant-family observations, root/stem anatomy slides, stomata, osmosis, chromatography, plasmolysis, respiration, transpiration, enzyme action, food biomolecule tests, urine analysis, specimens and microscopy | Preliminary extraction |
| 12 | Physics | Resistance/resistivity, metre bridge, potentiometer, galvanometer, AC frequency, mirrors/lenses, prism/refractive index, microscope/slab, p-n junction and Zener diode | Preliminary extraction |
| 12 | Chemistry | Redox titration, cation/anion qualitative analysis, organic functional-group tests or compound preparation or food tests, content-based experiment, record and viva | Preliminary extraction |
| 12 | Biology | Botany and zoology major/minor work, flower structures, mitosis, quadrat ecology, gametophyte stages, staining, specimen/spotting, genetics and investigatory work | Preliminary extraction |

The detailed provisional list is in PHASE_1_INITIAL_CATALOGUE.md. These are 2026 baseline items, not a claim that the current 2027 syllabus has been fully checked.

## 3. NCERT laboratory resources found

NCERT's official kit-manual page lists:
- Secondary Stage Physics Laboratory Kit for Grades 11 and 12.
- Secondary Stage Biology Laboratory Kit for Grades 11 and 12.
- Micro Scale Chemistry Laboratory Kit for Grades 11 and 12.

Source: https://ncert.nic.in/division/dek/kit-manuals.php?ln=en

NCERT's specification documents separately list Physics, Biology, Micro Scale Chemistry and Molecular Model kits for Grades 11 and 12:
https://ncert.nic.in/division/dek/specification_documents.php?ln=en

The actual manuals/specifications still need to be retrieved, indexed by page and compared to the RBSE practical list. Copyright and reuse rights must be checked before copying any text, illustrations or diagrams into LabVerse.

## 4. Cross-domain science and research sources identified

| Domain | Candidate source | Initial purpose |
|---|---|---|
| Chemistry | PubChem / PUG REST | Chemical identity, properties, structures and source-linked annotations |
| Chemistry | NIST Chemistry WebBook SRD 69 | Thermochemistry, thermophysical data and spectra |
| Physics | NIST CODATA / physical reference data | Constants, units and reference measurements |
| Biology | NCBI Datasets and NCBI Taxonomy | Organism taxonomy, genomes, genes, proteins and sequence metadata |
| Biology/ecology | GBIF Occurrence API | Biodiversity and species occurrence observations |
| Literature | Europe PMC REST | Publication metadata, abstracts, open full text where permitted, references and annotations |
| Literature | Crossref REST | DOI and scholarly publication metadata |
| Data stewardship | FAIR guiding principles | Findable, Accessible, Interoperable and Reusable research-data design |

The candidate-source descriptions and restrictions are documented in SCIENTIFIC_SOURCE_REGISTRY.md. Connectors have not yet been implemented. Source-by-source licensing, use terms, API limits and data-quality review remain necessary.

## 5. Research capability map

Phase 1 expands the platform scope beyond a virtual school laboratory. The first architecture map includes:
- scientific question and literature discovery;
- claim/source/evidence relationships;
- hypothesis and competing explanations;
- independent, dependent and controlled variables;
- experiment protocol and safety gate;
- virtual simulation or real-data import;
- raw/derived dataset lineage;
- calculations, units, graphs, statistics and uncertainty;
- model-versus-observation comparison;
- reproducible notebook/report;
- candidate research questions and discriminating tests.

These are design requirements, not implemented features.

## 6. Audit blockers and remaining work

- [ ] Retrieve and inspect the official RBSE Class 11 2027 syllabus PDF.
- [ ] Retrieve and inspect the official RBSE Class 12 2027 syllabus PDF.
- [ ] Confirm exact pages/sections for all six subject/class practical catalogues.
- [ ] Collect and inspect the three NCERT Grade 11–12 kit manuals and associated specifications.
- [ ] Extract every practical, activity, project, spotting, record, viva and required equipment/material.
- [ ] Reconcile differences between RBSE and NCERT without silently merging requirements.
- [ ] Verify data/API usage, licences, attribution and retention terms for candidate research sources.
- [ ] Complete source-to-catalogue-to-asset-to-test coverage matrix.
- [ ] Flag inconsistent or unclear source wording for subject-teacher review.
- [ ] Obtain review before marking any curriculum content VERIFIED.

## 7. Phase status decision

Phase 1 remains IN PROGRESS. The official 2027 syllabus links are known, but their documents have not been inspected. The 2026 baseline gives useful preliminary coverage only. Phase 2 must not start until the Phase 1 exit gate is met or a clearly scoped blocker is accepted and documented.


## 8. Additional NCERT-CIET catalogue evidence (2026-10-31)

The official NCERT Central Institute of Educational Technology (CIET) activity pages were opened and their subject-wise entries inspected:

- Grade 11: https://ciet.ncert.gov.in/activity/grade11
- Grade 12: https://ciet.ncert.gov.in/activity/grade12

The CIET Grade 11 page lists Physics experiments such as Vernier calipers, screw gauge, spherometer, beam balance, pendulum graphs, friction, inclined plane, Young's modulus, spring constant, Boyle's law, surface tension, viscosity, cooling curve, sonometer and resonance tube. Its Chemistry list includes qualitative analysis, standard solution preparation, purity tests, equilibrium, pH, titration endpoint, Lassaigne's test and related activities. Its Biology list includes microscopy, mitosis, morphology, root/stem/flower structures, osmosis, plasmolysis, stomata, transpiration, biomolecule/urine tests and additional activities.

The CIET Grade 12 page lists Physics experiments on resistance, metre bridge, EMF/potentiometer, galvanometer, AC frequency, mirrors/lenses, prism, refractive index, p-n junction, Zener diode and transistor, along with projects/demonstrations. Chemistry includes sols, titration, functional groups, thermochemistry, EMF, inorganic/organic preparation, chromatography, biomolecule tests, kinetics and emulsions. Biology includes pedigree, soil/water tests, pollen/gametophyte, meiosis, Mendelian laws, hybridisation, staining, organism identification, air pollution and quadrat ecology.

Detailed source-to-subject mapping is recorded in PHASE_1_NCERT_CROSSWALK.md. These CIET entries are NCERT digital-resource references, not a substitute for the official RBSE 2027 syllabus.

## 9. NCERT manual files inspected as source text

The following official NCERT Class XI laboratory manual PDFs were opened and their parsed text inspected:

- Physics Class XI, edition text marked 2025–26: https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/physics/kelm101.pdf
- Chemistry Class XI, edition text marked 2025–26: https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm201.pdf
- Biology Class XI, edition text marked 2025–26: https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf

Evidence relevant to design:
- Physics manual explains practical skills, errors, least count, repeated observations, SI units, significant figures, graphing, conclusions and further investigation; it structures work across experiments, activities, projects and demonstrations.
- Chemistry manual contents include laboratory equipment/procedures, reagent-bottle handling, heating, glass-tube operations, cork boring, filtration, titrimetric analysis and systematic qualitative analysis.
- Biology manual identifies dissection-box items including scissors, scalpels, forceps, dissecting needles, razor, hand lens, dropper and fine brush, with explicit handling/supervision precautions.

The manuals display all-rights-reserved notices. Their full text/figures must not be copied into LabVerse without permission. Use them for source mapping and create original explanations/assets or obtain a valid licence.

## 10. PDF visual-inspection access log

The web PDF text layer was accessible for the NCERT Class XI manuals and the RBSE 2026 practical-instruction PDF. The screenshot/page-image attempts failed (NCERT PDFs returned 502; the RBSE practical PDF page images exceeded the retrieval size limit). Therefore, no screenshot-based visual page audit is claimed. Any table, diagram or layout-dependent item must be checked when an accessible PDF copy is obtained.

## 11. RBSE 2026 practical-instruction detail (Higher Secondary examination)

The parsed 2026 RBSE practical-instruction PDF specifies:
- Physics practical examination: 3 hours, 30 marks; one major experiment (10), two activities (8), project (4), practical record (4), viva (4); at least 12 major experiments and 8 activities (4 from each section) to be performed/recorded in the session.
- Chemistry practical examination: 3 hours, 30 marks; volumetric exercise (10), inorganic salt analysis for one anion and one cation (6), functional group/food test/inorganic preparation option (4), content-based experiment (5), practical record (3), viva (2). It requires balanced equations including ionic equations, correct volumetric reading, SI/significant-figure treatment and systematic confirmatory tests.
- Biology practical instructions include spotting, labelled diagrams and practical-syllabus-based viva; source pages 54 onward should be mapped at exercise level during full catalogue extraction.

This is a 2026 Higher Secondary practical examination source, not proof of 2027 requirements or Class XI requirements. Exact source lines/page references are tracked from the parsed PDF; screenshot-based visual confirmation remains open.

## 12. Phase 1 progress adjustment

New accepted deliverables:
- NCERT-CIET Grade 11/12 crosswalk recorded.
- Class XI NCERT manual text source references recorded.
- Preliminary three-subject equipment/3D object families recorded in PHASE_1_EQUIPMENT_INVENTORY.md.

Still open: RBSE 2027 PDF inspection, Class XII manual extraction, exact page-level crosswalk, final item counts, rights/terms check for research databases and independent subject review.
