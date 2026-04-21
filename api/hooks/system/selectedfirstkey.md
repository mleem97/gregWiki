---
title: SelectedFirstKey
description: Documentation for greg.SYSTEM.SelectedFirstKey
path: /api/hooks/system/selectedfirstkey
---

# SelectedFirstKey

> **Hook ID:** `greg.SYSTEM.SelectedFirstKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_MiniKeyboard.SelectedFirstKey

## Native Signature
```csharp
Il2Cpp.OSK_MiniKeyboard::SelectedFirstKey()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectedFirstKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectedFirstKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectedFirstKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectedFirstKey", function(payload)
    greg.log("Hook greg.SYSTEM.SelectedFirstKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectedFirstKey fired")

greg.on("greg.SYSTEM.SelectedFirstKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectedFirstKey", (payload) => {
    console.log("Hook greg.SYSTEM.SelectedFirstKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectedFirstKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectedFirstKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectedFirstKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
