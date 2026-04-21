---
title: SittingClampRotation
description: Documentation for greg.SYSTEM.SittingClampRotation
path: /api/hooks/system/sittingclamprotation
---

# SittingClampRotation

> **Hook ID:** `greg.SYSTEM.SittingClampRotation`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/MouseLook.SittingClampRotation

## Native Signature
```csharp
Il2Cpp.MouseLook::SittingClampRotation(Vector2)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SittingClampRotation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SittingClampRotation", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SittingClampRotation");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SittingClampRotation", function(payload)
    greg.log("Hook greg.SYSTEM.SittingClampRotation received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SittingClampRotation fired")

greg.on("greg.SYSTEM.SittingClampRotation", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SittingClampRotation", (payload) => {
    console.log("Hook greg.SYSTEM.SittingClampRotation triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SittingClampRotation".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SittingClampRotation", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SittingClampRotation fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
