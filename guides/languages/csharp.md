---
title: Modding with C#
description: High-performance modding using MelonLoader and gregCore SDK
path: /guides/languages/csharp
---

# 🚀 Modding with C#

C# is the primary language used to build `gregCore` itself and is the most powerful way to extend *Data Center*. It provides direct access to the Unity engine, the game's IL2CPP assemblies (via interop), and the full suite of `gregCore` services.

---

## 🛠️ Setup & Prerequisites

To develop C# mods, you will need:
1.  **IDE**: Visual Studio 2022 or JetBrains Rider is highly recommended.
2.  **.NET 6.0 SDK**: The target runtime for modern MelonLoader versions.
3.  **MelonLoader**: Installed in your *Data Center* game directory.

### Project Templates
We recommend using the official [**gregCore Mod Template**](https://github.com/gregCore/mod-template-csharp) to get started with the correct references and build tasks.

---

## 🏗️ Project Structure

A typical C# mod project should look like this:

```text
MyMod/
  Properties/
    AssemblyInfo.cs (Contains MelonInfo)
  src/
    MyModMain.cs (The entry point)
    Systems/
      HardwareExtension.cs
    UI/
      CustomPanel.cs
  MyMod.csproj
```

### Essential References
Your `.csproj` must reference the following libraries from the game's folder:
*   `MelonLoader.dll`
*   `gregCore.dll`
*   `Il2CppInterop.Runtime.dll`
*   `Assembly-CSharp.dll` (The game's logic)

---

## 🏗️ The Entry Point

Every C# mod must inherit from `MelonMod` and provide metadata via Assembly attributes.

```csharp
using MelonLoader;
using gregCore.API;

[assembly: MelonInfo(typeof(MyMod.MyModMain), "My Super Mod", "1.0.0", "YourName")]
[assembly: MelonGame("Waseku", "Data Center")]

namespace MyMod
{
    public class MyModMain : MelonMod
    {
        public override void OnInitializeMelon()
        {
            LoggerInstance.Msg("Mod initialized!");
            
            // Register a keybind via gregCore
            GregAPI.Input.RegisterKeybind("myMod.toggle", "Toggle Interface", UnityEngine.KeyCode.F9, () => {
                LoggerInstance.Msg("F9 Pressed!");
            });
        }
    }
}
```

---

## 🪝 Subscribing to Hooks

In C#, you subscribe to hooks using the `GregAPI.Events` bus.

```csharp
// Subscribe to a hardware event
GregAPI.Events.Subscribe("greg.hardware.ServerPowered", (payload) => {
    string serverId = payload.GetString("InternalId");
    bool isPowered = payload.GetBool("State");
    
    MelonLogger.Msg($"Server {serverId} power state changed to {isPowered}");
});
```

---

## 🛠️ Accessing Services

The `GregAPI` static class provides centralized access to all framework features.

### Economy Service
```csharp
double myMoney = GregAPI.Economy.GetBalance();
GregAPI.Economy.AddBalance(500.0);
```

### UI & Settings
C# mods can register complex settings that automatically appear in the native "Mods" tab created by gregCore.

```csharp
GregAPI.Settings.RegisterToggle(
    modId: "myMod",
    settingId: "auto_repair",
    displayName: "Auto-Repair Hardware",
    defaultValue: true,
    onChanged: (val) => { /* logic */ }
);
```

---

## 💾 Persistence

`gregCore` handles JSON serialization for you. Simply use the `Persistence` service to save mod-specific data that persists across game restarts and savegames.

```csharp
// Save a complex object (automatically serialized to JSON)
var stats = new ModStats { Level = 5, Experience = 1200 };
GregAPI.Persistence.Save("player_stats", stats);

// Load it back
var savedStats = GregAPI.Persistence.Load<ModStats>("player_stats");
```

---

## 🐞 Debugging & Tools

*   **Console**: Press `~` or check the external window to see `MelonLogger` output.
*   **UnityExplorer**: We highly recommend using the [UnityExplorer](https://github.com/sinai-dev/UnityExplorer) mod to inspect the GameObjects and Components at runtime alongside gregCore.
*   **Log Search**: Use the `[gregCore]` filter in your logs to see framework-specific diagnostics.

---

## 📖 Related Links
*   [**Hook Reference**](/api/hooks)
*   [**UI Component Guide**](/ui/custom-panels)
*   [**Advanced Patching with Harmony**](/advanced/harmony-patches)
