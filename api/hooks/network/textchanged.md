---
title: TextChanged
description: Documentation for greg.NETWORK.TextChanged
path: /api/hooks/network/textchanged
---

# TextChanged

> **Hook ID:** `greg.NETWORK.TextChanged`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableSpinner.UpdateText

## Native Signature
```csharp
Il2Cpp.CableSpinner::UpdateText()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TextChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.TextChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.TextChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.TextChanged", function(payload)
    greg.log("Hook greg.NETWORK.TextChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.TextChanged fired")

greg.on("greg.NETWORK.TextChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.TextChanged", (payload) => {
    console.log("Hook greg.NETWORK.TextChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.TextChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.TextChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.TextChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
