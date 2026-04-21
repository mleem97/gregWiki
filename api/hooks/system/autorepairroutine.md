---
title: AutoRepairRoutine
description: Documentation for greg.SYSTEM.AutoRepairRoutine
path: /api/hooks/system/autorepairroutine
---

# AutoRepairRoutine

> **Hook ID:** `greg.SYSTEM.AutoRepairRoutine`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CommandCenter.AutoRepairRoutine

## Native Signature
```csharp
Il2Cpp.CommandCenter::AutoRepairRoutine()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoRepairRoutine` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AutoRepairRoutine", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AutoRepairRoutine");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AutoRepairRoutine", function(payload)
    greg.log("Hook greg.SYSTEM.AutoRepairRoutine received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AutoRepairRoutine fired")

greg.on("greg.SYSTEM.AutoRepairRoutine", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AutoRepairRoutine", (payload) => {
    console.log("Hook greg.SYSTEM.AutoRepairRoutine triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AutoRepairRoutine".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AutoRepairRoutine", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AutoRepairRoutine fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
