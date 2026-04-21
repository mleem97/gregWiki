---
title: SecondActionOnClick
description: Documentation for greg.NETWORK.SecondActionOnClick
path: /api/hooks/network/secondactiononclick
---

# SecondActionOnClick

> **Hook ID:** `greg.NETWORK.SecondActionOnClick`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.SecondActionOnClick

## Native Signature
```csharp
Il2Cpp.CableLink::SecondActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SecondActionOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.SecondActionOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.SecondActionOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.SecondActionOnClick", function(payload)
    greg.log("Hook greg.NETWORK.SecondActionOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.SecondActionOnClick fired")

greg.on("greg.NETWORK.SecondActionOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.SecondActionOnClick", (payload) => {
    console.log("Hook greg.NETWORK.SecondActionOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.SecondActionOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.SecondActionOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.SecondActionOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
