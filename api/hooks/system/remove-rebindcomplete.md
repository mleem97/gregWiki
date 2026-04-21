---
title: remove_rebindComplete
description: Documentation for greg.SYSTEM.remove_rebindComplete
path: /api/hooks/system/remove-rebindcomplete
---

# remove_rebindComplete

> **Hook ID:** `greg.SYSTEM.remove_rebindComplete`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.remove_rebindComplete

## Native Signature
```csharp
Il2Cpp.InputManager::remove_rebindComplete(Il2CppSystem.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `remove_rebindComplete` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.remove_rebindComplete", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.remove_rebindComplete");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.remove_rebindComplete", function(payload)
    greg.log("Hook greg.SYSTEM.remove_rebindComplete received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.remove_rebindComplete fired")

greg.on("greg.SYSTEM.remove_rebindComplete", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.remove_rebindComplete", (payload) => {
    console.log("Hook greg.SYSTEM.remove_rebindComplete triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.remove_rebindComplete".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.remove_rebindComplete", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.remove_rebindComplete fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
