---
title: DisableTheTriggerColliderAfterDealy
description: Documentation for greg.SYSTEM.DisableTheTriggerColliderAfterDealy
path: /api/hooks/system/disablethetriggercolliderafterdealy
---

# DisableTheTriggerColliderAfterDealy

> **Hook ID:** `greg.SYSTEM.DisableTheTriggerColliderAfterDealy`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.DisableTheTriggerColliderAfterDealy

## Native Signature
```csharp
Il2Cpp.CarController::DisableTheTriggerColliderAfterDealy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisableTheTriggerColliderAfterDealy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DisableTheTriggerColliderAfterDealy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DisableTheTriggerColliderAfterDealy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DisableTheTriggerColliderAfterDealy", function(payload)
    greg.log("Hook greg.SYSTEM.DisableTheTriggerColliderAfterDealy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DisableTheTriggerColliderAfterDealy fired")

greg.on("greg.SYSTEM.DisableTheTriggerColliderAfterDealy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DisableTheTriggerColliderAfterDealy", (payload) => {
    console.log("Hook greg.SYSTEM.DisableTheTriggerColliderAfterDealy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DisableTheTriggerColliderAfterDealy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DisableTheTriggerColliderAfterDealy", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DisableTheTriggerColliderAfterDealy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
