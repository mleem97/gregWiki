---
id: fmf-hook-naming
title: FMF Hook & Event Naming
description: Standards for naming events and hooks in the gregFramework ecosystem.
---

# Naming Conventions

To ensure cross-language compatibility (C#, Rust, Lua) and long-term stability, gregFramework follows a strict naming and identification hierarchy.

## 1. Event Identification

Since v2.0, events are identified by two systems:

### Numeric IDs (Primary for FFI)
Numeric `uint` IDs are the **Single Source of Truth** for the FFI bridges. They are defined in the `GregEventId` enum.
- **Example**: `100` is always `MoneyChanged`.
- **Why**: Faster performance in Rust and less error-prone string passing.

### Canonical Strings (Secondary)
String-based hook names follow the `greg.<DOMAIN>.<Action>` format.
- **Example**: `greg.PLAYER.CoinChanged`
- **Why**: Human readability in logs and compatibility with the `GregEventDispatcher` bus.

## 2. Domain Segments

All identifiers must belong to an approved domain.

| Domain | Scope |
|--------|--------|
| `ECONOMY` | Money, XP, Reputation, Shop |
| `HARDWARE` | Servers, Switches, Racks, Cables |
| `LIFECYCLE` | Save, Load, Day/Month transition |
| `NPC` | Technicians, Customers, Staff |
| `INPUT` | Keybinds, UI Actions |
| `SYSTEM` | Framework internal signals |

## 3. Method Naming (API)

Methods in `GregAPI` and the FFI bridges should follow these rules:
- **Getters**: `Get[Subject][Attribute]` (e.g., `GetPlayerMoney`)
- **Setters**: `Set[Subject][Attribute]` (e.g., `SetTimeScale`)
- **Actions**: `[Verb][Subject][Object]` (e.g., `DispatchRepairServer`)

## 4. Cross-Language Style

| Language | Case Style | Example |
| --- | --- | --- |
| **C#** | PascalCase | `GregAPI.LogInfo` |
| **Rust** | snake_case | `api.log_info` |
| **Lua** | snake_case | `greg.log_info` |

---
*Best Practice: When contributing to the core, always ensure your new API method follows these naming patterns to maintain consistency across the SDK.*
