---
title: GenerateMesh
description: Documentation for greg.SYSTEM.GenerateMesh
path: /api/hooks/system/generatemesh
---

# GenerateMesh

> **Hook ID:** `greg.SYSTEM.GenerateMesh`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/RopeMesh.GenerateMesh

## Native Signature
```csharp
Il2Cpp.RopeMesh::GenerateMesh()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenerateMesh` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GenerateMesh", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GenerateMesh");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GenerateMesh", function(payload)
    greg.log("Hook greg.SYSTEM.GenerateMesh received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GenerateMesh fired")

greg.on("greg.SYSTEM.GenerateMesh", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GenerateMesh", (payload) => {
    console.log("Hook greg.SYSTEM.GenerateMesh triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GenerateMesh".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GenerateMesh", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GenerateMesh fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
