---
title: CheckEndPoints
description: Documentation for greg.SYSTEM.CheckEndPoints
path: /api/hooks/system/checkendpoints
---

# CheckEndPoints

> **Hook ID:** `greg.SYSTEM.CheckEndPoints`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/RopeMesh.CheckEndPoints

## Native Signature
```csharp
Il2Cpp.RopeMesh::CheckEndPoints()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CheckEndPoints` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CheckEndPoints", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CheckEndPoints");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CheckEndPoints", function(payload)
    greg.log("Hook greg.SYSTEM.CheckEndPoints received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CheckEndPoints fired")

greg.on("greg.SYSTEM.CheckEndPoints", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CheckEndPoints", (payload) => {
    console.log("Hook greg.SYSTEM.CheckEndPoints triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CheckEndPoints".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CheckEndPoints", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CheckEndPoints fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
