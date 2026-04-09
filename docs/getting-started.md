---
title: Getting started
sidebar_label: Getting started
description: "Split-repo workspace: gregFramework layout, building the core, and where docs live."
---

The workspace is **multi-repo** with a local `gregFramework/` folder containing standalone repositories, for example:

- `gregCore/` (core SDK, including `FrikaMF-StandaloneRepo/`)
- `gregMods/` (per-mod repositories)
- `gregExtensions/` (per-extension repositories)
- `gregWiki/` (this documentation site)

`DataCenter-RustBridge` is integrated into the core tree at:

- `gregCore/FrikaMF-StandaloneRepo/bridges/gregSta.RustBridge/`

## Build the core

```text
dotnet build gregCore/FrikaMF-StandaloneRepo/FrikaMF.sln -c Release
```

Or open `gregCore/FrikaMF-StandaloneRepo/FrikaMF.sln` in your IDE.

## Hook naming

- **Target convention:** `FMF.<DOMAIN>.<Event>` (see [`CONTRIBUTING.md`](https://github.com/mleem97/gregFramework/blob/master/CONTRIBUTING.md)).
- **Registry:** [`FrikaModFramework/fmf_hooks.json`](https://github.com/mleem97/gregFramework/blob/master/FrikaModFramework/fmf_hooks.json) (path may vary by branch).
- **Legacy runtime strings** may still use `FFM.*` in [`HookNames`](https://github.com/mleem97/gregFramework/blob/master/framework/FrikaMF/HookNames.cs) until migrated.

## Start a mod

1. Create a new mod repo under `gregMods/` using the `gregMod.<Name>` pattern.
2. Use templates from `gregCore/FrikaMF-StandaloneRepo/Templates/`.
3. Maintain hook metadata and version the mod in its own repository.

## Documentation site

- **Repository:** `gregWiki/`
- **Content:** Markdown/MDX in this repo, aligned with the split layout.

### Docker

From the `gregWiki` root: `docker build -t gregwiki-docs .` then `docker run --rm -p 3000:3000 gregwiki-docs`.

### MCP

See [`reference/mcp-server`](./reference/mcp-server.md) — the server lives next to the core sources (`gregCore/FrikaMF-StandaloneRepo/mcp-server/`).
