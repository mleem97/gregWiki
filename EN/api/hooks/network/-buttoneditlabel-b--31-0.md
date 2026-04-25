---
title: _ButtonEditLabel_b__31_0
description: Documentation for greg.NETWORK._ButtonEditLabel_b__31_0
path: /api/hooks/network/-buttoneditlabel-b--31-0
---

# _ButtonEditLabel_b__31_0

> **Hook ID:** `greg.NETWORK._ButtonEditLabel_b__31_0`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration._ButtonEditLabel_b__31_0

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::_ButtonEditLabel_b__31_0(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_ButtonEditLabel_b__31_0` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK._ButtonEditLabel_b__31_0", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK._ButtonEditLabel_b__31_0");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK._ButtonEditLabel_b__31_0", function(payload)
    greg.log("Hook greg.NETWORK._ButtonEditLabel_b__31_0 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK._ButtonEditLabel_b__31_0 fired")

greg.on("greg.NETWORK._ButtonEditLabel_b__31_0", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK._ButtonEditLabel_b__31_0", (payload) => {
    console.log("Hook greg.NETWORK._ButtonEditLabel_b__31_0 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK._ButtonEditLabel_b__31_0".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK._ButtonEditLabel_b__31_0", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK._ButtonEditLabel_b__31_0 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
