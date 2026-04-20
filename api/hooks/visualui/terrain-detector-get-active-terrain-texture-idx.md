---
title: TerrainDetector.GetActiveTerrainTextureIdx
description: Hook event for TerrainDetector.GetActiveTerrainTextureIdx
path: /api/hooks/visualui/terrain-detector-get-active-terrain-texture-idx
---

# TerrainDetector.GetActiveTerrainTextureIdx

> **Hook ID:** `greg.visualui.terraindetector.getactiveterraintextureidx`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TerrainDetector.GetActiveTerrainTextureIdx()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetActiveTerrainTextureIdx(Vector3 position)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `position` | `Vector3` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetActiveTerrainTextureIdx` events in `TerrainDetector`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.terraindetector.getactiveterraintextureidx", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.terraindetector.getactiveterraintextureidx", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.terraindetector.getactiveterraintextureidx")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.terraindetector.getactiveterraintextureidx", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.terraindetector.getactiveterraintextureidx", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.terraindetector.getactiveterraintextureidx", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
