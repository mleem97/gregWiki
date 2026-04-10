---
id: modding-language-requirement
title: Modding language (C# only)
slug: /reference/modding-language-requirement
description: Mandatory language for mods, MelonLoader plugins, and extensions — C# only.
---

# Modding language (C# only)

## Requirement

**All logic for mods, MelonLoader plugins, and framework extensions must be implemented in C#.**

That applies to anything shipped as a **`gregMod.*`**, **`gregExt.*`**, or **`FFM.Plugin.*`** / **`FMF.*`** module that loads through the MelonLoader / IL2CPP stack: gameplay code, Harmony patches, UI, networking hooks, and data handling belong in **C#** (typically targeting **.NET** compatible with your MelonLoader build).

## Rationale

- **MelonLoader** loads managed **.NET** assemblies; Harmony and the interop layer are built around C#.
- A single language keeps reviews, debugging, and CI consistent for contributors.

## What this does *not* restrict

- **Framework core** (`gregCore`) may still contain **non-C#** components maintained by core maintainers (for example the **Rust** FFI bridge under `gregCore/bridges/gregSta.RustBridge/`, build scripts, or tooling). Those are **not** substitutes for implementing mod/plugin/extension behavior outside C#.
- **Documentation**, **config** (JSON/YAML), and **assets** are not “logic” in this sense.
- **gregStore**, **gregWiki**, and other non–in-game stacks may use other languages as appropriate.

## See also

- [Framework](/wiki/mods/framework) — runtime surface for mod authors
- [FMF hook naming](/wiki/reference/fmf-hook-naming)
