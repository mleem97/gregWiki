---
title: KeyDelete
description: Documentation for greg.SYSTEM.KeyDelete
path: /api/hooks/system/keydelete
---

# KeyDelete

> **Hook ID:** `greg.SYSTEM.KeyDelete`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.KeyDelete

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::KeyDelete(OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyDelete` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyDelete", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyDelete");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyDelete", function(payload)
    greg.log("Hook greg.SYSTEM.KeyDelete received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyDelete fired")

greg.on("greg.SYSTEM.KeyDelete", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyDelete", (payload) => {
    console.log("Hook greg.SYSTEM.KeyDelete triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyDelete".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyDelete", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyDelete fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
