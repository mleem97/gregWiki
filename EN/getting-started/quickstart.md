Title: Quickstart - Build Your First Mod
Path: /getting-started/quickstart
Type: Tutorial
Audience: new user, mod developer
Summary: Set up your environment and build a simple mod in less than 5 minutes using C# or Lua.
Suggested Tags: quickstart, tutorial, hello-world, lua, csharp
Related Pages: /getting-started/index, /getting-started/architecture
Split Recommendation: Keep as one page

# Quickstart - Build Your First Mod

Welcome to the **gregFramework** ecosystem! This guide will help you build your first mod for Data Center using the modernized **gregCore v2.0** API.

## 1. Prerequisites
- **Visual Studio 2022** or **VS Code** with .NET 6 SDK.
- **MelonLoader v0.7.2+** installed.
- **gregCore.dll** and **MoonSharp.Interpreter.dll** in the `Mods/` folder.

## 2. Choose Your Path

gregCore is now language-agnostic. Pick the workflow that fits your project:

| Workflow | Folder | Build Required? | Best for... |
| --- | --- | --- | --- |
| **C# (Managed)** | `Mods/` | Yes (`.dll`) | Deep system changes |
| **Rust (Native)** | `Plugins/Rust/` | Yes (`.dll`) | High performance |
| **Lua (Scripting)** | `Plugins/Lua/` | No (`.lua`) | Prototyping & UI |

---

## 3. C# "Hello World" (v2.0)

1. Create a **.NET 6 Class Library**.
2. Reference `MelonLoader.dll` and `gregCore.dll`.
3. Use the unified **`GregAPI`**:

```csharp
using MelonLoader;
using gregCore.API;

[assembly: MelonInfo(typeof(MyMod.Main), "MyMod", "1.0.0", "teamGreg")]
[assembly: MelonGame("Waseku", "Data Center")]

namespace MyMod;

public class Main : MelonMod
{
    private bool _initialized = false;

    public override void OnUpdate()
    {
        if (!_initialized && gregCore.PublicApi.greg.IsInitialized)
        {
            GregAPI.LogInfo("Hello from C#!");
            GregAPI.ShowNotification("C# Mod Connected");
            _initialized = true;
        }
    }
}
```

---

## 4. Lua "Hello World" (v2.0)

1. Create folder `Data Center/Plugins/Lua/MyFirstLuaMod/`.
2. Create `main.lua`:

```lua
function on_init()
    greg.log_info("Hello from Lua!")
    greg.show_notification("Lua Mod Connected")
end
```

3. (Optional) Create `mod.json` for metadata.

---

## 5. Deployment
- **C#**: Copy your DLL to `Mods/`.
- **Lua**: Save your file and start the game.

## 6. Next Steps
- **[API Reference](/api/index)** - Full method list.
- **[Hooks Catalog](/api/hooks/index)** - Available events.
- **[Discord](https://discord.gg/greg)** - Get help from the community.
