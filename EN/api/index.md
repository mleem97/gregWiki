Title: API Reference Overview
Path: /api/index
Type: Overview
Audience: mod developer, framework developer
Summary: Central hub for all technical API documentation, including gregCore SDK, hooks, and game internal classes.
Suggested Tags: api, reference, hub, index
Related Pages: /api/hooks/catalog, /api/game-api-reference, /api/models/uma-reference
Split Recommendation: Create overview + children

# API Reference

The **gregFramework API** is divided into three primary layers, each serving a different purpose for mod development.

---

## 🏛️ Layer 1: gregCore SDK (Public API)
This is the recommended entry point for most mods. It provides a stable, type-safe, and multi-language bridge to game systems.

- **[SDK Services](./services/index)**: Access Economy, UI, World, and Persistence logic.
- **[Hook Catalog](./hooks/catalog)**: Searchable list of all 309 intercepted game events.
- **[Polyglot SDK](./polyglot-sdk)**: Cross-language usage (Lua, Rust, JS).

## 🧩 Layer 2: Game API (Il2Cpp Internals)
For advanced mods that need to interact directly with the *Data Center* game engine.

- **[Game API Reference](./game-api-reference)**: Factual lookup for singletons, classes, and methods in `Assembly-CSharp.dll`.
- **[UMA Reference](./models/uma-reference)**: Specialized guide for the Unity Multipurpose Avatar system.

## 🌉 Layer 3: Registries & Models
Data models and registration patterns for injecting custom content.

- **[Hardware Registry](./registries/index)**: Templates and rules for custom Servers and Switches.
- **[Workflow Models](./models/index)**: Customer definitions and SLA rules.

---
[Next: Hooks Catalog](./hooks/catalog)
