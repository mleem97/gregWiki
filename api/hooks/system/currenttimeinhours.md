---
title: CurrentTimeInHours
description: Documentation for greg.SYSTEM.CurrentTimeInHours
path: /api/hooks/system/currenttimeinhours
---

# CurrentTimeInHours

> **Hook ID:** `greg.SYSTEM.CurrentTimeInHours`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TimeController.CurrentTimeInHours

## Native Signature
```csharp
Il2Cpp.TimeController::CurrentTimeInHours()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CurrentTimeInHours` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CurrentTimeInHours", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CurrentTimeInHours");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CurrentTimeInHours", function(payload)
    greg.log("Hook greg.SYSTEM.CurrentTimeInHours received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CurrentTimeInHours fired")

greg.on("greg.SYSTEM.CurrentTimeInHours", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CurrentTimeInHours", (payload) => {
    console.log("Hook greg.SYSTEM.CurrentTimeInHours triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CurrentTimeInHours".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CurrentTimeInHours", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CurrentTimeInHours fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
