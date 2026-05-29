---
description: Add or improve AI capability in the Amicorum prototype
---

When the user types `/add_ai_feature <AI request>`, add or improve an AI capability.

## Execution Sequence

1. @pm executes `analyze_codebase.md` to inspect current AI, backend, and frontend integration points.
2. @ai executes `recommend_planning_options.md` with support from @engineer, @qa, and @devops.
3. Ask the user to choose an option if the AI request can be implemented through materially different approaches, such as rule-based logic, mock inference, hosted API, or local model.
4. @pm executes `plan_code_iteration.md`.
5. Ask for approval before implementation when new dependencies, external APIs, data collection, or architecture changes are required.
6. @ai executes `implement_ai_capability.md`.
7. @engineer integrates the AI capability with frontend/backend code.
8. @qa audits AI behavior, fallback behavior, and integration reliability.
9. @devops runs the app and validates environment requirements.
10. @pm executes `evaluate_and_recommend.md`.

## Output Requirements

- AI task type
- Input/output contract
- Workspace and files changed
- Implementation method
- Known limitations
- Validation result
- Next technical recommendations
