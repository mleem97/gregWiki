---
title: OnJump
description: Documentation for greg.SYSTEM.OnJump
path: /api/hooks/system/onjump
---

# OnJump

> **Hook ID:** `greg.SYSTEM.OnJump`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnJump

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnJump(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnJump` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnJump", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnJump");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnJump", function(payload)
    greg.log("Hook greg.SYSTEM.OnJump received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnJump fired")

greg.on("greg.SYSTEM.OnJump", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnJump", (payload) => {
    console.log("Hook greg.SYSTEM.OnJump triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnJump".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnJump", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnJump fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
