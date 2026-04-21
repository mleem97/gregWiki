---
title: ButtonChosenColor
description: Documentation for greg.SYSTEM.ButtonChosenColor
path: /api/hooks/system/buttonchosencolor
---

# ButtonChosenColor

> **Hook ID:** `greg.SYSTEM.ButtonChosenColor`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonChosenColor

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonChosenColor()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonChosenColor` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonChosenColor", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonChosenColor");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonChosenColor", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonChosenColor received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonChosenColor fired")

greg.on("greg.SYSTEM.ButtonChosenColor", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonChosenColor", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonChosenColor triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonChosenColor".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonChosenColor", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonChosenColor fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
