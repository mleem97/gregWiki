---
title: Crouch
description: Documentation for greg.SYSTEM.Crouch
path: /api/hooks/system/crouch
---

# Crouch

> **Hook ID:** `greg.SYSTEM.Crouch`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.Crouch

## Native Signature
```csharp
Il2Cpp.FirstPersonController::Crouch()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Crouch` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Crouch", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Crouch");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Crouch", function(payload)
    greg.log("Hook greg.SYSTEM.Crouch received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Crouch fired")

greg.on("greg.SYSTEM.Crouch", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Crouch", (payload) => {
    console.log("Hook greg.SYSTEM.Crouch triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Crouch".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Crouch", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Crouch fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
