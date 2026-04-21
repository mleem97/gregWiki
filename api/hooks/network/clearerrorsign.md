---
title: ClearErrorSign
description: Documentation for greg.NETWORK.ClearErrorSign
path: /api/hooks/network/clearerrorsign
---

# ClearErrorSign

> **Hook ID:** `greg.NETWORK.ClearErrorSign`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.ClearErrorSign

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::ClearErrorSign()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearErrorSign` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ClearErrorSign", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ClearErrorSign");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ClearErrorSign", function(payload)
    greg.log("Hook greg.NETWORK.ClearErrorSign received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ClearErrorSign fired")

greg.on("greg.NETWORK.ClearErrorSign", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ClearErrorSign", (payload) => {
    console.log("Hook greg.NETWORK.ClearErrorSign triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ClearErrorSign".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ClearErrorSign", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ClearErrorSign fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
