---
title: CameraPositionChanged
description: Documentation for greg.SYSTEM.CameraPositionChanged
path: /api/hooks/system/camerapositionchanged
---

# CameraPositionChanged

> **Hook ID:** `greg.SYSTEM.CameraPositionChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.UpdateCameraPosition

## Native Signature
```csharp
Il2Cpp.FirstPersonController::UpdateCameraPosition(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CameraPositionChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CameraPositionChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CameraPositionChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CameraPositionChanged", function(payload)
    greg.log("Hook greg.SYSTEM.CameraPositionChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CameraPositionChanged fired")

greg.on("greg.SYSTEM.CameraPositionChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CameraPositionChanged", (payload) => {
    console.log("Hook greg.SYSTEM.CameraPositionChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CameraPositionChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CameraPositionChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CameraPositionChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
