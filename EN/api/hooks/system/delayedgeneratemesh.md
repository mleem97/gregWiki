---
title: DelayedGenerateMesh
description: Documentation for greg.SYSTEM.DelayedGenerateMesh
path: /api/hooks/system/delayedgeneratemesh
---

# DelayedGenerateMesh

> **Hook ID:** `greg.SYSTEM.DelayedGenerateMesh`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/RopeMesh.DelayedGenerateMesh

## Native Signature
```csharp
Il2Cpp.RopeMesh::DelayedGenerateMesh()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DelayedGenerateMesh` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DelayedGenerateMesh", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DelayedGenerateMesh");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DelayedGenerateMesh", function(payload)
    greg.log("Hook greg.SYSTEM.DelayedGenerateMesh received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DelayedGenerateMesh fired")

greg.on("greg.SYSTEM.DelayedGenerateMesh", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DelayedGenerateMesh", (payload) => {
    console.log("Hook greg.SYSTEM.DelayedGenerateMesh triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DelayedGenerateMesh".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DelayedGenerateMesh", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DelayedGenerateMesh fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
