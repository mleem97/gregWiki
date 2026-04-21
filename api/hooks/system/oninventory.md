---
title: OnInventory
description: Documentation for greg.SYSTEM.OnInventory
path: /api/hooks/system/oninventory
---

# OnInventory

> **Hook ID:** `greg.SYSTEM.OnInventory`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnInventory

## Native Signature
```csharp
Il2Cpp.IUIActions::OnInventory(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnInventory` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnInventory", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnInventory");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnInventory", function(payload)
    greg.log("Hook greg.SYSTEM.OnInventory received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnInventory fired")

greg.on("greg.SYSTEM.OnInventory", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnInventory", (payload) => {
    console.log("Hook greg.SYSTEM.OnInventory triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnInventory".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnInventory", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnInventory fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
