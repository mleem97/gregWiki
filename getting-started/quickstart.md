---
title: Quickstart - Build Your First Mod
description: Set up your environment and build a simple mod in less than 5 minutes.
---

# ⚡ Quickstart

Welcome to the **gregFramework** ecosystem! This guide will help you set up your environment and build a simple "Hello World" mod in less than 5 minutes.

## 1. Prerequisites
- **Visual Studio 2022** or **VS Code** with .NET 6 SDK.
- **MelonLoader v0.6.0+** installed in your Data Center game folder.
- **gregCore.dll** placed in the `Mods/` folder of your game.

## 2. Basic Code Structure
Open your new project. Your main class should look like this:

```csharp
using MelonLoader;
using UnityEngine;
using greg.Sdk;

[assembly: MelonInfo(typeof(MyMod.Main), "MyMod", "1.0.0", "YourName")]
[assembly: MelonGame("Waseku", "Data Center")]

namespace MyMod;

public class Main : MelonMod
{
    public override void OnInitializeMelon()
    {
        MelonLogger.Msg("Hello gregFramework!");
    }

    public override void OnUpdate()
    {
        // Simple Input check
        if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.F5))
        {
            MelonLogger.Msg("F5 pressed - Mod is working!");
        }
    }
}
```

## 3. Build & Run
1. Press `F6` or run `dotnet build`.
2. Copy the resulting `.dll` from `bin/Release/net6.0/` to your game's `Mods/` folder.
3. Start the game!

## 4. Next Steps
- Explore the [Hooks Catalog](/api/hooks) to interact with game logic.
- Learn about [Visual Philosophy](/ui/visual-philosophy) to style your mod.

*Tip: Always use the Framework Guard Pattern for complex mods!*
