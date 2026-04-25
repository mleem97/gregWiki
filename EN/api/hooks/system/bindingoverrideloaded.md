---
title: BindingOverrideLoaded
description: Documentation for greg.SYSTEM.BindingOverrideLoaded
path: /api/hooks/system/bindingoverrideloaded
---

# BindingOverrideLoaded

> **Hook ID:** `greg.SYSTEM.BindingOverrideLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.LoadBindingOverride

## Native Signature
```csharp
Il2Cpp.InputManager::LoadBindingOverride(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BindingOverrideLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BindingOverrideLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BindingOverrideLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BindingOverrideLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.BindingOverrideLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BindingOverrideLoaded fired")

greg.on("greg.SYSTEM.BindingOverrideLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BindingOverrideLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.BindingOverrideLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BindingOverrideLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BindingOverrideLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BindingOverrideLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
