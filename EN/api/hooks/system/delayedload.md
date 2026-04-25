---
title: DelayedLoad
description: Documentation for greg.SYSTEM.DelayedLoad
path: /api/hooks/system/delayedload
---

# DelayedLoad

> **Hook ID:** `greg.SYSTEM.DelayedLoad`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GODMOD.DelayedLoad

## Native Signature
```csharp
Il2Cpp.GODMOD::DelayedLoad()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DelayedLoad` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DelayedLoad", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DelayedLoad");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DelayedLoad", function(payload)
    greg.log("Hook greg.SYSTEM.DelayedLoad received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DelayedLoad fired")

greg.on("greg.SYSTEM.DelayedLoad", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DelayedLoad", (payload) => {
    console.log("Hook greg.SYSTEM.DelayedLoad triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DelayedLoad".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DelayedLoad", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DelayedLoad fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
