---
title: TurnOffAfterXseconds
description: Documentation for greg.SYSTEM.TurnOffAfterXseconds
path: /api/hooks/system/turnoffafterxseconds
---

# TurnOffAfterXseconds

> **Hook ID:** `greg.SYSTEM.TurnOffAfterXseconds`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AutoDisable.TurnOffAfterXseconds

## Native Signature
```csharp
Il2Cpp.AutoDisable::TurnOffAfterXseconds()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TurnOffAfterXseconds` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TurnOffAfterXseconds", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TurnOffAfterXseconds");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TurnOffAfterXseconds", function(payload)
    greg.log("Hook greg.SYSTEM.TurnOffAfterXseconds received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TurnOffAfterXseconds fired")

greg.on("greg.SYSTEM.TurnOffAfterXseconds", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TurnOffAfterXseconds", (payload) => {
    console.log("Hook greg.SYSTEM.TurnOffAfterXseconds triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TurnOffAfterXseconds".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TurnOffAfterXseconds", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TurnOffAfterXseconds fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
