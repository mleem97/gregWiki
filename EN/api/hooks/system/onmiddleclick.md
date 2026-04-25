---
title: OnMiddleClick
description: Documentation for greg.SYSTEM.OnMiddleClick
path: /api/hooks/system/onmiddleclick
---

# OnMiddleClick

> **Hook ID:** `greg.SYSTEM.OnMiddleClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnMiddleClick

## Native Signature
```csharp
Il2Cpp.IUIActions::OnMiddleClick(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnMiddleClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnMiddleClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnMiddleClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnMiddleClick", function(payload)
    greg.log("Hook greg.SYSTEM.OnMiddleClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnMiddleClick fired")

greg.on("greg.SYSTEM.OnMiddleClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnMiddleClick", (payload) => {
    console.log("Hook greg.SYSTEM.OnMiddleClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnMiddleClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnMiddleClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnMiddleClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
