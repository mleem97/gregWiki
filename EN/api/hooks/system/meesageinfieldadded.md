---
title: MeesageInFieldAdded
description: Documentation for greg.SYSTEM.MeesageInFieldAdded
path: /api/hooks/system/meesageinfieldadded
---

# MeesageInFieldAdded

> **Hook ID:** `greg.SYSTEM.MeesageInFieldAdded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.AddMeesageInField

## Native Signature
```csharp
Il2Cpp.StaticUIElements::AddMeesageInField(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MeesageInFieldAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MeesageInFieldAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MeesageInFieldAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MeesageInFieldAdded", function(payload)
    greg.log("Hook greg.SYSTEM.MeesageInFieldAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MeesageInFieldAdded fired")

greg.on("greg.SYSTEM.MeesageInFieldAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MeesageInFieldAdded", (payload) => {
    console.log("Hook greg.SYSTEM.MeesageInFieldAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MeesageInFieldAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MeesageInFieldAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MeesageInFieldAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
