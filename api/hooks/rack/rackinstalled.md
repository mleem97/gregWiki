---
title: RackInstalled
description: Documentation for greg.RACK.RackInstalled
path: /api/hooks/rack/rackinstalled
---

# RackInstalled

> **Hook ID:** `greg.RACK.RackInstalled`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackMount.InstallRack

## Native Signature
```csharp
Il2Cpp.RackMount::InstallRack(bool, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RackInstalled` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.RackInstalled", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.RackInstalled");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.RackInstalled", function(payload)
    greg.log("Hook greg.RACK.RackInstalled received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.RackInstalled fired")

greg.on("greg.RACK.RackInstalled", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.RackInstalled", (payload) => {
    console.log("Hook greg.RACK.RackInstalled triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.RackInstalled".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.RackInstalled", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.RackInstalled fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
