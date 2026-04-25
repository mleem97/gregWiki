---
title: OpenGate
description: Documentation for greg.SYSTEM.OpenGate
path: /api/hooks/system/opengate
---

# OpenGate

> **Hook ID:** `greg.SYSTEM.OpenGate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GateLever.OpenGate

## Native Signature
```csharp
Il2Cpp.GateLever::OpenGate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OpenGate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OpenGate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OpenGate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OpenGate", function(payload)
    greg.log("Hook greg.SYSTEM.OpenGate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OpenGate fired")

greg.on("greg.SYSTEM.OpenGate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OpenGate", (payload) => {
    console.log("Hook greg.SYSTEM.OpenGate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OpenGate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OpenGate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OpenGate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
