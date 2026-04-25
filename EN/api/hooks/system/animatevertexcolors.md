---
title: AnimateVertexColors
description: Documentation for greg.SYSTEM.AnimateVertexColors
path: /api/hooks/system/animatevertexcolors
---

# AnimateVertexColors

> **Hook ID:** `greg.SYSTEM.AnimateVertexColors`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/VertexZoom.AnimateVertexColors

## Native Signature
```csharp
Il2Cpp.VertexZoom::AnimateVertexColors()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AnimateVertexColors` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AnimateVertexColors", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AnimateVertexColors");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AnimateVertexColors", function(payload)
    greg.log("Hook greg.SYSTEM.AnimateVertexColors received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AnimateVertexColors fired")

greg.on("greg.SYSTEM.AnimateVertexColors", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AnimateVertexColors", (payload) => {
    console.log("Hook greg.SYSTEM.AnimateVertexColors triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AnimateVertexColors".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AnimateVertexColors", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AnimateVertexColors fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
