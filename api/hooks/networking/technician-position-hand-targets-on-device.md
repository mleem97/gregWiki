---
title: Technician.PositionHandTargetsOnDevice
description: Hook event for Technician.PositionHandTargetsOnDevice
path: /api/hooks/networking/technician-position-hand-targets-on-device
---

# Technician.PositionHandTargetsOnDevice

> **Hook ID:** `greg.networking.technician.positionhandtargetsondevice`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.PositionHandTargetsOnDevice()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PositionHandTargetsOnDevice(GameObject device)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `device` | `GameObject` | ... |


## Using this Hook

::: tip
Use this hook to react to `PositionHandTargetsOnDevice` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.technician.positionhandtargetsondevice", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.technician.positionhandtargetsondevice", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.technician.positionhandtargetsondevice")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.technician.positionhandtargetsondevice", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.technician.positionhandtargetsondevice", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.technician.positionhandtargetsondevice", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
