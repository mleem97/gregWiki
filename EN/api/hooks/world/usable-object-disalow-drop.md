---
title: UsableObject.DisalowDrop
description: Hook event for UsableObject.DisalowDrop
path: /api/hooks/world/usable-object-disalow-drop
---

# UsableObject.DisalowDrop

> **Hook ID:** `greg.world.usableobject.disalowdrop`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UsableObject.DisalowDrop()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DisalowDrop()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DisalowDrop` events in `UsableObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.usableobject.disalowdrop", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.usableobject.disalowdrop", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.usableobject.disalowdrop")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.usableobject.disalowdrop", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.usableobject.disalowdrop", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.usableobject.disalowdrop", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
