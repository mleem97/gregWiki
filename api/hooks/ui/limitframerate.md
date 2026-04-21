---
title: LimitFrameRate
description: Documentation for greg.UI.LimitFrameRate
path: /api/hooks/ui/limitframerate
---

# LimitFrameRate

> **Hook ID:** `greg.UI.LimitFrameRate`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.LimitFrameRate

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::LimitFrameRate(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LimitFrameRate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.LimitFrameRate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.LimitFrameRate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.LimitFrameRate", function(payload)
    greg.log("Hook greg.UI.LimitFrameRate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.LimitFrameRate fired")

greg.on("greg.UI.LimitFrameRate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.LimitFrameRate", (payload) => {
    console.log("Hook greg.UI.LimitFrameRate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.LimitFrameRate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.LimitFrameRate", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.LimitFrameRate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
