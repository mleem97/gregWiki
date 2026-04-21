---
title: BindingDisplayChanged
description: Documentation for greg.UI.BindingDisplayChanged
path: /api/hooks/ui/bindingdisplaychanged
---

# BindingDisplayChanged

> **Hook ID:** `greg.UI.BindingDisplayChanged`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RebindUIv2.UpdateBindingDisplay

## Native Signature
```csharp
Il2Cpp.RebindUIv2::UpdateBindingDisplay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BindingDisplayChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.BindingDisplayChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.BindingDisplayChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.BindingDisplayChanged", function(payload)
    greg.log("Hook greg.UI.BindingDisplayChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.BindingDisplayChanged fired")

greg.on("greg.UI.BindingDisplayChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.BindingDisplayChanged", (payload) => {
    console.log("Hook greg.UI.BindingDisplayChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.BindingDisplayChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.BindingDisplayChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.BindingDisplayChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
