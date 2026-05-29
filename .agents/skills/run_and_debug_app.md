# Skill: Run and Debug App

## Objectives

1. Your goal as The DevOps Master (@devops) is to install dependencies, run the frontend and backend services, and verify that the Amicorum prototype works locally from the correct application workspace.
2. Your goal as The DevOps Master (@devops) is to diagnose runtime errors, port conflicts, environment issues, missing dependencies, build failures, and workspace-location problems.
3. Your goal as The DevOps Master (@devops) is to provide clear run instructions, local URLs, logs, fallback steps, and workspace notes for the user and the team.

## Rules of Engagement

- Do not deploy publicly unless the user explicitly requests deployment.
- Do not expose secret values in logs, reports, or documentation.
- Use repository scripts and documented setup commands before inventing new ones.
- Prefer running from `app_build/` when it contains the active application workspace.
- Do not install dependencies randomly at the repository root when the app package lives in a subfolder.
- Prefer deterministic fixes such as dependency installation, environment variable setup, or script correction over broad refactors.
- Do not modify application logic unless the runtime issue requires it and the fix is clear.
- Report unresolved environment issues transparently.

## Instructions

1. Inspect `app_build/`, `package.json`, lock files, backend requirements, README files, environment templates, and runtime entry points.
2. Determine the correct working directory for frontend and backend commands.
3. Install frontend dependencies using the detected package manager when needed.
4. Install backend dependencies using the appropriate Python environment workflow when needed.
5. Start the frontend and backend with their existing scripts or framework commands.
6. Capture local URLs, ports, startup logs, warnings, and errors.
7. Fix missing dependencies, script mismatches, import errors, environment variable issues, and safe configuration problems when possible.
8. Validate the app with smoke checks such as page load, API root response, core route navigation, and build command.
9. Create or update `production_artifacts/Runtime_Report.md` with commands used, working directories, results, URLs, logs summary, and unresolved issues.
