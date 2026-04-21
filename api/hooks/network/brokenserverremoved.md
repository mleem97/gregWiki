---
title: BrokenServerRemoved
description: Documentation for greg.NETWORK.BrokenServerRemoved
path: /api/hooks/network/brokenserverremoved
---

# BrokenServerRemoved

> **Hook ID:** `greg.NETWORK.BrokenServerRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RemoveBrokenServer

## Native Signature
```csharp
Il2Cpp.NetworkMap::RemoveBrokenServer(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BrokenServerRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.BrokenServerRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.BrokenServerRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.BrokenServerRemoved", function(payload)
    greg.log("Hook greg.NETWORK.BrokenServerRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.BrokenServerRemoved fired")

greg.on("greg.NETWORK.BrokenServerRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.BrokenServerRemoved", (payload) => {
    console.log("Hook greg.NETWORK.BrokenServerRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.BrokenServerRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.BrokenServerRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.BrokenServerRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
