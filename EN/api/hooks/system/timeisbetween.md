---
title: TimeIsBetween
description: Documentation for greg.SYSTEM.TimeIsBetween
path: /api/hooks/system/timeisbetween
---

# TimeIsBetween

> **Hook ID:** `greg.SYSTEM.TimeIsBetween`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TimeController.TimeIsBetween

## Native Signature
```csharp
Il2Cpp.TimeController::TimeIsBetween(float, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TimeIsBetween` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TimeIsBetween", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TimeIsBetween");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TimeIsBetween", function(payload)
    greg.log("Hook greg.SYSTEM.TimeIsBetween received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TimeIsBetween fired")

greg.on("greg.SYSTEM.TimeIsBetween", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TimeIsBetween", (payload) => {
    console.log("Hook greg.SYSTEM.TimeIsBetween triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TimeIsBetween".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TimeIsBetween", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TimeIsBetween fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
