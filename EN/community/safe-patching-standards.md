# Safe Patching Standards

Patching an IL2CPP game is risky. gregCore uses a **Safe Patching Pattern** to ensure that a single failing patch doesn't crash the entire game.

## 1. Inherit from `SafePatch`
All Harmony patches in gregCore should inherit from the `SafePatch` base class.

```csharp
public class MySafePatch : SafePatch
{
    // ...
}
```

## 2. Use `ExecuteSafe`
Wrap your patch logic in the `ExecuteSafe` helper. This will catch any exceptions and log them without interrupting the game flow.

```csharp
[HarmonyPatch(typeof(Server), nameof(Server.OnPowered))]
public class ServerPowerPatch : SafePatch
{
    static void Postfix(global::Il2Cpp.Server __instance)
    {
        ExecuteSafe(() => {
            // Your logic here
            var payload = new GregPayload("greg.hardware.ServerPowered", "Game");
            GregAPI.Hooks.Fire("greg.hardware.ServerPowered", payload);
        });
    }
}
```

## 3. Prefix Guidelines
- **NEVER** return `false` in a prefix unless you are absolutely sure you want to block the original game method.
- If you must block a method, ensure there is a configuration toggle to disable your patch.

## 4. IL2CPP Verification
Always verify that the classes and methods you are patching exist in the current game version using `GregCompatBridge`.

```csharp
if (!GregCompatBridge.MethodExists("Il2Cpp.Server", "OnPowered")) {
    Logger.Warning("Server.OnPowered not found! Skipping patch.");
    return;
}
```

---
[Back to Contribution](README.md)
