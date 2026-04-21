---
title: FromPortRemoved
description: Documentation for greg.NETWORK.FromPortRemoved
path: /api/hooks/network/fromportremoved
---

# FromPortRemoved

> **Hook ID:** `greg.NETWORK.FromPortRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.RemoveFromPort

## Native Signature
```csharp
Il2Cpp.SFPModule::RemoveFromPort()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FromPortRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.FromPortRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.FromPortRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.FromPortRemoved", function(payload)
    greg.log("Hook greg.NETWORK.FromPortRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.FromPortRemoved fired")

greg.on("greg.NETWORK.FromPortRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.FromPortRemoved", (payload) => {
    console.log("Hook greg.NETWORK.FromPortRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.FromPortRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.FromPortRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.FromPortRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
