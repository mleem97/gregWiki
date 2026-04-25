---
title: UsableObject.ActionInHand
description: Hook event for UsableObject.ActionInHand
path: /api/hooks/world/usable-object-action-in-hand
---

# UsableObject.ActionInHand

> **Hook ID:** `greg.world.usableobject.actioninhand`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UsableObject.ActionInHand()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ActionInHand()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ActionInHand` events in `UsableObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.usableobject.actioninhand", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.usableobject.actioninhand", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.usableobject.actioninhand")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.usableobject.actioninhand", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.usableobject.actioninhand", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.usableobject.actioninhand", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
