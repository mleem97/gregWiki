---
title: Technician.ThrowingOutServer
description: Hook event for Technician.ThrowingOutServer
path: /api/hooks/hardware/technician-throwing-out-server
---

# Technician.ThrowingOutServer

> **Hook ID:** `greg.hardware.technician.throwingoutserver`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.ThrowingOutServer()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator ThrowingOutServer()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ThrowingOutServer` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.technician.throwingoutserver", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.technician.throwingoutserver", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.technician.throwingoutserver")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.technician.throwingoutserver", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.technician.throwingoutserver", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.technician.throwingoutserver", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
