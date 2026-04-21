---
title: UnregisterCallbacks
description: Documentation for greg.UI.UnregisterCallbacks
path: /api/hooks/ui/unregistercallbacks
---

# UnregisterCallbacks

> **Hook ID:** `greg.UI.UnregisterCallbacks`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UIActions.UnregisterCallbacks

## Native Signature
```csharp
Il2Cpp.UIActions::UnregisterCallbacks(InputController.IUIActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UnregisterCallbacks` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.UnregisterCallbacks", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.UnregisterCallbacks");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.UnregisterCallbacks", function(payload)
    greg.log("Hook greg.UI.UnregisterCallbacks received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.UnregisterCallbacks fired")

greg.on("greg.UI.UnregisterCallbacks", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.UnregisterCallbacks", (payload) => {
    console.log("Hook greg.UI.UnregisterCallbacks triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.UnregisterCallbacks".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.UnregisterCallbacks", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.UnregisterCallbacks fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
