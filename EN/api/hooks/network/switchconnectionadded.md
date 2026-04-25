---
title: SwitchConnectionAdded
description: Documentation for greg.NETWORK.SwitchConnectionAdded
path: /api/hooks/network/switchconnectionadded
---

# SwitchConnectionAdded

> **Hook ID:** `greg.NETWORK.SwitchConnectionAdded`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.AddSwitchConnection

## Native Signature
```csharp
Il2Cpp.NetworkMap::AddSwitchConnection(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SwitchConnectionAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.SwitchConnectionAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.SwitchConnectionAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.SwitchConnectionAdded", function(payload)
    greg.log("Hook greg.NETWORK.SwitchConnectionAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.SwitchConnectionAdded fired")

greg.on("greg.NETWORK.SwitchConnectionAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.SwitchConnectionAdded", (payload) => {
    console.log("Hook greg.NETWORK.SwitchConnectionAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.SwitchConnectionAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.SwitchConnectionAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.SwitchConnectionAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
