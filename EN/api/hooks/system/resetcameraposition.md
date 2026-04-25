---
title: ResetCameraPosition
description: Documentation for greg.SYSTEM.ResetCameraPosition
path: /api/hooks/system/resetcameraposition
---

# ResetCameraPosition

> **Hook ID:** `greg.SYSTEM.ResetCameraPosition`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.ResetCameraPosition

## Native Signature
```csharp
Il2Cpp.FirstPersonController::ResetCameraPosition()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetCameraPosition` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResetCameraPosition", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResetCameraPosition");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResetCameraPosition", function(payload)
    greg.log("Hook greg.SYSTEM.ResetCameraPosition received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResetCameraPosition fired")

greg.on("greg.SYSTEM.ResetCameraPosition", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResetCameraPosition", (payload) => {
    console.log("Hook greg.SYSTEM.ResetCameraPosition triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResetCameraPosition".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResetCameraPosition", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResetCameraPosition fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
