---
title: InstantiateRack
description: Documentation for greg.RACK.InstantiateRack
path: /api/hooks/rack/instantiaterack
---

# InstantiateRack

> **Hook ID:** `greg.RACK.InstantiateRack`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackMount.InstantiateRack

## Native Signature
```csharp
Il2Cpp.RackMount::InstantiateRack(InteractObjectData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InstantiateRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.InstantiateRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.InstantiateRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.InstantiateRack", function(payload)
    greg.log("Hook greg.RACK.InstantiateRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.InstantiateRack fired")

greg.on("greg.RACK.InstantiateRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.InstantiateRack", (payload) => {
    console.log("Hook greg.RACK.InstantiateRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.InstantiateRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.InstantiateRack", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.InstantiateRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
