---
title: UsableObject.MoveBetweenPositions
description: Hook event for UsableObject.MoveBetweenPositions
path: /api/hooks/character/usable-object-move-between-positions
---

# UsableObject.MoveBetweenPositions

> **Hook ID:** `greg.character.usableobject.movebetweenpositions`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UsableObject.MoveBetweenPositions()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MoveBetweenPositions(Vector3 _position, Vector3 _rotation)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_position` | `Vector3` | ... |
| `_rotation` | `Vector3` | ... |


## Using this Hook

::: tip
Use this hook to react to `MoveBetweenPositions` events in `UsableObject`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.usableobject.movebetweenpositions", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.usableobject.movebetweenpositions", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.usableobject.movebetweenpositions")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.usableobject.movebetweenpositions", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.usableobject.movebetweenpositions", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.usableobject.movebetweenpositions", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
