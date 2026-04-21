---
title: BrokenServerAdded
description: Documentation for greg.NETWORK.BrokenServerAdded
path: /api/hooks/network/brokenserveradded
---

# BrokenServerAdded

> **Hook ID:** `greg.NETWORK.BrokenServerAdded`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.AddBrokenServer

## Native Signature
```csharp
Il2Cpp.NetworkMap::AddBrokenServer(Server)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BrokenServerAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.BrokenServerAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.BrokenServerAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.BrokenServerAdded", function(payload)
    greg.log("Hook greg.NETWORK.BrokenServerAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.BrokenServerAdded fired")

greg.on("greg.NETWORK.BrokenServerAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.BrokenServerAdded", (payload) => {
    console.log("Hook greg.NETWORK.BrokenServerAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.BrokenServerAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.BrokenServerAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.BrokenServerAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
