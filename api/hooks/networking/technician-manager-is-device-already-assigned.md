---
title: TechnicianManager.IsDeviceAlreadyAssigned
description: Hook event for TechnicianManager.IsDeviceAlreadyAssigned
path: /api/hooks/networking/technician-manager-is-device-already-assigned
---

# TechnicianManager.IsDeviceAlreadyAssigned

> **Hook ID:** `greg.networking.technicianmanager.isdevicealreadyassigned`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TechnicianManager.IsDeviceAlreadyAssigned()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsDeviceAlreadyAssigned(NetworkSwitch networkSwitch, Server server)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `networkSwitch` | `NetworkSwitch` | ... |
| `server` | `Server` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsDeviceAlreadyAssigned` events in `TechnicianManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.technicianmanager.isdevicealreadyassigned", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.technicianmanager.isdevicealreadyassigned", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.technicianmanager.isdevicealreadyassigned")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.technicianmanager.isdevicealreadyassigned", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.technicianmanager.isdevicealreadyassigned", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.technicianmanager.isdevicealreadyassigned", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
