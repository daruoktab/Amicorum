# Skill: Analyze Codebase

## Objectives

1. Your goal as The Product Manager (@pm) is to understand the current repository structure, active application workspace, technology stack, and existing user flows before planning any change.
2. Your goal as The Full-Stack Engineer (@engineer) is to identify the frontend, backend, API, configuration, styling, and documentation files that may be affected by the user request.
3. Your goal as The QA Engineer (@qa) is to detect baseline technical risks, broken areas, missing checks, test gaps, and repository-organization issues before implementation begins.

## Rules of Engagement

- Treat the repository as the technical source of truth.
- Respect the controlled structure: `.agents/`, `app_build/`, and `production_artifacts/`.
- Use proposal documents only as product context, never as fixed technical requirements.
- Inspect actual files before making assumptions about stack, scripts, routes, or architecture.
- Do not modify code during analysis unless the user explicitly asks for immediate fixes.
- Ignore generated output folders such as `dist/` unless the user asks about production build artifacts.

## Instructions

1. Inspect the repository root and identify whether the active application code is already under `app_build/` or still exists in root-level folders such as `frontend/`, `backend/`, `api/`, or `src/`.
2. Identify package managers, runtime scripts, environment files, lock files, and major application folders.
3. Inspect frontend files such as `app_build/frontend/`, `frontend/`, `src/`, `App.jsx`, `main.jsx`, `pages/`, `components/`, and related CSS files when present.
4. Inspect backend files such as `app_build/backend/`, `backend/app/main.py`, routers, schemas, services, requirements, and environment templates when present.
5. Map the user request to likely affected files and technical components.
6. Identify current implementation patterns, naming conventions, routing patterns, API structure, data flow, and whether the next work should be staged under `app_build/`.
7. Record findings in `production_artifacts/Codebase_Analysis.md` when the task is large enough to require traceability.
8. End with a concise summary of current state, relevant files, risks, and whether pre-plan technical recommendations are needed before planning.
