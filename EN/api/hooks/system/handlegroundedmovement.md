---
title: HandleGroundedMovement
description: Documentation for greg.SYSTEM.HandleGroundedMovement
path: /api/hooks/system/handlegroundedmovement
---

# HandleGroundedMovement

> **Hook ID:** `greg.SYSTEM.HandleGroundedMovement`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/ThirdPersonCharacter.HandleGroundedMovement

## Native Signature
```csharp
Il2Cpp.ThirdPersonCharacter::HandleGroundedMovement(bool, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HandleGroundedMovement` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HandleGroundedMovement", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HandleGroundedMovement");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HandleGroundedMovement", function(payload)
    greg.log("Hook greg.SYSTEM.HandleGroundedMovement received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HandleGroundedMovement fired")

greg.on("greg.SYSTEM.HandleGroundedMovement", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HandleGroundedMovement", (payload) => {
    console.log("Hook greg.SYSTEM.HandleGroundedMovement triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HandleGroundedMovement".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HandleGroundedMovement", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HandleGroundedMovement fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
