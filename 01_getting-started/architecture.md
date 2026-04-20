---
title: System Architecture
description: Overview of the gregFramework layers and Data Center integration.
---

The **gregFramework** is designed as a multi-layer middleware that sits between the native Unity game engine and the high-level modding API.

## Core Layers

1. **Game Layer (IL2CPP):** Low-level Harmony patches and event extraction from the game binaries.
2. **Framework Core (gregCore):** The central registry, service orchestrator, and event bus.
3. **API Surface (GregAPI):** The **Single Source of Truth** statische API, encapsulating all game domains (Economy, World, Time, etc.).
4. **FFI Bridges:** Dedicated bridges for multi-language support (Rust, Lua, etc.).

## Visual Overview

Mod author access flows through the following hierarchy:

*   **C# Mods:** Direct access to `gregCore.PublicApi` or `gregCore.API.GregAPI`.
*   **Rust Mods:** Access via the `RustFFIBridge` using a function pointer table.
*   **Lua Mods:** Access via the `LuaFFIBridge` (MoonSharp) using the global `greg` table.

## Language Support

| Language | Bridge | Strategy | Best for... |
| --- | --- | --- | --- |
| **C#** | Native | Direct DLL loading | Complex IL2CPP integration |
| **Rust** | `RustFFI` | C-compatible FFI | High performance & safety |
| **Lua** | `LuaFFI` | MoonSharp (Interpreter) | Rapid prototyping & UI |
