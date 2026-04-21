---
title: SpanTopLeft
description: Documentation for greg.SYSTEM.SpanTopLeft
path: /api/hooks/system/spantopleft
---

# SpanTopLeft

> **Hook ID:** `greg.SYSTEM.SpanTopLeft`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.SpanTopLeft

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::SpanTopLeft()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SpanTopLeft` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SpanTopLeft", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SpanTopLeft");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SpanTopLeft", function(payload)
    greg.log("Hook greg.SYSTEM.SpanTopLeft received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SpanTopLeft fired")

greg.on("greg.SYSTEM.SpanTopLeft", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SpanTopLeft", (payload) => {
    console.log("Hook greg.SYSTEM.SpanTopLeft triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SpanTopLeft".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SpanTopLeft", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SpanTopLeft fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
