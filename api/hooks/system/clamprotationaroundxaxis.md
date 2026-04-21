---
title: ClampRotationAroundXAxis
description: Documentation for greg.SYSTEM.ClampRotationAroundXAxis
path: /api/hooks/system/clamprotationaroundxaxis
---

# ClampRotationAroundXAxis

> **Hook ID:** `greg.SYSTEM.ClampRotationAroundXAxis`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/MouseLook.ClampRotationAroundXAxis

## Native Signature
```csharp
Il2Cpp.MouseLook::ClampRotationAroundXAxis(Quaternion)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClampRotationAroundXAxis` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClampRotationAroundXAxis", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClampRotationAroundXAxis");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClampRotationAroundXAxis", function(payload)
    greg.log("Hook greg.SYSTEM.ClampRotationAroundXAxis received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClampRotationAroundXAxis fired")

greg.on("greg.SYSTEM.ClampRotationAroundXAxis", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClampRotationAroundXAxis", (payload) => {
    console.log("Hook greg.SYSTEM.ClampRotationAroundXAxis triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClampRotationAroundXAxis".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClampRotationAroundXAxis", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClampRotationAroundXAxis fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
