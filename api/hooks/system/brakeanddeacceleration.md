---
title: BrakeAndDeacceleration
description: Documentation for greg.SYSTEM.BrakeAndDeacceleration
path: /api/hooks/system/brakeanddeacceleration
---

# BrakeAndDeacceleration

> **Hook ID:** `greg.SYSTEM.BrakeAndDeacceleration`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.BrakeAndDeacceleration

## Native Signature
```csharp
Il2Cpp.CarController::BrakeAndDeacceleration()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BrakeAndDeacceleration` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BrakeAndDeacceleration", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BrakeAndDeacceleration");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BrakeAndDeacceleration", function(payload)
    greg.log("Hook greg.SYSTEM.BrakeAndDeacceleration received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BrakeAndDeacceleration fired")

greg.on("greg.SYSTEM.BrakeAndDeacceleration", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BrakeAndDeacceleration", (payload) => {
    console.log("Hook greg.SYSTEM.BrakeAndDeacceleration triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BrakeAndDeacceleration".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BrakeAndDeacceleration", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BrakeAndDeacceleration fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
