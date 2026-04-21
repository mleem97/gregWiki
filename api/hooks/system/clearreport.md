---
title: ClearReport
description: Documentation for greg.SYSTEM.ClearReport
path: /api/hooks/system/clearreport
---

# ClearReport

> **Hook ID:** `greg.SYSTEM.ClearReport`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UserReport.ClearReport

## Native Signature
```csharp
Il2Cpp.UserReport::ClearReport()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearReport` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClearReport", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClearReport");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClearReport", function(payload)
    greg.log("Hook greg.SYSTEM.ClearReport received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClearReport fired")

greg.on("greg.SYSTEM.ClearReport", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClearReport", (payload) => {
    console.log("Hook greg.SYSTEM.ClearReport triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClearReport".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClearReport", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClearReport fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
