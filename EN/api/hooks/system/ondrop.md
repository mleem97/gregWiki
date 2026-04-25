---
title: OnDrop
description: Documentation for greg.SYSTEM.OnDrop
path: /api/hooks/system/ondrop
---

# OnDrop

> **Hook ID:** `greg.SYSTEM.OnDrop`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnDrop

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnDrop(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDrop` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnDrop", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnDrop");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnDrop", function(payload)
    greg.log("Hook greg.SYSTEM.OnDrop received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnDrop fired")

greg.on("greg.SYSTEM.OnDrop", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnDrop", (payload) => {
    console.log("Hook greg.SYSTEM.OnDrop triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnDrop".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnDrop", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnDrop fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
