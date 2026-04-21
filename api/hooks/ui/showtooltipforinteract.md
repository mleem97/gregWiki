---
title: ShowTooltipForInteract
description: Documentation for greg.UI.ShowTooltipForInteract
path: /api/hooks/ui/showtooltipforinteract
---

# ShowTooltipForInteract

> **Hook ID:** `greg.UI.ShowTooltipForInteract`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ToolTipInteract.ShowTooltipForInteract

## Native Signature
```csharp
Il2Cpp.ToolTipInteract::ShowTooltipForInteract(string, Sprite)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowTooltipForInteract` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ShowTooltipForInteract", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ShowTooltipForInteract");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ShowTooltipForInteract", function(payload)
    greg.log("Hook greg.UI.ShowTooltipForInteract received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ShowTooltipForInteract fired")

greg.on("greg.UI.ShowTooltipForInteract", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ShowTooltipForInteract", (payload) => {
    console.log("Hook greg.UI.ShowTooltipForInteract triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ShowTooltipForInteract".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ShowTooltipForInteract", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ShowTooltipForInteract fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
