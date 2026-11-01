# Phase 1 — Science Claim Review: NCERT Class XII Biology Exercise 11 Pedigree Traits

Review date: 2026-11-01  
Status: SOURCE EXAMPLES PRESERVED / SIMPLE MONOGENIC CLAIMS NOT APPROVED

## 1. Source statement

The NCERT Class XII legacy-host chapter lelm208.pdf (stamp 21/04/2018) lists tongue rolling, widow's peak, cheek dimples, blood groups, red-green colour blindness, hitch-hiker's thumb and hypertrichosis of the ear/pinna as examples in its pedigree exercise. Store those as source examples with edition/page provenance; do not silently rewrite the source.

## 2. Independent evidence

### Tongue rolling
- Martin (1975), “No evidence for a genetic basis of tongue rolling or hand clasping”, Journal of Heredity 66(3):179–180, DOI 10.1093/oxfordjournals.jhered.a108608, PubMed: https://pubmed.ncbi.nlm.nih.gov/1236879/.
- A survey of 57 traits used in classroom genetics labs found some purported traits not documented or potentially polygenic/not inherited as taught; tongue rolling was a questionable example: https://pubmed.ncbi.nlm.nih.gov/798760/.
- University of Utah Learn.Genetics says tongue rolling is not determined by one dominant gene and may be learned: https://learn.genetics.utah.edu/content/basics/observable/.

Decision: do not encode tongue rolling as a deterministic single-gene dominant trait.

### Widow's peak, cheek dimples and earlobe attachment
- University of Utah Learn.Genetics says there is no scientific support for the simple one-gene dominant widow's peak model and describes continuous variation: https://learn.genetics.utah.edu/content/basics/observable/.
- A 2022 GWAS of 26,806 people identified multiple associations for facial traits including widow's peak and earlobe attachment: https://pubmed.ncbi.nlm.nih.gov/36035146/.
- A 2017 multiethnic GWAS of 74,660 people found a polygenic architecture for earlobe attachment: https://pubmed.ncbi.nlm.nih.gov/29198719/.
- A 2022 education/textbook content analysis found insufficient evidence for earlobe attachment, cheek dimples, widow's peak and tongue rolling as simple monogenic traits: DOI 10.15717/bioedu.2022.50.2.215; https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002860398.

Decision: do not assign simple binary genotypes for these visible traits. Where useful, teach them as complex/variable phenotypes with source caveats.

### Hypertrichosis of ear/pinna
- A 2018 review discusses conflicting pedigrees and disputed Y-linked interpretation: DOI 10.7860/JCDR/2018/30757.11295; https://jcdr.net/article_abstract.asp?id=11295&issn=0973-709x&issue=3&page=AE01&volume=12&year=2018.
- Earlier reports and databases do use a Y-linked label, but the inheritance claim should not be applied universally without a clearly defined condition and evidence.

Decision: preserve the textbook example as a source statement; mark inheritance mode CONTESTED / NEEDS_REVIEW.

## 3. Safe LabVerse implementation boundary

1. Build synthetic pedigree exercises with explicitly assumed genotypes for simple inheritance models.
2. Label each example SYNTHETIC_ASSUMPTION, not an observation about real people.
3. Use “consistent with / inconsistent with / insufficient evidence” rather than diagnosis or certainty from a small pedigree.
4. Do not ask learners for family names, family medical history, genetic test results, reproductive history or identifiable relative phenotypes.
5. Any later human-subject research needs separate ethics/privacy review, consent, de-identification, data minimisation, access controls and retention policy.

## 4. Acceptance criteria

- Every pedigree declares whether its genotype model is source-supported or a synthetic teaching assumption.
- No trait is called simple Mendelian without a reviewed gene/variant-condition source and defensible penetrance/expressivity assumptions.
- Continuous phenotypes are not forced into false binary categories.
- Student experience defaults to synthetic data and does not collect identifiable family information.
- Inference returns uncertainty and alternative models where compatible.
- Human genetics reviewer signs off before any real-world trait claim is marked VERIFIED_FOR_USE.

No application code or tests were created by this review.
