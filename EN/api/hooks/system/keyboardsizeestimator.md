---
title: KeyboardSizeEstimator
description: Documentation for greg.SYSTEM.KeyboardSizeEstimator
path: /api/hooks/system/keyboardsizeestimator
---

# KeyboardSizeEstimator

> **Hook ID:** `greg.SYSTEM.KeyboardSizeEstimator`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.KeyboardSizeEstimator

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::KeyboardSizeEstimator()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeyboardSizeEstimator` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeyboardSizeEstimator", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeyboardSizeEstimator");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeyboardSizeEstimator", function(payload)
    greg.log("Hook greg.SYSTEM.KeyboardSizeEstimator received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeyboardSizeEstimator fired")

greg.on("greg.SYSTEM.KeyboardSizeEstimator", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeyboardSizeEstimator", (payload) => {
    console.log("Hook greg.SYSTEM.KeyboardSizeEstimator triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeyboardSizeEstimator".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeyboardSizeEstimator", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeyboardSizeEstimator fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
