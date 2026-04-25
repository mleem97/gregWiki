---
title: Technician.AssignJob
description: Hook event for Technician.AssignJob
path: /api/hooks/maintenance/technician-assign-job
---

# Technician.AssignJob

> **Hook ID:** `greg.maintenance.technician.assignjob`
> **Category:** Maintenance
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.AssignJob()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AssignJob(RepairJob job)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `job` | `RepairJob` | ... |


## Using this Hook

::: tip
Use this hook to react to `AssignJob` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.maintenance.technician.assignjob", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.maintenance.technician.assignjob", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.maintenance.technician.assignjob")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.maintenance.technician.assignjob", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.maintenance.technician.assignjob", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.maintenance.technician.assignjob", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
