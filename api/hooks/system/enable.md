---
title: Enable
description: Documentation for greg.SYSTEM.Enable
path: /api/hooks/system/enable
---

# Enable

> **Hook ID:** `greg.SYSTEM.Enable`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputController.Enable

## Native Signature
```csharp
Il2Cpp.InputController::Enable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Enable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Enable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Enable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Enable", function(payload)
    greg.log("Hook greg.SYSTEM.Enable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Enable fired")

greg.on("greg.SYSTEM.Enable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Enable", (payload) => {
    console.log("Hook greg.SYSTEM.Enable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Enable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Enable", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Enable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
