---
title: ButtonDisablePositionsInRack
description: Documentation for greg.RACK.ButtonDisablePositionsInRack
path: /api/hooks/rack/buttondisablepositionsinrack
---

# ButtonDisablePositionsInRack

> **Hook ID:** `greg.RACK.ButtonDisablePositionsInRack`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.ButtonDisablePositionsInRack

## Native Signature
```csharp
Il2Cpp.Rack::ButtonDisablePositionsInRack()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonDisablePositionsInRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.ButtonDisablePositionsInRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.ButtonDisablePositionsInRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.ButtonDisablePositionsInRack", function(payload)
    greg.log("Hook greg.RACK.ButtonDisablePositionsInRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.ButtonDisablePositionsInRack fired")

greg.on("greg.RACK.ButtonDisablePositionsInRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.ButtonDisablePositionsInRack", (payload) => {
    console.log("Hook greg.RACK.ButtonDisablePositionsInRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.ButtonDisablePositionsInRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.ButtonDisablePositionsInRack", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.ButtonDisablePositionsInRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
