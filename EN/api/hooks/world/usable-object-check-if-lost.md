---
title: UsableObject.CheckIfLost
description: Hook event for UsableObject.CheckIfLost
path: /api/hooks/world/usable-object-check-if-lost
---

# UsableObject.CheckIfLost

> **Hook ID:** `greg.world.usableobject.checkiflost`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UsableObject.CheckIfLost()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator CheckIfLost()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CheckIfLost` events in `UsableObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.usableobject.checkiflost", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.usableobject.checkiflost", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.usableobject.checkiflost")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.usableobject.checkiflost", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.usableobject.checkiflost", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.usableobject.checkiflost", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
