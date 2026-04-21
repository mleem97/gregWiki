---
title: OnWordSelectionDispatched
description: Documentation for greg.SYSTEM.OnWordSelectionDispatched
path: /api/hooks/system/onwordselectiondispatched
---

# OnWordSelectionDispatched

> **Hook ID:** `greg.SYSTEM.OnWordSelectionDispatched`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextEventHandler.SendOnWordSelection

## Native Signature
```csharp
Il2Cpp.TMP_TextEventHandler::SendOnWordSelection(string, int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnWordSelectionDispatched` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnWordSelectionDispatched", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnWordSelectionDispatched");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnWordSelectionDispatched", function(payload)
    greg.log("Hook greg.SYSTEM.OnWordSelectionDispatched received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnWordSelectionDispatched fired")

greg.on("greg.SYSTEM.OnWordSelectionDispatched", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnWordSelectionDispatched", (payload) => {
    console.log("Hook greg.SYSTEM.OnWordSelectionDispatched triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnWordSelectionDispatched".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnWordSelectionDispatched", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnWordSelectionDispatched fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
