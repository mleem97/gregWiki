---
title: CurrentTerrainSet
description: Documentation for greg.SYSTEM.CurrentTerrainSet
path: /api/hooks/system/currentterrainset
---

# CurrentTerrainSet

> **Hook ID:** `greg.SYSTEM.CurrentTerrainSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TerrainDetector.SetCurrentTerrain

## Native Signature
```csharp
Il2Cpp.TerrainDetector::SetCurrentTerrain(Terrain)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CurrentTerrainSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CurrentTerrainSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CurrentTerrainSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CurrentTerrainSet", function(payload)
    greg.log("Hook greg.SYSTEM.CurrentTerrainSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CurrentTerrainSet fired")

greg.on("greg.SYSTEM.CurrentTerrainSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CurrentTerrainSet", (payload) => {
    console.log("Hook greg.SYSTEM.CurrentTerrainSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CurrentTerrainSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CurrentTerrainSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CurrentTerrainSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
