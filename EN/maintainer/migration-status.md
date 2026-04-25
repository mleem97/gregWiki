Title: Migration Status (Phase 2)
Path: /maintainer/migration-status
Type: Internal / Advanced
Audience: maintainer, framework developer, advanced contributor
Summary: Current status of the gregFramework structural and technical migration, including Unity 6 compatibility and legacy cleanup.
Suggested Tags: maintenance, migration, unity-6, structural-changes, technical-debt
Related Pages: /maintainer/unity6-stability, /maintainer/phase-2-code-standards
Split Recommendation: Keep as one page

# Structural and Technical Migration Status

**Current Date: April 2026** (Migration Phase 2 Completed)

## 1. Structural Changes Implemented

- **Directory Renaming**:
  - `gregAddons/gregExtensions` renamed to `gregAddons/extensions`.
  - `gregAddons/gregMods` renamed to `gregAddons/mods`.
- **System-wide Refactoring**: All legacy prefixes (`Frika`, `FFM`, `FMF`) have been replaced system-wide with `gregCore` or `greg`.
- **MCP Server**: `gregAddons/mcp-server` has been restored with a modern `@modelcontextprotocol/sdk` base structure.

## 2. Unity 6 & Technical Migration

### Unity 6 Compatibility
- **Redundancy Cleanup**: `shared/gregFramework.props` has been cleaned. Redundant references to `UnityEngine.dll` were removed to prevent type conflicts with `UnityEngine.CoreModule.dll`.
- **Status**: Resolved (Duplicate type '<>O' errors fixed system-wide).

### Extension Unification
- **Standardization**: Unified extension projects (`AssetExporter`, `Multiplayer`, `PlayerModels`, `Sysadmin`, `WebUIBridge`).
- **Dependency Fixes**: Removed redundant `UnityEngine.dll` references to fix `BadImageFormatException`.
- **SDK Migration**: Migrated all extensions to the new SDK (`greg.Core`, `greg.Sdk`, `greg.Core.Plugins`).
- **Build Status**: 18/19 projects passing (`ResearchRack` outstanding).
- **Status**: Completed.

### TMPro Migration
- **Namespace Updates**: All namespaces moved from `Il2CppTMPro` to `TMPro` (via `Unity.TextMeshPro.dll` in Unity 6).
- **Global Usings**: `gregCore/src/GlobalUsings.cs` updated with global usings for `TextMeshProUGUI`, etc.
- **Verification**: All active UI components and SDK services migrated and verified.
- **Status**: Completed.

### Assembly-CSharp & Reference Cleanup
- **Project Cleanup**: `gregCore.csproj` cleaned; legacy `Il2CppTMPro` references removed.
- **Props Update**: `shared/gregFramework.props` now exclusively uses modernized Unity 6 modules.
- **Status**: Completed.

## 3. Fully Migrated Components

- **Active Mod Lines**: `IPAM` and `GregifyEmployees` are live in the `src` branch.
- **Unified Extensions**:
  - `gregExt.AssetExporter`
  - `gregExt.Multiplayer`
  - `gregExt.PlayerModels`
  - `gregExt.Sysadmin`
  - `gregExt.WebUIBridge`

## 4. Remaining Tasks

1. **Full Integration Test**: Complete a full build run of all projects using the new Unity 6 reference base.
2. **Feature Parity Finalization**: Final validation of `ConsoleInputGuard`, `LangCompatBridge`, and `PathRedirector` under the new naming scheme.
3. **Harmony v2.3 Check**: Final compatibility check with the latest Harmony version in `MelonLoader v0.7.2`.

## 5. Criteria for Legacy Deletion

- [x] Legacy functionality verifiable in active projects.
- [ ] Successful build and testing of target projects (In Progress).
- [x] No remaining references to legacy paths or `FMF`/`FFM` naming schemes.

---
*Status: Final Validation*
