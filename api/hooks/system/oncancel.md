---
title: OnCancel
description: Documentation for greg.SYSTEM.OnCancel
path: /api/hooks/system/oncancel
---

# OnCancel

> **Hook ID:** `greg.SYSTEM.OnCancel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnCancel

## Native Signature
```csharp
Il2Cpp.IUIActions::OnCancel(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCancel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCancel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCancel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCancel", function(payload)
    greg.log("Hook greg.SYSTEM.OnCancel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCancel fired")

greg.on("greg.SYSTEM.OnCancel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCancel", (payload) => {
    console.log("Hook greg.SYSTEM.OnCancel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCancel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCancel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCancel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
