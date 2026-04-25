---
title: MakeInteractableAgain
description: Documentation for greg.SYSTEM.MakeInteractableAgain
path: /api/hooks/system/makeinteractableagain
---

# MakeInteractableAgain

> **Hook ID:** `greg.SYSTEM.MakeInteractableAgain`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject.MakeInteractableAgain

## Native Signature
```csharp
Il2Cpp.UsableObject::MakeInteractableAgain()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MakeInteractableAgain` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MakeInteractableAgain", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MakeInteractableAgain");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MakeInteractableAgain", function(payload)
    greg.log("Hook greg.SYSTEM.MakeInteractableAgain received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MakeInteractableAgain fired")

greg.on("greg.SYSTEM.MakeInteractableAgain", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MakeInteractableAgain", (payload) => {
    console.log("Hook greg.SYSTEM.MakeInteractableAgain triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MakeInteractableAgain".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MakeInteractableAgain", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MakeInteractableAgain fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
