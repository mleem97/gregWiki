---
title: TurnBackOnCollidersInTRolley
description: Documentation for greg.SYSTEM.TurnBackOnCollidersInTRolley
path: /api/hooks/system/turnbackoncollidersintrolley
---

# TurnBackOnCollidersInTRolley

> **Hook ID:** `greg.SYSTEM.TurnBackOnCollidersInTRolley`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.TurnBackOnCollidersInTRolley

## Native Signature
```csharp
Il2Cpp.CarController::TurnBackOnCollidersInTRolley()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TurnBackOnCollidersInTRolley` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TurnBackOnCollidersInTRolley", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TurnBackOnCollidersInTRolley");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TurnBackOnCollidersInTRolley", function(payload)
    greg.log("Hook greg.SYSTEM.TurnBackOnCollidersInTRolley received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TurnBackOnCollidersInTRolley fired")

greg.on("greg.SYSTEM.TurnBackOnCollidersInTRolley", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TurnBackOnCollidersInTRolley", (payload) => {
    console.log("Hook greg.SYSTEM.TurnBackOnCollidersInTRolley triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TurnBackOnCollidersInTRolley".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TurnBackOnCollidersInTRolley", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TurnBackOnCollidersInTRolley fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
