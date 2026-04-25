---
title: AllBindingOverridesLoaded
description: Documentation for greg.SYSTEM.AllBindingOverridesLoaded
path: /api/hooks/system/allbindingoverridesloaded
---

# AllBindingOverridesLoaded

> **Hook ID:** `greg.SYSTEM.AllBindingOverridesLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.LoadAllBindingOverrides

## Native Signature
```csharp
Il2Cpp.InputManager::LoadAllBindingOverrides()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AllBindingOverridesLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AllBindingOverridesLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AllBindingOverridesLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AllBindingOverridesLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.AllBindingOverridesLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AllBindingOverridesLoaded fired")

greg.on("greg.SYSTEM.AllBindingOverridesLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AllBindingOverridesLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.AllBindingOverridesLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AllBindingOverridesLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AllBindingOverridesLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AllBindingOverridesLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
