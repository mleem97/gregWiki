---
title: DeActivate
description: Documentation for greg.SYSTEM.DeActivate
path: /api/hooks/system/deactivate
---

# DeActivate

> **Hook ID:** `greg.SYSTEM.DeActivate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_GamepadHelper.DeActivate

## Native Signature
```csharp
Il2Cpp.OSK_GamepadHelper::DeActivate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DeActivate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DeActivate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DeActivate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DeActivate", function(payload)
    greg.log("Hook greg.SYSTEM.DeActivate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DeActivate fired")

greg.on("greg.SYSTEM.DeActivate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DeActivate", (payload) => {
    console.log("Hook greg.SYSTEM.DeActivate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DeActivate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DeActivate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DeActivate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
