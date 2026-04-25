---
title: GetSwitchId
description: Documentation for greg.NETWORK.GetSwitchId
path: /api/hooks/network/getswitchid
---

# GetSwitchId

> **Hook ID:** `greg.NETWORK.GetSwitchId`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.GetSwitchId

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::GetSwitchId()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSwitchId` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetSwitchId", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetSwitchId");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetSwitchId", function(payload)
    greg.log("Hook greg.NETWORK.GetSwitchId received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetSwitchId fired")

greg.on("greg.NETWORK.GetSwitchId", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetSwitchId", (payload) => {
    console.log("Hook greg.NETWORK.GetSwitchId triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetSwitchId".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetSwitchId", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetSwitchId fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
