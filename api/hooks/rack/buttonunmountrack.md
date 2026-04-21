---
title: ButtonUnmountRack
description: Documentation for greg.RACK.ButtonUnmountRack
path: /api/hooks/rack/buttonunmountrack
---

# ButtonUnmountRack

> **Hook ID:** `greg.RACK.ButtonUnmountRack`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.ButtonUnmountRack

## Native Signature
```csharp
Il2Cpp.Rack::ButtonUnmountRack()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonUnmountRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.ButtonUnmountRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.ButtonUnmountRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.ButtonUnmountRack", function(payload)
    greg.log("Hook greg.RACK.ButtonUnmountRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.ButtonUnmountRack fired")

greg.on("greg.RACK.ButtonUnmountRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.ButtonUnmountRack", (payload) => {
    console.log("Hook greg.RACK.ButtonUnmountRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.ButtonUnmountRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.ButtonUnmountRack", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.ButtonUnmountRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
