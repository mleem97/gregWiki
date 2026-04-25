---
title: TimerLoop
description: Documentation for greg.SYSTEM.TimerLoop
path: /api/hooks/system/timerloop
---

# TimerLoop

> **Hook ID:** `greg.SYSTEM.TimerLoop`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/DeviceTimerManager.TimerLoop

## Native Signature
```csharp
Il2Cpp.DeviceTimerManager::TimerLoop()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TimerLoop` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TimerLoop", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TimerLoop");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TimerLoop", function(payload)
    greg.log("Hook greg.SYSTEM.TimerLoop received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TimerLoop fired")

greg.on("greg.SYSTEM.TimerLoop", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TimerLoop", (payload) => {
    console.log("Hook greg.SYSTEM.TimerLoop triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TimerLoop".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TimerLoop", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TimerLoop fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
