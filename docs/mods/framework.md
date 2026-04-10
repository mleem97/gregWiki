---
title: Framework
sidebar_label: Framework
---

**Language:** mod, plugin, and extension **logic must be written in C#** — see [Modding language (C# only)](/wiki/reference/modding-language-requirement).

**Stack position:** gameplay **mods** sit on top of **plugins** and the **framework SDK**; the **ModManager** (MAUI) is the out-of-game front-end — see [System architecture & documentation principles](/wiki/meta/system-architecture-principles).

The core `FrikaMF` runtime provides:

- Harmony patch integration for gameplay hooks
- Event dispatch and stable event contracts
- Native bridge for Rust modules
- Shared game API abstractions for mod authors

## Core references

- [FMF hooks (generated)](/wiki/framework/fmf-hooks) — hook surface and categories (deklarativ; kann der JSON-Registry folgen)
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — **`FMF.*`** Doku-Konvention
- [greg hooks catalog](/wiki/reference/greg-hooks-catalog) — **EventId → `greg.*`** (`GregNativeEventHooks`, generiert)
- [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog) — Kurzüberblick / Redirect (ersetzt altes `HookNames`)
- [greg hooks registry (IL2CPP)](/wiki/reference/greg-hooks-registry) — `greg_hooks.json`, Generator, Harmony-Deduplizierung
- [Framework architecture](/wiki/framework/architecture) — runtime layout and bridges
