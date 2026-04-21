---
title: GetRawCablePositions
description: Documentation for greg.NETWORK.GetRawCablePositions
path: /api/hooks/network/getrawcablepositions
---

# GetRawCablePositions

> **Hook ID:** `greg.NETWORK.GetRawCablePositions`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.GetRawCablePositions

## Native Signature
```csharp
Il2Cpp.CablePositions::GetRawCablePositions(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetRawCablePositions` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetRawCablePositions", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetRawCablePositions");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetRawCablePositions", function(payload)
    greg.log("Hook greg.NETWORK.GetRawCablePositions received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetRawCablePositions fired")

greg.on("greg.NETWORK.GetRawCablePositions", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetRawCablePositions", (payload) => {
    console.log("Hook greg.NETWORK.GetRawCablePositions triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetRawCablePositions".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetRawCablePositions", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetRawCablePositions fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
