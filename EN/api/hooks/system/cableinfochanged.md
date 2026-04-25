---
title: CableInfoChanged
description: Documentation for greg.SYSTEM.CableInfoChanged
path: /api/hooks/system/cableinfochanged
---

# CableInfoChanged

> **Hook ID:** `greg.SYSTEM.CableInfoChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.UpdateCableInfo

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::UpdateCableInfo(int, WaypointInitializationSystem.CableInfo)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CableInfoChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CableInfoChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CableInfoChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CableInfoChanged", function(payload)
    greg.log("Hook greg.SYSTEM.CableInfoChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CableInfoChanged fired")

greg.on("greg.SYSTEM.CableInfoChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CableInfoChanged", (payload) => {
    console.log("Hook greg.SYSTEM.CableInfoChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CableInfoChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CableInfoChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CableInfoChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
