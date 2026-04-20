---
title: RackMount.OnLoad
description: Hook event for RackMount.OnLoad
path: /api/hooks/persistence/rack-mount-on-load
---

# RackMount.OnLoad

> **Hook ID:** `greg.persistence.rackmount.onload`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackMount.OnLoad()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLoad()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnLoad` events in `RackMount`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.rackmount.onload", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.rackmount.onload", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.rackmount.onload")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.rackmount.onload", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.rackmount.onload", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.rackmount.onload", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
