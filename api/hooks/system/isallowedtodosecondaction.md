---
title: IsAllowedToDoSecondAction
description: Documentation for greg.SYSTEM.IsAllowedToDoSecondAction
path: /api/hooks/system/isallowedtodosecondaction
---

# IsAllowedToDoSecondAction

> **Hook ID:** `greg.SYSTEM.IsAllowedToDoSecondAction`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Interact.IsAllowedToDoSecondAction

## Native Signature
```csharp
Il2Cpp.Interact::IsAllowedToDoSecondAction()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsAllowedToDoSecondAction` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsAllowedToDoSecondAction", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsAllowedToDoSecondAction");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsAllowedToDoSecondAction", function(payload)
    greg.log("Hook greg.SYSTEM.IsAllowedToDoSecondAction received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsAllowedToDoSecondAction fired")

greg.on("greg.SYSTEM.IsAllowedToDoSecondAction", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsAllowedToDoSecondAction", (payload) => {
    console.log("Hook greg.SYSTEM.IsAllowedToDoSecondAction triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsAllowedToDoSecondAction".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsAllowedToDoSecondAction", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsAllowedToDoSecondAction fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
