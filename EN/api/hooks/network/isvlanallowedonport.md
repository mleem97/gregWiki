---
title: IsVlanAllowedOnPort
description: Documentation for greg.NETWORK.IsVlanAllowedOnPort
path: /api/hooks/network/isvlanallowedonport
---

# IsVlanAllowedOnPort

> **Hook ID:** `greg.NETWORK.IsVlanAllowedOnPort`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.IsVlanAllowedOnPort

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::IsVlanAllowedOnPort(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsVlanAllowedOnPort` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsVlanAllowedOnPort", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsVlanAllowedOnPort");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsVlanAllowedOnPort", function(payload)
    greg.log("Hook greg.NETWORK.IsVlanAllowedOnPort received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsVlanAllowedOnPort fired")

greg.on("greg.NETWORK.IsVlanAllowedOnPort", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsVlanAllowedOnPort", (payload) => {
    console.log("Hook greg.NETWORK.IsVlanAllowedOnPort triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsVlanAllowedOnPort".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsVlanAllowedOnPort", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsVlanAllowedOnPort fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
