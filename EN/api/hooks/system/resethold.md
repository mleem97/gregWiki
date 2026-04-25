---
title: ResetHold
description: Documentation for greg.SYSTEM.ResetHold
path: /api/hooks/system/resethold
---

# ResetHold

> **Hook ID:** `greg.SYSTEM.ResetHold`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/RayLookAt.ResetHold

## Native Signature
```csharp
Il2Cpp.RayLookAt::ResetHold()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetHold` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ResetHold", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ResetHold");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ResetHold", function(payload)
    greg.log("Hook greg.SYSTEM.ResetHold received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ResetHold fired")

greg.on("greg.SYSTEM.ResetHold", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ResetHold", (payload) => {
    console.log("Hook greg.SYSTEM.ResetHold triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ResetHold".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ResetHold", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ResetHold fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
