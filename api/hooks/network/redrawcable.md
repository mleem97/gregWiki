---
title: RedrawCable
description: Documentation for greg.NETWORK.RedrawCable
path: /api/hooks/network/redrawcable
---

# RedrawCable

> **Hook ID:** `greg.NETWORK.RedrawCable`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.RedrawCable

## Native Signature
```csharp
Il2Cpp.CablePositions::RedrawCable(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RedrawCable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.RedrawCable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.RedrawCable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.RedrawCable", function(payload)
    greg.log("Hook greg.NETWORK.RedrawCable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.RedrawCable fired")

greg.on("greg.NETWORK.RedrawCable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.RedrawCable", (payload) => {
    console.log("Hook greg.NETWORK.RedrawCable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.RedrawCable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.RedrawCable", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.RedrawCable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
