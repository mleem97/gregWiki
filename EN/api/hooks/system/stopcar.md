---
title: StopCar
description: Documentation for greg.SYSTEM.StopCar
path: /api/hooks/system/stopcar
---

# StopCar

> **Hook ID:** `greg.SYSTEM.StopCar`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.StopCar

## Native Signature
```csharp
Il2Cpp.CarController::StopCar()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StopCar` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StopCar", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StopCar");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StopCar", function(payload)
    greg.log("Hook greg.SYSTEM.StopCar received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StopCar fired")

greg.on("greg.SYSTEM.StopCar", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StopCar", (payload) => {
    console.log("Hook greg.SYSTEM.StopCar triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StopCar".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StopCar", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StopCar fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
