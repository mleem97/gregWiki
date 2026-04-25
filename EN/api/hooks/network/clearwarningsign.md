---
title: ClearWarningSign
description: Documentation for greg.NETWORK.ClearWarningSign
path: /api/hooks/network/clearwarningsign
---

# ClearWarningSign

> **Hook ID:** `greg.NETWORK.ClearWarningSign`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.ClearWarningSign

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::ClearWarningSign(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearWarningSign` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ClearWarningSign", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ClearWarningSign");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ClearWarningSign", function(payload)
    greg.log("Hook greg.NETWORK.ClearWarningSign received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ClearWarningSign fired")

greg.on("greg.NETWORK.ClearWarningSign", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ClearWarningSign", (payload) => {
    console.log("Hook greg.NETWORK.ClearWarningSign triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ClearWarningSign".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ClearWarningSign", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ClearWarningSign fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
