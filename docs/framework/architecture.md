---
title: Repository architecture
sidebar_label: Repository architecture
description: Aktuelle Multi-Repo-Architektur mit `gregFramework` als Wrapper und klarer Repo-Trennung.
---

## Modding language

Mods, MelonLoader-Plugins und Extensions liefern ihre **Logik ausschließlich in C#** (MelonLoader / .NET). Details und Abgrenzung zum Framework-Kern (z. B. Rust-Bridge): [Modding language (C# only)](/wiki/reference/modding-language-requirement).

## Layers

| Layer | Role |
| ------ | ------ |
| **Wrapper** | `gregFramework/` enthält lokal alle Einzel-Repositories. |
| **Core** | `gregCore/FrikaMF-StandaloneRepo/` — **Framework-Kern**: Übersetzung, Hooks, Harmony/Event-Laufzeit, MCP, Templates und zugehörige Kernfunktionen. |
| **Rust bridge** | In Core integriert unter `gregCore/FrikaMF-StandaloneRepo/bridges/gregSta.RustBridge/`. |
| **Mods** | `gregMods/` + pro Mod eigenes Repo (`gregMod.<Name>`). |
| **Extensions** | `gregExtensions/` + pro Extension eigenes Repo (`gregExt.<Name>`). |
| **Docs** | `gregWiki/` als eigenes Repo für Dokumentation. |

## Hook registry

Hook-Naming und Registry bleiben fachlich im Core verankert; bei Split-Änderungen gilt immer der Core-Stand als Referenz.

## Tools

- **Core tools:** `gregCore/FrikaMF-StandaloneRepo/tools/`
- **MCP runtime:** `gregCore/FrikaMF-StandaloneRepo/mcp-server/`
- **Hook-/Mapping-Utilities:** ebenfalls unter Core-Tools, versioniert mit dem Core-Repo.

## Steam & Workshop

Workshop-Templates und Deployment-Skripte liegen im Core-Repo unter `FrikaMF-StandaloneRepo/Templates/` und `FrikaMF-StandaloneRepo/scripts/`.
