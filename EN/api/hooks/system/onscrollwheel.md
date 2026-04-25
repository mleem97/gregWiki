---
title: OnScrollWheel
description: Documentation for greg.SYSTEM.OnScrollWheel
path: /api/hooks/system/onscrollwheel
---

# OnScrollWheel

> **Hook ID:** `greg.SYSTEM.OnScrollWheel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnScrollWheel

## Native Signature
```csharp
Il2Cpp.IUIActions::OnScrollWheel(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnScrollWheel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnScrollWheel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnScrollWheel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnScrollWheel", function(payload)
    greg.log("Hook greg.SYSTEM.OnScrollWheel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnScrollWheel fired")

greg.on("greg.SYSTEM.OnScrollWheel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnScrollWheel", (payload) => {
    console.log("Hook greg.SYSTEM.OnScrollWheel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnScrollWheel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnScrollWheel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnScrollWheel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
