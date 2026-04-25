---
title: UnlockFromSave
description: Documentation for greg.SYSTEM.UnlockFromSave
path: /api/hooks/system/unlockfromsave
---

# UnlockFromSave

> **Hook ID:** `greg.SYSTEM.UnlockFromSave`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.UnlockFromSave

## Native Signature
```csharp
Il2Cpp.ComputerShop::UnlockFromSave(Dictionary<string, bool>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UnlockFromSave` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.UnlockFromSave", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.UnlockFromSave");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.UnlockFromSave", function(payload)
    greg.log("Hook greg.SYSTEM.UnlockFromSave received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.UnlockFromSave fired")

greg.on("greg.SYSTEM.UnlockFromSave", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.UnlockFromSave", (payload) => {
    console.log("Hook greg.SYSTEM.UnlockFromSave triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.UnlockFromSave".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.UnlockFromSave", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.UnlockFromSave fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
