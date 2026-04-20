---
title: ObjectiveObject.GetReward
description: Hook event for ObjectiveObject.GetReward
path: /api/hooks/lifecycle/objective-object-get-reward
---

# ObjectiveObject.GetReward

> **Hook ID:** `greg.lifecycle.objectiveobject.getreward`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ObjectiveObject.GetReward()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void GetReward()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetReward` events in `ObjectiveObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.objectiveobject.getreward", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.objectiveobject.getreward", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.objectiveobject.getreward")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.objectiveobject.getreward", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.objectiveobject.getreward", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.objectiveobject.getreward", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
