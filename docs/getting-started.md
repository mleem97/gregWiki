---
title: Getting started
sidebar_label: Getting started
description: "Split-repo workspace: gregFramework layout, building the core, and where docs live."
---

The workspace is **multi-repo** with a local `gregFramework/` folder containing standalone repositories. **Logical stack:** **ModManager → framework / SDK → plugins → mods** — see [System architecture & documentation principles](/wiki/meta/system-architecture-principles).

- `gregCore/` — core SDK: build **`gregCore/FrikaMF.sln`** (main project **`gregCore/framework/FrikaMF.csproj`**); MCP server under `gregCore/mcp-server/`
- `gregMod.<Name>/` — gameplay mods (`FMF.*`), **flat** next to `gregCore/` (legacy umbrella `gregMods/` is deprecated)
- `gregExt.<Name>/` — framework plugins (`FFM.Plugin.*`), same flat layout (legacy `gregExtensions/` deprecated)
- `gregModmanager/` — **GregModManager** / **Gregtools Modmanager** (`WorkshopUploader.csproj`)
- `gregDataCenterExporter/` — exporter, templates, hook JSON mirrors
- `gregWiki/` — this documentation site

**Rust / native mods** are loaded by the **core** via **`FFIBridge`** (`gregCore/framework/src/ModLoader/FfiBridge.cs`); there is no separate `bridges/gregSta.RustBridge` tree in the workspace anymore.

## Build the core

```text
dotnet build gregCore/FrikaMF.sln -c Release
```

Or open `gregCore/FrikaMF.sln` in your IDE.

## Hooks and registries

- **Docs / policy:** target public identifiers **`FMF.<DOMAIN>.<Event>`** — [FMF hook naming](/wiki/reference/fmf-hook-naming) and [`CONTRIBUTING.md`](https://github.com/mleem97/gregFramework/blob/main/CONTRIBUTING.md).
- **Runtime string table + numeric `EventIds`:** [`gregCore/framework/FrikaMF/HookNames.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/FrikaMF/HookNames.cs) and [`EventIds.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/FrikaMF/EventIds.cs) — today these resolve the Rust/game pipeline to **`FFM.*`** literals; see [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog).
- **Canonical `greg.*` registry (JSON v2):** `gregCore/gregFramework/greg_hooks.json` — Il2Cpp-driven list for codegen and MCP; regenerate with **`gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1`**. Overview: [Greg hooks & event runtime](/wiki/framework/greg-hooks-and-events).
- **Optional legacy declarative file:** `fmf_hooks.json` (e.g. under `gregDataCenterExporter/FrikaModFramework/`) for older tooling — see [MCP server](/wiki/reference/mcp-server).

## Start a mod

1. Add a new mod repo as `gregMod.<Name>/` under `gregFramework/` (clone or create next to `gregCore/`).
2. Use templates from `gregCore/Templates/` (and mirrored templates under `gregDataCenterExporter/Templates/` where applicable).
3. Maintain hook metadata and version the mod in its own repository.

## Documentation site

- **Repository:** `gregWiki/`
- **Content:** Markdown/MDX in this repo, aligned with the split layout.

### Docker

From the `gregWiki` root: `docker build -t gregwiki-docs .` then `docker run --rm -p 3000:3000 gregwiki-docs`.

### MCP

See [`reference/mcp-server`](./reference/mcp-server.md) — implementation under **`gregCore/mcp-server/`** (install and `--data-root` per that folder’s `README.md`).
