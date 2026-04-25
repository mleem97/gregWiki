---
title: IsAnyCableConnected
description: Documentation for greg.NETWORK.IsAnyCableConnected
path: /api/hooks/network/isanycableconnected
---

# IsAnyCableConnected

> **Hook ID:** `greg.NETWORK.IsAnyCableConnected`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.IsAnyCableConnected

## Native Signature
```csharp
Il2Cpp.SFPModule::IsAnyCableConnected()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsAnyCableConnected` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsAnyCableConnected", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsAnyCableConnected");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsAnyCableConnected", function(payload)
    greg.log("Hook greg.NETWORK.IsAnyCableConnected received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsAnyCableConnected fired")

greg.on("greg.NETWORK.IsAnyCableConnected", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsAnyCableConnected", (payload) => {
    console.log("Hook greg.NETWORK.IsAnyCableConnected triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsAnyCableConnected".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsAnyCableConnected", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsAnyCableConnected fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
