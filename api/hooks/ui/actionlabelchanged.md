---
title: ActionLabelChanged
description: Documentation for greg.UI.ActionLabelChanged
path: /api/hooks/ui/actionlabelchanged
---

# ActionLabelChanged

> **Hook ID:** `greg.UI.ActionLabelChanged`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RebindUIv2.UpdateActionLabel

## Native Signature
```csharp
Il2Cpp.RebindUIv2::UpdateActionLabel()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ActionLabelChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ActionLabelChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ActionLabelChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ActionLabelChanged", function(payload)
    greg.log("Hook greg.UI.ActionLabelChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ActionLabelChanged fired")

greg.on("greg.UI.ActionLabelChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ActionLabelChanged", (payload) => {
    console.log("Hook greg.UI.ActionLabelChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ActionLabelChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ActionLabelChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ActionLabelChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
