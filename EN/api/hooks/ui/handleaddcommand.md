---
title: HandleAddCommand
description: Documentation for greg.UI.HandleAddCommand
path: /api/hooks/ui/handleaddcommand
---

# HandleAddCommand

> **Hook ID:** `greg.UI.HandleAddCommand`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.HandleAddCommand

## Native Signature
```csharp
Il2Cpp.PauseMenu::HandleAddCommand(Il2CppStringArray)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HandleAddCommand` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.HandleAddCommand", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.HandleAddCommand");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.HandleAddCommand", function(payload)
    greg.log("Hook greg.UI.HandleAddCommand received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.HandleAddCommand fired")

greg.on("greg.UI.HandleAddCommand", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.HandleAddCommand", (payload) => {
    console.log("Hook greg.UI.HandleAddCommand triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.HandleAddCommand".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.HandleAddCommand", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.HandleAddCommand fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
