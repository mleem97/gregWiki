---
title: tingsSingleton
description: Documentation for greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet
path: /api/hooks/system/tingssingleton
---

# tingsSingleton

> **Hook ID:** `greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnTurnOffPublic.SettingsSingleton.OnTurnOffPublic

## Native Signature
```csharp
Il2Cpp.OnTurnOffPublic::SettingsSingleton.OnTurnOffPublic([In] System.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `tingsSingleton` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet", function(payload)
    greg.log("Hook greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet fired")

greg.on("greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet", (payload) => {
    console.log("Hook greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.tingsSingleton.OnTurnOffPublicSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
