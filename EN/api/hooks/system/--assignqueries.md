---
title: __AssignQueries
description: Documentation for greg.SYSTEM.__AssignQueries
path: /api/hooks/system/--assignqueries
---

# __AssignQueries

> **Hook ID:** `greg.SYSTEM.__AssignQueries`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.__AssignQueries

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::__AssignQueries(Unity.Entities.SystemState)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__AssignQueries` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.__AssignQueries", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.__AssignQueries");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.__AssignQueries", function(payload)
    greg.log("Hook greg.SYSTEM.__AssignQueries received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.__AssignQueries fired")

greg.on("greg.SYSTEM.__AssignQueries", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.__AssignQueries", (payload) => {
    console.log("Hook greg.SYSTEM.__AssignQueries triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.__AssignQueries".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.__AssignQueries", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.__AssignQueries fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
