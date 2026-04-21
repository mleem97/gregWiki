---
title: NormalFovChanged
description: Documentation for greg.SYSTEM.NormalFovChanged
path: /api/hooks/system/normalfovchanged
---

# NormalFovChanged

> **Hook ID:** `greg.SYSTEM.NormalFovChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.UpdateNormalFov

## Native Signature
```csharp
Il2Cpp.FirstPersonController::UpdateNormalFov(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NormalFovChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.NormalFovChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.NormalFovChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.NormalFovChanged", function(payload)
    greg.log("Hook greg.SYSTEM.NormalFovChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.NormalFovChanged fired")

greg.on("greg.SYSTEM.NormalFovChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.NormalFovChanged", (payload) => {
    console.log("Hook greg.SYSTEM.NormalFovChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.NormalFovChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.NormalFovChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.NormalFovChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
