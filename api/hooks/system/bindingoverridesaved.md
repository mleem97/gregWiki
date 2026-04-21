---
title: BindingOverrideSaved
description: Documentation for greg.SYSTEM.BindingOverrideSaved
path: /api/hooks/system/bindingoverridesaved
---

# BindingOverrideSaved

> **Hook ID:** `greg.SYSTEM.BindingOverrideSaved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.SaveBindingOverride

## Native Signature
```csharp
Il2Cpp.InputManager::SaveBindingOverride(InputAction)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BindingOverrideSaved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BindingOverrideSaved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BindingOverrideSaved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BindingOverrideSaved", function(payload)
    greg.log("Hook greg.SYSTEM.BindingOverrideSaved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BindingOverrideSaved fired")

greg.on("greg.SYSTEM.BindingOverrideSaved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BindingOverrideSaved", (payload) => {
    console.log("Hook greg.SYSTEM.BindingOverrideSaved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BindingOverrideSaved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BindingOverrideSaved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BindingOverrideSaved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
