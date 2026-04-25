---
title: CablePositions.AssignNewPosition
description: Hook event for CablePositions.AssignNewPosition
path: /api/hooks/networking/cable-positions-assign-new-position
---

# CablePositions.AssignNewPosition

> **Hook ID:** `greg.networking.cablepositions.assignnewposition`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CablePositions.AssignNewPosition()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AssignNewPosition(Int32 cableId, Transform linkTransform, Boolean isStartPoint, Boolean isEndPoint, TypeOfLink typeOfLink, String serverID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |
| `linkTransform` | `Transform` | ... |
| `isStartPoint` | `Boolean` | ... |
| `isEndPoint` | `Boolean` | ... |
| `typeOfLink` | `TypeOfLink` | ... |
| `serverID` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `AssignNewPosition` events in `CablePositions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablepositions.assignnewposition", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablepositions.assignnewposition", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablepositions.assignnewposition")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablepositions.assignnewposition", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablepositions.assignnewposition", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablepositions.assignnewposition", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
