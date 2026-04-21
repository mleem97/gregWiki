---
title: GenKeyMapDict
description: Documentation for greg.SYSTEM.GenKeyMapDict
path: /api/hooks/system/genkeymapdict
---

# GenKeyMapDict

> **Hook ID:** `greg.SYSTEM.GenKeyMapDict`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keymap.GenKeyMapDict

## Native Signature
```csharp
Il2Cpp.OSK_Keymap::GenKeyMapDict()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenKeyMapDict` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GenKeyMapDict", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GenKeyMapDict");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GenKeyMapDict", function(payload)
    greg.log("Hook greg.SYSTEM.GenKeyMapDict received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GenKeyMapDict fired")

greg.on("greg.SYSTEM.GenKeyMapDict", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GenKeyMapDict", (payload) => {
    console.log("Hook greg.SYSTEM.GenKeyMapDict triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GenKeyMapDict".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GenKeyMapDict", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GenKeyMapDict fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
