---
id: intro
title: gregFramework Dokumentation
slug: /docs
description: Einstieg für den Split-Repo-Workspace — Core, Mods, Extensions und dieses Wiki.
---

Diese Dokumentation beschreibt den **aktuellen Split-Stand**: `gregFramework/` als Wrapper mit Einzel-Repositories für **Core**, **Mods**, **Extensions** und **Wiki**. Sie richtet sich an **Spieler**, **Mod-Developer**, **Contributors** und **Sponsoren**.

## Für wen?

| Zielgruppe | Einstieg |
|------------|----------|
| **Spieler** — installieren, spielen, Troubleshooting | [Endnutzer (Hub)](./topics/end-user/overview.md) · [Endnutzer-Wiki (Import)](./wiki-import/EndUser/) |
| **Moddevs** — Mods bauen, Hooks, Debugging | [Mod-Entwickler (Hub)](./topics/mod-developers/overview.md) · [ModDevs-Wiki (Import)](./wiki-import/ModDevs/) · [Framework](./mods/framework.md) |
| **Contributor** — PRs, Doku, Plugins, CI | [Contributors (Workflow)](./topics/contributors/overview.md) · [Contributors-Wiki (Import)](./wiki-import/Contributors/) |
| **Sponsorinnen & Sponsoren** | [Sponsors (Hub)](./topics/sponsors/overview.md) · [Sponsors (EN)](./wiki-import/Sponsors) · [Sponsoren (DE)](./wiki-import/Sponsoren) |

**Erfahrungspfade** (Einsteiger → Profis): [Nach Zielgruppe](./topics/audiences/overview.md) → [Newbies](./audiences/newbies.md), [Intermediates](./audiences/intermediates.md), [Professionals](./audiences/professionals.md).

## Repository-Hub

- Core: `gregCore/FrikaMF-StandaloneRepo/`
- Mods: `gregMods/` (Repos `gregMod.<Name>`)
- Extensions: `gregExtensions/` (Repos `gregExt.<Name>`)
- Wiki: `gregWiki/`

## Hooks und Releases

- [FMF Hook-Naming](./reference/fmf-hook-naming.md) — `FMF.<Domain>.…` und Legacy `FFM.*`
- [FMF-Hooks-Katalog](./reference/fmf-hooks-catalog.md) — generiert aus Core-`HookNames.cs`
- [Release-Kanäle](./reference/release-channels.md) — Steam Workshop vs GitHub (Beta)
- [MCP-Server](./reference/mcp-server.md) — optionale LLM/IDE-Tools über Doku + `fmf_hooks.json`

## Layout (Contributors)

- [Repo-Inventar](./contributors/repo-inventory.md) — Projekt- und Repo-Übersicht
- Split-Konvention: `gregMod.<Name>`, `gregExt.<Name>`, `gregSta.<Name>`

## Quellenmodell

- **Authoring:** Inhalte liegen im **gregWiki**-Repo.
- **Technische Wahrheit:** Runtime/Bridge-Details kommen aus **gregCore**.
- **RustBridge:** im Core unter `FrikaMF-StandaloneRepo/bridges/gregSta.RustBridge/`.
