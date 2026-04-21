---
title: SettingsLoaded
description: Documentation for greg.UI.SettingsLoaded
path: /api/hooks/ui/settingsloaded
---

# SettingsLoaded

> **Hook ID:** `greg.UI.SettingsLoaded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsVolume.LoadSettings

## Native Signature
```csharp
Il2Cpp.SettingsVolume::LoadSettings()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SettingsLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.SettingsLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.SettingsLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.SettingsLoaded", function(payload)
    greg.log("Hook greg.UI.SettingsLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.SettingsLoaded fired")

greg.on("greg.UI.SettingsLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.SettingsLoaded", (payload) => {
    console.log("Hook greg.UI.SettingsLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.SettingsLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.SettingsLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.SettingsLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
