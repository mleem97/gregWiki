---
title: RackDoor.DelayedTrigger
description: Hook event for RackDoor.DelayedTrigger
path: /api/hooks/world/rack-door-delayed-trigger
---

# RackDoor.DelayedTrigger

> **Hook ID:** `greg.world.rackdoor.delayedtrigger`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackDoor.DelayedTrigger()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DelayedTrigger()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DelayedTrigger` events in `RackDoor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.rackdoor.delayedtrigger", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.rackdoor.delayedtrigger", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.rackdoor.delayedtrigger")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.rackdoor.delayedtrigger", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.rackdoor.delayedtrigger", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.rackdoor.delayedtrigger", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
