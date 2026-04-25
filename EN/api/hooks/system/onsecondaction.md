---
title: OnSecondAction
description: Documentation for greg.SYSTEM.OnSecondAction
path: /api/hooks/system/onsecondaction
---

# OnSecondAction

> **Hook ID:** `greg.SYSTEM.OnSecondAction`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnSecondAction

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnSecondAction(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnSecondAction` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnSecondAction", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnSecondAction");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnSecondAction", function(payload)
    greg.log("Hook greg.SYSTEM.OnSecondAction received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnSecondAction fired")

greg.on("greg.SYSTEM.OnSecondAction", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnSecondAction", (payload) => {
    console.log("Hook greg.SYSTEM.OnSecondAction triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnSecondAction".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnSecondAction", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnSecondAction fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
