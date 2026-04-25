---
title: OnZoom
description: Documentation for greg.SYSTEM.OnZoom
path: /api/hooks/system/onzoom
---

# OnZoom

> **Hook ID:** `greg.SYSTEM.OnZoom`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnZoom

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnZoom(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnZoom` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnZoom", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnZoom");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnZoom", function(payload)
    greg.log("Hook greg.SYSTEM.OnZoom received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnZoom fired")

greg.on("greg.SYSTEM.OnZoom", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnZoom", (payload) => {
    console.log("Hook greg.SYSTEM.OnZoom triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnZoom".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnZoom", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnZoom fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
