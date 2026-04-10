---
title: FFI, hooks & Lua
sidebar_label: FFI, hooks & Lua (hub)
description: FFI, hook lists, naming — curated reference for mod and plugin authors.
---

# FFI, hooks & Lua

The framework is intended to act as a **hook proxy**: Unity / IL2CPP events are surfaced as **stable framework events** for mods — see [System architecture & documentation principles](/wiki/meta/system-architecture-principles).

- [FMF hooks](/wiki/framework/fmf-hooks) — generated hook surface
- [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog) — strings from core sources
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — `FMF.*` vs legacy `FFM.*`
- [greg hooks registry (IL2CPP)](/wiki/reference/greg-hooks-registry) — `greg_hooks.json`, `Greg*Hooks` Harmony emitters, regeneration script
- [Framework architecture](/wiki/framework/architecture) — bridges (including Rust) and runtime layout
- [Modding language requirement](/wiki/reference/modding-language-requirement) — C# policy for mods/plugins
