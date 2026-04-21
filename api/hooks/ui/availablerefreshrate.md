---
title: AvailableRefreshRate
description: Documentation for greg.UI.AvailableRefreshRate
path: /api/hooks/ui/availablerefreshrate
---

# AvailableRefreshRate

> **Hook ID:** `greg.UI.AvailableRefreshRate`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.AvailableRefreshRate

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::AvailableRefreshRate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AvailableRefreshRate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AvailableRefreshRate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AvailableRefreshRate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AvailableRefreshRate", function(payload)
    greg.log("Hook greg.UI.AvailableRefreshRate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AvailableRefreshRate fired")

greg.on("greg.UI.AvailableRefreshRate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AvailableRefreshRate", (payload) => {
    console.log("Hook greg.UI.AvailableRefreshRate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AvailableRefreshRate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AvailableRefreshRate", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AvailableRefreshRate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
