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
| **Spieler** — installieren, spielen, Troubleshooting | [Endnutzer (Hub)](/wiki/guides/players/overview) · [Endnutzer-Workshop](/wiki/guides/players/enduser-workshop) |
| **Moddevs** — Mods bauen, Hooks, Debugging | [Mod-Entwickler (Hub)](/wiki/guides/mod-developers/overview) · [Framework](/wiki/mods/framework) · [FMF-Hooks](/wiki/framework/fmf-hooks) |
| **Contributor** — PRs, Doku, Plugins, CI | [Contributors (Workflow)](/wiki/guides/contributors/topics-overview) · [Contributor-Workshop](/wiki/guides/contributors/contributor-workshop) |
| **Sponsorinnen & Sponsoren** | [Sponsors (Hub)](/wiki/guides/sponsors/overview) · Lizenz & Richtlinien im GitHub-Repo (`LICENSE` / `CONTRIBUTING`) |

**Erfahrungspfade** (Einsteiger → Profis): [Nach Zielgruppe](/wiki/guides/players/audiences-overview) → [Newbies](/wiki/audiences/newbies), [Intermediates](/wiki/audiences/intermediates), [Professionals](/wiki/audiences/professionals).

## Repository-Hub

- [Workspace-Karte](/wiki/workspace/) — Ordner → Repos
- Core: `gregCore/` (`framework/FrikaMF`, `mcp-server/`, `bridges/gregSta.RustBridge/`)
- Mods: `gregMod.<Name>/` (Split-Repos, direkt unter `gregFramework/`)
- Extensions (FFM-Plugins): `gregExt.<Name>/` (Split-Repos, direkt unter `gregFramework/`)
- Workshop-App: `gregModmanager/` (Gregtools Modmanager — `WorkshopUploader.exe`)
- Exporter/Templates: `gregDataCenterExporter/`
- Wiki: `gregWiki/`

## Hooks und Releases

- [FMF Hook-Naming](/wiki/reference/fmf-hook-naming) — `FMF.<Domain>.…` und Legacy `FFM.*`
- [FMF-Hooks-Katalog](/wiki/reference/fmf-hooks-catalog) — generiert aus Core-`HookNames.cs`
- [Release-Kanäle](/wiki/reference/release-channels) — Steam Workshop vs GitHub (Beta)
- [MCP-Server](/wiki/reference/mcp-server) — optionale LLM/IDE-Tools über Doku + `fmf_hooks.json`

## Layout (Contributors)

- [Repo-Inventar](/wiki/contributors/repo-inventory) — Projekt- und Repo-Übersicht
- Split-Konvention: `gregMod.<Name>`, `gregExt.<Name>`, `gregSta.<Name>` (Rust-Bridge-Repo), plus Apps wie `gregModmanager/`, `gregDataCenterExporter/`, `gregIPAM/`, `gregStore/`

## Quellenmodell

- **Authoring:** Inhalte liegen im **gregWiki**-Repo.
- **Technische Wahrheit:** Runtime/Bridge-Details kommen aus **gregCore**.
- **RustBridge:** `gregCore/bridges/gregSta.RustBridge/`.
