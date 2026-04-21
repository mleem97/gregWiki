---
title: OnTimeControl
description: Documentation for greg.SYSTEM.OnTimeControl
path: /api/hooks/system/ontimecontrol
---

# OnTimeControl

> **Hook ID:** `greg.SYSTEM.OnTimeControl`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnTimeControl

## Native Signature
```csharp
Il2Cpp.IUIActions::OnTimeControl(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnTimeControl` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnTimeControl", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnTimeControl");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnTimeControl", function(payload)
    greg.log("Hook greg.SYSTEM.OnTimeControl received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnTimeControl fired")

greg.on("greg.SYSTEM.OnTimeControl", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnTimeControl", (payload) => {
    console.log("Hook greg.SYSTEM.OnTimeControl triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnTimeControl".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnTimeControl", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnTimeControl fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
