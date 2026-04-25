---
title: GetSwitchById
description: Documentation for greg.NETWORK.GetSwitchById
path: /api/hooks/network/getswitchbyid
---

# GetSwitchById

> **Hook ID:** `greg.NETWORK.GetSwitchById`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetSwitchById

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetSwitchById(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSwitchById` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetSwitchById", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetSwitchById");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetSwitchById", function(payload)
    greg.log("Hook greg.NETWORK.GetSwitchById received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetSwitchById fired")

greg.on("greg.NETWORK.GetSwitchById", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetSwitchById", (payload) => {
    console.log("Hook greg.NETWORK.GetSwitchById triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetSwitchById".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetSwitchById", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetSwitchById fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
