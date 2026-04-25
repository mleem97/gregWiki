---
title: LACPGroupRemoved
description: Documentation for greg.NETWORK.LACPGroupRemoved
path: /api/hooks/network/lacpgroupremoved
---

# LACPGroupRemoved

> **Hook ID:** `greg.NETWORK.LACPGroupRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RemoveLACPGroup

## Native Signature
```csharp
Il2Cpp.NetworkMap::RemoveLACPGroup(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LACPGroupRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.LACPGroupRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.LACPGroupRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.LACPGroupRemoved", function(payload)
    greg.log("Hook greg.NETWORK.LACPGroupRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.LACPGroupRemoved fired")

greg.on("greg.NETWORK.LACPGroupRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.LACPGroupRemoved", (payload) => {
    console.log("Hook greg.NETWORK.LACPGroupRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.LACPGroupRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.LACPGroupRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.LACPGroupRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
