---
title: HoursFromDate
description: Documentation for greg.SYSTEM.HoursFromDate
path: /api/hooks/system/hoursfromdate
---

# HoursFromDate

> **Hook ID:** `greg.SYSTEM.HoursFromDate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TimeController.HoursFromDate

## Native Signature
```csharp
Il2Cpp.TimeController::HoursFromDate(float, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HoursFromDate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HoursFromDate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HoursFromDate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HoursFromDate", function(payload)
    greg.log("Hook greg.SYSTEM.HoursFromDate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HoursFromDate fired")

greg.on("greg.SYSTEM.HoursFromDate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HoursFromDate", (payload) => {
    console.log("Hook greg.SYSTEM.HoursFromDate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HoursFromDate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HoursFromDate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HoursFromDate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
