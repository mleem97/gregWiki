---
title: OnPoint
description: Documentation for greg.SYSTEM.OnPoint
path: /api/hooks/system/onpoint
---

# OnPoint

> **Hook ID:** `greg.SYSTEM.OnPoint`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnPoint

## Native Signature
```csharp
Il2Cpp.IUIActions::OnPoint(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPoint` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnPoint", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnPoint");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnPoint", function(payload)
    greg.log("Hook greg.SYSTEM.OnPoint received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnPoint fired")

greg.on("greg.SYSTEM.OnPoint", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnPoint", (payload) => {
    console.log("Hook greg.SYSTEM.OnPoint triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnPoint".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnPoint", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnPoint fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
