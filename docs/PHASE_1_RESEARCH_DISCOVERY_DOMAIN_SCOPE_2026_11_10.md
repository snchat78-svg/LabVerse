# Phase 1 research capability map — reproducible discovery and nuclear/element research

**Date:** 2026-11-10  
**Phase:** Phase 1 / Phase 1.1 — IN PROGRESS  
**Work type:** Research capability map and scientific-source review  
**Implementation status:** DESIGN_ONLY — no scientific engine, nuclear solver, 3D asset or discovery validator is implemented by this document.

## 1. Product outcome

LabVerse is intended to support three connected but distinct modes:

1. **Learning:** explain concepts and provide curriculum-aligned practicals.
2. **Virtual experiment and analysis:** manipulate an instrument/apparatus scene, run a supported deterministic model, inspect readings and analyse the result.
3. **Research:** frame questions, review prior work, define competing hypotheses, plan a safe method, import/record data, analyse uncertainty, preserve reproducibility and prepare an evidence-linked report.

A model result is not a physical observation. A new hypothesis is not a discovery. A promising pattern is not proof of causation or novelty.

## 2. A critical distinction: compound, material and element

A chemical reaction can produce a new compound, material, phase or molecular structure. It does not ordinarily change an atom's proton count. The element identity is determined by its atomic number (Z), the number of protons in its nucleus.

Creating a different element requires a **nuclear transformation**, not simply mixing chemicals or combining pieces of ordinary glassware. Superheavy elements have been produced in specialist facilities by accelerating ions into a target; a small fraction of collisions may fuse nuclei. Products must be separated and identified, often using correlated radioactive-decay signatures. The US Department of Energy and GSI describe these processes and the associated instability/decay evidence. [1][2]

Therefore, LabVerse must never label a chemical recipe, molecular simulation, generated suggestion or ordinary virtual reaction as the synthesis of a new element.

## 3. Proposed capability: Nuclear Matter Explorer

**Status: design proposal only.** This is a later Physics/Chemistry research extension, not part of the first school practical release.

### 3.1 Learning and reference mode

- Browse elements, isotopes/nuclides, nuclear properties and known decay information from versioned, cited reference datasets.
- Distinguish an element (Z) from an isotope/nuclide (Z, N, A) and from an excited nuclear isomer.
- Display the source, retrieval date, uncertainty, missing-value state and applicable dataset version for every property.
- Use a 2D/3D nucleus/decay visualisation only as an explanatory representation, with the model's simplifications stated.

### 3.2 Nuclear bookkeeping mode

- Validate charge/proton-number and nucleon-number balance for a declared reaction channel.
- Track the identities of projectile, target, compound nucleus, emitted particles and residual nuclide where sourced and applicable.
- Calculate a reaction Q-value only when the required mass inputs, conventions, units and source versions are present.
- Reject unbalanced or unsupported channels instead of silently repairing them.
- Mark an output as an educational calculation, data lookup or model prediction; never as a detected atom.

Conservation checks and Q-value bookkeeping do **not** predict a usable synthesis route, production cross-section, yield, half-life or discovery. Those require specialised nuclear data and validated models outside a simple classroom calculator.

### 3.3 Research-data mode

- Import permitted experimental/research datasets with checksum, source, licence, timestamp, units, detector/instrument metadata and immutable raw-data retention.
- Preserve detector events and timing/energy uncertainty separately from interpreted decay chains.
- Allow a researcher to test candidate correlations against background/noise models and document alternative explanations.
- Compare results with peer-reviewed literature and independent datasets; retain null and contradictory observations.
- Require expert review before a data-derived statement is promoted beyond a candidate interpretation.

The product can help analyse and document research data. It cannot replace an accelerator, target material, separator, detector, radiation-safety system or qualified nuclear-research team.

## 4. Proposed typed records for a future domain pack

| Record | Minimum scientific identity and provenance |
|---|---|
| ChemicalElement | atomic number Z, canonical symbol/name, recognition state, IUPAC source/version |
| Nuclide | Z, neutron number N, mass number A, isomer state where applicable, mass/half-life/decay data with source and uncertainty |
| NuclearReaction | reactant/product nuclide IDs, emitted particles, balanced charge and nucleon counts, Q-value inputs, channel and model version |
| DecayEvent | parent/daughter nuclide IDs, decay mode, measured or reference energy/time, uncertainty and provenance |
| DetectorEvent | raw event ID, detector/run ID, time, signal/energy, calibration, background and quality metadata |
| DecayChainCandidate | event links, correlation method, timing/energy windows, probability assumptions, competing/background explanations and reviewer status |
| DiscoveryClaim | claim scope, prior-art search, raw-data links, analysis version, independent-reproduction status and formal recognition state |

Unknown values must remain null/UNKNOWN; the application must not infer a nuclide, isotope, decay branch or energy simply to complete a diagram.

## 5. Discovery claim lifecycle and permitted labels

Use explicit evidence labels, not a single green “discovered” badge:

- **IDEA** — a question or possible explanation.
- **LITERATURE_CHECKED** — prior work and known counter-evidence were searched; search scope and date are retained.
- **MODEL_PREDICTED** — a versioned model predicts an outcome inside a declared validity range.
- **SIMULATED_ONLY** — a virtual experiment ran; no real-world observation is implied.
- **DATA_IMPORTED** — observations were imported/recorded, with provenance and quality checks.
- **CANDIDATE_FINDING** — a potentially interesting pattern remains open to alternative explanations.
- **REPRODUCED** — a documented repeat produced compatible evidence under stated conditions.
- **INDEPENDENTLY_REVIEWED** — a qualified independent reviewer assessed methods and evidence.
- **PEER_REVIEWED** — a corresponding scholarly review/publication exists and is cited.
- **FORMALLY_RECOGNISED** — a relevant standards/recognition authority has formally accepted the claim.

These are governance states, not automatic rewards. The app must not infer global novelty from a finite literature search. IUPAC explains that it establishes criteria for new-element discovery, assesses claims/priority and coordinates the naming process; the IUPAC/IUPAP Joint Working Party report provides the formal discovery-criteria framework. [3][4]

### 5.1 New-element-specific recognition

For an element claim, the workflow must:
1. identify the proposed atomic number and the nuclide/reaction evidence;
2. capture the original experimental method and raw event/data lineage;
3. evaluate charge/nucleon balance and the relevant decay-chain or other identification evidence;
4. compare the claim against prior claims and relevant independent evidence;
5. retain uncertainty, background/noise treatment, competing explanations and limitations;
6. route the claim to qualified independent nuclear-science review and the applicable IUPAC/IUPAP process;
7. keep temporary systematic designation, discovery-priority assessment and final approved name/symbol as separate fields.

A LabVerse simulation or AI-generated claim can never set FORMALLY_RECOGNISED.

## 6. Parallel research capability map: Chemistry, Physics and Biology

| Domain | Research capabilities to design | Scientific validity gates |
|---|---|---|
| Chemistry | identity and structure lookup; stoichiometry; thermodynamics; equilibrium; kinetics; spectra; reaction-network comparison; material/phase analysis | exact substance/formulation; sourced properties; balanced equations; method/domain range; safety/SDS/compatibility/waste review; expert approval |
| Physics | mechanics; fields/circuits; optics/waves; thermodynamics; metrology; materials; atomic/nuclear concepts; model comparison | units/dimensional checks; boundary/initial conditions; calibration and resolution; uncertainty; numerical method/tolerance; independent test vectors |
| Biology | microscopy/observation; cells/tissues; taxonomy; genetics; molecular biology; physiology; ecology/biodiversity; image/data analysis | specimen/taxon provenance; sampling and controls; replicate/sample metadata; ethical/biosafety review; uncertainty; expert review; no unsupported causal claims |
| Cross-domain | environmental systems; materials science; biophysics; chemical biology; geoscience; computational modelling | explicit domain pack; shared identifiers/units; source licences; reproducible transformations; cross-domain validation |

The first app content pack remains RBSE/NCERT Classes 11–12. The research architecture should expand by separately versioned domain packs; no unsupported domain is silently enabled.

## 7. Architecture and phase mapping

The future flow remains:

**question → evidence/prior-art search → hypothesis + alternatives → protocol and safety gate → virtual model or permitted real dataset → raw observations → validated analysis → uncertainty/model comparison → evidence-linked report → review/reproduction → candidate next test.**

- **Phase 1 / 1.1 (current):** record domain scope, authoritative source candidates, licences, evidence gaps, safety and expert-review needs. This document completes only a research-capability mapping work unit; it does not close Phase 1.
- **Phase 2:** define versioned ChemicalElement, Nuclide, NuclearReaction, DecayEvent, Dataset, EvidenceLink, ModelValidity and discovery-claim contracts only after Phase 1 exits.
- **Phase 5:** create original/licensed scientific visual assets; renderer remains separate from computation.
- **Phase 6:** implement deterministic event/state/replay contracts.
- **Phase 7:** validated chemistry properties/reactions.
- **Phase 8:** physics and, as a later reviewed extension, bounded atomic/nuclear models using evaluated data; no invented cross-sections or extrapolation.
- **Phases 11–16:** research workflow, immutable data, statistics, evidence graph, candidate discovery assistance and reproducibility.
- **Phase 19 and 21:** safety/governance and independent scientific validation are release gates, not optional end-stage decoration.

No future nuclear/element module should supply real-world radioactive-material handling directions, accelerator operating parameters or procurement instructions. Its first scope is explanatory virtual modelling and analysis of permitted, sourced data.

## 8. Acceptance checklist for this design work unit

- [x] Separate chemical products from nuclear element synthesis.
- [x] Define the future virtual nuclear-research capability without claiming physical synthesis.
- [x] Define typed records, evidence states and independent recognition gates.
- [x] Map the proposed extension to existing roadmap phases without reordering them.
- [x] Add official-source references and explicit non-implementation status.
- [ ] Obtain nuclear physicist/chemist review before any future model contract is approved.
- [ ] Validate dataset licences and choose specific evaluated nuclear-data sources before connector implementation.
- [ ] Implement nothing in Phase 2 until Phase 1 master exit criteria are satisfied.

## 9. Nuclear data source candidates for later validation

- **NNDC ENSDF API:** National Nuclear Data Center exposes evaluated nuclide levels, gamma transitions and decay records through JSON/NDJSON endpoints. The service is marked Available but Public Beta; its page reports data generated 2026-08-10. Treat endpoint schemas as provisional, pin release metadata, preserve evaluation references and test specific records. It is not yet connected to LabVerse. https://www.nndc.bnl.gov/ensdf-api/
- **IAEA EXFOR:** experimental nuclear-reaction dataset with more than 20,700 experiments listed by the IAEA. The IAEA page notes that neutron reactions are collected systematically while charged-particle and photon coverage is less extensive. Coverage must be checked for each intended reaction; data quality, units, uncertainty, source paper and terms must be preserved. https://nucleus.iaea.org/Pages/experimental-nuclear-reaction-data.aspx
- **IAEA Evaluated Nuclear Data File resource:** useful entry point to evaluated cross-section libraries and ENDF formats. The catalogue page itself displays an old last-resource-update metadata date (2015), so LabVerse must select and pin the exact underlying library release; the page must not be treated as proof of a current dataset. https://nucleus.iaea.org/Pages/evaluated-nuclear-data-file.aspx

These are discovered source candidates only. No connector, API contract, licence review or independent data validation was performed.

## 10. References reviewed for this design map

1. US Department of Energy, **DOE Explains…Superheavy Elements** — ion-beam/target fusion, instability and decay signatures: https://www.energy.gov/science/doe-explainssuperheavy-elements
2. GSI Helmholtzzentrum für Schwerionenforschung, **Production of new elements — the idea** — fusion, separation and decay-chain detection: https://www.gsi.de/en/researchaccelerators/research_an_overview/new_elements/production
3. IUPAC, **Periodic Table of Elements / discovery, validation and naming responsibilities**: https://iupac.org/what-we-do/periodic-table-of-elements/
4. IUPAC/IUPAP Joint Working Party, **On the discovery of new elements**, final report, *Pure and Applied Chemistry* (2020), DOI: https://doi.org/10.1515/pac-2020-2926

**Source boundary:** these references establish a high-level process and governance direction. They do not provide a complete nuclear-data library, reaction model, experimental protocol or permission to reuse protected imagery/data. Each future data item and model still needs individual provenance, licence and expert review.
