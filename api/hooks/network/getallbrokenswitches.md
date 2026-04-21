---
title: GetAllBrokenSwitches
description: Documentation for greg.NETWORK.GetAllBrokenSwitches
path: /api/hooks/network/getallbrokenswitches
---

# GetAllBrokenSwitches

> **Hook ID:** `greg.NETWORK.GetAllBrokenSwitches`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetAllBrokenSwitches

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetAllBrokenSwitches()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllBrokenSwitches` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetAllBrokenSwitches", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetAllBrokenSwitches");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetAllBrokenSwitches", function(payload)
    greg.log("Hook greg.NETWORK.GetAllBrokenSwitches received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetAllBrokenSwitches fired")

greg.on("greg.NETWORK.GetAllBrokenSwitches", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetAllBrokenSwitches", (payload) => {
    console.log("Hook greg.NETWORK.GetAllBrokenSwitches triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetAllBrokenSwitches".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetAllBrokenSwitches", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetAllBrokenSwitches fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
