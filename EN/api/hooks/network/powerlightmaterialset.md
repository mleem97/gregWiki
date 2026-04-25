---
title: PowerLightMaterialSet
description: Documentation for greg.NETWORK.PowerLightMaterialSet
path: /api/hooks/network/powerlightmaterialset
---

# PowerLightMaterialSet

> **Hook ID:** `greg.NETWORK.PowerLightMaterialSet`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.SetPowerLightMaterial

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::SetPowerLightMaterial(Material)
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
        GregAPI.Hooks.On("greg.NETWORK.PowerLightMaterialSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.PowerLightMaterialSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.PowerLightMaterialSet", function(payload)
    greg.log("Hook greg.NETWORK.PowerLightMaterialSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.PowerLightMaterialSet fired")

greg.on("greg.NETWORK.PowerLightMaterialSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.PowerLightMaterialSet", (payload) => {
    console.log("Hook greg.NETWORK.PowerLightMaterialSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.PowerLightMaterialSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.PowerLightMaterialSet", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.PowerLightMaterialSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
