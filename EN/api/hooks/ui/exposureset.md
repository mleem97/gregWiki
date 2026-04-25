---
title: ExposureSet
description: Documentation for greg.UI.ExposureSet
path: /api/hooks/ui/exposureset
---

# ExposureSet

> **Hook ID:** `greg.UI.ExposureSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetExposure

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetExposure(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ExposureSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ExposureSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ExposureSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ExposureSet", function(payload)
    greg.log("Hook greg.UI.ExposureSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ExposureSet fired")

greg.on("greg.UI.ExposureSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ExposureSet", (payload) => {
    console.log("Hook greg.UI.ExposureSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ExposureSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ExposureSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ExposureSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
