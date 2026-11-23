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

# NCERT redirects direct file requests to a session landing page. Bootstrap
# the official specification index first, preserving only its ephemeral
# session cookie for the subsequent request. Never upload the cookie jar.
INDEX_URL="https://ncert.nic.in/division/dek/specification_documents.php?ln=en"
INDEX_HTML="$WORK_ROOT/official-specification-index.html"
COOKIE_JAR="$WORK_ROOT/ncert-session.cookies"
curl --fail --location --show-error \
  --retry 3 --retry-all-errors --retry-delay 2 \
  --connect-timeout 30 --max-time 180 \
  --cacert "$NCERT_CA_BUNDLE" \
  --user-agent "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" \
  --header "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8" \
  --cookie-jar "$COOKIE_JAR" \
  --output "$INDEX_HTML" \
  --write-out 'http_code=%{http_code}\\ncontent_type=%{content_type}\\nsize_download=%{size_download}\\nurl_effective=%{url_effective}\\n' \
  "$INDEX_URL" > "$ARTIFACT_ROOT/index-bootstrap.txt"

python3 - "$INDEX_HTML" "$ARTIFACT_ROOT/index-anchor-diagnostic.txt" <<'PY'
import sys
from html.parser import HTMLParser
from pathlib import Path

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.anchors = []
        self.current = None
        self.title = []
        self.in_title = False
        self.visible = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag.lower() == "title":
            self.in_title = True
        if tag.lower() == "a":
            self.current = {"href": attrs.get("href", ""), "text": ""}
    def handle_endtag(self, tag):
        if tag.lower() == "a" and self.current is not None:
            self.anchors.append(self.current)
            self.current = None
        if tag.lower() == "title":
            self.in_title = False
    def handle_data(self, data):
        text = " ".join(data.split())
        if text:
            self.visible.append(text)
            if self.in_title:
                self.title.append(text)
            if self.current is not None:
                self.current["text"] += (" " if self.current["text"] else "") + text

source = Path(sys.argv[1]).read_text(errors="replace")
parser = PageParser()
parser.feed(source)
target = [a for a in parser.anchors if any(k in (a["text"] + " " + a["href"]).lower()
          for k in ("biology", "microscope", "ssbk", "specification", ".pdf"))]
with open(sys.argv[2], "w") as out:
    out.write("title=" + " ".join(parser.title) + "\\n")
    out.write("anchor_count=" + str(len(parser.anchors)) + "\\n")
    out.write("target_anchor_count=" + str(len(target)) + "\\n")
    for a in (target if target else parser.anchors[:40]):
        out.write("ANCHOR text=" + a["text"][:250] + " | href=" + a["href"][:500] + "\\n")
    out.write("VISIBLE_TEXT_PREFIX=" + " ".join(parser.visible)[:2500] + "\\n")
PY

if ! grep -Fq "SSBK_with_Microscope.pdf" "$INDEX_HTML"; then
  {
    printf 'index_bytes=%s\\n' "$(wc -c < "$INDEX_HTML" | tr -d '[:space:]')"
    printf 'index_sha256=%s\\n' "$(sha256sum "$INDEX_HTML" | awk '{print $1}')"
    printf 'index_file_type=%s\\n' "$(file -b "$INDEX_HTML")"
    printf 'index_title='
    grep -oiE '<title[^>]*>[^<]*' "$INDEX_HTML" | head -n 1 | sed 's/<[^>]*>//g' || true
    printf '\\n-- Relevant HTML context (first 100 lines) --\\n'
    grep -inE 'SSBK|biology|microscope|specification|grade 11|grade 12|\\.pdf|captcha|access denied|verify' "$INDEX_HTML" | head -n 100 || true
  } > "$ARTIFACT_ROOT/index-source-link-diagnostic.txt"
  write_report "BLOCKED — OFFICIAL INDEX DID NOT EXPOSE SOURCE LINK" "The TLS-verified NCERT specification index returned HTTP 200, but its response did not contain the expected Biology-with-microscope PDF filename. A size/hash/type/title and relevant-text diagnostic was retained; no direct file request was attempted."
  exit 1
fi

curl --fail --location --show-error \
  --retry 5 --retry-all-errors --retry-delay 4 \
  --connect-timeout 30 --max-time 1200 \
  --cacert "$NCERT_CA_BUNDLE" \
  --user-agent "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" \
  --header "Accept: application/pdf,application/octet-stream;q=0.9,*/*;q=0.8" \
  --cookie "$COOKIE_JAR" --cookie-jar "$COOKIE_JAR" \
  --referer "$INDEX_URL" \
  --dump-header "$ARTIFACT_ROOT/http-response-headers.txt" \
  --continue-at - \
  --output "$PDF_PATH" \
  --write-out 'http_code=%{http_code}\\ncontent_type=%{content_type}\\nsize_download=%{size_download}\\nnum_redirects=%{num_redirects}\\nurl_effective=%{url_effective}\\nremote_ip=%{remote_ip}\\n' \
  "$SOURCE_URL" > "$ARTIFACT_ROOT/curl-metadata.txt"

OBSERVED_BYTES="$(wc -c < "$PDF_PATH" | tr -d '[:space:]')"
FILE_SIGNATURE="$(head -c 16 "$PDF_PATH" | od -An -tx1 | tr -s ' ' | sed 's/^ //;s/ $//')"
FILE_DESCRIPTION="$(file -b "$PDF_PATH")"
SOURCE_SHA256="$(sha256sum "$PDF_PATH" | awk '{print $1}')"
{
  printf 'observed_bytes=%s\n' "$OBSERVED_BYTES"
  printf 'expected_bytes=%s\n' "$EXPECTED_BYTES"
  printf 'signature_hex=%s\n' "$FILE_SIGNATURE"
  printf 'file_description=%s\n' "$FILE_DESCRIPTION"
  printf 'sha256=%s\n' "$SOURCE_SHA256"
} > "$ARTIFACT_ROOT/source-inspection.txt"
printf '%s  %s\n' "$SOURCE_SHA256" "SSBK_with_Microscope.pdf" > "$ARTIFACT_ROOT/source.sha256"

if [[ "$(head -c 5 "$PDF_PATH")" != "%PDF-" ]]; then
  write_report "BLOCKED — RESPONSE IS NOT A PDF" "The TLS-verified HTTP response did not begin with the PDF signature. The response headers, curl metadata, signature and file description were retained for diagnosis; no page data is trusted."
  exit 1
fi

PDF_INFO="$(pdfinfo "$PDF_PATH" 2>&1 || true)"
printf '%s\n' "$PDF_INFO" > "$ARTIFACT_ROOT/pdfinfo.txt"
PDF_PAGE_COUNT="$(awk -F: '/^Pages:/ {gsub(/[[:space:]]/, "", $2); print $2}' <<< "$PDF_INFO")"
if [[ -z "$PDF_PAGE_COUNT" || "$PDF_PAGE_COUNT" -lt 9 ]]; then
  write_report "BLOCKED — PAGE VALIDATION FAILED" "A PDF-signature response was returned, but pdfinfo could not establish at least 9 readable pages. The response metadata and source SHA-256 are retained; no page image was produced."
  exit 1
fi

SIZE_STATUS="MATCH"
if [[ "$OBSERVED_BYTES" != "$EXPECTED_BYTES" ]]; then
  SIZE_STATUS="MISMATCH — CANDIDATE ONLY"
fi

pdftoppm -f 9 -l 9 -r 180 -png -singlefile "$PDF_PATH" "$ARTIFACT_ROOT/page-009"
pdftotext -f 9 -l 9 -layout "$PDF_PATH" "$ARTIFACT_ROOT/page-009.txt"

if [[ "$SIZE_STATUS" == "MATCH" ]]; then
  write_report "RETRIEVED — READY FOR HUMAN PAGE REVIEW" "The PDF signature, expected byte count, SHA-256 and page count were checked. PDF page 9 was rendered to page-009.png and its text extracted to page-009.txt. Compare the actual drawing, labels, dimensions and construction notes against catalogue row NCERT-BIO-WM-SPEC-002 before changing any catalogue evidence state."
else
  write_report "RETRIEVED — CANDIDATE ONLY; BYTE COUNT MISMATCH" "The TLS-verified official-host response is a readable $PDF_PAGE_COUNT-page PDF and page 9 was rendered, but its $OBSERVED_BYTES bytes differ from the previously observed $EXPECTED_BYTES bytes. The exact source SHA-256 is in source.sha256. Treat this as a new candidate source copy; visually inspect page 9 only as provisional evidence, reconcile the version/size discrepancy, and do not merge or overwrite either historical upload hash."
fi
echo "Recovery candidate. SHA-256: $SOURCE_SHA256"
echo "Observed bytes: $OBSERVED_BYTES; expected bytes: $EXPECTED_BYTES; page count: $PDF_PAGE_COUNT"
echo "Review artifact directory: $ARTIFACT_ROOT"
