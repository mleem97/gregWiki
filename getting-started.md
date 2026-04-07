---
title: Getting started
sidebar_label: Getting started
description: Aktueller Stand nach Repo-Split: Wrapper-Struktur, Core-Build und Mod-/Extension-Repos.
---

Die Struktur ist jetzt **Multi-Repo** mit `gregFramework/` als lokalem Wrapper-Ordner. Darin liegen die eigenständigen Repositories, z. B.:

- `gregCore/` (Core SDK, inkl. `FrikaMF-StandaloneRepo/`)
- `gregMods/` (einzelne Mod-Repos)
- `gregExtensions/` (einzelne Extension-Repos)
- `gregWiki/` (Dokumentation)

`DataCenter-RustBridge` wird in den Core integriert und liegt im Core-Baum unter:

- `gregCore/FrikaMF-StandaloneRepo/bridges/gregSta.RustBridge/`

## Core bauen

```text
dotnet build gregCore/FrikaMF-StandaloneRepo/FrikaMF.sln -c Release
```

Alternativ in IDE: `gregCore/FrikaMF-StandaloneRepo/FrikaMF.sln` öffnen.

## Hook naming

- **Target convention:** `FMF.<DOMAIN>.<Event>` (see [`CONTRIBUTING.md`](https://github.com/mleem97/gregFramework/blob/master/CONTRIBUTING.md)).
- **Registry:** [`FrikaModFramework/fmf_hooks.json`](https://github.com/mleem97/gregFramework/blob/master/FrikaModFramework/fmf_hooks.json).
- **Legacy runtime strings** may still use `FFM.*` in [`HookNames`](https://github.com/mleem97/gregFramework/blob/master/framework/FrikaMF/HookNames.cs) until migrated.

## Mod starten

1. Neues Mod-Repo unter `gregMods/` nach Schema `gregMod.<Name>` anlegen.
2. Templates aus `gregCore/FrikaMF-StandaloneRepo/Templates/` nutzen.
3. Hook-Metadaten pflegen und Mod im eigenen Repo versionieren.

## Documentation site

- **Repo:** `gregWiki/`
- **Inhalt:** Markdown/MDX in diesem Repo, angepasst an den Split-Stand.

### Docker

- **Dev server with hot reload:** `docker compose up docs` (port **3000**, mounts `./wiki` and `./docs`).
- **Static wiki + MCP in one container:** `docker compose up docs-mcp` — see [`reference/mcp-server`](../../reference/mcp-server.md).

## Assistants / MCP

Der MCP-Server für Framework-Scan/Tooling liegt im Core-Umfeld (`gregCore/FrikaMF-StandaloneRepo/mcp-server/`).
