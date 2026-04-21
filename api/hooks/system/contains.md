---
title: Contains
description: Documentation for greg.SYSTEM.Contains
path: /api/hooks/system/contains
---

# Contains

> **Hook ID:** `greg.SYSTEM.Contains`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputController.Contains

## Native Signature
```csharp
Il2Cpp.InputController::Contains(InputAction)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Contains` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Contains", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Contains");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Contains", function(payload)
    greg.log("Hook greg.SYSTEM.Contains received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Contains fired")

greg.on("greg.SYSTEM.Contains", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Contains", (payload) => {
    console.log("Hook greg.SYSTEM.Contains triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Contains".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Contains", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Contains fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
