---
title: MarkersChanged
description: Documentation for greg.SYSTEM.MarkersChanged
path: /api/hooks/system/markerschanged
---

# MarkersChanged

> **Hook ID:** `greg.SYSTEM.MarkersChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FlexibleColorPicker.UpdateMarkers

## Native Signature
```csharp
Il2Cpp.FlexibleColorPicker::UpdateMarkers()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MarkersChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MarkersChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MarkersChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MarkersChanged", function(payload)
    greg.log("Hook greg.SYSTEM.MarkersChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MarkersChanged fired")

greg.on("greg.SYSTEM.MarkersChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MarkersChanged", (payload) => {
    console.log("Hook greg.SYSTEM.MarkersChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MarkersChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MarkersChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MarkersChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
