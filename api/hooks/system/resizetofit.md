---
title: ResizeToFit
description: Documentation for greg.SYSTEM.ResizeToFit
path: /api/hooks/system/resizetofit
---

# ResizeToFit

> **Hook ID:** `greg.SYSTEM.ResizeToFit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Background.ResizeToFit

## Native Signature
```csharp
Il2Cpp.OSK_Background::ResizeToFit()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResizeToFit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResizeToFit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResizeToFit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResizeToFit", function(payload)
    greg.log("Hook greg.SYSTEM.ResizeToFit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResizeToFit fired")

greg.on("greg.SYSTEM.ResizeToFit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResizeToFit", (payload) => {
    console.log("Hook greg.SYSTEM.ResizeToFit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResizeToFit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResizeToFit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResizeToFit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
