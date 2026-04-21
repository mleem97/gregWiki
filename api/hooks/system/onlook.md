---
title: OnLook
description: Documentation for greg.SYSTEM.OnLook
path: /api/hooks/system/onlook
---

# OnLook

> **Hook ID:** `greg.SYSTEM.OnLook`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnLook

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnLook(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLook` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnLook", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnLook");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnLook", function(payload)
    greg.log("Hook greg.SYSTEM.OnLook received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnLook fired")

greg.on("greg.SYSTEM.OnLook", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnLook", (payload) => {
    console.log("Hook greg.SYSTEM.OnLook triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnLook".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnLook", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnLook fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
