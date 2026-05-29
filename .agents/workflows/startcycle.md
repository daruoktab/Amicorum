---
description: Run the full Amicorum IT expert team cycle for a user request
---

When the user types `/startcycle <request>`, orchestrate the technical workflow using `.agents/agents.md` and the skills in `.agents/skills/`.

## Execution Sequence

1. Act as The Product Manager (@pm) and execute `analyze_codebase.md` for the current repository and the user request.
2. Act as The Product Manager (@pm), supported by @engineer, @ai, @qa, and @devops when relevant, and execute `recommend_planning_options.md` before the plan is finalized.
3. If the recommendations include materially different scopes, architectures, dependencies, user flows, data models, source-code locations, or risks, stop and ask the user to choose an option before planning.
4. Act as The Product Manager (@pm) and execute `plan_code_iteration.md` based on the selected or recommended option.
5. If the plan is broad, architectural, or multi-file, stop and ask the user for approval before editing code. Continue only after the user approves or explicitly says to proceed.
6. Act as The Full-Stack Engineer (@engineer) and execute `implement_frontend.md` when the plan touches frontend files.
7. Act as The Full-Stack Engineer (@engineer) and execute `implement_backend.md` when the plan touches backend files.
8. Act as The AI Engineer (@ai) and execute `implement_ai_capability.md` only when the plan requires AI behavior.
9. Act as The QA Engineer (@qa) and execute `audit_code_quality.md`.
10. Act as The DevOps Master (@devops) and execute `run_and_debug_app.md`.
11. Act as The Product Manager (@pm), supported by @qa, @engineer, @ai, and @devops, and execute `evaluate_and_recommend.md` for post-implementation evaluation and follow-up recommendations.

## Output Requirements

- Report what was analyzed, recommended, planned, changed, tested, and verified.
- List the workspace used, especially whether source work happened under `app_build/`.
- List changed files.
- List commands executed and their result.
- List unresolved risks and next technical recommendations.
