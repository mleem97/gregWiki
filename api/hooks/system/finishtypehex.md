---
title: FinishTypeHex
description: Documentation for greg.SYSTEM.FinishTypeHex
path: /api/hooks/system/finishtypehex
---

# FinishTypeHex

> **Hook ID:** `greg.SYSTEM.FinishTypeHex`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.FinishTypeHex

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::FinishTypeHex(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FinishTypeHex` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FinishTypeHex", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FinishTypeHex");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FinishTypeHex", function(payload)
    greg.log("Hook greg.SYSTEM.FinishTypeHex received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FinishTypeHex fired")

greg.on("greg.SYSTEM.FinishTypeHex", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FinishTypeHex", (payload) => {
    console.log("Hook greg.SYSTEM.FinishTypeHex triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FinishTypeHex".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FinishTypeHex", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FinishTypeHex fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
