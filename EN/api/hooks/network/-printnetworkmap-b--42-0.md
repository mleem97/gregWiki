---
title: _PrintNetworkMap_b__42_0
description: Documentation for greg.NETWORK._PrintNetworkMap_b__42_0
path: /api/hooks/network/-printnetworkmap-b--42-0
---

# _PrintNetworkMap_b__42_0

> **Hook ID:** `greg.NETWORK._PrintNetworkMap_b__42_0`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap._PrintNetworkMap_b__42_0

## Native Signature
```csharp
Il2Cpp.NetworkMap::_PrintNetworkMap_b__42_0(NetworkMap.Device)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_PrintNetworkMap_b__42_0` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK._PrintNetworkMap_b__42_0", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK._PrintNetworkMap_b__42_0");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK._PrintNetworkMap_b__42_0", function(payload)
    greg.log("Hook greg.NETWORK._PrintNetworkMap_b__42_0 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK._PrintNetworkMap_b__42_0 fired")

greg.on("greg.NETWORK._PrintNetworkMap_b__42_0", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK._PrintNetworkMap_b__42_0", (payload) => {
    console.log("Hook greg.NETWORK._PrintNetworkMap_b__42_0 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK._PrintNetworkMap_b__42_0".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK._PrintNetworkMap_b__42_0", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK._PrintNetworkMap_b__42_0 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
