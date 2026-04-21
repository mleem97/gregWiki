---
title: TMPInputFieldReActivate
description: Documentation for greg.SYSTEM.TMPInputFieldReActivate
path: /api/hooks/system/tmpinputfieldreactivate
---

# TMPInputFieldReActivate

> **Hook ID:** `greg.SYSTEM.TMPInputFieldReActivate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.TMPInputFieldReActivate

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::TMPInputFieldReActivate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TMPInputFieldReActivate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TMPInputFieldReActivate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TMPInputFieldReActivate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TMPInputFieldReActivate", function(payload)
    greg.log("Hook greg.SYSTEM.TMPInputFieldReActivate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TMPInputFieldReActivate fired")

greg.on("greg.SYSTEM.TMPInputFieldReActivate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TMPInputFieldReActivate", (payload) => {
    console.log("Hook greg.SYSTEM.TMPInputFieldReActivate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TMPInputFieldReActivate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TMPInputFieldReActivate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TMPInputFieldReActivate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
