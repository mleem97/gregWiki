---
title: TimeController.HoursFromDate
description: Hook event for TimeController.HoursFromDate
path: /api/hooks/lifecycle/time-controller-hours-from-date
---

# TimeController.HoursFromDate

> **Hook ID:** `greg.lifecycle.timecontroller.hoursfromdate`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TimeController.HoursFromDate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 HoursFromDate(Single _time, Int32 _day)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_time` | `Single` | ... |
| `_day` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `HoursFromDate` events in `TimeController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.timecontroller.hoursfromdate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.timecontroller.hoursfromdate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.timecontroller.hoursfromdate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.timecontroller.hoursfromdate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.timecontroller.hoursfromdate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.timecontroller.hoursfromdate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
