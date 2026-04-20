---
title: ObjectPrivateAbstractSealedInVo0.Initialize
description: Hook event for ObjectPrivateAbstractSealedInVo0.Initialize
path: /api/hooks/ignored/object-private-abstract-sealed-in-vo0-initialize
---

# ObjectPrivateAbstractSealedInVo0.Initialize

> **Hook ID:** `greg.ignored.objectprivateabstractsealedinvo0.initialize`
> **Category:** Ignored
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ObjectPrivateAbstractSealedInVo0.Initialize()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Initialize()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Initialize` events in `ObjectPrivateAbstractSealedInVo0`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.ignored.objectprivateabstractsealedinvo0.initialize", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.ignored.objectprivateabstractsealedinvo0.initialize", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.ignored.objectprivateabstractsealedinvo0.initialize")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.ignored.objectprivateabstractsealedinvo0.initialize", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.ignored.objectprivateabstractsealedinvo0.initialize", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.ignored.objectprivateabstractsealedinvo0.initialize", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
