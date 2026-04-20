---
title: API Reference
description: Technical documentation for gregCore's services, hooks, and payloads
path: /api
---

# 📚 API Reference

The gregCore API is the bridge between your custom code and the *Data Center* game engine. It is designed to be stable, strongly typed (where applicable), and highly performant.

## 🏗️ Structure of the API

The API is divided into several major areas to help you find what you need quickly:

### 🪝 [Hook Registry](/api/hooks)
Explore the **1771 standardized hooks** that gregCore intercepts from the game engine. These are the primary way to listen for in-game actions like a server powering on or a customer making a purchase.

### 🛠️ [Services](/api/services)
High-level managers for interacting with game systems. Services allow you to modify the world without dealing with raw GameObjects.
*   **Economy Service**: Manage player balance and transactions.
*   **Hardware Service**: Register custom servers, switches, and racks.
*   **UI Service**: Inject custom panels and settings into the native menu.
*   **Persistence Service**: Handle savegame-safe data storage.

### 📦 [Payloads & Models](/api/payloads)
Documentation for the data structures passed through the EventBus. Understanding the shape of a payload is crucial for correctly processing hook data.

---

## ⚖️ Usage Philosophy

gregCore follows a **"Broker"** pattern. You do not talk directly to the game's internal `MonoBehaviour` classes (unless explicitly necessary). Instead:
1.  **Subscribe** to an event in gregCore.
2.  **Process** the data delivered via the Payload.
3.  **Command** a gregCore service to take action.

This ensures that even if the developer renames a class in a game update, gregCore's API remains the same, and your mod keeps working.

---

## 🛠️ Global Access (C#)

In C#, the primary access point is the `gregCore.API.GregAPI` static class.

```csharp
using gregCore.API;

// Accessing the Economy Service
double balance = GregAPI.Economy.GetBalance();

// Subscribing to an event
GregAPI.Input.RegisterKeybind(...);
```
