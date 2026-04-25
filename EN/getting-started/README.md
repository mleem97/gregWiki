---
title: Getting Started with gregCore
description: Introduction to the gregCore modding framework for Data Center
path: /getting-started
---

# Getting Started with gregCore

Welcome to the **gregCore SDK Knowledge Base**. This documentation is the definitive source of truth for modding *Data Center* using the gregCore framework. 

Whether you're opening an IDE for the first time or you're a seasoned reverse-engineer, this wiki is designed to take you from a blank file to a fully featured custom server, custom NPC, or integrated settings UI.

---

## What is gregCore?

*Data Center* is an IL2CPP-compiled Unity game. Standard Unity modding usually involves using tools like **Harmony** to patch raw, unmanaged memory pointers. This is brittle, difficult to debug, and prone to breaking every time the game updates.

**gregCore** acts as a **Stable Middleware Layer** between your mod and the game. 

Instead of searching for random internal game methods to hook, gregCore exposes **1700+ standardized hooks** and **high-level services**. You simply register a callback to a gregCore event, and the framework safely handles the complex memory injection in the background.

| Modding without gregCore | Modding with gregCore |
|---|---|
| Break on every game update | Immune to minor game updates |
| Hard crashes on bad memory reads | Safe error handling and logged payloads |
| C# Only (MelonLoader) | Write in C#, Lua, Python, Rust, Go, JS |
| Conflicting UI elements | Centralized Mod Settings Hub |

---

## 🏗️ Core Architecture (The 3 Pillars)

To use gregCore effectively, you need to understand its three pillars:

### 1. The Hook Registry
gregCore intercepts native game functions and converts them into manageable events. For example, when a server is powered on, gregCore intercepts the game's `ServerObject.PowerOn()` and broadcasts `greg.hardware.ServerPowered`.

> 👉 Read the exhaustive list of all intercepts in the [**API Hooks Reference**](/api/hooks).

### 2. The Abstract Services
Instead of manipulating raw GameObjects, you use gregCore Services. Want to add money? Instead of searching the IL2CPP dump for the economy manager, you use `GregAPI.Economy.AddPlayerMoney(500)`.

> 👉 Explore the available services in the [**Services Guide**](/api/services).

### 3. The Settings & UI Hub
gregCore manages a centralized UI via the game's `PauseMenu`. You don't need to learn Unity UGUI to add a settings toggle; you simply register your keys and sliders via `GregAPI.Settings.RegisterToggle()`, and gregCore builds the native UI for you.

---

## 🚀 Choose Your Path

gregCore supports 6 languages. Pick your preferred path to get started:

- [**C# Guide**](/guides/languages/csharp): The most powerful approach. Direct integration via MelonLoader.
- [**Lua Guide**](/guides/languages/lua): The most beginner-friendly approach. Script mods instantly without recompiling.
- [**Rust Guide**](/guides/languages/rust): High performance, strictly-typed integration.
- [**Python Guide**](/guides/languages/python): Fast prototyping and data-heavy logic.
- [**JavaScript Guide**](/guides/languages/javascript): Web-developer friendly syntax.
- [**Go Guide**](/guides/languages/go): Concurrency and network-focused mods.

---

## 🛠️ Content Creation Walkthroughs

If you want to jump straight into adding content, check out our highly detailed workflows:

1. [**Custom Servers & Hardware**](/guides/content/custom-servers)
2. [**Custom Switches & Network IPs**](/guides/content/custom-switches)
3. [**Custom NPCs & Employees**](/guides/content/custom-npcs)
4. [**Custom Customers & Contracts**](/guides/content/custom-customers)

---

## Next Steps

1.  **[Installation & Prerequisites](/getting-started/installation)**: Get the right tools installed in your game directory.
2.  **[Framework Dependencies](/getting-started/dependencies)**: Detailed list of libraries (MoonSharp, Jint, etc.) used by gregCore.
3.  **[Project Setup](/getting-started/setup)**: Configure your IDE for C#, Lua, or other supported languages.
4.  **[Your First Mod](/getting-started/first-mod)**: Build a simple "Hello World" mod and see it running in-game.
5.  **[Essential Concepts](/framework-concepts)**: Learn about the Five Pillars of gregCore (Hooks, Services, Registries, Payloads, Lifecycle).
