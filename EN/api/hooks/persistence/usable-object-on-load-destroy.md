---
title: UsableObject.OnLoadDestroy
description: Hook event for UsableObject.OnLoadDestroy
path: /api/hooks/persistence/usable-object-on-load-destroy
---

# UsableObject.OnLoadDestroy

> **Hook ID:** `greg.persistence.usableobject.onloaddestroy`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UsableObject.OnLoadDestroy()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLoadDestroy()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnLoadDestroy` events in `UsableObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.usableobject.onloaddestroy", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.usableobject.onloaddestroy", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.usableobject.onloaddestroy")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.usableobject.onloaddestroy", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.usableobject.onloaddestroy", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.usableobject.onloaddestroy", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
