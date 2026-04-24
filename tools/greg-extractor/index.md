Title: gregExtractor Overview
Path: /tools/greg-extractor/index
Type: Overview
Audience: mod developer, framework developer
Summary: Overview of gregExtractor, a dual-mode mod scaffolder and hook extraction tool for Data Center.
Suggested Tags: tools, extractor, scaffolder, harmony, il2cpp
Related Pages: /tools/greg-extractor/cli, /tools/greg-extractor/ui, /getting-started/quickstart
Split Recommendation: Create overview + children

# gregExtractor

`gregExtractor` is a dual-mode mod scaffolder for **Data Center** (Unity IL2CPP + MelonLoader). It streamlines the process of discovering game hooks and generating ready-to-use mod templates.

## Main Features

1. **Hook Discovery**: Statically reads IL2CPP dummy assemblies (`Assembly-CSharp.dll`) to classify and group game methods.
2. **Mod Scaffolding**: Generates ready-to-edit templates for Harmony patches, custom servers, UI, and more.
3. **Coverage Analysis**: Compares assembly methods against implemented patches to identify missing hooks.
4. **Framework Sync**: Synchronizes framework target files via hook diffs.

## Operational Modes

- **CLI Tool**: Powerful command-line interface for automation and advanced usage.
- **Desktop GUI**: User-friendly interface built with Avalonia for rapid prototyping and visualization.

## Quick Links

- [**CLI Usage Guide**](./cli)
- [**GUI Usage Guide**](./ui)
- [**Known Issues & Troubleshooting**](./known-issues)

## Installation & Build

To build the tool from source:

```powershell
cd gregExtractor
dotnet restore
dotnet build
```

---
[Next: CLI Usage Guide](./cli)
