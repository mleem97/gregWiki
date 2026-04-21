---
title: OnCharacterSelectionDispatched
description: Documentation for greg.SYSTEM.OnCharacterSelectionDispatched
path: /api/hooks/system/oncharacterselectiondispatched
---

# OnCharacterSelectionDispatched

> **Hook ID:** `greg.SYSTEM.OnCharacterSelectionDispatched`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextEventHandler.SendOnCharacterSelection

## Native Signature
```csharp
Il2Cpp.TMP_TextEventHandler::SendOnCharacterSelection(char, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCharacterSelectionDispatched` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCharacterSelectionDispatched", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCharacterSelectionDispatched");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCharacterSelectionDispatched", function(payload)
    greg.log("Hook greg.SYSTEM.OnCharacterSelectionDispatched received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCharacterSelectionDispatched fired")

greg.on("greg.SYSTEM.OnCharacterSelectionDispatched", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCharacterSelectionDispatched", (payload) => {
    console.log("Hook greg.SYSTEM.OnCharacterSelectionDispatched triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCharacterSelectionDispatched".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCharacterSelectionDispatched", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCharacterSelectionDispatched fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
