---
title: TechnicianManager.EnqueueDispatch
description: Hook event for TechnicianManager.EnqueueDispatch
path: /api/hooks/maintenance/technician-manager-enqueue-dispatch
---

# TechnicianManager.EnqueueDispatch

> **Hook ID:** `greg.maintenance.technicianmanager.enqueuedispatch`
> **Category:** Maintenance
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TechnicianManager.EnqueueDispatch()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void EnqueueDispatch(RepairJob job)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `job` | `RepairJob` | ... |


## Using this Hook

::: tip
Use this hook to react to `EnqueueDispatch` events in `TechnicianManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.maintenance.technicianmanager.enqueuedispatch", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.maintenance.technicianmanager.enqueuedispatch", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.maintenance.technicianmanager.enqueuedispatch")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.maintenance.technicianmanager.enqueuedispatch", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.maintenance.technicianmanager.enqueuedispatch", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.maintenance.technicianmanager.enqueuedispatch", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
