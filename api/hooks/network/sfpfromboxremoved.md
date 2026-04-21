---
title: SFPFromBoxRemoved
description: Documentation for greg.NETWORK.SFPFromBoxRemoved
path: /api/hooks/network/sfpfromboxremoved
---

# SFPFromBoxRemoved

> **Hook ID:** `greg.NETWORK.SFPFromBoxRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPBox.RemoveSFPFromBox

## Native Signature
```csharp
Il2Cpp.SFPBox::RemoveSFPFromBox(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SFPFromBoxRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.SFPFromBoxRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.SFPFromBoxRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.SFPFromBoxRemoved", function(payload)
    greg.log("Hook greg.NETWORK.SFPFromBoxRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.SFPFromBoxRemoved fired")

greg.on("greg.NETWORK.SFPFromBoxRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.SFPFromBoxRemoved", (payload) => {
    console.log("Hook greg.NETWORK.SFPFromBoxRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.SFPFromBoxRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.SFPFromBoxRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.SFPFromBoxRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
