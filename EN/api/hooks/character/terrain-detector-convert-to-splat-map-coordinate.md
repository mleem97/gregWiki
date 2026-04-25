---
title: TerrainDetector.ConvertToSplatMapCoordinate
description: Hook event for TerrainDetector.ConvertToSplatMapCoordinate
path: /api/hooks/character/terrain-detector-convert-to-splat-map-coordinate
---

# TerrainDetector.ConvertToSplatMapCoordinate

> **Hook ID:** `greg.character.terraindetector.converttosplatmapcoordinate`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TerrainDetector.ConvertToSplatMapCoordinate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector3 ConvertToSplatMapCoordinate(Vector3 worldPosition)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `worldPosition` | `Vector3` | ... |


## Using this Hook

::: tip
Use this hook to react to `ConvertToSplatMapCoordinate` events in `TerrainDetector`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.terraindetector.converttosplatmapcoordinate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.terraindetector.converttosplatmapcoordinate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.terraindetector.converttosplatmapcoordinate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.terraindetector.converttosplatmapcoordinate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.terraindetector.converttosplatmapcoordinate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.terraindetector.converttosplatmapcoordinate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector3`
- **Safe to block?**: Yes
