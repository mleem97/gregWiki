---
title: EvaluationCooldownSet
description: Documentation for greg.SYSTEM.EvaluationCooldownSet
path: /api/hooks/system/evaluationcooldownset
---

# EvaluationCooldownSet

> **Hook ID:** `greg.SYSTEM.EvaluationCooldownSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.SetEvaluationCooldown

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::SetEvaluationCooldown(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `EvaluationCooldownSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.EvaluationCooldownSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.EvaluationCooldownSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.EvaluationCooldownSet", function(payload)
    greg.log("Hook greg.SYSTEM.EvaluationCooldownSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.EvaluationCooldownSet fired")

greg.on("greg.SYSTEM.EvaluationCooldownSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.EvaluationCooldownSet", (payload) => {
    console.log("Hook greg.SYSTEM.EvaluationCooldownSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.EvaluationCooldownSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.EvaluationCooldownSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.EvaluationCooldownSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
