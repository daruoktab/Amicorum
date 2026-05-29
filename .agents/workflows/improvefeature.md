---
description: Improve an existing Amicorum feature
---

When the user types `/improvefeature <feature request>`, improve an existing website feature.

## Execution Sequence

1. @pm executes `analyze_codebase.md` to locate the current implementation.
2. @pm, @engineer, @qa, and @devops execute `recommend_planning_options.md` before planning.
3. Ask the user to choose an option if the improvement can be done through multiple materially different scopes.
4. @pm executes `plan_code_iteration.md`.
5. Ask for approval before implementation when the change is broad or multi-file.
6. @engineer implements frontend/backend changes.
7. @ai implements AI-related changes only if needed.
8. @qa audits the improvement.
9. @devops runs build/runtime checks.
10. @pm executes `evaluate_and_recommend.md`.

## Output Requirements

- Current feature summary
- Pre-plan recommendation options
- Selected plan
- Workspace used, especially `app_build/` when applicable
- Changed files
- QA result
- Runtime result
- Next recommendations
