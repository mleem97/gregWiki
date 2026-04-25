---
title: Technician.SendToContainer
description: Hook event for Technician.SendToContainer
path: /api/hooks/facility/technician-send-to-container
---

# Technician.SendToContainer

> **Hook ID:** `greg.facility.technician.sendtocontainer`
> **Category:** Facility
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.SendToContainer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator SendToContainer()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SendToContainer` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.facility.technician.sendtocontainer", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.facility.technician.sendtocontainer", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.facility.technician.sendtocontainer")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.facility.technician.sendtocontainer", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.facility.technician.sendtocontainer", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.facility.technician.sendtocontainer", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
