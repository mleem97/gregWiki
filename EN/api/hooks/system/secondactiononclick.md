---
title: SecondActionOnClick
description: Documentation for greg.SYSTEM.SecondActionOnClick
path: /api/hooks/system/secondactiononclick
---

# SecondActionOnClick

> **Hook ID:** `greg.SYSTEM.SecondActionOnClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Interact.SecondActionOnClick

## Native Signature
```csharp
Il2Cpp.Interact::SecondActionOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SecondActionOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SecondActionOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SecondActionOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SecondActionOnClick", function(payload)
    greg.log("Hook greg.SYSTEM.SecondActionOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SecondActionOnClick fired")

greg.on("greg.SYSTEM.SecondActionOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SecondActionOnClick", (payload) => {
    console.log("Hook greg.SYSTEM.SecondActionOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SecondActionOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SecondActionOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SecondActionOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
