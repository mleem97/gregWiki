# Community and Migration

Moving your existing *Data Center* mods to gregCore is straightforward and offers many benefits.

## Why Migrate?

-   **Automatic Settings UI**: No need to build your own menu.
-   **Conflict Resolution**: gregCore prevents multiple mods from binding the same key.
-   **Save Stability**: Use our `PersistenceService` to ensure your data survives game updates.
-   **Visibility**: Your mod will appear in the "Mods" tab in-game.

## Migration Steps (C#)

1.  Change your base class from `MelonMod` to `GregMod`.
2.  Remove your `[assembly: MelonInfo(...)]` and replace it with `[GregMod(...)]` on your class.
3.  Replace your `OnUpdate` and `OnLateUpdate` with `GregMod` overrides if needed.
4.  Switch your direct Harmony patches to `Api.Hooks.On` if a corresponding hook exists in gregCore.

## Example: Before vs After

**Before (Standalone):**
```csharp
public class MyMod : MelonMod {
    public override void OnInitializeMelon() {
        LoggerInstance.Msg("Hello");
    }
}
```

**After (gregCore):**
```csharp
[GregMod("my.mod", "My Mod", "1.0.0")]
public class MyMod : GregMod {
    public override void OnReady() {
        Logger.Info("Hello");
    }
}
```

## Getting Help

Join our community Discord or visit the GitHub repository for support and to share your creations!
---
*Happy Modding!*
