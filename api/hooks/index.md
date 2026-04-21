---
title: Hooks Catalog
description: Complete reference for all 2134 gregCore intercepts
path: /api/hooks
---

# 🪝 Hooks Catalog

gregCore provides an unprecedented level of access to the internal workings of *Data Center* via its automated Hooking system. There are currently **2134 active intercepts** monitored by the framework.

## 🧭 How to Find a Hook

The quickest way to find a hook is to use the **Wiki.js Search Bar** at the top of the page. You can search by:
- **Game Class Name**: e.g., `Player`
- **Method Name**: e.g., `UpdateCoin`
- **Domain**: e.g., `Economy`
- **Hook ID**: e.g., `greg.economy.player.updatecoin`

## 📂 Hook Domains

Hooks are organized into logical domains to help you find the right event for your mod:

| Domain | Description | Count |
| :--- | :--- | :--- |
| **[Economy](/api/hooks/economy)** | Money, XP, Reputation, Shop, and Contracts. | 184 |
| **[Hardware](/api/hooks/hardware)** | Servers, Racks, Switches, and Power state. | 312 |
| **[Lifecycle](/api/hooks/lifecycle)** | Scene loading, Game start/save, Day/Month ticks. | 42 |
| **[NPC](/api/hooks/npc)** | Technicians, Employees, and AI behavior. | 156 |
| **[World](/api/hooks/world)** | Object spawning, movement, and physical interactions. | 420 |
| **[UI](/api/hooks/ui)** | Menus, Buttons, Tooltips, and HUD elements. | 289 |
| **[Networking](/api/hooks/networking)** | Packet flows, IPAM, and VLAN changes. | 94 |
| **[Persistence](/api/hooks/persistence)** | Data saving, loading, and serialization. | 56 |
| **[UnityEngine](/api/hooks/unityengine)** | Low-level Unity events (Awake, Start, Update). | 581 |

## 🧬 Anatomie of a Hook

Every hook documented in this catalog follows this structure:

### 1. The Canonical Name
Formatted as `greg.<DOMAIN>.<Action>`. This is the ID you use in `GregAPI.Hooks.On()`.

### 2. The Patch Strategy
- **Prefix**: Runs *before* the game method. Can be used to block or modify parameters.
- **Postfix**: Runs *after* the game method. Ideal for reacting to changes.

### 3. The Payload
A dictionary of data captured from the method arguments. 
> **Warning**: Never assume a payload key exists without checking the documentation or using `payload.Has("key")`.

---

::: warning
**Performance Note**: Subscribing to high-frequency hooks (like `UnityEngine.Update`) in interpreted languages (Lua/JS) can significantly impact your FPS. Always prefer domain-specific hooks where possible.
:::
