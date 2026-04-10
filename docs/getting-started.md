---
title: Getting started
sidebar_label: Getting started
description: Workspace-Layout (gregFramework), gregCore bauen, Hooks & erste Mod-Schritte.
---

Der Workspace ist **multi-repo**: unter einem gemeinsamen Ordner `gregFramework/` liegen mehrere Git-Repos **flach** nebeneinander. **Logik:** **ModManager → Framework / SDK → Plugins → Mods** — siehe [System architecture & documentation principles](/wiki/meta/system-architecture-principles).

| Ordner | Inhalt |
|--------|--------|
| **`gregCore/`** | Framework: **`gregCore/FrikaMF.sln`**, Hauptprojekt **`gregCore/framework/FrikaMF.csproj`**; SDK unter `framework/src/Sdk/`; MCP unter `gregCore/mcp-server/` |
| **`gregMod.<Name>/`** | Gameplay-Mods (`FMF.*`-Assemblies üblich), **flach** neben `gregCore/` (Umbrella **`gregMods/`** ist veraltet) |
| **`gregExt.<Name>/`** | Framework-Plugins (`FFM.Plugin.*` / `greg.Plugin.*`), ebenfalls flach (**`gregExtensions/`** veraltet) |
| **`gregModmanager/`** | GregModManager / Workshop-UI (`WorkshopUploader.csproj`) |
| **`gregDataCenterExporter/`** | Exporter, Templates, Spiegel |
| **`gregWiki/`** | Diese Doku (Docusaurus) |

Rust-/Native-Mods werden vom Core über die FFI-Schicht geladen; Bridge-Code lebt im **`framework/src/ModLoader/`**-Baum von **gregCore**.

## Framework bauen

```bash
dotnet build gregCore/FrikaMF.sln -c Release
```

Oder `gregCore/FrikaMF.sln` in der IDE öffnen. Für CI ohne lokale Spiel-Installation oft: **`-p:CI=true`** (siehe jeweilige `.csproj`-Targets).

**Voraussetzungen:** MelonLoader **net6**-Assemblies und Il2Cpp-Interop des Spiels — entweder aus `{Game}/MelonLoader/` oder aus **`gregCore/lib/references/MelonLoader`** (z. B. via `python gregCore/tools/refresh_refs.py`). Umgebungsvariable **`DATA_CENTER_GAME_DIR`** hilft beim Auflösen des Spielpfads.

## Hooks & Registries

| Thema | Wo |
|--------|-----|
| **Kanonische `greg.*` (JSON, Il2Cpp)** | Repo-Root **`greg_hooks.json`**; Regeneration: **`gregCore/scripts/Generate-GregHooksFromIl2CppDump.ps1`** |
| **EventId → `greg.*` (FFI / natives Pipeline)** | **`GregNativeEventHooks`** — [greg hooks catalog](/wiki/reference/greg-hooks-catalog), Quellcode `gregCore/framework/src/Sdk/GregNativeEventHooks.cs` |
| **Doku-Namenskonvention `FMF.*`** | [FMF hook naming](/wiki/reference/fmf-hook-naming) |
| **Architektur Überblick** | [Greg hooks & event runtime](/wiki/framework/greg-hooks-and-events) |
| **Legacy-Strings** | **`GregCompatBridge`** lädt **`greg_hooks.json`** neben **`FrikaModdingFramework.dll`** |

## Ersten Mod starten

1. Neues Repo **`gregMod.<Name>/`** unter `gregFramework/` anlegen (oder Template klonen).
2. **`ProjectReference`** auf **`gregCore/framework/FrikaMF.csproj`** setzen (wie **`mods/GregShowcaseMod/`**).
3. API **`gregFramework.Core`** (`GregEventDispatcher`, `GregHookName`, `GregNativeEventHooks`, …).
4. Vorlagen: **`gregCore/Templates/greg.BasedModTemplate/`** oder gespiegelte Templates unter **`gregDataCenterExporter/Templates/`**.

Referenz-Mod: **`mods/GregShowcaseMod/`** — [Greg hooks showcase](/wiki/guides/mod-developers/greg-hooks-showcase).

## Dokumentations-Site (`gregWiki/`)

- Markdown unter **`gregWiki/docs/`**
- Docker: im **`gregWiki/`**-Root `docker build` / `docker run` (siehe **`gregWiki/README.md`**)
- MCP: [mcp-server](/wiki/reference/mcp-server) — Server unter **`gregCore/mcp-server/`**
