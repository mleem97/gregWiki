---
title: ClearAllCables
description: Documentation for greg.NETWORK.ClearAllCables
path: /api/hooks/network/clearallcables
---

# ClearAllCables

> **Hook ID:** `greg.NETWORK.ClearAllCables`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.ClearAllCables

## Native Signature
```csharp
Il2Cpp.CablePositions::ClearAllCables()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearAllCables` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ClearAllCables", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ClearAllCables");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ClearAllCables", function(payload)
    greg.log("Hook greg.NETWORK.ClearAllCables received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ClearAllCables fired")

greg.on("greg.NETWORK.ClearAllCables", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ClearAllCables", (payload) => {
    console.log("Hook greg.NETWORK.ClearAllCables triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ClearAllCables".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ClearAllCables", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ClearAllCables fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
