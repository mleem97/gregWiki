---
title: Reset
description: Documentation for greg.SYSTEM.Reset
path: /api/hooks/system/reset
---

# Reset

> **Hook ID:** `greg.SYSTEM.Reset`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.Reset

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::Reset()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Reset` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Reset", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Reset");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Reset", function(payload)
    greg.log("Hook greg.SYSTEM.Reset received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Reset fired")

greg.on("greg.SYSTEM.Reset", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Reset", (payload) => {
    console.log("Hook greg.SYSTEM.Reset triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Reset".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Reset", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Reset fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
