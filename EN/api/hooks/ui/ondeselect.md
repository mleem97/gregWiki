---
title: OnDeselect
description: Documentation for greg.UI.OnDeselect
path: /api/hooks/ui/ondeselect
---

# OnDeselect

> **Hook ID:** `greg.UI.OnDeselect`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ToolTipOnUIText.OnDeselect

## Native Signature
```csharp
Il2Cpp.ToolTipOnUIText::OnDeselect()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDeselect` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnDeselect", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnDeselect");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnDeselect", function(payload)
    greg.log("Hook greg.UI.OnDeselect received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnDeselect fired")

greg.on("greg.UI.OnDeselect", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnDeselect", (payload) => {
    console.log("Hook greg.UI.OnDeselect triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnDeselect".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnDeselect", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnDeselect fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
