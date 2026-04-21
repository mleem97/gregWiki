---
title: OnPointerEnter
description: Documentation for greg.UI.OnPointerEnter
path: /api/hooks/ui/onpointerenter
---

# OnPointerEnter

> **Hook ID:** `greg.UI.OnPointerEnter`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ToolTipOnUIText.OnPointerEnter

## Native Signature
```csharp
Il2Cpp.ToolTipOnUIText::OnPointerEnter(PointerEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPointerEnter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnPointerEnter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnPointerEnter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnPointerEnter", function(payload)
    greg.log("Hook greg.UI.OnPointerEnter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnPointerEnter fired")

greg.on("greg.UI.OnPointerEnter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnPointerEnter", (payload) => {
    console.log("Hook greg.UI.OnPointerEnter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnPointerEnter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnPointerEnter", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnPointerEnter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
