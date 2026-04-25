---
title: OnClick
description: Documentation for greg.SYSTEM.OnClick
path: /api/hooks/system/onclick
---

# OnClick

> **Hook ID:** `greg.SYSTEM.OnClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnClick

## Native Signature
```csharp
Il2Cpp.IUIActions::OnClick(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnClick", function(payload)
    greg.log("Hook greg.SYSTEM.OnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnClick fired")

greg.on("greg.SYSTEM.OnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnClick", (payload) => {
    console.log("Hook greg.SYSTEM.OnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
