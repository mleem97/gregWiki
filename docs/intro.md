---
id: intro
title: gregFramework documentation
slug: /docs
description: Entry point for the split-repo workspace — core, mods, extensions, and this wiki.
---

This documentation describes the **current split layout**: a local `gregFramework/` workspace with separate repositories for **core**, **mods**, **extensions**, and **wiki**. It is written for **players**, **mod developers**, **contributors**, and **sponsors**.

## Who is this for?

| Audience | Start here |
|----------|------------|
| **Players** — install, play, troubleshoot | [End users (hub)](./topics/end-user/overview.md) · [End user wiki (import)](./wiki-import/EndUser/) |
| **Mod developers** — build mods, hooks, debugging | [Mod developers (hub)](./topics/mod-developers/overview.md) · [ModDevs wiki (import)](./wiki-import/ModDevs/) · [Framework](./mods/framework.md) |
| **Contributors** — PRs, docs, plugins, CI | [Contributors (workflow)](./topics/contributors/overview.md) · [Contributors wiki (import)](./wiki-import/Contributors/) |
| **Sponsors** — support & transparency | [Sponsors (hub)](./topics/sponsors/overview.md) · [Sponsors (EN)](./wiki-import/Sponsors) · [Sponsoren (DE)](./wiki-import/Sponsoren) |

**Experience tracks** (newbies → pros): [By audience](./topics/audiences/overview.md) → [Newbies](./audiences/newbies.md), [Intermediates](./audiences/intermediates.md), [Professionals](./audiences/professionals.md).

## Repository hub

- Core: `gregCore/FrikaMF-StandaloneRepo/`
- Mods: `gregMods/` (repos `gregMod.<Name>`)
- Extensions: `gregExtensions/` (repos `gregExt.<Name>`)
- Wiki: `gregWiki/` (this site)

## Hooks and releases

- [FMF hook naming](./reference/fmf-hook-naming.md) — `FMF.<Domain>.…` and legacy `FFM.*`
- [FMF hooks catalog](./reference/fmf-hooks-catalog.md) — generated from core `HookNames.cs`
- [Release channels](./reference/release-channels.md) — Steam Workshop vs GitHub (beta)
- [MCP server](./reference/mcp-server.md) — optional LLM/IDE tooling over docs + `fmf_hooks.json`

## Layout (contributors)

- [Repo inventory](./contributors/repo-inventory.md) — project and repository overview
- Split naming: `gregMod.<Name>`, `gregExt.<Name>`, `gregSta.<Name>`

## Source model

- **Authoring:** Markdown/MDX lives in the **gregWiki** repository.
- **Technical source of truth:** runtime and bridge details come from **gregCore**.
- **Rust bridge:** integrated in the core tree under `FrikaMF-StandaloneRepo/bridges/gregSta.RustBridge/`.
