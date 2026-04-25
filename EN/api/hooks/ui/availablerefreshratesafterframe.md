---
title: AvailableRefreshRatesAfterFrame
description: Documentation for greg.UI.AvailableRefreshRatesAfterFrame
path: /api/hooks/ui/availablerefreshratesafterframe
---

# AvailableRefreshRatesAfterFrame

> **Hook ID:** `greg.UI.AvailableRefreshRatesAfterFrame`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.AvailableRefreshRatesAfterFrame

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::AvailableRefreshRatesAfterFrame()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AvailableRefreshRatesAfterFrame` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AvailableRefreshRatesAfterFrame", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AvailableRefreshRatesAfterFrame");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AvailableRefreshRatesAfterFrame", function(payload)
    greg.log("Hook greg.UI.AvailableRefreshRatesAfterFrame received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AvailableRefreshRatesAfterFrame fired")

greg.on("greg.UI.AvailableRefreshRatesAfterFrame", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AvailableRefreshRatesAfterFrame", (payload) => {
    console.log("Hook greg.UI.AvailableRefreshRatesAfterFrame triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AvailableRefreshRatesAfterFrame".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AvailableRefreshRatesAfterFrame", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AvailableRefreshRatesAfterFrame fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
