---
title: DeviceTimerManager.Register
description: Hook event for DeviceTimerManager.Register
path: /api/hooks/lifecycle/device-timer-manager-register
---

# DeviceTimerManager.Register

> **Hook ID:** `greg.lifecycle.devicetimermanager.register`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `DeviceTimerManager.Register()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Register(ITimedDevice device)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `device` | `ITimedDevice` | ... |


## Using this Hook

::: tip
Use this hook to react to `Register` events in `DeviceTimerManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.devicetimermanager.register", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.devicetimermanager.register", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.devicetimermanager.register")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.devicetimermanager.register", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.devicetimermanager.register", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.devicetimermanager.register", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
