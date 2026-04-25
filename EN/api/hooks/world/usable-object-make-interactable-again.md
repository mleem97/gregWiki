---
title: UsableObject.MakeInteractableAgain
description: Hook event for UsableObject.MakeInteractableAgain
path: /api/hooks/world/usable-object-make-interactable-again
---

# UsableObject.MakeInteractableAgain

> **Hook ID:** `greg.world.usableobject.makeinteractableagain`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UsableObject.MakeInteractableAgain()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator MakeInteractableAgain()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `MakeInteractableAgain` events in `UsableObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.usableobject.makeinteractableagain", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.usableobject.makeinteractableagain", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.usableobject.makeinteractableagain")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.usableobject.makeinteractableagain", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.usableobject.makeinteractableagain", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.usableobject.makeinteractableagain", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
