---
title: RegisterKeyStrokeCallback
description: Documentation for greg.SYSTEM.RegisterKeyStrokeCallback
path: /api/hooks/system/registerkeystrokecallback
---

# RegisterKeyStrokeCallback

> **Hook ID:** `greg.SYSTEM.RegisterKeyStrokeCallback`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.RegisterKeyStrokeCallback

## Native Signature
```csharp
Il2Cpp.viperInput::RegisterKeyStrokeCallback(Il2CppSystem.Action<char>, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RegisterKeyStrokeCallback` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RegisterKeyStrokeCallback", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RegisterKeyStrokeCallback");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RegisterKeyStrokeCallback", function(payload)
    greg.log("Hook greg.SYSTEM.RegisterKeyStrokeCallback received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RegisterKeyStrokeCallback fired")

greg.on("greg.SYSTEM.RegisterKeyStrokeCallback", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RegisterKeyStrokeCallback", (payload) => {
    console.log("Hook greg.SYSTEM.RegisterKeyStrokeCallback triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RegisterKeyStrokeCallback".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RegisterKeyStrokeCallback", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RegisterKeyStrokeCallback fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
