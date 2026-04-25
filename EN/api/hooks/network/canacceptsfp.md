---
title: CanAcceptSFP
description: Documentation for greg.NETWORK.CanAcceptSFP
path: /api/hooks/network/canacceptsfp
---

# CanAcceptSFP

> **Hook ID:** `greg.NETWORK.CanAcceptSFP`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPBox.CanAcceptSFP

## Native Signature
```csharp
Il2Cpp.SFPBox::CanAcceptSFP(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CanAcceptSFP` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CanAcceptSFP", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CanAcceptSFP");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CanAcceptSFP", function(payload)
    greg.log("Hook greg.NETWORK.CanAcceptSFP received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CanAcceptSFP fired")

greg.on("greg.NETWORK.CanAcceptSFP", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CanAcceptSFP", (payload) => {
    console.log("Hook greg.NETWORK.CanAcceptSFP triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CanAcceptSFP".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CanAcceptSFP", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CanAcceptSFP fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
