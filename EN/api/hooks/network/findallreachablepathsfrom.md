---
title: FindAllReachablePathsFrom
description: Documentation for greg.NETWORK.FindAllReachablePathsFrom
path: /api/hooks/network/findallreachablepathsfrom
---

# FindAllReachablePathsFrom

> **Hook ID:** `greg.NETWORK.FindAllReachablePathsFrom`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.FindAllReachablePathsFrom

## Native Signature
```csharp
Il2Cpp.NetworkMap::FindAllReachablePathsFrom(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FindAllReachablePathsFrom` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.FindAllReachablePathsFrom", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.FindAllReachablePathsFrom");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.FindAllReachablePathsFrom", function(payload)
    greg.log("Hook greg.NETWORK.FindAllReachablePathsFrom received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.FindAllReachablePathsFrom fired")

greg.on("greg.NETWORK.FindAllReachablePathsFrom", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.FindAllReachablePathsFrom", (payload) => {
    console.log("Hook greg.NETWORK.FindAllReachablePathsFrom triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.FindAllReachablePathsFrom".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.FindAllReachablePathsFrom", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.FindAllReachablePathsFrom fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
