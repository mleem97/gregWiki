---
title: CloseGate
description: Documentation for greg.SYSTEM.CloseGate
path: /api/hooks/system/closegate
---

# CloseGate

> **Hook ID:** `greg.SYSTEM.CloseGate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GateLever.CloseGate

## Native Signature
```csharp
Il2Cpp.GateLever::CloseGate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CloseGate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CloseGate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CloseGate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CloseGate", function(payload)
    greg.log("Hook greg.SYSTEM.CloseGate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CloseGate fired")

greg.on("greg.SYSTEM.CloseGate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CloseGate", (payload) => {
    console.log("Hook greg.SYSTEM.CloseGate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CloseGate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CloseGate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CloseGate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
