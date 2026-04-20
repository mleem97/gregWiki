---
title: TimeController.Awake
description: Hook event for TimeController.Awake
path: /api/hooks/lifecycle/time-controller-awake
---

# TimeController.Awake

> **Hook ID:** `greg.lifecycle.timecontroller.awake`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TimeController.Awake()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Awake()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Awake` events in `TimeController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.timecontroller.awake", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.timecontroller.awake", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.timecontroller.awake")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.timecontroller.awake", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.timecontroller.awake", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.timecontroller.awake", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
