---
title: OnControllerColliderHit
description: Documentation for greg.SYSTEM.OnControllerColliderHit
path: /api/hooks/system/oncontrollercolliderhit
---

# OnControllerColliderHit

> **Hook ID:** `greg.SYSTEM.OnControllerColliderHit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.OnControllerColliderHit

## Native Signature
```csharp
Il2Cpp.FirstPersonController::OnControllerColliderHit(ControllerColliderHit)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnControllerColliderHit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnControllerColliderHit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnControllerColliderHit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnControllerColliderHit", function(payload)
    greg.log("Hook greg.SYSTEM.OnControllerColliderHit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnControllerColliderHit fired")

greg.on("greg.SYSTEM.OnControllerColliderHit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnControllerColliderHit", (payload) => {
    console.log("Hook greg.SYSTEM.OnControllerColliderHit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnControllerColliderHit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnControllerColliderHit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnControllerColliderHit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
