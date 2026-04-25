---
title: DelayedOverlapCheck
description: Documentation for greg.SYSTEM.DelayedOverlapCheck
path: /api/hooks/system/delayedoverlapcheck
---

# DelayedOverlapCheck

> **Hook ID:** `greg.SYSTEM.DelayedOverlapCheck`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CheckIfTouchingWall.DelayedOverlapCheck

## Native Signature
```csharp
Il2Cpp.CheckIfTouchingWall::DelayedOverlapCheck()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DelayedOverlapCheck` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DelayedOverlapCheck", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DelayedOverlapCheck");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DelayedOverlapCheck", function(payload)
    greg.log("Hook greg.SYSTEM.DelayedOverlapCheck received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DelayedOverlapCheck fired")

greg.on("greg.SYSTEM.DelayedOverlapCheck", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DelayedOverlapCheck", (payload) => {
    console.log("Hook greg.SYSTEM.DelayedOverlapCheck triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DelayedOverlapCheck".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DelayedOverlapCheck", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DelayedOverlapCheck fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
