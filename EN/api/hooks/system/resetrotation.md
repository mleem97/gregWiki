---
title: ResetRotation
description: Documentation for greg.SYSTEM.ResetRotation
path: /api/hooks/system/resetrotation
---

# ResetRotation

> **Hook ID:** `greg.SYSTEM.ResetRotation`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/MouseLook.ResetRotation

## Native Signature
```csharp
Il2Cpp.MouseLook::ResetRotation(Transform)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetRotation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResetRotation", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResetRotation");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResetRotation", function(payload)
    greg.log("Hook greg.SYSTEM.ResetRotation received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResetRotation fired")

greg.on("greg.SYSTEM.ResetRotation", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResetRotation", (payload) => {
    console.log("Hook greg.SYSTEM.ResetRotation triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResetRotation".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResetRotation", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResetRotation fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
