---
title: OnMap
description: Documentation for greg.SYSTEM.OnMap
path: /api/hooks/system/onmap
---

# OnMap

> **Hook ID:** `greg.SYSTEM.OnMap`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IUIActions.OnMap

## Native Signature
```csharp
Il2Cpp.IUIActions::OnMap(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnMap` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnMap", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnMap");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnMap", function(payload)
    greg.log("Hook greg.SYSTEM.OnMap received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnMap fired")

greg.on("greg.SYSTEM.OnMap", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnMap", (payload) => {
    console.log("Hook greg.SYSTEM.OnMap triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnMap".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnMap", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnMap fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
