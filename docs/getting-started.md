---
title: Getting started
sidebar_label: Getting started
description: "Split-repo workspace: gregFramework layout, building the core, and where docs live."
---

The workspace is **multi-repo** with a local `gregFramework/` folder containing standalone repositories, for example:

- `gregCore/` — **framework core**: translations, hooks, Harmony/event runtime, templates, bridges, and related core features
- `gregMod.<Name>/` (per-mod repositories, directly under `gregFramework/`)
- `gregExt.<Name>/` (per-extension repositories, directly under `gregFramework/`)
- `gregWiki/` (this documentation site)
- `gregStore/` (**Gregweb**, private repository — modstore web + infra; Next.js under `web/`)

The upstream **DataCenter-RustBridge** project is integrated into the core tree at:

- `gregCore/bridges/gregSta.RustBridge/`

## Build the core

```text
dotnet build gregCore/FrikaMF.sln -c Release
```

Or open `gregCore/FrikaMF.sln` in your IDE.

## Language (mods / plugins / extensions)

**Mandatory:** implement **all** gameplay and integration logic for mods, MelonLoader plugins, and extensions in **C#**. See [Modding language (C# only)](./reference/modding-language-requirement.md).

## Hook naming

- **Target convention:** `FMF.<DOMAIN>.<Event>` (see [`CONTRIBUTING.md`](https://github.com/mleem97/gregFramework/blob/master/CONTRIBUTING.md)).
- **Registry:** [`FrikaModFramework/fmf_hooks.json`](https://github.com/mleem97/gregFramework/blob/master/FrikaModFramework/fmf_hooks.json) (path may vary by branch).
- **Legacy runtime strings** may still use `FFM.*` in [`HookNames`](https://github.com/mleem97/gregFramework/blob/master/framework/FrikaMF/HookNames.cs) until migrated.

## Start a mod

1. Create a new mod repo folder `gregMod.<Name>/` under `gregFramework/` using the `gregMod.<Name>` pattern.
2. Use templates from `gregCore/Templates/`.
3. Maintain hook metadata and version the mod in its own repository.

## Documentation site

- **Repository:** `gregWiki/`
- **Content:** Markdown/MDX in this repo, aligned with the split layout.

### Docker

From the `gregWiki` root: `docker build -t gregwiki-docs .` then `docker run --rm -p 3000:3000 gregwiki-docs`.

### MCP

See [`reference/mcp-server`](./reference/mcp-server.md) — the server lives next to the core sources (`gregCore/mcp-server/`).
