---
title: ResetBinding
description: Documentation for greg.SYSTEM.ResetBinding
path: /api/hooks/system/resetbinding
---

# ResetBinding

> **Hook ID:** `greg.SYSTEM.ResetBinding`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.ResetBinding

## Native Signature
```csharp
Il2Cpp.InputManager::ResetBinding(string, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetBinding` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResetBinding", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResetBinding");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResetBinding", function(payload)
    greg.log("Hook greg.SYSTEM.ResetBinding received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResetBinding fired")

greg.on("greg.SYSTEM.ResetBinding", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResetBinding", (payload) => {
    console.log("Hook greg.SYSTEM.ResetBinding triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResetBinding".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResetBinding", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResetBinding fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
