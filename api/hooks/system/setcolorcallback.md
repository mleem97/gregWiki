---
title: setColorCallback
description: Documentation for greg.SYSTEM.setColorCallback
path: /api/hooks/system/setcolorcallback
---

# setColorCallback

> **Hook ID:** `greg.SYSTEM.setColorCallback`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PulsatingText.setColorCallback

## Native Signature
```csharp
Il2Cpp.PulsatingText::setColorCallback(Color)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `setColorCallback` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.setColorCallback", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.setColorCallback");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.setColorCallback", function(payload)
    greg.log("Hook greg.SYSTEM.setColorCallback received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.setColorCallback fired")

greg.on("greg.SYSTEM.setColorCallback", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.setColorCallback", (payload) => {
    console.log("Hook greg.SYSTEM.setColorCallback triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.setColorCallback".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.setColorCallback", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.setColorCallback fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
