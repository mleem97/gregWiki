---
title: HideItemNameOrSiluete
description: Documentation for greg.SYSTEM.HideItemNameOrSiluete
path: /api/hooks/system/hideitemnameorsiluete
---

# HideItemNameOrSiluete

> **Hook ID:** `greg.SYSTEM.HideItemNameOrSiluete`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/RayLookAt.HideItemNameOrSiluete

## Native Signature
```csharp
Il2Cpp.RayLookAt::HideItemNameOrSiluete()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HideItemNameOrSiluete` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HideItemNameOrSiluete", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HideItemNameOrSiluete");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HideItemNameOrSiluete", function(payload)
    greg.log("Hook greg.SYSTEM.HideItemNameOrSiluete received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HideItemNameOrSiluete fired")

greg.on("greg.SYSTEM.HideItemNameOrSiluete", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HideItemNameOrSiluete", (payload) => {
    console.log("Hook greg.SYSTEM.HideItemNameOrSiluete triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HideItemNameOrSiluete".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HideItemNameOrSiluete", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HideItemNameOrSiluete fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
