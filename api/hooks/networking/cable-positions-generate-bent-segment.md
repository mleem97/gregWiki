---
title: CablePositions.GenerateBentSegment
description: Hook event for CablePositions.GenerateBentSegment
path: /api/hooks/networking/cable-positions-generate-bent-segment
---

# CablePositions.GenerateBentSegment

> **Hook ID:** `greg.networking.cablepositions.generatebentsegment`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CablePositions.GenerateBentSegment()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerable`1 GenerateBentSegment(Vector3 connectionPoint, Vector3 nextPoint, Transform linkTransform, Boolean isStart)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `connectionPoint` | `Vector3` | ... |
| `nextPoint` | `Vector3` | ... |
| `linkTransform` | `Transform` | ... |
| `isStart` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `GenerateBentSegment` events in `CablePositions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablepositions.generatebentsegment", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablepositions.generatebentsegment", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablepositions.generatebentsegment")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablepositions.generatebentsegment", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablepositions.generatebentsegment", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablepositions.generatebentsegment", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerable`1`
- **Safe to block?**: Yes
