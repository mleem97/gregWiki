---
title: DisableOnAfterFirstSettingUp
description: Documentation for greg.UI.DisableOnAfterFirstSettingUp
path: /api/hooks/ui/disableonafterfirstsettingup
---

# DisableOnAfterFirstSettingUp

> **Hook ID:** `greg.UI.DisableOnAfterFirstSettingUp`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsSingleton.DisableOnAfterFirstSettingUp

## Native Signature
```csharp
Il2Cpp.SettingsSingleton::DisableOnAfterFirstSettingUp()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisableOnAfterFirstSettingUp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.DisableOnAfterFirstSettingUp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.DisableOnAfterFirstSettingUp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.DisableOnAfterFirstSettingUp", function(payload)
    greg.log("Hook greg.UI.DisableOnAfterFirstSettingUp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.DisableOnAfterFirstSettingUp fired")

greg.on("greg.UI.DisableOnAfterFirstSettingUp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.DisableOnAfterFirstSettingUp", (payload) => {
    console.log("Hook greg.UI.DisableOnAfterFirstSettingUp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.DisableOnAfterFirstSettingUp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.DisableOnAfterFirstSettingUp", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.DisableOnAfterFirstSettingUp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
