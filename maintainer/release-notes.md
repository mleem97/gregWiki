Title: Release Notes & Changelog
Path: /maintainer/release-notes
Type: Release Notes
Audience: mod developer, framework developer, maintainer
Summary: Historical changelog and detailed release notes for gregFramework versions.
Suggested Tags: release-notes, changelog, versions, updates
Related Pages: /maintainer/migration-status, /guides/migration/v1-0-0-35
Split Recommendation: Keep as one page

# Release Notes & Changelog

## v1.0.0.35 (The Dashboard Revolution) – 2026-04-20

### Overview
Version 1.0.0.35 marks a major architectural shift from IMGUI to a high-performance **UGUI-based framework**. This update ensures full stability for Unity 6 (IL2CPP) and introduces the **Vibrant Dark Mode** design system.

### Key Features
- **🎨 GregUI (UGUI Framework)**:
  - Replaced all OnGUI windows with native persistent UGUI components to solve "Method unstripping failed" crashes.
  - Applied the 'Luminescent Architect' aesthetic (#00bfa5 Teal, #10eade Cyan).
  - Procedural Assets: Rounded corners and borders are generated at runtime.
  - Virtualized Lists: New `AddSearchableList` API for rendering 10,000+ items.
- **🏗️ Furniture Placement System**:
  - Implemented 0.5m grid snapping (1sq=4sq logic).
  - Automatic surface alignment for Wall and Floor mounting.
  - Ghost Preview: Real-time semi-transparent Teal preview before placement.
- **🤖 AutoRackBuilder**:
  - Centralized dashboard (F4) for server room management.
  - Batch Actions: Added 'Open All Walls' and 'Batch Placement' routines.
- **🌍 Polyglot SDK & API**:
  - Unified Bridge: New `greg.Sdk.GregPublicAPI` for Lua, Python, JS, and Rust.
  - Global `GameEventBus` for reactive UI updates (Coins, XP, Reputation).
  - Legacy Support: Restored `gregEventDispatcher` and stabilized `gregNativeEventHooks`.

### Stability & Maintenance
- **Unity 6 IL2CPP Fix**: Migrated away from managed IMGUI delegates to prevent stripping-related crashes.
- **Cache Policy**: Mandatory deletion of `MelonLoader/Il2CppAssemblies` required after this update to refresh metadata.

---

## v1.0.0.7 (gregMods Collection) – 2026-04-10

### Overview
Synchronized the **gregMods** collection with the latest **gregCore v1.0.0.7** standards.

### Key Changes
- **🤖 SysAdmin -> greg.AutoEmployees**: Flagship automation mod completely refactored and integrated into the `greg` namespace.
- **🧬 Namespace Alignment**: All mods updated to unified `greg.*` namespaces for performance and modularity.
- **💰 Economy Ready**: Completed preparations for Phase 5 integration.

---

## [0.1.0] – 2026-04-18

### Added
- Initial version of the **gregCore** framework.
- Support for `GregHookBus`, Services, and Registries.
- NuGet package structure including multi-targeting, symbol packages, and GitHub Actions CI/CD.

### Changed
- Updated project structure for improved modularity.

### Removed
- N/A
