---
title: GetEvaluationCooldown
description: Documentation for greg.SYSTEM.GetEvaluationCooldown
path: /api/hooks/system/getevaluationcooldown
---

# GetEvaluationCooldown

> **Hook ID:** `greg.SYSTEM.GetEvaluationCooldown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.GetEvaluationCooldown

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::GetEvaluationCooldown()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetEvaluationCooldown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetEvaluationCooldown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetEvaluationCooldown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetEvaluationCooldown", function(payload)
    greg.log("Hook greg.SYSTEM.GetEvaluationCooldown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetEvaluationCooldown fired")

greg.on("greg.SYSTEM.GetEvaluationCooldown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetEvaluationCooldown", (payload) => {
    console.log("Hook greg.SYSTEM.GetEvaluationCooldown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetEvaluationCooldown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetEvaluationCooldown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetEvaluationCooldown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
