---
title: CloseInteractionMenu
description: Documentation for greg.SYSTEM.CloseInteractionMenu
path: /api/hooks/system/closeinteractionmenu
---

# CloseInteractionMenu

> **Hook ID:** `greg.SYSTEM.CloseInteractionMenu`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/RayLookAt.CloseInteractionMenu

## Native Signature
```csharp
Il2Cpp.RayLookAt::CloseInteractionMenu()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CloseInteractionMenu` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CloseInteractionMenu", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CloseInteractionMenu");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CloseInteractionMenu", function(payload)
    greg.log("Hook greg.SYSTEM.CloseInteractionMenu received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CloseInteractionMenu fired")

greg.on("greg.SYSTEM.CloseInteractionMenu", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CloseInteractionMenu", (payload) => {
    console.log("Hook greg.SYSTEM.CloseInteractionMenu triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CloseInteractionMenu".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CloseInteractionMenu", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CloseInteractionMenu fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
