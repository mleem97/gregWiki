---
title: OnPause
description: Documentation for greg.SYSTEM.OnPause
path: /api/hooks/system/onpause
---

# OnPause

> **Hook ID:** `greg.SYSTEM.OnPause`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnPause

## Native Signature
```csharp
Il2Cpp.IUIActions::OnPause(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPause` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnPause", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnPause");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnPause", function(payload)
    greg.log("Hook greg.SYSTEM.OnPause received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnPause fired")

greg.on("greg.SYSTEM.OnPause", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnPause", (payload) => {
    console.log("Hook greg.SYSTEM.OnPause triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnPause".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnPause", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnPause fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
