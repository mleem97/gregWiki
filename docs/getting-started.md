---
title: Getting started
sidebar_label: Getting started
description: "Split-repo workspace: gregFramework layout, building the core, and where docs live."
---

The workspace is **multi-repo** with a local `gregFramework/` folder containing standalone repositories. **Logical stack:** **ModManager → framework / SDK → plugins → mods** — see [System architecture & documentation principles](/wiki/meta/system-architecture-principles).

- `gregCore/` — core SDK (`gregCore/framework/FrikaMF.csproj`), MCP server under `gregCore/mcp-server/`
- `gregMod.<Name>/` — gameplay mods (`FMF.*`), **flat** next to `gregCore/` (legacy umbrella `gregMods/` is deprecated)
- `gregExt.<Name>/` — framework plugins (`FFM.Plugin.*`), same flat layout (legacy `gregExtensions/` deprecated)
- `gregModmanager/` — **Gregtools Modmanager** (WorkshopManager; `WorkshopUploader.csproj`)
- `gregDataCenterExporter/` — exporter, templates, hook JSON mirrors
- `gregWiki/` — this documentation site

The **Rust** bridge lives under:

- `gregCore/bridges/gregSta.RustBridge/`

## Build the core

```text
dotnet build gregCore/FrikaMF.sln -c Release
```

Or open `gregCore/FrikaMF.sln` in your IDE.

## Hook naming

- **Target convention:** `FMF.<DOMAIN>.<Event>` (see [`CONTRIBUTING.md`](https://github.com/mleem97/gregFramework/blob/main/CONTRIBUTING.md)).
- **Registry (example path in workspace):** [`gregDataCenterExporter/FrikaModFramework/fmf_hooks.json`](https://github.com/mleem97/gregFramework/blob/main/gregDataCenterExporter/FrikaModFramework/fmf_hooks.json) (exact copy may exist in other repos).
- **Legacy runtime strings** may still use `FFM.*` in [`HookNames.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/FrikaMF/HookNames.cs) until migrated.

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
