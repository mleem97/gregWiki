---
title: ResetTrolleyPosition
description: Documentation for greg.SYSTEM.ResetTrolleyPosition
path: /api/hooks/system/resettrolleyposition
---

# ResetTrolleyPosition

> **Hook ID:** `greg.SYSTEM.ResetTrolleyPosition`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.ResetTrolleyPosition

## Native Signature
```csharp
Il2Cpp.CarController::ResetTrolleyPosition()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetTrolleyPosition` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResetTrolleyPosition", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResetTrolleyPosition");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResetTrolleyPosition", function(payload)
    greg.log("Hook greg.SYSTEM.ResetTrolleyPosition received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResetTrolleyPosition fired")

greg.on("greg.SYSTEM.ResetTrolleyPosition", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResetTrolleyPosition", (payload) => {
    console.log("Hook greg.SYSTEM.ResetTrolleyPosition triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResetTrolleyPosition".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResetTrolleyPosition", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResetTrolleyPosition fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
