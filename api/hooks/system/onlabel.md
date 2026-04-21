---
title: OnLabel
description: Documentation for greg.SYSTEM.OnLabel
path: /api/hooks/system/onlabel
---

# OnLabel

> **Hook ID:** `greg.SYSTEM.OnLabel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnLabel

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnLabel(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLabel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnLabel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnLabel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnLabel", function(payload)
    greg.log("Hook greg.SYSTEM.OnLabel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnLabel fired")

greg.on("greg.SYSTEM.OnLabel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnLabel", (payload) => {
    console.log("Hook greg.SYSTEM.OnLabel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnLabel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnLabel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnLabel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
