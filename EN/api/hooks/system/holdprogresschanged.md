---
title: HoldProgressChanged
description: Documentation for greg.SYSTEM.HoldProgressChanged
path: /api/hooks/system/holdprogresschanged
---

# HoldProgressChanged

> **Hook ID:** `greg.SYSTEM.HoldProgressChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.UpdateHoldProgress

## Native Signature
```csharp
Il2Cpp.StaticUIElements::UpdateHoldProgress(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HoldProgressChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HoldProgressChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HoldProgressChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HoldProgressChanged", function(payload)
    greg.log("Hook greg.SYSTEM.HoldProgressChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HoldProgressChanged fired")

greg.on("greg.SYSTEM.HoldProgressChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HoldProgressChanged", (payload) => {
    console.log("Hook greg.SYSTEM.HoldProgressChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HoldProgressChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HoldProgressChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HoldProgressChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
