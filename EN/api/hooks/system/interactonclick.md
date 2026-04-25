---
title: InteractOnClick
description: Documentation for greg.SYSTEM.InteractOnClick
path: /api/hooks/system/interactonclick
---

# InteractOnClick

> **Hook ID:** `greg.SYSTEM.InteractOnClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WorldObjectButton.InteractOnClick

## Native Signature
```csharp
Il2Cpp.WorldObjectButton::InteractOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InteractOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InteractOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InteractOnClick", function(payload)
    greg.log("Hook greg.SYSTEM.InteractOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InteractOnClick fired")

greg.on("greg.SYSTEM.InteractOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InteractOnClick", (payload) => {
    console.log("Hook greg.SYSTEM.InteractOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InteractOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InteractOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InteractOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
