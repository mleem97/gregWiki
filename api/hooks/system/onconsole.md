---
title: OnConsole
description: Documentation for greg.SYSTEM.OnConsole
path: /api/hooks/system/onconsole
---

# OnConsole

> **Hook ID:** `greg.SYSTEM.OnConsole`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnConsole

## Native Signature
```csharp
Il2Cpp.IUIActions::OnConsole(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnConsole` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnConsole", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnConsole");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnConsole", function(payload)
    greg.log("Hook greg.SYSTEM.OnConsole received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnConsole fired")

greg.on("greg.SYSTEM.OnConsole", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnConsole", (payload) => {
    console.log("Hook greg.SYSTEM.OnConsole triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnConsole".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnConsole", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnConsole fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
