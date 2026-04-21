---
title: RacksVolume
description: Documentation for greg.UI.RacksVolume
path: /api/hooks/ui/racksvolume
---

# RacksVolume

> **Hook ID:** `greg.UI.RacksVolume`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsVolume.RacksVolume

## Native Signature
```csharp
Il2Cpp.SettingsVolume::RacksVolume(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RacksVolume` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.RacksVolume", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.RacksVolume");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.RacksVolume", function(payload)
    greg.log("Hook greg.UI.RacksVolume received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.RacksVolume fired")

greg.on("greg.UI.RacksVolume", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.RacksVolume", (payload) => {
    console.log("Hook greg.UI.RacksVolume triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.RacksVolume".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.RacksVolume", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.RacksVolume fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
