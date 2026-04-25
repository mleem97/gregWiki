---
title: GetCableCurrentSpeed
description: Documentation for greg.SYSTEM.GetCableCurrentSpeed
path: /api/hooks/system/getcablecurrentspeed
---

# GetCableCurrentSpeed

> **Hook ID:** `greg.SYSTEM.GetCableCurrentSpeed`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.GetCableCurrentSpeed

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::GetCableCurrentSpeed(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCableCurrentSpeed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetCableCurrentSpeed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetCableCurrentSpeed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetCableCurrentSpeed", function(payload)
    greg.log("Hook greg.SYSTEM.GetCableCurrentSpeed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetCableCurrentSpeed fired")

greg.on("greg.SYSTEM.GetCableCurrentSpeed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetCableCurrentSpeed", (payload) => {
    console.log("Hook greg.SYSTEM.GetCableCurrentSpeed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetCableCurrentSpeed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetCableCurrentSpeed", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetCableCurrentSpeed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
