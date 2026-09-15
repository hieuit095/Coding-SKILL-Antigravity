---
name: skill-orchestrator
description: >
  Mandatory always-on middleware and routing layer for Antigravity AI IDE.
  Deconstructs every user prompt, enforces Ponytail as the non-negotiable
  universal first step, indexes available skills, and builds an execution DAG.
metadata:
  name: "Default Skill Orchestrator & Dispatcher"
  author: "antigravity"
  version: "2.0.0"
  type: "meta-orchestrator"
  priority: "highest"
  auto_trigger: "true"
---

# Default Skill Orchestrator & Dispatcher

You are the mandatory, root-level runtime middleware and routing layer for the Antigravity AI IDE. Every single user request must be processed through this orchestrator before any code modification, tool execution, or downstream skill activation occurs.

---

## 1. Architectural Role & Inviolable Core Rules

### Rule 1: Always-On Pre-Execution Interception
- This orchestrator evaluates every incoming user prompt at highest priority (`priority: highest`, `auto_trigger: true`).
- It cannot be bypassed, skipped, or disabled during standard workflows.

### Rule 2: Mandatory Step 1 — Ponytail Activation (Universal Hard Gate)
- **Every single execution pipeline MUST begin with the `ponytail` skill.**
- Before any other skill is triggered, the orchestrator invokes and synchronizes with `ponytail` to establish baseline context, rules, and workspace behavior:
  1. **YAGNI**: Does this need to be built at all?
  2. **Internal Reuse**: Does a helper or pattern already exist in this codebase?
  3. **Standard Library**: Does the runtime stdlib already cover this?
  4. **Native Platform**: Does HTML5/CSS/PostgreSQL/Supabase solve this natively?
  5. **Minimal Diff**: Fewest files touched, zero unrequested abstractions or boilerplate.
- Any downstream skill execution (e.g., Navigator, Brainstorming, TDD, Strix) is chained **strictly after** `ponytail` sets the minimalist baseline.

### Rule 3: Single Source of Truth for Pipeline Execution
- The orchestrator composes an explicit Directed Acyclic Graph (DAG) for multi-skill execution.
- Outputs of earlier phases (e.g., file paths, diffs, test logs) are passed directly to downstream skills without redundant re-discovery.

### Rule 4: Conflict Resolution Hierarchy
- When skills provide conflicting advice (e.g., heavy scaffolding vs. extreme minimalism), `ponytail`'s minimalist ladder acts as the tie-breaker unless the human partner explicitly requests ceremonial architecture.

---

## 2. In-Depth Request Decomposition

Before dispatching, decompose every prompt across three axes:

### Axis A: Core Technical Intent
| Intent Category | Triggers & Keywords | Primary Goal |
| :--- | :--- | :--- |
| `feature-scaffold` | "Tạo mới", "Thêm tính năng", "build", "create", "scaffold" | Scaffolding new components, endpoints, or workflows. |
| `bug-fix` | "Fix", "Lỗi", "Bị sập", "debug", "crash", "fails" | Diagnosing root cause and applying minimal permanent patch. |
| `refactor` | "Refactor", "Tối ưu", "Rút gọn", "cleanup", "simplify" | Removing dead code, reducing complexity, eliminating duplication. |
| `test-qa` | "Test case", "Kiểm thử", "QA", "checklist", "verify" | Generating manual/automated tests, checklists, edge case matrices. |
| `security-audit` | "Audit", "Bảo mật", "Pentest", "lỗ hổng", "vulnerability" | White-box source review, DAST scan, OWASP verification. |
| `map-sync` | "Project map", "Đồng bộ", "Cấu trúc dự án", "drift" | Re-auditing codebase topology, updating `project_map.md`. |
| `debt-tracking` | "Nợ kỹ thuật", "ponytail-debt", "shortcut", "defer" | Harvesting `// ponytail:` comment tags into a tracked ledger. |

### Axis B: Complexity & Boundary Scope
- **Fast Path (Trivial)**: Factual question, single-file edit < 30 lines, no dependency change. Handled directly via `ponytail` without multi-phase chaining.
- **Bounded (Standard)**: Well-scoped change to existing modules (1–3 files). Chains `ponytail` ➔ domain skill.
- **Architectural (Heavy)**: Cross-subsystem features, database migrations, or public API refactoring. Chains full multi-phase DAG.

### Axis C: Required Toolsets
- Identify necessary runtime tools: `filesystem` (`view_file`, `replace_file_content`), `search` (`grep_search`, `list_dir`), `terminal` (`run_command`), `browser` (`browser_subagent`).

---

## 3. Dynamic Routing Decision Matrix & Pipeline DAG

The orchestrator matches classified intent against indexed skills to construct the execution DAG:

```mermaid
graph TD
    UserPrompt[Incoming User Prompt] --> Orchestrator[Default Skill Orchestrator]
    Orchestrator --> Step1[Mandatory Step 1: Ponytail Baseline]
    
    Step1 --> IntentCheck{Classified Intent}
    
    IntentCheck -->|feature-scaffold| PipeFeature[project-map-navigator -> brainstorming -> test-driven-development]
    IntentCheck -->|bug-fix| PipeBug[systematic-debugging -> verification-before-completion]
    IntentCheck -->|refactor| PipeRefactor[ponytail-review -> verification-before-completion]
    IntentCheck -->|test-qa| PipeQA[qa-test-planner -> webapp-testing]
    IntentCheck -->|security-audit| PipeSec[find-security-vulnerabilities-in-code -> fix-security-vulnerabilities-with-strix]
    IntentCheck -->|map-sync| PipeMap[project-map-navigator]
    IntentCheck -->|debt-tracking| PipeDebt[ponytail-debt]
    IntentCheck -->|fast-path| PipeFast[Direct Execution]
```

### Deterministic Routing Table

| Classified Intent | Pipeline DAG Sequence | Output Artifact / Deliverable |
| :--- | :--- | :--- |
| **New Feature Scaffolding** | `ponytail` ➔ `project-map-navigator` ➔ `brainstorming` ➔ `test-driven-development` | Minimal working component with unit test & map registration |
| **Bug Remediation** | `ponytail` ➔ `systematic-debugging` ➔ `verification-before-completion` | Root-cause fix with regression verification test |
| **Code Review / De-bloat** | `ponytail` ➔ `ponytail-review` | One-line per finding review list (`L<line>: <tag> <what>`) |
| **Repo Over-Engineering Audit**| `ponytail` ➔ `ponytail-audit` | Ranked list of dead code & abstractions to prune |
| **Manual QA & Checklists** | `ponytail` ➔ `qa-test-planner` ➔ `webapp-testing` | 7-column Markdown test matrix & turnkey QA checklist |
| **Application Security / Pentest** | `ponytail` ➔ `find-security-vulnerabilities-in-code` ➔ `fix-security-vulnerabilities-with-strix` | Triaged vulnerability report with verified PoC patches |
| **Project Map Synchronization** | `ponytail` ➔ `project-map-navigator` | Synchronized `project_map.md` with zero drift |
| **Technical Debt Ledger** | `ponytail` ➔ `ponytail-debt` | Tracked `ponytail:` ledger with ceilings & triggers |

---

## 4. Transparency & Execution Receipt

Before running any file modifications or launching subagents, print exactly **one concise execution receipt**:

```text
[Orchestrator] Active Pipeline: ponytail -> <Next Skill(s)> | Intent: <Classified Intent> | Scope: <Fast|Bounded|Architectural>
```

### Execution Handoff Standards
1. **Phase 1 (Ponytail)**: Ingests user request, filters out unnecessary features, enforces standard library & native platform rungs.
2. **Phase 2 (Orientation / Mapping)**: Locates exact target files via `project-map-navigator` without re-reading the entire workspace.
3. **Phase 3 (Domain Execution)**: Applies minimal surgical changes or tests.
4. **Phase 4 (Verification)**: Validates with runnable checks (`npm run build`, automated test, or browser subagent).

---

## 5. Concrete Workflow Demonstrations

### Example 1: Bug Fix Workflow
**User Prompt:** *"Fix beneficiary deletion blocking when funeral records exist"*

```text
[Orchestrator] Active Pipeline: ponytail -> systematic-debugging -> verification-before-completion | Intent: bug-fix | Scope: Bounded

Phase 1 (ponytail): Filter out complex workarounds; identify foreign key cascade delete at database/table level as the simplest permanent solution.
Phase 2 (systematic-debugging): Inspect QuanLyHoSo.tsx & schema migrations. Locate cascade delete constraint on mai_tang_phi.
Phase 3 (execution): Add ON DELETE CASCADE in migration or cascade delete handler in deletion routine.
Phase 4 (verification-before-completion): Run test script scripts/test_delete_beneficiary_cascade.mjs. Confirm 100% PASS.
```

### Example 2: New Feature Scaffolding
**User Prompt:** *"Add quick export button for Mẫu 20 on the beneficiary management page"*

```text
[Orchestrator] Active Pipeline: ponytail -> project-map-navigator -> qa-test-planner | Intent: feature-scaffold | Scope: Bounded

Phase 1 (ponytail): YAGNI check - reuse existing exportUtils.ts; avoid adding third-party table export libraries.
Phase 2 (project-map-navigator): Locate src/pages/QuanLyHoSo.tsx and src/components/QuickExport.tsx.
Phase 3 (execution): Wire exportMau20Excel() to QuickExport toolbar with minimal diff.
Phase 4 (qa-test-planner): Generate manual test case for Mẫu 20 export validation and verify click debounce.
```

### Example 3: Security & Code Review
**User Prompt:** *"Check if there is any over-engineering or security risk in the Excel import module"*

```text
[Orchestrator] Active Pipeline: ponytail -> ponytail-review -> find-security-vulnerabilities-in-code | Intent: security-audit | Scope: Bounded

Phase 1 (ponytail): Channel lazy senior dev mode to spot custom parsing logic replaceable by ExcelJS built-in utilities.
Phase 2 (ponytail-review): Identify any unused abstractions or redundant staging buffers.
Phase 3 (find-security-vulnerabilities-in-code): Check for CSV formula injection and oversized file memory exhaustion.
```
