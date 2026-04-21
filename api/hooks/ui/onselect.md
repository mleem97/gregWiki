---
title: OnSelect
description: Documentation for greg.UI.OnSelect
path: /api/hooks/ui/onselect
---

# OnSelect

> **Hook ID:** `greg.UI.OnSelect`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ToolTipOnUIText.OnSelect

## Native Signature
```csharp
Il2Cpp.ToolTipOnUIText::OnSelect()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnSelect` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnSelect", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnSelect");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnSelect", function(payload)
    greg.log("Hook greg.UI.OnSelect received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnSelect fired")

greg.on("greg.UI.OnSelect", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnSelect", (payload) => {
    console.log("Hook greg.UI.OnSelect triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnSelect".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnSelect", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnSelect fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
