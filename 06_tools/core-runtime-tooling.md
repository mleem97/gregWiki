---
title: Core SDK + Runtime Tooling
sidebar_label: Core & Runtime
description: Essential tools to build, test, and operate mods/plugins against gregCore.
---

## 1) .NET SDK + IDE

- **Use for:** Building C# mods/plugins and tests.
- **Recommended:** `dotnet` SDK + Visual Studio 2022 or Rider.
- **Layer impact:** Core SDK, Plugin, Mod.

## 2) MelonLoader

- **Use for:** Runtime loader for Unity/IL2CPP mod injection.
- **Typical outputs:** `MelonLoader/Latest.log` for diagnostics.
- **Layer impact:** Runtime host between game and mod/plugin layers.

## 3) Harmony / HarmonyX

- **Use for:** Prefix/postfix/transpiler patching where direct API is unavailable.
- **Best practice:** Keep patches narrow and route results into canonical `greg.*` events.
- **Layer impact:** Core SDK internals and plugin integration.

## 4) gregCore Hook Catalog

- **Use for:** Discovering existing hook names before creating new patches.
- **Start at:** `/reference/greg-hooks-catalog`
- **Layer impact:** Core SDK contract and language bridge parity.

## 5) Cross-language bridges (Lua, TypeScript, Rust)

- **Use for:** Keeping same `greg.*` naming in multiple language runtimes.
- **Guides:**
  - `/02_development/modding-guides/lua-modding`
  - `/02_development/modding-guides/typescript-modding`
  - `/02_development/modding-guides/rust-modding`
- **Layer impact:** Language Bridge + Mod layers.
