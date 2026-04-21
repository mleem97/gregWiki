---
title: HandleZoom
description: Documentation for greg.SYSTEM.HandleZoom
path: /api/hooks/system/handlezoom
---

# HandleZoom

> **Hook ID:** `greg.SYSTEM.HandleZoom`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.HandleZoom

## Native Signature
```csharp
Il2Cpp.FirstPersonController::HandleZoom()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HandleZoom` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HandleZoom", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HandleZoom");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HandleZoom", function(payload)
    greg.log("Hook greg.SYSTEM.HandleZoom received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HandleZoom fired")

greg.on("greg.SYSTEM.HandleZoom", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HandleZoom", (payload) => {
    console.log("Hook greg.SYSTEM.HandleZoom triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HandleZoom".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HandleZoom", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HandleZoom fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
