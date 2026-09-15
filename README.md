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
| [`brainstorming`](skills/brainstorming/SKILL.md) | "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation." |
| [`dispatching-parallel-agents`](skills/dispatching-parallel-agents/SKILL.md) | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies |
| [`executing-plans`](skills/executing-plans/SKILL.md) | Use when you have a written implementation plan to execute in a separate session with review checkpoints |
| [`finishing-a-development-branch`](skills/finishing-a-development-branch/SKILL.md) | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work |
| [`karpathy-guidelines`](skills/karpathy-guidelines/SKILL.md) | Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, make surgical changes, surface assumptions, and define verifi... |
| [`receiving-code-review`](skills/receiving-code-review/SKILL.md) | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performat... |
| [`requesting-code-review`](skills/requesting-code-review/SKILL.md) | Use when completing tasks, implementing major features, or before merging to verify work meets requirements |
| [`skill-orchestrator`](skills/skill-orchestrator/SKILL.md) | > |
| [`subagent-driven-development`](skills/subagent-driven-development/SKILL.md) | Use when executing implementation plans with independent tasks in the current session |
| [`systematic-debugging`](skills/systematic-debugging/SKILL.md) | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes |
| [`test-driven-development`](skills/test-driven-development/SKILL.md) | Use when implementing any feature or bugfix, before writing implementation code |
| [`using-git-worktrees`](skills/using-git-worktrees/SKILL.md) | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback |
| [`using-superpowers`](skills/using-superpowers/SKILL.md) | Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions |
| [`verification-before-completion`](skills/verification-before-completion/SKILL.md) | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evide... |
| [`writing-plans`](skills/writing-plans/SKILL.md) | Use when you have a spec or requirements for a multi-step task, before touching code |
| [`writing-skills`](skills/writing-skills/SKILL.md) | Use when creating new skills, editing existing skills, or verifying skills work before deployment |

### 🔹 Frontend & Design Systems (91 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`agentic`](skills/agentic/SKILL.md) | Conversational AI-first interface with minimal controls, clear outcomes, and delegated task flows for agentic workflows. |
| [`ai-bug-triage`](skills/ai-bug-triage/SKILL.md) | Hybrid fingerprint + LLM pipeline for bug classification, deduplication, and ticket |
| [`ai-test-generation`](skills/ai-test-generation/SKILL.md) | Use AI to write NEW test code from specs, PRDs, user stories, code diffs, bug |
| [`ant`](skills/ant/SKILL.md) | Structured, enterprise-focused design system emphasizing clarity, consistency, and efficiency for data-dense web applications. |
| [`artistic`](skills/artistic/SKILL.md) | High-contrast, expressive style with creative typography and bold color choices for visually striking interfaces. |
| [`banner-design`](skills/banner-design/SKILL.md) | "Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with AI-generated visuals. Actions: design, create, generate banner. Platforms: Fac... |
| [`basic`](skills/basic/SKILL.md) | Print-inspired visual language for books, magazines, and reports with editorial grids and expressive typography. |
| [`bento`](skills/bento/SKILL.md) | Modular grid layout with card-like blocks, clear hierarchy, soft spacing, and subtle visual contrast for organized, scannable interfaces. |
| [`bold`](skills/bold/SKILL.md) | Strong visual presence with heavyweight typography, high-contrast colors, and commanding layouts. |
| [`brand`](skills/brand/SKILL.md) | Brand voice, visual identity, messaging frameworks, asset management, brand consistency. Activate for branded content, tone of voice, marketing assets, brand compliance, style guides. |
| [`brutalism`](skills/brutalism/SKILL.md) | Raw, anti-design aesthetic inspired by concrete architecture with unadorned elements, jarring layouts, and functional minimalism. |
| [`cafe`](skills/cafe/SKILL.md) | Cozy cafe-inspired interface with warm tones, soft typography, and clean layouts for a relaxed browsing experience. |
| [`chaos-engineering`](skills/chaos-engineering/SKILL.md) | Validate system resilience through controlled fault injection. Covers hypothesis-driven |
| [`ci-cd-integration`](skills/ci-cd-integration/SKILL.md) | Design CI/CD pipelines that run test suites. Covers GitHub Actions and GitLab CI |
| [`claude`](skills/claude/SKILL.md) | "A research-journal aesthetic printed on warm stone — authoritative, editorial, almost achromatic. Pages live on warm ivory parchment (never pure white), with near-black slate as the dominant ink." |
| [`claymorphism`](skills/claymorphism/SKILL.md) | Soft, rounded 3D-like shapes mimicking malleable clay with playful, puffy elements and colorful surfaces. |
| [`clean`](skills/clean/SKILL.md) | Simplicity-focused design with ample whitespace, legible typography, and a limited color palette to reduce visual clutter. |
| [`codex`](skills/codex/SKILL.md) | "A radically minimal, blank-canvas interface built as a pure edge-to-edge surface, with almost no color and typography carrying the visual weight. Black serves as the only filled color, the only di... |
| [`colorful`](skills/colorful/SKILL.md) | Vibrant, high-contrast palettes and gradients for engaging, memorable, and modern user experiences. |
| [`contemporary`](skills/contemporary/SKILL.md) | Current-era minimalist design with bento grids, dark mode support, and high-performance accessible layouts. |
| [`corporate`](skills/corporate/SKILL.md) | Professional, brand-aligned design with structured grids, minimalist layouts, and consistent enterprise patterns. |
| [`cosmic`](skills/cosmic/SKILL.md) | Futuristic sci-fi aesthetic with dark themes, vibrant neon accents, and immersive spatial elements. |
| [`coverage-analysis`](skills/coverage-analysis/SKILL.md) | Measure and improve test coverage meaningfully. Covers Istanbul/V8/coverage.py |
| [`creative`](skills/creative/SKILL.md) | Playful, character-driven design with expressive typography and bold graphics for landing pages and creative projects. |
| [`design`](skills/design/SKILL.md) | "Comprehensive design skill: brand identity, design tokens, UI styling, logo generation (55 styles, Gemini AI), corporate identity program (50 deliverables, CIP mockups), HTML presentations (Chart.... |
| [`design-system`](skills/design-system/SKILL.md) | Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, component specs, strategic slide cre... |
| [`dialogue-systems`](skills/dialogue-systems/SKILL.md) | > |
| [`dithered`](skills/dithered/SKILL.md) | Dot-pattern rendering technique that simulates shades with a limited palette for nostalgic, retro, high-contrast visuals. |
| [`doodle`](skills/doodle/SKILL.md) | Hand-drawn, sketch-like style with doodles, handwritten fonts, and imperfect lines for a playful, informal feel. |
| [`dramatic`](skills/dramatic/SKILL.md) | High-contrast, theatrical design with bold layouts, immersive visuals, and unconventional compositions that command attention. |
| [`editorial`](skills/editorial/SKILL.md) | Magazine-inspired editorial layout with refined serif typography, structured grids, and elegant reading experiences. |
| [`enterprise`](skills/enterprise/SKILL.md) | Dark-themed cloud-platform aesthetic with modular grids, glass-like panels, and strong data hierarchy for productivity dashboards. |
| [`expressive`](skills/expressive/SKILL.md) | Vibrant, personality-driven design with bold colors, playful graphics, and dynamic layouts that balance creativity with structure. |
| [`fantasy`](skills/fantasy/SKILL.md) | Game-inspired fantasy aesthetic with bold, premium visuals, rich color palettes, and immersive thematic elements. |
| [`fiction`](skills/fiction/SKILL.md) | "A playful, energetic, cartoonesque interface inspired by friendly children's-book illustrations — warm cream backgrounds, big bold custom display typography, saturated brand color blocks, thick bl... |
| [`flat`](skills/flat/SKILL.md) | Two-dimensional minimalist style with vibrant colors, clean typography, and no 3D effects for fast, user-friendly interfaces. |
| [`friendly`](skills/friendly/SKILL.md) | Approachable, intuitive design with rounded elements, ample whitespace, and soft pastel color palettes. |
| [`futuristic`](skills/futuristic/SKILL.md) | Forward-looking design with tech-inspired typography, modern layouts, and a sleek, innovation-driven aesthetic. |
| [`geometric`](skills/geometric/SKILL.md) | Geometric, structured design with clean typography, neutral colors, precise shapes, and intuitive layouts that stay out of the way. |
| [`glassmorphism`](skills/glassmorphism/SKILL.md) | Frosted glass effect with translucent layers, subtle blur, and luminous borders for depth and modern elegance. |
| [`gradient`](skills/gradient/SKILL.md) | Smooth color transitions and gradient-rich surfaces for modern, playful interfaces with visual depth. |
| [`immersive`](skills/immersive/SKILL.md) | "An immersive, interactive, exhibit-style interface that blends storytelling, animation, and gamified elements to create a playful, experience-driven journey. The entire app sits on a single contin... |
| [`impeccable`](skills/impeccable/SKILL.md) | Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers... |
| [`levels`](skills/levels/SKILL.md) | Conversion-focused design that removes friction and guides users toward action through clarity, trust, and speed. |
| [`lingo`](skills/lingo/SKILL.md) | Playful, minimal design with bright colors, rounded shapes, tactile 3D borders, and friendly illustrations for approachable interfaces. |
| [`material`](skills/material/SKILL.md) | Google's Material Design with layered surfaces, dynamic theming, built-in motion, and responsive cross-platform patterns. |
| [`matrix`](skills/matrix/SKILL.md) | "A cyber-slick, dark-only Matrix-inspired interface defined by minimalist fashion, high-tech digital elements" |
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
| [`prototype-fast`](skills/prototype-fast/SKILL.md) | > |
| [`pulse`](skills/pulse/SKILL.md) | Dynamic, vibrant style with thick borders, geometric shapes, high-contrast colors, and expressive typography conveying motion and vitality. |
| [`refined`](skills/refined/SKILL.md) | Carefully curated, modern minimal style with elegant serif typography and understated, sophisticated palettes. |
| [`retro`](skills/retro/SKILL.md) | Throwback design with vintage-inspired typography, high-contrast retro palettes, and nostalgic visual elements. |
| [`riso`](skills/riso/SKILL.md) | "A playful, joyful, two-color risograph print aesthetic built on a single warm off-white paper surface running through every section" |
| [`roku`](skills/roku/SKILL.md) | App dashboard with purple-themed aesthetic, top-bar navigation, card-based layouts, and developer-first workflows. |
| [`sega`](skills/sega/SKILL.md) | "A playful, arcade-inspired interface for games — built on the VT323 pixel typeface, hard-edged 0px corners, chunky pill buttons that physically press into solid offset blocks" |
| [`service-virtualization`](skills/service-virtualization/SKILL.md) | Decision framework for isolating every external dependency in a test suite: when to use |
| [`shadcn`](skills/shadcn/SKILL.md) | Shadcn/ui-inspired design with minimal, clean components, monochrome palette, and utility-first patterns. |
| [`sketch`](skills/sketch/SKILL.md) | "A friendly, hand-drawn sketch interface inspired by pencil illustrations on warm cream paper. Soft teal brand accents, hand-written display headings, rounded pill controls." |
| [`skeumorphism`](skills/skeumorphism/SKILL.md) | Real-world mimicry with textured surfaces, 3D effects, and familiar physical metaphors for intuitive digital interfaces. |
| [`sleek`](skills/sleek/SKILL.md) | Modern minimalist aesthetic with clean lines, intentional color palette, subtle interactions, and consistent spacing. |
| [`slides`](skills/slides/SKILL.md) | Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies. |
| [`spacious`](skills/spacious/SKILL.md) | Generous whitespace, consistent padding, and grid-based layouts for clean, readable, and breathing interfaces. |
| [`square`](skills/square/SKILL.md) | Graceful, refined aesthetic with delicate typography, minimal palettes, and polished layouts that exude sophistication. |
| [`stitch`](skills/stitch/SKILL.md) | Clean, high-contrast enterprise design for data-driven workflows with intuitive drag-and-drop patterns and structured layouts. |
| [`storytelling`](skills/storytelling/SKILL.md) | Narrative-driven design using visuals, copy, and interaction to guide users through engaging, emotionally resonant journeys. |
| [`supabase`](skills/supabase/SKILL.md) | "Use when doing ANY task involving Supabase. Triggers: Supabase products (Database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues); client libraries and SSR integrations (supabase-... |
| [`supabase-postgres-best-practices`](skills/supabase-postgres-best-practices/SKILL.md) | "Postgres best practices maintained by Supabase, for Postgres running anywhere. Load this skill BEFORE writing or changing anything that lives in a Postgres database: creating or altering tables an... |
| [`terracotta`](skills/terracotta/SKILL.md) | "A sun-baked, clay-toned editorial interface built on warm cream surfaces, ink-brown headlines set in a display serif, and a single terracotta accent." |
| [`test-case-management`](skills/test-case-management/SKILL.md) | Author and maintain MANUAL and hybrid test cases and suites in TestRail, Xray (Jira), |
| [`test-data-management`](skills/test-data-management/SKILL.md) | Create and manage test data with factory patterns, fixture strategies, data |
| [`test-environments`](skills/test-environments/SKILL.md) | Design environment strategy for testing across dev, CI, preview, staging, and production — |
| [`test-migration`](skills/test-migration/SKILL.md) | Migrate a test suite from one framework to another, incrementally and without losing coverage. |
| [`test-planning`](skills/test-planning/SKILL.md) | Build a single sprint or release test plan. Covers feature decomposition into |
| [`test-reliability`](skills/test-reliability/SKILL.md) | Runtime per-test healing with evidence: multi-attribute selector healing, |
| [`test-strategy`](skills/test-strategy/SKILL.md) | Produce a multi-quarter QA strategy document. Covers scope, risk-based |
| [`test-suite-curation`](skills/test-suite-curation/SKILL.md) | Audit a whole regression suite and prune/restructure it with evidence: per-test |
| [`ui-styling`](skills/ui-styling/SKILL.md) | Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix UI + Tailwind), Tailwind CSS utility-first styling, and canvas-based visual designs. Use when building user in... |
| [`ui-ux-pro-max`](skills/ui-ux-pro-max/SKILL.md) | "UI/UX design intelligence for web and mobile. Searchable local database with 84 styles, 192 color palettes, 74 font pairings, 192 product types, 98 UX guidelines, 104 icon entries, 16 GSAP motion ... |
| [`vibrant`](skills/vibrant/SKILL.md) | Lively, colorful design with bold playful typography, warm accents, and dynamic visual energy. |
| [`vintage`](skills/vintage/SKILL.md) | 1950s-1990s nostalgia with skeuomorphic touches, grainy textures, retro color palettes, and pixel-style typography. |

### 🔹 Game Development (66 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`audio-design`](skills/audio-design/SKILL.md) | > |
| [`bevy-ecs`](skills/bevy-ecs/SKILL.md) | > |
| [`camera-systems`](skills/camera-systems/SKILL.md) | > |
| [`card-game`](skills/card-game/SKILL.md) | > |
| [`create-game-assets`](skills/create-game-assets/SKILL.md) | Plan, generate, source, normalize, and validate cohesive visual game assets. Use for art direction, style bibles, sprites, tilesets, backgrounds, UI art, icons, textures, concept art, or 3D asset b... |
| [`fps-shooter`](skills/fps-shooter/SKILL.md) | > |
| [`game-ai`](skills/game-ai/SKILL.md) | > |
| [`game-feel`](skills/game-feel/SKILL.md) | > |
| [`game-jam`](skills/game-jam/SKILL.md) | > |
| [`game-ui-ux`](skills/game-ui-ux/SKILL.md) | > |
| [`gamedev-router`](skills/gamedev-router/SKILL.md) | > |
| [`godot-2d-movement`](skills/godot-2d-movement/SKILL.md) | > |
| [`godot-3d-essentials`](skills/godot-3d-essentials/SKILL.md) | > |
| [`godot-animation`](skills/godot-animation/SKILL.md) | > |
| [`godot-audio`](skills/godot-audio/SKILL.md) | > |
| [`godot-csharp`](skills/godot-csharp/SKILL.md) | > |
| [`godot-export`](skills/godot-export/SKILL.md) | > |
| [`godot-gdscript`](skills/godot-gdscript/SKILL.md) | > |
| [`godot-multiplayer`](skills/godot-multiplayer/SKILL.md) | > |
| [`godot-nodes-scenes`](skills/godot-nodes-scenes/SKILL.md) | > |
| [`godot-physics`](skills/godot-physics/SKILL.md) | > |
| [`godot-resources`](skills/godot-resources/SKILL.md) | > |
| [`godot-shaders`](skills/godot-shaders/SKILL.md) | > |
| [`godot-signals-groups`](skills/godot-signals-groups/SKILL.md) | > |
| [`godot-tilemap`](skills/godot-tilemap/SKILL.md) | > |
| [`godot-ui-control`](skills/godot-ui-control/SKILL.md) | > |
| [`input-systems`](skills/input-systems/SKILL.md) | > |
| [`itch-publish`](skills/itch-publish/SKILL.md) | > |
| [`level-design`](skills/level-design/SKILL.md) | > |
| [`love2d-core`](skills/love2d-core/SKILL.md) | > |
| [`phaser-arcade-physics`](skills/phaser-arcade-physics/SKILL.md) | > |
| [`phaser-core`](skills/phaser-core/SKILL.md) | > |
| [`physics-tuning`](skills/physics-tuning/SKILL.md) | > |
| [`pixijs-rendering`](skills/pixijs-rendering/SKILL.md) | > |
| [`platformer`](skills/platformer/SKILL.md) | > |
| [`procedural-gen`](skills/procedural-gen/SKILL.md) | > |
| [`puzzle`](skills/puzzle/SKILL.md) | > |
| [`pygame-core`](skills/pygame-core/SKILL.md) | > |
| [`roblox-datastores`](skills/roblox-datastores/SKILL.md) | > |
| [`roblox-luau`](skills/roblox-luau/SKILL.md) | > |
| [`roguelike`](skills/roguelike/SKILL.md) | > |
| [`rpg`](skills/rpg/SKILL.md) | > |
| [`save-systems`](skills/save-systems/SKILL.md) | > |
| [`shader-programming`](skills/shader-programming/SKILL.md) | > |
| [`steam-publish`](skills/steam-publish/SKILL.md) | > |
| [`survival-crafting`](skills/survival-crafting/SKILL.md) | > |
| [`tetris`](skills/tetris/SKILL.md) | Classic block-game inspired design with playful colors, bold display fonts, and compact, high-energy layouts. |
| [`threejs-gltf-loading`](skills/threejs-gltf-loading/SKILL.md) | > |
| [`threejs-materials-lighting`](skills/threejs-materials-lighting/SKILL.md) | > |
| [`threejs-scene-setup`](skills/threejs-scene-setup/SKILL.md) | > |
| [`tower-defense`](skills/tower-defense/SKILL.md) | > |
| [`unity-animation`](skills/unity-animation/SKILL.md) | > |
| [`unity-build-pipeline`](skills/unity-build-pipeline/SKILL.md) | > |
| [`unity-csharp-scripting`](skills/unity-csharp-scripting/SKILL.md) | > |
| [`unity-input-system`](skills/unity-input-system/SKILL.md) | > |
| [`unity-navmesh`](skills/unity-navmesh/SKILL.md) | > |
| [`unity-physics`](skills/unity-physics/SKILL.md) | > |
| [`unity-scriptableobjects`](skills/unity-scriptableobjects/SKILL.md) | > |
| [`unity-tilemap-2d`](skills/unity-tilemap-2d/SKILL.md) | > |
| [`unreal-behavior-trees`](skills/unreal-behavior-trees/SKILL.md) | > |
| [`unreal-blueprints`](skills/unreal-blueprints/SKILL.md) | > |
| [`unreal-cpp-gameplay`](skills/unreal-cpp-gameplay/SKILL.md) | > |
| [`unreal-enhanced-input`](skills/unreal-enhanced-input/SKILL.md) | > |
| [`unreal-niagara`](skills/unreal-niagara/SKILL.md) | > |
| [`unreal-packaging`](skills/unreal-packaging/SKILL.md) | > |
| [`visual-novel`](skills/visual-novel/SKILL.md) | > |

### 🔹 QA & Automated Testing (44 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`accessibility-testing`](skills/accessibility-testing/SKILL.md) | Test for WCAG 2.2 AA compliance with axe-core + Playwright, keyboard navigation audits, |
| [`agentic-browser-testing`](skills/agentic-browser-testing/SKILL.md) | Goal-driven E2E testing where a browser agent (Playwright MCP / computer-use) reads a |
| [`ai-qa-review`](skills/ai-qa-review/SKILL.md) | Review EXISTING test code for quality, smells, and testability issues. Detects |
| [`ai-system-testing`](skills/ai-system-testing/SKILL.md) | Test AI/LLM features that ship in your product. Covers prompt regression |
| [`analytics-tracking-testing`](skills/analytics-tracking-testing/SKILL.md) | Validate that analytics and marketing tracking fire CORRECTLY: GA4/GTM dataLayer events, |
| [`api-security-testing`](skills/api-security-testing/SKILL.md) | Security-test a REST, GraphQL, or gRPC API with Strix — autonomous agents that enumerate endpoints from an OpenAPI/GraphQL schema (or by crawling), then actually exploit the API-specific vulnerabil... |
| [`api-testing`](skills/api-testing/SKILL.md) | Test REST and GraphQL APIs with Playwright APIRequestContext, Supertest, or standalone |
| [`application-security-testing`](skills/application-security-testing/SKILL.md) | Application security testing (AppSec) across a whole product with Strix — decide which asset needs which test (source code, running web app, API, CI pipeline), run it, and turn the results into a r... |
| [`bug-reproduction`](skills/bug-reproduction/SKILL.md) | Turn a vague bug report into a VERIFIED minimal reproduction and then a failing |
| [`compliance-testing`](skills/compliance-testing/SKILL.md) | Test for regulatory compliance: GDPR/CMP consent verification, Google Consent |
| [`contract-testing`](skills/contract-testing/SKILL.md) | Implement consumer-driven contract testing with Pact-JS (v16). Covers consumer test |
| [`cross-browser-testing`](skills/cross-browser-testing/SKILL.md) | Design analytics-driven browser test matrices and execute cross-browser tests. |
| [`cypress-automation`](skills/cypress-automation/SKILL.md) | Build Cypress test suites in TypeScript: E2E tests, component tests, custom commands, |
| [`database-testing`](skills/database-testing/SKILL.md) | Validate database integrity, test migrations forward and backward, verify schema |
| [`email-testing`](skills/email-testing/SKILL.md) | End-to-end testing of email-dependent flows — signup confirmation, password reset, |
| [`exploratory-testing`](skills/exploratory-testing/SKILL.md) | Design and execute structured exploratory testing sessions. Covers Session-Based |
| [`managed-pentesting-with-strix`](skills/managed-pentesting-with-strix/SKILL.md) | Run a managed pentest of a web app, API, repository, or local workspace on the app.strix.ai platform with the 'strix cloud' CLI or REST API — no local Docker or LLM key needed. Safely review and up... |
| [`mobile-testing`](skills/mobile-testing/SKILL.md) | Test native, React Native, hybrid, and Flutter mobile apps with Appium 3.x, Detox, |
| [`observability-driven-testing`](skills/observability-driven-testing/SKILL.md) | Use production telemetry as INPUT to design new tests. Covers OpenTelemetry |
| [`owasp-top-10-testing`](skills/owasp-top-10-testing/SKILL.md) | Test an application against the OWASP Top 10 with Strix — autonomous AI agents that attempt real exploits for each category of the current OWASP Top 10:2025 (broken access control including SSRF, s... |
| [`payment-testing`](skills/payment-testing/SKILL.md) | Test payment and checkout flows end to end against PSP sandboxes — Stripe first, with |
| [`penetration-testing-with-strix`](skills/penetration-testing-with-strix/SKILL.md) | Pentest a web app, API, codebase, repository, URL, domain, or IP with Strix — autonomous AI penetration testing that exploits and proves vulnerabilities (OWASP Top 10 and beyond — injection, XSS, S... |
| [`performance-testing`](skills/performance-testing/SKILL.md) | Test application performance with k6 load/stress/soak/spike scripts and k6 scenarios, |
| [`playwright-automation`](skills/playwright-automation/SKILL.md) | Write production-grade Playwright tests in TypeScript: Page Object Model, |
| [`qa-dashboard`](skills/qa-dashboard/SKILL.md) | Build and visualize QA dashboards and reports with Allure Report, Grafana, and |
| [`qa-do`](skills/qa-do/SKILL.md) | Routing skill of last resort. Takes a plain-language QA situation and names the |
| [`qa-metrics`](skills/qa-metrics/SKILL.md) | Define, track, and act on QA metrics: test coverage percentage, flakiness rate, defect |
| [`qa-project-bootstrap`](skills/qa-project-bootstrap/SKILL.md) | Onboard a new QA engineer to an existing codebase, or audit an existing test |
| [`qa-project-context`](skills/qa-project-context/SKILL.md) | Create and fill .agents/qa-project-context.md with the project's tech stack, test |
| [`qa-report-humanizer`](skills/qa-report-humanizer/SKILL.md) | Remove AI-generated patterns from QA reports, bug reports, test summaries, |
| [`qa-start`](skills/qa-start/SKILL.md) | Sequenced launcher that bootstraps QA on a project with no QA in place. Chains |
| [`qa-test-planner`](skills/qa-test-planner/SKILL.md) | "Generate comprehensive manual test cases in Markdown table format, perform form/field validation, test edge cases, check responsiveness, and output a ready-to-use QA checklist whenever a new front... |
| [`quality-postmortem`](skills/quality-postmortem/SKILL.md) | Analyze escaped defects and test suite health through blameless postmortems. |
| [`release-readiness`](skills/release-readiness/SKILL.md) | Validate release readiness with evidence-based go/no-go decisions. Covers go/no-go |
| [`risk-based-testing`](skills/risk-based-testing/SKILL.md) | Produce a risk matrix or heatmap that quantifies what could break by business |
| [`security-testing`](skills/security-testing/SKILL.md) | Test application security against OWASP Top 10 (2025) with automated CI tooling: OWASP ZAP |
| [`selector-drift-recovery`](skills/selector-drift-recovery/SKILL.md) | Bulk-regenerate broken test selectors after a UI refactor or redesign. Detects |
| [`shift-left-testing`](skills/shift-left-testing/SKILL.md) | Move quality earlier in the development lifecycle. Covers dev/QA pairing patterns, |
| [`synthetic-monitoring`](skills/synthetic-monitoring/SKILL.md) | Scheduled probes that run CONTINUOUSLY after release. Covers probe design for |
| [`testing-in-production`](skills/testing-in-production/SKILL.md) | Safe-release techniques DURING rollout: feature flags, progressive rollouts, |
| [`unit-testing`](skills/unit-testing/SKILL.md) | Write effective unit tests with Jest, Vitest, or pytest. Covers the test-doubles |
| [`visual-testing`](skills/visual-testing/SKILL.md) | Implement visual regression testing with Playwright screenshots, Chromatic, Percy, |
| [`web-app-penetration-testing`](skills/web-app-penetration-testing/SKILL.md) | Pentest a web app or website end to end — black-box testing of a live URL, staging environment, or local dev server that finds and exploits real vulnerabilities (auth bypass, broken access control,... |
| [`webapp-testing`](skills/webapp-testing/SKILL.md) | Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browse... |

### 🔹 Security & Penetration Testing (3 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`ci-security-scanning-with-strix`](skills/ci-security-scanning-with-strix/SKILL.md) | Add security scanning to CI/CD with Strix — GitHub Actions, GitLab CI, or any pipeline — so every pull request gets a diff-scoped AI pentest that blocks vulnerable code before it merges, with resul... |
| [`find-security-vulnerabilities-in-code`](skills/find-security-vulnerabilities-in-code/SKILL.md) | Find security vulnerabilities in a codebase or repository with Strix — a white-box AI security review that reads your source, reasons about the actual data flow and authorization model, then exploi... |
| [`fix-security-vulnerabilities-with-strix`](skills/fix-security-vulnerabilities-with-strix/SKILL.md) | Fix security vulnerabilities found by a Strix pentest (open-source CLI or app.strix.ai cloud) — triage by severity, patch the root cause rather than the symptom, and re-run Strix to prove each fix ... |

### 🔹 Architecture & Optimization (8 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`performance-optimization`](skills/performance-optimization/SKILL.md) | > |
| [`ponytail`](skills/ponytail/SKILL.md) | > |
| [`ponytail-audit`](skills/ponytail-audit/SKILL.md) | > |
| [`ponytail-debt`](skills/ponytail-debt/SKILL.md) | > |
| [`ponytail-gain`](skills/ponytail-gain/SKILL.md) | > |
| [`ponytail-help`](skills/ponytail-help/SKILL.md) | > |
| [`ponytail-review`](skills/ponytail-review/SKILL.md) | > |
| [`project-map-navigator`](skills/project-map-navigator/SKILL.md) | Immutable spatial navigation and architectural grounding for Command Code. Initializes, references, and synchronizes a real-time PROJECT_MAP.md at the project root to prevent context drift, halluci... |

### 🔹 Antigravity Core (5 skills)

| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |
| :--- | :--- |
| [`agy-customizations`](skills/agy-customizations/SKILL.md) | Comprehensive guide and reference for the Antigravity Customization System. |
| [`antigravity_guide`](skills/antigravity_guide/SKILL.md) | Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybind... |
| [`generative_ui`](skills/generative_ui/SKILL.md) | How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educati... |
| [`migrate-workflows`](skills/migrate-workflows/SKILL.md) | Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files. |
| [`permissioned-github`](skills/permissioned-github/SKILL.md) | Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment. |

---

## 🛡️ Giấy phép & Đóng góp

Dự án được phân phối dưới giấy phép **[MIT License](LICENSE)**. Mọi đóng góp, bổ sung skill mới hoặc cải tiến nội dung xin vui lòng mở Pull Request hoặc Issue trên GitHub.

Tác giả: **[Hieu (hieuit095)](https://github.com/hieuit095)**
