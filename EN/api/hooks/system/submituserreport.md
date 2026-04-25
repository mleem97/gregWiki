---
title: SubmitUserReport
description: Documentation for greg.SYSTEM.SubmitUserReport
path: /api/hooks/system/submituserreport
---

# SubmitUserReport

> **Hook ID:** `greg.SYSTEM.SubmitUserReport`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UserReport.SubmitUserReport

## Native Signature
```csharp
Il2Cpp.UserReport::SubmitUserReport()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SubmitUserReport` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SubmitUserReport", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SubmitUserReport");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SubmitUserReport", function(payload)
    greg.log("Hook greg.SYSTEM.SubmitUserReport received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SubmitUserReport fired")

greg.on("greg.SYSTEM.SubmitUserReport", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SubmitUserReport", (payload) => {
    console.log("Hook greg.SYSTEM.SubmitUserReport triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SubmitUserReport".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SubmitUserReport", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SubmitUserReport fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
