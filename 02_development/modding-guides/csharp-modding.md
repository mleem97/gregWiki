---
title: C# Modding Guide
sidebar_label: C# (Managed)
description: How to build high-performance managed C# mods using the gregCore v2.0 API.
---

# C# Modding with gregCore v2.0

C# remains the primary choice for building deep game integrations, custom UI panels, and framework-level plugins. With v2.0, we've simplified access to game logic through the **`GregAPI`**.

## 1. Project Requirements

- **.NET 6.0 SDK** (required for IL2CPP compatibility).
- **IDE**: Visual Studio 2022 (recommended) or VS Code.
- **References**:
    - `gregCore.dll`
    - `MelonLoader.dll`
    - `UnityEngine.CoreModule.dll` (from `Data Center/MelonLoader/Il2CppAssemblies`)

## 2. Using the `GregAPI`

The `gregCore.API` namespace is your gateway to the game.

### Bootstrapping

Always ensure `gregCore` is fully initialized before calling API methods.

```csharp
using MelonLoader;
using gregCore.API;
using gregCore.PublicApi;

namespace MyNamespace;

public class MyMod : MelonMod
{
    private bool _ready = false;

    public override void OnUpdate()
    {
        if (!_ready && greg.IsInitialized)
        {
            _ready = true;
            OnFrameworkReady();
        }
    }

    private void OnFrameworkReady()
    {
        GregAPI.LogInfo("System ready.");
    }
}
```

### Event Handling

v2.0 uses a stable numeric ID system for events.

```csharp
GregAPI.Subscribe(GregEventId.MoneyChanged, (data) => {
    double currentMoney = GregAPI.GetPlayerMoney();
    GregAPI.LogInfo($"New Balance: ${currentMoney}");
});
```

### World Interaction

```csharp
// Dispatch a technician to repair a random broken server
if (GregAPI.GetBrokenServerCount() > 0)
{
    GregAPI.DispatchRepairServer();
}
```

## 3. Advanced: Native IL2CPP Access

If the `GregAPI` doesn't cover your needs, you can still access the game's internal classes. We recommend wrapping these calls in `try-catch` blocks and contributing the missing logic to the `GregAPI` source.

```csharp
// Manual access to the Player Manager
var manager = global::Il2Cpp.PlayerManager.instance;
if (manager != null) {
    // custom logic
}
```

## 4. Deployment

1. Set build configuration to **Release**.
2. Build the project.
3. Copy the DLL from `bin/Release/net6.0/` to the game's `Mods/` folder.

---
*Best Practice: Always use `GregAPI.LogInfo()` instead of `MelonLogger.Msg()` for consistent mod attribution in the dev console.*
