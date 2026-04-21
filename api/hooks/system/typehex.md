---
title: TypeHex
description: Documentation for greg.SYSTEM.TypeHex
path: /api/hooks/system/typehex
---

# TypeHex

> **Hook ID:** `greg.SYSTEM.TypeHex`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.TypeHex

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::TypeHex(string, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TypeHex` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TypeHex", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TypeHex");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TypeHex", function(payload)
    greg.log("Hook greg.SYSTEM.TypeHex received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TypeHex fired")

greg.on("greg.SYSTEM.TypeHex", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TypeHex", (payload) => {
    console.log("Hook greg.SYSTEM.TypeHex triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TypeHex".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TypeHex", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TypeHex fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
