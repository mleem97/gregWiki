---
title: TerrainDetector.SetCurrentTerrain
description: Hook event for TerrainDetector.SetCurrentTerrain
path: /api/hooks/character/terrain-detector-set-current-terrain
---

# TerrainDetector.SetCurrentTerrain

> **Hook ID:** `greg.character.terraindetector.setcurrentterrain`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TerrainDetector.SetCurrentTerrain()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetCurrentTerrain(Terrain _terrain)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_terrain` | `Terrain` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetCurrentTerrain` events in `TerrainDetector`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.terraindetector.setcurrentterrain", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.terraindetector.setcurrentterrain", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.terraindetector.setcurrentterrain")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.terraindetector.setcurrentterrain", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.terraindetector.setcurrentterrain", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.terraindetector.setcurrentterrain", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
