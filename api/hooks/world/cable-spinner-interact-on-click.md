---
title: CableSpinner.InteractOnClick
description: Hook event for CableSpinner.InteractOnClick
path: /api/hooks/world/cable-spinner-interact-on-click
---

# CableSpinner.InteractOnClick

> **Hook ID:** `greg.world.cablespinner.interactonclick`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableSpinner.InteractOnClick()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InteractOnClick()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `InteractOnClick` events in `CableSpinner`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.cablespinner.interactonclick", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.cablespinner.interactonclick", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.cablespinner.interactonclick")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.cablespinner.interactonclick", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.cablespinner.interactonclick", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.cablespinner.interactonclick", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
