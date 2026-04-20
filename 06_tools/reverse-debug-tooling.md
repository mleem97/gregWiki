---
title: Reverse Engineering & Debugging
sidebar_label: Reverse & Debug
description: Toolchain for IL2CPP metadata analysis, hook discovery, and runtime debugging.
---

## IL2CPP analysis tools

- **Cpp2IL**
  - **Use for:** Recovering metadata and method surfaces from IL2CPP builds.
- **Il2CppDumper / Il2CppInspector**
  - **Use for:** Type/method discovery and signature mapping for hooks.

## Managed inspection tools

- **dnSpyEx / ILSpy**
  - **Use for:** Inspecting managed assemblies, browsing symbols, and quick API checks.

## Runtime diagnostics

- **MelonLoader logs**
  - `MelonLoader/Latest.log`
  - First stop for load failures, missing dependencies, and patch exceptions.
- **Framework diagnostics pages**
  - `/04_community/troubleshooting`
  - `/04_community/precheck-readiness-matrix`

## Practical workflow

1. Confirm issue in runtime logs.
2. Match behavior against an existing `greg.*` hook.
3. Only if missing, derive hook candidate from IL2CPP tools.
4. Patch narrowly, then document and register naming consistently.
