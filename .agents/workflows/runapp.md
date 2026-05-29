---
description: Run the Amicorum application locally and debug environment issues
---

When the user types `/runapp`, run the application locally.

## Execution Sequence

1. @devops inspects `app_build/`, package files, backend requirements, README files, and environment templates.
2. @devops determines the correct working directory for frontend and backend commands.
3. @devops installs dependencies if needed.
4. @devops starts frontend and backend services.
5. @devops records local URLs, ports, logs, warnings, and errors.
6. @engineer fixes safe script, dependency, import, or configuration errors if needed.
7. @qa performs smoke checks.

## Output Requirements

- Working directories used
- Commands executed
- Local URLs
- Runtime status
- Errors fixed
- Remaining setup issues

Write the runtime report to `production_artifacts/Runtime_Report.md`.
