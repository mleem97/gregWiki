---
title: OnSpriteSelectionDispatched
description: Documentation for greg.SYSTEM.OnSpriteSelectionDispatched
path: /api/hooks/system/onspriteselectiondispatched
---

# OnSpriteSelectionDispatched

> **Hook ID:** `greg.SYSTEM.OnSpriteSelectionDispatched`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextEventHandler.SendOnSpriteSelection

## Native Signature
```csharp
Il2Cpp.TMP_TextEventHandler::SendOnSpriteSelection(char, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnSpriteSelectionDispatched` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnSpriteSelectionDispatched", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnSpriteSelectionDispatched");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnSpriteSelectionDispatched", function(payload)
    greg.log("Hook greg.SYSTEM.OnSpriteSelectionDispatched received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnSpriteSelectionDispatched fired")

greg.on("greg.SYSTEM.OnSpriteSelectionDispatched", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnSpriteSelectionDispatched", (payload) => {
    console.log("Hook greg.SYSTEM.OnSpriteSelectionDispatched triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnSpriteSelectionDispatched".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnSpriteSelectionDispatched", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnSpriteSelectionDispatched fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
