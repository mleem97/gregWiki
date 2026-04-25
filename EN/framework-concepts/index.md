---
title: Framework Concepts
description: The architecture of gregCore
path: /framework-concepts
---

# 🧠 Framework Concepts

gregCore is built on four pillars: **Hooks**, **Services**, **Registries**, and the **EventBus**. Understanding these is key to building complex mods.

## 🪝 Hooks
Hooks are the lifeblood of gregCore. They are automated Harmony patches that listen for game events.
- **Automated**: No need to write your own `[HarmonyPatch]` attributes for common methods.
- **Safety**: Hooks are wrapped in exception handlers to prevent game crashes.
- **Standardized**: Every hook provides a canonical `EventPayload`.

## 🛠️ Services
Services are specialized modules that provide high-level APIs for game systems.
- **Economy**: Manage money, XP, and reputation.
- **Hardware**: Interact with servers, switches, and racks.
- **NPC**: Manage employees and technicians.
- **UI**: Build custom panels and settings.

## 🚌 EventBus
The EventBus allows for loosely coupled communication.
- **Inter-Mod**: Mod A can fire an event that Mod B listens to.
- **Inter-Language**: A C# mod can trigger an event consumed by a Lua script.

## 🗃️ Registries
Registries are used to add custom content. When you register a new Server Type, gregCore handles the persistence, UI integration, and game logic mapping for you.

---

::: tip
Explore the [API Reference](/api) for a full list of available services and hooks.
:::
