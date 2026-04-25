---
title: GateCoroutine
description: Documentation for greg.SYSTEM.GateCoroutine
path: /api/hooks/system/gatecoroutine
---

# GateCoroutine

> **Hook ID:** `greg.SYSTEM.GateCoroutine`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GateLever.GateCoroutine

## Native Signature
```csharp
Il2Cpp.GateLever::GateCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GateCoroutine` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GateCoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GateCoroutine");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GateCoroutine", function(payload)
    greg.log("Hook greg.SYSTEM.GateCoroutine received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GateCoroutine fired")

greg.on("greg.SYSTEM.GateCoroutine", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GateCoroutine", (payload) => {
    console.log("Hook greg.SYSTEM.GateCoroutine triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GateCoroutine".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GateCoroutine", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GateCoroutine fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
