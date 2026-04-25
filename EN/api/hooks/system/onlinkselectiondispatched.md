---
title: OnLinkSelectionDispatched
description: Documentation for greg.SYSTEM.OnLinkSelectionDispatched
path: /api/hooks/system/onlinkselectiondispatched
---

# OnLinkSelectionDispatched

> **Hook ID:** `greg.SYSTEM.OnLinkSelectionDispatched`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextEventHandler.SendOnLinkSelection

## Native Signature
```csharp
Il2Cpp.TMP_TextEventHandler::SendOnLinkSelection(string, string, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLinkSelectionDispatched` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnLinkSelectionDispatched", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnLinkSelectionDispatched");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnLinkSelectionDispatched", function(payload)
    greg.log("Hook greg.SYSTEM.OnLinkSelectionDispatched received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnLinkSelectionDispatched fired")

greg.on("greg.SYSTEM.OnLinkSelectionDispatched", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnLinkSelectionDispatched", (payload) => {
    console.log("Hook greg.SYSTEM.OnLinkSelectionDispatched triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnLinkSelectionDispatched".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnLinkSelectionDispatched", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnLinkSelectionDispatched fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
