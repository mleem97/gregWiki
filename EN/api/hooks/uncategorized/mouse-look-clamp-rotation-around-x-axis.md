---
title: MouseLook.ClampRotationAroundXAxis
description: Hook event for MouseLook.ClampRotationAroundXAxis
path: /api/hooks/uncategorized/mouse-look-clamp-rotation-around-x-axis
---

# MouseLook.ClampRotationAroundXAxis

> **Hook ID:** `greg.uncategorized.mouselook.clamprotationaroundxaxis`
> **Category:** Uncategorized
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `MouseLook.ClampRotationAroundXAxis()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Quaternion ClampRotationAroundXAxis(Quaternion q)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `q` | `Quaternion` | ... |


## Using this Hook

::: tip
Use this hook to react to `ClampRotationAroundXAxis` events in `MouseLook`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.mouselook.clamprotationaroundxaxis", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.mouselook.clamprotationaroundxaxis", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.mouselook.clamprotationaroundxaxis")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.mouselook.clamprotationaroundxaxis", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.mouselook.clamprotationaroundxaxis", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.mouselook.clamprotationaroundxaxis", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Quaternion`
- **Safe to block?**: Yes
