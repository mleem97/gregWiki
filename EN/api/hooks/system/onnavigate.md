---
title: OnNavigate
description: Documentation for greg.SYSTEM.OnNavigate
path: /api/hooks/system/onnavigate
---

# OnNavigate

> **Hook ID:** `greg.SYSTEM.OnNavigate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnNavigate

## Native Signature
```csharp
Il2Cpp.IUIActions::OnNavigate(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnNavigate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnNavigate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnNavigate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnNavigate", function(payload)
    greg.log("Hook greg.SYSTEM.OnNavigate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnNavigate fired")

greg.on("greg.SYSTEM.OnNavigate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnNavigate", (payload) => {
    console.log("Hook greg.SYSTEM.OnNavigate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnNavigate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnNavigate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnNavigate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
