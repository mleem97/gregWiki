---
title: CablePositions.GenerateCornerBend
description: Hook event for CablePositions.GenerateCornerBend
path: /api/hooks/networking/cable-positions-generate-corner-bend
---

# CablePositions.GenerateCornerBend

> **Hook ID:** `greg.networking.cablepositions.generatecornerbend`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CablePositions.GenerateCornerBend()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerable`1 GenerateCornerBend(Vector3 p_prev, Vector3 p_curr, Vector3 p_next, Transform t_curr)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `p_prev` | `Vector3` | ... |
| `p_curr` | `Vector3` | ... |
| `p_next` | `Vector3` | ... |
| `t_curr` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `GenerateCornerBend` events in `CablePositions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablepositions.generatecornerbend", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablepositions.generatecornerbend", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablepositions.generatecornerbend")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablepositions.generatecornerbend", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablepositions.generatecornerbend", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablepositions.generatecornerbend", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerable`1`
- **Safe to block?**: Yes
