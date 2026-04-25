---
title: TakeSFPFromBox
description: Documentation for greg.NETWORK.TakeSFPFromBox
path: /api/hooks/network/takesfpfrombox
---

# TakeSFPFromBox

> **Hook ID:** `greg.NETWORK.TakeSFPFromBox`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPBox.TakeSFPFromBox

## Native Signature
```csharp
Il2Cpp.SFPBox::TakeSFPFromBox()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TakeSFPFromBox` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.TakeSFPFromBox", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.TakeSFPFromBox");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.TakeSFPFromBox", function(payload)
    greg.log("Hook greg.NETWORK.TakeSFPFromBox received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.TakeSFPFromBox fired")

greg.on("greg.NETWORK.TakeSFPFromBox", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.TakeSFPFromBox", (payload) => {
    console.log("Hook greg.NETWORK.TakeSFPFromBox triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.TakeSFPFromBox".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.TakeSFPFromBox", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.TakeSFPFromBox fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
