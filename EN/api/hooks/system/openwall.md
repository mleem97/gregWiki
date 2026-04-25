---
title: OpenWall
description: Documentation for greg.SYSTEM.OpenWall
path: /api/hooks/system/openwall
---

# OpenWall

> **Hook ID:** `greg.SYSTEM.OpenWall`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Wall.OpenWall

## Native Signature
```csharp
Il2Cpp.Wall::OpenWall()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OpenWall` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OpenWall", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OpenWall");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OpenWall", function(payload)
    greg.log("Hook greg.SYSTEM.OpenWall received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OpenWall fired")

greg.on("greg.SYSTEM.OpenWall", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OpenWall", (payload) => {
    console.log("Hook greg.SYSTEM.OpenWall triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OpenWall".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OpenWall", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OpenWall fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
