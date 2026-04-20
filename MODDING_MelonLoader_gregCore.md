---
id: modding-melonloader-gregcore
title: MelonLoader + gregCore v2.0 Tutorial
description: Beginner tutorial for building your first Data Center mod with the modernized gregCore v2.0 API.
---

## 1. Prerequisites (5 min)

Before you start, make sure your development environment is ready:

- ✅ **Visual Studio 2022** (Community Edition is sufficient)
- ✅ **.NET 6 SDK** (Important: Data Center uses .NET 6 for IL2CPP)
- ✅ **Data Center** (Steam version)
- ✅ **MelonLoader v0.7.2+** (Open Beta)
- ✅ **gregCore.dll** (In the game's `Mods/` folder)
- ✅ **MoonSharp.Interpreter.dll** (Also in the `Mods/` folder)

---

## 2. Getting Started with GregAPI (v2.0)

Since version 2.0, gregCore provides a central, static API (**`GregAPI`**) that serves as the *Single Source of Truth*. You no longer have to deal with complex IL2CPP classes or finding game objects manually.

### 2.1 Project Setup

Create a new C# Class Library (.NET 6) and add references to `MelonLoader.dll` and `gregCore.dll`.

### 2.2 The Framework Guard

Every mod should check if the framework is ready. In v2.0, you use the static `greg.IsInitialized` property for this.

```csharp
using MelonLoader;
using gregCore.API; // New central namespace
using gregCore.PublicApi;

[assembly: MelonInfo(typeof(MyMod.Main), "MyMod", "1.0.0", "teamGreg")]
[assembly: MelonGame("Waseku", "Data Center")]

namespace MyMod;

public class Main : MelonMod
{
    private bool _initialized = false;

    public override void OnUpdate()
    {
        // Initialization as soon as gregCore is ready
        if (!_initialized && gregCore.PublicApi.greg.IsInitialized)
        {
            InitializeMod();
            _initialized = true;
        }
    }

    private void InitializeMod()
    {
        GregAPI.LogInfo("My mod is now connected to the framework!");
        
        // Show in-game notification
        GregAPI.ShowNotification("Mod Activated!");
    }
}
```

---

## 3. Interacting with the Game

The `GregAPI` is divided into logical domains:

### 3.1 Economy
```csharp
double money = GregAPI.GetPlayerMoney();
GregAPI.SetPlayerMoney(money + 5000);
```

### 3.2 World & Hardware
```csharp
uint servers = GregAPI.GetServerCount();
uint brokenSwitches = GregAPI.GetBrokenSwitchCount();
```

### 3.3 Subscribing to Events
Use the numeric `GregEventId` system for maximum stability.

```csharp
GregAPI.Subscribe(GregEventId.ServerBroken, (data) => {
    GregAPI.LogError("A server has failed! Dispatching technician...");
    GregAPI.DispatchRepairServer();
});
```

---

## 4. Deployment & Testing

1. Compile your project as a DLL.
2. Copy the file to the `Data Center/Mods/` folder.
3. Start the game and check the **MelonLoader Log**.

You should see:
`[GregAPI] My mod is now connected to the framework!`

---

## 5. Pro Tip: Multi-Language

Thanks to the new bridge architecture, you can write the same code in **Lua** (no compilation required!):

```lua
-- Plugins/Lua/MyMod/main.lua
function on_init()
    greg.log_info("Hello from Lua!")
    greg.subscribe_event(201, function(data) -- 201 = ServerBroken
        greg.show_notification("Server broken!")
    end)
end
```

---
*Next Steps: Check out the [API Reference](/docs/02_development/api-reference/services-overview) for all available methods.*
