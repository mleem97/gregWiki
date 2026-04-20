---
title: StaticUIElements.InstantiateParticleUpgrade
description: Hook event for StaticUIElements.InstantiateParticleUpgrade
path: /api/hooks/visualui/static-ui-elements-instantiate-particle-upgrade
---

# StaticUIElements.InstantiateParticleUpgrade

> **Hook ID:** `greg.visualui.staticuielements.instantiateparticleupgrade`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.InstantiateParticleUpgrade()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InstantiateParticleUpgrade(Transform _transform)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_transform` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `InstantiateParticleUpgrade` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.instantiateparticleupgrade", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.instantiateparticleupgrade", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.instantiateparticleupgrade")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.instantiateparticleupgrade", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.instantiateparticleupgrade", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.instantiateparticleupgrade", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
