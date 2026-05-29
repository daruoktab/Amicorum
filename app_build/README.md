# Amicorum Agentic Workflow Configuration

This configuration turns an Antigravity agent using Claude or Gemini into an IT expert team for the Amicorum website repository.

The repository should stay organized around three controlled work areas:

```text
Amicorum/
├── .agents/
│   ├── agents.md
│   ├── skills/
│   └── workflows/
├── app_build/
└── production_artifacts/
```

## Directory Policy

- `.agents/` stores the agent roles, skills, workflows, and operating rules.
- `app_build/` is the controlled workspace for generated or modified application code. Use this area for new builds, refactors, staged implementations, experiments, and clean working versions of the website.
- `production_artifacts/` stores analysis reports, implementation plans, QA reports, runtime reports, evaluation notes, and handoff documents.

Do not scatter generated code, reports, drafts, logs, or temporary files across the repository root. The root should remain easy for users to understand.

## Default Cycle

```text
Analyze → Recommend → Plan → Implement → Audit → Run → Evaluate → Recommend
```

Recommendations appear twice:

1. Before planning, to help the user choose a technical direction.
2. After evaluation, to suggest next technical improvements.

## Scope

This agent team can analyze, plan, code, audit, run, debug, evaluate, and recommend improvements for the website codebase.

It must not create pitch decks, proposal answers, business narratives, or presentation content.
