---
title: CheckCurrentControls
description: Documentation for greg.SYSTEM.CheckCurrentControls
path: /api/hooks/system/checkcurrentcontrols
---

# CheckCurrentControls

> **Hook ID:** `greg.SYSTEM.CheckCurrentControls`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.CheckCurrentControls

## Native Signature
```csharp
Il2Cpp.InputManager::CheckCurrentControls(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CheckCurrentControls` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CheckCurrentControls", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CheckCurrentControls");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CheckCurrentControls", function(payload)
    greg.log("Hook greg.SYSTEM.CheckCurrentControls received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CheckCurrentControls fired")

greg.on("greg.SYSTEM.CheckCurrentControls", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CheckCurrentControls", (payload) => {
    console.log("Hook greg.SYSTEM.CheckCurrentControls triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CheckCurrentControls".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CheckCurrentControls", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CheckCurrentControls fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
