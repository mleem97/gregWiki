---
title: OnPointerExit
description: Documentation for greg.UI.OnPointerExit
path: /api/hooks/ui/onpointerexit
---

# OnPointerExit

> **Hook ID:** `greg.UI.OnPointerExit`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ToolTipOnUIText.OnPointerExit

## Native Signature
```csharp
Il2Cpp.ToolTipOnUIText::OnPointerExit(PointerEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPointerExit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnPointerExit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnPointerExit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnPointerExit", function(payload)
    greg.log("Hook greg.UI.OnPointerExit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnPointerExit fired")

greg.on("greg.UI.OnPointerExit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnPointerExit", (payload) => {
    console.log("Hook greg.UI.OnPointerExit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnPointerExit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnPointerExit", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnPointerExit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
