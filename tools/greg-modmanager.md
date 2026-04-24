Title: gregModmanager Overview
Path: /tools/greg-modmanager
Type: Overview
Audience: new user, mod developer, admin/operator
Summary: Overview of gregModmanager, the desktop application for browsing, installing, and publishing gregFramework mods.
Suggested Tags: tools, modmanager, desktop, distribution, maui
Related Pages: /getting-started/installation, /tools/greg-extractor/index
Split Recommendation: Keep as one page

# gregModmanager

`gregModmanager` is the official desktop management client for the **gregFramework** ecosystem. It provides a user-friendly interface for browsing, installing, and publishing mods for *Data Center*.

## Overview

The ModManager acts as a bridge between the core framework and the end user. It handles the complexities of mod distribution, dependency management, and versioning.

- **Architecture Layer**: MAUI Desktop Application.
- **Primary Role**: User-facing management and distribution tooling.
- **Integration**: Works in tandem with `gregCore` and the `gregStore` API.

## Key Features

- **Mod Discovery**: Browse the official `gregStore` for new content and updates.
- **One-Click Installation**: Automatically download and place mods in the correct directories.
- **Publisher Tools**: Package and upload your own mods directly to the ecosystem.
- **Dependency Resolution**: Ensure all required framework components and libraries are installed.

## Getting Started

To build the ModManager from source:

```powershell
cd gregModmanager
dotnet build "GregModmanager.csproj" -c Release
```

## Credits & Contributions

- **gregCore** incorporates architectural elements from [DataCenter-RustBridge](https://github.com/Joniii11/DataCenter-RustBridge).
- **gregModmanager** utilizes mod-loading logic derived from [DataCenter-ModLoader](https://github.com/ASavageSwan/-DataCenter-ModLoader).

### Join the Team!
We are always looking for contributors to help improve the framework. Whether you are a coder, 3D artist, documentation writer, or playtester, you are welcome! Join our community on **Discord** or visit [gregframework.eu](https://gregframework.eu).

---
*© 2026 teamGreg | [gregframework.eu](https://gregframework.eu)*
