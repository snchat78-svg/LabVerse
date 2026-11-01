# Phase 1.1 — NCERT Higher Secondary Kit Specification Recovery & Verification

Audit date: 2026-11-01  
Parent phase: Phase 1 — Platform scope, source audit and first science catalogue  
Subphase status: IN PROGRESS — Physics manual content inspected; procurement attachments and other primary kit manuals remain open.

## 1. Objective and decision rule

Recover and verify the actual NCERT Grade XI–XII kit specification attachments and manuals, then reconcile their item names, quantities, dimensions, materials, ranges, revision metadata and supplied-vs-school-managed boundaries against the existing RBSE practical register.

A title on an official index is proof that a document is listed, not proof of its contents. A procurement tender that names a kit is not automatically the NCERT master bill of materials. Third-party mirrors and tender portals are discovery routes only until the underlying file is authenticated and compared with the primary source.

## 2. Official NCERT source discovery

### 2.1 Official specification index

NCERT's official specification index lists these Grade XI–XII families:

| Official listing | Variant | Current evidence status |
|---|---|---|
| Micro Scale Chemistry Laboratory Kit | Grades XI–XII | Official listing confirmed; attachment content not inspected |
| Secondary Stage Biology Kit | With microscope | Separate official listing confirmed; attachment content not inspected |
| Secondary Stage Biology Kit | Without microscope | Separate official listing confirmed; attachment content not inspected |
| Secondary Stage Physics Laboratory Kit | Grades XI–XII | Official listing confirmed; attachment content not inspected |
| Secondary Stage Molecular Model Kit | Grades XI–XII | Official listing confirmed; outside the first three subject kit families |

Primary listing: https://ncert.nic.in/division/dek/specification_documents.php?ln=en

The English listing explicitly separates Biology kits with and without microscopes. The product data model must preserve those as different kit variants. Do not assume that a microscope is bundled in both.

### 2.2 Official manual index and catalogue

NCERT's School Kits manual index lists revised English manuals for the Secondary Stage Physics Laboratory Kit, Secondary Stage Biology Laboratory Kit and Micro Scale Chemistry Laboratory Kit for Grades XI and XII:

https://ncert.nic.in/division/dek/kit-manuals.php?ln=en

NCERT's publications catalogue separately identifies the Higher Secondary Biology kit manual as code 13163, Physics kit manual as code 13164 and Micro Scale Chemistry kit manual as code 13166:

https://ncert.nic.in/uploads/publication/other_books_new.pdf

The catalogue confirms publication identity/metadata only. It is not an item-level specification.

## 3. Physics primary-manual inspection

### 3.1 Source identity and rights

Retrieved NCERT-hosted source:

https://ncert.gov.in/division/dek/pdf/Manual_Secondary_Stage_Physics_Laboratory_Kit-11%2612_EN.pdf

The accessible front matter identifies:
- Manual code 13164;
- ISBN 978-93-5292-653-4;
- First edition: October 2018;
- Reprints shown: January 2019, March 2020 and August 2024;
- Copyright holder: NCERT;
- ALL RIGHTS RESERVED notice and reproduction restrictions.

The text layer was searchable and inspected. The screenshot service repeatedly returned HTTP 502 for this PDF, so no visual page audit is claimed. The source's copyright notice means LabVerse must create original meshes, textures, diagrams and explanations or obtain permission; the manual's artwork must not be copied into the app.

### 3.2 Item schedule result

The manual's “List of Secondary Physics Laboratory Kit Items” enumerates item rows 1–106. It describes item names and uses, but does not provide a complete procurement bill of materials with quantity, make/model, material grade, tolerance and acceptance rule for every row. A numbered row may itself describe a composite assembly or a group of sub-items; 106 rows must not be interpreted as 106 separate 3D assets or as proof of final delivered quantities.

Representative item families found in the schedule include measurement tools, stands/clamps, mechanics apparatus, thermal/fluid apparatus, sound apparatus, circuit/electronic components, optical components, electrical instruments, consumables and connectors.

### 3.3 Technical details actually stated in the manual

| Apparatus / assembly | Text-supported detail | What is still missing |
|---|---|---|
| Metre bridge | Two similar halves, each about 55 cm × 7.5 cm, each carrying a half-metre scale that joins to a 1 m scale; metallic joining strip, gap and four terminals | Procurement revision, materials/finish, wire gauge/resistance, tolerances and acceptance checks |
| Potentiometer | Uniform wire AB of length 500 cm on a wooden board, with a 50 cm scale alongside | Wire material/resistance tolerance, board dimensions, calibrated scale accuracy and supplied quantity |
| Resonance tube assembly | Tube 60 cm long and about 5 cm diameter, with centimetre scale; bottomless bottle reservoir; approximately 1 m plastic tube and end stoppers; two stand-and-clamp supports | Tube material/wall thickness, scale tolerance, stopper dimensions and formal acceptance test |
| Optical bench assembly | Four 50 cm scales; four interlocking pins; four joining strips; four sliding bases; four sliding upright holders; two mirror/lens holders; one 12 cm × 12 cm screen; two object/image pencils | Material, cross-section, rail fit tolerance, friction limits and dimensional tolerances |
| Multimeter | Manual describes COM, VΩmA and 10 A DC lead terminals; resistance, DC/AC voltage, DC current and continuity modes | Exact model, ranges, resolution, accuracy class, safety category and calibration certificate |
| Vernier caliper / screw gauge / spherometer | Names and intended measurement roles are listed | Range, least count, zero-error tolerance, material and dimensional specification are not established by the item schedule |

The manual also describes experiment-level setup and operating logic. For example, the metre-bridge experiment requires a taut uniform wire, jockey, resistance box, rheostat, galvanometer, key, battery and screw gauge; its balance equation and resistivity calculation are part of the experiment model, not arbitrary visual effects.

### 3.4 Initial LabVerse traceability candidates

These are candidate stable IDs for the inventory; they are not implemented assets and do not imply procurement verification.

| Candidate ID | Practical connection | 3D interaction and scientific state | Evidence status |
|---|---|---|---|
| PHY-MEAS-VERNIER-CALIPER | Grade XI Physics measurement practical | Constrained movable jaw, main/vernier scales, zero correction, unit-aware reading | Name/use in manual; range and least count not yet verified |
| PHY-MEAS-SCREW-GAUGE | Wire diameter/radius input for Grade XII metre-bridge resistivity work | Spindle/ratchet movement, sleeve/circular scale, zero correction and diameter-to-area calculation | Name/use and experiment dependency present; technical range/least count open |
| PHY-ELEC-METER-BRIDGE | Grade XII experiments on wire resistance and resistance combinations | 0–100 cm bridge wire, jockey position, balance point, bridge ratio and resistance output | Assembly dimensions and principle described; procurement tolerances open |
| PHY-ELEC-POTENTIOMETER | Grade XII cell-emf/internal-resistance practicals | Jockey position along uniform wire, null balance, cell selection and emf ratio | 500 cm wire and board/scale arrangement described; electrical tolerances open |
| PHY-RES-SOUND-RESONANCE-TUBE | Grade XI sound-speed practical | Water-column height, air-column length, tuning-fork frequency and resonance peaks | Main dimensions described; full procurement specification open |
| PHY-OPT-OPTICAL-BENCH | Grade XII lens/mirror/prism practicals | Constrained sliders, lens/mirror holders, screen position, alignment and ray/image model | Assembly component counts and screen size described; fit tolerances open |
| PHY-ELEC-MULTIMETER | Grade XII measurement and electronics activities | Lead sockets, mode selector, range, polarity, continuity and displayed units | Operating controls described; model/accuracy/ranges open |

## 4. Procurement-document cross-check and unresolved count discrepancy

A public GeM bid document dated 15 March 2026 for six Secondary Stage Physics Laboratory Kits states that each kit/set contains “105 items as listed / indicated in the attached list” and that quantities are “as per the attached list”.

Source copy of the bid document:  
https://docs.primetenders.com/documents/tender/2026/03/31/12491799102179779884/GeM-Bidding-9125140.pdf

This is a procurement bid document, not the NCERT master specification itself. It does not expose the attached item schedule in the inspected page. The NCERT-hosted Physics manual enumerates 106 item rows, including Meter bridge as item 106. Therefore, a 105-versus-106 discrepancy exists between two documents/contexts, but it is not yet a proven contradiction: the actual attached list and its revision have not been inspected. Do not delete, merge or renumber an item to force the counts to agree.

A tender mirror also lists candidate additional-document filenames for Physics, Micro Scale Chemistry and Biology without microscope:

- ss_phy_laboratory_kit_2025-08-05-14-27-28_7159927680c0a63ae4624c30ec52c8b8.pdf
- mscl_2025-08-05-14-26-21_3a5a681bb380b96ec69bc9e461f50115.pdf
- ssbk_without_microscope_2025-08-05-14-23-11_a136470235d8a05b047e905400caead5.pdf

Discovery page: https://tenderkart.in/tender/9c2d3976-3ef0-415d-baef-16dbe9826d30

These filenames are attachment locators only. Their bytes, signatures, revision metadata and contents were not retrieved in this audit. No Biology-with-microscope attachment was found in that mirror. These files must not be labelled NCERT-verified until compared with the official listing/GeM source and document metadata.

## 5. Current evidence status by subject

| Subject | Official manual listing | Manual body | Official procurement attachment | Item-level state |
|---|---|---|---|---|
| Physics | Confirmed | NCERT-hosted manual content inspected; 106 item rows | Not inspected | Partial source evidence; specification incomplete |
| Chemistry | Confirmed | Prior Phase 1 audit has a manual source/transcribed item families; primary current attachment comparison remains open | Not inspected | Preliminary; not procurement-verified |
| Biology | Confirmed; code 13163 in catalogue | Official complete kit-manual body not retrieved; secondary 141-page transcription remains discovery-only | With/without microscope attachments not inspected | Preliminary; not primary-verified |

The Class XI Biology learning/practical manual and the Higher Secondary Biology kit manual are different source products. The former must not be treated as proof of the latter's kit bill of materials.

## 6. Safety, rights and data-integrity rules

- NCERT publication access does not grant permission to copy its figures, photographs, tables, pages or manual text.
- Create original 3D geometry, interaction logic, lesson text and diagrams, and store asset provenance/licence.
- No arbitrary “mix any two chemicals” simulator. Chemistry outcomes require reviewed, bounded reaction rules and explicit hazard metadata.
- Sharp tools, heating, preservatives, biological samples and other hazardous procedures remain virtual or use pre-prepared observations; do not turn a source manual into unsupervised real-world instructions.
- Preserve raw source names, item IDs, revision dates and source conflicts. Keep source statement, scientific interpretation and implementation approval as separate fields.
- Exact item quantity/specification is UNKNOWN until the actual attachment or equivalent primary record is inspected.

## 7. Phase 1.1 exit gate

- [x] Reconfirm the official NCERT Grades XI–XII kit-family list and distinct Biology variants.
- [x] Confirm the official manual-index entries and catalogue identities for the three subject kits.
- [x] Retrieve and inspect the NCERT-hosted Physics kit manual text and record edition/copyright metadata.
- [x] Extract a first set of Physics apparatus dimensions/component counts and connect them to practical/interaction candidates.
- [x] Detect and record the 105-versus-106 procurement/manual count discrepancy without silently reconciling it.
- [ ] Retrieve and authenticate the actual official Physics, Micro Scale Chemistry, Biology-with-microscope and Biology-without-microscope specification attachments.
- [ ] Obtain and inspect the official complete Higher Secondary Biology Kit manual.
- [ ] Complete current primary-manual/official-specification item reconciliation for Chemistry and Biology.
- [ ] Resolve each item into source-backed stable IDs, quantities, materials, dimensions, ranges, tolerances and acceptance tests, or mark each field explicitly UNKNOWN.
- [ ] Complete source → RBSE/NCERT practical → kit item → asset → scientific model/rule → test-vector traceability for all six RBSE packs.
- [ ] Complete qualified Physics/Chemistry/Biology expert review and safety/rights sign-off.

No application code, 3D mesh, simulation engine or software test was created or run in this subphase. Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.

## 8. Next execution order

1. Obtain the actual specification attachments through the official NCERT route or an authenticated GeM record; verify file identity, signatures/metadata, revision and attachment names before extracting item rows.
2. Compare the 2025-08-05 candidate Physics/Chemistry/Biology-without-microscope attachments with the manuals; obtain the Biology-with-microscope variant separately.
3. Recover the official Higher Secondary Biology kit manual and compare the secondary transcript row-by-row; keep the transcript as secondary until then.
4. Build a machine-checkable item register with UNKNOWN values preserved, then finish full six-pack practical traceability and independent review.
5. Only after Phase 1 exit criteria pass, begin Phase 2 scientific domain schemas/contracts.

## 9. Direct NCERT attachment links — source-page verification and retrieval results (2026-11-01)

The official English NCERT specification page was opened and its four PDF link targets were followed directly. This establishes that the URLs below are the attachment links published by the official NCERT page; it does not establish the contents of the PDFs.

| NCERT attachment | Direct URL published by NCERT | Retrieval result in this audit | Evidence state |
|---|---|---|---|
| Micro Scale Chemistry Laboratory Kit | https://ncert.nic.in/division/dek/pdf/MSCL.pdf | Original host returned HTTP 502; www.ncert.nic.in route timed out | OFFICIAL_LINK_CONFIRMED / FILE_NOT_INSPECTED |
| Secondary Stage Biology Kit — with microscope | https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf | Original host returned HTTP 502; alternate www route remained inaccessible | OFFICIAL_LINK_CONFIRMED / FILE_NOT_INSPECTED |
| Secondary Stage Biology Kit — without microscope | https://ncert.nic.in/division/dek/pdf/SSBK_without_Microscope.pdf | Original host returned HTTP 502; alternate www route reported 63,918,957 bytes, above the current retrieval route's limit | OFFICIAL_LINK_CONFIRMED / FILE_TOO_LARGE_FOR_CURRENT_RETRIEVAL |
| Secondary Stage Physics Laboratory Kit | https://ncert.nic.in/division/dek/pdf/SSPhyLaboratoryKit.pdf | Original host returned HTTP 502; alternate www route timed out | OFFICIAL_LINK_CONFIRMED / FILE_NOT_INSPECTED |

This closes the task of identifying the exact direct attachment URLs from the NCERT page, but it does not close the actual attachment-inspection gate. Do not infer item counts or specifications from these URLs or filenames. The Physics kit manual is a separate document and was text-inspected in Section 3; that manual is not a substitute for the procurement specification attachment.

Next recovery routes: use a browser session that can download large NCERT payloads, or retrieve the same attachment from an authenticated GeM tender record and compare file metadata (filename, byte size, hash, PDF metadata and revision) against the NCERT listing. A third-party mirror remains discovery-only until byte-level identity is established.
