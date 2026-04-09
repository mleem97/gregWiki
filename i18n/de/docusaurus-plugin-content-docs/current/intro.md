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
| **Spieler** — installieren, spielen, Troubleshooting | [Endnutzer (Hub)](/wiki/guides/players/overview) · [Endnutzer-Wiki (Import)](/wiki/legacy/wiki-import/EndUser/) |
| **Moddevs** — Mods bauen, Hooks, Debugging | [Mod-Entwickler (Hub)](/wiki/guides/mod-developers/overview) · [ModDevs-Wiki (Import)](/wiki/legacy/wiki-import/ModDevs/) · [Framework](/wiki/mods/framework) |
| **Contributor** — PRs, Doku, Plugins, CI | [Contributors (Workflow)](/wiki/guides/contributors/topics-overview) · [Contributors-Wiki (Import)](/wiki/legacy/wiki-import/Contributors/) |
| **Sponsorinnen & Sponsoren** | [Sponsors (Hub)](/wiki/guides/sponsors/overview) · [Sponsors (EN)](/wiki/legacy/wiki-import/Sponsors) · [Sponsoren (DE)](/wiki/legacy/wiki-import/Sponsoren) |

**Erfahrungspfade** (Einsteiger → Profis): [Nach Zielgruppe](/wiki/guides/players/audiences-overview) → [Newbies](/wiki/audiences/newbies), [Intermediates](/wiki/audiences/intermediates), [Professionals](/wiki/audiences/professionals).

## Repository-Hub

- [Workspace-Karte](/wiki/workspace/) — Ordner → Repos
- Core: `gregCore/FrikaMF-StandaloneRepo/`
- Mods: `gregMods/` (Repos `gregMod.<Name>`)
- Extensions: `gregExtensions/` (Repos `gregExt.<Name>`)
- Wiki: `gregWiki/`

## Hooks und Releases

- [FMF Hook-Naming](/wiki/reference/fmf-hook-naming) — `FMF.<Domain>.…` und Legacy `FFM.*`
- [FMF-Hooks-Katalog](/wiki/reference/fmf-hooks-catalog) — generiert aus Core-`HookNames.cs`
- [Release-Kanäle](/wiki/reference/release-channels) — Steam Workshop vs GitHub (Beta)
- [MCP-Server](/wiki/reference/mcp-server) — optionale LLM/IDE-Tools über Doku + `fmf_hooks.json`

## Layout (Contributors)

- [Repo-Inventar](/wiki/contributors/repo-inventory) — Projekt- und Repo-Übersicht
- Split-Konvention: `gregMod.<Name>`, `gregExt.<Name>`, `gregSta.<Name>`

## Quellenmodell

- **Authoring:** Inhalte liegen im **gregWiki**-Repo.
- **Technische Wahrheit:** Runtime/Bridge-Details kommen aus **gregCore**.
- **RustBridge:** im Core unter `FrikaMF-StandaloneRepo/bridges/gregSta.RustBridge/`.
