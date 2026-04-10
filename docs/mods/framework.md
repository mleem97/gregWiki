---
title: Framework
sidebar_label: Framework
---

**Language:** mod, plugin, and extension **logic must be written in C#** — see [Modding language (C# only)](/wiki/reference/modding-language-requirement).

The core `FrikaMF` runtime provides:

- Harmony patch integration for gameplay hooks
- Event dispatch and stable event contracts
- Native bridge for Rust modules
- Shared game API abstractions for mod authors

## Core references

- [FMF hooks (generated)](/wiki/framework/fmf-hooks) — hook surface and categories
- [FMF hook naming](/wiki/reference/fmf-hook-naming) — `FMF.*` vs legacy `FFM.*`
- [FMF hooks catalog](/wiki/reference/fmf-hooks-catalog) — strings from core `HookNames.cs`
- [Framework architecture](/wiki/framework/architecture) — runtime layout and bridges
