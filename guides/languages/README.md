---
title: Language Guides
description: Choosing the right language for your gregCore mod
path: /guides/languages
---

# 🌐 Language Guides

gregCore is designed to be language-agnostic. While the game itself runs on IL2CPP, gregCore provides a standardized abstraction layer that allows you to write logic in the language that best fits your skill set or project requirements.

## Comparison at a Glance

| Language | Ease of Use | Performance | Main Use Case |
| :--- | :--- | :--- | :--- |
| **[C# (MelonLoader)](/guides/languages/csharp)** | Moderate | High | Complex systems, Performance-critical logic |
| **[Lua (Integrated)](/guides/languages/lua)** | Very High | Moderate | Fast prototyping, simple scripts, event handling |
| **[Rust (SDK)](/guides/languages/rust)** | Hard | Maximum | Memory-safe, heavy computation, advanced networking |
| **[JavaScript (V8)](/guides/languages/javascript)** | High | Moderate | Web developers, UI logic, data manipulation |
| **[Python (Embedded)](/guides/languages/python)** | High | Low | Data analytics, automation scripts |
| **[Go (Bridge)](/guides/languages/go)** | Moderate | High | Lightweight concurrency, background tasks |

---

## 🏗️ Common Concepts Across All Languages

Every language integration in gregCore follows the same conceptual pattern. Once you learn the pattern in one language, you can easily switch to another.

### 1. The Entry Point
Every mod has a way to bootstrap. In C#, it's a class inheriting from `MelonMod`. In scripted languages like Lua, it's a `main.lua` file.

### 2. Event Subscriptions (Hooks)
Regardless of language, you interact with the game by subscribing to strings like `greg.hardware.ServerPowered`.

### 3. Payload Objects
When an event fires, you receive a **Payload**. This is a dictionary-like object that you can query for data (strings, numbers, vectors).

---

## 🚀 Get Started

Select a language to see its specific setup, boilerplate, and advanced usage examples.

::: tip
**New to modding?** We recommend starting with [**Lua**](/guides/languages/lua). It requires no compilation and lets you see changes instantly.
:::
