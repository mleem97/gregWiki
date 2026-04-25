---
id: first-mod-tutorial
title: First Mod Tutorial (MelonLoader + gregCore)
description: Beginner tutorial for building a first Data Center mod with MelonLoader and gregCore.
---

# 🚀 Your First Mod (MelonLoader + gregCore)

In this guide, you'll learn how to set up your development environment and build a functional mod for *Data Center* using the gregCore framework.

## 1. Prerequisites (5 min)

Before you start, make sure the full toolchain is ready:

- ✅ **Visual Studio 2022 Community** (or JetBrains Rider / VS Code)
- ✅ **.NET 6 SDK**
- ✅ **Data Center** (Steam version)
- ✅ **MelonLoader** (v0.6.0+ installed)
- ✅ **gregCore Framework** (`gregCore.dll` from `gregCore/bin/Release/net6.0/`)
- ✅ **Dependencies** (These MUST be in your `Data Center/UserLibs/` folder):
    - `Jint.dll`
    - `LiteDB.dll`
    - `MoonSharp.Interpreter.dll`
    - `Newtonsoft.Json.dll`

## 2. Environment Setup

1. Install **MelonLoader** into your *Data Center* game folder.
2. Run the game once to let MelonLoader generate its folders.
3. Ensure the dependencies listed above are in `Data Center/UserLibs/`.
4. Place `gregCore.dll` in `Data Center/Mods/`.

---

## 3. Creating the Project

Create a new C# Class Library project targeting **.NET 6.0**.

### Project File (.csproj)
Add the following references to your `.csproj` file. Adjust the paths to match your local installation.

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <LangVersion>latest</LangVersion>
  </PropertyGroup>

  <ItemGroup>
    <Reference Include="MelonLoader">
      <HintPath>C:\Program Files (x86)\Steam\steamapps\common\Data Center\MelonLoader\MelonLoader.dll</HintPath>
      <Private>false</Private>
    </Reference>
    <Reference Include="gregCore">
      <HintPath>C:\Program Files (x86)\Steam\steamapps\common\Data Center\Mods\gregCore.dll</HintPath>
      <Private>false</Private>
    </Reference>
  </ItemGroup>
</Project>
```

---

## 4. Writing the Code

Here is a minimal template that uses the **Framework Guard Pattern** to ensure gregCore is fully loaded before your mod starts interacting with it.

### Main.cs
```csharp
using MelonLoader;
using UnityEngine;
using greg.Sdk; // Standard gregCore SDK namespace

[assembly: MelonInfo(typeof(MyMod.Main), "MyMod", "1.0.0", "YourName")]
[assembly: MelonGame("Waseku", "Data Center")]

namespace MyMod;

public sealed class Main : MelonMod
{
    private bool _frameworkReady;

    public override void OnInitializeMelon()
    {
        LoggerInstance.Msg("MyMod initializing...");
        CheckFramework();
    }

    public override void OnUpdate()
    {
        if (!_frameworkReady)
        {
            CheckFramework();
        }
    }

    private void CheckFramework()
    {
        // Core.Instance is the main entry point for the framework
        if (Core.Instance != null && !_frameworkReady)
        {
            _frameworkReady = true;
            OnFrameworkReady();
        }
    }

    private void OnFrameworkReady()
    {
        LoggerInstance.Msg("gregCore is ready! Subscribing to events...");

        // Example: Subscribe to a cable creation event
        GregEventDispatcher.On(
            "greg.NETWORK.CreateNewCable",
            payload => LoggerInstance.Msg("A new cable was created!"),
            "MyMod"
        );
    }

    public override void OnApplicationQuit()
    {
        // Always unregister hooks to prevent memory leaks
        GregEventDispatcher.UnregisterAll("MyMod");
    }
}
```

---

## 5. Build and Deploy

1. **Build** your project in Release configuration.
2. **Copy** your generated `MyMod.dll` to `Data Center/Mods/`.
3. **Launch** the game.
4. **Verify** the output in `MelonLoader/Latest.log`.

### Common Issues
- **Core.Instance is null**: This is normal during the first few seconds of startup. The Framework Guard Pattern handles this.
- **Missing DLLs**: Ensure all dependencies are in the `UserLibs` folder of the game.

---

## 6. Next Steps
Check out the [Hooks Catalog](/api/hooks) to see what else you can intercept!
