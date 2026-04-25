---
title: QualitySet
description: Documentation for greg.UI.QualitySet
path: /api/hooks/ui/qualityset
---

# QualitySet

> **Hook ID:** `greg.UI.QualitySet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetQuality

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetQuality(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `QualitySet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.QualitySet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.QualitySet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.QualitySet", function(payload)
    greg.log("Hook greg.UI.QualitySet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.QualitySet fired")

greg.on("greg.UI.QualitySet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.QualitySet", (payload) => {
    console.log("Hook greg.UI.QualitySet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.QualitySet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.QualitySet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.QualitySet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
