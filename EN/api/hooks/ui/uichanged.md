---
title: UIChanged
description: Documentation for greg.UI.UIChanged
path: /api/hooks/ui/uichanged
---

# UIChanged

> **Hook ID:** `greg.UI.UIChanged`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ReBindUI.UpdateUI

## Native Signature
```csharp
Il2Cpp.ReBindUI::UpdateUI()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UIChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.UIChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.UIChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.UIChanged", function(payload)
    greg.log("Hook greg.UI.UIChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.UIChanged fired")

greg.on("greg.UI.UIChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.UIChanged", (payload) => {
    console.log("Hook greg.UI.UIChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.UIChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.UIChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.UIChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
