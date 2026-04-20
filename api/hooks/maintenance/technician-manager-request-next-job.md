---
title: TechnicianManager.RequestNextJob
description: Hook event for TechnicianManager.RequestNextJob
path: /api/hooks/maintenance/technician-manager-request-next-job
---

# TechnicianManager.RequestNextJob

> **Hook ID:** `greg.maintenance.technicianmanager.requestnextjob`
> **Category:** Maintenance
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TechnicianManager.RequestNextJob()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RequestNextJob(Technician technician)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `technician` | `Technician` | ... |


## Using this Hook

::: tip
Use this hook to react to `RequestNextJob` events in `TechnicianManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.maintenance.technicianmanager.requestnextjob", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.maintenance.technicianmanager.requestnextjob", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.maintenance.technicianmanager.requestnextjob")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.maintenance.technicianmanager.requestnextjob", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.maintenance.technicianmanager.requestnextjob", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.maintenance.technicianmanager.requestnextjob", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
