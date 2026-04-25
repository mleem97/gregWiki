---
title: TakeTheWheel
description: Documentation for greg.SYSTEM.TakeTheWheel
path: /api/hooks/system/takethewheel
---

# TakeTheWheel

> **Hook ID:** `greg.SYSTEM.TakeTheWheel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.TakeTheWheel

## Native Signature
```csharp
Il2Cpp.CarController::TakeTheWheel()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TakeTheWheel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TakeTheWheel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TakeTheWheel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TakeTheWheel", function(payload)
    greg.log("Hook greg.SYSTEM.TakeTheWheel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TakeTheWheel fired")

greg.on("greg.SYSTEM.TakeTheWheel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TakeTheWheel", (payload) => {
    console.log("Hook greg.SYSTEM.TakeTheWheel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TakeTheWheel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TakeTheWheel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TakeTheWheel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
