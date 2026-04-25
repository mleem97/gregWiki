---
title: FindAction
description: Documentation for greg.SYSTEM.FindAction
path: /api/hooks/system/findaction
---

# FindAction

> **Hook ID:** `greg.SYSTEM.FindAction`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputController.FindAction

## Native Signature
```csharp
Il2Cpp.InputController::FindAction(string, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FindAction` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FindAction", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FindAction");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FindAction", function(payload)
    greg.log("Hook greg.SYSTEM.FindAction received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FindAction fired")

greg.on("greg.SYSTEM.FindAction", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FindAction", (payload) => {
    console.log("Hook greg.SYSTEM.FindAction triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FindAction".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FindAction", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FindAction fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
