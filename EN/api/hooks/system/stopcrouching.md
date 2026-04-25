---
title: StopCrouching
description: Documentation for greg.SYSTEM.StopCrouching
path: /api/hooks/system/stopcrouching
---

# StopCrouching

> **Hook ID:** `greg.SYSTEM.StopCrouching`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.StopCrouching

## Native Signature
```csharp
Il2Cpp.FirstPersonController::StopCrouching()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StopCrouching` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StopCrouching", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StopCrouching");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StopCrouching", function(payload)
    greg.log("Hook greg.SYSTEM.StopCrouching received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StopCrouching fired")

greg.on("greg.SYSTEM.StopCrouching", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StopCrouching", (payload) => {
    console.log("Hook greg.SYSTEM.StopCrouching triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StopCrouching".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StopCrouching", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StopCrouching fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
