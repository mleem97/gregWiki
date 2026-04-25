---
title: remove_rebindCanceled
description: Documentation for greg.SYSTEM.remove_rebindCanceled
path: /api/hooks/system/remove-rebindcanceled
---

# remove_rebindCanceled

> **Hook ID:** `greg.SYSTEM.remove_rebindCanceled`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.remove_rebindCanceled

## Native Signature
```csharp
Il2Cpp.InputManager::remove_rebindCanceled(Il2CppSystem.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `remove_rebindCanceled` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.remove_rebindCanceled", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.remove_rebindCanceled");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.remove_rebindCanceled", function(payload)
    greg.log("Hook greg.SYSTEM.remove_rebindCanceled received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.remove_rebindCanceled fired")

greg.on("greg.SYSTEM.remove_rebindCanceled", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.remove_rebindCanceled", (payload) => {
    console.log("Hook greg.SYSTEM.remove_rebindCanceled triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.remove_rebindCanceled".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.remove_rebindCanceled", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.remove_rebindCanceled fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
