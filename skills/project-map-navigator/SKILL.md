---
name: project-map-navigator
description: Immutable spatial navigation and architectural grounding for Command Code. Initializes, references, and synchronizes a real-time PROJECT_MAP.md at the project root to prevent context drift, hallucinated paths, and stale assumptions. Use before any complex or multi-step task: feature work, refactoring, debugging, or onboarding.
argument-hint: "[init-map | sync-map | audit-map]"
metadata:
  author: commandcode
  version: 2.0.0
  type: navigator
  priority: highest
  trigger_conditions: complex task, multi-step task, multi-file change, refactoring, debugging, onboarding, or when PROJECT_MAP.md is missing or stale
---

# Project Map Navigator

You are an immutable spatial anchor, not a feature implementer. Your job: keep `PROJECT_MAP.md` at the project root as the single source of ground truth, and force every task through Orient -> Execute -> Sync.

## 1. Zero-Hallucination Rules (non-negotiable)

- Verify every path, entry point, export, and dependency against the real filesystem (`read_file`, `read_directory`, `glob`, `grep`) before writing it to the map. No speculative paths, placeholder modules, or imaginary interfaces.
- If it is not on disk, it does not go on the map as active. Planned-but-missing files are tagged `[PLANNED - NOT ON DISK]`.
- Every file path in `PROJECT_MAP.md` is a clickable link: `[rel/path.ts](file:///absolute/path/to/rel/path.ts)` with forward slashes.
- A task is NOT complete until `PROJECT_MAP.md` reflects post-task `git status` / `git diff` reality.

## 2. Lifecycle: Orient -> Execute -> Sync

### Phase 1: Orientation (pre-task)

1. Read `PROJECT_MAP.md` at root. If missing, run `init-map` (section 5) before anything else.
2. Read Task Compass: last milestone, impacted files, next steps.
3. Verify each target file exists on disk. On mismatch: stop, run `audit-map`, fix the map first.
4. Cross-check the user request against the map: do the target modules, patterns, and data-flow boundaries actually support what was asked? If not, say so before editing.

### Phase 2: Guarded Execution (in-flight)

1. Before editing, check the Component Registry row for that file: responsibility, key exports, dependents.
2. Respect recorded boundaries: no business logic in view components, no bypassing data layers, no new cross-package imports that break the topology.
3. After edits, run the cheapest real verifier available (`tsc --noEmit`, `npm run build`, focused tests) before proceeding.

### Phase 3: State Reconciliation (post-task)

1. Run `git status` and `git diff --stat`. This is the truth, not memory.
2. Update `PROJECT_MAP.md`:
   - Compass: mark task `[COMPLETED]` with proof (build/test output, commit hash); set next steps.
   - Registry: add new files, remove deleted ones, update changed exports.
   - State of Truth: update deps, env vars, schema contracts if they changed.
3. Update the `Last Ground-Truth Audit` timestamp. Unsynced map = unfinished task.

## 3. Drift Detection & Self-Correction

| Trigger | Action |
|---|---|
| File-not-found on a mapped path | Stop. List parent dir. Correct the map. Resume on the true path. |
| Import error: missing export | Read the source file. Record actual exports. Fix the import. |
| Schema/column error | Inspect migrations/schema. Update State of Truth. Fix the query. |
| Branch switch or merge | Re-run `git status`, rescan root, reconcile the map. |

## 4. PROJECT_MAP.md Schema Template

```markdown
# PROJECT MAP: [Project Name]

> **Last Ground-Truth Audit:** YYYY-MM-DDTHH:mm:ss+07:00
> **Status:** Synchronized with Git Workspace
> **Repository Root:** `absolute/path/to/root`
> **Architecture Stack:** [e.g. React 18 + TypeScript + Vite + Supabase]

---

## 1. Task Compass (You Are Here)

- **Current Active Milestone:** [Short title]
- **Active Target Files:**
  - [rel/path.ts](file:///absolute/path/to/rel/path.ts) - [Modify/Create/Delete + why]
- **Current Objective:** [1-2 sentences + acceptance criteria]
- **Completed Milestones (verified via git diffs):**
  - ✅ **[YYYY-MM-DD] Title:** [What changed, proof: build/tests/commit]
- **Immediate Next Steps:**
  1. [Next step]

---

## 2. Executive Overview & Topology

[2-4 sentences: domain, users, purpose. Mermaid flow: client -> router -> services -> DB/storage.]

### Entry Points & Key Packages

- **App Entry:** [index.html](file:///abs/index.html) - [role]
- **Bootloader:** [src/main.tsx](file:///abs/src/main.tsx) - [role]
- **Router/Guards:** [src/App.tsx](file:///abs/src/App.tsx) - [role]
- **Config:** [vite.config.ts](file:///abs/vite.config.ts), [package.json](file:///abs/package.json) - [role]

### Architectural Patterns in Use

[Name each pattern actually present, e.g. layered SPA, provider-based auth context, RLS-gated data access, Edge Functions for privileged ops. One line of evidence per pattern.]

### Module Interconnections & Data Flow

[How modules talk: router -> pages -> components -> utils -> Supabase client -> Postgres/RLS/Storage/Edge Functions. Name real contracts: REST endpoints, function names, table names, storage buckets.]

---

## 3. Component & Service Registry

| File Path | Responsibility | Key Exports | Primary Dependencies |
|---|---|---|---|
| [src/pages/X.tsx](file:///abs/src/pages/X.tsx) | [single responsibility] | `X` | `dep` |

---

## 4. State of Truth & Runtime Contracts

### Environment Variables

| Variable | Required | Purpose | Source |
|---|---|---|---|
| `VITE_SUPABASE_URL` | Yes | API endpoint | `.env` |

### Database & Schema Contracts

| Table | PK | Constraints | Business Rules |
|---|---|---|---|
| `ho_so_nct` | `id (uuid)` | `so_cccd UNIQUE` | RLS: role-gated CRUD |

### Edge Functions / Services

| Function | Endpoint | Auth | Purpose |
|---|---|---|---|
| `create-user` | `/functions/v1/create-user` | admin only | Staff creation |

---

## 5. Drift Audit Log

| Timestamp | Event | Root Cause | Reconciliation |
|---|---|---|---|
| YYYY-MM-DD HH:mm | [event] | [cause] | [action] |
```

## 5. Interactive Command Triggers

Invoke as `/project-map-navigator <command>`; `` carries the command.

- `init-map` — Full filesystem scan, generate `PROJECT_MAP.md` from template with verified content only. Use when the map is missing or untrustworthy.
- `sync-map` — `git status`/`git diff --stat` reconciliation: update Compass, Registry, State of Truth, timestamp. Use after every task.
- `audit-map` — Verify every mapped path exists, every export is real, every contract matches disk. Fix drift, log it in section 5. Use on file-not-found, branch switch, or stale-map suspicion.

## 6. Worked Example

User: `/project-map-navigator init-map` then "add a filter to QuanLyHoSo".

1. Orientation: read map, confirm `src/pages/QuanLyHoSo.tsx` exists, note deps on filter components and import/export utils from the Registry.
2. Execution: edit the page, keep data logic in utils, run `npm run build`.
3. Reconciliation: `git status` shows two modified files; mark milestone complete with build proof; update Registry exports; set next step; bump audit timestamp.
