Title: LangCompatBridge Overview
Path: /guides/official-mods/lang-compat-bridge
Type: Reference
Audience: mod developer, framework developer
Summary: Technical reference for the LangCompatBridge module, providing legacy compatibility for gregCore mods.
Suggested Tags: mods, compatibility, legacy, bridge, building
Related Pages: /getting-started/architecture
Split Recommendation: Keep as one page

# gregMod.LangCompatBridge – Module Documentation

`gregMod.LangCompatBridge` is a standalone module within the **gregFramework** workspace designed to provide runtime compatibility for legacy mod components. This page serves as a technical reference for building, runtime execution, and integration.

## Project Metadata
- **Project Name**: `gregMod.LangCompatBridge`
- **Target Framework**: .NET 6.0
- **Primary Dependency**: `gregCore`

## Build & Artifacts

### Local Build
```powershell
Set-Location "C:\Users\marvi\source\repos\gregFramework\Melons\gregMod.LangCompatBridge"
dotnet build
```

### Expected Artifact
- Located in `bin/Debug/net6.0/` or `bin/Release/net6.0/` as `gregMod.LangCompatBridge.dll`.

## Integration with gregCore / MelonLoader
- The module is treated as a separate mod/plugin component.
- It utilizes APIs from `gregCore` via project references or runtime DLLs.
- Deployment follows standard mod paths (e.g., `Data Center/Mods/`).

## Maintenance
- **Compatibility**: Test against `gregCore` API changes.
- **Synchronization**: Ensure this documentation stays aligned with the module's `README.md`.
- **Changelog**: Document all breaking changes in the central release notes.

## Maintenance Checklist
- [ ] Document primary features.
- [ ] Document configuration options.
- [ ] Verify dependencies and versions.
- [ ] Test installation and update paths.
