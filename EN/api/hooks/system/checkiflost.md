---
title: CheckIfLost
description: Documentation for greg.SYSTEM.CheckIfLost
path: /api/hooks/system/checkiflost
---

# CheckIfLost

> **Hook ID:** `greg.SYSTEM.CheckIfLost`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject.CheckIfLost

## Native Signature
```csharp
Il2Cpp.UsableObject::CheckIfLost()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CheckIfLost` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CheckIfLost", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CheckIfLost");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CheckIfLost", function(payload)
    greg.log("Hook greg.SYSTEM.CheckIfLost received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CheckIfLost fired")

greg.on("greg.SYSTEM.CheckIfLost", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CheckIfLost", (payload) => {
    console.log("Hook greg.SYSTEM.CheckIfLost triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CheckIfLost".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CheckIfLost", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CheckIfLost fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
