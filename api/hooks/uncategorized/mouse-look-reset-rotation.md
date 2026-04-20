---
title: MouseLook.ResetRotation
description: Hook event for MouseLook.ResetRotation
path: /api/hooks/uncategorized/mouse-look-reset-rotation
---

# MouseLook.ResetRotation

> **Hook ID:** `greg.uncategorized.mouselook.resetrotation`
> **Category:** Uncategorized
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `MouseLook.ResetRotation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ResetRotation(Transform character)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `character` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `ResetRotation` events in `MouseLook`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.mouselook.resetrotation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.mouselook.resetrotation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.mouselook.resetrotation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.mouselook.resetrotation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.mouselook.resetrotation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.mouselook.resetrotation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
