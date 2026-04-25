---
title: ClickSound
description: Documentation for greg.SYSTEM.ClickSound
path: /api/hooks/system/clicksound
---

# ClickSound

> **Hook ID:** `greg.SYSTEM.ClickSound`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.ClickSound

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::ClickSound(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickSound` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickSound", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickSound");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickSound", function(payload)
    greg.log("Hook greg.SYSTEM.ClickSound received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickSound fired")

greg.on("greg.SYSTEM.ClickSound", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickSound", (payload) => {
    console.log("Hook greg.SYSTEM.ClickSound triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickSound".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickSound", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickSound fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
