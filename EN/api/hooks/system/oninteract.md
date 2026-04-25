---
title: OnInteract
description: Documentation for greg.SYSTEM.OnInteract
path: /api/hooks/system/oninteract
---

# OnInteract

> **Hook ID:** `greg.SYSTEM.OnInteract`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IPlayerActions.OnInteract

## Native Signature
```csharp
Il2Cpp.IPlayerActions::OnInteract(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnInteract` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnInteract", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnInteract");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnInteract", function(payload)
    greg.log("Hook greg.SYSTEM.OnInteract received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnInteract fired")

greg.on("greg.SYSTEM.OnInteract", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnInteract", (payload) => {
    console.log("Hook greg.SYSTEM.OnInteract triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnInteract".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnInteract", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnInteract fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
