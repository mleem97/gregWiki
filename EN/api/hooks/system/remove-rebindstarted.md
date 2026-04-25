---
title: remove_rebindStarted
description: Documentation for greg.SYSTEM.remove_rebindStarted
path: /api/hooks/system/remove-rebindstarted
---

# remove_rebindStarted

> **Hook ID:** `greg.SYSTEM.remove_rebindStarted`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.remove_rebindStarted

## Native Signature
```csharp
Il2Cpp.InputManager::remove_rebindStarted(Il2CppSystem.Action<InputAction, int>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `remove_rebindStarted` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.remove_rebindStarted", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.remove_rebindStarted");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.remove_rebindStarted", function(payload)
    greg.log("Hook greg.SYSTEM.remove_rebindStarted received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.remove_rebindStarted fired")

greg.on("greg.SYSTEM.remove_rebindStarted", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.remove_rebindStarted", (payload) => {
    console.log("Hook greg.SYSTEM.remove_rebindStarted triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.remove_rebindStarted".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.remove_rebindStarted", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.remove_rebindStarted fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
