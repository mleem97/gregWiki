---
title: IsIpAddressDuplicate
description: Documentation for greg.NETWORK.IsIpAddressDuplicate
path: /api/hooks/network/isipaddressduplicate
---

# IsIpAddressDuplicate

> **Hook ID:** `greg.NETWORK.IsIpAddressDuplicate`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.IsIpAddressDuplicate

## Native Signature
```csharp
Il2Cpp.NetworkMap::IsIpAddressDuplicate(string, Server)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsIpAddressDuplicate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsIpAddressDuplicate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsIpAddressDuplicate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsIpAddressDuplicate", function(payload)
    greg.log("Hook greg.NETWORK.IsIpAddressDuplicate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsIpAddressDuplicate fired")

greg.on("greg.NETWORK.IsIpAddressDuplicate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsIpAddressDuplicate", (payload) => {
    console.log("Hook greg.NETWORK.IsIpAddressDuplicate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsIpAddressDuplicate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsIpAddressDuplicate", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsIpAddressDuplicate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
