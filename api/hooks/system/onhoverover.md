---
title: OnHoverOver
description: Documentation for greg.SYSTEM.OnHoverOver
path: /api/hooks/system/onhoverover
---

# OnHoverOver

> **Hook ID:** `greg.SYSTEM.OnHoverOver`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WorldObjectButton.OnHoverOver

## Native Signature
```csharp
Il2Cpp.WorldObjectButton::OnHoverOver()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnHoverOver` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnHoverOver", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnHoverOver");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnHoverOver", function(payload)
    greg.log("Hook greg.SYSTEM.OnHoverOver received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnHoverOver fired")

greg.on("greg.SYSTEM.OnHoverOver", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnHoverOver", (payload) => {
    console.log("Hook greg.SYSTEM.OnHoverOver triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnHoverOver".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnHoverOver", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnHoverOver fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
