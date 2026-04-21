---
title: GenKeyMapStr
description: Documentation for greg.SYSTEM.GenKeyMapStr
path: /api/hooks/system/genkeymapstr
---

# GenKeyMapStr

> **Hook ID:** `greg.SYSTEM.GenKeyMapStr`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.GenKeyMapStr

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::GenKeyMapStr()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenKeyMapStr` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GenKeyMapStr", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GenKeyMapStr");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GenKeyMapStr", function(payload)
    greg.log("Hook greg.SYSTEM.GenKeyMapStr received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GenKeyMapStr fired")

greg.on("greg.SYSTEM.GenKeyMapStr", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GenKeyMapStr", (payload) => {
    console.log("Hook greg.SYSTEM.GenKeyMapStr triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GenKeyMapStr".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GenKeyMapStr", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GenKeyMapStr fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
