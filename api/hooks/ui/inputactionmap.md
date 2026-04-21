---
title: InputActionMap
description: Documentation for greg.UI.InputActionMap
path: /api/hooks/ui/inputactionmap
---

# InputActionMap

> **Hook ID:** `greg.UI.InputActionMap`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UIActions.InputActionMap

## Native Signature
```csharp
Il2Cpp.UIActions::InputActionMap(InputController.UIActions)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InputActionMap` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.InputActionMap", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.InputActionMap");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.InputActionMap", function(payload)
    greg.log("Hook greg.UI.InputActionMap received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.InputActionMap fired")

greg.on("greg.UI.InputActionMap", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.InputActionMap", (payload) => {
    console.log("Hook greg.UI.InputActionMap triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.InputActionMap".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.InputActionMap", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.InputActionMap fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
