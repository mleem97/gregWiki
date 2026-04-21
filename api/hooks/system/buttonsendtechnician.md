---
title: ButtonSendTechnician
description: Documentation for greg.SYSTEM.ButtonSendTechnician
path: /api/hooks/system/buttonsendtechnician
---

# ButtonSendTechnician

> **Hook ID:** `greg.SYSTEM.ButtonSendTechnician`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagementDeviceLine.ButtonSendTechnician

## Native Signature
```csharp
Il2Cpp.AssetManagementDeviceLine::ButtonSendTechnician()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonSendTechnician` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonSendTechnician", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonSendTechnician");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonSendTechnician", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonSendTechnician received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonSendTechnician fired")

greg.on("greg.SYSTEM.ButtonSendTechnician", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonSendTechnician", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonSendTechnician triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonSendTechnician".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonSendTechnician", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonSendTechnician fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
