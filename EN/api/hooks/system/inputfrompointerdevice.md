---
title: InputFromPointerDevice
description: Documentation for greg.SYSTEM.InputFromPointerDevice
path: /api/hooks/system/inputfrompointerdevice
---

# InputFromPointerDevice

> **Hook ID:** `greg.SYSTEM.InputFromPointerDevice`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_MiniKeyboard.InputFromPointerDevice

## Native Signature
```csharp
Il2Cpp.OSK_MiniKeyboard::InputFromPointerDevice()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InputFromPointerDevice` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InputFromPointerDevice", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InputFromPointerDevice");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InputFromPointerDevice", function(payload)
    greg.log("Hook greg.SYSTEM.InputFromPointerDevice received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InputFromPointerDevice fired")

greg.on("greg.SYSTEM.InputFromPointerDevice", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InputFromPointerDevice", (payload) => {
    console.log("Hook greg.SYSTEM.InputFromPointerDevice triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InputFromPointerDevice".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InputFromPointerDevice", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InputFromPointerDevice fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
