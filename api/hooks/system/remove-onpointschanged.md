---
title: remove_OnPointsChanged
description: Documentation for greg.SYSTEM.remove_OnPointsChanged
path: /api/hooks/system/remove-onpointschanged
---

# remove_OnPointsChanged

> **Hook ID:** `greg.SYSTEM.remove_OnPointsChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.remove_OnPointsChanged

## Native Signature
```csharp
Il2Cpp.Rope::remove_OnPointsChanged(Il2CppSystem.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `remove_OnPointsChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.remove_OnPointsChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.remove_OnPointsChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.remove_OnPointsChanged", function(payload)
    greg.log("Hook greg.SYSTEM.remove_OnPointsChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.remove_OnPointsChanged fired")

greg.on("greg.SYSTEM.remove_OnPointsChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.remove_OnPointsChanged", (payload) => {
    console.log("Hook greg.SYSTEM.remove_OnPointsChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.remove_OnPointsChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.remove_OnPointsChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.remove_OnPointsChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
