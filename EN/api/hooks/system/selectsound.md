---
title: SelectSound
description: Documentation for greg.SYSTEM.SelectSound
path: /api/hooks/system/selectsound
---

# SelectSound

> **Hook ID:** `greg.SYSTEM.SelectSound`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.SelectSound

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::SelectSound()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectSound` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectSound", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectSound");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectSound", function(payload)
    greg.log("Hook greg.SYSTEM.SelectSound received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectSound fired")

greg.on("greg.SYSTEM.SelectSound", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectSound", (payload) => {
    console.log("Hook greg.SYSTEM.SelectSound triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectSound".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectSound", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectSound fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
