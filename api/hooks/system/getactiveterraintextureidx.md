---
title: GetActiveTerrainTextureIdx
description: Documentation for greg.SYSTEM.GetActiveTerrainTextureIdx
path: /api/hooks/system/getactiveterraintextureidx
---

# GetActiveTerrainTextureIdx

> **Hook ID:** `greg.SYSTEM.GetActiveTerrainTextureIdx`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TerrainDetector.GetActiveTerrainTextureIdx

## Native Signature
```csharp
Il2Cpp.TerrainDetector::GetActiveTerrainTextureIdx(Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetActiveTerrainTextureIdx` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetActiveTerrainTextureIdx", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetActiveTerrainTextureIdx");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetActiveTerrainTextureIdx", function(payload)
    greg.log("Hook greg.SYSTEM.GetActiveTerrainTextureIdx received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetActiveTerrainTextureIdx fired")

greg.on("greg.SYSTEM.GetActiveTerrainTextureIdx", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetActiveTerrainTextureIdx", (payload) => {
    console.log("Hook greg.SYSTEM.GetActiveTerrainTextureIdx triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetActiveTerrainTextureIdx".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetActiveTerrainTextureIdx", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetActiveTerrainTextureIdx fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
