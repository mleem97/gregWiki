---
id: intro
title: FrikaMF Docs Start
slug: /docs
---

Diese Dokumentation beschreibt den **aktuellen Split-Stand**: `gregFramework/` als Wrapper mit Einzel-Repositories für Core, Mods, Extensions und Wiki. Sie richtet sich an **Spieler**, **Mod-Developer**, **Contributors** und **Sponsoren**.

## Für wen? — Who is this for?

| Audience | Start here |
|----------|------------|
| **Spieler** — install, play, troubleshoot | [End users (hub)](./topics/end-user/overview.md) · [End user wiki (import)](./wiki-import/EndUser/) |
| **Moddevs** — build mods, hooks, debugging | [Mod developers (hub)](./topics/mod-developers/overview.md) · [ModDevs wiki (import)](./wiki-import/ModDevs/) · [Framework](./mods/framework.md) |
| **Contributor** — PRs, docs, plugins, CI | [Contributors (workflow)](./topics/contributors/overview.md) · [Contributors wiki (import)](./wiki-import/Contributors/) |
| **Sponsorinnen & Sponsoren** — support & transparency | [Sponsors (hub)](./topics/sponsors/overview.md) · [Sponsors (EN)](./wiki-import/Sponsors.md) · [Sponsoren (DE)](./wiki-import/Sponsoren.md) |

**Experience tracks** (newbies → pros): [By audience](./topics/audiences/overview.md) → [Newbies](./audiences/newbies.md), [Intermediates](./audiences/intermediates.md), [Professionals](./audiences/professionals.md).

## Repository Hub

- Core: `gregCore/FrikaMF-StandaloneRepo/`
- Mods: `gregMods/` (Repos `gregMod.<Name>`)
- Extensions: `gregExtensions/` (Repos `gregExt.<Name>`)
- Wiki: `gregWiki/`

## Hooks and releases

- [FMF hook naming](./reference/fmf-hook-naming.md) — `FMF.<Domain>.…` and legacy `FFM.*`
- [FMF hooks catalog](./reference/fmf-hooks-catalog.md) — generated from `framework/FrikaMF/HookNames.cs`
- [Release channels](./reference/release-channels.md) — Steam Workshop vs GitHub (beta)
- [MCP server](./reference/mcp-server.md) — LLM/IDE tools over docs + `fmf_hooks.json` (optional Docker bundle)

## Repository layout (contributors)

- [Repo inventory](./contributors/repo-inventory.md) — aktuelle Projekt-/Repo-Übersicht
- Split-Konvention: `gregMod.<Name>`, `gregExt.<Name>`, `gregSta.<Name>`

## Source model

- **Authoring:** Inhalte liegen im `gregWiki`-Repo.
- **Core source of truth:** technische Runtime-/Bridge-Details kommen aus `gregCore`.
- **RustBridge:** ist im Core integriert unter `FrikaMF-StandaloneRepo/bridges/gregSta.RustBridge/`.
