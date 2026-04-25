---
title: Language Hub
description: Choose your preferred modding language
path: /guides/languages
---

# 🌐 Language Hub

gregCore is a truly multi-language framework. Whether you prefer the performance of C#, the flexibility of Lua, or the power of Python, we've got you covered.

## Supported Languages

| Language | Engine | Level | Best For |
| :--- | :--- | :--- | :--- |
| **[C#](/guides/languages/csharp)** | Native (.NET 6) | Advanced | High-performance systems, complex Harmony patches. |
| **[Lua](/guides/languages/lua)** | MoonSharp | Beginner | Quick scripts, UI tweaks, gameplay logic. |
| **[Python](/guides/languages/python)** | pythonnet | Medium | Data processing, automation scripts. |
| **[Rust](/guides/languages/rust)** | FFI Bridge | Expert | Maximum performance, low-level optimizations. |
| **[JavaScript](/guides/languages/javascript)** | Jint | Beginner | Web-like scripting, simple automation. |
| **[Go](/guides/languages/go)** | FFI Bridge | Expert | Concurrent systems, native performance. |

## How it Works
gregCore hosts multiple "Language Bridges". Each bridge maps the internal C# API and EventBus to the target language, ensuring a consistent experience across all platforms.

---

::: warning
**FFI Bridges (Rust/Go)** require additional SDK headers and a specific compilation workflow.
:::
