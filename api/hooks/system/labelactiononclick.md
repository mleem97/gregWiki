---
title: LabelActionOnClick
description: Documentation for greg.SYSTEM.LabelActionOnClick
path: /api/hooks/system/labelactiononclick
---

# LabelActionOnClick

> **Hook ID:** `greg.SYSTEM.LabelActionOnClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Interact.LabelActionOnClick

## Native Signature
```csharp
Il2Cpp.Interact::LabelActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LabelActionOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LabelActionOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LabelActionOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LabelActionOnClick", function(payload)
    greg.log("Hook greg.SYSTEM.LabelActionOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LabelActionOnClick fired")

greg.on("greg.SYSTEM.LabelActionOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LabelActionOnClick", (payload) => {
    console.log("Hook greg.SYSTEM.LabelActionOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LabelActionOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LabelActionOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LabelActionOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
