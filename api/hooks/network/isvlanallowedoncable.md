---
title: IsVlanAllowedOnCable
description: Documentation for greg.NETWORK.IsVlanAllowedOnCable
path: /api/hooks/network/isvlanallowedoncable
---

# IsVlanAllowedOnCable

> **Hook ID:** `greg.NETWORK.IsVlanAllowedOnCable`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.IsVlanAllowedOnCable

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::IsVlanAllowedOnCable(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsVlanAllowedOnCable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsVlanAllowedOnCable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsVlanAllowedOnCable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsVlanAllowedOnCable", function(payload)
    greg.log("Hook greg.NETWORK.IsVlanAllowedOnCable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsVlanAllowedOnCable fired")

greg.on("greg.NETWORK.IsVlanAllowedOnCable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsVlanAllowedOnCable", (payload) => {
    console.log("Hook greg.NETWORK.IsVlanAllowedOnCable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsVlanAllowedOnCable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsVlanAllowedOnCable", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsVlanAllowedOnCable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
