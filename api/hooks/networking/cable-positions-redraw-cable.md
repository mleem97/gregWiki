---
title: CablePositions.RedrawCable
description: Hook event for CablePositions.RedrawCable
path: /api/hooks/networking/cable-positions-redraw-cable
---

# CablePositions.RedrawCable

> **Hook ID:** `greg.networking.cablepositions.redrawcable`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CablePositions.RedrawCable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RedrawCable(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `RedrawCable` events in `CablePositions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablepositions.redrawcable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablepositions.redrawcable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablepositions.redrawcable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablepositions.redrawcable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablepositions.redrawcable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablepositions.redrawcable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
