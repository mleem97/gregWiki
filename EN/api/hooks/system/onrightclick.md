---
title: OnRightClick
description: Documentation for greg.SYSTEM.OnRightClick
path: /api/hooks/system/onrightclick
---

# OnRightClick

> **Hook ID:** `greg.SYSTEM.OnRightClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnRightClick

## Native Signature
```csharp
Il2Cpp.IUIActions::OnRightClick(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnRightClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnRightClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnRightClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnRightClick", function(payload)
    greg.log("Hook greg.SYSTEM.OnRightClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnRightClick fired")

greg.on("greg.SYSTEM.OnRightClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnRightClick", (payload) => {
    console.log("Hook greg.SYSTEM.OnRightClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnRightClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnRightClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnRightClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
