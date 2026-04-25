---
title: DestroyErrorWarningSign
description: Documentation for greg.SYSTEM.DestroyErrorWarningSign
path: /api/hooks/system/destroyerrorwarningsign
---

# DestroyErrorWarningSign

> **Hook ID:** `greg.SYSTEM.DestroyErrorWarningSign`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.DestroyErrorWarningSign

## Native Signature
```csharp
Il2Cpp.StaticUIElements::DestroyErrorWarningSign(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DestroyErrorWarningSign` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DestroyErrorWarningSign", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DestroyErrorWarningSign");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DestroyErrorWarningSign", function(payload)
    greg.log("Hook greg.SYSTEM.DestroyErrorWarningSign received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DestroyErrorWarningSign fired")

greg.on("greg.SYSTEM.DestroyErrorWarningSign", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DestroyErrorWarningSign", (payload) => {
    console.log("Hook greg.SYSTEM.DestroyErrorWarningSign triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DestroyErrorWarningSign".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DestroyErrorWarningSign", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DestroyErrorWarningSign fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
