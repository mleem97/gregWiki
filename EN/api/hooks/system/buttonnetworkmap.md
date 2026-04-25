---
title: ButtonNetworkMap
description: Documentation for greg.SYSTEM.ButtonNetworkMap
path: /api/hooks/system/buttonnetworkmap
---

# ButtonNetworkMap

> **Hook ID:** `greg.SYSTEM.ButtonNetworkMap`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonNetworkMap

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonNetworkMap()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonNetworkMap` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonNetworkMap", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonNetworkMap");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonNetworkMap", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonNetworkMap received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonNetworkMap fired")

greg.on("greg.SYSTEM.ButtonNetworkMap", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonNetworkMap", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonNetworkMap triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonNetworkMap".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonNetworkMap", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonNetworkMap fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
