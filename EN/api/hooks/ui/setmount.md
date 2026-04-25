---
title: setmount
description: Documentation for greg.UI.setmount
path: /api/hooks/ui/setmount
---

# setmount

> **Hook ID:** `greg.UI.setmount`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainMenuCamera.setmount

## Native Signature
```csharp
Il2Cpp.MainMenuCamera::setmount(Transform)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `setmount` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.setmount", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.setmount");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.setmount", function(payload)
    greg.log("Hook greg.UI.setmount received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.setmount fired")

greg.on("greg.UI.setmount", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.setmount", (payload) => {
    console.log("Hook greg.UI.setmount triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.setmount".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.setmount", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.setmount fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
