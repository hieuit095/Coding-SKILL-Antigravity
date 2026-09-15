<#
.SYNOPSIS
    Cai dat cac Antigravity Skills vao Workspace hoac Global Configuration.
.DESCRIPTION
    Script cho phep copy hoac tao symlink cac skills tu repo vao:
    - Workspace: <ProjectRoot>\.agents\skills\
    - Global:    ~/.gemini/config/skills\
.PARAMETER Scope
    "Workspace" hoac "Global". Mac dinh: "Workspace".
.PARAMETER TargetPath
    Duong dan den project can cai dat (khi Scope = Workspace). Mac dinh: thu muc hien tai.
.PARAMETER Mode
    "Copy" hoac "Symlink". Mac dinh: "Copy".
.PARAMETER SkillNames
    Danh sach ten skill muon cai (tuy chon). Neu de trong se cai tat ca 233 skills.
.EXAMPLE
    .\scripts\install.ps1 -Scope Workspace -TargetPath "C:\Projects\my-app"
.EXAMPLE
    .\scripts\install.ps1 -Scope Global
#>

[CmdletBinding()]
param(
    [ValidateSet("Workspace", "Global")]
    [string]$Scope = "Workspace",

    [string]$TargetPath = (Get-Location).Path,

    [ValidateSet("Copy", "Symlink")]
    [string]$Mode = "Copy",

    [string[]]$SkillNames = @()
)

$sourceSkillsPath = Join-Path $PSScriptRoot '..\skills'
if (-not (Test-Path $sourceSkillsPath)) {
    Write-Error "Khong tim thay thu muc nguon skills: $sourceSkillsPath"
    exit 1
}

$destPath = ""
if ($Scope -eq "Workspace") {
    $destPath = Join-Path $TargetPath ".agents\skills"
} else {
    $homeDir = [Environment]::GetFolderPath("UserProfile")
    $destPath = Join-Path $homeDir ".gemini\config\skills"
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   Antigravity Skills Installer" -ForegroundColor Cyan
Write-Host "   Scope:       $Scope" -ForegroundColor White
Write-Host "   Destination: $destPath" -ForegroundColor White
Write-Host "   Mode:        $Mode" -ForegroundColor White
Write-Host "==========================================================" -ForegroundColor Cyan

if (-not (Test-Path $destPath)) {
    New-Item -ItemType Directory -Path $destPath -Force | Out-Null
    Write-Host "Da tao thu muc dich: $destPath" -ForegroundColor Green
}

$allSkills = Get-ChildItem -Path $sourceSkillsPath -Directory
if ($SkillNames.Count -gt 0) {
    $allSkills = $allSkills | Where-Object { $SkillNames -contains $_.Name }
}

$installedCount = 0

foreach ($skill in $allSkills) {
    $targetDir = Join-Path $destPath $skill.Name

    if ($Mode -eq "Symlink") {
        if (Test-Path $targetDir) {
            Remove-Item -Path $targetDir -Recurse -Force
        }
        New-Item -ItemType SymbolicLink -Path $targetDir -Target $skill.FullName -Force | Out-Null
    } else {
        if (-not (Test-Path $targetDir)) {
            New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
        }
        Copy-Item -Path (Join-Path $skill.FullName "*") -Destination $targetDir -Recurse -Force
    }

    $installedCount++
    Write-Host " + Installed: $($skill.Name)" -ForegroundColor Gray
}

Write-Host "`n✔ Hoan tat cai dat $installedCount skills vao $destPath!" -ForegroundColor Green
