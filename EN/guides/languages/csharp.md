---
title: C# Language Guide
description: Build high-performance native mods using .NET 6 and gregCore
path: /guides/languages/csharp
---

# 🔷 C# Language Guide

C# is the native language of the gregCore framework and MelonLoader. It offers the highest performance, full access to the Unity engine, and the ability to write custom Harmony patches beyond the standard hooks.

## 🛠️ Project Setup

1.  **Create a Class Library**: Open Visual Studio and create a new project using the **Class Library (.NET Core)** template.
2.  **Target Framework**: Set the target framework to `.NET 6.0`.
3.  **Add References**:
    *   `MelonLoader.dll` (from game folder)
    *   `gregCore.dll` (from `Mods/`)
    *   `UnityEngine.CoreModule.dll` (from `Data Center_Data/Managed/`)
    *   Il2Cpp Assemblies (from `MelonLoader/Il2CppAssemblies/`)

## 🧱 Standard Mod Structure

Every C# mod must inherit from `MelonMod`. You can use `GregAPI` directly to access all framework features.

```csharp
using MelonLoader;
using gregCore.API;
using gregCore.Sdk.Models;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        MelonLogger.Msg("C# Mod Initialized!");
        
        // 1. Subscribe to a gregCore Hook
        GregAPI.Hooks.On("greg.economy.PlayerCoinUpdated", OnMoneyChanged);
        
        // 2. Access a high-level Service
        double currentMoney = GregAPI.GetPlayerMoney();
        MelonLogger.Msg($"Player currently has: {currentMoney}");
    }

    private void OnMoneyChanged(GregPayload payload)
    {
        // Extract data from the payload
        float newValue = payload.Get<float>("NewValue");
        MelonLogger.Msg($"Money changed to: {newValue}");
    }
}
```

## 🪝 Using the SDK API

While you can use the standard `GregAPI` static class, for more advanced scenarios involving dependency injection or complex event handling, you can access the `IGregAPI` interface via the service container:

```csharp
var sdk = GregAPI.GetSdkApi();
sdk.On("greg.hardware.ServerPowered", (p) => {
    // ...
});
```

## 🎨 Building UI

C# mods should use the `GregUIBuilder` to maintain a native look and feel.

```csharp
public override void OnUpdate()
{
    if (UnityEngine.InputSystem.Keyboard.current.f9Key.wasPressedThisFrame)
    {
        var panel = GregUIBuilder.Create("Settings")
            .SetTitle("My C# Mod")
            .AddToggle("Fast Servers", true, (v) => { /* logic */ })
            .Build();
    }
}
```

## 🚀 Performance Best Practices

*   **Avoid Caching GameObjects**: GameObjects can be destroyed by the game engine. Always check for null.
*   **Static vs. Instance**: Keep your event handlers static where possible to avoid GC pressure.
*   **Safe Patching**: If you write custom Harmony patches, use `GregAPI.LogInfo` to track their success/failure.

---

::: tip
Check out the [Example Mods](/community/examples) on GitHub for full source code implementations.
:::
