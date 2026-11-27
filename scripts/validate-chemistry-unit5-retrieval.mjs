import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const root = new URL("../", import.meta.url);
async function readCsv(path) {
 const source = await readFile(new URL(path, root), "utf8");
 const rows=[]; let row=[], value="", quoted=false;
 for(let i=0;i<source.length;i++){const ch=source[i];if(quoted){if(ch==='"'&&source[i+1]==='"'){value+='"';i++;}else if(ch==='"')quoted=false;else value+=ch;}else if(ch==='"')quoted=true;else if(ch===","){row.push(value);value="";}else if(ch==="\n"){row.push(value);rows.push(row);row=[];value="";}else if(ch!=="\r")value+=ch;}
 if(quoted)throw new Error(path+": unterminated CSV field");
 if(value.length||row.length){row.push(value);rows.push(row);}
 const headers=rows.shift(); assert.ok(headers?.length,path+": missing headers"); assert.equal(new Set(headers).size,headers.length,path+": duplicate headers");
 return rows.filter(r=>r.some(v=>v.length)).map(r=>Object.fromEntries(headers.map((h,i)=>[h,r[i]??""])));
}
const [audit,endpoint,source,method]=await Promise.all([
 readCsv("data/catalogues/rbse_xi_chemistry_unit5_source_retrieval_audit_2026_11_27.csv"),
 readCsv("data/catalogues/rbse_chemistry_official_unit_endpoint_register_2026_11_12.csv"),
 readCsv("data/catalogues/rbse_2027_chemistry_source_recheck_2026_11_12.csv"),
 readCsv("data/catalogues/rbse_chemistry_method_body_evidence_2026_11_12.csv")
]);
const ids=["RBSE-XI-CHEM-PRA-10","RBSE-XI-CHEM-PRA-11","RBSE-XI-CHEM-PRA-12"];
const pages={"RBSE-XI-CHEM-PRA-10":"p. 54","RBSE-XI-CHEM-PRA-11":"p. 56","RBSE-XI-CHEM-PRA-12":"p. 58"};
const url="https://ncert.nic.in/pdf/publication/sciencelaboratorymanuals/classXI/chemistry/kelm205.pdf";
const fail="OFFICIAL_INDEX_LINK_RECORDED; 2026-11-27 OFFICIAL_UNIT5_PDF_OPEN_TIMED_OUT_OR_INACCESSIBLE_ON_NCERT_HOSTS; BODY_NOT_RETRIEVED";
const body="PRIOR_ALTERNATE_HOST_TEXT_ONLY; HOST_EDITION_AND_BYTE_IDENTITY_UNVERIFIED; OFFICIAL_UNIT5_BODY_NOT_RETRIEVED";
assert.equal(audit.length,3,"exactly three Unit 5 task rows"); assert.deepEqual(audit.map(r=>r.rbse_task_id).sort(),[...ids].sort());
for(const id of ids){const a=audit.find(r=>r.rbse_task_id===id),e=endpoint.find(r=>r.rbse_task_id===id),s=source.find(r=>r.rbse_task_id===id),m=method.find(r=>r.rbse_task_id===id);
 assert.ok(e&&s&&m,id+": source register row missing"); assert.equal(a.ncert_printed_page_locator,pages[id]); assert.equal(e.printed_locator,pages[id]); assert.equal(m.printed_page_locator,pages[id]);
 assert.equal(a.ncert_official_pdf_url,url); assert.equal(e.official_manual_url,url); assert.equal(s.ncert_method_source_url,url); assert.equal(m.official_pdf_url,url);
 assert.equal(a.official_payload_status,"NOT_RETRIEVED_NO_BYTES_NO_SHA256_NO_PDF_METADATA"); assert.equal(a.apparatus_or_reagent_ids,"NONE_ASSIGNED"); assert.equal(a.candidate_mapping_status,"NO_CANDIDATE_IDS_ASSIGNED; NO_PROMOTION");
 assert.match(a.retrieval_attempts_2026_11_27,/ncert\.nic\.in/); assert.match(a.retrieval_attempts_2026_11_27,/ncert\.gov\.in/); assert.match(a.retrieval_attempts_2026_11_27,/n20\.ncert\.org\.in/);
 assert.equal(e.official_pdf_retrieval_state,fail); assert.equal(e.body_inspection_state,body); assert.equal(s.method_body_review_state,body); assert.equal(m.official_pdf_retrieval_state,fail); assert.equal(m.body_review_state,body);
 assert.match(s.reagent_mapping_state,/NO_CANDIDATE_REAGENT_OR_PRODUCT_IDS_ASSIGNED/); assert.match(s.safety_and_simulation_boundary,/NO_LIVE_USE_APPROVAL/); assert.match(m.rights_boundary,/ALL_RIGHTS_RESERVED/);
}
console.log("LabVerse Chemistry Unit 5 source retrieval gate: PASS"); console.log("Task rows:",audit.length,"; official body PDFs retrieved: 0; candidate IDs assigned: 0");
