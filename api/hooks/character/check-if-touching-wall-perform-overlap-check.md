---
title: CheckIfTouchingWall.PerformOverlapCheck
description: Hook event for CheckIfTouchingWall.PerformOverlapCheck
path: /api/hooks/character/check-if-touching-wall-perform-overlap-check
---

# CheckIfTouchingWall.PerformOverlapCheck

> **Hook ID:** `greg.character.checkiftouchingwall.performoverlapcheck`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CheckIfTouchingWall.PerformOverlapCheck()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PerformOverlapCheck()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `PerformOverlapCheck` events in `CheckIfTouchingWall`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.checkiftouchingwall.performoverlapcheck", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.checkiftouchingwall.performoverlapcheck", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.checkiftouchingwall.performoverlapcheck")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.checkiftouchingwall.performoverlapcheck", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.checkiftouchingwall.performoverlapcheck", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.checkiftouchingwall.performoverlapcheck", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
