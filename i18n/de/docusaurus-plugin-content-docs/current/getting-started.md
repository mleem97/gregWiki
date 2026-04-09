---
title: Erste Schritte
sidebar_label: Erste Schritte
description: "Split-Repo-Workspace: gregFramework-Layout, Core bauen und wo die Doku liegt."
---

Die Struktur ist **Multi-Repo** mit `gregFramework/` als lokalem Wrapper-Ordner. Darin liegen die eigenständigen Repositories, z. B.:

- `gregCore/` — **Framework-Kern** (`FrikaMF-StandaloneRepo/`): Übersetzung, Hooks, Harmony-/Event-Laufzeit, Templates, Bridges und übrige Kernfunktionen
- `gregMods/` (einzelne Mod-Repos)
- `gregExtensions/` (einzelne Extension-Repos)
- `gregWiki/` (Dokumentation)
- `gregStore/` (**Gregweb**, privates Repository — Modstore Web + Infra; Next.js unter `web/`)

Das Upstream-Projekt **DataCenter-RustBridge** wird in den Core integriert und liegt unter:

- `gregCore/FrikaMF-StandaloneRepo/bridges/gregSta.RustBridge/`

## Core bauen

```text
dotnet build gregCore/FrikaMF-StandaloneRepo/FrikaMF.sln -c Release
```

Alternativ in der IDE: `gregCore/FrikaMF-StandaloneRepo/FrikaMF.sln` öffnen.

## Sprache (Mods / Plugins / Extensions)

**Pflicht:** Gameplay- und Integrationslogik für Mods, MelonLoader-Plugins und Extensions ausschließlich in **C#**. Siehe [Modding-Sprache (nur C#)](/wiki/reference/modding-language-requirement).

## Hook-Naming

- **Zielkonvention:** `FMF.<DOMAIN>.<Event>` (siehe [`CONTRIBUTING.md`](https://github.com/mleem97/gregFramework/blob/master/CONTRIBUTING.md)).
- **Registry:** [`FrikaModFramework/fmf_hooks.json`](https://github.com/mleem97/gregFramework/blob/master/FrikaModFramework/fmf_hooks.json).
- **Legacy-Runtime-Strings** können noch `FFM.*` in [`HookNames`](https://github.com/mleem97/gregFramework/blob/master/framework/FrikaMF/HookNames.cs) nutzen, bis migriert.

## Mod starten

1. Neues Mod-Repo unter `gregMods/` nach Schema `gregMod.<Name>` anlegen.
2. Templates aus `gregCore/FrikaMF-StandaloneRepo/Templates/` nutzen.
3. Hook-Metadaten pflegen und Mod im eigenen Repo versionieren.

## Dokumentations-Site

- **Repo:** `gregWiki/`
- **Inhalt:** Markdown/MDX in diesem Repo, angepasst an den Split-Stand.

### Docker

Im `gregWiki`-Root: `docker build -t gregwiki-docs .` und `docker run --rm -p 3000:3000 gregwiki-docs`.

### MCP

Siehe [`reference/mcp-server`](/wiki/reference/mcp-server) im Core (`gregCore/FrikaMF-StandaloneRepo/mcp-server/`).
