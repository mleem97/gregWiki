---
title: CablePositions.RemoveLastPosition
description: Hook event for CablePositions.RemoveLastPosition
path: /api/hooks/character/cable-positions-remove-last-position
---

# CablePositions.RemoveLastPosition

> **Hook ID:** `greg.character.cablepositions.removelastposition`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CablePositions.RemoveLastPosition()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Transform RemoveLastPosition(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveLastPosition` events in `CablePositions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.cablepositions.removelastposition", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.cablepositions.removelastposition", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.cablepositions.removelastposition")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.cablepositions.removelastposition", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.cablepositions.removelastposition", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.cablepositions.removelastposition", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Transform`
- **Safe to block?**: Yes
