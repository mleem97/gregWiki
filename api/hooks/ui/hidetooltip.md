---
title: HideTooltip
description: Documentation for greg.UI.HideTooltip
path: /api/hooks/ui/hidetooltip
---

# HideTooltip

> **Hook ID:** `greg.UI.HideTooltip`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tooltip.HideTooltip

## Native Signature
```csharp
Il2Cpp.Tooltip::HideTooltip()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HideTooltip` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.HideTooltip", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.HideTooltip");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.HideTooltip", function(payload)
    greg.log("Hook greg.UI.HideTooltip received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.HideTooltip fired")

greg.on("greg.UI.HideTooltip", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.HideTooltip", (payload) => {
    console.log("Hook greg.UI.HideTooltip triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.HideTooltip".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.HideTooltip", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.HideTooltip fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
