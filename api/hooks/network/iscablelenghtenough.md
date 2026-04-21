---
title: IsCableLenghtEnough
description: Documentation for greg.NETWORK.IsCableLenghtEnough
path: /api/hooks/network/iscablelenghtenough
---

# IsCableLenghtEnough

> **Hook ID:** `greg.NETWORK.IsCableLenghtEnough`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableSpinner.IsCableLenghtEnough

## Native Signature
```csharp
Il2Cpp.CableSpinner::IsCableLenghtEnough()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsCableLenghtEnough` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsCableLenghtEnough", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsCableLenghtEnough");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsCableLenghtEnough", function(payload)
    greg.log("Hook greg.NETWORK.IsCableLenghtEnough received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsCableLenghtEnough fired")

greg.on("greg.NETWORK.IsCableLenghtEnough", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsCableLenghtEnough", (payload) => {
    console.log("Hook greg.NETWORK.IsCableLenghtEnough triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsCableLenghtEnough".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsCableLenghtEnough", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsCableLenghtEnough fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
