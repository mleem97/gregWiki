---
title: Step
description: Documentation for greg.SYSTEM.Step
path: /api/hooks/system/step
---

# Step

> **Hook ID:** `greg.SYSTEM.Step`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FootSteps.Step

## Native Signature
```csharp
Il2Cpp.FootSteps::Step()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Step` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Step", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Step");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Step", function(payload)
    greg.log("Hook greg.SYSTEM.Step received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Step fired")

greg.on("greg.SYSTEM.Step", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Step", (payload) => {
    console.log("Hook greg.SYSTEM.Step triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Step".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Step", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Step fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
