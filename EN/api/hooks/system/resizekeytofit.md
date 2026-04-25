---
title: ResizeKeyToFit
description: Documentation for greg.SYSTEM.ResizeKeyToFit
path: /api/hooks/system/resizekeytofit
---

# ResizeKeyToFit

> **Hook ID:** `greg.SYSTEM.ResizeKeyToFit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.ResizeKeyToFit

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::ResizeKeyToFit(Vector2)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResizeKeyToFit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResizeKeyToFit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResizeKeyToFit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResizeKeyToFit", function(payload)
    greg.log("Hook greg.SYSTEM.ResizeKeyToFit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResizeKeyToFit fired")

greg.on("greg.SYSTEM.ResizeKeyToFit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResizeKeyToFit", (payload) => {
    console.log("Hook greg.SYSTEM.ResizeKeyToFit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResizeKeyToFit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResizeKeyToFit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResizeKeyToFit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
