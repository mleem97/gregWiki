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
| **Core** | `gregCore/` — **Framework-Kern**: Übersetzung, Hooks, Harmony/Event-Laufzeit, MCP, Templates und zugehörige Kernfunktionen. |
| **Rust bridge** | In Core integriert unter `gregCore/bridges/gregSta.RustBridge/`. |
| **Mods** | `gregMod.<Name>/` — jeweils eigenes Repo direkt unter `gregFramework/`. |
| **Extensions** | `gregExt.<Name>/` — jeweils eigenes Repo direkt unter `gregFramework/`. |
| **Docs** | `gregWiki/` als eigenes Repo für Dokumentation. |

## Hook registry

Hook-Naming und Registry bleiben fachlich im Core verankert; bei Split-Änderungen gilt immer der Core-Stand als Referenz.

## Tools

- **Core tools:** `gregCore/tools/`
- **MCP runtime:** `gregCore/mcp-server/`
- **Hook-/Mapping-Utilities:** ebenfalls unter Core-Tools, versioniert mit dem Core-Repo.

## Steam & Workshop

Workshop-Templates und Deployment-Skripte liegen im Core-Repo unter `gregCore/Templates/` und `gregCore/scripts/`.
