---
title: IsCableComplete
description: Documentation for greg.NETWORK.IsCableComplete
path: /api/hooks/network/iscablecomplete
---

# IsCableComplete

> **Hook ID:** `greg.NETWORK.IsCableComplete`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.IsCableComplete

## Native Signature
```csharp
Il2Cpp.CablePositions::IsCableComplete(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsCableComplete` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsCableComplete", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsCableComplete");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsCableComplete", function(payload)
    greg.log("Hook greg.NETWORK.IsCableComplete received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsCableComplete fired")

greg.on("greg.NETWORK.IsCableComplete", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsCableComplete", (payload) => {
    console.log("Hook greg.NETWORK.IsCableComplete triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsCableComplete".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsCableComplete", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsCableComplete fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
