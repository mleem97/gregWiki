---
title: DeviceTimerManager.TimerLoop
description: Hook event for DeviceTimerManager.TimerLoop
path: /api/hooks/lifecycle/device-timer-manager-timer-loop
---

# DeviceTimerManager.TimerLoop

> **Hook ID:** `greg.lifecycle.devicetimermanager.timerloop`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `DeviceTimerManager.TimerLoop()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator TimerLoop()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TimerLoop` events in `DeviceTimerManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.devicetimermanager.timerloop", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.devicetimermanager.timerloop", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.devicetimermanager.timerloop")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.devicetimermanager.timerloop", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.devicetimermanager.timerloop", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.devicetimermanager.timerloop", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
