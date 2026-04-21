---
title: PrintNetworkMap
description: Documentation for greg.NETWORK.PrintNetworkMap
path: /api/hooks/network/printnetworkmap
---

# PrintNetworkMap

> **Hook ID:** `greg.NETWORK.PrintNetworkMap`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.PrintNetworkMap

## Native Signature
```csharp
Il2Cpp.NetworkMap::PrintNetworkMap()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PrintNetworkMap` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.PrintNetworkMap", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.PrintNetworkMap");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.PrintNetworkMap", function(payload)
    greg.log("Hook greg.NETWORK.PrintNetworkMap received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.PrintNetworkMap fired")

greg.on("greg.NETWORK.PrintNetworkMap", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.PrintNetworkMap", (payload) => {
    console.log("Hook greg.NETWORK.PrintNetworkMap triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.PrintNetworkMap".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.PrintNetworkMap", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.PrintNetworkMap fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
