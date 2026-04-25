---
title: AutoSaveOnOffSet
description: Documentation for greg.UI.AutoSaveOnOffSet
path: /api/hooks/ui/autosaveonoffset
---

# AutoSaveOnOffSet

> **Hook ID:** `greg.UI.AutoSaveOnOffSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGameplay.SetAutoSaveOnOff

## Native Signature
```csharp
Il2Cpp.SettingsGameplay::SetAutoSaveOnOff(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoSaveOnOffSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AutoSaveOnOffSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AutoSaveOnOffSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AutoSaveOnOffSet", function(payload)
    greg.log("Hook greg.UI.AutoSaveOnOffSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AutoSaveOnOffSet fired")

greg.on("greg.UI.AutoSaveOnOffSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AutoSaveOnOffSet", (payload) => {
    console.log("Hook greg.UI.AutoSaveOnOffSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AutoSaveOnOffSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AutoSaveOnOffSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AutoSaveOnOffSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
