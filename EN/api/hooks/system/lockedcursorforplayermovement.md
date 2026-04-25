---
title: LockedCursorForPlayerMovement
description: Documentation for greg.SYSTEM.LockedCursorForPlayerMovement
path: /api/hooks/system/lockedcursorforplayermovement
---

# LockedCursorForPlayerMovement

> **Hook ID:** `greg.SYSTEM.LockedCursorForPlayerMovement`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.LockedCursorForPlayerMovement

## Native Signature
```csharp
Il2Cpp.InputManager::LockedCursorForPlayerMovement()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LockedCursorForPlayerMovement` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LockedCursorForPlayerMovement", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LockedCursorForPlayerMovement");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LockedCursorForPlayerMovement", function(payload)
    greg.log("Hook greg.SYSTEM.LockedCursorForPlayerMovement received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LockedCursorForPlayerMovement fired")

greg.on("greg.SYSTEM.LockedCursorForPlayerMovement", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LockedCursorForPlayerMovement", (payload) => {
    console.log("Hook greg.SYSTEM.LockedCursorForPlayerMovement triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LockedCursorForPlayerMovement".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LockedCursorForPlayerMovement", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LockedCursorForPlayerMovement fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
