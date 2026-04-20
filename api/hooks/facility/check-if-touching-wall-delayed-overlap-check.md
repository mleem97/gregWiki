---
title: CheckIfTouchingWall.DelayedOverlapCheck
description: Hook event for CheckIfTouchingWall.DelayedOverlapCheck
path: /api/hooks/facility/check-if-touching-wall-delayed-overlap-check
---

# CheckIfTouchingWall.DelayedOverlapCheck

> **Hook ID:** `greg.facility.checkiftouchingwall.delayedoverlapcheck`
> **Category:** Facility
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CheckIfTouchingWall.DelayedOverlapCheck()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator DelayedOverlapCheck()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `DelayedOverlapCheck` events in `CheckIfTouchingWall`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.facility.checkiftouchingwall.delayedoverlapcheck", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.facility.checkiftouchingwall.delayedoverlapcheck", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.facility.checkiftouchingwall.delayedoverlapcheck")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.facility.checkiftouchingwall.delayedoverlapcheck", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.facility.checkiftouchingwall.delayedoverlapcheck", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.facility.checkiftouchingwall.delayedoverlapcheck", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
