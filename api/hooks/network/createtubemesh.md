---
title: CreateTubeMesh
description: Documentation for greg.NETWORK.CreateTubeMesh
path: /api/hooks/network/createtubemesh
---

# CreateTubeMesh

> **Hook ID:** `greg.NETWORK.CreateTubeMesh`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.CreateTubeMesh

## Native Signature
```csharp
Il2Cpp.CablePositions::CreateTubeMesh(List<Vector3>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateTubeMesh` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CreateTubeMesh", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CreateTubeMesh");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CreateTubeMesh", function(payload)
    greg.log("Hook greg.NETWORK.CreateTubeMesh received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CreateTubeMesh fired")

greg.on("greg.NETWORK.CreateTubeMesh", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CreateTubeMesh", (payload) => {
    console.log("Hook greg.NETWORK.CreateTubeMesh triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CreateTubeMesh".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CreateTubeMesh", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CreateTubeMesh fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
