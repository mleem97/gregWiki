---
title: Technician.RequestJobDelayed
description: Hook event for Technician.RequestJobDelayed
path: /api/hooks/maintenance/technician-request-job-delayed
---

# Technician.RequestJobDelayed

> **Hook ID:** `greg.maintenance.technician.requestjobdelayed`
> **Category:** Maintenance
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.RequestJobDelayed()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator RequestJobDelayed()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `RequestJobDelayed` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.maintenance.technician.requestjobdelayed", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.maintenance.technician.requestjobdelayed", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.maintenance.technician.requestjobdelayed")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.maintenance.technician.requestjobdelayed", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.maintenance.technician.requestjobdelayed", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.maintenance.technician.requestjobdelayed", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
