---
title: Conflict Detection and Resolution
description: Learn how gregCore manages mod overlaps and ensures system stability
path: /advanced/conflicts
---

# ⚔️ Conflict Detection and Resolution

In a heavily modded environment, two or more mods will eventually try to modify the same data or intercept the same action (e.g., two mods trying to bind the `F8` key). Without central management, this leads to "Ghost Input," double-billing, or game crashes. 

gregCore's **Conflict Resolution Service (CRS)** is designed to prevent these issues.

---

## 1. Keybind Conflicts

When a mod registers a keybind via `GregAPI.Input.RegisterKeybind()`, the CRS checks the master registry.

### Detection logic:
1.  **Direct Overlap**: Mod A and Mod B both use `KeyCode.F8`.
2.  **Notification**: gregCore logs a `[WARNING]` in the console: 
    > `Conflict: Key F8 is already registered by gregMod.ResetSwitch. gregMod.MyNewMod may not work as expected.`
3.  **Resolution**: gregCore gives priority to the **first-registered mod**. The second mod's callback is suppressed unless the user rebinds it in the [Mod Settings Hub](/ui/custom-panels).

---

## 2. Resource Injection Conflicts

If two mods try to register a `CustomServerDef` with the same `InternalId` (e.g. `greg.super_server`), the registration will throw a **`GregConflictException`**.

### Prevention:
Always prefix your `InternalId` with your mod name or developer ID.
- **Bad**: `super_server`
- **Good**: `myname.super_server`

---

## 3. Patching Conflicts (Harmony)

Standard Harmony patching can "overwrite" other patches if not used carefully. gregCore mitigates this by providing **Hook Payloads**.

- **Modding WITHOUT gregCore**: Two mods patch `BankManager.AddMoney`. Mod A uses a `Prefix` to double the money. Mod B uses a `Prefix` to subtract a tax. They fight over the `__result`.
- **Modding WITH gregCore**: Both mods subscribe to the `greg.economy.MoneyChanged` event. They both receive the payload and apply logic to their own copy of the state, or command the Economy service to apply a follow-up transaction. This is **non-destructive**.

---

## 4. UI Layout Conflicts

When multiple mods inject panels into the `PauseMenu`, gregCore uses a **Virtual Layout Engine**.
- It creates individual tabs for each mod instead of letting them fight for space on the "General" settings screen.
- If a mod tries to inject a UI element into a protected native area (like the Main Menu), gregCore will move it to a safe "Modifications" sidebar.

---

## 5. Conflict Diagnostics Tool

gregCore includes a hidden diagnostic mode to help maintainers track down desyncs.

1.  Enable `DiagnosticsMode` in the gregCore Settings.
2.  Check the `greg_conflicts.log` in the game folder.
3.  This log lists every event callback that took longer than 50ms to execute, helping you find "heavy" mods that are blocking others.

---

## ⚔️ Known Conflict Matrix

The following table tracks known historical and structural conflicts identified during the transition to Unity 6 and gregCore v2.0.

| Conflict | Root Cause | Framework Resolution | Status |
| :--- | :--- | :--- | :--- |
| **Rust Bridge vs Color Mods** | Multiple independent shop patches | Official `GregRustPluginBridge` + unified shop composition | ❌ MISSING |
| **Shop Patch Collisions** | Direct patching of same UI methods | `GregShopExtensionService` (Work in Progress) | ❌ MISSING |
| **Trolley Transform Loop** | High-frequency object checks in hot path | `GregTrolleyConfigService` + batch updates | ❌ MISSING |
| **IL2CPP Postfix Instability** | Fragile postfix patterns in IL2CPP | Safe prefix-safe interception + documented templates | ⚠️ PARTIAL |
| **Save/Reload Data Loss** | No shared persistence contract | `GregModPersistenceService` lifecycle contract | ❌ MISSING |

---

## 🛡️ Best Practices

1.  **Unique Namespacing**: Use unique IDs for everything (Configs, Settings, Keybinds).
2.  **Weak Subscriptions**: If your mod doesn't *need* to change a value, subscribe to the event as a "Listener" rather than an "Interferer."
3.  **Check Registration Status**: In C#, always check the return value of `Register...` calls. If it returns `false`, a conflict occurred.

---

## 📖 Related Links
*   [**API Hooks Reference**](/api/hooks)
*   [**Framework Stability Audit**](/advanced/stability-audit)
*   [**UI Custom Panels**](/ui/custom-panels)
