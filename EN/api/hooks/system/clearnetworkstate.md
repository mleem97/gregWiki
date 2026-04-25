---
title: ClearNetworkState
description: Documentation for greg.SYSTEM.ClearNetworkState
path: /api/hooks/system/clearnetworkstate
---

# ClearNetworkState

> **Hook ID:** `greg.SYSTEM.ClearNetworkState`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.ClearNetworkState

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::ClearNetworkState()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearNetworkState` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClearNetworkState", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClearNetworkState");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClearNetworkState", function(payload)
    greg.log("Hook greg.SYSTEM.ClearNetworkState received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClearNetworkState fired")

greg.on("greg.SYSTEM.ClearNetworkState", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClearNetworkState", (payload) => {
    console.log("Hook greg.SYSTEM.ClearNetworkState triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClearNetworkState".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClearNetworkState", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClearNetworkState fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
