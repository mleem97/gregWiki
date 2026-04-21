---
title: PositionRemoved
description: Documentation for greg.NETWORK.PositionRemoved
path: /api/hooks/network/positionremoved
---

# PositionRemoved

> **Hook ID:** `greg.NETWORK.PositionRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.RemovePosition

## Native Signature
```csharp
Il2Cpp.CablePositions::RemovePosition(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PositionRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.PositionRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.PositionRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.PositionRemoved", function(payload)
    greg.log("Hook greg.NETWORK.PositionRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.PositionRemoved fired")

greg.on("greg.NETWORK.PositionRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.PositionRemoved", (payload) => {
    console.log("Hook greg.NETWORK.PositionRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.PositionRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.PositionRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.PositionRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
