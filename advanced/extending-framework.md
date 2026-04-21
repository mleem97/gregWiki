---
id: extending-framework
title: Extending the gregCore Framework
description: Framework extension tutorial for adding hooks, payload parsers, plugins, and Harmony patches in gregCore.
---

# 🏗️ Extending gregCore

Framework extensions are changes inside the `gregCore` source code that expand the SDK or runtime capabilities for all mods and plugins.

## 1. Project Structure (Current)

The framework is organized into specific modules within the `src/` directory:

- **`src/Core/`**: Main framework logic, interfaces, and base classes.
- **`src/Sdk/`**: Public API surfaces, hook constants, and event dispatcher logic.
- **`src/GameLayer/`**: Game-specific logic and Harmony patches (intercepts).
- **`src/Infrastructure/`**: Implementations for scripting (Lua/JS), database (LiteDB), and UI.

---

## 2. Adding a New Hook Constant

If you want to expose a new game event as a canonical hook, you should add it to the SDK layer.

**Target File:** `src/Sdk/GregNativeEventHooks.cs` (or similar depending on domain)

### Step-by-step
1. Define a new constant for the hook name (e.g., `greg.SYSTEM.NewEvent`).
2. If using the dynamic hook catalog, ensure it's mapped in `assets/game_hooks.json`.
3. If using hardcoded intercepts, update the mapping table in the dispatcher.

---

## 3. Adding a New Payload Parser

Payloads are often passed as generic objects. To make them easier to use for modders, you can add static helper methods.

**Target File:** `src/Sdk/GregPayload.cs`

```csharp
public static class GregPayload
{
    // Example: Add a parser for Unity Colors
    public static Color GetColor(object payload, string fieldName, Color fallback)
    {
        var raw = Get(payload, fieldName, string.Empty);
        if (string.IsNullOrWhiteSpace(raw)) return fallback;

        return ColorUtility.TryParseHtmlString(raw, out var parsed) ? parsed : fallback;
    }
}
```

---

## 4. Implementing a Harmony Patch

To extract data from the game, you need to patch the game's methods.

**Target Location:** `src/GameLayer/Patches/`

```csharp
[HarmonyPatch(typeof(CableManager), "SetColor")]
public static class CableColorPatch
{
    [HarmonyPostfix]
    public static void Postfix(object __instance)
    {
        GregEventDispatcher.Emit("greg.NETWORK.ColorChanged", new {
            Source = __instance.GetType().Name
        });
    }
}
```

---

## 5. Deployment Workflow

After modifying the framework, run the build script to deploy it to your local game installation for testing.

```powershell
pwsh -File build.ps1
```

**Verification:**
- Launch the game.
- Check `MelonLoader/Latest.log` for the `[gregCore] --- Framework Boot ---` message.
- Confirm your new hook is visible in the logs if you added debug output.

---

## 🛡️ Best Practices
- **Backward Compatibility**: Never rename a hook without adding an alias.
- **Error Handling**: Use `try-catch` blocks in all Harmony patches to avoid crashing the game loop.
- **MISSING.md Rule**: If a required API abstraction is missing, create a `MISSING.md` file in the affected module folder (do not commit it!).
