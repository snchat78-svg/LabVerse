# NCERT official specification attachment size re-check — 2026-11-10

## Evidence scope

Reopened the official NCERT specification index and followed the four Grade XI–XII kit links. The index displays separate link entries for Micro Scale Chemistry, Biology with microscope, Biology without microscope and Physics. The four attachment follow requests returned a size-limit error before the actual PDF bytes were made available to this session.

- Official index: https://ncert.nic.in/division/dek/specification_documents.php?ln=en
- Machine-readable evidence: `data/catalogues/ncert_official_spec_attachment_size_recheck_2026_11_10.csv`
- The web retrieval response exposed the server response content length for each official attachment.
- This is metadata evidence only. No official payload was downloaded, hashed or opened for a page-level inspection in this pass.

## Official target and response sizes

| NCERT Grade XI–XII specification | Official PDF target | Response content length |
|---|---|---:|
| Micro Scale Chemistry Laboratory Kit | `MSCL.pdf` | 19,808,858 bytes |
| Biology Kit with Microscope | `SSBK_with_Microscope.pdf` | 59,585,913 bytes |
| Biology Kit without Microscope | `SSBK_without_Microscope.pdf` | 63,918,957 bytes |
| Physics Laboratory Kit | `SSPhyLaboratoryKit.pdf` | 42,539,010 bytes |

The NCERT index link titles are distinct; with-microscope and without-microscope Biology remain separate source variants and must not be merged. See the four separate links on the official index.

## Comparison with already-recorded user uploads

### MSCL

- Earlier registered `MSCL_copy.pdf`: 19,798,501 bytes, SHA-256 `db08a381ed1d349dc6ee292c05610d74683cd65b1308223e8472cb4ca2fe5b9d`.
- Later receipt `MSCL (1).pdf`: 19,808,858 bytes, SHA-256 `b991bd409074478c6ff0557a481b251de4a65727f50872e0c47e14d2df472b2e`.
- The later receipt's byte count matches the official response content length exactly. This is **SIZE_MATCH_ONLY**, not proof of byte identity. A SHA-256 match, trusted official file metadata/signature or an actual byte comparison is still required.
- The later receipt's original bytes are not currently surfaced in the Library listing; the visual audit of all 53 physical items is tied only to the earlier, accessible `MSCL_copy.pdf` SHA and must not be transferred to the later variant without inspection.

### Biology with microscope

- Prior registered upload: 59,620,970 bytes, SHA-256 `c88112e9013d37028091214dc5473eb81af6bf6cc54e71b266aee779826517d2`.
- Current recorded upload variant: 59,620,970 bytes, SHA-256 `9df41c69800ae3e8da8cac3fae265b8a6c4a4035e4deec16325c32b225309dcb`.
- Official response content length: 59,585,913 bytes; each upload is 35,057 bytes larger. Neither uploaded copy is byte-authenticated by this size check.

### Biology without microscope and Physics

- The official sizes are now recorded as 63,918,957 and 42,539,010 bytes respectively.
- Previously supplied user materials remain acknowledged, no-repeat records; exact prior upload filename/size/hash is not surfaced by the current Library index. No comparison or hash has been invented.

## Retrieval limitation and source status

The click/follow requests to the four official NCERT attachment links returned HTTP 400 “Content length is too large” from the retrieval channel. A separate direct HEAD/download attempt in the container failed DNS resolution for `ncert.nic.in`. This is a retrieval limitation, not evidence that NCERT's files are invalid or absent.

| Evidence type | Status |
|---|---|
| Official NCERT index listing | CONFIRMED |
| Official target URLs | CONFIRMED from index links |
| Response content-length metadata | OBSERVED |
| Official PDF bytes in current session | NOT_RETRIEVED |
| Official PDF SHA-256 | UNKNOWN |
| User-copy exact-byte authentication | NOT_VERIFIED |
| MSCL later upload size comparison | EXACT_SIZE_MATCH_ONLY |
| Biology with-microscope size comparison | SIZE_MISMATCH |
| Biology without-microscope / Physics upload comparison | UNKNOWN |

Do not promote any user-uploaded file to `PRIMARY_OFFICIAL_CONTENT` solely because its filename, page count or size matches. Preserve all original upload SHA fingerprints and do not request a repeat upload.

## Next action within Phase 1.1

1. Preserve this official-size metadata in the source register and master roadmap.
2. Resume internal recovery of the already-supplied Biology-with-microscope source to continue its pending item-detail queue. Current Library listing/search does not surface the 59,620,970-byte source.
3. Keep MSCL's 53/53 visual audit tied to the earlier `MSCL_copy.pdf` fingerprint. The later matching-size variant remains uninspected and unauthenticated.
4. Continue the existing Phase 1.1 source, rights, procurement, safety and subject-expert closure. Do not start Phase 2 scientific solvers until the master Phase 1 exit criteria pass.

**Phase gate:** Phase 1 / Phase 1.1 IN PROGRESS; Phase 2 scientific models remain BLOCKED.
