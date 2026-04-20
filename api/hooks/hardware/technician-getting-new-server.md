---
title: Technician.GettingNewServer
description: Hook event for Technician.GettingNewServer
path: /api/hooks/hardware/technician-getting-new-server
---

# Technician.GettingNewServer

> **Hook ID:** `greg.hardware.technician.gettingnewserver`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.GettingNewServer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator GettingNewServer()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GettingNewServer` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.technician.gettingnewserver", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.technician.gettingnewserver", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.technician.gettingnewserver")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.technician.gettingnewserver", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.technician.gettingnewserver", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.technician.gettingnewserver", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
