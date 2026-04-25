---
title: GetSize
description: Documentation for greg.SYSTEM.GetSize
path: /api/hooks/system/getsize
---

# GetSize

> **Hook ID:** `greg.SYSTEM.GetSize`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_MiniKeyboard.GetSize

## Native Signature
```csharp
Il2Cpp.OSK_MiniKeyboard::GetSize()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSize` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetSize", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetSize");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetSize", function(payload)
    greg.log("Hook greg.SYSTEM.GetSize received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetSize fired")

greg.on("greg.SYSTEM.GetSize", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetSize", (payload) => {
    console.log("Hook greg.SYSTEM.GetSize triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetSize".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetSize", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetSize fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
