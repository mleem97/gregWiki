---
title: TextureLoaded
description: Documentation for greg.SYSTEM.TextureLoaded
path: /api/hooks/system/textureloaded
---

# TextureLoaded

> **Hook ID:** `greg.SYSTEM.TextureLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.LoadTexture

## Native Signature
```csharp
Il2Cpp.ModLoader::LoadTexture(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TextureLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TextureLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TextureLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TextureLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.TextureLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TextureLoaded fired")

greg.on("greg.SYSTEM.TextureLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TextureLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.TextureLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TextureLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TextureLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TextureLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
