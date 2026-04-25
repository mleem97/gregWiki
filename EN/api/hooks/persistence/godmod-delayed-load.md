---
title: GODMOD.DelayedLoad
description: Hook event for GODMOD.DelayedLoad
path: /api/hooks/persistence/godmod-delayed-load
---

# GODMOD.DelayedLoad

> **Hook ID:** `greg.persistence.godmod.delayedload`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `GODMOD.DelayedLoad()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DelayedLoad()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DelayedLoad` events in `GODMOD`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.godmod.delayedload", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.godmod.delayedload", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.godmod.delayedload")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.godmod.delayedload", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.godmod.delayedload", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.godmod.delayedload", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
