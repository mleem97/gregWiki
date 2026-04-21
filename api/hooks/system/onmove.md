---
title: OnMove
description: Documentation for greg.SYSTEM.OnMove
path: /api/hooks/system/onmove
---

# OnMove

> **Hook ID:** `greg.SYSTEM.OnMove`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnMove

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnMove(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnMove` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnMove", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnMove");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnMove", function(payload)
    greg.log("Hook greg.SYSTEM.OnMove received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnMove fired")

greg.on("greg.SYSTEM.OnMove", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnMove", (payload) => {
    console.log("Hook greg.SYSTEM.OnMove triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnMove".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnMove", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnMove fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
