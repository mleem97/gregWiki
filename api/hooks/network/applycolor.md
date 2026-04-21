---
title: ApplyColor
description: Documentation for greg.NETWORK.ApplyColor
path: /api/hooks/network/applycolor
---

# ApplyColor

> **Hook ID:** `greg.NETWORK.ApplyColor`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableSpinner.ApplyColor

## Native Signature
```csharp
Il2Cpp.CableSpinner::ApplyColor(Color, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ApplyColor` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ApplyColor", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ApplyColor");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ApplyColor", function(payload)
    greg.log("Hook greg.NETWORK.ApplyColor received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ApplyColor fired")

greg.on("greg.NETWORK.ApplyColor", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ApplyColor", (payload) => {
    console.log("Hook greg.NETWORK.ApplyColor triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ApplyColor".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ApplyColor", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ApplyColor fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
