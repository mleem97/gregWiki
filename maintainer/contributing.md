Title: Contribution Guidelines
Path: /maintainer/contributing
Type: Internal / Advanced
Audience: maintainer, framework developer, advanced contributor
Summary: Mandatory checklists, build proof requirements, and quality gates for contributing to the gregFramework ecosystem.
Suggested Tags: maintenance, contributing, workflow, pr-rules, build-process
Related Pages: /maintainer/review-checklist, /maintainer/phase-2-code-standards
Split Recommendation: Keep as one page

# Contribution Guidelines

To maintain the stability and quality of the **gregFramework**, all contributors must follow these strict guidelines.

## 📋 Before ANY Push – Mandatory Checklist

### 1. Selective Build (Only Changed Repos) ✅ **REQUIRED**
Only build the repositories you have modified to keep build times efficient.

```powershell
cd gregFramework

# ONLY build repos you changed!
.\deploy\build-changed.ps1

# OR manual:
dotnet build gregMod.HexViewer/gregMod.HexViewer.csproj -c Release
dotnet build gregCore/gregCore.csproj -c Release  # Always include core if modified
```

**Successful Build Output Example:**
```
gregCore → Success
gregMod.YourMod → Success  
Build Time: 45s
Output: deploy/*.dll
```

### 2. Build Proof REQUIRED ✅
You **must** attach proof of a successful build to every Pull Request. This can be one of the following:
- **Terminal Screenshot**: Showing "Build succeeded" and timestamps.
- **Log File**: A `build-log.txt` containing the copy-pasted terminal output.
- **CI Status**: Green checkmarks from GitHub Actions.

### 3. Game Testing 🧪
Verify your changes within the game environment before submitting.

```powershell
# Copy the built DLL to your game folder
Copy-Item deploy\gregMod.YourMod.dll ..\..\Game\Mods\ -Force

# Test your changes:
# - Verify feature functionality (e.g., F1/F8 toggles)
# - Ensure no crashes or performance regressions (60 FPS maintained)
```

## 🚀 Branching Strategy

- **`main`**: Stable release branch.
- **`develop`**: Integration branch for next release.
- **`feature/*`**: New features.
- **`fix/*`**: Bug fixes.
- **`refactor/*`**: Non-functional improvements.

## 💻 Code Standards

- **Target**: .NET 6.0 (`net6.0`).
- **Language**: C# latest features.
- **Nullability**: Enable nullable reference types.
- **Usings**: Use implicit usings sparingly; prefer explicit declarations for clarity.
- **Style**: Adhere to `.editorconfig` rules. Use `dotnet format` if necessary.
- **Naming**: Follow existing naming conventions in the codebase (PascalCase for classes/methods, camelCase for local variables).

## 🚀 Pull Request Requirements

### Mandatory PR Checklist
Include this checklist in your PR description:

```markdown
## 🔨 Build Proof **[REQUIRED]**

**Terminal output or screenshot:**
[PASTE YOUR BUILD LOG HERE]

- **Built Repositories**: e.g., gregCore, gregMod.HexViewer
- **Build Time**: e.g., 23s
- **Errors/Warnings**: 0 errors, 0 warnings

## ✅ Verification
- [x] Local build-changed.ps1 passed
- [x] Game tested (Verified toggles/features)
- [x] Only changed repositories were rebuilt
- [x] deploy/*.dll artifacts created successfully
```

### Labels
Ensure your PR is labeled correctly:
- `build`: ✅ Build proof attached.
- `selective`: ✅ Only changed repos built.
- `test`: ✅ Game tested for the specific feature.

## 📚 Wiki Documentation Workflow

For contributors working specifically on the documentation (this wiki), the following workflow applies.

### Local Setup
```bash
cd gregWiki
pnpm install
pnpm dev
```

### Build & Preview
```bash
pnpm build
pnpm preview
```

## ⚡ Performance & Quality Gates

- **IL2CPP Size Check**: Mods should not exceed **250KB** unless they contain significant embedded assets.
- **Security Check**: Run `.\deploy\security-scan.ps1` to verify artifact integrity.
- **Documentation**: Update `README.md` if interfaces change. Add XML docs for public APIs.

---
*Updated with content from GameFramework/CONTRIBUTING.md*