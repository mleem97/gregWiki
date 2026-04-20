---
title: ShaderPropAnimator.AnimateProperties
description: Hook event for ShaderPropAnimator.AnimateProperties
path: /api/hooks/world/shader-prop-animator-animate-properties
---

# ShaderPropAnimator.AnimateProperties

> **Hook ID:** `greg.world.shaderpropanimator.animateproperties`
> **Category:** World
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `ShaderPropAnimator.AnimateProperties()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator AnimateProperties()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AnimateProperties` events in `ShaderPropAnimator`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.shaderpropanimator.animateproperties", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.shaderpropanimator.animateproperties", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.shaderpropanimator.animateproperties")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.shaderpropanimator.animateproperties", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.shaderpropanimator.animateproperties", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.shaderpropanimator.animateproperties", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
