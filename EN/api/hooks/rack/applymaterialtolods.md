---
title: ApplyMaterialToLODs
description: Documentation for greg.RACK.ApplyMaterialToLODs
path: /api/hooks/rack/applymaterialtolods
---

# ApplyMaterialToLODs

> **Hook ID:** `greg.RACK.ApplyMaterialToLODs`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackMount.ApplyMaterialToLODs

## Native Signature
```csharp
Il2Cpp.RackMount::ApplyMaterialToLODs(GameObject, Material)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ApplyMaterialToLODs` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.ApplyMaterialToLODs", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.ApplyMaterialToLODs");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.ApplyMaterialToLODs", function(payload)
    greg.log("Hook greg.RACK.ApplyMaterialToLODs received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.ApplyMaterialToLODs fired")

greg.on("greg.RACK.ApplyMaterialToLODs", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.ApplyMaterialToLODs", (payload) => {
    console.log("Hook greg.RACK.ApplyMaterialToLODs triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.ApplyMaterialToLODs".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.ApplyMaterialToLODs", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.ApplyMaterialToLODs fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
