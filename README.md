# 🚀 Coding-SKILL-Antigravity

[![Antigravity Compatible](https://img.shields.io/badge/Antigravity-100%25%20Compatible-blue.svg)](#) [![Skills Count](https://img.shields.io/badge/Skills-233%20Total-brightgreen.svg)](#) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-success.svg)](#)

Bộ sưu tập toàn diện gồm **233 chuyên môn hóa kỹ năng (Skills)** chuẩn hóa 100% theo quy cách kỹ thuật của **Google Antigravity AI IDE / Antigravity CLI**.

Mỗi skill được đóng gói độc lập theo cấu trúc chuẩn, hỗ trợ cơ chế **Progressive Disclosure** (tiết kiệm token context) và tích hợp sẵn quy trình runbook, best practices từ thực tế kỹ thuật phần mềm.

---

## 📦 Cấu trúc chuẩn của một Antigravity Skill

Theo [Antigravity Customization Guidelines](skills/agy-customizations/SKILL.md), mỗi kỹ năng được tổ chức như sau:

```text
skills/<skill_name>/
├── SKILL.md          # Bắt buộc: Chứa YAML frontmatter (name, description) & hướng dẫn workflow
├── references/       # Tùy chọn: Tài liệu tham khảo kỹ thuật, checklists, runbooks sâu
├── scripts/          # Tùy chọn: Scripts tự động hóa, kiểm tra, helper utilities
├── examples/         # Tùy chọn: Dự án mẫu, boilerplate, code snippets
└── resources/        # Tùy chọn: Templates, sơ đồ kiến trúc, assets
```

---

## ⚡ Cài đặt nhanh (Quick Installation)

### Cách 1: Cài đặt vào Workspace dự án (`.agents/skills/`)

Sử dụng script cài đặt tự động đi kèm trong thư mục `scripts/`:

```powershell
# Cài đặt toàn bộ skills vào dự án của bạn
.\scripts\install.ps1 -Scope Workspace -TargetPath "C:\Path\To\YourProject"
```

### Cách 2: Cài đặt toàn cục (Global cho mọi Workspace Antigravity)

```powershell
# Cài đặt vào ~/.gemini/config/skills/ trên máy tính
.\scripts\install.ps1 -Scope Global
```

### Cách 3: Tự động kiểm tra tính hợp lệ của toàn bộ Skills

```powershell
.\scripts\validate-skills.ps1
```

---

## 📚 Danh mục 233 Skills theo từng chuyên ngành

### 🔹 Superpowers & Workflow (16 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`brainstorming`](skills/brainstorming/SKILL.md) | You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation. |
| [`dispatching-parallel-agents`](skills/dispatching-parallel-agents/SKILL.md) | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies |
| [`executing-plans`](skills/executing-plans/SKILL.md) | Use when you have a written implementation plan to execute in a separate session with review checkpoints |
| [`finishing-a-development-branch`](skills/finishing-a-development-branch/SKILL.md) | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work |
| [`karpathy-guidelines`](skills/karpathy-guidelines/SKILL.md) | Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, make surgical changes, surface assumptions, and define verifiable success criteria. |
| [`receiving-code-review`](skills/receiving-code-review/SKILL.md) | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or bli... |
| [`requesting-code-review`](skills/requesting-code-review/SKILL.md) | Use when completing tasks, implementing major features, or before merging to verify work meets requirements |
| [`skill-orchestrator`](skills/skill-orchestrator/SKILL.md) | Mandatory always-on middleware and routing layer for Antigravity AI IDE. Deconstructs every user prompt, enforces Ponytail as the non-negotiable universal first step, indexes available skills, and builds an execution ... |
| [`subagent-driven-development`](skills/subagent-driven-development/SKILL.md) | Use when executing implementation plans with independent tasks in the current session |
| [`systematic-debugging`](skills/systematic-debugging/SKILL.md) | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes |
| [`test-driven-development`](skills/test-driven-development/SKILL.md) | Use when implementing any feature or bugfix, before writing implementation code |
| [`using-git-worktrees`](skills/using-git-worktrees/SKILL.md) | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback |
| [`using-superpowers`](skills/using-superpowers/SKILL.md) | Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions |
| [`verification-before-completion`](skills/verification-before-completion/SKILL.md) | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertion... |
| [`writing-plans`](skills/writing-plans/SKILL.md) | Use when you have a spec or requirements for a multi-step task, before touching code |
| [`writing-skills`](skills/writing-skills/SKILL.md) | Use when creating new skills, editing existing skills, or verifying skills work before deployment |

### 🔹 Frontend & Design Systems (91 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`agentic`](skills/agentic/SKILL.md) | Conversational AI-first interface with minimal controls, clear outcomes, and delegated task flows for agentic workflows. |
| [`ai-bug-triage`](skills/ai-bug-triage/SKILL.md) | Hybrid fingerprint + LLM pipeline for bug classification, deduplication, and ticket generation. Normalizes CI logs, creates stable fingerprints, clusters near-duplicates, then uses LLM for severity classification and ... |
| [`ai-test-generation`](skills/ai-test-generation/SKILL.md) | Use AI to write NEW test code from specs, PRDs, user stories, code diffs, bug reports, or OpenAPI specs. Staged pipeline: requirements extraction → risk analysis → coverage matrix → scenario generation → oracle design... |
| [`ant`](skills/ant/SKILL.md) | Structured, enterprise-focused design system emphasizing clarity, consistency, and efficiency for data-dense web applications. |
| [`artistic`](skills/artistic/SKILL.md) | High-contrast, expressive style with creative typography and bold color choices for visually striking interfaces. |
| [`banner-design`](skills/banner-design/SKILL.md) | Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with AI-generated visuals. Actions: design, create, generate banner. Platforms: Facebook, Twitter/X, Lin... |
| [`basic`](skills/basic/SKILL.md) | Print-inspired visual language for books, magazines, and reports with editorial grids and expressive typography. |
| [`bento`](skills/bento/SKILL.md) | Modular grid layout with card-like blocks, clear hierarchy, soft spacing, and subtle visual contrast for organized, scannable interfaces. |
| [`bold`](skills/bold/SKILL.md) | Strong visual presence with heavyweight typography, high-contrast colors, and commanding layouts. |
| [`brand`](skills/brand/SKILL.md) | Brand voice, visual identity, messaging frameworks, asset management, brand consistency. Activate for branded content, tone of voice, marketing assets, brand compliance, style guides. |
| [`brutalism`](skills/brutalism/SKILL.md) | Raw, anti-design aesthetic inspired by concrete architecture with unadorned elements, jarring layouts, and functional minimalism. |
| [`cafe`](skills/cafe/SKILL.md) | Cozy cafe-inspired interface with warm tones, soft typography, and clean layouts for a relaxed browsing experience. |
| [`chaos-engineering`](skills/chaos-engineering/SKILL.md) | Validate system resilience through controlled fault injection. Covers hypothesis-driven chaos experiments, failure injection types (network, service, infrastructure, dependency), LitmusChaos/Chaos Mesh/AWS FIS/Gremlin... |
| [`ci-cd-integration`](skills/ci-cd-integration/SKILL.md) | Design CI/CD pipelines that run test suites. Covers GitHub Actions and GitLab CI templates, parallelism and sharding, artifact management, flaky-test quarantine, test-result publishing, coverage quality gates, OIDC ke... |
| [`claude`](skills/claude/SKILL.md) | A research-journal aesthetic printed on warm stone — authoritative, editorial, almost achromatic. Pages live on warm ivory parchment (never pure white), with near-black slate as the dominant ink. |
| [`claymorphism`](skills/claymorphism/SKILL.md) | Soft, rounded 3D-like shapes mimicking malleable clay with playful, puffy elements and colorful surfaces. |
| [`clean`](skills/clean/SKILL.md) | Simplicity-focused design with ample whitespace, legible typography, and a limited color palette to reduce visual clutter. |
| [`codex`](skills/codex/SKILL.md) | A radically minimal, blank-canvas interface built as a pure edge-to-edge surface, with almost no color and typography carrying the visual weight. Black serves as the only filled color, the only divider, and the sole s... |
| [`colorful`](skills/colorful/SKILL.md) | Vibrant, high-contrast palettes and gradients for engaging, memorable, and modern user experiences. |
| [`contemporary`](skills/contemporary/SKILL.md) | Current-era minimalist design with bento grids, dark mode support, and high-performance accessible layouts. |
| [`corporate`](skills/corporate/SKILL.md) | Professional, brand-aligned design with structured grids, minimalist layouts, and consistent enterprise patterns. |
| [`cosmic`](skills/cosmic/SKILL.md) | Futuristic sci-fi aesthetic with dark themes, vibrant neon accents, and immersive spatial elements. |
| [`coverage-analysis`](skills/coverage-analysis/SKILL.md) | Measure and improve test coverage meaningfully. Covers Istanbul/V8/coverage.py configuration, coverage gap analysis by risk, coverage-as-ratchet in CI (never let it decrease), PR coverage diff checks, mutation testing... |
| [`creative`](skills/creative/SKILL.md) | Playful, character-driven design with expressive typography and bold graphics for landing pages and creative projects. |
| [`design`](skills/design/SKILL.md) | Comprehensive design skill: brand identity, design tokens, UI styling, logo generation (55 styles, Gemini AI), corporate identity program (50 deliverables, CIP mockups), HTML presentations (Chart.js), banner design (2... |
| [`design-system`](skills/design-system/SKILL.md) | Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, component specs, strategic slide creation. Use for desig... |
| [`dialogue-systems`](skills/dialogue-systems/SKILL.md) | Build branching dialogue and narrative — a node/choice graph with conditions, variables, and localization hooks — and choose between authoring tools Ink and Yarn Spinner or a custom data-driven runner. Engine-neutral.... |
| [`dithered`](skills/dithered/SKILL.md) | Dot-pattern rendering technique that simulates shades with a limited palette for nostalgic, retro, high-contrast visuals. |
| [`doodle`](skills/doodle/SKILL.md) | Hand-drawn, sketch-like style with doodles, handwritten fonts, and imperfect lines for a playful, informal feel. |
| [`dramatic`](skills/dramatic/SKILL.md) | High-contrast, theatrical design with bold layouts, immersive visuals, and unconventional compositions that command attention. |
| [`editorial`](skills/editorial/SKILL.md) | Magazine-inspired editorial layout with refined serif typography, structured grids, and elegant reading experiences. |
| [`enterprise`](skills/enterprise/SKILL.md) | Dark-themed cloud-platform aesthetic with modular grids, glass-like panels, and strong data hierarchy for productivity dashboards. |
| [`expressive`](skills/expressive/SKILL.md) | Vibrant, personality-driven design with bold colors, playful graphics, and dynamic layouts that balance creativity with structure. |
| [`fantasy`](skills/fantasy/SKILL.md) | Game-inspired fantasy aesthetic with bold, premium visuals, rich color palettes, and immersive thematic elements. |
| [`fiction`](skills/fiction/SKILL.md) | A playful, energetic, cartoonesque interface inspired by friendly children's-book illustrations — warm cream backgrounds, big bold custom display typography, saturated brand color blocks, thick black outlines, generou... |
| [`flat`](skills/flat/SKILL.md) | Two-dimensional minimalist style with vibrant colors, clean typography, and no 3D effects for fast, user-friendly interfaces. |
| [`friendly`](skills/friendly/SKILL.md) | Approachable, intuitive design with rounded elements, ample whitespace, and soft pastel color palettes. |
| [`futuristic`](skills/futuristic/SKILL.md) | Forward-looking design with tech-inspired typography, modern layouts, and a sleek, innovation-driven aesthetic. |
| [`geometric`](skills/geometric/SKILL.md) | Geometric, structured design with clean typography, neutral colors, precise shapes, and intuitive layouts that stay out of the way. |
| [`glassmorphism`](skills/glassmorphism/SKILL.md) | Frosted glass effect with translucent layers, subtle blur, and luminous borders for depth and modern elegance. |
| [`gradient`](skills/gradient/SKILL.md) | Smooth color transitions and gradient-rich surfaces for modern, playful interfaces with visual depth. |
| [`immersive`](skills/immersive/SKILL.md) | An immersive, interactive, exhibit-style interface that blends storytelling, animation, and gamified elements to create a playful, experience-driven journey. The entire app sits on a single continuous brand-colored ca... |
| [`impeccable`](skills/impeccable/SKILL.md) | Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing p... |
| [`levels`](skills/levels/SKILL.md) | Conversion-focused design that removes friction and guides users toward action through clarity, trust, and speed. |
| [`lingo`](skills/lingo/SKILL.md) | Playful, minimal design with bright colors, rounded shapes, tactile 3D borders, and friendly illustrations for approachable interfaces. |
| [`material`](skills/material/SKILL.md) | Google's Material Design with layered surfaces, dynamic theming, built-in motion, and responsive cross-platform patterns. |
| [`matrix`](skills/matrix/SKILL.md) | A cyber-slick, dark-only Matrix-inspired interface defined by minimalist fashion, high-tech digital elements |
| [`minimal`](skills/minimal/SKILL.md) | Stripped-back design emphasizing whitespace, clean typography, and restrained color for maximum clarity and focus. |
| [`modern`](skills/modern/SKILL.md) | Contemporary editorial style with serif typography, minimal palettes, and clean layouts for polished digital products. |
| [`mono`](skills/mono/SKILL.md) | Monospace-driven, matrix-inspired design with high-contrast elements, compact density, and a hacker-chic aesthetic. |
| [`neobrutalism`](skills/neobrutalism/SKILL.md) | Modern take on brutalism with bold borders, vivid accent colors, and raw, high-contrast layouts on warm surfaces. |
| [`neon`](skills/neon/SKILL.md) | Electric neon glow effects with high-contrast color pairings for bold, attention-grabbing interfaces. |
| [`neumorphism`](skills/neumorphism/SKILL.md) | Soft, extruded UI elements with inner and outer shadows on monochromatic surfaces for a tactile, embedded look. |
| [`pacman`](skills/pacman/SKILL.md) | Retro arcade-inspired design with pixel fonts, dotted borders, playful high-contrast colors, and 8-bit game aesthetics. |
| [`paper`](skills/paper/SKILL.md) | Paper-textured, print-inspired design with minimal colors, clean serif/sans typography, and tactile surface qualities. |
| [`perspective`](skills/perspective/SKILL.md) | Spatial depth design with isometric views, vanishing points, and layered elements that guide attention through 3D-like realism. |
| [`power`](skills/power/SKILL.md) | High-end dark aesthetic with bold headings, monochromatic palette, and premium feel for premium brand experiences. |
| [`premium`](skills/premium/SKILL.md) | Apple-inspired premium aesthetic with precise spacing, modern typography, and a refined, polished visual language. |
| [`professional`](skills/professional/SKILL.md) | Polished, business-ready design with modern typography, structured layouts, and a trustworthy visual identity. |
| [`prototype-fast`](skills/prototype-fast/SKILL.md) | Build a playable prototype in about an hour to answer one question — is it fun? — with greybox primitives, a hard timebox, and explicit keep/kill criteria. Use when prototyping a mechanic, making a vertical slice or M... |
| [`pulse`](skills/pulse/SKILL.md) | Dynamic, vibrant style with thick borders, geometric shapes, high-contrast colors, and expressive typography conveying motion and vitality. |
| [`refined`](skills/refined/SKILL.md) | Carefully curated, modern minimal style with elegant serif typography and understated, sophisticated palettes. |
| [`retro`](skills/retro/SKILL.md) | Throwback design with vintage-inspired typography, high-contrast retro palettes, and nostalgic visual elements. |
| [`riso`](skills/riso/SKILL.md) | A playful, joyful, two-color risograph print aesthetic built on a single warm off-white paper surface running through every section |
| [`roku`](skills/roku/SKILL.md) | App dashboard with purple-themed aesthetic, top-bar navigation, card-based layouts, and developer-first workflows. |
| [`sega`](skills/sega/SKILL.md) | A playful, arcade-inspired interface for games — built on the VT323 pixel typeface, hard-edged 0px corners, chunky pill buttons that physically press into solid offset blocks |
| [`service-virtualization`](skills/service-virtualization/SKILL.md) | Decision framework for isolating every external dependency in a test suite: when to use in-process mocks, HTTP stubs (MSW, WireMock), record-replay, fault injection (Toxiproxy), or ephemeral real services (Testcontain... |
| [`shadcn`](skills/shadcn/SKILL.md) | Shadcn/ui-inspired design with minimal, clean components, monochrome palette, and utility-first patterns. |
| [`sketch`](skills/sketch/SKILL.md) | A friendly, hand-drawn sketch interface inspired by pencil illustrations on warm cream paper. Soft teal brand accents, hand-written display headings, rounded pill controls. |
| [`skeumorphism`](skills/skeumorphism/SKILL.md) | Real-world mimicry with textured surfaces, 3D effects, and familiar physical metaphors for intuitive digital interfaces. |
| [`sleek`](skills/sleek/SKILL.md) | Modern minimalist aesthetic with clean lines, intentional color palette, subtle interactions, and consistent spacing. |
| [`slides`](skills/slides/SKILL.md) | Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies. |
| [`spacious`](skills/spacious/SKILL.md) | Generous whitespace, consistent padding, and grid-based layouts for clean, readable, and breathing interfaces. |
| [`square`](skills/square/SKILL.md) | Graceful, refined aesthetic with delicate typography, minimal palettes, and polished layouts that exude sophistication. |
| [`stitch`](skills/stitch/SKILL.md) | Clean, high-contrast enterprise design for data-driven workflows with intuitive drag-and-drop patterns and structured layouts. |
| [`storytelling`](skills/storytelling/SKILL.md) | Narrative-driven design using visuals, copy, and interaction to guide users through engaging, emotionally resonant journeys. |
| [`supabase`](skills/supabase/SKILL.md) | Use when doing ANY task involving Supabase. Triggers: Supabase products (Database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues); client libraries and SSR integrations (supabase-js, @supabase/ssr) in... |
| [`supabase-postgres-best-practices`](skills/supabase-postgres-best-practices/SKILL.md) | Postgres best practices maintained by Supabase, for Postgres running anywhere. Load this skill BEFORE writing or changing anything that lives in a Postgres database: creating or altering tables and columns (including ... |
| [`terracotta`](skills/terracotta/SKILL.md) | A sun-baked, clay-toned editorial interface built on warm cream surfaces, ink-brown headlines set in a display serif, and a single terracotta accent. |
| [`test-case-management`](skills/test-case-management/SKILL.md) | Author and maintain MANUAL and hybrid test cases and suites in TestRail, Xray (Jira), Zephyr Scale, and Qase. Covers test-case anatomy (title, preconditions, steps, expected results, test data), suite/section organiza... |
| [`test-data-management`](skills/test-data-management/SKILL.md) | Create and manage test data with factory patterns, fixture strategies, data anonymization, and synthetic data generation. Covers Fishery (TypeScript), FactoryBot (Ruby), Factory Boy (Python), database seeding, cleanup... |
| [`test-environments`](skills/test-environments/SKILL.md) | Design environment strategy for testing across dev, CI, preview, staging, and production — Docker Compose test infrastructure, multi-stage Dockerfiles, seed-data lifecycle, per-PR preview environments, production pari... |
| [`test-migration`](skills/test-migration/SKILL.md) | Migrate a test suite from one framework to another, incrementally and without losing coverage. Covers Selenium→Playwright, Cypress→Playwright, Jest→Vitest, Mocha→Vitest, and Protractor→Playwright, with parallel CI run... |
| [`test-planning`](skills/test-planning/SKILL.md) | Build a single sprint or release test plan. Covers feature decomposition into testable scenarios, requirements-to-test coverage mapping, effort estimation by test type, prioritization matrices (risk × effort), resourc... |
| [`test-reliability`](skills/test-reliability/SKILL.md) | Runtime per-test healing with evidence: multi-attribute selector healing, environment-aware diagnosis, flake classification, quarantine management, and confidence-scored auto-repair. Goes beyond simple locator fallbac... |
| [`test-strategy`](skills/test-strategy/SKILL.md) | Produce a multi-quarter QA strategy document. Covers scope, risk-based prioritization, test levels (unit/integration/E2E), pyramid analysis, entry/exit criteria, quality KPIs, tool selection rationale, CI scaling leve... |
| [`test-suite-curation`](skills/test-suite-curation/SKILL.md) | Audit a whole regression suite and prune/restructure it with evidence: per-test coverage fingerprinting, AST near-duplicate clustering, CI-history mining for never-failing and flaky tests, prune decision rules (redund... |
| [`ui-styling`](skills/ui-styling/SKILL.md) | Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix UI + Tailwind), Tailwind CSS utility-first styling, and canvas-based visual designs. Use when building user interfaces, implementi... |
| [`ui-ux-pro-max`](skills/ui-ux-pro-max/SKILL.md) | UI/UX design intelligence for web and mobile. Searchable local database with 84 styles, 192 color palettes, 74 font pairings, 192 product types, 98 UX guidelines, 104 icon entries, 16 GSAP motion presets, and 25 chart... |
| [`vibrant`](skills/vibrant/SKILL.md) | Lively, colorful design with bold playful typography, warm accents, and dynamic visual energy. |
| [`vintage`](skills/vintage/SKILL.md) | 1950s-1990s nostalgia with skeuomorphic touches, grainy textures, retro color palettes, and pixel-style typography. |

### 🔹 Game Development (66 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`audio-design`](skills/audio-design/SKILL.md) | Implement game audio practice — bus/mixer architecture and gain in decibels, ducking (sidechain), adaptive/dynamic music via layering and re-sequencing, SFX variation, and beat synchronization. Engine-neutral. Use whe... |
| [`bevy-ecs`](skills/bevy-ecs/SKILL.md) | Structure a Bevy app around its Entity Component System: build the App with plugins, define Component/Resource types, write systems with Query/Res/Commands, filter and order systems, and use the Time resource for fram... |
| [`camera-systems`](skills/camera-systems/SKILL.md) | Build game cameras that feel good — 2D follow with a deadzone, look-ahead, smoothing, and level-bounds clamping; 3D third-person orbit with collision and first-person look; plus multi-target framing and a shake hook. ... |
| [`card-game`](skills/card-game/SKILL.md) | Build a card game: card data, deck/hand/discard zones, draw/shuffle/reshuffle, a turn structure, costs, and effect resolution. Use for a deckbuilder, TCG/CCG, or roguelike deckbuilder. |
| [`create-game-assets`](skills/create-game-assets/SKILL.md) | Plan, generate, source, normalize, and validate cohesive visual game assets. Use for art direction, style bibles, sprites, tilesets, backgrounds, UI art, icons, textures, concept art, or 3D asset briefs. |
| [`fps-shooter`](skills/fps-shooter/SKILL.md) | Build a first-person shooter: move+mouse-look controller, hitscan or projectile shooting, weapons, health, and enemy AI. Use for an FPS, or tuning aim feel, time-to-kill, recoil, or spread. |
| [`game-ai`](skills/game-ai/SKILL.md) | Design NPC and enemy decision-making with finite state machines, behavior trees, steering behaviors, and A* pathfinding — engine-neutral algorithms that pair with the detected engine's navigation API. Use when buildin... |
| [`game-feel`](skills/game-feel/SKILL.md) | Add "juice" and game feel that makes actions satisfying — screen shake, hit-stop/freeze frames, tweened/eased motion, squash & stretch, knockback, and layered audio-visual feedback — as engine-neutral techniques that ... |
| [`game-jam`](skills/game-jam/SKILL.md) | Plan and ship a game under a jam deadline: lock scope to the clock, schedule the hours, cut features, and submit on time. Use for a game jam (Ludum Dare, GMTK Jam, Global Game Jam), a 48-hour or weekend build, or scop... |
| [`game-ui-ux`](skills/game-ui-ux/SKILL.md) | Design and build game UI/UX — HUDs, menus, and overlays — that survive every screen: anchor- based responsive layout, resolution/aspect scaling and safe areas, keyboard/gamepad focus navigation, a screen/menu state st... |
| [`gamedev-router`](skills/gamedev-router/SKILL.md) | Routes any game-development request to the right specialized skill(s): it detects the engine (Godot, Unity, Unreal, Bevy, Phaser, PixiJS, three.js, LÖVE, pygame, Roblox) and the task, then reads the chosen skill befor... |
| [`godot-2d-movement`](skills/godot-2d-movement/SKILL.md) | Implement 2D kinematic character movement in Godot 4.7 with CharacterBody2D and move_and_slide(): platformer run/jump with gravity, top-down 8-direction motion, slope handling, and reading collisions. Use when coding ... |
| [`godot-3d-essentials`](skills/godot-3d-essentials/SKILL.md) | Set up a Godot 4.7 3D scene: Node3D transforms, Camera3D, lighting (DirectionalLight3D/OmniLight3D), WorldEnvironment for sky/ambient/tonemap/post, MeshInstance3D materials, and GridMap for tile-based 3D levels. Use w... |
| [`godot-animation`](skills/godot-animation/SKILL.md) | Animate in Godot 4.7 three ways: AnimationPlayer for keyframed clips (incl. call and signal tracks), AnimationTree with state machines and blend spaces for character animation, and Tween for short procedural/UI tweens... |
| [`godot-audio`](skills/godot-audio/SKILL.md) | Play and mix audio in Godot 4.7: AudioStreamPlayer (2D/3D variants), audio buses with volume/mute and effects, music vs SFX routing, db/linear volume, and precise sync-to-beat playback timing. Use when playing sounds ... |
| [`godot-csharp`](skills/godot-csharp/SKILL.md) | Use C#/.NET in Godot 4.7: partial classes extending nodes, the PascalCase lifecycle (_Ready/_Process/_PhysicsProcess), [Export] fields, [Signal] delegates as C# events, type-safe node lookup, and calling between C# an... |
| [`godot-export`](skills/godot-export/SKILL.md) | Export and build a Godot 4.7 project for distribution: install export templates, define export presets (Windows/macOS/Linux/Web/Android), run headless command-line exports for CI, and handle web (HTML5) COOP/COEP and ... |
| [`godot-gdscript`](skills/godot-gdscript/SKILL.md) | Write idiomatic GDScript for Godot 4.7: static typing, the node lifecycle (_ready/_process/_physics_process), @export/@onready/@tool annotations, signals, and await for asynchronous flow. Use when editing .gd scripts ... |
| [`godot-multiplayer`](skills/godot-multiplayer/SKILL.md) | Build networked games with Godot 4.7 high-level multiplayer: set up an ENetMultiplayerPeer server/client, define RPCs with the @rpc annotation (call via rpc()/rpc_id()), set per-node multiplayer authority, and replica... |
| [`godot-nodes-scenes`](skills/godot-nodes-scenes/SKILL.md) | Structure a Godot 4.7 project with the scene tree and node composition: build reusable scenes, instance PackedScenes at runtime, navigate the tree safely, and register autoload singletons. Use when designing .tscn sce... |
| [`godot-physics`](skills/godot-physics/SKILL.md) | Use Godot 4.7 physics bodies and detection in 2D and 3D: RigidBody, StaticBody, Area, and CharacterBody; collision layers vs masks; contact/overlap signals; and raycasts (RayCast nodes and direct space-state queries).... |
| [`godot-resources`](skills/godot-resources/SKILL.md) | Design data-driven Godot 4.7 games with custom Resource classes: define typed data with class_name + @export, save/load .tres/.res files, instance and duplicate resources, and load on demand with ResourceLoader (incl.... |
| [`godot-shaders`](skills/godot-shaders/SKILL.md) | Write Godot 4.7 shaders in the Godot Shading Language: canvas_item shaders for 2D and spatial shaders for 3D, with vertex/fragment functions, uniforms (source_color, hint_range), TIME/UV animation, and screen-reading ... |
| [`godot-signals-groups`](skills/godot-signals-groups/SKILL.md) | Build event-driven, decoupled Godot 4.7 gameplay with signals and node groups: declare and emit custom signals, connect with Callables (incl. bind/one-shot), and broadcast to many nodes via groups and call_group. Use ... |
| [`godot-tilemap`](skills/godot-tilemap/SKILL.md) | Build and edit tile-based 2D levels in Godot 4.7 with TileMapLayer and TileSet: paint layers, set up collision/navigation/custom-data on tiles, autotile with terrain sets, and read/write cells from code (set_cell, get... |
| [`godot-ui-control`](skills/godot-ui-control/SKILL.md) | Build Godot 4.7 user interfaces with Control nodes: anchors and offsets for responsive layout, Container nodes (VBox/HBox/Grid/Margin) for automatic arrangement, Theme resources for consistent styling, and keyboard/ga... |
| [`input-systems`](skills/input-systems/SKILL.md) | Architect game input — action mapping (abstracting keys into named actions), rebinding with conflict detection and persistence, multi-device support (keyboard, gamepad, touch), analog deadzones, and feel features like... |
| [`itch-publish`](skills/itch-publish/SKILL.md) | Publish and update a game on itch.io: create the project page and upload builds with the butler CLI (butler push) to named channels. Use for itch.io publishing, butler push, channel naming for Windows/macOS/Linux/HTML... |
| [`level-design`](skills/level-design/SKILL.md) | Design and build playable levels — the blockout/whitebox-to-playable workflow, player metrics and grid layout, pacing and flow (tension/rest curve), gating and the critical path, and encounter design. Engine-neutral p... |
| [`love2d-core`](skills/love2d-core/SKILL.md) | Structure and debug a LÖVE (Love2D) game in Lua: the love.load/update/draw loop, delta-time movement, input, and screen states. Use when building a LÖVE 11.x game (main.lua, conf.lua, .love). |
| [`phaser-arcade-physics`](skills/phaser-arcade-physics/SKILL.md) | Use Phaser 4 Arcade Physics: enable the world, give sprites bodies, set velocity/acceleration/gravity, and resolve collisions with colliders, overlaps, groups, and world bounds. Use when a Phaser game needs movement o... |
| [`phaser-core`](skills/phaser-core/SKILL.md) | Set up and debug a Phaser 4 game: the Game config, the Scene lifecycle (init/preload/create/update), the asset loader, cameras, and cross-scene communication. Use when building or debugging a Phaser game — when the us... |
| [`physics-tuning`](skills/physics-tuning/SKILL.md) | Tune game physics for stable, good-feeling motion — fixed vs variable timestep, render interpolation, mass/gravity/drag, continuous collision detection (CCD) to stop tunneling, fixing jitter, and collision layers/mask... |
| [`pixijs-rendering`](skills/pixijs-rendering/SKILL.md) | Build a PixiJS v8 render layer: create the async Application, load textures with Assets, compose the scene graph with Container and Sprite, drive the ticker loop, wire pointer events, and group draws with render group... |
| [`platformer`](skills/platformer/SKILL.md) | Build a 2D platformer: run/jump control with coyote time, jump buffering, and variable jump height, plus tiled levels and hazards. Use for a platformer or Mario/Celeste-like, or tuning jump feel. |
| [`procedural-gen`](skills/procedural-gen/SKILL.md) | Generate game content procedurally — seeded deterministic RNG, value/Perlin/ Simplex noise for terrain and heightmaps, grid dungeon generation (rooms + corridors, BSP, random walk), and weighted loot/drop tables. Engi... |
| [`puzzle`](skills/puzzle/SKILL.md) | Build a puzzle game: grid/board state, move input, rule-based resolution (match-3 cascades, sokoban pushes, tile logic), scoring, and undo. Use for a match-3, sokoban, or grid-logic puzzle. |
| [`pygame-core`](skills/pygame-core/SKILL.md) | Structure a pygame (pygame-ce) game in Python: the init/event/update/draw loop, delta-time movement, Surface/Rect blitting, keyboard/mouse input, and Sprite/Group management with collision. Use when building or debugg... |
| [`roblox-datastores`](skills/roblox-datastores/SKILL.md) | Persist player data in Roblox with DataStoreService: GetDataStore, GetAsync/ SetAsync/UpdateAsync/IncrementAsync wrapped in pcall, load-on-join and save-on-leave plus BindToClose, retries, and OrderedDataStore leaderb... |
| [`roblox-luau`](skills/roblox-luau/SKILL.md) | Script a Roblox experience in Luau: get services, create and parent Instances, connect events, run server Scripts vs client LocalScripts, and communicate across the client/server boundary with RemoteEvents/RemoteFunct... |
| [`roguelike`](skills/roguelike/SKILL.md) | Build a roguelike: turn-based grid movement, procedural dungeons, permadeath, field-of-view, and loot tables. Use for a roguelike/roguelite or turn-based grid dungeon crawler with procedural levels. |
| [`rpg`](skills/rpg/SKILL.md) | Build an RPG: stats and leveling, inventory and equipment, quests, branching dialogue, save/load, and combat. Use for an RPG/JRPG, or designing stat, inventory, quest, or combat systems. |
| [`save-systems`](skills/save-systems/SKILL.md) | Design save/load for game state — choosing what to serialize, file formats, save slots, atomic crash-safe writes, schema versioning and migration, and autosave. Engine-neutral. Use when the user mentions save system, ... |
| [`shader-programming`](skills/shader-programming/SKILL.md) | Write game shaders from cross-engine fundamentals — the vertex→fragment pipeline, coordinate spaces, UV math, and common 2D/3D effects (tint, UV scroll, dissolve, outline, fresnel rim, vignette) in GLSL with HLSL equi... |
| [`steam-publish`](skills/steam-publish/SKILL.md) | Publish or update a game on Steam with Steamworks and SteamPipe: configure depots and packages, upload builds with steamcmd, set a build live on a branch, and run the release checklists. Use for Steam publishing, app_... |
| [`survival-crafting`](skills/survival-crafting/SKILL.md) | Build a survival-crafting game: resource gathering, inventory, crafting and a tech tree, needs (hunger/thirst/temperature), and base building. Use for a survival or crafting/base-building game. |
| [`tetris`](skills/tetris/SKILL.md) | Classic block-game inspired design with playful colors, bold display fonts, and compact, high-energy layouts. |
| [`threejs-gltf-loading`](skills/threejs-gltf-loading/SKILL.md) | Load glTF/GLB models in three.js with GLTFLoader and play their skinned animations with AnimationMixer, including DRACO/Meshopt-compressed meshes and KTX2 textures. Use when importing 3D models into three.js — when th... |
| [`threejs-materials-lighting`](skills/threejs-materials-lighting/SKILL.md) | Light and shade a three.js scene: choose materials (MeshStandardMaterial PBR vs unlit MeshBasicMaterial), add ambient/hemisphere/directional/point/spot lights, turn on shadow maps, and use an environment map (IBL) for... |
| [`threejs-scene-setup`](skills/threejs-scene-setup/SKILL.md) | Stand up a three.js scene: import maps and the three/addons path, the Scene/PerspectiveCamera/WebGLRenderer trio, the setAnimationLoop render loop, responsive resize, and OrbitControls. Use when starting or debugging ... |
| [`tower-defense`](skills/tower-defense/SKILL.md) | Build a tower defense: enemies pathing along lanes, wave spawning, towers that auto-target and fire, an economy, and lives. Use for a tower-defense/wave-defense game, or balancing waves and economy. |
| [`unity-animation`](skills/unity-animation/SKILL.md) | Drive Unity 6.3 LTS character animation with Animator Controllers: states, transitions, parameters, blend trees, animation layers, and humanoid Avatar IK. Use when wiring an Animator, setting parameters from script (S... |
| [`unity-build-pipeline`](skills/unity-build-pipeline/SKILL.md) | Build and ship Unity 6.3 LTS players: build settings and scenes, player/quality settings, the IL2CPP vs Mono scripting backend, managed code stripping, scripted BuildPipeline.BuildPlayer, and CI/headless builds. Use w... |
| [`unity-csharp-scripting`](skills/unity-csharp-scripting/SKILL.md) | Write Unity 6.3 LTS C# gameplay scripts: the MonoBehaviour lifecycle (Awake/OnEnable/Start/Update/FixedUpdate/LateUpdate), GameObject and component access, coroutines, and Inspector serialization. Use when creating or... |
| [`unity-input-system`](skills/unity-input-system/SKILL.md) | Wire player input in Unity 6.3 LTS with the Input System package: Input Actions, action maps, the PlayerInput component, and reading values via callbacks or polling. Use when the project has a .inputactions asset or c... |
| [`unity-navmesh`](skills/unity-navmesh/SKILL.md) | Add AI navigation in Unity 6.3 LTS: bake a NavMesh with the AI Navigation package (NavMeshSurface), move agents with NavMeshAgent.SetDestination, and handle dynamic obstacles. Use when setting up pathfinding, making a... |
| [`unity-physics`](skills/unity-physics/SKILL.md) | Set up 3D physics in Unity 6.3 LTS: Rigidbody movement and forces, colliders, triggers vs collisions, layer-based collision, raycasts, and joints. Use when adding a Rigidbody, handling OnCollisionEnter/OnTriggerEnter,... |
| [`unity-scriptableobjects`](skills/unity-scriptableobjects/SKILL.md) | Architect Unity 6.3 LTS data and decoupling with ScriptableObjects: config/data assets, shared runtime variables, event channels, and runtime sets/registries. Use when designing data-driven systems, replacing singleto... |
| [`unity-tilemap-2d`](skills/unity-tilemap-2d/SKILL.md) | Build and script 2D tilemaps in Unity 6.3 LTS: the Grid + Tilemap components, the Tile Palette, tilemap colliders, rule tiles, and runtime SetTile/GetTile painting. Use when painting tile levels, adding a TilemapColli... |
| [`unreal-behavior-trees`](skills/unreal-behavior-trees/SKILL.md) | Build NPC AI in Unreal Engine 5 with Behavior Trees and Blackboards: composites (Selector/Sequence), tasks, decorators, services, and running the tree from an AIController. Use when creating enemy/NPC AI, BT_/BB_ asse... |
| [`unreal-blueprints`](skills/unreal-blueprints/SKILL.md) | Build Unreal Engine 5 gameplay with Blueprint visual scripting: Blueprint Classes, the Event Graph and Construction Script, variables/functions/macros, and Blueprint communication (Cast, Interfaces, Event Dispatchers)... |
| [`unreal-cpp-gameplay`](skills/unreal-cpp-gameplay/SKILL.md) | Write Unreal Engine 5 C++ gameplay code: the UCLASS/UPROPERTY/UFUNCTION reflection macros, the Gameplay Framework (GameMode, Pawn, Character, PlayerController, Actor components), and the module Build.cs. Use when writ... |
| [`unreal-enhanced-input`](skills/unreal-enhanced-input/SKILL.md) | Set up player input in Unreal Engine 5 with Enhanced Input: Input Actions, Input Mapping Contexts, modifiers and triggers, adding the mapping context, and binding actions by ETriggerEvent. Use when wiring movement/loo... |
| [`unreal-niagara`](skills/unreal-niagara/SKILL.md) | Create and control VFX in Unreal Engine 5 with Niagara: systems and emitters, modules and the spawn/update stages, exposed User parameters, and spawning or driving effects from Blueprints or C++. Use when building par... |
| [`unreal-packaging`](skills/unreal-packaging/SKILL.md) | Package and ship an Unreal Engine 5 project: the Platforms menu Package Project flow, build configurations (Development vs Shipping), cooking content, packaging settings and the Game Default Map, and command-line buil... |
| [`visual-novel`](skills/visual-novel/SKILL.md) | Build a visual novel: a branching script, character and background display, a text box with choices, save/load, backlog, and skip/auto. Use for a VN, dating sim, or branching story game. |

### 🔹 QA & Automated Testing (44 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`accessibility-testing`](skills/accessibility-testing/SKILL.md) | Test for WCAG 2.2 AA compliance with axe-core + Playwright, keyboard navigation audits, screen reader testing, ARIA pattern validation, and legal compliance mapping (ADA, EAA, Section 508). Automated tools catch 30-40... |
| [`agentic-browser-testing`](skills/agentic-browser-testing/SKILL.md) | Goal-driven E2E testing where a browser agent (Playwright MCP / computer-use) reads a natural-language goal and explores the app via the accessibility tree to assert outcomes — no pre-written script. Covers when inten... |
| [`ai-qa-review`](skills/ai-qa-review/SKILL.md) | Review EXISTING test code for quality, smells, and testability issues. Detects test smells across six dimensions — readability, reliability, diagnostic value, design, AI-generated, and coverage — analyzes testability ... |
| [`ai-system-testing`](skills/ai-system-testing/SKILL.md) | Test AI/LLM features that ship in your product. Covers prompt regression testing, response quality evaluation, tool-call validation, hallucination and RAG grounding checks, nondeterministic-output strategies, red-team... |
| [`analytics-tracking-testing`](skills/analytics-tracking-testing/SKILL.md) | Validate that analytics and marketing tracking fire CORRECTLY: GA4/GTM dataLayer events, Meta/TikTok/LinkedIn pixels, and ad-tech tags. Covers building a tracking plan as the contract, intercepting collect-endpoint be... |
| [`api-security-testing`](skills/api-security-testing/SKILL.md) | Security-test a REST, GraphQL, or gRPC API with Strix — autonomous agents that enumerate endpoints from an OpenAPI/GraphQL schema (or by crawling), then actually exploit the API-specific vulnerability classes in the O... |
| [`api-testing`](skills/api-testing/SKILL.md) | Test REST and GraphQL APIs with Playwright APIRequestContext, Supertest, or standalone HTTP clients. Covers schema validation with Zod 4/AJV, auth flow testing, CRUD lifecycle tests, error and header validation, pagin... |
| [`application-security-testing`](skills/application-security-testing/SKILL.md) | Application security testing (AppSec) across a whole product with Strix — decide which asset needs which test (source code, running web app, API, CI pipeline), run it, and turn the results into a ranked remediation pl... |
| [`bug-reproduction`](skills/bug-reproduction/SKILL.md) | Turn a vague bug report into a VERIFIED minimal reproduction and then a failing regression test, agent-driven end to end. Covers extracting the implicit repro from a thin report (env, build, steps, data), the reproduc... |
| [`compliance-testing`](skills/compliance-testing/SKILL.md) | Test for regulatory compliance: GDPR/CMP consent verification, Google Consent Mode v2, Global Privacy Control (GPC), CCPA/US state opt-out, EU AI Act Article 50 transparency, Better Ads Standards, and cookie-inventory... |
| [`contract-testing`](skills/contract-testing/SKILL.md) | Implement consumer-driven contract testing with Pact-JS (v16). Covers consumer test writing, broker-driven provider verification, Pact Broker setup, can-i-deploy as a deployment gate, webhook-triggered verification, p... |
| [`cross-browser-testing`](skills/cross-browser-testing/SKILL.md) | Design analytics-driven browser test matrices and execute cross-browser tests. Covers BrowserStack/Sauce Labs configuration, Playwright browser channels, common cross-browser CSS/JS divergences, a known-issues documen... |
| [`cypress-automation`](skills/cypress-automation/SKILL.md) | Build Cypress test suites in TypeScript: E2E tests, component tests, custom commands, cy.intercept network control, cy.session login, Cypress Cloud, and CI integration. Covers retry-ability, the command queue, cross-o... |
| [`database-testing`](skills/database-testing/SKILL.md) | Validate database integrity, test migrations forward and backward, verify schema constraints, manage seed data, detect migration drift, and identify query performance issues. Covers PostgreSQL, MySQL, MongoDB with Pri... |
| [`email-testing`](skills/email-testing/SKILL.md) | End-to-end testing of email-dependent flows — signup confirmation, password reset, magic-link login, OTP/MFA codes, and notification emails. Covers the capture-inbox decision tree (Mailpit, Mailosaur, MailSlurp, Ether... |
| [`exploratory-testing`](skills/exploratory-testing/SKILL.md) | Design and execute structured exploratory testing sessions. Covers Session-Based Test Management (SBTM), charter writing, heuristic-based exploration (HICCUPS, FEW HICCUPS), bug discovery patterns, note-taking templat... |
| [`managed-pentesting-with-strix`](skills/managed-pentesting-with-strix/SKILL.md) | Run a managed pentest of a web app, API, repository, or local workspace on the app.strix.ai platform with the 'strix cloud' CLI or REST API — no local Docker or LLM key needed. Safely review and upload local source, r... |
| [`mobile-testing`](skills/mobile-testing/SKILL.md) | Test native, React Native, hybrid, and Flutter mobile apps with Appium 3.x, Detox, Maestro, and Patrol. Covers device farm setup (BrowserStack, Sauce Labs), gesture simulation, deep link and cold-start testing, push n... |
| [`observability-driven-testing`](skills/observability-driven-testing/SKILL.md) | Use production telemetry as INPUT to design new tests. Covers OpenTelemetry integration with tests, trace-based assertions, log-informed test creation, production-error analysis for coverage gaps, and telemetry-driven... |
| [`owasp-top-10-testing`](skills/owasp-top-10-testing/SKILL.md) | Test an application against the OWASP Top 10 with Strix — autonomous AI agents that attempt real exploits for each category of the current OWASP Top 10:2025 (broken access control including SSRF, security misconfigura... |
| [`payment-testing`](skills/payment-testing/SKILL.md) | Test payment and checkout flows end to end against PSP sandboxes — Stripe first, with the general pattern for Adyen/Braintree/PayPal. Covers Stripe test-mode card numbers and their decline codes, the 3DS/SCA challenge... |
| [`penetration-testing-with-strix`](skills/penetration-testing-with-strix/SKILL.md) | Pentest a web app, API, codebase, repository, URL, domain, or IP with Strix — autonomous AI penetration testing that exploits and proves vulnerabilities (OWASP Top 10 and beyond — injection, XSS, SSRF, auth/access-con... |
| [`performance-testing`](skills/performance-testing/SKILL.md) | Test application performance with k6 load/stress/soak/spike scripts and k6 scenarios, Lighthouse CI for Web Vitals, and performance budgets as CI gates. Covers load profiles, custom metrics, bottleneck identification,... |
| [`playwright-automation`](skills/playwright-automation/SKILL.md) | Write production-grade Playwright tests in TypeScript: Page Object Model, fixtures, auto-waiting, user-facing locators, parallel execution, CI integration, sharding, and 2025-2026 feature awareness. Includes an explic... |
| [`qa-dashboard`](skills/qa-dashboard/SKILL.md) | Build and visualize QA dashboards and reports with Allure Report, Grafana, and ReportPortal. Covers test execution visualization, stakeholder-facing quality reports, trend/flakiness panels, release-readiness gates, al... |
| [`qa-do`](skills/qa-do/SKILL.md) | Routing skill of last resort. Takes a plain-language QA situation and names the right 1-2 skills to use and in what order. Use ONLY when the request does not match any other skill's trigger phrases. Use when: "which s... |
| [`qa-metrics`](skills/qa-metrics/SKILL.md) | Define, track, and act on QA metrics: test coverage percentage, flakiness rate, defect escape rate, MTTR, test execution time trends, automation ROI, quality gates, and SLAs for test suites. Includes metric formulas, ... |
| [`qa-project-bootstrap`](skills/qa-project-bootstrap/SKILL.md) | Onboard a new QA engineer to an existing codebase, or audit an existing test architecture. Produces a 30-day ramp plan: codebase orientation, framework walkthrough, test architecture audit, mentorship pairing, and fir... |
| [`qa-project-context`](skills/qa-project-context/SKILL.md) | Create and fill .agents/qa-project-context.md with the project's tech stack, test frameworks, CI/CD pipeline, environments, quality goals, risk areas, team structure, and conventions. This is the one file every other ... |
| [`qa-report-humanizer`](skills/qa-report-humanizer/SKILL.md) | Remove AI-generated patterns from QA reports, bug reports, test summaries, status updates, and quality communications. Detects and rewrites robotic test-result language, template-sounding status updates, inflated seve... |
| [`qa-start`](skills/qa-start/SKILL.md) | Sequenced launcher that bootstraps QA on a project with no QA in place. Chains qa-project-context → test-strategy → test-planning in one guided run, then points you at automation. Use when: "set up QA on a new project... |
| [`qa-test-planner`](skills/qa-test-planner/SKILL.md) | Generate comprehensive manual test cases in Markdown table format, perform form/field validation, test edge cases, check responsiveness, and output a ready-to-use QA checklist whenever a new frontend feature or web en... |
| [`quality-postmortem`](skills/quality-postmortem/SKILL.md) | Analyze escaped defects and test suite health through blameless postmortems. Covers bug pattern analysis, test suite health reviews, 5 Whys root cause analysis, process improvement cycles, and postmortem/retro meeting... |
| [`release-readiness`](skills/release-readiness/SKILL.md) | Validate release readiness with evidence-based go/no-go decisions. Covers go/no-go checklists, smoke test suite design, staged rollout validation, rollback criteria and procedures, and post-deployment verification. En... |
| [`risk-based-testing`](skills/risk-based-testing/SKILL.md) | Produce a risk matrix or heatmap that quantifies what could break by business impact × probability, runs failure mode analysis on the top items, and maps test coverage to risk zones. Includes stakeholder interview fra... |
| [`security-testing`](skills/security-testing/SKILL.md) | Test application security against OWASP Top 10 (2025) with automated CI tooling: OWASP ZAP (DAST), dependency/supply-chain scanning (OSV-Scanner, SBOM, provenance), Semgrep SAST, auth/session tests (JWT, OAuth, RBAC),... |
| [`selector-drift-recovery`](skills/selector-drift-recovery/SKILL.md) | Bulk-regenerate broken test selectors after a UI refactor or redesign. Detects drift between old and new DOM with an aria-snapshot diff, maps old locators to new equivalents using role-first + region scoping, validate... |
| [`shift-left-testing`](skills/shift-left-testing/SKILL.md) | Move quality earlier in the development lifecycle. Covers dev/QA pairing patterns, Three Amigos sessions, TDD facilitation (Red-Green-Refactor), PR review checklists for testability, and Definition of Done with qualit... |
| [`synthetic-monitoring`](skills/synthetic-monitoring/SKILL.md) | Scheduled probes that run CONTINUOUSLY after release. Covers probe design for critical user journeys, alerting integration, SLA validation, multi-region monitoring, and the boundary between QA and SRE. Use when: "synt... |
| [`testing-in-production`](skills/testing-in-production/SKILL.md) | Safe-release techniques DURING rollout: feature flags, progressive rollouts, canary analysis, guardrail metrics, production smoke tests, and synthetic users. Bridges QA and SRE practices. Use when: "feature flag testi... |
| [`unit-testing`](skills/unit-testing/SKILL.md) | Write effective unit tests with Jest, Vitest, or pytest. Covers the test-doubles taxonomy (stub/spy/mock/fake), Arrange-Act-Assert, coverage threshold configuration and CI gating, snapshot testing, fake timers, and mu... |
| [`visual-testing`](skills/visual-testing/SKILL.md) | Implement visual regression testing with Playwright screenshots, Chromatic, Percy, and Argos CI. Covers baseline management, diff threshold tuning, dynamic content masking, responsive viewport testing, and review/appr... |
| [`web-app-penetration-testing`](skills/web-app-penetration-testing/SKILL.md) | Pentest a web app or website end to end — black-box testing of a live URL, staging environment, or local dev server that finds and exploits real vulnerabilities (auth bypass, broken access control, IDOR, injection, XS... |
| [`webapp-testing`](skills/webapp-testing/SKILL.md) | Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs. |

### 🔹 Security & Penetration Testing (3 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`ci-security-scanning-with-strix`](skills/ci-security-scanning-with-strix/SKILL.md) | Add security scanning to CI/CD with Strix — GitHub Actions, GitLab CI, or any pipeline — so every pull request gets a diff-scoped AI pentest that blocks vulnerable code before it merges, with results as PR comments an... |
| [`find-security-vulnerabilities-in-code`](skills/find-security-vulnerabilities-in-code/SKILL.md) | Find security vulnerabilities in a codebase or repository with Strix — a white-box AI security review that reads your source, reasons about the actual data flow and authorization model, then exploits what it finds in ... |
| [`fix-security-vulnerabilities-with-strix`](skills/fix-security-vulnerabilities-with-strix/SKILL.md) | Fix security vulnerabilities found by a Strix pentest (open-source CLI or app.strix.ai cloud) — triage by severity, patch the root cause rather than the symptom, and re-run Strix to prove each fix actually closes the ... |

### 🔹 Architecture & Optimization (8 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`performance-optimization`](skills/performance-optimization/SKILL.md) | Find and fix game performance problems methodically — measure with the engine profiler first, reason about the frame-time budget, locate the CPU-vs-GPU bottleneck, then apply the right fix: object pooling, draw-call b... |
| [`ponytail`](skills/ponytail/SKILL.md) | Forces the laziest solution that actually works, simplest, shortest, most minimal. Channels a senior dev who has seen everything: question whether the task needs to exist at all (YAGNI), reach for the standard library... |
| [`ponytail-audit`](skills/ponytail-audit/SKILL.md) | Whole-repo audit for over-engineering. Like ponytail-review, but scans the entire codebase instead of a diff: a ranked list of what to delete, simplify, or replace with stdlib/native equivalents. Use when the user say... |
| [`ponytail-debt`](skills/ponytail-debt/SKILL.md) | Harvest every 'ponytail:' comment in the codebase into a debt ledger, so the deliberate shortcuts and deferrals ponytail leaves behind get tracked instead of rotting into "later means never". Use when the user says "p... |
| [`ponytail-gain`](skills/ponytail-gain/SKILL.md) | Show ponytail's measured impact as a compact scoreboard: less code, less cost, more speed, from the benchmark medians. One-shot display, not a persistent mode, and not a per-repo number. Trigger: /ponytail-gain, "pony... |
| [`ponytail-help`](skills/ponytail-help/SKILL.md) | Quick-reference card for all ponytail modes, skills, and commands. One-shot display, not a persistent mode. Trigger: /ponytail-help, "ponytail help", "what ponytail commands", "how do I use ponytail". |
| [`ponytail-review`](skills/ponytail-review/SKILL.md) | Code review focused exclusively on over-engineering. Finds what to delete: reinvented standard library, unneeded dependencies, speculative abstractions, dead flexibility. One line per finding: location, what to cut, w... |
| [`project-map-navigator`](skills/project-map-navigator/SKILL.md) | Immutable spatial navigation and architectural grounding for Command Code. Initializes, references, and synchronizes a real-time PROJECT_MAP.md at the project root to prevent context drift, hallucinated paths, and sta... |

### 🔹 Antigravity Core (5 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`agy-customizations`](skills/agy-customizations/SKILL.md) | Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priority, discovery mechanisms, and to guide the creation of skills, rules, plugins, ho... |
| [`antigravity_guide`](skills/antigravity_guide/SKILL.md) | Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizat... |
| [`generative_ui`](skills/generative_ui/SKILL.md) | How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, o... |
| [`migrate-workflows`](skills/migrate-workflows/SKILL.md) | Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files. |
| [`permissioned-github`](skills/permissioned-github/SKILL.md) | Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment. |

---

## 🛡️ Giấy phép & Đóng góp

Dự án được phân phối dưới giấy phép **[MIT License](LICENSE)**. Mọi đóng góp, bổ sung skill mới hoặc cải tiến nội dung xin vui lòng mở Pull Request hoặc Issue trên GitHub.

Tác giả: **[Hieu (hieuit095)](https://github.com/hieuit095)**
