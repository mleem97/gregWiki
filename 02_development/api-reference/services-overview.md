---
title: SDK Services Overview
description: A complete index of the services available in the gregSdk for mod development.
---

The **gregSdk** provides a robust set of services to interact with Data Center's core systems. Starting with v2.0, all access is consolidated into a single, unified API.

## The Single Source of Truth: `GregAPI`

The `GregAPI` is the primary entry point for all mods, regardless of language (C#, Rust, or Lua). It encapsulates the complex IL2CPP game logic into a clean, static interface.

### Primary Domains

| Domain | Responsibility | Methods (Examples) |
| --- | --- | --- |
| **Economy** | Money, XP, Reputation | `GetPlayerMoney()`, `AddXP()` |
| **World** | Infrastructure status | `GetServerCount()`, `GetBrokenSwitchCount()` |
| **Technicians** | Worker AI | `DispatchRepairServer()`, `GetFreeTechnicianCount()` |
| **Time** | Simulation control | `GetTimeOfDay()`, `SetTimeScale()` |
| **Player** | Physical state | `GetPlayerPosition()` |
| **Events** | Communication | `Subscribe()`, `FireEvent()` |
| **Config** | Mod settings | `ConfigSetBool()`, `ConfigGetString()` |

---

## Core Infrastructure Services

While `GregAPI` is recommended for most tasks, advanced mods can interact with specialized services directly.

### 💾 Persistence & State
- **GregPersistenceService**: Handles saving and loading mod-specific data.
- **GregSaveService**: Hooks into the main game save system.

### 🌐 Networking & IPAM
- **GregIpService**: The primary service for IP address management (IPAM).
- **GregVlanService**: Manages virtual network segmentation.

### 🎨 User Interface (UI)
- **GregUiService**: The standard for creating integrated UI panels.
- **GregNotificationService**: Standardized toast and popup notifications.

## Usage Example (C#)

```csharp
using gregCore.API;

// Get current stats
double money = GregAPI.GetPlayerMoney();
uint servers = GregAPI.GetServerCount();

// React to events
GregAPI.Subscribe(GregEventId.ServerBroken, (data) => {
    GregAPI.ShowNotification("A server just died!");
});
```
