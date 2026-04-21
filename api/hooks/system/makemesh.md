---
title: MakeMesh
description: Documentation for greg.SYSTEM.MakeMesh
path: /api/hooks/system/makemesh
---

# MakeMesh

> **Hook ID:** `greg.SYSTEM.MakeMesh`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FCP_SpriteMeshEditor.MakeMesh

## Native Signature
```csharp
Il2Cpp.FCP_SpriteMeshEditor::MakeMesh(Sprite, int, int, FCP_SpriteMeshEditor.MeshType)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MakeMesh` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MakeMesh", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MakeMesh");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MakeMesh", function(payload)
    greg.log("Hook greg.SYSTEM.MakeMesh received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MakeMesh fired")

greg.on("greg.SYSTEM.MakeMesh", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MakeMesh", (payload) => {
    console.log("Hook greg.SYSTEM.MakeMesh triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MakeMesh".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MakeMesh", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MakeMesh fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
