<#
.SYNOPSIS
    Kiem tra va xac thuc tinh hop le cua tat ca cac skill trong thu muc skills/ theo chuan Antigravity.
.DESCRIPTION
    Script duyet qua tat ca cac thu muc con trong 'skills/', kiem tra su ton tai cua file SKILL.md,
    kiem tra tinh hop le cua YAML frontmatter (name, description), va in ra thong ke tong hop.
.EXAMPLE
    .\scripts\validate-skills.ps1
#>

[CmdletBinding()]
param(
    [string]$SkillsPath = (Join-Path $PSScriptRoot '..\skills')
)

$resolvedSkillsPath = (Resolve-Path $SkillsPath).Path
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   Antigravity Skills Validator" -ForegroundColor Cyan
Write-Host "   Target: $resolvedSkillsPath" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

if (-not (Test-Path $resolvedSkillsPath)) {
    Write-Error "Khong tim thay thu muc: $resolvedSkillsPath"
    exit 1
}

$skillDirs = Get-ChildItem -Path $resolvedSkillsPath -Directory | Sort-Object Name
$total = $skillDirs.Count
$passed = 0
$failed = 0
$errors = @()

foreach ($dir in $skillDirs) {
    $skillName = $dir.Name
    $skillMd = Join-Path $dir.FullName 'SKILL.md'

    if (-not (Test-Path $skillMd)) {
        $failed++
        $msg = "[$skillName] Thieu file SKILL.md"
        $errors += $msg
        Write-Host " [FAIL] $msg" -ForegroundColor Red
        continue
    }

    $content = Get-Content -Raw -Path $skillMd -Encoding UTF8
    if ($content -notmatch '(?s)^---\r?\n(.*?)\r?\n---') {
        $failed++
        $msg = "[$skillName] YAML frontmatter khong hop le hoac thieu dau phan cach '---'"
        $errors += $msg
        Write-Host " [FAIL] $msg" -ForegroundColor Red
        continue
    }

    $frontmatter = $matches[1]

    # Kiem tra truong name
    $hasName = ($frontmatter -match '(?m)^name\s*:\s*(.+)$')
    $nameVal = if ($hasName) { $matches[1].Trim() } else { $null }

    if (-not $hasName -or [string]::IsNullOrWhiteSpace($nameVal)) {
        $failed++
        $msg = "[$skillName] Thieu truong 'name' trong frontmatter"
        $errors += $msg
        Write-Host " [FAIL] $msg" -ForegroundColor Red
        continue
    }

    # Kiem tra truong description
    $hasDesc = ($frontmatter -match '(?m)^description\s*:\s*(.+)$')
    $descVal = if ($hasDesc) { $matches[1].Trim() } else { $null }

    if (-not $hasDesc -or [string]::IsNullOrWhiteSpace($descVal)) {
        $failed++
        $msg = "[$skillName] Thieu truong 'description' trong frontmatter"
        $errors += $msg
        Write-Host " [FAIL] $msg" -ForegroundColor Red
        continue
    }

    $passed++
}

Write-Host "`n----------------------------------------------------------" -ForegroundColor Cyan
Write-Host " Ket qua kiem tra:" -ForegroundColor Cyan
Write-Host " - Tong so skills: $total" -ForegroundColor White
Write-Host " - Hop le:         $passed" -ForegroundColor Green
Write-Host " - Loi:            $failed" -ForegroundColor $(if ($failed -eq 0) { 'Green' } else { 'Red' })
Write-Host "----------------------------------------------------------" -ForegroundColor Cyan

if ($failed -gt 0) {
    Write-Host "`nChi tiet loi:" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host " - $_" -ForegroundColor Yellow }
    exit 1
} else {
    Write-Host "`n[PASS] Tat ca $total skills deu dat chuan Antigravity 100%!" -ForegroundColor Green
    exit 0
}
