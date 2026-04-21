---
title: ProgressStepCycle
description: Documentation for greg.SYSTEM.ProgressStepCycle
path: /api/hooks/system/progressstepcycle
---

# ProgressStepCycle

> **Hook ID:** `greg.SYSTEM.ProgressStepCycle`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.ProgressStepCycle

## Native Signature
```csharp
Il2Cpp.FirstPersonController::ProgressStepCycle(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ProgressStepCycle` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ProgressStepCycle", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ProgressStepCycle");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ProgressStepCycle", function(payload)
    greg.log("Hook greg.SYSTEM.ProgressStepCycle received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ProgressStepCycle fired")

greg.on("greg.SYSTEM.ProgressStepCycle", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ProgressStepCycle", (payload) => {
    console.log("Hook greg.SYSTEM.ProgressStepCycle triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ProgressStepCycle".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ProgressStepCycle", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ProgressStepCycle fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
