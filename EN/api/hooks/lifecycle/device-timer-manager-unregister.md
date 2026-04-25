---
title: DeviceTimerManager.Unregister
description: Hook event for DeviceTimerManager.Unregister
path: /api/hooks/lifecycle/device-timer-manager-unregister
---

# DeviceTimerManager.Unregister

> **Hook ID:** `greg.lifecycle.devicetimermanager.unregister`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `DeviceTimerManager.Unregister()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Unregister(ITimedDevice device)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `device` | `ITimedDevice` | ... |


## Using this Hook

::: tip
Use this hook to react to `Unregister` events in `DeviceTimerManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.devicetimermanager.unregister", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.devicetimermanager.unregister", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.devicetimermanager.unregister")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.devicetimermanager.unregister", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.devicetimermanager.unregister", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.devicetimermanager.unregister", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
