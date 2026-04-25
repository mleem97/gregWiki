---
title: MusicVolume
description: Documentation for greg.UI.MusicVolume
path: /api/hooks/ui/musicvolume
---

# MusicVolume

> **Hook ID:** `greg.UI.MusicVolume`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsVolume.MusicVolume

## Native Signature
```csharp
Il2Cpp.SettingsVolume::MusicVolume(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MusicVolume` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.MusicVolume", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.MusicVolume");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.MusicVolume", function(payload)
    greg.log("Hook greg.UI.MusicVolume received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.MusicVolume fired")

greg.on("greg.UI.MusicVolume", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.MusicVolume", (payload) => {
    console.log("Hook greg.UI.MusicVolume triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.MusicVolume".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.MusicVolume", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.MusicVolume fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
