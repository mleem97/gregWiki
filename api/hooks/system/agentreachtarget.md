---
title: AgentReachTarget
description: Documentation for greg.SYSTEM.AgentReachTarget
path: /api/hooks/system/agentreachtarget
---

# AgentReachTarget

> **Hook ID:** `greg.SYSTEM.AgentReachTarget`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterControl.AgentReachTarget

## Native Signature
```csharp
Il2Cpp.AICharacterControl::AgentReachTarget()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AgentReachTarget` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AgentReachTarget", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AgentReachTarget");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AgentReachTarget", function(payload)
    greg.log("Hook greg.SYSTEM.AgentReachTarget received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AgentReachTarget fired")

greg.on("greg.SYSTEM.AgentReachTarget", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AgentReachTarget", (payload) => {
    console.log("Hook greg.SYSTEM.AgentReachTarget triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AgentReachTarget".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AgentReachTarget", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AgentReachTarget fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
