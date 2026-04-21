---
title: Getting Started
description: Jump into gregCore modding
path: /getting-started
---

# 🚀 Getting Started with gregCore

Welcome to the definitive framework for modding *Data Center*. gregCore provides a high-level, stable API that abstracts away the complexities of Unity IL2CPP, allowing you to focus on creating amazing content.

## 📥 Installation

1.  **Install MelonLoader**: Download and run the [MelonLoader Installer](https://melonwiki.xyz/#/). Select your *Data Center* executable.
2.  **Download gregCore**: Get the latest `gregCore.dll` from the official releases.
3.  **Setup Folders**:
    *   Place `gregCore.dll` in your game's `Mods/` folder.
    *   Create a folder named `gregDependencies` inside `Mods/`.
    *   Place all required dependency DLLs (LiteDB, MoonSharp, etc.) into `Mods/gregDependencies/`.
4.  **Run the Game**: Start *Data Center*. You should see the gregCore banner in the console.

## 🛠️ Your First Mod (C#)

Creating a mod with gregCore is simple. Inherit from `MelonMod` and use the `GregAPI`.

```csharp
using MelonLoader;
using gregCore.API;

public class MyFirstMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.LogInfo("Hello from my first gregCore mod!");
        
        // Subscribe to a hook
        GregAPI.Hooks.On("greg.lifecycle.GameLoaded", (payload) => {
            GregAPI.ShowNotification("Welcome to Data Center!");
        });
    }
}
```

## 📜 Essential Concepts

*   **Hooks**: Intercept game methods without writing complex Harmony code.
*   **Services**: High-level modules for Economy, Hardware, UI, etc.
*   **EventBus**: Communicate between mods and languages seamlessly.
*   **Registries**: Add your own items, NPCs, and systems to the game.

---

::: next
Next up: [Framework Concepts](/framework-concepts)
:::
