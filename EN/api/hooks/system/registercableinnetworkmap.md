---
title: RegisterCableInNetworkMap
description: Documentation for greg.SYSTEM.RegisterCableInNetworkMap
path: /api/hooks/system/registercableinnetworkmap
---

# RegisterCableInNetworkMap

> **Hook ID:** `greg.SYSTEM.RegisterCableInNetworkMap`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.RegisterCableInNetworkMap

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::RegisterCableInNetworkMap(WaypointInitializationSystem.CableInfo)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RegisterCableInNetworkMap` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RegisterCableInNetworkMap", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RegisterCableInNetworkMap");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RegisterCableInNetworkMap", function(payload)
    greg.log("Hook greg.SYSTEM.RegisterCableInNetworkMap received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RegisterCableInNetworkMap fired")

greg.on("greg.SYSTEM.RegisterCableInNetworkMap", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RegisterCableInNetworkMap", (payload) => {
    console.log("Hook greg.SYSTEM.RegisterCableInNetworkMap triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RegisterCableInNetworkMap".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RegisterCableInNetworkMap", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RegisterCableInNetworkMap fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
