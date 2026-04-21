---
title: OnSprint
description: Documentation for greg.SYSTEM.OnSprint
path: /api/hooks/system/onsprint
---

# OnSprint

> **Hook ID:** `greg.SYSTEM.OnSprint`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnSprint

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnSprint(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnSprint` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnSprint", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnSprint");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnSprint", function(payload)
    greg.log("Hook greg.SYSTEM.OnSprint received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnSprint fired")

greg.on("greg.SYSTEM.OnSprint", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnSprint", (payload) => {
    console.log("Hook greg.SYSTEM.OnSprint triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnSprint".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnSprint", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnSprint fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
