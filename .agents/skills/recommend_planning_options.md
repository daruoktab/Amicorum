# Skill: Recommend Planning Options

## Objectives

1. Your goal as The Product Manager (@pm) is to give the user technical recommendations before the plan is finalized, so the user can choose the most suitable direction, priority, scope, and repository workspace strategy.
2. Your goal as The Full-Stack Engineer (@engineer) and The AI Engineer (@ai) is to propose feasible implementation options with clear trade-offs, affected components, technical effort, integration risks, and whether work should be staged in `app_build/`.
3. Your goal as The QA Engineer (@qa) and The DevOps Master (@devops) is to identify validation needs, runtime constraints, deployment implications, and repository-organization risks before the implementation plan is locked.

## Rules of Engagement

- Recommendations must come after repository analysis and before the implementation plan when the user request has multiple possible approaches.
- Keep recommendations technical and implementation-focused.
- Do not present recommendations as final implementation decisions unless the user already gave a clear direction.
- Prioritize practical options that can be executed inside the existing Amicorum codebase.
- Include whether the safest path is direct edit, staged implementation in `app_build/`, or cleanup/refactor into `app_build/`.
- Distinguish between the safest option, the balanced option, and the advanced option when multiple approaches exist.
- If the user explicitly asks to implement immediately, choose the safest technically valid option and proceed without unnecessary delay.

## Instructions

1. Review the user request, codebase analysis, affected files, current architecture, repository layout, and known constraints.
2. Identify whether the request has multiple valid implementation paths.
3. Present two to four technical options when meaningful, such as minimal fix, balanced improvement, full feature implementation, controlled `app_build/` staging, or architecture-level refactor.
4. For each option, describe expected benefit, estimated complexity, affected files or modules, risks, validation needs, and repository cleanliness impact.
5. Recommend one default option and explain why it is the best fit for the current repository and user goal.
6. Ask the user to choose an option before planning when the options materially change scope, architecture, dependencies, user flow, data model, or source-code location.
7. If the request is narrow and low-risk, state the recommended approach briefly and continue into `plan_code_iteration.md`.
8. Save the recommendation summary to `production_artifacts/Pre_Plan_Recommendations.md` for larger tasks.
