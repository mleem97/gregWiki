---
title: MarkerSet
description: Documentation for greg.SYSTEM.MarkerSet
path: /api/hooks/system/markerset
---

# MarkerSet

> **Hook ID:** `greg.SYSTEM.MarkerSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.SetMarker

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::SetMarker(Image, Vector2, bool, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MarkerSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MarkerSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MarkerSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MarkerSet", function(payload)
    greg.log("Hook greg.SYSTEM.MarkerSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MarkerSet fired")

greg.on("greg.SYSTEM.MarkerSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MarkerSet", (payload) => {
    console.log("Hook greg.SYSTEM.MarkerSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MarkerSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MarkerSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MarkerSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
