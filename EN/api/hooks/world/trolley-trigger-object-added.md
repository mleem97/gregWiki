---
title: TrolleyTrigger.ObjectAdded
description: Hook event for TrolleyTrigger.ObjectAdded
path: /api/hooks/world/trolley-trigger-object-added
---

# TrolleyTrigger.ObjectAdded

> **Hook ID:** `greg.world.trolleytrigger.objectadded`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TrolleyTrigger.ObjectAdded()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator ObjectAdded(Collider other, UsableObject uo)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `other` | `Collider` | ... |
| `uo` | `UsableObject` | ... |


## Using this Hook

::: tip
Use this hook to react to `ObjectAdded` events in `TrolleyTrigger`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.trolleytrigger.objectadded", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.trolleytrigger.objectadded", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.trolleytrigger.objectadded")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.trolleytrigger.objectadded", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.trolleytrigger.objectadded", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.trolleytrigger.objectadded", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
