---
title: ResizeBackground
description: Documentation for greg.SYSTEM.ResizeBackground
path: /api/hooks/system/resizebackground
---

# ResizeBackground

> **Hook ID:** `greg.SYSTEM.ResizeBackground`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_MiniKeyboard.ResizeBackground

## Native Signature
```csharp
Il2Cpp.OSK_MiniKeyboard::ResizeBackground()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResizeBackground` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResizeBackground", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResizeBackground");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResizeBackground", function(payload)
    greg.log("Hook greg.SYSTEM.ResizeBackground received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResizeBackground fired")

greg.on("greg.SYSTEM.ResizeBackground", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResizeBackground", (payload) => {
    console.log("Hook greg.SYSTEM.ResizeBackground triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResizeBackground".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResizeBackground", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResizeBackground fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
