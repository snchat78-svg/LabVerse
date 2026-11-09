# Phase 1.1 — Public GeM attachment filename recurrence audit

**Date:** 2026-11-09  
**Repository:** https://github.com/snchat78-svg/LabVerse  
**Status:** Discovery-only; no attachment payload authenticated

## Objective

Test whether the three newly discovered NCERT kit attachment filenames are unique to bid `GEM/2026/B/8248336` or recur in other public GeM tender records. This is a provenance/retrieval audit, not a verification of the PDF contents.

## Result

The same target filenames recur in separate third-party tender-index records:

- Physics specification filename: **9/10** records.
- MSCL specification filename: **10/10** records.
- Biology-without-microscope filename: **8/10** records.

The records are catalogued in `data/catalogues/gem_kit_specification_mirror_recurrence.csv`. All ten entries are third-party listings, not official GeM source payloads.

The current bid `GEM/2026/B/8248336` listing shows the three kit PDFs and `1793944092.xlsx`. An earlier TenderKart tender page displays approximate file sizes of 11.63 MB (Physics), 18.89 MB (MSCL) and 17.60 MB (Biology without microscope). These values are unverified page metadata, not downloaded byte lengths.

## Interpretation boundary

Repeated filename is evidence of repeated listing metadata only. It does not prove:
- identical PDF bytes or hashes across tenders;
- NCERT authorship, revision or current validity of the mirrored copy;
- that one filename corresponds to the current official specification-index target;
- that the item counts are correct, complete or directly comparable;
- that item quantities, material, tolerances, reagents or calibration requirements are settled.

No attachment file, BOQ or official GeM bid payload was retrieved in this work unit. The official GeM domestic bid page/document routes were not accessible through the current retrieval channel. The official global tender listing page was reachable, but it is a different Global Tender Enquiry interface and did not expose this domestic bid.

No login, seller credentials, session-cookie extraction, access-control bypass or paid API was used.

## Cross-source recurrence ledger

| GeM bid | Public index | Physics | MSCL | Biology without microscope | Notes |
|---|---|---:|---:|---:|---|
| GEM/2026/B/7498690 | TenderKart | Listed | Listed | Listed | Displayed sizes recorded above |
| GEM/2026/B/7566108 | TenderKart | Listed | Listed | Listed | Third-party metadata |
| GEM/2026/B/7826126 | TenderKart | Listed | Listed | Listed | Third-party metadata |
| GEM/2026/B/7865846 | TenderShark | Listed | Listed | Listed | Third-party metadata |
| GEM/2026/B/7922625 | TenderKart | Listed | Listed | Listed | Third-party metadata |
| GEM/2026/B/8063720 | TenderDetail | Listed | Listed | Listed | Third-party metadata |
| GEM/2026/B/8074499 | TenderDetail | Listed | Listed | — | Physics/MSCL only |
| GEM/2026/B/8080870 | TenderDetail | — | Listed | — | MSCL only |
| GEM/2026/B/8082634 | TenderShark | Listed | Listed | Listed | Third-party metadata |
| GEM/2026/B/8248336 | TenderDetail | Listed | Listed | Listed | BOQ filename also listed |

## Read-back and validation

- 10 unique GeM bid references: checked.
- Physics attachment listing count: 9.
- MSCL attachment listing count: 10.
- Biology-without-microscope listing count: 8.
- Current-bid BOQ filename captured: yes.
- Each source URL non-empty: yes.
- Each row status remains `LISTING_ONLY_NOT_AUTHENTICATED`: yes.
- No file-byte or SHA-256 claim made: yes.

**Documentary checks: 8/8 PASS.** These checks validate only this ledger's structure and arithmetic. They are not PDF-content, procurement, science or software tests.

## Decision / next action

This audit increases confidence that the filenames are persistent across several procurement records and offers additional routes to request the same attachments, but it does not authenticate any attachment. Obtain actual bytes through an openly accessible primary source or a user-provided file, then record source URL, retrieval date, SHA-256, PDF metadata, pages and item-level differences against NCERT's official specification index and the existing uploaded registers.

Phase 1 remains IN PROGRESS; Phase 2 remains BLOCKED.
