---
title: ConvertToSplatMapCoordinate
description: Documentation for greg.SYSTEM.ConvertToSplatMapCoordinate
path: /api/hooks/system/converttosplatmapcoordinate
---

# ConvertToSplatMapCoordinate

> **Hook ID:** `greg.SYSTEM.ConvertToSplatMapCoordinate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TerrainDetector.ConvertToSplatMapCoordinate

## Native Signature
```csharp
Il2Cpp.TerrainDetector::ConvertToSplatMapCoordinate(Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ConvertToSplatMapCoordinate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ConvertToSplatMapCoordinate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ConvertToSplatMapCoordinate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ConvertToSplatMapCoordinate", function(payload)
    greg.log("Hook greg.SYSTEM.ConvertToSplatMapCoordinate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ConvertToSplatMapCoordinate fired")

greg.on("greg.SYSTEM.ConvertToSplatMapCoordinate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ConvertToSplatMapCoordinate", (payload) => {
    console.log("Hook greg.SYSTEM.ConvertToSplatMapCoordinate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ConvertToSplatMapCoordinate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ConvertToSplatMapCoordinate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ConvertToSplatMapCoordinate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
