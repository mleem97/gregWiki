---
title: CallbacksSet
description: Documentation for greg.UI.CallbacksSet
path: /api/hooks/ui/callbacksset
---

# CallbacksSet

> **Hook ID:** `greg.UI.CallbacksSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UIActions.SetCallbacks

## Native Signature
```csharp
Il2Cpp.UIActions::SetCallbacks(InputController.IUIActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CallbacksSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.CallbacksSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.CallbacksSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.CallbacksSet", function(payload)
    greg.log("Hook greg.UI.CallbacksSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.CallbacksSet fired")

greg.on("greg.UI.CallbacksSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.CallbacksSet", (payload) => {
    console.log("Hook greg.UI.CallbacksSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.CallbacksSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.CallbacksSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.CallbacksSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
