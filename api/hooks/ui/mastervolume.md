---
title: MasterVolume
description: Documentation for greg.UI.MasterVolume
path: /api/hooks/ui/mastervolume
---

# MasterVolume

> **Hook ID:** `greg.UI.MasterVolume`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsVolume.MasterVolume

## Native Signature
```csharp
Il2Cpp.SettingsVolume::MasterVolume(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MasterVolume` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.MasterVolume", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.MasterVolume");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.MasterVolume", function(payload)
    greg.log("Hook greg.UI.MasterVolume received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.MasterVolume fired")

greg.on("greg.UI.MasterVolume", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.MasterVolume", (payload) => {
    console.log("Hook greg.UI.MasterVolume triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.MasterVolume".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.MasterVolume", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.MasterVolume fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
