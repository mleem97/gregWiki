---
title: OnHoverOver
description: Documentation for greg.NETWORK.OnHoverOver
path: /api/hooks/network/onhoverover
---

# OnHoverOver

> **Hook ID:** `greg.NETWORK.OnHoverOver`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.OnHoverOver

## Native Signature
```csharp
Il2Cpp.CableLink::OnHoverOver()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnHoverOver` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.OnHoverOver", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.OnHoverOver");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.OnHoverOver", function(payload)
    greg.log("Hook greg.NETWORK.OnHoverOver received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.OnHoverOver fired")

greg.on("greg.NETWORK.OnHoverOver", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.OnHoverOver", (payload) => {
    console.log("Hook greg.NETWORK.OnHoverOver triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.OnHoverOver".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.OnHoverOver", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.OnHoverOver fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
