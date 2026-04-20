---
title: Wall.OpenWall
description: Hook event for Wall.OpenWall
path: /api/hooks/facility/wall-open-wall
---

# Wall.OpenWall

> **Hook ID:** `greg.facility.wall.openwall`
> **Category:** Facility
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Wall.OpenWall()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OpenWall()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OpenWall` events in `Wall`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.facility.wall.openwall", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.facility.wall.openwall", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.facility.wall.openwall")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.facility.wall.openwall", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.facility.wall.openwall", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.facility.wall.openwall", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
