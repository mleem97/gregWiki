---
title: AutoSaveIntervalSet
description: Documentation for greg.UI.AutoSaveIntervalSet
path: /api/hooks/ui/autosaveintervalset
---

# AutoSaveIntervalSet

> **Hook ID:** `greg.UI.AutoSaveIntervalSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGameplay.SetAutoSaveInterval

## Native Signature
```csharp
Il2Cpp.SettingsGameplay::SetAutoSaveInterval(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AutoSaveIntervalSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AutoSaveIntervalSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AutoSaveIntervalSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AutoSaveIntervalSet", function(payload)
    greg.log("Hook greg.UI.AutoSaveIntervalSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AutoSaveIntervalSet fired")

greg.on("greg.UI.AutoSaveIntervalSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AutoSaveIntervalSet", (payload) => {
    console.log("Hook greg.UI.AutoSaveIntervalSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AutoSaveIntervalSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AutoSaveIntervalSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AutoSaveIntervalSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
