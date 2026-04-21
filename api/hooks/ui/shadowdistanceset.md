---
title: ShadowDistanceSet
description: Documentation for greg.UI.ShadowDistanceSet
path: /api/hooks/ui/shadowdistanceset
---

# ShadowDistanceSet

> **Hook ID:** `greg.UI.ShadowDistanceSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetShadowDistance

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetShadowDistance(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShadowDistanceSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ShadowDistanceSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ShadowDistanceSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ShadowDistanceSet", function(payload)
    greg.log("Hook greg.UI.ShadowDistanceSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ShadowDistanceSet fired")

greg.on("greg.UI.ShadowDistanceSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ShadowDistanceSet", (payload) => {
    console.log("Hook greg.UI.ShadowDistanceSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ShadowDistanceSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ShadowDistanceSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ShadowDistanceSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
