---
title: Schedule
description: Documentation for greg.SYSTEM.Schedule
path: /api/hooks/system/schedule
---

# Schedule

> **Hook ID:** `greg.SYSTEM.Schedule`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UpdatePacketsJob.Schedule

## Native Signature
```csharp
Il2Cpp.UpdatePacketsJob::Schedule(EntityQuery)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Schedule` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Schedule", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Schedule");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Schedule", function(payload)
    greg.log("Hook greg.SYSTEM.Schedule received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Schedule fired")

greg.on("greg.SYSTEM.Schedule", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Schedule", (payload) => {
    console.log("Hook greg.SYSTEM.Schedule triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Schedule".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Schedule", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Schedule fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
