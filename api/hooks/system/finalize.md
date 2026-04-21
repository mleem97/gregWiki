---
title: Finalize
description: Documentation for greg.SYSTEM.Finalize
path: /api/hooks/system/finalize
---

# Finalize

> **Hook ID:** `greg.SYSTEM.Finalize`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputController.Finalize

## Native Signature
```csharp
Il2Cpp.InputController::Finalize()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Finalize` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Finalize", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Finalize");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Finalize", function(payload)
    greg.log("Hook greg.SYSTEM.Finalize received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Finalize fired")

greg.on("greg.SYSTEM.Finalize", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Finalize", (payload) => {
    console.log("Hook greg.SYSTEM.Finalize triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Finalize".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Finalize", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Finalize fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
