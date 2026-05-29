---
description: Audit the Amicorum codebase without implementing broad changes
---

When the user types `/audit`, audit the current codebase.

## Execution Sequence

1. @pm executes `analyze_codebase.md`.
2. @qa executes `audit_code_quality.md`.
3. @devops executes safe build/runtime checks when possible.
4. @pm and @qa execute `evaluate_and_recommend.md`.

## Output Requirements

- Codebase summary
- Repository organization findings
- Critical issues
- Medium-priority issues
- Low-priority improvements
- Suggested next action

Write the detailed audit to `production_artifacts/QA_Report.md`.
