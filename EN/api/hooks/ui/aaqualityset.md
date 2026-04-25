---
title: AAQualitySet
description: Documentation for greg.UI.AAQualitySet
path: /api/hooks/ui/aaqualityset
---

# AAQualitySet

> **Hook ID:** `greg.UI.AAQualitySet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetAAQuality

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetAAQuality(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AAQualitySet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AAQualitySet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AAQualitySet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AAQualitySet", function(payload)
    greg.log("Hook greg.UI.AAQualitySet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AAQualitySet fired")

greg.on("greg.UI.AAQualitySet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AAQualitySet", (payload) => {
    console.log("Hook greg.UI.AAQualitySet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AAQualitySet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AAQualitySet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AAQualitySet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
