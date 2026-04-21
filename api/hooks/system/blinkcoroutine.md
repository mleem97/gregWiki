---
title: BlinkCoroutine
description: Documentation for greg.SYSTEM.BlinkCoroutine
path: /api/hooks/system/blinkcoroutine
---

# BlinkCoroutine

> **Hook ID:** `greg.SYSTEM.BlinkCoroutine`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Cursor.BlinkCoroutine

## Native Signature
```csharp
Il2Cpp.OSK_UI_Cursor::BlinkCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BlinkCoroutine` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BlinkCoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BlinkCoroutine");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BlinkCoroutine", function(payload)
    greg.log("Hook greg.SYSTEM.BlinkCoroutine received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BlinkCoroutine fired")

greg.on("greg.SYSTEM.BlinkCoroutine", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BlinkCoroutine", (payload) => {
    console.log("Hook greg.SYSTEM.BlinkCoroutine triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BlinkCoroutine".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BlinkCoroutine", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BlinkCoroutine fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
