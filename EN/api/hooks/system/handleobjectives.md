---
title: HandleObjectives
description: Documentation for greg.SYSTEM.HandleObjectives
path: /api/hooks/system/handleobjectives
---

# HandleObjectives

> **Hook ID:** `greg.SYSTEM.HandleObjectives`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.HandleObjectives

## Native Signature
```csharp
Il2Cpp.ComputerShop::HandleObjectives(PlayerManager.ObjectInHand)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HandleObjectives` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HandleObjectives", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HandleObjectives");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HandleObjectives", function(payload)
    greg.log("Hook greg.SYSTEM.HandleObjectives received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HandleObjectives fired")

greg.on("greg.SYSTEM.HandleObjectives", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HandleObjectives", (payload) => {
    console.log("Hook greg.SYSTEM.HandleObjectives triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HandleObjectives".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HandleObjectives", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HandleObjectives fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
