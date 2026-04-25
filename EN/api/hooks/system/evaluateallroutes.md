---
title: EvaluateAllRoutes
description: Documentation for greg.SYSTEM.EvaluateAllRoutes
path: /api/hooks/system/evaluateallroutes
---

# EvaluateAllRoutes

> **Hook ID:** `greg.SYSTEM.EvaluateAllRoutes`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.EvaluateAllRoutes

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::EvaluateAllRoutes()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `EvaluateAllRoutes` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.EvaluateAllRoutes", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.EvaluateAllRoutes");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.EvaluateAllRoutes", function(payload)
    greg.log("Hook greg.SYSTEM.EvaluateAllRoutes received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.EvaluateAllRoutes fired")

greg.on("greg.SYSTEM.EvaluateAllRoutes", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.EvaluateAllRoutes", (payload) => {
    console.log("Hook greg.SYSTEM.EvaluateAllRoutes triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.EvaluateAllRoutes".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.EvaluateAllRoutes", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.EvaluateAllRoutes fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
