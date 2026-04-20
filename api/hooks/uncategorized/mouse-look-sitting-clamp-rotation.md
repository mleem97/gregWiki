---
title: MouseLook.SittingClampRotation
description: Hook event for MouseLook.SittingClampRotation
path: /api/hooks/uncategorized/mouse-look-sitting-clamp-rotation
---

# MouseLook.SittingClampRotation

> **Hook ID:** `greg.uncategorized.mouselook.sittingclamprotation`
> **Category:** Uncategorized
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `MouseLook.SittingClampRotation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 SittingClampRotation(Vector2 q)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `q` | `Vector2` | ... |


## Using this Hook

::: tip
Use this hook to react to `SittingClampRotation` events in `MouseLook`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.mouselook.sittingclamprotation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.mouselook.sittingclamprotation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.mouselook.sittingclamprotation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.mouselook.sittingclamprotation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.mouselook.sittingclamprotation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.mouselook.sittingclamprotation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
