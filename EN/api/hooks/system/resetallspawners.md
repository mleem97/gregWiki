---
title: ResetAllSpawners
description: Documentation for greg.SYSTEM.ResetAllSpawners
path: /api/hooks/system/resetallspawners
---

# ResetAllSpawners

> **Hook ID:** `greg.SYSTEM.ResetAllSpawners`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.ResetAllSpawners

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::ResetAllSpawners()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetAllSpawners` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResetAllSpawners", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResetAllSpawners");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResetAllSpawners", function(payload)
    greg.log("Hook greg.SYSTEM.ResetAllSpawners received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResetAllSpawners fired")

greg.on("greg.SYSTEM.ResetAllSpawners", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResetAllSpawners", (payload) => {
    console.log("Hook greg.SYSTEM.ResetAllSpawners triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResetAllSpawners".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResetAllSpawners", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResetAllSpawners fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
