---
title: EffectVolume
description: Documentation for greg.UI.EffectVolume
path: /api/hooks/ui/effectvolume
---

# EffectVolume

> **Hook ID:** `greg.UI.EffectVolume`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsVolume.EffectVolume

## Native Signature
```csharp
Il2Cpp.SettingsVolume::EffectVolume(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `EffectVolume` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.EffectVolume", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.EffectVolume");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.EffectVolume", function(payload)
    greg.log("Hook greg.UI.EffectVolume received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.EffectVolume fired")

greg.on("greg.UI.EffectVolume", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.EffectVolume", (payload) => {
    console.log("Hook greg.UI.EffectVolume triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.EffectVolume".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.EffectVolume", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.EffectVolume fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
