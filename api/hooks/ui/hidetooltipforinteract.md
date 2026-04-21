---
title: HideTooltipForInteract
description: Documentation for greg.UI.HideTooltipForInteract
path: /api/hooks/ui/hidetooltipforinteract
---

# HideTooltipForInteract

> **Hook ID:** `greg.UI.HideTooltipForInteract`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ToolTipInteract.HideTooltipForInteract

## Native Signature
```csharp
Il2Cpp.ToolTipInteract::HideTooltipForInteract()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HideTooltipForInteract` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.HideTooltipForInteract", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.HideTooltipForInteract");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.HideTooltipForInteract", function(payload)
    greg.log("Hook greg.UI.HideTooltipForInteract received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.HideTooltipForInteract fired")

greg.on("greg.UI.HideTooltipForInteract", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.HideTooltipForInteract", (payload) => {
    console.log("Hook greg.UI.HideTooltipForInteract triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.HideTooltipForInteract".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.HideTooltipForInteract", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.HideTooltipForInteract fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
