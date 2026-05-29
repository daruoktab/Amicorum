---
description: Diagnose and fix a specific bug in the Amicorum codebase
---

When the user types `/fixbug <bug description>`, use the IT expert team to diagnose and fix the bug.

## Execution Sequence

1. @pm and @qa analyze the bug report and inspect the likely affected files.
2. @devops attempts to reproduce the issue when commands or runtime steps are available.
3. @pm gives a brief technical recommendation for the safest fix path, including whether changes should happen under `app_build/` or an approved existing source folder.
4. @engineer fixes frontend/backend/integration code as needed.
5. @ai fixes AI-related behavior only if the bug involves AI functionality.
6. @qa audits the fix and checks for regressions.
7. @devops runs the relevant build, startup, or smoke check.
8. @pm summarizes the fix and gives any remaining technical recommendations.

## Output Requirements

- Reproduction summary
- Root cause
- Files changed
- Commands executed
- Verification result
- Remaining risks
