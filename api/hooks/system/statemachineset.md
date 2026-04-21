---
title: StateMachineSet
description: Documentation for greg.SYSTEM.StateMachineSet
path: /api/hooks/system/statemachineset
---

# StateMachineSet

> **Hook ID:** `greg.SYSTEM.StateMachineSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/_Start_d__15.SetStateMachine

## Native Signature
```csharp
Il2Cpp._Start_d__15::SetStateMachine(IAsyncStateMachine)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StateMachineSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StateMachineSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StateMachineSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StateMachineSet", function(payload)
    greg.log("Hook greg.SYSTEM.StateMachineSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StateMachineSet fired")

greg.on("greg.SYSTEM.StateMachineSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StateMachineSet", (payload) => {
    console.log("Hook greg.SYSTEM.StateMachineSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StateMachineSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StateMachineSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StateMachineSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
