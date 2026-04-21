---
title: LastPositionRemoved
description: Documentation for greg.NETWORK.LastPositionRemoved
path: /api/hooks/network/lastpositionremoved
---

# LastPositionRemoved

> **Hook ID:** `greg.NETWORK.LastPositionRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.RemoveLastPosition

## Native Signature
```csharp
Il2Cpp.CablePositions::RemoveLastPosition(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LastPositionRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.LastPositionRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.LastPositionRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.LastPositionRemoved", function(payload)
    greg.log("Hook greg.NETWORK.LastPositionRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.LastPositionRemoved fired")

greg.on("greg.NETWORK.LastPositionRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.LastPositionRemoved", (payload) => {
    console.log("Hook greg.NETWORK.LastPositionRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.LastPositionRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.LastPositionRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.LastPositionRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
