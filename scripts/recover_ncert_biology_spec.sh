#!/usr/bin/env bash
set -Eeuo pipefail

# Fetch the official NCERT Biology-with-microscope specification into the
# ephemeral runner only. Never commit or publish the source PDF itself.
SOURCE_URL="https://ncert.nic.in/division/dek/pdf/SSBK_with_Microscope.pdf"
EXPECTED_BYTES="59585913"
WORK_ROOT="${RUNNER_TEMP:-${TMPDIR:-/tmp}}/labverse-biology-source-work"
ARTIFACT_ROOT="${RUNNER_TEMP:-${TMPDIR:-/tmp}}/labverse-biology-source-review"
PDF_PATH="$WORK_ROOT/SSBK_with_Microscope.pdf"
REPORT_PATH="$ARTIFACT_ROOT/recovery-report.md"

mkdir -p "$WORK_ROOT" "$ARTIFACT_ROOT"

write_report() {
  local status="$1"
  local detail="$2"
  {
    printf '# LabVerse — NCERT Biology-with-microscope source recovery\n\n'
    printf -- '- **Status:** %s\n' "$status"
    printf -- '- **Source:** %s\n' "$SOURCE_URL"
    printf -- '- **Expected response bytes (previous official-index retrieval):** %s\n' "$EXPECTED_BYTES"
    printf -- '- **Observed response bytes:** %s\n' "${OBSERVED_BYTES:-not obtained}"
    printf -- '- **SHA-256:** %s\n' "${SOURCE_SHA256:-not computed}"
    printf -- '- **PDF page count:** %s\n' "${PDF_PAGE_COUNT:-not verified}"
    printf -- '- **Review target:** PDF page 9 (printed page 4), Biology kit item 2 — Kit Box\n'
    printf -- '- **Detail page visually audited:** NO — a human review is still required\n'
    printf -- '- **Catalogue promotion:** NONE — existing OCR-only row remains unchanged\n\n'
    printf '## Runner result\n\n%s\n\n' "$detail"
    printf '## Integrity and safety boundary\n\n'
    printf -- '- The downloaded PDF is temporary runner data and is not uploaded as an artifact or committed.\n'
    printf -- '- Only the page-9 PNG, extracted page text, SHA-256 sidecar and this report may be retained for one day.\n'
    printf -- '- This workflow checks transport integrity and enables visual review; it does not authenticate procurement equivalence, copyright/redistribution rights, scientific validity, safety or expert approval.\n'
    printf -- '- Historical upload hashes remain distinct and are not overwritten by this run.\n'
  } > "$REPORT_PATH"
}

on_error() {
  local exit_code="$?"
  local failed_command="$BASH_COMMAND"
  trap - ERR
  write_report "BLOCKED / FAILED" "Command failed with exit code $exit_code: `$failed_command`. See the workflow log for the network or PDF-tool diagnostic."
  echo "Source recovery failed; diagnostic report retained at $REPORT_PATH" >&2
  exit "$exit_code"
}
trap on_error ERR
trap 'rm -f "$PDF_PATH"' EXIT

write_report "RUNNING" "Preparing the official source retrieval and validation."
echo "Downloading official NCERT Biology-with-microscope PDF (resume/retry enabled)."
curl --fail --location --show-error \
  --retry 5 --retry-all-errors --retry-delay 4 \
  --connect-timeout 30 --max-time 1200 \
  --continue-at - \
  --output "$PDF_PATH" "$SOURCE_URL"

OBSERVED_BYTES="$(wc -c < "$PDF_PATH" | tr -d '[:space:]')"
if [[ "$OBSERVED_BYTES" != "$EXPECTED_BYTES" ]]; then
  write_report "BLOCKED — BYTE COUNT MISMATCH" "The response completed but its byte count differs from the previously observed official-index response. Do not use this copy for page review until the changed source is reconciled."
  echo "Expected $EXPECTED_BYTES bytes; received $OBSERVED_BYTES bytes." >&2
  exit 1
fi

if [[ "$(head -c 5 "$PDF_PATH")" != "%PDF-" ]]; then
  write_report "BLOCKED — NOT A PDF" "The response has the expected byte count but does not begin with the PDF signature. It may be an error/interstitial response; no page data is trusted."
  exit 1
fi

SOURCE_SHA256="$(sha256sum "$PDF_PATH" | awk '{print $1}')"
PDF_INFO="$(pdfinfo "$PDF_PATH")"
PDF_PAGE_COUNT="$(awk -F: '/^Pages:/ {gsub(/[[:space:]]/, "", $2); print $2}' <<< "$PDF_INFO")"
if [[ -z "$PDF_PAGE_COUNT" || "$PDF_PAGE_COUNT" -lt 9 ]]; then
  write_report "BLOCKED — PAGE VALIDATION FAILED" "The PDF page count could not be read or the document has fewer than 9 pages. No page image was produced."
  exit 1
fi

printf '%s  %s\n' "$SOURCE_SHA256" "SSBK_with_Microscope.pdf" > "$ARTIFACT_ROOT/source.sha256"
pdftoppm -f 9 -l 9 -r 180 -png -singlefile "$PDF_PATH" "$ARTIFACT_ROOT/page-009"
pdftotext -f 9 -l 9 -layout "$PDF_PATH" "$ARTIFACT_ROOT/page-009.txt"

write_report "RETRIEVED — READY FOR HUMAN PAGE REVIEW" "The PDF signature, byte count, SHA-256 and page count were checked. PDF page 9 was rendered to page-009.png and its text extracted to page-009.txt. Compare the actual drawing, labels, dimensions and construction notes against catalogue row NCERT-BIO-WM-SPEC-002 before changing any catalogue evidence state."
echo "Recovery complete. SHA-256: $SOURCE_SHA256"
echo "PDF pages: $PDF_PAGE_COUNT"
echo "Review artifact directory: $ARTIFACT_ROOT"
