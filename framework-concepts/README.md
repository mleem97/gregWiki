# Core Concepts

Understanding these five pillars will make you a gregCore expert.

## 1. The Hook System

Hooks are the heart of gregCore. They allow your mod to "hook" into game events without knowing the game's internal code.

### Hook Naming
Hooks follow a standard naming convention: `greg.DOMAIN.Action`.
Example: `greg.economy.MoneyChanged`

### Listening to Hooks
```csharp
Api.Hooks.On("greg.economy.MoneyChanged", (payload) => {
    var newAmount = payload.Data["amount"];
    Logger.Info($"Player now has ${newAmount}");
});
```

### Firing Hooks
You can also trigger hooks yourself to notify other mods.
```csharp
var payload = new GregPayload("my.custom.hook", "MyMod");
payload.Data["key"] = "value";
Api.Hooks.Fire("my.custom.hook", payload);
```

## 2. Services

Services are reusable logic components provided by gregCore.

-   **Economy**: Check and set money, XP, and reputation.
-   **World**: Query servers, switches, and racks.
-   **UI**: Show notifications and custom panels.
-   **Time**: Manage game time and timescale.

Example:
```csharp
double currentMoney = Api.Economy.GetBalance();
Api.UI.ShowNotification($"Current Balance: {currentMoney}");
```

## 3. Registries

Registries are used to add *new* things to the game. Instead of just modifying existing behavior, you can register:
-   Custom Server Types
-   Custom Items
-   Custom NPCs
-   Custom Keybinds

## 4. Payloads

A `GregPayload` is the data package sent with a hook. It always contains:
-   `HookName`: The string ID of the hook.
-   `Trigger`: Who fired the hook (e.g., "Game", "MyMod").
-   `Data`: A dictionary of values specific to the event.

## 5. Lifecycle

gregCore mods go through a specific lifecycle:
1.  **Load**: The DLL/Script is detected and loaded.
2.  **Initialize**: `OnLoad()` is called. Setup your internal state here.
3.  **Ready**: `OnReady()` is called. The game is fully loaded, and you can now use all gregCore services.
4.  **Shutdown**: `OnUnload()` is called when the game closes or the mod is disabled.

---
[Next: Modding by Language](../04-modding-by-language/README.md)
