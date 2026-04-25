---
title: TimeController
description: Documentation for greg.SYSTEM.TimeController.OnEndOfTheDay
path: /api/hooks/system/timecontroller
---

# TimeController

> **Hook ID:** `greg.SYSTEM.TimeController.OnEndOfTheDay`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnEndOfTheDay.TimeController.OnEndOfTheDay

## Native Signature
```csharp
Il2Cpp.OnEndOfTheDay::TimeController.OnEndOfTheDay([In] System.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TimeController` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TimeController.OnEndOfTheDay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TimeController.OnEndOfTheDay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TimeController.OnEndOfTheDay", function(payload)
    greg.log("Hook greg.SYSTEM.TimeController.OnEndOfTheDay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TimeController.OnEndOfTheDay fired")

greg.on("greg.SYSTEM.TimeController.OnEndOfTheDay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TimeController.OnEndOfTheDay", (payload) => {
    console.log("Hook greg.SYSTEM.TimeController.OnEndOfTheDay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TimeController.OnEndOfTheDay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TimeController.OnEndOfTheDay", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TimeController.OnEndOfTheDay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
