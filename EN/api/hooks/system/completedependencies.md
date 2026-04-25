---
title: CompleteDependencies
description: Documentation for greg.SYSTEM.CompleteDependencies
path: /api/hooks/system/completedependencies
---

# CompleteDependencies

> **Hook ID:** `greg.SYSTEM.CompleteDependencies`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Enumerator.CompleteDependencies

## Native Signature
```csharp
Il2Cpp.Enumerator::CompleteDependencies(SystemState)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CompleteDependencies` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CompleteDependencies", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CompleteDependencies");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CompleteDependencies", function(payload)
    greg.log("Hook greg.SYSTEM.CompleteDependencies received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CompleteDependencies fired")

greg.on("greg.SYSTEM.CompleteDependencies", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CompleteDependencies", (payload) => {
    console.log("Hook greg.SYSTEM.CompleteDependencies triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CompleteDependencies".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CompleteDependencies", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CompleteDependencies fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
