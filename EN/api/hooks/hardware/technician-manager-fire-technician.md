---
title: TechnicianManager.FireTechnician
description: Hook event for TechnicianManager.FireTechnician
path: /api/hooks/hardware/technician-manager-fire-technician
---

# TechnicianManager.FireTechnician

> **Hook ID:** `greg.hardware.technicianmanager.firetechnician`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TechnicianManager.FireTechnician()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void FireTechnician(Int32 technicianID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `technicianID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `FireTechnician` events in `TechnicianManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.technicianmanager.firetechnician", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.technicianmanager.firetechnician", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.technicianmanager.firetechnician")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.technicianmanager.firetechnician", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.technicianmanager.firetechnician", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.technicianmanager.firetechnician", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
