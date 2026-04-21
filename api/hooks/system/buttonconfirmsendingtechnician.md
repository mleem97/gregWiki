---
title: ButtonConfirmSendingTechnician
description: Documentation for greg.SYSTEM.ButtonConfirmSendingTechnician
path: /api/hooks/system/buttonconfirmsendingtechnician
---

# ButtonConfirmSendingTechnician

> **Hook ID:** `greg.SYSTEM.ButtonConfirmSendingTechnician`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonConfirmSendingTechnician

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonConfirmSendingTechnician()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonConfirmSendingTechnician` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonConfirmSendingTechnician", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonConfirmSendingTechnician");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonConfirmSendingTechnician", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonConfirmSendingTechnician received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonConfirmSendingTechnician fired")

greg.on("greg.SYSTEM.ButtonConfirmSendingTechnician", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonConfirmSendingTechnician", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonConfirmSendingTechnician triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonConfirmSendingTechnician".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonConfirmSendingTechnician", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonConfirmSendingTechnician fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
