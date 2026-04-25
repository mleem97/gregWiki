---
title: PerformOverlapCheck
description: Documentation for greg.SYSTEM.PerformOverlapCheck
path: /api/hooks/system/performoverlapcheck
---

# PerformOverlapCheck

> **Hook ID:** `greg.SYSTEM.PerformOverlapCheck`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CheckIfTouchingWall.PerformOverlapCheck

## Native Signature
```csharp
Il2Cpp.CheckIfTouchingWall::PerformOverlapCheck()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PerformOverlapCheck` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PerformOverlapCheck", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PerformOverlapCheck");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PerformOverlapCheck", function(payload)
    greg.log("Hook greg.SYSTEM.PerformOverlapCheck received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PerformOverlapCheck fired")

greg.on("greg.SYSTEM.PerformOverlapCheck", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PerformOverlapCheck", (payload) => {
    console.log("Hook greg.SYSTEM.PerformOverlapCheck triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PerformOverlapCheck".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PerformOverlapCheck", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PerformOverlapCheck fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
