---
title: InsertItemInRack
description: Documentation for greg.RACK.InsertItemInRack
path: /api/hooks/rack/insertiteminrack
---

# InsertItemInRack

> **Hook ID:** `greg.RACK.InsertItemInRack`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.InsertItemInRack

## Native Signature
```csharp
Il2Cpp.RackPosition::InsertItemInRack()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InsertItemInRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.InsertItemInRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.InsertItemInRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.InsertItemInRack", function(payload)
    greg.log("Hook greg.RACK.InsertItemInRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.InsertItemInRack fired")

greg.on("greg.RACK.InsertItemInRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.InsertItemInRack", (payload) => {
    console.log("Hook greg.RACK.InsertItemInRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.InsertItemInRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.InsertItemInRack", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.InsertItemInRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
