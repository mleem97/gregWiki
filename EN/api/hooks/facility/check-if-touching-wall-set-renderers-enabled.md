---
title: CheckIfTouchingWall.SetRenderersEnabled
description: Hook event for CheckIfTouchingWall.SetRenderersEnabled
path: /api/hooks/facility/check-if-touching-wall-set-renderers-enabled
---

# CheckIfTouchingWall.SetRenderersEnabled

> **Hook ID:** `greg.facility.checkiftouchingwall.setrenderersenabled`
> **Category:** Facility
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CheckIfTouchingWall.SetRenderersEnabled()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetRenderersEnabled(Boolean isEnabled)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `isEnabled` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetRenderersEnabled` events in `CheckIfTouchingWall`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.facility.checkiftouchingwall.setrenderersenabled", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.facility.checkiftouchingwall.setrenderersenabled", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.facility.checkiftouchingwall.setrenderersenabled")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.facility.checkiftouchingwall.setrenderersenabled", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.facility.checkiftouchingwall.setrenderersenabled", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.facility.checkiftouchingwall.setrenderersenabled", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
