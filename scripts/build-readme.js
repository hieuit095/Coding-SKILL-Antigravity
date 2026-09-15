const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const skillsDir = path.join(repoRoot, 'skills');

const dirs = fs.readdirSync(skillsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort();

const parsedSkills = [];

for (const name of dirs) {
  const skillMdPath = path.join(skillsDir, name, 'SKILL.md');
  if (!fs.existsSync(skillMdPath)) continue;
  const content = fs.readFileSync(skillMdPath, 'utf8');

  let desc = '';
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (match) {
    const fm = match[1];
    const descMatch = fm.match(/^description\s*:\s*(?:>-\s*|\|\s*)?([\s\S]*?)(?=\r?\n[a-z0-9_-]+\s*:|$)/m);
    if (descMatch) {
      desc = descMatch[1].trim().replace(/\r?\n\s*/g, ' ');
    }
  }
  if (!desc) {
    desc = 'Antigravity procedural skill for ' + name + '.';
  }

  let category = 'General';
  if (/^(godot|unity|unreal|phaser|bevy|love2d|threejs|pygame|roblox|card-game|fps-shooter|game-|gamedev|level-design|platformer|procedural-gen|puzzle|roguelike|rpg|save-systems|shader-programming|steam-publish|itch-publish|survival-crafting|tetris|tower-defense|visual-novel|create-game-assets|physics-tuning|pixijs|camera-systems|audio-design|input-systems)/.test(name)) {
    category = 'Game Development';
  } else if (/(testing|cypress|playwright|qa-|audit-record|synthetic|recovery|drift|bug-reproduction|postmortem|quality|release-readiness)/.test(name)) {
    category = 'QA & Automated Testing';
  } else if (/(security|strix|pentest|owasp|vulnerabilities)/.test(name)) {
    category = 'Security & Penetration Testing';
  } else if (/^(ponytail|project-map-navigator|performance-optimization)/.test(name)) {
    category = 'Architecture & Optimization';
  } else if (/^(brainstorming|dispatching|executing-plans|finishing|receiving-code-review|requesting-code-review|subagent|systematic-debugging|test-driven-development|using-git-worktrees|using-superpowers|verification-before-completion|writing-plans|writing-skills|skill-orchestrator|karpathy-guidelines)/.test(name)) {
    category = 'Superpowers & Workflow';
  } else if (/^(agy-|antigravity|generative_ui|migrate-workflows|permissioned-github)/.test(name)) {
    category = 'Antigravity Core';
  } else {
    category = 'Frontend & Design Systems';
  }

  parsedSkills.push({
    name,
    desc,
    category,
    relPath: 'skills/' + name + '/SKILL.md'
  });
}

const categories = [
  'Superpowers & Workflow',
  'Frontend & Design Systems',
  'Game Development',
  'QA & Automated Testing',
  'Security & Penetration Testing',
  'Architecture & Optimization',
  'Antigravity Core'
];

let md = '# 🚀 Coding-SKILL-Antigravity\n\n';
md += '[![Antigravity Compatible](https://img.shields.io/badge/Antigravity-100%25%20Compatible-blue.svg)](#) ';
md += '[![Skills Count](https://img.shields.io/badge/Skills-' + parsedSkills.length + '%20Total-brightgreen.svg)](#) ';
md += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) ';
md += '[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-success.svg)](#)\n\n';
md += 'Bộ sưu tập toàn diện gồm **' + parsedSkills.length + ' chuyên môn hóa kỹ năng (Skills)** chuẩn hóa 100% theo quy cách kỹ thuật của **Google Antigravity AI IDE / Antigravity CLI**.\n\n';
md += 'Mỗi skill được đóng gói độc lập theo cấu trúc chuẩn, hỗ trợ cơ chế **Progressive Disclosure** (tiết kiệm token context) và tích hợp sẵn quy trình runbook, best practices từ thực tế kỹ thuật phần mềm.\n\n';
md += '---\n\n';
md += '## 📦 Cấu trúc chuẩn của một Antigravity Skill\n\n';
md += 'Theo [Antigravity Customization Guidelines](skills/agy-customizations/SKILL.md), mỗi kỹ năng được tổ chức như sau:\n\n';
md += '```text\n';
md += 'skills/<skill_name>/\n';
md += '├── SKILL.md          # Bắt buộc: Chứa YAML frontmatter (name, description) & hướng dẫn workflow\n';
md += '├── references/       # Tùy chọn: Tài liệu tham khảo kỹ thuật, checklists, runbooks sâu\n';
md += '├── scripts/          # Tùy chọn: Scripts tự động hóa, kiểm tra, helper utilities\n';
md += '├── examples/         # Tùy chọn: Dự án mẫu, boilerplate, code snippets\n';
md += '└── resources/        # Tùy chọn: Templates, sơ đồ kiến trúc, assets\n';
md += '```\n\n';
md += '---\n\n';
md += '## ⚡ Cài đặt nhanh (Quick Installation)\n\n';
md += '### Cách 1: Cài đặt vào Workspace dự án (`.agents/skills/`)\n\n';
md += 'Sử dụng script cài đặt tự động đi kèm trong thư mục `scripts/`:\n\n';
md += '```powershell\n';
md += '# Cài đặt toàn bộ skills vào dự án của bạn\n';
md += '.\\scripts\\install.ps1 -Scope Workspace -TargetPath "C:\\Path\\To\\YourProject"\n';
md += '```\n\n';
md += '### Cách 2: Cài đặt toàn cục (Global cho mọi Workspace Antigravity)\n\n';
md += '```powershell\n';
md += '# Cài đặt vào ~/.gemini/config/skills/ trên máy tính\n';
md += '.\\scripts\\install.ps1 -Scope Global\n';
md += '```\n\n';
md += '### Cách 3: Tự động kiểm tra tính hợp lệ của toàn bộ Skills\n\n';
md += '```powershell\n';
md += '.\\scripts\\validate-skills.ps1\n';
md += '```\n\n';
md += '---\n\n';
md += '## 📚 Danh mục 233 Skills theo từng chuyên ngành\n\n';

for (const cat of categories) {
  const catSkills = parsedSkills.filter(s => s.category === cat);
  md += '### 🔹 ' + cat + ' (' + catSkills.length + ' skills)\n\n';
  md += '| Tên Skill | Mô tả chức năng & Ngữ cảnh kích hoạt |\n';
  md += '| :--- | :--- |\n';
  for (const item of catSkills) {
    let cleanDesc = item.desc.replace(/\|/g, '-').replace(/`/g, "'");
    if (cleanDesc.length > 200) {
      cleanDesc = cleanDesc.substring(0, 197) + '...';
    }
    md += '| [`' + item.name + '`](' + item.relPath + ') | ' + cleanDesc + ' |\n';
  }
  md += '\n';
}

md += '---\n\n';
md += '## 🛡️ Giấy phép & Đóng góp\n\n';
md += 'Dự án được phân phối dưới giấy phép **[MIT License](LICENSE)**. Mọi đóng góp, bổ sung skill mới hoặc cải tiến nội dung xin vui lòng mở Pull Request hoặc Issue trên GitHub.\n\n';
md += 'Tác giả: **[Hieu (hieuit095)](https://github.com/hieuit095)**\n';

fs.writeFileSync(path.join(repoRoot, 'README.md'), md, 'utf8');
console.log('Successfully created README.md with ' + parsedSkills.length + ' skills!');