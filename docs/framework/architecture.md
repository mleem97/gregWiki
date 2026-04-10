---
title: Repository architecture
sidebar_label: Repository architecture
description: Current multi-repo layout with `gregFramework` as a local wrapper and clear repository boundaries.
---

## Modding language

Mods, MelonLoader plugins, and extensions ship their **logic in C# only** (MelonLoader / .NET). Scope vs framework core (e.g. Rust bridge): [Modding language (C# only)](/wiki/reference/modding-language-requirement).

## Target runtime layers

Above the raw repositories, the **logical** model is **ModManager → Framework → Plugins → Mods** (see [System architecture & documentation principles](/wiki/meta/system-architecture-principles)):

| Layer | Role | Repo / folder |
|--------|--------|----------------|
| **ModManager** | MAUI front-end: manage mods/plugins, surface game status; talks to the framework through defined interfaces. | `gregModmanager/` |
| **Framework (SDK)** | Hooks, events, versioning, logging; bridge to IL2CPP / MelonLoader. | `gregCore/` |
| **Plugins** | Framework extensions (`FFM.Plugin.*`). | `gregExt.<Name>/` |
| **Mods** | User mods (`FMF.*`). | `gregMod.<Name>/` |

## On-disk repositories

| Layer | Role |
| ------ | ------ |
| **Wrapper** | `gregFramework/` holds local checkouts of individual repositories. |
| **Core** | `gregCore/` — **framework core**: translation, hooks, Harmony/event runtime, MCP, templates, and related core features. |
| **Rust bridge** | Integrated in core under `gregCore/bridges/gregSta.RustBridge/`. |
| **Mods** | `gregMod.<Name>/` — one repo each, directly under `gregFramework/`. |
| **Extensions** | `gregExt.<Name>/` — one repo each, directly under `gregFramework/`. |
| **Docs** | `gregWiki/` — documentation site repository. |

## Hook registry

Hook naming and the registry are owned by core; when repos split, **core** remains the source of truth.

## Tools

- **Core tools:** `gregCore/tools/`
- **MCP runtime:** `gregCore/mcp-server/`
- **Hook / mapping utilities:** also under core tools, versioned with the core repo.

## Steam & Workshop

Workshop templates and deployment scripts live in the core repo under `gregCore/Templates/` and `gregCore/scripts/`.
