---
title: ToolTip
description: Documentation for greg.UI.ToolTip
path: /api/hooks/ui/tooltip
---

# ToolTip

> **Hook ID:** `greg.UI.ToolTip`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ToolTipOnUIText.ToolTip

## Native Signature
```csharp
Il2Cpp.ToolTipOnUIText::ToolTip()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ToolTip` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ToolTip", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ToolTip");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ToolTip", function(payload)
    greg.log("Hook greg.UI.ToolTip received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ToolTip fired")

greg.on("greg.UI.ToolTip", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ToolTip", (payload) => {
    console.log("Hook greg.UI.ToolTip triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ToolTip".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ToolTip", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ToolTip fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
