---
title: ThumbnailSet
description: Documentation for greg.SYSTEM.ThumbnailSet
path: /api/hooks/system/thumbnailset
---

# ThumbnailSet

> **Hook ID:** `greg.SYSTEM.ThumbnailSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UserReport.SetThumbnail

## Native Signature
```csharp
Il2Cpp.UserReport::SetThumbnail(Texture2D)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ThumbnailSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ThumbnailSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ThumbnailSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ThumbnailSet", function(payload)
    greg.log("Hook greg.SYSTEM.ThumbnailSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ThumbnailSet fired")

greg.on("greg.SYSTEM.ThumbnailSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ThumbnailSet", (payload) => {
    console.log("Hook greg.SYSTEM.ThumbnailSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ThumbnailSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ThumbnailSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ThumbnailSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
