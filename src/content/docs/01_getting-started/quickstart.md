---
title: Quickstart - Build Your First Mod
description: Set up your environment and build a simple mod in less than 5 minutes.
---

Welcome to the **gregFramework** ecosystem! This guide will help you set up your environment and build a simple "Hello World" mod in less than 5 minutes.

## 1. Prerequisites
- **Visual Studio 2022** or **VS Code** with .NET 6 SDK.
- **MelonLoader v0.7.2+** installed in your Data Center game folder.
- **gregCore.dll** placed in the `Mods/` folder of your game.

## 2. Using the Templates
The easiest way to start is using the `gregModmanager` template system:
1. Open `gregModmanager`.
2. Go to the **New Project** tab.
3. Select the **gregCore Framework** template.
4. Enter a name (e.g., `MyFirstMod`) and click **Create**.

## 3. Basic Code Structure
Open your new project. Your main class should look like this:

```csharp
using MelonLoader;
using UnityEngine;
using greg.Core;
using greg.Sdk.Services;

[assembly: MelonInfo(typeof(MyFirstMod.Main), "MyFirstMod", "1.0.0", "YourName")]
[assembly: MelonGame("Waseku", "Data Center")]

namespace MyFirstMod;

public class Main : MelonMod
{
    public override void OnInitializeMelon()
    {
        MelonLogger.Msg("Hello gregFramework!");
        
        // Register your mod for discovery
        GregModRegistry.Register("MyFirstMod", "1.0.0");
    }

    public override void OnUpdate()
    {
        if (UnityEngine.InputSystem.Keyboard.current.f5Key.wasPressedThisFrame)
        {
            GregNotificationService.Show("Mod is working!", "SUCCESS");
        }
    }
}
```

## 4. Build & Run
1. Press `F6` or run `dotnet build`.
2. Copy the resulting `.dll` from `bin/Debug/net6.0/` to your game's `Mods/` folder.
3. Start the game!

## 5. Next Steps
- Explore the [SDK Services](/docs/02_development/api-reference/game-system-bridges) to interact with game logic.
- Learn about [Custom UI](/02_development/ui/custom-ugui-csharp).
- Join our [Discord](https://discord.gg/greg) for support.

*Follow best practices: Always use SDK services instead of direct patches when possible.*
