# Skill: Plan Code Iteration

## Objectives

1. Your goal as The Product Manager (@pm) is to translate the selected pre-plan recommendation and user request into a clear technical implementation plan for the existing Amicorum codebase.
2. Your goal as The Full-Stack Engineer (@engineer) is to estimate the frontend, backend, integration, AI, and documentation work required to implement the requested change inside the approved workspace.
3. Your goal as The QA Engineer (@qa) is to define acceptance criteria and validation checks that can be used to verify the completed implementation.

## Rules of Engagement

- Do not assume that technologies or features from old documents are final.
- Keep the plan scoped to the current user request, selected recommendation option, and current codebase.
- Explicitly state whether implementation will happen inside `app_build/` or an existing source folder.
- For major multi-file changes, wait for user approval before implementation unless the user explicitly says to proceed.
- For small bug fixes, you may proceed after stating the reproduction path and intended fix.
- Make the plan actionable enough for @engineer, @ai, @qa, and @devops after the recommended direction is selected or confirmed.

## Instructions

1. Summarize the user request and selected technical recommendation as a technical goal.
2. Describe the current behavior or current repository state relevant to the request.
3. Define the target behavior after the change is completed.
4. Specify the approved application workspace, preferably `app_build/` for new or staged work.
5. List affected files, components, routes, APIs, services, schemas, styles, and configuration files.
6. Split the work into role-based tasks for @engineer, @ai, @qa, and @devops as needed.
7. Define acceptance criteria that can be checked manually or through available commands.
8. Identify risks, assumptions, fallback options, and any recommendation trade-offs that remain relevant.
9. Save the plan to `production_artifacts/Implementation_Plan.md` for larger tasks.
10. Ask for approval before implementation when the change is broad, architectural, or multi-step.
