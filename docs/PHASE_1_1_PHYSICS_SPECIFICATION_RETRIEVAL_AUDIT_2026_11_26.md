# Physics procurement specification source-gate repair — 2026-11-26

## Findings

- The repository has three distinct records that must not be collapsed: NCERT's 2018 Physics manual (code 13164; 106 numbered item rows), the current Grade XI–XII Physics procurement specification target (`SSPhyLaboratoryKit.pdf`), and a GeM discovery record that reports 105 items per kit but whose actual attachment list is not authenticated.
- NCERT's official specification index lists the Grade XI–XII Secondary Stage Physics Laboratory Kit specification. The target is `https://ncert.nic.in/division/dek/pdf/SSPhyLaboratoryKit.pdf`; the prior official-link follow recorded a 42,539,010-byte response length.
- In the current 2026-11-26 retrieval pass, opening the exact NCERT target and the equivalent ncert.gov.in target through the document reader returned inaccessible errors. The container's direct download attempt against the index also failed. No PDF payload, SHA-256, PDF metadata, ETag, revision or procurement item list was received.
- The user's earlier Physics specification submission is acknowledged in the existing source registry, but its exact prior filename/hash is not surfaced in the accessible file index. Do not ask for another upload.

## Repository data repair

- Corrected `SRC-MISSING-PHYSICS-INSTRUMENTS` in `data/catalogues/phase1_source_authentication_procurement_gaps.csv`: the `severity` field was incorrectly populated with an unresolved-attributes paragraph. It is now `BLOCKER_PHASE_1`; the detailed uncertainties remain in `unknown_or_unverified_attributes`.
- Rewrote the required next action to recover the acknowledged old bytes internally or use an accessible official/authenticated procurement attachment, then hash, capture revision and reconcile the full BOM against all 106 manual rows. The text explicitly forbids repeat-upload requests and preserves the 105-vs-106 discrepancy.
- Kept `SRC-NCERT-PHY-MANUAL-13164` and `SRC-GEM-PHYSICS-105-106` separate. The manual is not the procurement BOM, and the GeM listing is not treated as an authenticated attachment.
- Extended the Physics source-data validator to enforce the blocker severity, exact official target, no-repeat-upload instruction, missing payload/hash boundary and separation of manual vs GeM evidence. Added the source-gap CSV to the source-data workflow push and pull-request path filters.

## Verification boundary

- This is an evidence/access and data-integrity repair, not a successful retrieval of the specification PDF.
- No item ID, quantity, dimension, range, tolerance, manufacturer, procurement status, scientific procedure, safety permission or source revision was invented.
- Phase 1.1 remains IN PROGRESS; Phase 2 remains BLOCKED. No 3D or experiment runtime work is authorized by this audit.

## Next exact task

Recover the acknowledged prior Physics procurement specification internally without asking for a repeat upload. If it remains unavailable, continue source-backed adjudication of the 41 RBSE Class XI Physics task-to-item gap records using the already committed NCERT manual and RBSE syllabus evidence, with every proposed relationship remaining UNAPPROVED / NOT_PROMOTED until procurement and expert gates are resolved.