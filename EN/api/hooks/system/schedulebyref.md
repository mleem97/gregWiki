---
title: ScheduleByRef
description: Documentation for greg.SYSTEM.ScheduleByRef
path: /api/hooks/system/schedulebyref
---

# ScheduleByRef

> **Hook ID:** `greg.SYSTEM.ScheduleByRef`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UpdatePacketsJob.ScheduleByRef

## Native Signature
```csharp
Il2Cpp.UpdatePacketsJob::ScheduleByRef(EntityQuery)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ScheduleByRef` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ScheduleByRef", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ScheduleByRef");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ScheduleByRef", function(payload)
    greg.log("Hook greg.SYSTEM.ScheduleByRef received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ScheduleByRef fired")

greg.on("greg.SYSTEM.ScheduleByRef", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ScheduleByRef", (payload) => {
    console.log("Hook greg.SYSTEM.ScheduleByRef triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ScheduleByRef".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ScheduleByRef", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ScheduleByRef fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
