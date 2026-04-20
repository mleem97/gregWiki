---
title: TimeController.CurrentTimeInHours
description: Hook event for TimeController.CurrentTimeInHours
path: /api/hooks/lifecycle/time-controller-current-time-in-hours
---

# TimeController.CurrentTimeInHours

> **Hook ID:** `greg.lifecycle.timecontroller.currenttimeinhours`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TimeController.CurrentTimeInHours()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Single CurrentTimeInHours()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CurrentTimeInHours` events in `TimeController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.timecontroller.currenttimeinhours", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.timecontroller.currenttimeinhours", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.timecontroller.currenttimeinhours")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.timecontroller.currenttimeinhours", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.timecontroller.currenttimeinhours", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.timecontroller.currenttimeinhours", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Single`
- **Safe to block?**: Yes
