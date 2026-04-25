---
title: OnCrouch
description: Documentation for greg.SYSTEM.OnCrouch
path: /api/hooks/system/oncrouch
---

# OnCrouch

> **Hook ID:** `greg.SYSTEM.OnCrouch`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnCrouch

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnCrouch(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCrouch` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCrouch", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCrouch");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCrouch", function(payload)
    greg.log("Hook greg.SYSTEM.OnCrouch received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCrouch fired")

greg.on("greg.SYSTEM.OnCrouch", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCrouch", (payload) => {
    console.log("Hook greg.SYSTEM.OnCrouch triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCrouch".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCrouch", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCrouch fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
