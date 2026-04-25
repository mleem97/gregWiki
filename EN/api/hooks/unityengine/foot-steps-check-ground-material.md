---
title: FootSteps.checkGroundMaterial
description: Hook event for FootSteps.checkGroundMaterial
path: /api/hooks/unityengine/foot-steps-check-ground-material
---

# FootSteps.checkGroundMaterial

> **Hook ID:** `greg.unityengine.footsteps.checkgroundmaterial`
> **Category:** Unityengine
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FootSteps.checkGroundMaterial()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator checkGroundMaterial()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `checkGroundMaterial` events in `FootSteps`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.unityengine.footsteps.checkgroundmaterial", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.unityengine.footsteps.checkgroundmaterial", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.unityengine.footsteps.checkgroundmaterial")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.unityengine.footsteps.checkgroundmaterial", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.unityengine.footsteps.checkgroundmaterial", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.unityengine.footsteps.checkgroundmaterial", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
