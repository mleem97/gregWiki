---
title: LowerAmountOfCable
description: Documentation for greg.NETWORK.LowerAmountOfCable
path: /api/hooks/network/loweramountofcable
---

# LowerAmountOfCable

> **Hook ID:** `greg.NETWORK.LowerAmountOfCable`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableSpinner.LowerAmountOfCable

## Native Signature
```csharp
Il2Cpp.CableSpinner::LowerAmountOfCable(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LowerAmountOfCable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.LowerAmountOfCable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.LowerAmountOfCable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.LowerAmountOfCable", function(payload)
    greg.log("Hook greg.NETWORK.LowerAmountOfCable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.LowerAmountOfCable fired")

greg.on("greg.NETWORK.LowerAmountOfCable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.LowerAmountOfCable", (payload) => {
    console.log("Hook greg.NETWORK.LowerAmountOfCable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.LowerAmountOfCable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.LowerAmountOfCable", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.LowerAmountOfCable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
