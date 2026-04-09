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
| **Players** — install, play, troubleshoot | [End users (hub)](./guides/players/overview.md) · [End user wiki (import)](./legacy/wiki-import/EndUser/) |
| **Mod developers** — build mods, hooks, debugging | [Mod developers (hub)](./guides/mod-developers/overview.md) · [ModDevs wiki (import)](./legacy/wiki-import/ModDevs/) · [Framework](./mods/framework.md) |
| **Contributors** — PRs, docs, plugins, CI | [Contributors (workflow)](./guides/contributors/topics-overview.md) · [Contributors wiki (import)](./legacy/wiki-import/Contributors/) |
| **Sponsors** — support & transparency | [Sponsors (hub)](./guides/sponsors/overview.md) · [Sponsors (EN)](./legacy/wiki-import/Sponsors) · [Sponsoren (DE)](./legacy/wiki-import/Sponsoren) |

**Experience tracks** (newbies → pros): [By audience](./guides/players/audiences-overview.md) → [Newbies](/wiki/audiences/newbies), [Intermediates](/wiki/audiences/intermediates), [Professionals](/wiki/audiences/professionals).

## Repository hub

- [Workspace map](./workspace/index.mdx) — how folders map to repos
- Core: `gregCore/FrikaMF-StandaloneRepo/`
- Mods: `gregMod.<Name>/` (split repos, directly under `gregFramework/`)
- Extensions (FFM plugins): `gregExt.<Name>/` (split repos, directly under `gregFramework/`)
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
