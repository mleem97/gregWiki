---
title: ReusableFunctions.DestroyChildren
description: Hook event for ReusableFunctions.DestroyChildren
path: /api/hooks/lifecycle/reusable-functions-destroy-children
---

# ReusableFunctions.DestroyChildren

> **Hook ID:** `greg.lifecycle.reusablefunctions.destroychildren`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.DestroyChildren()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DestroyChildren(Transform root)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `root` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `DestroyChildren` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.reusablefunctions.destroychildren", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.reusablefunctions.destroychildren", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.reusablefunctions.destroychildren")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.reusablefunctions.destroychildren", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.reusablefunctions.destroychildren", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.reusablefunctions.destroychildren", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
