---
title: Erste Schritte
sidebar_label: Erste Schritte
description: "Split-Repo-Workspace: gregFramework-Layout, Core bauen und wo die Doku liegt."
---

Die Struktur ist **Multi-Repo** mit `gregFramework/` als lokalem Wrapper-Ordner. Darin liegen die eigenständigen Repositories, z. B.:

- `gregCore/` — Core-SDK (`gregCore/framework/FrikaMF.csproj`), MCP unter `gregCore/mcp-server/`
- `gregMod.<Name>/` — Gameplay-Mods (`FMF.*`), **flach** neben `gregCore/` (älteres `gregMods/` ist obsolet)
- `gregExt.<Name>/` — Framework-Plugins (`FFM.Plugin.*`), ebenfalls flach (älteres `gregExtensions/` obsolet)
- `gregModmanager/` — **Gregtools Modmanager** (WorkshopManager; `WorkshopUploader.csproj`)
- `gregDataCenterExporter/` — Exporter, Templates, Hook-JSON-Spiegel
- `gregWiki/` — diese Dokumentation

Die **Rust**-Bridge liegt unter:

- `gregCore/bridges/gregSta.RustBridge/`

## Core bauen

```text
dotnet build gregCore/FrikaMF.sln -c Release
```

Alternativ in der IDE: `gregCore/FrikaMF.sln` öffnen.

## Hook-Naming

- **Zielkonvention:** `FMF.<DOMAIN>.<Event>` (siehe [`CONTRIBUTING.md`](https://github.com/mleem97/gregFramework/blob/main/CONTRIBUTING.md)).
- **Registry (Beispielpfad):** [`gregDataCenterExporter/FrikaModFramework/fmf_hooks.json`](https://github.com/mleem97/gregFramework/blob/main/gregDataCenterExporter/FrikaModFramework/fmf_hooks.json).
- **Legacy-Runtime-Strings** können noch `FFM.*` in [`HookNames.cs`](https://github.com/mleem97/gregFramework/blob/main/gregCore/framework/FrikaMF/HookNames.cs) nutzen, bis migriert.

## Mod starten

1. Neues Mod-Repo als `gregMod.<Name>/` unter `gregFramework/` anlegen (neben `gregCore/` klonen oder anlegen).
2. Templates aus `gregCore/Templates/` nutzen (Spiegel unter `gregDataCenterExporter/Templates/` wo vorhanden).
3. Hook-Metadaten pflegen und Mod im eigenen Repo versionieren.

## Dokumentations-Site

- **Repo:** `gregWiki/`
- **Inhalt:** Markdown/MDX in diesem Repo, angepasst an den Split-Stand.

### Docker

Im `gregWiki`-Root: `docker build -t gregwiki-docs .` und `docker run --rm -p 3000:3000 gregwiki-docs`.

### MCP

Siehe [`reference/mcp-server`](/wiki/reference/mcp-server) — Implementierung unter **`gregCore/mcp-server/`** (Installation und `--data-root` laut `README.md` dort).
