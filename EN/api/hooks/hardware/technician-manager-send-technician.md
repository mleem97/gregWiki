---
title: TechnicianManager.SendTechnician
description: Hook event for TechnicianManager.SendTechnician
path: /api/hooks/hardware/technician-manager-send-technician
---

# TechnicianManager.SendTechnician

> **Hook ID:** `greg.hardware.technicianmanager.sendtechnician`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TechnicianManager.SendTechnician()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SendTechnician(NetworkSwitch networkSwitch, Server server)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `networkSwitch` | `NetworkSwitch` | ... |
| `server` | `Server` | ... |


## Using this Hook

::: tip
Use this hook to react to `SendTechnician` events in `TechnicianManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.technicianmanager.sendtechnician", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.technicianmanager.sendtechnician", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.technicianmanager.sendtechnician")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.technicianmanager.sendtechnician", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.technicianmanager.sendtechnician", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.technicianmanager.sendtechnician", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
