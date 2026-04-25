---
title: CallbacksAdded
description: Documentation for greg.UI.CallbacksAdded
path: /api/hooks/ui/callbacksadded
---

# CallbacksAdded

> **Hook ID:** `greg.UI.CallbacksAdded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UIActions.AddCallbacks

## Native Signature
```csharp
Il2Cpp.UIActions::AddCallbacks(InputController.IUIActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CallbacksAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.CallbacksAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.CallbacksAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.CallbacksAdded", function(payload)
    greg.log("Hook greg.UI.CallbacksAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.CallbacksAdded fired")

greg.on("greg.UI.CallbacksAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.CallbacksAdded", (payload) => {
    console.log("Hook greg.UI.CallbacksAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.CallbacksAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.CallbacksAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.CallbacksAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
