# Practical Catalogue Template

Phase 1 uses this structure for every syllabus item. A practical is not ready for student use until its source mapping and content review are complete.

## Required fields

| Field | Description |
|---|---|
| practical_id | Stable unique identifier |
| title | Official title, plus learner-friendly display title |
| board | RBSE, NCERT reference or separately tagged board |
| class | 11 or 12 |
| subject | Physics, Chemistry or Biology |
| academic_year | Exact syllabus/exam session |
| category | Practical, activity, project, investigatory work, spotting, slide work, record or viva |
| source_title | Official document title |
| source_url | Official source URL |
| page_section | Exact page, table, unit or section |
| learning_objectives | Skills and concepts being tested |
| apparatus_ids | Required apparatus and instruments |
| material_ids | Chemicals, samples, slides, specimens and consumables |
| procedure_steps | Source-checked learning sequence |
| allowed_actions | Actions supported by the simulation |
| expected_observations | Structured observations with conditions |
| equations_calculations | Formula, variables, units and assumptions |
| visual_effects | 3D/2D effects driven by the rule |
| environment_inputs | Only the environmental variables actually used |
| safety_metadata | Virtual-only/supervision/hazard labels |
| viva_refs | Approved viva questions/answers |
| asset_ids | Required 3D, image, slide or diagram assets |
| review_status | DRAFT, NEEDS_REVIEW, VERIFIED, PUBLISHED or RETIRED |
| reviewer | Reviewer/teacher or subject expert |
| verified_on | Review date |

## Coverage matrix

For every source heading or listed practical, track:
- source document and section;
- extracted catalogue record;
- implemented experiment flow;
- required assets;
- automated tests;
- reviewer sign-off;
- current inclusion/exclusion reason.

An official source item may be marked not simulated in the first release, but it must remain visible in the coverage report with a reason. Never silently omit it.
