---
title: CheckForErrors
description: Documentation for greg.SYSTEM.CheckForErrors
path: /api/hooks/system/checkforerrors
---

# CheckForErrors

> **Hook ID:** `greg.SYSTEM.CheckForErrors`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TypeHandle.CheckForErrors

## Native Signature
```csharp
Il2Cpp.TypeHandle::CheckForErrors(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CheckForErrors` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CheckForErrors", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CheckForErrors");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CheckForErrors", function(payload)
    greg.log("Hook greg.SYSTEM.CheckForErrors received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CheckForErrors fired")

greg.on("greg.SYSTEM.CheckForErrors", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CheckForErrors", (payload) => {
    console.log("Hook greg.SYSTEM.CheckForErrors triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CheckForErrors".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CheckForErrors", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CheckForErrors fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
