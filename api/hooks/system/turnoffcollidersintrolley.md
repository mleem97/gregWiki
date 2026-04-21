---
title: TurnOffCollidersInTrolley
description: Documentation for greg.SYSTEM.TurnOffCollidersInTrolley
path: /api/hooks/system/turnoffcollidersintrolley
---

# TurnOffCollidersInTrolley

> **Hook ID:** `greg.SYSTEM.TurnOffCollidersInTrolley`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.TurnOffCollidersInTrolley

## Native Signature
```csharp
Il2Cpp.CarController::TurnOffCollidersInTrolley()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TurnOffCollidersInTrolley` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TurnOffCollidersInTrolley", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TurnOffCollidersInTrolley");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TurnOffCollidersInTrolley", function(payload)
    greg.log("Hook greg.SYSTEM.TurnOffCollidersInTrolley received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TurnOffCollidersInTrolley fired")

greg.on("greg.SYSTEM.TurnOffCollidersInTrolley", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TurnOffCollidersInTrolley", (payload) => {
    console.log("Hook greg.SYSTEM.TurnOffCollidersInTrolley triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TurnOffCollidersInTrolley".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TurnOffCollidersInTrolley", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TurnOffCollidersInTrolley fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
