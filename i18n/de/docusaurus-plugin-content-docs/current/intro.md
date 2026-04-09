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

**Erfahrungspfade** (Einsteiger → Profis): [Nach Zielgruppe](/wiki/guides/players/audiences-overview) → [Newbies](/wiki/guides/players/newbies), [Intermediates](/wiki/guides/players/intermediates), [Professionals](/wiki/guides/players/professionals).

## Repository-Hub

- [Workspace-Karte](/wiki/workspace/) — Ordner → Repos
- **Framework-Kern:** `gregCore/` (Übersetzung, Hooks, Runtime, Templates, Bridges)
- Mods: `gregMod.<Name>/` (direkt unter `gregFramework/`)
- Extensions: `gregExt.<Name>/` (direkt unter `gregFramework/`)
- Wiki: `gregWiki/`

## Hooks und Releases

- [Modding-Sprache (nur C#)](/wiki/reference/modding-language-requirement) — **gesamte** Logik von Mods, Plugins und Extensions in **C#**
- [FMF Hook-Naming](/wiki/reference/fmf-hook-naming) — `FMF.<Domain>.…` und Legacy `FFM.*`
- [FMF-Hooks-Katalog](/wiki/reference/fmf-hooks-catalog) — generiert aus Core-`HookNames.cs`
- [Release-Kanäle](/wiki/reference/release-channels) — Steam Workshop vs GitHub (Beta)
- [MCP-Server](/wiki/reference/mcp-server) — optionale LLM/IDE-Tools über Doku + `fmf_hooks.json`

## Layout (Contributors)

- [Repo-Inventar](/wiki/contributors/repo-inventory) — Projekt- und Repo-Übersicht
- Split-Konvention: `gregMod.<Name>`, `gregExt.<Name>`, `gregSta.<Name>`

## Quellenmodell

- **Authoring:** Inhalte liegen im **gregWiki**-Repo.
- **Technische Wahrheit:** Der **Framework-Kern** ist **gregCore** — Übersetzung, Hooks und Runtime/Bridge-Implementierung liegen dort.
- **RustBridge:** im Core unter `gregCore/bridges/gregSta.RustBridge/`.
