---
title: FindBinding
description: Documentation for greg.SYSTEM.FindBinding
path: /api/hooks/system/findbinding
---

# FindBinding

> **Hook ID:** `greg.SYSTEM.FindBinding`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputController.FindBinding

## Native Signature
```csharp
Il2Cpp.InputController::FindBinding(InputBinding, InputAction)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FindBinding` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FindBinding", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FindBinding");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FindBinding", function(payload)
    greg.log("Hook greg.SYSTEM.FindBinding received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FindBinding fired")

greg.on("greg.SYSTEM.FindBinding", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FindBinding", (payload) => {
    console.log("Hook greg.SYSTEM.FindBinding triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FindBinding".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FindBinding", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FindBinding fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
