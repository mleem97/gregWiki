---
title: PowerLightMaterialSet
description: Documentation for greg.SERVER.PowerLightMaterialSet
path: /api/hooks/server/powerlightmaterialset
---

# PowerLightMaterialSet

> **Hook ID:** `greg.SERVER.PowerLightMaterialSet`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.SetPowerLightMaterial

## Native Signature
```csharp
Il2Cpp.Server::SetPowerLightMaterial(Material)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PowerLightMaterialSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.PowerLightMaterialSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.PowerLightMaterialSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.PowerLightMaterialSet", function(payload)
    greg.log("Hook greg.SERVER.PowerLightMaterialSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.PowerLightMaterialSet fired")

greg.on("greg.SERVER.PowerLightMaterialSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.PowerLightMaterialSet", (payload) => {
    console.log("Hook greg.SERVER.PowerLightMaterialSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.PowerLightMaterialSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.PowerLightMaterialSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.PowerLightMaterialSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
