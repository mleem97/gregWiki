---
title: CallbacksRemoved
description: Documentation for greg.UI.CallbacksRemoved
path: /api/hooks/ui/callbacksremoved
---

# CallbacksRemoved

> **Hook ID:** `greg.UI.CallbacksRemoved`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UIActions.RemoveCallbacks

## Native Signature
```csharp
Il2Cpp.UIActions::RemoveCallbacks(InputController.IUIActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CallbacksRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.CallbacksRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.CallbacksRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.CallbacksRemoved", function(payload)
    greg.log("Hook greg.UI.CallbacksRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.CallbacksRemoved fired")

greg.on("greg.UI.CallbacksRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.CallbacksRemoved", (payload) => {
    console.log("Hook greg.UI.CallbacksRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.CallbacksRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.CallbacksRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.CallbacksRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
