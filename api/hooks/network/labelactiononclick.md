---
title: LabelActionOnClick
description: Documentation for greg.NETWORK.LabelActionOnClick
path: /api/hooks/network/labelactiononclick
---

# LabelActionOnClick

> **Hook ID:** `greg.NETWORK.LabelActionOnClick`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.LabelActionOnClick

## Native Signature
```csharp
Il2Cpp.CableLink::LabelActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LabelActionOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.LabelActionOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.LabelActionOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.LabelActionOnClick", function(payload)
    greg.log("Hook greg.NETWORK.LabelActionOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.LabelActionOnClick fired")

greg.on("greg.NETWORK.LabelActionOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.LabelActionOnClick", (payload) => {
    console.log("Hook greg.NETWORK.LabelActionOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.LabelActionOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.LabelActionOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.LabelActionOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
