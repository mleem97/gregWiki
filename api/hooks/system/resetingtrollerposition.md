---
title: ResetingTrollerPosition
description: Documentation for greg.SYSTEM.ResetingTrollerPosition
path: /api/hooks/system/resetingtrollerposition
---

# ResetingTrollerPosition

> **Hook ID:** `greg.SYSTEM.ResetingTrollerPosition`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.ResetingTrollerPosition

## Native Signature
```csharp
Il2Cpp.CarController::ResetingTrollerPosition()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetingTrollerPosition` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResetingTrollerPosition", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResetingTrollerPosition");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResetingTrollerPosition", function(payload)
    greg.log("Hook greg.SYSTEM.ResetingTrollerPosition received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResetingTrollerPosition fired")

greg.on("greg.SYSTEM.ResetingTrollerPosition", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResetingTrollerPosition", (payload) => {
    console.log("Hook greg.SYSTEM.ResetingTrollerPosition triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResetingTrollerPosition".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResetingTrollerPosition", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResetingTrollerPosition fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
