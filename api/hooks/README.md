---
title: Hooks Reference
description: Documentation for 1771 standardized game hooks in gregCore
path: /api/hooks
---

# 🪝 Hooks Reference

gregCore provides a massive catalog of **1771 hooks** that intercept almost every meaningful action within *Data Center*. These hooks are categorized by their functional group (e.g., Audio, Economy, Hardware, UI).

## 📂 Categories

Browse the hooks by functional group:

*   **[Audio](/api/hooks/audio)**: Sound effects, music transitions, and source management.
*   **[Economy](/api/hooks/economy)**: Money changes, job payments, shop transactions.
*   **[Hardware](/api/hooks/hardware)**: Server racking, cabling, power states, component health.
*   **[UI](/api/hooks/ui)**: Menu navigation, panel interactions, notifications.
*   **[AI & World](/api/hooks/ai)**: Employee pathfinding, worker tasks, day/night cycles.

---

## 🏗️ How Hooks Work

A hook in gregCore is an interception of a native C# method call. When the game calls a hooked method, gregCore:
1.  **Captures** the parameters passed to the method.
2.  **Wraps** them in an `EventPayload` object.
3.  **Broadcasters** the event to the `EventBus`.
4.  **Executes** any custom callbacks registered in your mods.

### Payload Structure
Hooks generally pass a payload as a dictionary of key-value pairs. 

```csharp
// Example: greg.hardware.ServerPowered
// Payload keys:
// "InternalId" -> string
// "State"      -> bool
// "Position"   -> Vector3
```

---

## 🛡️ Safe Usage Notes

::: warning
**Performance Impact**: While gregCore hooks are optimized, subscribing to high-frequency hooks (like `AudioManager.Update`) in every mod can degrade FPS. Use frame-throttling or reactive logic where possible.
:::

::: danger
**Re-entry Hazards**: Never call a service that triggers a hook from inside that same hook's callback without safety checks. This will cause an infinite loop and crash the game (StackOverflowException).
:::

---

## 🔍 Searching for a Hook
You can search the sidebar or use the `/api/hooks/` path structure to find specific class-method intercepts. Every hook page includes multi-language examples for quick implementation.
