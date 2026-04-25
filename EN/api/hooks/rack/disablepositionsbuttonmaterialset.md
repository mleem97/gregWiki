---
title: DisablePositionsButtonMaterialSet
description: Documentation for greg.RACK.DisablePositionsButtonMaterialSet
path: /api/hooks/rack/disablepositionsbuttonmaterialset
---

# DisablePositionsButtonMaterialSet

> **Hook ID:** `greg.RACK.DisablePositionsButtonMaterialSet`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.SetDisablePositionsButtonMaterial

## Native Signature
```csharp
Il2Cpp.Rack::SetDisablePositionsButtonMaterial(Material)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisablePositionsButtonMaterialSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.DisablePositionsButtonMaterialSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.DisablePositionsButtonMaterialSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.DisablePositionsButtonMaterialSet", function(payload)
    greg.log("Hook greg.RACK.DisablePositionsButtonMaterialSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.DisablePositionsButtonMaterialSet fired")

greg.on("greg.RACK.DisablePositionsButtonMaterialSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.DisablePositionsButtonMaterialSet", (payload) => {
    console.log("Hook greg.RACK.DisablePositionsButtonMaterialSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.DisablePositionsButtonMaterialSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.DisablePositionsButtonMaterialSet", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.DisablePositionsButtonMaterialSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
