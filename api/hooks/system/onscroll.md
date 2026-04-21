---
title: OnScroll
description: Documentation for greg.SYSTEM.OnScroll
path: /api/hooks/system/onscroll
---

# OnScroll

> **Hook ID:** `greg.SYSTEM.OnScroll`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnScroll

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnScroll(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnScroll` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnScroll", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnScroll");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnScroll", function(payload)
    greg.log("Hook greg.SYSTEM.OnScroll received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnScroll fired")

greg.on("greg.SYSTEM.OnScroll", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnScroll", (payload) => {
    console.log("Hook greg.SYSTEM.OnScroll triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnScroll".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnScroll", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnScroll fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
