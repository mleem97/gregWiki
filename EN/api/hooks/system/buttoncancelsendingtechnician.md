---
title: ButtonCancelSendingTechnician
description: Documentation for greg.SYSTEM.ButtonCancelSendingTechnician
path: /api/hooks/system/buttoncancelsendingtechnician
---

# ButtonCancelSendingTechnician

> **Hook ID:** `greg.SYSTEM.ButtonCancelSendingTechnician`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonCancelSendingTechnician

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonCancelSendingTechnician()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCancelSendingTechnician` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonCancelSendingTechnician", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonCancelSendingTechnician");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonCancelSendingTechnician", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonCancelSendingTechnician received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonCancelSendingTechnician fired")

greg.on("greg.SYSTEM.ButtonCancelSendingTechnician", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonCancelSendingTechnician", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonCancelSendingTechnician triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonCancelSendingTechnician".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonCancelSendingTechnician", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonCancelSendingTechnician fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
