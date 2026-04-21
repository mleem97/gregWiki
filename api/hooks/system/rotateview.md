---
title: RotateView
description: Documentation for greg.SYSTEM.RotateView
path: /api/hooks/system/rotateview
---

# RotateView

> **Hook ID:** `greg.SYSTEM.RotateView`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.RotateView

## Native Signature
```csharp
Il2Cpp.FirstPersonController::RotateView()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RotateView` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RotateView", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RotateView");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RotateView", function(payload)
    greg.log("Hook greg.SYSTEM.RotateView received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RotateView fired")

greg.on("greg.SYSTEM.RotateView", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RotateView", (payload) => {
    console.log("Hook greg.SYSTEM.RotateView triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RotateView".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RotateView", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RotateView fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
