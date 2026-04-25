---
title: TickTimer
description: Documentation for greg.SYSTEM.TickTimer
path: /api/hooks/system/ticktimer
---

# TickTimer

> **Hook ID:** `greg.SYSTEM.TickTimer`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ITimedDevice.TickTimer

## Native Signature
```csharp
Il2Cpp.ITimedDevice::TickTimer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TickTimer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TickTimer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TickTimer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TickTimer", function(payload)
    greg.log("Hook greg.SYSTEM.TickTimer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TickTimer fired")

greg.on("greg.SYSTEM.TickTimer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TickTimer", (payload) => {
    console.log("Hook greg.SYSTEM.TickTimer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TickTimer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TickTimer", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TickTimer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
