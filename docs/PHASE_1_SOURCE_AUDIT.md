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


## 13. Detailed Grade XI–XII NCERT kit manual text audit (2026-10-31)

### Physics laboratory kit manual — Grades XI and XII

Official PDF:
https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf

The PDF text was inspected. It is the NCERT Manual of Secondary Stage Physics Laboratory Kit for Grades XI and XII; first edition October 2018, reprints include August 2024. It carries an all-rights-reserved notice (front matter lines 22–43).

The manual's contents include Grade XI experiments, Grade XII experiments, activities, demonstrations and a detailed “List of Secondary Physics Laboratory Kit Items”. Extracted item families include:
- Vernier caliper, screw gauge, spherometer, beam balance.
- Laboratory stand assembly: MS rod, boss heads, G clamp, clamps and base plate.
- Measuring cylinder, stopwatch, inclined plane, steel/aluminium rollers.
- Helical spring, slotted weights, wooden block, S-type pulley and steel balls.
- Capillary tube, simple pendulum bob, mirror strips, wire samples/weight boxes.
- Sonometer, tuning forks, battery eliminator, beakers, funnel and additional apparatus.
- Electrical activity parts: multimeter, battery/cell, resistor, rheostat, key, wires, bulbs, fuse, diode, LED, transistor, IC, capacitor and LDR.
- Optical bench system: joined scales, interlocking pins, sliding bases/uprights, lens/mirror holders, screen and object/image pencils; spirit level is required for alignment.

The manual explicitly shows the correct circuit logic: ammeter in series and voltmeter in parallel with the resistor, polarity/continuity checks, and modelled LDR resistance change with incident-light intensity. These are useful future Physics action-validator and instrument-state tests.

Relevant text locations include:
- Contents and experiment/activity index around lines 142–289.
- Kit item list around lines 289–745.
- Electrical activity/circuit verification around lines 6287–6348.
- Multimeter measurements and continuity around lines 6513–6538.
- LDR activity around lines 6657–6719.
- Optical bench assembly around lines 7103–7130.

The browser PDF screenshot attempts for cover/item pages failed with HTTP 502, so the audit used the parsed text layer only; no visual screenshot inspection is claimed.

### Micro Scale Chemistry Laboratory Kit — Classes XI and XII

Official NCERT-hosted PDF:
https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf

The PDF front matter identifies the NCERT Manual of Microscale Chemistry Laboratory Kit for Classes XI and XII, first edition April 2018, with all-rights-reserved notice (lines 0–35). Its text layer was inspected.

The manual describes lower-volume chemistry as a way to reduce chemical use, fumes, waste and exposure, while retaining observation/experimental concepts. It identifies special kit apparatus:
- small portable storage box;
- squeeze-type polyethylene dispensing bottles;
- multi-well plates;
- W-tubes for small-quantity gas experiments;
- barrel pipettes;
- miniature glassware;
- micro-filtration unit;
- micro-spatulas.

Detailed equipment table includes:
- graduated 50 mL beakers;
- borosilicate boiling tubes;
- capillary tubes;
- China dishes/water-bath vessels;
- 25/50/100 mL conical flasks;
- labelled 15 mL dispensing bottles;
- graduated 3 mL Pasteur droppers/pipettes and glass droppers;
- ignition/fusion tubes;
- glass rods;
- micro funnels and micro-filtration units;
- well plates and W-tubes;
- micro test tubes, stands, burners/water baths and related micro-scale equipment.

The manual's contents include boiling/melting point, crystallisation, standard solutions, titrations, inorganic cation/anion qualitative analysis, organic extra-element and functional-group tests, biomolecule tests and other curriculum-linked experiments.

The visual/result logic is particularly useful for later rule packs: the manual gives test-specific colour/precipitate observations and confirmatory tests. The app must encode each supported observation only with the correct sample, quantities, conditions and reviewed rule; it must not turn a single colour into an unrestricted identification engine.

The NCERT kit text specifies milligram quantities for solids and drop-scale reagent use for liquids. LabVerse must track units and amounts and clearly label all hazardous/reagent interactions as virtual and supervised. Do not reproduce hazardous procedural details as home-lab directions.

The browser PDF screenshot attempts failed with HTTP 502, so no screenshot-based visual audit is claimed.

### Biology laboratory resources

- The NCERT official publications catalogue confirms publication code 13163, “Manual of Higher Secondary Biology Laboratory Kit” (searchable official catalogue entry): https://ncert.nic.in/uploads/publication/other_books_new.pdf
- The NCERT kit-manual page lists a “Manual of Secondary Stage Biology Laboratory Kit for Grades 11 and 12”: https://ncert.nic.in/division/dek/kit-manuals.php?ln=en
- Direct PDF retrieval from the official kit page returned HTTP 502 in this audit. Therefore, the kit manual has been identified but not text-audited.
- NCERT Class XI Biology Laboratory Manual (2025–26 online edition): https://ncert.gov.in/pdf/publication/sciencelaboratorymanuals/classXI/biology/kelm301.pdf. Its parsed text identifies a dissection box with scissors, scalpels, forceps, dissecting needles, razor, hand lens, dropper and fine brush, plus lab record, lab coat/apron and towel. It calls for teacher/instructor guidance and care with sharp instruments and labelled reagents.

### Source rights

Physics and Chemistry kit manuals explicitly display all-rights-reserved notices. LabVerse may use their bibliographic facts and item names for traceability, but should not copy full manual text, tables, illustrations or figures into the product without permission. Create original 3D assets and original learner-facing explanations, or obtain a suitable licence/permission.

## 14. Updated Phase 1 finding

Class XI/XII combined NCERT Physics and Chemistry kit manuals provide stronger item-level apparatus evidence than a generic shopping list. Their exact item names, sizes, quantities, uses and linked exercises should become the source of truth for NCERT kit inventory records. RBSE board-specific inventory remains separate. Biology kit manual page-level extraction remains open.


## 15. Next retrieval attempt for RBSE Examination 2027 PDFs

On 2026-10-31 the official syllabus index was re-opened:
https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika-syllabus.htm

It still lists separate Class 11 and Class 12 links under Syllabus 2027:
- Class 11 link target: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/11_2027.pdf
- Class 12 link target: https://rajeduboard.rajasthan.gov.in/anudeshika-etc/12_2027.pdf

A browser open/click attempt against each direct PDF returned a timeout (HTTP 400 timeout from the retrieval service). A separate direct-download attempt from the execution container failed DNS resolution for rajeduboard.rajasthan.gov.in. Therefore, the files were not obtained by this attempt and their contents remain unaudited. This is an access-path failure, not evidence that the PDFs do not exist.

No alternative unofficial mirror has been used as a replacement for the official board document.

## 16. Practical-to-equipment-to-result mapping

A first representative mapping slice was created in PHASE_1_PRACTICAL_COVERAGE_MATRIX.md:
- Physics: Class XI Vernier calipers and pendulum; Class XII metre bridge and p-n junction.
- Chemistry: Class XI pH dilution and equilibrium; Class XII redox titration and kinetics.
- Biology: Class XI microscope/mitosis and plasmolysis; Class XII quadrat and pedigree.

For each mapping the matrix records apparatus/materials, student actions, input variables, observations/calculations, visual/dashboard behaviour and mapping status. All rows are DESIGN_ONLY; no engine or 3D functionality has been implemented. The matrix explicitly separates NCERT-CIET references from RBSE mapping.

The matrix is a representative slice, not exhaustive coverage. Remaining practicals, source page references, final item specifications, model rules and tests still need to be completed.

## 17. Current source audit conclusion

- NCERT-CIET Grade 11 and Grade 12 practical index pages have been inspected as separate NCERT resource packs.
- NCERT Grades XI/XII Physics kit manual text and NCERT Classes XI/XII Micro-scale Chemistry kit manual text have been inspected.
- The official Higher Secondary Biology kit manual is identified in NCERT's catalogue (publication code 13163), but its complete PDF has not been obtained/inspected.
- The RBSE Examination 2027 Class 11 and Class 12 syllabus PDFs remain blocked by retrieval timeout/DNS access failure.
- No source or practical is marked VERIFIED_FOR_USE solely from discovery or index listing.
- Phase 1 remains IN PROGRESS; Phase 2 remains blocked.


## 18. Full NCERT-CIET Grade 11/12 index and source compliance extension

The complete Science subject sections visible on the NCERT-CIET Grade 11/12 pages were inspected and transcribed into PHASE_1_NCERT_CIET_INDEX_AUDIT.md. The audit preserves Physics, Chemistry and Biology separately, notes duplicated/alternate activity links and does not merge them into RBSE board coverage.

- Grade 11: https://ciet.ncert.gov.in/activity/grade11
- Grade 12: https://ciet.ncert.gov.in/activity/grade12

The index includes additional Grade 11 Physics demonstrations (atmospheric pressure, Bernoulli, coupled-pendulum resonance, standing waves, projectile motion), Grade 11 Chemistry glass-working and endpoint/pH resources, Grade 12 Physics transformer/eddy-current/interference/radioactive-decay resources, Grade 12 Chemistry colloids/thermochemistry/EMF/chromatography/kinetics, and Grade 12 Biology pollen/gametophyte/meiosis/genetics/soil/water/air and quadrat activities.

The entries were audited at index level only. Linked activity procedures, calculations, safety and asset fidelity still need review before individual entries are VERIFIED.

## 19. NCERT Higher Secondary Biology kit overview

The official NCERT School Kits overview PDF was opened and PDF page images 8–9 were inspected. It describes the Higher Secondary Biology kit as including laboratory instruments, glassware, compound microscope, permanent slides, stains and cards for Class XI/XII Biology practicals. This is broad equipment-family evidence, not a detailed item count/specification. The full Biology kit manual remains inaccessible via the current retrieval path.

The same pages confirm the Physics kit families (optical bench, metre bridge, potentiometer, Boyle's apparatus, resonance apparatus, diode/transistor apparatus, sonometer, resistance box, pan balance) and the Chemistry kit's low-volume/micro-scale approach using plastic containers and unbreakable droppers.

PDF: https://www.ncert.nic.in/division/dek/pdf/NCERT_Educational_School_Kit-Enhancing-UN278.pdf (pages 8–9).
The screenshot/page images support only the overview description and do not authorise copying the photographs or layout into LabVerse.

## 20. Research-source access/usage-policy review

The source-specific usage rules and attribution requirements have now been recorded in PHASE_1_SOURCE_USAGE_COMPLIANCE.md, including:
- PubChem: max 5 requests/second and record/original contributor citations.
- NCBI E-utilities: default 3 requests/second; API key policy for higher rates; NCBI Datasets default 5 requests/second / up to 10 with key.
- Crossref: public/polite rate and concurrency limits; some abstracts may remain copyrighted.
- GBIF: record-level CC0/CC BY/CC BY-NC licence, dataset DOI citation and dynamic query throttling.
- NIST: versioned constants and reference-data citations; CODATA 2022 is the latest published set identified in this audit and 2026 adjustment should be monitored.
- Europe PMC/PMC: use permitted API routes and check article-specific licences; not all full text is reusable.
- NCERT: manual rights restrictions; original LabVerse explanations and assets required unless permission is obtained.

This is a policy review, not an integration test. No API connectors have been implemented or tested.


## 21. RBSE Examination 2027 secondary discovery cross-check (2026-10-31)

The official RBSE syllabus index was reopened:
https://rajeduboard.rajasthan.gov.in/anudeshika-etc/anudeshika-syllabus.htm

It lists Class 11 and Class 12 PDFs for examination year 2027:
- https://rajeduboard.rajasthan.gov.in/anudeshika-etc/11_2027.pdf
- https://rajeduboard.rajasthan.gov.in/anudeshika-etc/12_2027.pdf

Current retrieval attempts again failed because the browser retrieval route rejected the 23,287,223-byte Class 11 PDF and 17,565,238-byte Class 12 PDF as too large. Neither original file was downloaded or audited.

A secondary discovery index was found at:
https://bodhiscore.com/hi/rajasthan-board/class-12/syllabus/

It points to official PDF pages 119 (Physics), 130 (Chemistry) and 141 (Biology), with separate secondary subject summaries. Those summaries report a 4-hour, 30-mark practical and 56 theory-paper marks plus 14 sessional marks (70 total) for each of the three Class 12 science subjects. They are recorded only as SECONDARY_CROSSCHECK pointers. These page positions and exam-scheme details have not been independently checked against the original RBSE PDF. The summaries do not provide the full official practical lists; no practical is verified from them.

Subject summary URLs:
- Physics: https://bodhiscore.com/hi/rajasthan-board/class-12/physics/syllabus/
- Chemistry: https://bodhiscore.com/hi/rajasthan-board/class-12/chemistry/syllabus/
- Biology: https://bodhiscore.com/hi/rajasthan-board/class-12/biology/syllabus/

No equivalent reliable Class 11 subject-page pointer set was identified during this search. The official Class 11 and Class 12 syllabus audit remains blocked. Full details and interpretation controls are in docs/PHASE_1_RBSE_2027_SECONDARY_CROSSCHECK.md.

NCERT's official publications catalogue again confirms the title/code 13163, Manual of Higher Secondary Biology Laboratory Kit, but the catalogue entry is not the full manual. Full item-level Biology kit inspection remains open.
