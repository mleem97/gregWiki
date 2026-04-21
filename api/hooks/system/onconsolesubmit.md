---
title: OnConsoleSubmit
description: Documentation for greg.SYSTEM.OnConsoleSubmit
path: /api/hooks/system/onconsolesubmit
---

# OnConsoleSubmit

> **Hook ID:** `greg.SYSTEM.OnConsoleSubmit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnConsoleSubmit

## Native Signature
```csharp
Il2Cpp.IUIActions::OnConsoleSubmit(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnConsoleSubmit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnConsoleSubmit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnConsoleSubmit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnConsoleSubmit", function(payload)
    greg.log("Hook greg.SYSTEM.OnConsoleSubmit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnConsoleSubmit fired")

greg.on("greg.SYSTEM.OnConsoleSubmit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnConsoleSubmit", (payload) => {
    console.log("Hook greg.SYSTEM.OnConsoleSubmit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnConsoleSubmit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnConsoleSubmit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnConsoleSubmit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
