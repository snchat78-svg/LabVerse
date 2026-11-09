# Phase 1.1 — NCERT Micro Scale Chemistry Laboratory manual review

**Audit date:** 2026-11-09  
**Repository:** https://github.com/snchat78-svg/LabVerse  
**Subphase:** Phase 1.1 — source evidence / apparatus / science and safety traceability  
**State:** MANUAL_RETRIEVED_TEXT_EXTRACTED; NOT_CURRENT_PROCUREMENT_SPECIFICATION; NO_LIVE_CHEMISTRY

## 1. Source identity and rights

- NCERT-hosted manual URL: https://n20.ncert.org.in/pdf/school-kit/Manual_01.pdf
- Title: *Manual of Microscale Chemistry Laboratory Kit*, for Classes XI and XII.
- First edition: April 2018.
- ISBN: 978-93-5007-861-7.
- NCERT Publication Catalogue lists the Higher Secondary MSCL manual under publication code 13166.
- Rights statement in the PDF: ALL RIGHTS RESERVED.
- Evidence: NCERT-hosted PDF text was extracted; screenshot/page-image retrieval returned HTTP 502. This review does not claim visual verification. No byte-level SHA-256 was captured for the PDF in this work unit.
- The official current NCERT kit-specification index separately lists MSCL, Biology with microscope, Biology without microscope and Physics specification attachments. The current MSCL specification attachment still returned HTTP 502 in the retrieval pass. This 2018 manual must not be substituted for the current procurement attachment.

## 2. What the manual establishes

The manual gives a useful pedagogical and design reference for microscale chemistry. Its preface describes reduced chemical quantities, reduced liquid volumes and reduced waste/pollution relative to conventional chemistry practicals. The document contents index **34 experiment entries across 11 chapters**. The apparatus section has **51 numbered apparatus entries**. The chemical/reagent section has **124 numbered labels**.

These counts refer to the 2018 manual's table/list, not to a current vendor SKU list, bill of materials, kit delivery quantity or RBSE-complete reagent manifest.

## 3. LabVerse catalogues created

- `data/catalogues/ncert_mscl_manual_experiment_index.csv` — 34 paraphrased experiment/topic entries with printed page ranges; no procedures or concentrations.
- `data/catalogues/ncert_mscl_manual_apparatus_index.csv` — 51 short apparatus records with the source specification summary and quantity text; manual-only provenance.
- `data/catalogues/ncert_mscl_manual_reagent_index.csv` — 124 preserved numbered reagent/material labels; original sequence and duplicate entries preserved.
- `data/catalogues/ncert_mscl_manual_to_rbse_chemistry_crosswalk.csv` — XI/XII task-to-manual topic crosswalk with explicit direct/partial/no-match distinctions.

All catalogues are LabVerse-authored indexes/paraphrases. NCERT illustrations, layouts, figures and procedural text are not copied. Manual printed page numbers are retained; they are not PDF page numbers.

## 4. Reagent safety gate — mandatory

The 124 labels are **source reference labels only**. The manual list does not establish lot identity, purity, concentration, container quantity, SDS revision, supplier, compatibility, exposure limits, disposal route or permission for school/student handling.

Therefore every entry is marked:
- `BLOCKED_NO_LIVE_USE; SIMULATION_REFERENCE_ONLY`
- `PENDING_SDS_IDENTITY_CONCENTRATION_AND_EXPOSURE_REVIEW`
- `NOT_APPROVED`

No concentration, preparation method, mixing steps, dose or handling procedure was added to the catalogue. The source includes substances requiring particularly stringent specialist review, including arsenic oxide, benzene, carbon disulphide, chloroform/carbon tetrachloride, bromine water, hydrogen sulphide, lead acetate, sodium metal, uranyl zinc acetate and concentrated mineral acids. These names are recorded to identify a safety gate, not to recommend procurement or use. The manual also lists a mercury thermometer; LabVerse will not create a live mercury-handling asset. All chemistry actions remain virtual/reference-only until each experiment has SDS-backed review, waste controls and written chemistry/safety expert approval.

## 5. RBSE crosswalk — what is and is not matched

The manual's experiment index gives useful topic-level matches:
- XI: crystallisation; melting/boiling point topics; volumetric methods; standard acid/base solution topics; qualitative cation/anion analysis; extra-element screening; common-ion/equilibrium topics.
- XII: permanganate redox; qualitative analysis; organic functional groups; selected inorganic/organic preparations; biomolecule tests; thiosulphate/acid and clock-reaction kinetics; thermochemistry; Zn/Cu electrochemistry.

Partial/no-match distinctions are preserved. Examples:
- Glassworking PRA-02: no direct indexed experiment.
- Fruit-juice pH and projects on drinking-water/mineral content, evaporation, fibre tensile strength and tea acidity: no direct manual experiment established.
- Soap foaming PRJ-04 is not equivalent to emulsion stabilisation EXP-8.3.
- RBSE p-nitroacetanilide/aniline-yellow preparation set is not automatically equivalent to the full MSCL preparation chapter; the azo-dye product identity must be reviewed.
- RBSE THERMO-01 copper-sulphate option is not the same as the manual's potassium-nitrate indexed experiment.
- RBSE THERMO-03 chloroform-acetone interaction is not an indexed MSCL manual experiment; mere presence of chloroform in a reagent list is not method evidence.

The crosswalk is **topic-level evidence only**. It does not validate concentrations, exact samples, methods, equilibrium constants, quantitative results, or current supplied kit completeness.

## 6. Historical NCERT procurement-policy context (not current)

A separate NCERT notification dated 11 February 2020 listed a Senior Secondary Chemistry Lab Kit under Annexure 7 and described technical specifications/quality checks as separate annexures. It also described a licence-fee mechanism for State procurement using NCERT technical specifications. Its contract extension ended 3 June 2020 (or earlier if a new tender was finalised). This is historical evidence only; it does not establish the current kit price, approved supplier, specification, or present procurement status. The current procurement attachment must still be retrieved and authenticated.

## 7. Validation and limits

- Experiment index rows: 34.
- Apparatus index rows: 51.
- Reagent index rows: 124.
- Internal experiment-text/appendix references not represented unambiguously as standalone numbered labels: 2 flagged entries (potassium permanganate; potassium iodide / “Iodine solution”).
- Reagent labels explicitly found in manual body/appendix but not represented as standalone rows in the numbered register: 2 (potassium permanganate; potassium iodide/ambiguous “Iodine solution” entry).
- Chemistry crosswalk rows: 32.
- Unique source reagent numbers: 124.
- Duplicate source label preserved: Potassium iodate (source numbers 80 and 87).
- Reagent rows with live-use blocked: 124/124.
- Supplementary internal reagent list-completeness records: 2, both live-use blocked.
- Supplementary internal reagent-list completeness flags: 2 entries, both blocked from live use.
- Reagent rows with SDS review pending: 124/124.
- Current procurement spec authenticated: NO.
- PDF page screenshot reviewed: NO (HTTP 502).
- SHA-256 of source PDF captured: NO.
- Scientific model or app code implemented: NO.
- Experiments executed: NO.

Read-back checks performed separately after committing the CSVs. These check file structure and counts, not scientific correctness or safety clearance.

## 8. Next actions

1. Obtain the actual NCERT current MSCL specification attachment through an openly accessible primary route, then hash it and compare item-by-item against this manual and the earlier uploaded `MSCL_copy.pdf`.
2. Resolve 124 manual reagent labels into RBSE task reagent matrices; do not infer quantities or formulations from the label list.
3. Obtain current SDS/source records for every proposed reagent and make a separate chemical-by-chemical restriction decision. Replace hazardous manual equipment (notably mercury thermometer) with verified safer alternatives or simulation-only representations.
4. Retrieve the exact current Biology manual and specification sources; do not mark Biology manual complete yet.
5. Have the Chemistry crosswalk reviewed by an independent subject expert before any model or learner-facing protocol is authored.



## 10. Internal list-completeness check: experiment-body/appendix reagent references

A separate check compared the 124 numbered reagent/material labels with the experiment text and appendix. Two important completeness flags were found:

1. **Potassium permanganate** is named in the manual's volumetric experiment descriptions (experiments 2.5 and 2.6), but there is no exact Potassium permanganate label in the 124-row numbered reagent index. The numbered index does contain Potassium iodate; it is not equivalent.
2. **Potassium iodide (KI)** is named in experiment text and appendix. The 124-row numbered index has a label “Iodine solution” but no standalone “Potassium iodide” line; this is an ambiguous representation and does not define the reagent/solution formulation, quantity or concentration.

These are not claims that the manual has no use/reference to those substances—the opposite is documented. The finding means the 124 numbered list cannot be treated as an exhaustive reagent inventory even for the manual's own experiment text. The supplementary gap ledger is `data/catalogues/ncert_mscl_manual_internal_reagent_omissions.csv`.

The finding is still subject to line-by-line verification against the source PDF; the text extraction was readable but the screenshot call returned HTTP 502. No concentrations, preparation instructions or mixing steps were copied. Both entries remain blocked from real-world learner use pending the current specification, exact identity/formulation, SDS and expert review.

**Decision:** MSCL manual source-discovery/review subtask is now DONE (text-extracted and indexed). MSCL current procurement/BOM, safety and expert-validation gates remain OPEN. Phase 1 / Phase 1.1 remain IN PROGRESS; Phase 2 remains BLOCKED.


## 9. Comparison against the separately uploaded MSCL specification candidate

The new comparison register is `data/catalogues/mscl_manual_to_2025_upload_item_reconciliation.csv` and its interpretation report is `docs/PHASE_1_1_MSCL_MANUAL_UPLOAD_ITEM_RECONCILIATION.md`.

It pairs all 51 apparatus rows from the 2018 manual against the 54 numbered kit-item rows catalogued from the 2025 user-uploaded `MSCL_copy.pdf`. The manual's two graduated-beaker entries (50 mL and 10 mL) are combined in uploaded item row 003; manual glass pipette item 042 appears as uploaded row 054. Four uploaded-copy items have no direct predecessor in the 2018 manual: pocket balance, glazed tile, gas generator and tongs. The uploaded copy's row 055 is document-development credit, not a kit item.

The comparison flags material differences (borosilicate vs soda glass boiling tube; polypropylene/LDPE vs LDPE pipette; PVC vs HDPE vial), dimension/range differences, quantity differences (including micro burettes 8 vs 1 and micro measuring cylinders 4 vs 2), and safety differences (asbestos centre only stated in the uploaded copy's wire-gauze entry). These are **differences between a historical manual and an unauthenticated user upload**, not proof of changes in NCERT's current official specification.

Read-back checks: 10/10 PASS (55 comparison rows; 51/51 manual entries mapped once; 4 uploaded-only rows correctly identified; all references resolve to upload catalogue rows; provenance remains upload-only; mercury and asbestos restrictions preserved). No current procurement equivalence is claimed.


## 10. Internal list-completeness cross-check

The 124 numbered reagent/material labels were checked against experiment-body and appendix text. Two notable internal completeness gaps were identified:

1. **Potassium permanganate** is named in manual experiments 2.5 and 2.6, but has no exact standalone entry in the numbered reagent list. Potassium iodate is a different substance and is not a match.
2. **Potassium iodide (KI)** is separately named in experiment/appendix text, while the numbered list contains an ambiguous “Iodine solution” line rather than a standalone potassium iodide entry with identity/formulation/quantity.

This means the numbered 124-row register is not an exhaustive reagent inventory relative to the manual's own text. These are recorded in `data/catalogues/ncert_mscl_manual_internal_reagent_omissions.csv`. No concentration, recipe, mixing instruction or handling procedure is copied. Both entries remain blocked from live use pending current procurement proof, identity-specific SDS and expert approval.

The source text was extracted from an NCERT-hosted PDF. The screenshot/page-image retrieval failed HTTP 502; no visual verification or byte SHA-256 is claimed.
