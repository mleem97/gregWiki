---
title: _PrintNetworkMap_b__42_1
description: Documentation for greg.NETWORK._PrintNetworkMap_b__42_1
path: /api/hooks/network/-printnetworkmap-b--42-1
---

# _PrintNetworkMap_b__42_1

> **Hook ID:** `greg.NETWORK._PrintNetworkMap_b__42_1`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap._PrintNetworkMap_b__42_1

## Native Signature
```csharp
Il2Cpp.NetworkMap::_PrintNetworkMap_b__42_1(NetworkMap.Device)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_PrintNetworkMap_b__42_1` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK._PrintNetworkMap_b__42_1", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK._PrintNetworkMap_b__42_1");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK._PrintNetworkMap_b__42_1", function(payload)
    greg.log("Hook greg.NETWORK._PrintNetworkMap_b__42_1 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK._PrintNetworkMap_b__42_1 fired")

greg.on("greg.NETWORK._PrintNetworkMap_b__42_1", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK._PrintNetworkMap_b__42_1", (payload) => {
    console.log("Hook greg.NETWORK._PrintNetworkMap_b__42_1 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK._PrintNetworkMap_b__42_1".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK._PrintNetworkMap_b__42_1", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK._PrintNetworkMap_b__42_1 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
