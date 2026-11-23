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
  local exit_code="$1"
  local failed_command="$2"
  trap - ERR
  write_report "BLOCKED / FAILED" "Command failed with exit code $exit_code: `$failed_command`. See the workflow log and tls-chain-diagnostic.txt for the network or PDF-tool diagnostic."
  echo "Source recovery failed; diagnostic report retained at $REPORT_PATH" >&2
  exit "$exit_code"
}
trap 'on_error "$?" "$BASH_COMMAND"' ERR
trap 'rm -f "$PDF_PATH"' EXIT

write_report "RUNNING" "Preparing the official source retrieval and validation."
echo "Downloading official NCERT Biology-with-microscope PDF (resume/retry enabled)."
# The NCERT leaf certificate is issued by Let's Encrypt YE1. The server
# presents the leaf + YE1, but omits Root YE. Fetch the current official
# Let's Encrypt intermediate and Root YE cross-signed by the established
# ISRG Root X2, then verify the chain to the runner's normal system roots.
LE_CA_DIR="$WORK_ROOT/letsencrypt-ca"
mkdir -p "$LE_CA_DIR"
YE1_PEM="$LE_CA_DIR/int-ye1.pem"
ROOT_YE_CROSS_PEM="$LE_CA_DIR/root-ye-by-x2.pem"
NCERT_CA_BUNDLE="$LE_CA_DIR/ncert-ca-bundle.pem"

curl --fail --location --show-error --retry 3 --retry-all-errors --retry-delay 2 \
  --connect-timeout 20 --max-time 120 \
  --output "$YE1_PEM" \
  "https://letsencrypt.org/certs/gen-y/int-ye1.pem"
curl --fail --location --show-error --retry 3 --retry-all-errors --retry-delay 2 \
  --connect-timeout 20 --max-time 120 \
  --output "$ROOT_YE_CROSS_PEM" \
  "https://letsencrypt.org/certs/gen-y/root-ye-by-x2.pem"

YE1_SUBJECT="$(openssl x509 -in "$YE1_PEM" -noout -subject -nameopt RFC2253)"
YE1_ISSUER="$(openssl x509 -in "$YE1_PEM" -noout -issuer -nameopt RFC2253)"
ROOT_YE_SUBJECT="$(openssl x509 -in "$ROOT_YE_CROSS_PEM" -noout -subject -nameopt RFC2253)"
ROOT_YE_ISSUER="$(openssl x509 -in "$ROOT_YE_CROSS_PEM" -noout -issuer -nameopt RFC2253)"
if [[ "$YE1_SUBJECT" != *"CN=YE1"* || "$YE1_ISSUER" != *"CN=Root YE"* ]]; then
  write_report "BLOCKED — UNEXPECTED LET'S ENCRYPT INTERMEDIATE" "The official Let’s Encrypt intermediate file did not have the expected YE1 → Root YE identity."
  exit 1
fi
if [[ "$ROOT_YE_SUBJECT" != *"CN=Root YE"* || "$ROOT_YE_ISSUER" != *"CN=ISRG Root X2"* ]]; then
  write_report "BLOCKED — UNEXPECTED ROOT CROSS-CERTIFICATE" "The downloaded Root YE certificate was not the expected cross-signed Root YE → ISRG Root X2 certificate."
  exit 1
fi

# Preserve the runner's normal trust store and add only this cross-signed
# intermediate root certificate. TLS hostname and chain verification remain on.
cat /etc/ssl/certs/ca-certificates.crt "$ROOT_YE_CROSS_PEM" > "$NCERT_CA_BUNDLE"
openssl verify -CAfile "$NCERT_CA_BUNDLE" -untrusted "$ROOT_YE_CROSS_PEM" "$YE1_PEM"

# Record the presented chains for both official hostnames. This is diagnostic
# only: the page PDF is fetched only by curl after normal certificate checks.
TLS_DIAGNOSTIC="$ARTIFACT_ROOT/tls-chain-diagnostic.txt"
for TLS_HOST in ncert.nic.in www.ncert.nic.in; do
  TLS_OUTPUT="$WORK_ROOT/tls-$TLS_HOST.txt"
  CERT_DIR="$WORK_ROOT/certs-$TLS_HOST"
  mkdir -p "$CERT_DIR"
  timeout 25 openssl s_client -connect "$TLS_HOST:443" -servername "$TLS_HOST" -showcerts \
    </dev/null > "$TLS_OUTPUT" 2>&1 || true
  awk -v cert_dir="$CERT_DIR" '
    /-----BEGIN CERTIFICATE-----/ { count++; cert_file=sprintf("%s/cert-%02d.pem", cert_dir, count); in_cert=1 }
    in_cert { print > cert_file }
    /-----END CERTIFICATE-----/ { close(cert_file); in_cert=0 }
    END { print count+0 }
  ' "$TLS_OUTPUT" > "$WORK_ROOT/cert-count-$TLS_HOST.txt"
  {
    printf '## %s\n' "$TLS_HOST"
    printf 'Certificates presented: %s\n' "$(cat "$WORK_ROOT/cert-count-$TLS_HOST.txt")"
    if compgen -G "$CERT_DIR/*.pem" > /dev/null; then
      for CERT in "$CERT_DIR"/*.pem; do
        openssl x509 -in "$CERT" -noout -subject -issuer -dates -fingerprint -sha256
      done
    else
      grep -E 'verify error|Verify return code|connect:|Connection refused|Name or service not known' "$TLS_OUTPUT" || true
    fi
    printf '\n'
  } >> "$TLS_DIAGNOSTIC"
done

# Ensure the intermediate actually presented by NCERT matches the official
# Let's Encrypt YE1 certificate before attempting the large source transfer.
SERVER_YE1_PEM=""
for CERT in "$WORK_ROOT"/certs-ncert.nic.in/*.pem; do
  CERT_SUBJECT="$(openssl x509 -in "$CERT" -noout -subject -nameopt RFC2253)"
  if [[ "$CERT_SUBJECT" == *"CN=YE1"* && "$CERT_SUBJECT" == *"O=Let's Encrypt"* ]]; then
    SERVER_YE1_PEM="$CERT"
    break
  fi
done
if [[ -z "$SERVER_YE1_PEM" ]]; then
  write_report "BLOCKED — NCERT YE1 INTERMEDIATE NOT PRESENTED" "The official hostname did not present the expected Let's Encrypt YE1 intermediate. Inspect tls-chain-diagnostic.txt; no download was attempted."
  exit 1
fi
OFFICIAL_YE1_SHA256="$(openssl x509 -in "$YE1_PEM" -outform DER | sha256sum | awk '{print $1}')"
SERVER_YE1_SHA256="$(openssl x509 -in "$SERVER_YE1_PEM" -outform DER | sha256sum | awk '{print $1}')"
if [[ "$OFFICIAL_YE1_SHA256" != "$SERVER_YE1_SHA256" ]]; then
  write_report "BLOCKED — SERVER INTERMEDIATE DOES NOT MATCH OFFICIAL YE1" "The YE1 intermediate shown by NCERT did not match the current official Let's Encrypt YE1 certificate. No NCERT source download was attempted."
  exit 1
fi
printf 'Verified Let\x27s Encrypt YE1 SHA-256: %s\\n' "$SERVER_YE1_SHA256" >> "$TLS_DIAGNOSTIC"

curl --fail --location --show-error \
  --retry 5 --retry-all-errors --retry-delay 4 \
  --connect-timeout 30 --max-time 1200 \
  --cacert "$NCERT_CA_BUNDLE" \
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
