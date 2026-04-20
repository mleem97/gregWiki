---
title: CheckIfTouchingWall.Awake
description: Hook event for CheckIfTouchingWall.Awake
path: /api/hooks/facility/check-if-touching-wall-awake
---

# CheckIfTouchingWall.Awake

> **Hook ID:** `greg.facility.checkiftouchingwall.awake`
> **Category:** Facility
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CheckIfTouchingWall.Awake()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Awake()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Awake` events in `CheckIfTouchingWall`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.facility.checkiftouchingwall.awake", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.facility.checkiftouchingwall.awake", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.facility.checkiftouchingwall.awake")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.facility.checkiftouchingwall.awake", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.facility.checkiftouchingwall.awake", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.facility.checkiftouchingwall.awake", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
