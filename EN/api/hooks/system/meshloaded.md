---
title: MeshLoaded
description: Documentation for greg.SYSTEM.MeshLoaded
path: /api/hooks/system/meshloaded
---

# MeshLoaded

> **Hook ID:** `greg.SYSTEM.MeshLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.LoadMesh

## Native Signature
```csharp
Il2Cpp.ModLoader::LoadMesh(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MeshLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MeshLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MeshLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MeshLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.MeshLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MeshLoaded fired")

greg.on("greg.SYSTEM.MeshLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MeshLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.MeshLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MeshLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MeshLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MeshLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
