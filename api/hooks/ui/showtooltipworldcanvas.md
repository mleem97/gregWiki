---
title: ShowTooltipWorldCanvas
description: Documentation for greg.UI.ShowTooltipWorldCanvas
path: /api/hooks/ui/showtooltipworldcanvas
---

# ShowTooltipWorldCanvas

> **Hook ID:** `greg.UI.ShowTooltipWorldCanvas`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tooltip.ShowTooltipWorldCanvas

## Native Signature
```csharp
Il2Cpp.Tooltip::ShowTooltipWorldCanvas(string, RectTransform, Camera)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowTooltipWorldCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ShowTooltipWorldCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ShowTooltipWorldCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ShowTooltipWorldCanvas", function(payload)
    greg.log("Hook greg.UI.ShowTooltipWorldCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ShowTooltipWorldCanvas fired")

greg.on("greg.UI.ShowTooltipWorldCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ShowTooltipWorldCanvas", (payload) => {
    console.log("Hook greg.UI.ShowTooltipWorldCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ShowTooltipWorldCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ShowTooltipWorldCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ShowTooltipWorldCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
