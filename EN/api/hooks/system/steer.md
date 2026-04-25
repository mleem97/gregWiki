---
title: Steer
description: Documentation for greg.SYSTEM.Steer
path: /api/hooks/system/steer
---

# Steer

> **Hook ID:** `greg.SYSTEM.Steer`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.Steer

## Native Signature
```csharp
Il2Cpp.CarController::Steer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Steer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Steer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Steer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Steer", function(payload)
    greg.log("Hook greg.SYSTEM.Steer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Steer fired")

greg.on("greg.SYSTEM.Steer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Steer", (payload) => {
    console.log("Hook greg.SYSTEM.Steer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Steer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Steer", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Steer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
