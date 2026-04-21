---
title: GetCablePositions
description: Documentation for greg.NETWORK.GetCablePositions
path: /api/hooks/network/getcablepositions
---

# GetCablePositions

> **Hook ID:** `greg.NETWORK.GetCablePositions`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.GetCablePositions

## Native Signature
```csharp
Il2Cpp.CablePositions::GetCablePositions(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCablePositions` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetCablePositions", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetCablePositions");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetCablePositions", function(payload)
    greg.log("Hook greg.NETWORK.GetCablePositions received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetCablePositions fired")

greg.on("greg.NETWORK.GetCablePositions", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetCablePositions", (payload) => {
    console.log("Hook greg.NETWORK.GetCablePositions triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetCablePositions".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetCablePositions", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetCablePositions fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
